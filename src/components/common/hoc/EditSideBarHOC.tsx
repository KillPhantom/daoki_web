import { useState } from "react";
import type { ComponentType } from "react";
import EditSideBarComponent from "../../createPage/EditSideBar";

type InjectedPropsType = {};

type HocOnlyPropsType = {
  onDelete?: () => void;
  onMoveItemUp?: () => void;
  onMoveItemDown?: () => void;
  overrideRight?: string;
  overrideBottom?: string;
};

const EditSideBarHOC = <P extends InjectedPropsType = InjectedPropsType>(
  WrappedComponents: ComponentType<P>
): ComponentType<Omit<P, keyof InjectedPropsType> & HocOnlyPropsType> => {
  const EditSideBar = ({
    onDelete,
    onMoveItemDown,
    onMoveItemUp,
    overrideRight,
    overrideBottom,
    ...propsToPass
  }: Omit<P, keyof InjectedPropsType> & HocOnlyPropsType) => {
    const [showEditBar, setShowEditBar] = useState(false);
    let timeOut: any;
    return (
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => {
          setShowEditBar(true);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          timeOut = setTimeout(() => {
            setShowEditBar(false);
          }, 800);
        }}
      >
        <WrappedComponents {...(propsToPass as unknown as P)} />
        {showEditBar && (
          <EditSideBarComponent
            onClickDelete={onDelete}
            onClickDown={onMoveItemDown}
            onClickUp={onMoveItemUp}
            overrideRight={overrideRight}
            overrideBottom={overrideBottom}
          />
        )}
      </div>
    );
  };
  return EditSideBar;
};

export default EditSideBarHOC;
