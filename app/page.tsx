"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChefHat,
  Flame,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Globe2,
  Camera,
  Mail,
  Check,
X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const heroSlides = [
  {
    image: "/hero1.jpg",
    title: "What enters your kitchen, should deserve your trust.",
    text: "Thoughtfully crafted spices designed for households that care deeply about quality, consistency, and everyday cooking.",
    bottom: "COMING SOON",
  },
  {
    image: "/heroo.jpg",
    title: "Made for kitchens that cook with care.",
    text: "Pure ingredients, rich aroma, and dependable quality for everyday Indian meals.",
    bottom: "CRAFTED WITH CARE",
  },
  {
    image: "/hero.jpg",
    title: "The taste that brings everyone back to the table.",
    text: "Authentic flavour made for daily meals, festive recipes, and family moments.",
    bottom: "AUTHENTIC TASTE",
  },
];

const products = [
  "Turmeric Powder",
  "Red Chilli Powder",
  "Coriander Powder",
  "Garam Masala",
  "Essential Spice Blends",
];

const qualities = [
  "Dependable quality",
  "Consistent flavor",
  "Conscious sourcing",
  "Everyday usability",
  "Modern kitchen standards",
];

const future = [
  "Everyday kitchen essentials",
  "Packaged food categories",
  "E-commerce integration",
  "Quick-commerce accessibility",
  "Modern retail presence",
];



export default function Page() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <main className="overflow-hidden bg-[#F8F0E3] text-[#21140E]">
      {/* NAV */}
<nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080503]/70 backdrop-blur-2xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
    
    {/* CREATIVE STYLE LOGO */}
<a href="#" className="leading-none">
  <h1
    className="
      font-[family:var(--font-dmserif)]
      text-[40px]
      leading-[0.88]
      tracking-[-0.045em]
      text-white
    "
    style={{
      fontWeight: 400,
    }}
  >
    Dr. Kitchen
  </h1>

  <p
    className="
      mt-2
      pl-[2px]
      font-[family:var(--font-poppins)]
      text-[16px]
      font-medium
      tracking-[-0.03em]
      text-white
    "
  >
    Crafted for kitchens that care
  </p>
</a>

    {/* MENU */}
    <div className="hidden items-center gap-10 text-sm font-semibold text-white/70 md:flex">
      <a className="transition hover:text-[#F8D18A]" href="#story">
        Story
      </a>
      <a className="transition hover:text-[#F8D18A]" href="#process">
        Why Dr. Kitchen
      </a>
      <a className="transition hover:text-[#F8D18A]" href="#quality">
        Quality
      </a>
      <a className="transition hover:text-[#F8D18A]" href="#vision">
        Vision
      </a>
    </div>

    {/* CTA */}
    <button className="rounded-full border border-[#F8D18A]/40 bg-[#F8D18A] px-6 py-3 text-sm font-black text-[#120905] shadow-[0_12px_40px_rgba(248,209,138,.2)] transition hover:bg-white">
      Coming Soon
    </button>
  </div>
</nav>

      {/* HERO */}
<section className="relative min-h-screen overflow-hidden bg-[#080503] pt-[104px] text-white">
  <AnimatePresence mode="wait">
    <motion.img
      key={activeSlide}
      src={heroSlides[activeSlide].image}
      alt="Dr Kitchen hero"
      initial={{ opacity: 0, scale: 1.06 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </AnimatePresence>

  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

  <div className="relative z-10 mx-auto flex min-h-[calc(100vh-104px)] max-w-7xl flex-col justify-between px-6 py-16">
    

    <AnimatePresence mode="wait">
      <motion.div
        key={`content-${activeSlide}`}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <h2 className="font-[family:var(--font-dmserif)] text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
          {heroSlides[activeSlide].title}
        </h2>

        <p className="mt-6 max-w-3xl font-[family:var(--font-poppins)] text-xl leading-9 text-white/86">
          {heroSlides[activeSlide].text}
        </p>

        <p className="mt-12 font-[family:var(--font-poppins)] text-5xl font-black tracking-[-0.05em] text-[#F8D18A]/85">
          {heroSlides[activeSlide].bottom}
        </p>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* CONTROLS */}
  <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
    <button onClick={prevSlide} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl">
      <ChevronLeft size={20} />
    </button>

    <div className="flex gap-2">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveSlide(index)}
          className={`h-2.5 rounded-full transition-all ${
            activeSlide === index ? "w-10 bg-[#F8D18A]" : "w-2.5 bg-white/40"
          }`}
        />
      ))}
    </div>

    <button onClick={nextSlide} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl">
      <ChevronRight size={20} />
    </button>
  </div>
</section>

{/* CATCH STYLE TRUST SECTION */}
<section id="vision" className="relative overflow-hidden bg-white px-6 py-28">
  {/* LEFT SPICE IMAGE */}
  <img
    src="/turmeric.webp"
    alt=""
    className="absolute -left-24 bottom-16 hidden w-[340px] xl:block"
  />

  {/* RIGHT SPICE IMAGE */}
  <img
    src="/chilli.webp"
    alt=""
    className="absolute -right-20 bottom-20 hidden w-[360px] xl:block"
  />

  <div className="relative z-10 mx-auto max-w-7xl">
    <h2 className="mx-auto max-w-6xl text-center leading-[1.1] text-[#ED1C24] md:text-6xl font-[family:var(--font-cormorant)]
      text-3xl
      font-semibold
      leading-[0.95]
      tracking-[-0.04em]">
      Discover the world of Exotic and Authentic Spices from Dr. Kitchen —
      <span className="block">
        Kyunki Khana Sirf Khana Nahi Hota
      </span>
    </h2>

    <div className="mt-28 grid gap-16 md:grid-cols-3">
      {[
        {
          title: "Sourced From Best Farms",
          text: "Dr. Kitchen spices are sourced from trusted spice-growing regions to ensure purity, aroma and dependable quality.",
          icon: Leaf,
        },
        {
          title: "Packed Hygienically",
          text: "Our spices are packed using modern processes designed to ensure minimal human contact and everyday kitchen safety.",
          icon: ShieldCheck,
        },
        {
          title: "Low Temperature Grinding",
          text: "LTG helps retain natural oils, rich colour and authentic flavours in every Dr. Kitchen spice.",
          icon: Sparkles,
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="mx-auto mb-8 grid h-24 w-24 place-items-center text-[#ED1C24]">
            <item.icon size={70} strokeWidth={1.8} />
          </div>

          <h3 className="font-[family:var(--font-cormorant)]
text-6xl
font-semibold
leading-[0.95]
tracking-[-0.04em] text-[#111111]">
            {item.title}
          </h3>

          <p className="mx-auto mt-6 max-w-sm text-lg leading-8 text-black/45">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* TALES OF SPICES - SWIPE SLIDER */}
<section id="tales" className="bg-[#F3EFE7] py-24">
  <div className="mx-auto max-w-[1600px] px-6">
    <div className="overflow-x-auto scroll-smooth">
      <div className="flex min-w-max overflow-hidden rounded-[34px] shadow-sm">
        {/* INTRO CARD */}
        <div className="flex min-h-[420px] w-[360px] shrink-0 flex-col justify-center bg-[#E5D29A] p-8 md:p-12">
          <div className="mb-6 h-1 w-12 bg-[#21140E]" />
          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#21140E]">
            TALES
            <span className="block">OF SPICES</span>
          </h2>

          <button className="mt-14 flex items-center gap-3 text-sm font-black uppercase tracking-wide text-[#21140E]">
            Swipe to learn
            <ArrowRight size={20} />
          </button>
        </div>

        {[
          {
            title: "Dhaniya",
            text: "Dhaniya brings earthy aroma to Indian cooking — from tempering to garnish.",
            bg: "bg-[#16764F]",
            img: "data:image/jpeg;base64,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",
          },
          {
            title: "Black Pepper",
            text: "Known as the king of spices, black pepper adds sharp warmth and depth.",
            bg: "bg-[#191817]",
            img: "data:image/jpeg;base64,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",
          },
          {
            title: "Turmeric",
            text: "The golden spice of Indian homes — loved for colour, aroma and everyday value.",
            bg: "bg-[#783126]",
            img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMWFhUWFxgXFxgYGBcXHRoaGh0XHRgdGhgaHSggGholHRcXIjEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzAmICYvMi0tMDMtLS4tLS8tNS0tLSsyLS0tLS0vLS0tLS0tLy0tLS0tLS8tLS0yLy0uLS0vLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABBEAABAgMGBAQEBAUDAgcBAAABAhEAAyEEBRIxQVEGImFxE4GRoTKxwfAHQlLRFCNi4fEVgpJTciQzorLC0uIW/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAgMFBv/EADURAAEEAAQCCAYCAQUBAAAAAAEAAgMRBBIhMUFRBRMiYXGBsfAUMpGhwdEG4fEVUnKSwkL/2gAMAwEAAhEDEQA/APEUw4GGpMSJJFREITkmJEecMB6xIBEoTwYlCvsREmJAYEJ1dB57Q5BowBI177xwDrTrSHs4DjyECF3FuG65f5jobf2+Ucyc7DWOh6OPvtAoSApv7e0OxefekNeHpV5jy+cCFxI6/tCVTYGOkf5jgo9X8jAhJIFPcx3Echmd3McU2Wph3v8AKBCa+dK5bwkA+QHnHcoRMShNJ8idv7x1TDV23jpVDW/fpAhIE/qhHufLSEQds4RMCE0JB3Pd/cwmzpHVHSsOECE2vSFHXEKBSqURIIYIekRCE9MSJA+zDUxIEwITgnpEgHaGpT1iQCBC6mHHSkcww8DygULgbc/OHYe3lHY62dIlCaDlCJh7VpoI77/OBCaRWhhAU17fvD0p8oQDwIXP2jgGVPvoIkwxwpMCFGB75wj2hx8o633/AGgQoz00jlfX7ziTeGAdS8CFwmvWOd28ocXbNoXoYELn3nHYQHSOFI1gQu+GdjHIRJ+zCgQqZIiRMMREqUxClPSIlCYYkRKiBCQiVIjiR2iUQKFwQ8D7EdA6CHN9iJQuJSN+8PCKaV6tDwO3pHcOVOzZwKEytfSOw5Ayoc4cx3qTrAhRlNQ9PukIaZffyh5GZ1yhNk4fv7QIUWLM5n2H7x0p+9Yk92hKTQwIUTf3gu7LKJilJOiFKB2IbD7kesQNoPasF2S0pQoJ1d1ntknyNT17QviZCxhy78FR7qCrynTOFB16qQZmJBcEeh1gARrE/OwO5qzTYtLDHCIcNY5X/MXUprRwoyh8dgUocpPSFE8dgQqIJieWIYkQRLTEKU5KYnQmGpETIEChdTLMSCXD0JiZKYEKFMv73iTwsnghIjuGJQh/D9MoemWdgeuQH7xIcwPOHmrCBQohLPSON3Z/WJunWJ7JYFzjhlhyPusVe9rBmcaCDpqq8o3PWOlMa6z8JBnmLL6gezGKy8rlShylRfQGsJN6TwznZQ77FZdc26VHR+YltWDxsJHB0oprMUSQMJYADy1jHzUEULjp+8ewcOXapVnlmdRWBNBRqUfq0JdN4uTDsY9jqvw1WvUyS/IszdfACV4j/EENQYUih3ziQ/hWjCf/ABC8WhwpbzGvrG8s13pQXS9c65+UF448pL0zi3OsP+w/SejwjcoziyvHLf8Ah1apIJQUzu1D6HOM6q7puLAZagRm4YjvsI+hAoGBbbZJawy0hQPT6x0MN/JJmDLI0Hv2/r0Q7CCuwvE7HcBUHVMYDo/7RY3Tw9LmEleIIGpIq3lSNHxZdUuQUKllkqcYX1H0jJ3jfJSlUtOagxOwjqRYzEYsDq3VflXNcqVsjX5Cqa3LQZi/DACBRP0iADKOgZR06x6JrcoAW4Cbh7QokxwolSqVMTIEQIMTJiEIlESy4HSqJkGJQiUKiZBgVKolQqBQiwY68Qgw8KgQnvlDgAWiBSvaHWdKlqSlIcqIA7kgD5wE1qVKlxHbWNTw3wfaJikzVEyUu4J+IjonR+sa3hvhWTZkiZMAXNzJOQP9I+sWs29E4mjyWP8A5A59x4Uaf7j+B+/onYsISLcpUXZLZsL9TFVevDCJlUnCeziLyVOcUhs2dtHlmSysdYKu+CMii0LDzuBZQUlc2aSAoBgAHchhXeNvJjG3ha5qrwky5oKJScSkPlMWAwY7h3bvGtkrhzGPmexnWOvSxyF/4UxNa0ENCMxQHabSBnE7xUXqlTOQwdtPpCUTAXUUzGLNJpvAAsC8WN32sLpGWSusXNxpL94bmhaG2mnQgNVrabvlr+JCVdwD84F/06SOXw0Mf6U/tFkVwNaQ4hNj3jS0mWtWdvbgqzTahHhq0KKeoyjya8bEuTMVKWGUk1+h84+gpXMkR5p+KkiSlaClQ8ZmUkZ4dCTHpegekpTP1EhJB241X4Sc8YqwvP4UdhR7RJqmSImTHEoiZCYhCQiVIjiUxKlMCEkRKkw1IiVIiVCSFmJHhuGOxCFw69Y3H4ccOCar+JmfChTIG6hmrsH9e0YZRYR7pw3ZEybPLlj8qR5k1J9THC/kGMdBh8jDRdp5cfwExh2Aus8EdbJQwkD5xjbdNKCQRG1UQofIxWf6elSuYYm0OTx4vDShl5l2YpGtaSn2Inw0g54Q/doJSkNE6ZMO8Nowc8EpXc2qe/rpFoklGSgypav0rTVJ9fYxieG+JbXabQizKCZYSVGaz4mTmHPw1YUrWPR7VPCElR0GW/QPrHm3BqFyZ1qtlplFEyYpQQh00SpWJTEHfCHb8vWOtgC04eXOLI+XnZ009e6ljO4MIJNDivSWhqg4Y1EY2fxfNJ5QhI0cFXu4+UT2biuZ+eWlQ3QSk+hJf1EKnATAXX3WDcdEToVdLuuXiGaRkwr/AIi4kWZKBQRlJvEUpSRhVzfpNCPKNRLtDpB3AjGdkrQM1p8TF7dDYUqy0DTpkNmWgRW2u2NGccRJUWn26+02eSpRquoQjVSjl5bmPJ74s6ylU6avFMWt1F9/v2jYX7bAphq4jHcRzSyUgUzP0j0/Q0OSQEbk6+A4Lk4uZxmDBsqZoUNaFHsFVBoTEyUQpaYlAiFKSUQ9KY6kQ9IgQupREmGEkQ8QKKTQmEUxJHWgU0oSI9m4fvVNolpUk6cw2OoMePER6J+HshEmyqmKISZqyqtKBkj/ANp9Y89/Iomuw7XncGh57+iZw5OalthlAcmcxINDmx1B23geyXimYopSXapg60yELThV5HIjsY8WW5DTk8ELNvUJgVV/A0gO22FKAWJV1JeM7brUtOjQ/DhY37JhkYIW3s8oTXUtz+kPQeW7vFTfV0rSCpDqFaaj94J4St/iSElRqHT6GLadOEL5nwykcklicKySw4ea8yWR5wxStRGxvfh1E51yyETNdld9j1jD2ySuWoy1pKVDMH59R1EdvDzMmGh15Lz8uFkgdrtzUU8vzChEbDhW/wDxUGWs86BnunfvGHmTjFZbJ6kuUkg7gkEeYhuTCCduQ+R5JnDzdWbXss+ewiit08rWlCKnXtGEsvGVpQE+I0xIyChhJHcD6RxPEKpq1LwHEaJlodv9yjCsfRUsZJNeKdlxbWtsb8lo7+tUqWMRU4TVRGp0SN4x8m3GdiJpi022iwm3BabRzTVoQPypYqbypXq8CyrFLkqISoTVDVmQPJzjPt3jpYdkUbKDrd5+uy5RkBJeTqh/4dX6T6GFFl/FTv1TPIq+kKHvjX8h9f6R8X3KkSmJMGUdS0H3PdU20rwSkknMnIJG6jpHRe5sbS5xoBPAEmghZElS1BKQVKUWAFSScgBGnk8BWwpdQQjopdf/AEhUPuS75titQXPkLIAVhKBjANKuH0frWNajiuUo5jzfTyjgdIdJ4hjgMMAW1d7/AEop7D4UOFv35LGWnge2pylpmDdC0/8AyKT7Qy7+EbXMXhMsyxqpWQ9Kkx6JKv1ChRYMT2e8UHmy3f8AzHNPTuNDSC0Xzo/tb/Ax3dleW3zcS7OArElaCcLpBBB2IOWR10isj2y0ypc1OFaErSdFAKHvFRbOF7LgUBJQCa/mHoQXSKaQzhv5E3KGzNN8xX9LKTBWewdF5UmFbPEUnAZkxLUACiGGzR6zZuHrIghSZSQUsQSVKIOlSTWJbdLs61fzUS1KGWNKSfJxlF3fyCJzhUZI76v8+qG4FwHzLP8A4ZWp5SpaiCZbJBYOQXIJOu3lGzm1ioQmVLH8pKE9EhI+UF3ZeImK8N2UxL50BALaO5EedxrhLK6ZjaB4ckz1bmgWbUdrsKiHSk/KM3elyzVaR6GEBohnWcQvDjXRnRaxyUKKy/BlgVLQsLBYrdPoHi/nSg0OwgCOFUVllMjy9ZPNlU9ptKpZfSMxx3xBL/h8LAzCRgJqU1dR9Keca20TpanBUHGYND6HTrGB42uVK0+Ij4gQAQMwTUfXyjqdHtjMzTIKpLSguaQFk7PfstXKvlIOeh89IhvK1pQxCgS4YCtNXh83hQu+PCNQznyqK94tLv4KkqTjneJIQ2a5st+nJgHzj0zpMMztXpy9/i1z3YYxusqWw3FJmSv4gKXMBDgVITuFNUN1pGiuW7ZSZKpgOHCopVUE0yyGu2dd4quEp4lpm2SzLwgrUmbNVhViChhAA0BoN+sNN5rlNLmyzZgk4XKVTLOvR3fEhR3Cj2hCfPISwE/muGn9d5pZYiMPGyMny5toJSl5crrVau4HwjoSINsPD6Uflc7mvtkPusGyBainllpGxQvGk9nDj0io4gt9skB1lQTuKAdDQEQo173nq2EDutc0xuVz/paukdjz1XEkz/qL/wCSoUb/AOn4jmq9Se9QIT69B9I9H4Rsa7IlSJuBJUfEJCnLAABJpn8WT61jzhamy/zG34as6rbKwTlqCZRbEAnESQKOXDMK+Udbp1rvh9TTL7XPu+69Ngsufv4Lcot6FfmSxo70L6d/2MBKuaxrONUiWVGpLftElhu+VKTgQlgP1Op/WJlyk6ADLp7AiPEWGk5CR9l1q5oGbcNlOSSlv0rUB6O0KyWGzIISMRJqylK75A4faDChCXUE13zePPbT+IQStctcoJUlRAUXLj8rjQsesN4eGfEWGEmu9Ve9rd16KpaE1yHZSj5AecUXEPExkSwpIclRTzAjLUPVu8YWdxNNnEqlpWWzUgKA7E+mkVF7JXOQVKUrEirGrjXq8P4fomnjrT5LN0wrsrd8N8WTZk7w5xDLBwpYZ0ajnR6GLniq1oKTJVLVVJKVpAZJcDlJoFORT948+/DW02cT/wCY2MPhf6R6ta7LLnIUhacSVCqT90PXMRjj448PihTaA8vMKY3Z2WvLbCbxkq+Ezg2YLlujFvWNFw1fnhLK5yVoxMnmDM5GZO5aLi4rkNmmLT4pWhTYAv4k7pJ/NkKwZfshC5a0TEhSVAgjeh9D9WiZ8XHK7IWijWo0+yqIzlWhstsCg4IMSzZlPX7+ceQybbarCpOEmbJVVIUWUP6XyJHVu+kaa7uPLOsYVq8NWy+Wvnn5QjN0TI3tx9pvMfpYZgDR0K1XiwPNmGK6VeyFUBeHzJj6xgIS06hWQ94zchhBOhIdu3WKe2XumWjCrmZwxDhxQ+faCb8vESZRUqjkJHu5HkI8zvC+nKnJIUoKI0cYvm/tHawODMw20CnRozFaK77bNnTMMtKQSQkEBy56qJbyrGxn8FJmIKFT5oUtgVjDy9EpIoDu79dI81uGfLxS1eIAUqCmdmIy/wAx7Nd16pnIDl1jIjVu2sR0mZYHAxaDw/a2YxsrNRa87TwrMu1akqUFiaQEKAZ0pxGo0U5HpF3KvtC0KSZYUsUmyTTGP1Jej/PvFh+Is8Y7Mc81fKKK+boMyWZsolM5AcFJYkCpSd4qyX4lrJJzqePhpr3eHivNzv6vEEDZVy+PE2QGXKlY0p+BKyZapfSgIWnsQ0Z0/iDalFZmIkzEzDzJWlRDMBhHNQMIFtF5G0N4hCyHqUpBHmBWBl3Wk5R6GHo6BotzRmO5sn9LUtBGqcq97Ia/wKfKfOA8g9BHYg/0mFDfUM7/APs79ooLULulSXyLUcZOO7bGNnw3ZFSbIFKOAkmYXoANCRpQD2ijuq8lTZkqSoeIApRfJ6EsNk09I1q1zJodSRLQDUfmU2WVMORf2jz/AEpip3NEUtc/UD6+C6+Gjjsub4IOw3r4ywiUtClE1CSn4Q2JRqaB9tt4dfN6izYQouFUCgQKjTN8ukRrRJsilLkygkzcJUUBIBDndg1Yy1+iZbZyZEqqy2MjJCdSWFDoO8IwwMkkvZnv0TLiQO9bK7r38c8hSQxYBydHcsABWPML/uszrd4Uv4pk3Bu1WJPQBz5Rvrt4bVYZc2bKLrKA6VE1auehFaxneELDNm2ybPZlyhQH/qTHD1pROM+kNYN8cJkliPZAoePf5rKRpe0NcF6ZY7ulSZSZKEAISGAYep6k1eMbxnYpSUTZoDFIegp1+cX9lSsKwqUpZ1VVkk1JKqabdtIyfH9qayqVmFlg2THlHyPpCGBY/wCIHauz9bWsjgGE0sZwlchnnE5BCuUih7htX+Uep3Xehl/y5/xpDAktiG75fezRmfwhJMuYwdlAeof6GDfxQQUSxNTQpWnmGYcFx/2v9I6WNd8RjPh37cEvAMkQeFr7MoLLhicnEBcS2SauSrwwSQknCMyQNNz/AGin4bmWmXLR/EIw4wClWVVBwFD8pNPP0jU2S2hYwqIxChagPauw9448jHQSW2iB5poEOCzlmuvHYWV8QGNL1IIqzdnHnGcm2AK5ClLFiMSgQxGb/f7+lGWBo7xl5uAhAOBCsACn+LFkRpt3zh3CY14LuV34LKeJrqKysi5cIxygqWQospNH2CgqhHeLyXb7TJSCtAmDRSXS4GeYI94u03fhmssHDRIZWpFCqn1GUMt90VVMZ8DMlJABAAq+rbfvXSTGslcBIAR70tZCBzRosxxMbRagkCziUkBwqYrF8VHATQGn5smjF3jdKZXxrxKqCNiNvWPX7xl/ywlCeVhiSVBISWSav8RL5iMTe1wTFkOkeHoz5ltqCG+j8YGjLoB75lUmgJXn4BBdLuNRGnuHitUotNUoUoUh3GxDivWL+xcKpOFGJDlJpiNNRnnmaDrtFZenDwGJDJcB8T5s++uXpHQdiMPiOw5LhskWoR1nvVdqlCcsmkxaUh/hSBLIHqSfONddU4ECMLcNnMuzFJ/6yz6ol/tGwuNfKO0cjHRtaCG7A6Lh4okvJO9rDX5dqZc+alIyWSBsDUfOBZazTKkaPiRD2pZ6JzpoHA9feKsyE1pHoMK7PCxx3oeifYSWA9yH8UbQoIErrHIZVluJVnkpmJVJRgKcRLg81AKVarmjxeLly5gZy2bJp5HWM3ZLevDzEhQwhAwFXL+XIihqM4Psy3qVdFEUKVjPLJ826x4qaJ51JNjz+67zC3gEZf1gTMkmU/xAp7AhhGd/C2wLkJtONPN4qUH/AGpd32OMHzjWSJYTVS3rR894MsshKHIHxEKOmgHyEL/FFkDodw6vsVcxguD+S7a5oSklWQD+nRoylhtqJc2YEuVBpqwGJNVJZtyAP+Qi24nnESVsoBTU86D3+cYXggld5zUlWJpK3JqDzyyfnG2Dw4MD3ngP0qSOykBbebaJcpKlILhacVXeuQAZhT6Rk+KUlYs8pVRMfEACKcxAA3AI8zGvtd0BQqWpRLbMzkvRvnrAU270+LZFqLsVIY64kuC+4wt/uicNMxjsw1OvoaVnCxSqvw0sqrPNtFnVuFA7ga+hT6xf8TSEzpQcUE2VjFKALQTlo31iS+bGnF4iTgVhwqI2NAfKO2iylNmVKBKiQxUo1JycxnJN1kwn2Jr+yoDAG5QqPjbiRIkmWBzqLAa6++UCXBfU6SEptgozpW2X/c2vWB7i4XXNWJ1om48BokA5ilSe0a29JEoyyZjBIFSdBDMjoImiBozczxvuV2xk9oo2zW5Kw4IZnitvS2WdS2mSwopFFAgHt1EeWzL2my5ilWYkSsRCQpyCA2hoB8oZaOJlroZbKIqxNX2esMM6GeHZmnT6EJc4mPYr1SRfUtYmeEmiTiUZicKSrNsYPxAB6uadRAk7iWWStKUqSFaYglWxwgGm799oouC505bIEs+Ea8wcOQHJf/EaX/QkJmpUUoqsAhnqdf8AiMt6wq+KCGRzX68tfVX7bgC1EWOzTJqapKEYncq+Malg+e/nBi7uQC4K6ZhKt30NB5RYlUNSMzHLdM4mxomRGAFjb8sK0KHhp5HxFStyNWyy0inTaSMXIBynIDzL5tnHodqsyViqQptDrHnF6YPFWlIIViHKoZDLN61D5ecd/ouYTjq3Db3rqudi4+r7QKHTNBStNKBEwMe4V2+JFOkX93OkDtFBZJIWeoOAkMKFSVV1Pwqr22griu/ESE+HLOKcoMAK4X1V9BG+KjL5erYNT/X+V53FMLpKaq1Vq8WfPWCSkzCGenKAnLyzh0xBAyJSagkEOWq27PANzySlAGoz884NlglbAlyGpWnaO6xgY0NGwTjRQpMStg2BPpCidUzDyksRQgpD036wovSst3Ms8qYtIAOQbCAwwvqfrtEaLElLmW6gogrCqBmrUCqqfOHSl4iqYSUpQ5Ulj5d98jWgeCbIoEO7voeruTpl6x4XO5mxXosoKCsUhM0hK2KUcyattmDt9ItrfeUuSjEtddWb7YeWUVvEF3eInFKOGYAa0qwok/Lo8YG+FWhLpmhQ7h/dNDG0WHbinA5qHJUc7q91ZcT3sMKluSFBxU7jDQUEZjgifMRa/FTmysQ0OLMetfKIL1n4gkYqdTmRT77xf8DSZKSVrmJBO5aO4Y2wYVwq70S4qSQG9lbXpxkuUrnlv0SA3mSc4zp4omWi0SytXhy0qcDEWG5JOrRtrzsNjnCs6X5KTFKm5bvSrEqYkgaVV8hCWHkwzWX1ZzVyK2ex16O0R958UylLlSZSgszJiEq/3EB/KNvMINKdoxku8rFKB/hrKqYoapQB71I9I0t2z0zZaZrFJI50l3Sr8wPUHpHLxcYDW5WkAc9yfDgtL13VIm+ZNmM1MxRfGSEgcxdiwHc60iwsd1i1ITNtSXCuZElyEpB+HGA2NbVL0Ds2ZOdmCTMvNbgKwhCXf4VV96iN5JXyj09KfSDFHqg0ssOIBJ8uHu1Zna0KFVcdlw4PAlhOwSB8u8Zi/uB5Shjs6QlQ/Iag9iag9HbtGwc5vEQUdTGMGLnidma4+eo+is+BjxRCouDZXI1UmWSlSDmkvQM1AxjnENoUi1SFFYEvGkNVyXYuMmGI1+xeImgF6VZz8op+J7p/i5YMsjEFEBRcNoRQE5j1hiGVr8Vnk0abB41ayewtiyt1I/C0JD51jpMVfD94ePISstjDomDZaaK7Pn2IizUosw9458kbmPLHbhMNcHAEJzRjOMLAsrE5AAoUqNdHbu4U3ltGvD5OYr7ysaZyFoW4S2Lb4a9d9oZwM/UTB/18FliI88ZC8zttpUlHhSqLWXWr9AyAf9WfZ4Fst1SkOpRUqZSpZiXqS/nBc+bnR2YgmrVp0McoRQ82o69PvSPdsiAs8Tv75LzegKkJr0Iby+kNmAvm2lNcvWFiSSWcft9coSFOoqLD0+QyjRCY3f78oUTMev35QoLQt7JtScPwkBRDDOmlBm+z7x2xpAJwBQfI0OdHZhsIVntaCrwfD+HMlh1z1Z84N8UfCxctX7079Y8C+xpW69KNeKGlS1AYitNGehqf+VakdoBvqWVlksVAfN8qvFrMl8uI/lNPkSWq7QPKlHI0FVEg1qaBz0bbSJY+jmUEcF5jbbmmzFKJSQAQltt26U+cX1ycM0lggAFySQxGEjTXz2MbQSEEKSkAEjSjE9dM4IFmZm0FOtGzf5vDsvSjy3KNFi3DC7VWm4LORzJDtT4htUgKzrBMq6pAYeEgijFgfUkFtDByVbvpT/EdSjfJ+1I5xnkO7j9UyGBQ2pSUIOEYWFGbPs1Yyl82GdXwpipBLuQXBevM5OHM9qxsZkpKgAQ4DZ9Ne8DW1COV/iGQZ/Y0LZxfDz9WdB+VWWOwsrw3woqSlU3xMcxT19s94tbqvQy538POzWXlqp8WqcqZOO53EXUhAIbCwIqzD5axnLyuqVMK8Jc1cuHBcF0q0NU/vDInE7nddx7tuXvisnMLayLVqU1TETvp6xkrq4oVLKZFrdKjRM05KFGfZXX6xsZVajKE5oHwnteR4HwTDJA8aKKYnds/v6QJOSsqRhWUoc4wAHLhkkHSrP8A2g8oeI56SGakUY6lLhaz6bvXd87xUnHZ5hAmg5yySyVuTViQD0PSNTLWFAKBcGoIq8Z2fxGkSly5yMRZSTlhVSnZ600aMvdF8zLFRH82SVf+XkQDrLJ9MOr0jqv6PxOJaXPHbbp/yHjzH3CRbiY4iADofsvTWz+sVV+WsypROErxJKaVwuNejxJZ79s82UuamYGQHmJ/Ogf1JzGRrlsTGVt3EibSvDKRil4SkO74iU8wANAwYOK80KYTAzOlGZhob3otZsQwMNFUM2QCgly5dwdvt4jTJKQAU/Ov94ORJxrDmpJBydmJUQOgDwlKKkjMtrVxUbdB1pHsxIdlwy1CqklLOnDR8swfpCSwLmqa1Tn2MHW0NynMp66dTXSAzlVxr99f2i7XZgoIpNEwaO3aOxwFP6T6mOxdVWjs18hAJAdamCVEMBQUcsyX11gyx3tLciatQUk4SxLKJocstYzciUcKi+mbthy6823vFjaLWlkJUkUTmWB5mBwnUU1O40Meanwcd00H372811WTuqytLZbzxLWgSyw7VI+VflDCvMhVVEYQ4KQRlUbmkZc40hPIRjS4UXck5UTl9c4srpnYZalqSSTQUcZUObHv06wjJhQwZm/5W7ZsxorRSLQmoBBFCTmK9dTCE4PhqWAOmuXXMbaRVXXbBiamLJSiMJINQwbr7QTbbwlhQzxJqWDgOwcnZyITdCQ+qTAkFWrIp1+/vOF1gWWsKwzFHRhnnq/R29YinTCCcKSR+ZJoR2p1+9cwwk0tM4RiZoVlXyaHK3yMV8m0S0qIQ5dg2gNdYba7ywjBUHEE0BZi2TZenzi3VOJoKvWCtVZ46V8oEnyfDxLCUnKmWlX+ccs09TlMwGoBBpWnMzMzHesTJmhQJA0UGUGy0bYxFFp90gkFZG/7mXallSUpw5VqzZjpm3lnFXd5vCxAgDFKTRlZZCqTt07xs7ovXFjAFQWyHMadnLnZ2aJp1oTN/lKzL1YEUoQWOf8AaOiMVIwdU9gLRwKVyNJzgm1m7v8AxHsymE4Klq1piHqIsrTxvYACROSSNADU+jdf7xnLy4aTMQqYEDlKh8XV/Kheunk4dn4QlBlLAIYvzCgYmoBoem4bWHRgcC/tgkd1hYHEzjSr76Xf/wCpsilNMUoJJzEvEn3IO28HybLZJygqROSpLp5QpTgitETAlRrVg+UBSbnkpzk8pwsSzByMzkAQDnoDtEF6cMJbxJTIeqQFVCSaO2lW3plHbMjLA24brnZTurG8rlWBiAwqT8Kg6VBvcPT0ihkWhUtb/wC1QA9FAbfe0Ol3rbrOnAFCdK/QsBQA/pB+HuKwL/qUqYeYqkqOhcp/cD1hjKKWdlXXiUSrRwW3DVLiCQGWCGwFPZ9h3ios8xSQBmkZFwQK1Y7QbZ7wC6Ym0qWJ8/p/aILTwV6KsUJScyfhbIF6lhXLbNqDdgKiVhUMmLUL19KxJJmO+I50Znc6mmVBHVLqxGtNsq/7sqxk0EaKTRQhlDZXkn/9QoMTKLCp/wCYhRbP3qMqrZSsTCruztodO9R7QcbQUsMAOEg8xzzBDUoSQWGwgNeNg4w1Ioag/TP7rD1TkJQMT48VdQB61Lk7ZxWWFr+ClryFdSZhJUaBNGqCEpGI1AJ2yelIPkoCsSVOQEkg8jaszM2eQMUU208rE0w8jYSGIrXetdcwS8Ok2pRAUQ6SQxID7lgWJqM8o48uDedRQ9+qcZMAtFYJMtKQPEdQD0SQTkwAZwkEsw1iKbMQjGMZ5gxSSrGXYvhIPrtDLVaFhTp5UnCgJBw0qUqD+r5Dzie9ES5cvxJasMzC5csshQNCC7PTTbpHMDSXC77Xr38k1m004KWTZFzkJJICaNoQBUsCxAcZeuUWps8pnSaluYZkgUc57xj5NqSmWkDEmYQCUkM6SC5GE5HbrA9nt8xK8KVFKVMKnInMtpqcv3i5wUr7o0AgYhrdwtBNmS5UwqWxVy0rr+apZmqe8RW3HMIWAGSKDIKVnp0D55P3gaVaCrw0gA7EgjCoFi7itADXTvBNln+FyTxqwOYqKl9RqB1imQt1/wDr3sFOYHwRH8QpCAsqUcglkhQSNQ7Ppro2TvE9ltEwF5jgAFzhYKKWcsMtfTOsEzrxSUpCUYkqY4gHFcx3/fvANpWgnCVq5vys+amLaBqBjSFx2tC2lqdNioZi+eWUfAyv5iQSMRxE0FFMx2z8oElL/mNhIUlyyVEBAoQQkM5ep+dKl2oCWR4YxKPKQWcqZwXDAa/bQFaLylYwol1EqxJY0SCTmQHLigIyPQQ3E1zvlBOnnx390l3kDcogyBOKpnMUhltL5XAFSRm9CWfzMQrnIQlSVYypYUVEpTqAyTowwjLrnBlmvYscAdPwln1GpASAScq0rtAtllJISpsyoEKNCkhmz6kUYuDnF2W35waFUFR1H5d1RyEqGINicOpg+DC4Ljs9WjpvFSVJOeFISQWAILOA2xjSS7uFnmHESCXCfhYpIIICjkrLTQbxmLRJclQqAADkl8qAO5PbSOxh548STpppr46JORjowFHMQkuRRBNCQ7A5P2384Dtd2S5rjOpZW8Fy1Bh/T71duznKG2NzibJOb+tNsxHTaKSxQ3DoRJMyRMlhYJCkF2Vy5prmKvpl1gK/Z0iWoFKVMqoUKjqCDUEU3zg680UCk0Wk4kkbg67/ANojnFMxlgcsxy1eUlwpPlWmxi4BWsQvQHVDWO1hQdK8tM+1NIsTeIIqK5OPqIqZvDtAuStjqNvd69oFXapsstNQzfmH31ittci+YWjEyWavn97Qop03xL3T6/3jsFIpitgolAIBoUooNVEnPJxD7RLS5CVAGmEks5pl2O+cR4mQpAFMZJVQgigpq9IgmpDpYKooEsWdi+3llFACdVQkbI9ZSCHwv8BbQgirlgSptd+0OkymQ+NLJLAMQ5IBLAj6xFKCFMomrhzRwdC3pA9qtAJAQTyF3FAyu2pr5NGbmEkBqsHDcohd4qJJK1EOKA516k4fiNa7ZRNbFTlAKWSpOAFyciSnCHfV8qsxygQJxJPJzKBAqkB8z9YiE1VMSlFINU6AgcrAMA0R1LQ4FoGinOa1RSJ5ahIKSGz8iDpTT+nU1iCzzFFRNCQcTGrkVNG706xxSkjE4HNm70OhG394XjDAElJKgr4qAMaV+xlV4nqwLFbqMy0Mm9JQWwQEpAchPxCgZzs5GVfSJ7zvazzglHMnC+FyNBSrHDU+1Yzs+zKRMwkYVJq2Z9Rm7xy0zqJCHLg4iRmHCmPQM7sPaEP9OiLmuBPcb08Ux8S+iDSs5F7rQnAlYIJdRA5w9eUvn9XgyyW5JWRNUZiFJCASWYYgzvkWD+RziqkTUokKDYjMAw1Ao7k1qCGABPWK0uW3qS+ja984n4KN+bSu/nxtR17m1xVyi9ZktSyF0+AFVQfqd+xgWbaATRISVEnlcnmoUgVcHTuK6wCFcxAfC5KQQz1/SKCm0EHCUlmBCSNKqBG/cZAfOGW4aNmoCzMrnaIiz6JOLOjEEYjQGpYVzhSJykApOJJZ8qEvqNmrR9KaxFY5wT4ZLq5kOA4PbQjTJ+8S2m3lUxSiSaYRsQ2FLu5LU96xBaXOIqxui6CLtVumLllSiokbvUKAEwg/l+EGm5gG0ynALsCz4Szh6t909oUxIWFhSiKKUAwIfMZNhdgKDUUh5WVJCuoBYHCHG+hJCqN+XpFooxHoNFVzs2pQ0paOYKcHYOXc6mGLdJcAjMHQF9CIUwgKbodHyH35ROqSHZ6Hz+UN7LJSTEhQevR96OPeK6RLZeB2Ez4TkEzNjviD+bbQZZi5w5gH/J3bWBrdIKkkBgVDED1GWubxIUglpsKeyEYiFHmBAAAqQcVaagtTr0gi2ICndlEZ7ZjL5bVppFQme4TNZiXSsZMtq6auFDuRpFpZZxIKgS+TZ5ghXt84q5uthavN9pVxumSa4IUWy56SScCal6P/APaORGqz0VdZRn0MHWBILk5gpA88T/IQoUTIez75qGfMn2tAEtJAqyvY0gKwyE+DaFNULlMa6qY+0KFC7nEMH/L/ANLShmPh+FDaFFJLEihh91qKpRerKA8n/vHIUNLFPtB+MbgHrQsK5ih+2hkg8raNChRNaIU8nmBUaneGs9DliTTu7/KFCjM7FXG4U6UAyZRIrWIOJqWlaRQApAAp8oUKFoyetHg71C0d8h8vRArUWB19PaCXyOuX0hQoepYJ6i5JNTv99hDRWdLT+UqqNDmY5CjPZWU9qUQktqQD2Y0jiB/LHb6Ax2FAVAUNqOUGyzRJ/p+rQoUWQg7CXmqerAtEtqHsYUKJKhAIVimWhBqnwkqb+pK0gHuylB9iRDLnnKxEOWwk+dIUKCldp0VzOJCiASwJGZhQoUZjZC//2Q==",
          },
          {
            title: "Red Chilli",
            text: "Adds heat, colour and bold Indian flavour to everyday dishes.",
            bg: "bg-[#9E1B16]",
            img: "data:image/jpeg;base64,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",
          },
        ].map((card) => (
          <div
            key={card.title}
            className={`group relative flex min-h-[420px] w-[360px] shrink-0 flex-col justify-between overflow-hidden ${card.bg} p-8 text-white md:p-12`}
          >
            <img
              src={card.img}
              alt={card.title}
              className="absolute right-8 top-8 h-36 w-36 rounded-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div />

            <div className="relative z-10 max-w-sm">
              <h3 className="text-3xl font-black">{card.title}</h3>
              <p className="mt-5 text-lg leading-8 text-white/85">
                {card.text}
              </p>
              <button className="mt-4 flex items-center gap-3 text-sm font-black uppercase">
                View Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* SUNRISE STYLE SECOND SECTION */}
<section id="story" className="relative overflow-hidden bg-[#120905] px-6 py-24 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,209,138,.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(143,45,22,.25),transparent_38%)]" />

  <div className="relative z-10 mx-auto max-w-7xl">
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#F8D18A]">
          Discover Dr. Kitchen
        </p>
        <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Explore flavour, stories and everyday kitchen inspiration.
        </h2>
      </div>

      <p className="max-w-md text-lg leading-8 text-white/60">
        A warm journey through recipes, spice stories, and authentic Indian
        cooking made for modern homes.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-3">
      {[
        {
          title: "Explore Recipes",
          text: "Come on an aromatic journey across Indian kitchens with dishes crafted for everyday meals and festive moments.",
          tag: "Recipes",
          img: "food.jpg",
        },
        {
          title: "Stories of Spice",
          text: "Discover the treasured stories behind ingredients that bring warmth, aroma and tradition into every home.",
          tag: "Spice Stories",
          img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Essence of India",
          text: "Simple, flavourful and aromatic essentials designed to become part of cherished family recipes.",
          tag: "Indian Taste",
          img: "https://images.unsplash.com/photo-1606914469633-bd39206ea739?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 }}
          className="group relative min-h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,.35)]"
        >
          <img
            src={card.img}
            alt={card.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#120905] via-[#120905]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120905]/75 via-transparent to-transparent" />

          <div className="absolute left-7 top-7 rounded-full border border-[#F8D18A]/30 bg-black/30 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#F8D18A] backdrop-blur-xl">
            {card.tag}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <h3 className="text-4xl font-black leading-none tracking-[-0.04em]">
              {card.title}
            </h3>
            <p className="mt-5 text-base leading-7 text-white/68">
              {card.text}
            </p>

            <button className="mt-7 flex items-center gap-3 rounded-full bg-[#F8D18A] px-6 py-3 text-sm font-black text-[#120905] transition group-hover:gap-5">
              View More
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      
      

      {/* PREMIUM VS SECTION */}
<section id="process" className="relative overflow-hidden bg-[#120905] px-6 py-20 text-white">
  
  {/* CINEMATIC GLOW */}
  <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8D18A]/10 blur-[180px]" />

  {/* FILM GRAIN */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light">
  <div className="h-full w-full bg-[url('/grain.jpg')]" />
</div>

  <div className="relative z-10 mx-auto max-w-7xl">
    
    {/* TOP */}
    <div className="mx-auto max-w-5xl text-center">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#F8D18A]">
        The Dr. Kitchen Difference
      </p>

      <h2 className="font-[family:var(--font-cormorant)] text-6xl font-semibold leading-[0.92] tracking-[-0.05em] text-white md:text-8xl">
        Fresh spices
        <span className="mx-4 text-[#F8D18A]">vs</span>
        ordinary spices.
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-white/65">
        The difference is not just visible — it is felt in aroma,
        colour, purity and every bite shared around the table.
      </p>
    </div>

    {/* CARDS */}
    <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_.18fr_1fr] lg:items-center">
      
      {/* RIGHT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#2A120D] p-10 shadow-[0_30px_100px_rgba(0,0,0,.25)] md:p-14"
      >
        <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[#B92A08]/20 blur-[90px]" />

        <div className="relative z-10">
          <div className="mb-10 flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#B92A08] text-white shadow-xl">
              <X size={34} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                Generic Alternative
              </p>

              <h3 className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-none tracking-[-0.03em] text-white">
                Ordinary Spices
              </h3>
            </div>
          </div>

          <p className="mb-10 max-w-xl text-[17px] leading-8 text-white/55">
            Often produced without consistency, freshness control
            or dependable quality standards for modern kitchens.
          </p>

          <div className="space-y-5">
            {[
              "High heat grinding methods",
              "Inconsistent ingredient sourcing",
              "Basic low-retention packaging",
              "Weak aroma and dull flavour",
              "Possible adulteration risks",
              "Outdated processing standards",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4"
              >
                <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#B92A08] text-white">
                  <X size={16} />
                </div>

                <p className="text-[17px] font-medium leading-8 text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CENTER SEAL */}
<div className="relative hidden items-center justify-center lg:flex">

  <motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 14,
    repeat: Infinity,
    ease: "linear",
  }}
  className="relative z-10 grid h-28 w-28 place-items-center rounded-full border border-[#F8D18A]/30 bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.35)]"
>
  <div className="text-center">
    <p className="text-xs uppercase tracking-[0.35em] text-[#F8D18A]/60">
      Taste
    </p>

    <h4 className="mt-1 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[#F8D18A]">
      VS
    </h4>
  </div>
</motion.div>

  {/* GLOW */}
  <div className="absolute h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(248,209,138,0.18),transparent_70%)] blur-2xl" />

  
</div>

      
      {/* LEFT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[40px] border border-[#F8D18A]/20 bg-[#F7F2EA] p-10 shadow-[0_30px_100px_rgba(0,0,0,.25)] md:p-14"
      >
        {/* GLOW */}
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#F8D18A]/20 blur-[90px]" />

        <div className="relative z-10">
          <div className="mb-10 flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#16A34A] text-white shadow-xl">
              <BadgeCheck size={34} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8F2D16]/60">
                Premium Choice
              </p>

              <h3 className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-none tracking-[-0.03em] text-[#21140E]">
                Dr. Kitchen
              </h3>
            </div>
          </div>

          <p className="mb-10 max-w-xl text-[17px] leading-8 text-black/60">
            Crafted for modern Indian kitchens that value purity,
            freshness, authentic flavour and dependable quality.
          </p>

          <div className="space-y-5">
            {[
              "Low temperature grinding technology",
              "Carefully sourced premium ingredients",
              "Freshness-lock packaging systems",
              "Rich aroma and authentic flavour",
              "No adulteration or compromise",
              "Modern hygienic processing standards",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4"
              >
                <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#16A34A] text-white">
                  <Check size={16} />
                </div>

                <p className="text-[17px] font-medium leading-8 text-[#21140E]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* BEHIND THE FLAVOUR - ZOFF STYLE */}
<section id="quality" className="relative overflow-hidden bg-white px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
    
    {/* LEFT PERSON IMAGE */}
    <div className="relative flex min-h-[620px] items-end justify-center">
      <div className="absolute bottom-0 h-[520px] w-[520px] rounded-[55%_45%_50%_50%] bg-[#FFD8C8]" />

      <img
        src="/chef-woman.jpg"
        alt="Dr Kitchen quality"
        className="relative z-10 h-[620px] object-contain"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#F15A24] md:text-7xl">
        BEHIND THE FLAVOUR —
        <span className="block text-[#21140E]">
          DR. KITCHEN KA MAGIC!
        </span>
      </h2>

      <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
        {[
          {
            title: "Sourcing Process",
            text: "Dr. Kitchen carefully selects raw ingredients from trusted farms to ensure authentic aroma and premium spice quality.",
            color: "bg-[#B77AE6]",
            icon: ShieldCheck,
          },
          {
            title: "Cool Grinding Technology",
            text: "Our low-temperature grinding process helps preserve natural oils, freshness, colour, and rich flavour.",
            color: "bg-[#79D6DE]",
            icon: Sparkles,
          },
          {
            title: "Packaging Innovation",
            text: "Freshness-lock packaging keeps spices aromatic, clean, and kitchen-ready for longer use.",
            color: "bg-[#FFB21A]",
            icon: PackageCheck,
          },
          {
            title: "Culinary Impact",
            text: "Every dish gets authentic taste, vibrant colour, and consistent flavour that elevates everyday cooking.",
            color: "bg-[#26A653]",
            icon: ChefHat,
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div
              className={`mb-6 grid h-24 w-24 place-items-center rounded-full ${item.color} text-white shadow-[0_18px_35px_rgba(0,0,0,.16)]`}
            >
              <item.icon size={40} />
            </div>

            <h3 className="text-3xl font-black leading-tight text-[#21140E]">
              {item.title}
            </h3>

            <p className="mt-4 max-w-sm text-xl leading-8 text-black/65">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section> 

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black">Dr. Kitchen</h3>
            <p className="mt-3 text-sm font-semibold text-black/50">
              A Brand by Surani Global Private Limited
            </p>
            <p className="mt-5 text-sm text-black/70">
              Crafted for Modern Indian Kitchens.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-black">Quick Links</h4>
            <div className="space-y-3 text-sm font-semibold text-black/50">
              <p>About</p>
              <p>Products</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-black">Company Information</h4>
            <p className="text-sm leading-7 text-black/50">
              Building a future-ready FMCG ecosystem for everyday Indian
              households.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-black">Contact</h4>
            <button className="flex items-center gap-3 rounded-full bg-[#21140E] px-5 py-3 text-sm font-black text-white">
              <Mail size={16} />
              Contact Team
            </button>
          </div>
        </div>

        {/* SITE CREDITS */}
<div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">

  <p className="text-sm text-black/50">
    © 2026 Dr. Kitchen. Crafted for modern Indian kitchens.
  </p>

  {/* CREDITS */}
  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

    

    <div className="h-3 w-px bg-white/10" />

    <a
      href="https://fabulousmedia.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-70 transition hover:opacity-100"
    >
      <img
        src="/fabulous-logo.png"
        alt="Fabulous Media"
        className="h-3 w-auto object-contain"
      />
    </a>

    <div className="h-3 w-px bg-white/10" />

    <a
      href="https://gocommercially.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-70 transition hover:opacity-100"
    >
      <img
        src="/gocommercially-logo.png"
        alt="Go Commercially"
        className="h-3 w-auto object-contain"
      />
    </a>
  </div>
</div>
      </footer>
    </main>
  );
}