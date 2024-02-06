import BasicCheckbox from "../../atoms/Checkbox/BasicCheckbox";
import MenuBar from "../../molecules/menu/MenuBar";
import { Header } from "../header/Header";

export default function MainContent() {
  return (
    <div className="mainContent">
      <div className="bodyOfMainContent">
        <BasicCheckbox />
      </div>
    </div>
  );
}
