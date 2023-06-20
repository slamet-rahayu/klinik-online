/* eslint-disable @next/next/no-img-element */
import { Container } from "@/modules/bootstrap/components";
import { ReactElement } from "react";

export default function ShopBanner(): ReactElement {
  return (
    <div>
      <Container>
        <img
          className="rounded-3xl my-10"
          src="/assets/image/In_App_Banner_Obat_Rutin_Desember_1500_x_500_13f9363d8b.webp"
          alt="beli obat lebih murah"
        />
      </Container>
    </div>
  );
}
