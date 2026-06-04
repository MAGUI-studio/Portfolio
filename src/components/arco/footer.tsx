import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "@phosphor-icons/react/dist/ssr";

import { ScrollTopLink } from "@/components/scroll-top-link";

import { arcoImages, arcoNav, arcoWhatsapp } from "./data";
import { ActionLink, Eyebrow } from "./ui";

export function ArcoFooter() {
  return (
    <footer id="contato" className="bg-[#123A5C] text-white">
      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <Image
          src={arcoImages.facade}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#123A5C]/84" />
        <div className="relative grid gap-10 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
          <div>
            <Eyebrow light>ARCO Odontologia</Eyebrow>
            <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
              Um sorriso pode mudar a forma como voce se ve e se conecta com o
              mundo.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Agende uma avaliacao para entender prioridades, possibilidades e
              o melhor plano para o seu momento.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <ActionLink light>Agendar pelo WhatsApp</ActionLink>
          </div>
        </div>
      </section>

      <div className="border-t border-white/14 px-5 py-12 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.22fr_0.4fr]">
          <div>
            <Image
              src={arcoImages.logoWhite}
              alt="ARCO Odontologia"
              width={190}
              height={58}
              className="h-auto w-40"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Odontologia moderna, transparente e humana para cuidar de saude,
              autoestima e confianca.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase text-white/70">Navegacao</p>
            <div className="mt-5 grid gap-3 text-sm text-white/62">
              {arcoNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-5 text-sm text-white/66 md:grid-cols-2">
            <div className="flex gap-3">
              <MapPin size={21} weight="thin" className="shrink-0 text-[#B8D9EA]" />
              <span>
                Clinica odontologica moderna
                <br />
                Consulte nossa localizacao
              </span>
            </div>
            <div className="flex gap-3">
              <Clock size={21} weight="thin" className="shrink-0 text-[#B8D9EA]" />
              <span>
                Atendimento com hora marcada
                <br />
                Segunda a sexta, 8h as 19h
              </span>
            </div>
            <Link
              href={arcoWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white transition-colors hover:text-[#B8D9EA]"
            >
              WhatsApp para agendamento
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/14 px-5 py-5 text-xs text-white/50 md:px-10 lg:px-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{new Date().getFullYear()} ARCO Odontologia.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-[#B8D9EA]"
              >
                <strong>MAGUI</strong>
                <span className="text-[#B8D9EA]">.</span>studio
              </Link>
            </span>
            <span className="text-white/20">|</span>
            <ScrollTopLink className="text-white transition-colors hover:text-[#B8D9EA]">
              Voltar ao topo
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
