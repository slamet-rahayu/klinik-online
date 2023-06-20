import { ReactElement } from "react";
import { Header, Footer } from "@/modules/bootstrap/components";
import HeroBanner from "./hero-banner";
import MainMenu from "./main-menu";
import Articles from "./articles";
import About from "./about";

export default function HomePage(): ReactElement {
  return (
    <div>
      <Header />
      <HeroBanner />
      <MainMenu />
      <Articles />
      <About />
      <Footer />
    </div>
  );
}
