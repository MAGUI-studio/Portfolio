import Image from "next/image";
import { bitesImages } from "./data";
import { bitesHeading } from "./fonts";
import { HeartIcon } from "@phosphor-icons/react/ssr";

export function BitesBrandSection() {
  return (
    <section
      id="marca"
      className="bg-[#F5F5F5] px-4 py-20 text-[#030401] md:px-8 md:py-28"
    >
      <div className="grid gap-5 lg:grid-cols-[0.46fr_0.54fr]">
        <div className="relative overflow-hidden rounded-none bg-[#FB5F00] p-8 text-white md:p-10 flex flex-col justify-between min-h-100">
          <div className="absolute -right-12 -top-24 text-[#ffd8df]/05 pointer-events-none select-none">
            <HeartIcon
              size={1500}
              weight="duotone"
              className="opacity-25"
            />
          </div>

          <div className="relative z-10 mt-auto flex flex-col items-start w-full">
            <h2
              className={`${bitesHeading.className} mt-6 text-6xl font-extrabold leading-[0.88] tracking-[-0.05em] md:text-8xl text-white`}
            >
              Aqui não preparamos salgados genéricos.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed border-l pl-8">
              A BITES é uma marca de comfort food premium, conveniência e
              desejo. Clássicos irresistíveis com identidade própria.
            </p>
          </div>
        </div>

        <div className="relative min-h-[620px] overflow-hidden rounded-[2rem]">
          <Image
            src={bitesImages.fachada}
            alt="Fachada moderna da Bites"
            fill
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
