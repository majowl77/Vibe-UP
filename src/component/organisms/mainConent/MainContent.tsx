import HomePosts from "../../molecules/homePosts/HomePosts";
import MenuBar from "../../molecules/menu/MenuBar";
import { Header } from "../header/Header";

export default function MainContent() {
  return (
    <div className="MainContent">
      <div>
        <Header />
      </div>
      <div className="bodyOfMainContent">
        <MenuBar />
        <HomePosts />
      </div>
    </div>
  );
}
