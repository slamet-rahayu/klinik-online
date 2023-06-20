/* eslint-disable @next/next/no-img-element */
import { ReactElement } from "react";
import { Container } from "@/modules/bootstrap/components";

export default function HeroBanner(): ReactElement {
  return (
    <div className="relative">
      <img
        src="/assets/image/section-one-image-background.1c54f2a2.png"
        alt="section"
      />
      <div className="absolute top-[100px] w-full">
        <Container className="z-10">
          <div className="max-w-[300px]">
            <h1 className="text-[30px] font-semibold text-[#4a4b4c]">Konsultasi dengan<br /> Dokter Spesialis</h1>
            <p className="text-[#535556] mt-3">
              Dapatkan solusi untuk <br />
              masalah kesehatan Anda <br />
              dari dokter spesialis <br />
              yang berpengalaman <br />
            </p>
            <button type="button" className="py-2 px-3 rounded-3xl bg-[#61c7b5] w-full mt-10">
              <p className="text-white font-semibold">Konsultasi Sekarang</p>
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
