/* eslint-disable @next/next/no-img-element */
import { Container } from "@/modules/generic/components";
import { ReactElement } from "react";

export default function About(): ReactElement {
  return (
    <div className="mt-10 mb-28">
      <Container>
        <div className="flex">
          <img src="/assets/image/gambar-tentang-kami.png" alt="tentang" />
          <div className="ml-8 mt-12">
            <h2 className="mb-4 text-[#535556] text-3xl font-semibold">Tentang Kami</h2>
            <div className="new-altea-about-us-deskripsi">
              <p className="mb-2 text-[#535556] font-semibold">
                Kami hadir untuk menjembatani interaksi antara pasien dan
                dokter melalui solusi platform layanan yang terintegrasi dan
                terlengkap.
              </p>
              <p className="mb-2 text-[#535556] font-semibold">
                Dapatkan layanan kesehatan lengkap mulai dari telekonsultasi
                dengan dokter spesialis secara virtual, rujukan untuk
                pemeriksaan lanjutan, pembelian dan pengiriman obat resep,
                hingga pemesanan vitamin dan suplemen.
              </p>
              <p className="mb-2 text-[#535556] font-semibold">
                Semua layanan ini bisa Anda dapatkan dalam situs resmi kami. Segera gunakan
                Layannan Kami dan manfaatkan berbagai promo menarik telekonsultasi
                dan pembelian obat, serta dapatkan informasi kesehatan terbaru
                yang didukung oleh penelitian terkini.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
