import { ReactElement } from "react";
import Link from "next/link";
import Container from "../container";
import cx from "classnames";

const menu = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Konsultasi",
      href: "/konsultasi",
    },
    {
      title: "Toko Obat",
      href: "/shop",
    },
  ];

export default function Header(): ReactElement {
  return (
    <header className="h-[64px] border-b bg-white flex items-center">
      <Container>
        <div className="flex justify-between items-center">
          <h1>Klinik Online</h1>
          <div className="flex">
            <nav className="mr-[200px] flex items-center">
              <ul className="flex">
                {menu.map((item) => (
                  <li
                    key={item.title}
                    className="mr-[40px] text-gray-400 font-semibold"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              type="button"
              className={cx(
                "rounded-3xl",
                "border-green-600",
                "text-green-600",
                "border",
                "text-sm",
                "px-3",
                "py-2",
                "font-semibold",
                "hover:text-white",
                "hover:bg-green-600"
              )}
            >
              Sign in
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
