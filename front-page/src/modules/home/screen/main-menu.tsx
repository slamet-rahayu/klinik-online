/* eslint-disable @next/next/no-img-element */
import { ReactElement } from "react";
import { Container } from "@/modules/bootstrap/components";
import cx from "classnames";
import Carousel from "react-multi-carousel";

const menu = [
  {
    name: "Temu Dokter",
    icon: "/assets/icon/janjitemudokter.png",
  },
  {
    name: "Baca Artikel",
    icon: "/assets/icon/lihat-artikel.svg",
  },
  {
    name: "Toko Kesehatan",
    icon: "/assets/icon/toko-obat.svg",
  },
];

const spesialis = [
  {
    name: "Batuk Flu",
    icon: "/assets/icon/batuk_flu_27a6278ae1.png",
  },
  {
    name: "Dermatitis",
    icon: "/assets/icon/dermatitis_f7c20fe38c.png",
  },
  {
    name: "Anak",
    icon: "/assets/icon/anak_a7bcb118b8.png",
  },
  {
    name: "Kedokteran Jiwa",
    icon: "/assets/icon/Kedokteran_Jiwa_ac898a4a6a.png",
  },
  {
    name: "Psikolog",
    icon: "/assets/icon/Psikolog_f0473e10ca.png",
  },
  {
    name: "Penyakit Dalam",
    icon: "/assets/icon/Penyakit_Dalam_c924587401.png",
  },
  {
    name: "Kulit dan Kelamin",
    icon: "/assets/icon/kulit_c061f3aa11.png",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MainMenu(): ReactElement {
  return (
    <div className="bg-[#e8eff2] pb-14">
      <Container>
        <div className="flex bg-white w-fit px-3 py-5 rounded-full shadow-lg mx-auto mt-[-50px] relative">
          {menu.map((item) => (
            <div key={item.name} className="flex items-center mx-5">
              <img width={50} height={50} src={item.icon} alt={item.name} />
              <p className="ml-2 text-[#535556] font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 mb-8">
          <h2 className="text-[#535556] text-2xl font-semibold">Dokter Spesialis</h2>
        </div>
        <Carousel responsive={responsive} draggable arrows={false}>
          {spesialis.map((item) => (
            <div
              key={item.name}
              className={cx(
                "bg-white",
                "rounded-3xl",
                "flex",
                "flex-col",
                "items-center",
                "justify-center",
                "w-[202px]",
                "h-[202px]",
                "hover:border-green-600",
                "hover:border-2"
              )}
            >
              <img width={80} height={80} src={item.icon} alt={item.name} />
              <p className="text-[#7c8081] font-semibold mt-2">{item.name}</p>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
