import { useState } from "react";
import type { ComponentType } from "react";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

type InjectedPropsType = {};

type PropsType = {};

const ContextMenuHOC = <P extends InjectedPropsType = InjectedPropsType>(
  WrappedComponents: ComponentType<P>
): ComponentType<P> => {
  const ContextMenu = ({ ...propsToPass }: PropsType) => {
    const { toggleMenu, ...menuProps } = useMenuState();
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

    const onLogClick = () => {
      let selection = document.getSelection();
      let selRange = selection?.getRangeAt(0);
      // do stuff with the range

      console.log(selection?.toString()); // Selection object
    };

    return (
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setAnchorPoint({ x: e.clientX, y: e.clientY });
          toggleMenu(true);
        }}
      >
        <WrappedComponents {...(propsToPass as P)} />
        <ControlledMenu
          {...menuProps}
          anchorPoint={anchorPoint}
          onClose={() => toggleMenu(false)}
        >
          <MenuItem onClick={onLogClick}>Log Select Text</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </ControlledMenu>
      </div>
    );
  };
  return ContextMenu;
};

export default ContextMenuHOC;
