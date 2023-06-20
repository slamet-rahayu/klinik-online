/* eslint-disable @next/next/no-img-element */
import { ReactElement } from "react";
import { Container } from "@/modules/bootstrap/components";
import cx from "classnames";

export default function SearchBar(): ReactElement {
  return (
    <div className=" bg-[#61c7b5] py-3">
      <Container>
        <div className="flex">
          <input
            type="search"
            placeholder="cari obat"
            className={cx("bg-white", "rounded-3xl", "py-2", "px-4", "w-full", "outline-none")}
          />
          <button type="button" className="mx-2">
            <img src="/assets/icon/cart_icon_white.svg" alt="cart" />
          </button>
          <button type="button" className="mx-2">
            <img src="/assets/icon/Receipt.svg" alt="transaksi" />
          </button>
        </div>
      </Container>
    </div>
  );
}
