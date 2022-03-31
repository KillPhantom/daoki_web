import { useState } from "react";
import type { ComponentType } from "react";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

type InjectedPropsType = {};

type HocOnlyPropsType = {
  onActionClick?: () => void;
};

const ContextMenuHOC = <P extends InjectedPropsType = InjectedPropsType>(
  WrappedComponents: ComponentType<P>
): ComponentType<Omit<P, keyof InjectedPropsType> & HocOnlyPropsType> => {
  const ContextMenu = ({
    onActionClick,
    ...propsToPass
  }: Omit<P, keyof InjectedPropsType> & HocOnlyPropsType) => {
    const { toggleMenu, ...menuProps } = useMenuState();
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

    // const onLogClick = () => {
    //   let selection = document.getSelection();
    //   let selRange = selection?.getRangeAt(0);
    //   // do stuff with the range

    //   console.log(selection?.toString()); // Selection object
    // };

    return (
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setAnchorPoint({ x: e.clientX, y: e.clientY });
          toggleMenu(true);
        }}
      >
        <WrappedComponents {...(propsToPass as unknown as P)} />
        <ControlledMenu
          {...menuProps}
          anchorPoint={anchorPoint}
          onClose={() => toggleMenu(false)}
        >
          <MenuItem onClick={() => {}}>Delete</MenuItem>
        </ControlledMenu>
      </div>
    );
  };
  return ContextMenu;
};

export default ContextMenuHOC;
