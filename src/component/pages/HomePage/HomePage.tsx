import React from "react";
import Recommendation from "../../template/recommendation/Recommendation";
import MainContent from "../../organisms/mainConent/MainContent";
import { Header } from "../../organisms/header/Header";

export default function HomePage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Recommendation />
      <MainContent />
    </div>
  );
}
