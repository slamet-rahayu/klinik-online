import { ReactElement } from "react";
import { Container } from "@/modules/bootstrap/components";

const products = [
  { 
    name: "Calnic", 
    image:"/assets/image/Calnic_400mg_10_Kaplet_96583104f2.png",
    price: 10000
  },
  { 
    name: "CDR", 
    image:"/assets/image/Calnic_400mg_10_Kaplet_96583104f2.png",
    price: 12000
  },
  { 
    name: "Curvit", 
    image:"/assets/image/Calnic_400mg_10_Kaplet_96583104f2.png",
    price: 15000
  },
  { 
    name: "Elkana", 
    image:"/assets/image/Calnic_400mg_10_Kaplet_96583104f2.png",
    price: 20000
  },
  { 
    name: "Ovacare", 
    image:"/assets/image/Calnic_400mg_10_Kaplet_96583104f2.png",
    price: 25000
  },
  { 
    name: "Theragram", 
    image:"/assets/image/Calnic_400mg_10_Kaplet_96583104f2.png",
    price: 30000
  },
]

export default function ProductList(): ReactElement {
  return (
    <Container>
      <div className="flex w-full items-center justify-between my-8">
        <h2 className="font-semibold text-xl text-[#2c528b]">
          Obat Untuk Vitamin dan suplemen
        </h2>
        <p className="text-sm text-[#61C7B5]">Lihat Semua</p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div 
            key={product.name} 
            className="rounded-2xl px-4 py-8 mb-4" 
            style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 8px 8px" }}
          >
            <img src={product.image} alt={product.name} />
            <p className="text-[#3a3a3c] font-medium mb-2">{product.name}</p>
            <p className="text-[#3a3a3c] font-semibold">Rp. {product.price}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
