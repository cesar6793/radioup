// 'use client'
import Image from "next/image";
import Breadcrumbs from "../breadcrumbs";
import { Routers } from "@config/routers";
import Link from "next/link";

const { footer } = Routers;

const Footer: React.FC = () => {
  return (
    <footer className="relative footer px-4 py-9 md:py-8 md:px-20 bg-repeat bg-[length:100px_200px] bg-left">
      <div>
        <Breadcrumbs name="Página principal" href="/" />
      </div>
      <div className="md:grid md:grid-cols-3 gap-4">
        <div>
          <Image
            src="/logo.svg"
            width={195}
            height={92}
            alt="eusebio"
            className="md:hidden"
          />
          <Image
            src="/logo-blue2.svg"
            width={260}
            height={120}
            alt="eusebio"
            className="hidden md:block"
          />
        </div>
        <div className=" pb-10">
          <p className="title pb-4 text-lg md:text-[20px] font-black font-eusebio-title leading-6 text-wrap">
            RadioUP
          </p>
          <ul className="flex flex-col font-eusebio-paragraph text-base md:text-lg md:flex md:flex-col">
            {footer.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`opacity-50 hover:opacity-100 ${
                  index === 0 ? "pt-0" : "pt-2"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p className="title pb-4 text-lg md:text-[20px] font-black font-eusebio-title leading-6">
            Encuéntranos
          </p>
          <div className="email pb-4 md:mb-3">
            <small className="block text-slate-400 text-xs lg:text-sm font-eusebio-paragraph">
              Correo electrónico
            </small>
            <a
              className="font-semibold text-base md:text-[20px] font-eusebio-paragraph"
              rel="stylesheet"
              href="mailto:contacto@eusebioarroniz.edu.pe"
            >
              contacto@up.edu.pe
            </a>
          </div>
          <div className="whatsapp pb-4 md:mb-3">
            <small className="block text-slate-400 text-xs lg:text-sm font-eusebio-paragraph">
              Whatsapp
            </small>
            <a
              className="font-semibold"
              rel="stylesheet"
              href="https://wa.me/+51999333222"
              target="_blank"
            >
              <p className="font-eusebio-paragraph text-base md:text-[20px]">
                (+51) 999 333 222
              </p>
            </a>
          </div>
          <div className="address">
            <small className="block text-slate-400 text-xs lg:text-sm font-eusebio-paragraph">
              Dirección
            </small>
            <p className="text-base md:text-[20px] font-eusebio-paragraph">
              <a
                rel="stylesheet"
                href="https://maps.app.goo.gl/TsmCeJZNS2ZhSWFX8"
                target="_blank"
              >
                Prolongación Primavera 2390, Santiago de Surco 15023 - Lima, Perú
              </a>
            </p>
          </div>
          <div className="social flex gap-3.5 pt-10">
            <a
              className="w-14 rounded-full h-14 flex justify-center align-center opacity-100 hover:bg-eusebio-red-400"
              href="https://www.facebook.com/profile.php?id=61551423861340&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/social/facebook.svg"
                width={24}
                height={24}
                alt="facebook"
              />
            </a>
            <a
              className="w-14 rounded-full h-14 flex justify-center align-center opacity-100 hover:bg-eusebio-red-400"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/social/instagram.svg"
                width={24}
                height={24}
                alt="instagram"
              />
            </a>
            <a
              className="w-14 rounded-full h-14 flex justify-center align-center opacity-100 hover:bg-eusebio-red-400"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/social/youtube.svg"
                width={24}
                height={24}
                alt="youtube"
              />
            </a>
            <a
              className="w-14 rounded-full h-14 flex justify-center align-center opacity-100 hover:bg-eusebio-red-400"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/social/linkedin.svg"
                width={24}
                height={24}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center justify-items-center pt-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left text-eusebio-white-100 font-eusebio-paragraph md:font-eusebio-title-medium text-sm md:text-base not-italic font-normal md:font-medium leading-5 md:leading-6 opacity-70">
          Copyright © 2023. RadioUP 2024. Todos los derechos reservados
        </div>
        <Link
          href="/libro-de-reclamaciones"
          className="pb-9 text-center text-base font-medium font-eusebio-title flex justify-center items-center"
        >
          <Image
            src="/social/book.svg"
            width={28}
            height={28}
            alt="eusebio"
            className="mr-4"
          />
          Libro de reclamos
        </Link>
      </div>

      <p className="opacity-0 h-0">
        Web disenada y creada por{" "}
        <a href="https://www.wuality.agency/">Wuality</a>
      </p>

      {/* lienar */}
      <div
        className="bg-no-repeat bg-cover bg-center max-w-[520px] w-full h-full absolute bottom-0 left-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/lines-footer.svg')",
        }}
      ></div>
    </footer>
  );
};

export default Footer;
