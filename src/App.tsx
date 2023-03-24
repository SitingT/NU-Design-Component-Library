import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menuItem";
import SubMenu from "./components/menu/subMenu";
import Icon from "./components/Icon/icon";
import Input from "./components/Input/input";
import DigitalClock from "./components/DigitalClock.tsx/digitalClock";
//import { library, Library } from "@fortawesome/fontawesome-svg-core";
//import { fas } from "@fortawesome/free-solid-svg-icons";
//library.add(fas);

function App() {
  return (
    <div className="App">
      <DigitalClock />
      {/* <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        Hello
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="https://www.google.com/"
        target={"_blank"}
      >
        Hello
      </Button> */}
      {/* <Icon icon="coffee" theme="danger" size="4x" />
      <Menu mode="vertical">
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>

        <SubMenu title="drop down">
          <MenuItem>dropDown1</MenuItem>
          <MenuItem>dropDown2</MenuItem>
          <MenuItem>dropDown3</MenuItem>
        </SubMenu>
      </Menu> */}
    </div>
  );
}

export default App;
