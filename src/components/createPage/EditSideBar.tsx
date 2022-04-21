/* Styled Components */
import { Wrapper, IconDivider } from "../../styles/createPage/EditSideBar";

/* Child Components */
import DeleteIcon from "../common/icons/DeleteIcon";
import MoveUpIcon from "../common/icons/MoveUpIcon";
import MoveDownIcon from "../common/icons/MoveDownIcon";

type PropsType = {
  onClickDelete?: () => void;
  onClickUp?: () => void;
  onClickDown?: () => void;
  overrideRight?: string;
  overrideBottom?: string;
};
const EditSideBar = ({
  onClickDelete,
  onClickUp,
  onClickDown,
  overrideRight,
  overrideBottom,
}: PropsType) => {
  return (
    <Wrapper right={overrideRight} bottom={overrideBottom}>
      {onClickDelete && (
        <DeleteIcon
          overrideStyle={{ margin: "2px 0 0 2px" }}
          onClick={onClickDelete}
        />
      )}

      {onClickUp && (
        <>
          <IconDivider />
          <MoveUpIcon overrideStyle={{ margin: "2px" }} onClick={onClickUp} />
        </>
      )}
      {onClickDown && (
        <>
          <IconDivider />
          <MoveDownIcon
            overrideStyle={{ margin: "2px " }}
            onClick={onClickDown}
          />
        </>
      )}
    </Wrapper>
  );
};

export default EditSideBar;
