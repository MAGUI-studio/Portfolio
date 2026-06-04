import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";

import { arcoImages } from "./data";
import { Eyebrow } from "./ui";

const testimonials = [
  {
    name: "Isabela Lacerda",
    text: "A equipe explicou cada etapa com calma. Senti seguranca desde a primeira avaliacao.",
    image: arcoImages.avatarIsabela,
  },
  {
    name: "Lucas Ribeiro",
    text: "O planejamento ficou muito claro e o acompanhamento fez toda diferenca no tratamento.",
    image: arcoImages.avatarLucas,
  },
  {
    name: "Nicole Dias",
    text: "Ambiente acolhedor, atendimento humano e resultado natural. Foi uma experiencia muito leve.",
    image: arcoImages.avatarNicole,
  },
];

export function ArcoTestimonialsSection() {
  return (
    <section className="bg-[#F8FCFE] px-5 py-20 text-[#123A5C] md:px-10 md:py-28 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
        <div>
          <Eyebrow>Pacientes</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Atendimento que deixa o processo mais leve.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-lg border border-[#1F5687]/10 bg-white p-6 shadow-[0_20px_60px_rgba(31,86,135,0.06)]">
              <div className="flex gap-1 text-[#1F5687]" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={15} weight="fill" />
                ))}
              </div>
              <p className="mt-7 leading-7 text-[#4A6477]">{item.text}</p>
              <div className="mt-8 flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={`Foto de ${item.name}`}
                  width={56}
                  height={56}
                  className="size-14 rounded-lg object-cover"
                />
                <p className="font-bold">{item.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
