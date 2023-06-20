import { ReactElement } from "react";
import ShopBanner from "./banner";
import { Header } from "@/modules/bootstrap/components";
import { SearchBar } from "../components";
import ShopCategories from "./categories";

export default function Shop(): ReactElement {
  return (
    <div>
      <Header />
      <SearchBar />
      <ShopBanner />
      <ShopCategories />
    </div>
  );
}
