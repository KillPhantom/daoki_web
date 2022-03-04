import { Menu } from "antd";

/* Styled Components */
import { MenuText } from "../../styles/createPage/CreateProjectPage";

/* Types */
import type { MenuItemType } from "../../data/types/CommonTypes";

type PropsType = {
  menu: Array<MenuItemType>;
};
const CreateProjectMenu = ({ menu }: PropsType) => {
  return (
    <Menu
      style={{
        boxShadow: "0px 14px 28px 0px rgba(30, 96, 218, 0.1)",
        borderRadius: "4px",
        border: "1px solid #DCE7DF",
      }}
    >
      {menu.map((item, index) => {
        return (
          <>
            <Menu.Item key={`menu-${index}`} onClick={item.menuOnClick}>
              <MenuText>{item.menuText}</MenuText>
            </Menu.Item>
            <Menu.Divider />
          </>
        );
      })}
    </Menu>
  );
};

export default CreateProjectMenu;
