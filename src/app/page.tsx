import React from "react";
import { Metadata } from "next";
import HomePage from "./_components/Home"

export async function generateMetadata({ params }: { params: { locale?: string } }): Promise<Metadata> {
  const locale = params.locale || "ru";

  // Define metadata fields based on the locale
  return {
    title:
      locale === "ru"
        ? "Акимпресс - Акиматы и новости регионов Казахстана"
        : locale === "en"
          ? "Akimpress - Akimats and News of Kazakhstan"
          : "Акімпресс - Әкімдіктер және Қазақстан жаңалықтары",
    description:
      "Информация о всех акиматах и актуальных новостях Казахстана на сайте Akimpress - Акимпресс.",
    authors: [{name: "Akimpress"}],
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL("https://www.akimpress.kz.com"),
    openGraph: {
      title:
        locale === "ru"
          ? "Акимпресс - Акиматы и новости регионов Казахстана"
          : locale === "en"
            ? "Akimpress - Akimats and News of Kazakhstan"
            : "Акімпресс - Әкімдіктер және Қазақстан жаңалықтары",
      description:
        "Ознакомьтесь с акиматами (местными органами власти) и последними новостями Казахстана.",
      url: "https://www.akimpress.kz.com",
      images: [
        {
          url: "https://akimpress.kz/_next/image?url=%2FakimpressLogo.png&w=96&q=75",
          alt: "Akimpress Logo",
        },
      ],
      type: "website",
    },
  };
}

const Page = () => {
  return (
    <HomePage />
  );
};

export default Page;