import { useState } from "react";
import type { ComponentType } from "react";
import EditSideBarComponent from "../../createPage/EditSideBar";

type InjectedPropsType = {};

type HocOnlyPropsType = {
  onDelete?: () => void;
  onMoveItemUp?: () => void;
  onMoveItemDown?: () => void;
};

const EditSideBarHOC = <P extends InjectedPropsType = InjectedPropsType>(
  WrappedComponents: ComponentType<P>
): ComponentType<Omit<P, keyof InjectedPropsType> & HocOnlyPropsType> => {
  const EditSideBar = ({
    onDelete,
    onMoveItemDown,
    onMoveItemUp,
    ...propsToPass
  }: Omit<P, keyof InjectedPropsType> & HocOnlyPropsType) => {
    const [showEditBar, setShowEditBar] = useState(false);
    return (
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setShowEditBar(true)}
        onMouseLeave={() => setShowEditBar(false)}
      >
        <WrappedComponents {...(propsToPass as unknown as P)} />
        {showEditBar && (
          <EditSideBarComponent
            onClickDelete={onDelete}
            onClickDown={onMoveItemDown}
            onClickUp={onMoveItemUp}
          />
        )}
      </div>
    );
  };
  return EditSideBar;
};

export default EditSideBarHOC;
