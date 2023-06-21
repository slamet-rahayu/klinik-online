import { ReactElement } from "react";
import ShopBanner from "./banner";
import { Header, Footer } from "@/modules/bootstrap/components";
import { SearchBar } from "../components";
import ShopCategories from "./categories";
import ProductList from "./product-list";

export default function Shop(): ReactElement {
  return (
    <div>
      <Header />
      <SearchBar />
      <ShopBanner />
      <ShopCategories />
      <ProductList />
      <Footer />
    </div>
  );
}
