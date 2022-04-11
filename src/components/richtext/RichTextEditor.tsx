// @ts-nocheck
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { connect } from "react-redux";
import isHotkey from "is-hotkey";
import isUrl from "is-url";
import { css } from "@emotion/css";
import imageExtensions from "image-extensions";
import {
  Editable,
  withReact,
  useSlate,
  Slate,
  useSlateStatic,
  useSelected,
  useFocused,
  ReactEditor,
} from "slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
  Range,
} from "slate";
import { withHistory } from "slate-history";

import { Button, Icon, Toolbar } from "./Components";
import LinkInputBox from "./LinkInputBox";
import EditSideBarHOC from "../common/hoc/EditSideBarHOC";

/* Styled Components */
import {
  Wrapper,
  EditorTitleWrapper,
  EditorTitleInput,
} from "../../styles/createPage/RichTextEditor";

/* Actions */
import { updateTextContent } from "../../data/actions/CreatePageActions";

import type { RichTextType } from "../../data/types/CommonTypes";

import { DATA_TYPE } from "../../data/Constants";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+s": "strike",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const mapDispatchToProps = (dispatch: any) => ({
  updateText: (richText: RichTextType) => dispatch(updateTextContent(richText)),
});

type OwnPropsType = {
  position: number;
  richTextData?: any;
};
type PropsType = ReturnType<typeof mapDispatchToProps> & OwnPropsType;

const RichTextEditor = ({ updateText, position, richTextData }: PropsType) => {
  const initialValue: Descendant[] = richTextData?.body;

  const [value, setValue] = useState<Descendant[]>(initialValue);
  const [title, setTitle] = useState(richTextData?.title ?? "");
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withImages(withInlines(withHistory(withReact(createEditor())))),
    []
  );
  const [showToolBar, setShowToolBar] = useState(true);
  const [showLinkInputBox, setShowInputBox] = useState(false);
  const wrapperRef = useRef(null);

  const handleRichTextClickOutside = (event) => {
    if (
      wrapperRef &&
      !wrapperRef.current.contains(event.target) &&
      !showLinkInputBox
    ) {
      setShowToolBar(!showToolBar);
      updateText({
        body: value,
        id: position,
        title,
        type: DATA_TYPE.RICH_TEXT,
      });
      document.removeEventListener("mousedown", handleRichTextClickOutside);
    }
  };

  useEffect(() => {
    if (showToolBar) {
      document.addEventListener("mousedown", handleRichTextClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleRichTextClickOutside);
    };
  }, [showLinkInputBox, showToolBar, value, title]);

  return (
    <>
      <Wrapper
        ref={wrapperRef}
        onClick={() => setShowToolBar(true)}
        showToolBar={showToolBar}
        id={`#${richTextData?.id}`}
      >
        {(showToolBar || title) && (
          <EditorTitleWrapper>
            <EditorTitleInput
              type="text"
              placeholder="Put down your title"
              disabled={!showToolBar}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </EditorTitleWrapper>
        )}
        <Slate
          editor={editor}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        >
          {showToolBar && (
            <Toolbar>
              <MarkButton format="bold" icon="format_bold" />
              <MarkButton format="italic" icon="format_italic" />
              <MarkButton format="underline" icon="format_underlined" />
              <MarkButton format="strike" icon="strikethrough_s" />
              <BlockButton format="heading-one" icon="looks_one" />
              <BlockButton format="heading-two" icon="looks_two" />
              <BlockButton format="block-quote" icon="format_quote" />
              <BlockButton format="numbered-list" icon="format_list_numbered" />
              <BlockButton format="bulleted-list" icon="format_list_bulleted" />
              <AddLinkButton
                format="link"
                icon="link"
                showLinkInputBox={showLinkInputBox}
                setShowInputBox={setShowInputBox}
              />
              <InsertImageButton />
            </Toolbar>
          )}
          <Editable
            readOnly={!showToolBar}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            spellCheck
            autoFocus
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event as any)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }}
          />
        </Slate>
      </Wrapper>
    </>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  });
  const newProperties: Partial<SlateElement> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })
  );

  return !!match;
};

const isImageUrl = (url) => {
  if (!url) return false;

  if (!isUrl(url)) return false;
  return true;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext);
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = (props) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "image":
      return <Image {...props} />;
    case "link":
      return <LinkComponent {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const withImages = (editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.strike) {
    children = <s>{children}</s>;
  }

  return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const AddLinkButton = ({ format, icon, showLinkInputBox, setShowInputBox }) => {
  const editor = useSlate();
  // TODO add type for the link spec
  const [linkSpec, setLinkSpec] = useState({});

  const getLinkOfSelection = (editor) => {
    const { selection } = editor;
    if (!selection) return { value: "", description: "", isInternal: false };
    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) =>
          !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
      })
    );
    if (match) {
      return {
        value: match[0].url,
        description: match[0].description,
        isInternal: match[0].isInternal,
      };
    }
    return { value: "", description: "", isInternal: false };
  };

  const {
    value: initialUrl,
    description: initialDescription,
    isInternal, // TODO figure out a way to let user edit the internal look and the input book UI
  } = getLinkOfSelection(editor);
  useEffect(() => {
    if (linkSpec.value) {
      insertLink(
        editor,
        linkSpec.value,
        linkSpec.description,
        linkSpec.isInternal
      );
    }
  }, [linkSpec, editor]);

  return (
    <>
      <Button
        active={isBlockActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          setShowInputBox(true);
        }}
      >
        <Icon>{icon}</Icon>
      </Button>
      {showLinkInputBox && (
        <LinkInputBox
          visible={showLinkInputBox}
          initialUrl={initialUrl}
          initialDescription={initialDescription}
          onClose={() => setShowInputBox(false)}
          setInputValue={(
            value: string,
            description: string,
            isInternal: boolean
          ) => {
            setLinkSpec({
              value,
              description,
              isInternal,
            });
          }}
        />
      )}
    </>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const Image = ({ attributes, children, element }) => {
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);

  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      {children}
      <div
        contentEditable={false}
        className={css`
          position: relative;
        `}
      >
        <img
          alt=""
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
          `}
        />
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: ${selected && focused ? "inline" : "none"};
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
          `}
        >
          <Icon>delete</Icon>
        </Button>
      </div>
    </div>
  );
};

const InsertImageButton = () => {
  const editor = useSlateStatic();
  return (
    <Button
      onMouseDown={(event) => {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the image:");
        if (url && !isImageUrl(url)) {
          alert("URL is not an image");
          return;
        }
        insertImage(editor, url);
      }}
    >
      <Icon>image</Icon>
    </Button>
  );
};

const insertImage = (editor, url) => {
  const text = { text: "" };
  const image = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
};

/* Insert Link Logic  */

const withInlines = (editor) => {
  const { insertData, insertText, isInline } = editor;

  editor.isInline = (element) =>
    ["link"].includes(element.type) || isInline(element);

  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const insertLink = (editor, url, description, isInternal) => {
  if (editor.selection) {
    wrapLink(editor, url, description, isInternal);
  }
};
const isLinkActive = (editor) => {
  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });
  return !!link;
};

const unwrapLink = (editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });
};

const wrapLink = (
  editor,
  url: string,
  description: string,
  isInternal: boolean
) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link: LinkElement = {
    type: "link",
    url,
    description,
    isInternal,
    children: isCollapsed ? [{ text: url }] : [],
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};

const LinkComponent = ({ attributes, children, element }) => {
  const selected = useSelected();
  return (
    <a
      {...attributes}
      href={element.url}
      target="_blank"
      rel="noreferrer"
      className={
        selected
          ? css`
              box-shadow: 0 0 0 3px #ddd;
            `
          : ""
      }
    >
      {children}
    </a>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(EditSideBarHOC(RichTextEditor));
