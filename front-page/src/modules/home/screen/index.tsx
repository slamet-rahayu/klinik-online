import { ReactElement } from "react";
import { FooterHome, HeaderHome } from "../components";
import HeroBanner from "./hero-banner";
import MainMenu from "./main-menu";
import Articles from "./articles";
import About from "./about";

export default function HomePage(): ReactElement {
  return (
    <div>
      <HeaderHome />
      <HeroBanner />
      <MainMenu />
      <Articles />
      <About />
      <FooterHome />
    </div>
  );
}
