import { Fragment, useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";
import darkTheme from "prism-react-renderer/themes/vsDark";
import { AutoComplete } from "antd";

/* Styled Components */
import {
  CodeBlockWrapper,
  CodeBlockLanguageInputWrapper,
} from "../../styles/createPage/CodeBlock";

/* Constants */
import { DATA_TYPE, PRISM_SUPPORT_LANGUAGE } from "../../data/Constants";

/* Actions */
import { updateCodeSnippet } from "../../data/actions/CreatePageActions";
import { CodeTextType } from "../../data/types/CommonTypes";

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

const mapDispatchToProps = (dispatch: any) => ({
  updateCode: (code: CodeTextType) => dispatch(updateCodeSnippet(code)),
});

type PropsType = {
  position: number;
} & ReturnType<typeof mapDispatchToProps>;

const CodeBlock = ({ position, updateCode }: PropsType) => {
  const [code, setCode] = useState(exampleCode);
  const [language, setLanguage] = useState("javascript");
  const [enableEdit, setEnableEdit] = useState(true);
  const wrapperRef = useRef(null);

  const onValueChange = (code: string) => {
    setCode(code);
  };

  const onLanguageSelect = (value: string) => {
    setLanguage(value);
  };

  const onSearch = (value: string) => {
    setLanguage(value);
  };

  const handleRichTextClickOutside = (event: any) => {
    // @ts-ignore
    if (wrapperRef && !wrapperRef?.current.contains(event.target)) {
      setEnableEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleRichTextClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleRichTextClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!enableEdit) {
      updateCode({
        content: code,
        language: language,
        id: position,
        type: DATA_TYPE.CODE,
      });
    }
  }, [enableEdit]);

  const highlight = () => (
    <Highlight
      {...defaultProps}
      theme={enableEdit ? darkTheme : theme}
      code={code}
      // @ts-ignore
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </Fragment>
      )}
    </Highlight>
  );

  return (
    <CodeBlockWrapper ref={wrapperRef} onClick={() => setEnableEdit(true)}>
      <CodeBlockLanguageInputWrapper>
        <AutoComplete
          value={language}
          options={PRISM_SUPPORT_LANGUAGE}
          onSelect={onLanguageSelect}
          onSearch={onSearch}
          style={{ width: "100px" }}
        />
      </CodeBlockLanguageInputWrapper>
      <Editor
        disabled={!enableEdit}
        value={code}
        onValueChange={onValueChange}
        highlight={highlight}
        padding={10}
        //@ts-ignore
        style={{
          boxSizing: "border-box",
          fontFamily: '"Dank Mono", "Fira Code", monospace',
          width: "100%",
        }}
      />
    </CodeBlockWrapper>
  );
};

export default connect(null, mapDispatchToProps)(CodeBlock);
