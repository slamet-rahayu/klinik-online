/* eslint-disable @next/next/no-img-element */
import { Container } from "@/modules/generic/components";
import { ReactElement } from "react";

const articles = [
  {
    title: "Begini Cara Mengatasi Asam Urat yang Mendadak Kambuh",
    shortDesc:
      "Gangguan asam urat bisa diatasi tanpa harus jalani operasi. Bagaimana cara mengatasi asam urat yang paling efektif? Yuk simak berikut ini!",
    image: "/assets/image/1686131270071-Begini Cara Mengatasi Asam Urat yang Mendadak Kambuh-AlteaCare.png.png"
  },
  {
    title: "Mengenal Revenge Bedtime Procrastination & Dampaknya",
    shortDesc:
      "Revenge bedtime procrastination adalah penundaan waktu tidur demi bersenang-senang. Apa saja dampaknya? Yuk, simak penjelasannya!",
    image: "/assets/image/1686050298171-Mengenal Revenge Bedtime Procrastination & Dampaknya-AlteaCare.png.png"
  },
  {
    title: "6 Cara Membayar Utang Tidur yang Benar. Ubah Kebiasaan!",
    shortDesc:
      "Apa benar kekurangan tidur di weekdays, bisa ditebus saat weekend? Bisa saja, asal tahu cara yang benar! Yuk, ikuti cara membayar utang tidur berikut!",
    image: "/assets/image/1685972384081-6 Cara Membayar Utang Tidur yang Benar. Ubah Kebiasaan!-AlteaCare.png.png"
  },
  {
    title: "Mengenal Bibir Sumbing, Penyebab, dan Cara Mengatasinya",
    shortDesc:
      "Bibir sumbing adalah salah satu jenis kelainan yang sering dialami oleh bayi baru lahir. Simak penyebab hingga pengobatannya di sini!",
    image: "/assets/image/1685332188693-Mengenal Bibir Sumbing, Penyebab, dan Cara Mengatasinya-AlteaCare.png.png"
  },
];

export default function Articles(): ReactElement {
  return (
    <div className="py-5">
      <Container>
        <div className="mt-5 mb-8">
          <h2 className="text-[#535556] text-2xl font-semibold">
            Artikel Kesehatan Terbaru
          </h2>
        </div>
        <div className="flex justify-between">
          {articles.map((article) => (
            <div key={article.title} className="w-[255px]">
              <img className="rounded-xl" src={article.image} alt={article.title} />
              <h2 className="text-[#535556] font-semibold text-lg my-4">{article.title}</h2>
              <p className="text-[#535556]">{article.shortDesc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
