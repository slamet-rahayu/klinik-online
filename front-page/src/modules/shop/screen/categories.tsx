import { Container } from "@/modules/bootstrap/components";
import { ReactElement } from "react";

const categ = [
  { name: "Kolesterol", icon: "/assets/image/Kolestrol_8b121b60b9.png" },
  { name: "Antibiotik", icon: "/assets/image/Antibiotik_and_Anti_Jamur_d59bf5108b.png" },
  { name: "Alat Kesehatan", icon: "/assets/image/Alat_Kesehatan_1447a15bb9.png" },
  { name: "Paket Covid 19", icon: "/assets/image/Covid_19_8e39fa4780.png" },
  { name: "Vitamin & Suplemen", icon: "/assets/image/Vitamin_and_Suplemen_d30ec6808f.png" },
  { name: "Ibu dan anak", icon: "/assets/image/Ibu_and_Anak_7f863ce288.png" },
  { name: "Kategori Lainnya", icon: "/assets/image/other-category-icon.svg" },
]

export default function ShopCategories(): ReactElement {
  return (
    <Container>
      <h1 className="text-[#2C528B] text-[24px] font-semibold mb-3">
        Kategori Obat
      </h1>
      <div className="flex justify-between">
        {categ.map((item) => (
          <div key={item.name} className="max-w-[100px] w-full">
            <img
              src={item.icon}
              className="bg-[#dff4f0] rounded-full p-2 mx-auto mb-2"
              alt={item.name}
              width={80}
              height={80}
            />
            <p className="font-regular text-sm text-[#6b7588] text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
