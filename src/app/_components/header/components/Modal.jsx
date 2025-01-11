import {useEffect, useState} from "react";
import TelegramLogo from "../assets/lyra-icon-TelegramLogo.svg";
import InstagramLogo from "../assets/lyra-icon-InstagramLogo.svg";
import WhatsAppLogo from "../assets/lyra-icon-brand-whatsapp281.svg";
import IconClose from "../assets/lyra-icon-fi-rr-cross-small.svg";
import Image from "next/image";
import axiosInstance from "@/service";

const initData = {
  Акимат: [],
  Маслихаты: [
    {
      name: "Астана қалалық мәслихаты",
      details: {
        title: "Астана қалалық мәслихаты",
        description:
            "Астана қалалық мәслихаты қаладағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, г. Астана, проспект Туран, № 25",
        email: "info@astana-maslihat.kz",
        contacts: ["WhatsApp", "Telegram", "Instagram"],
        pageLink: "https://www.gov.kz/memleket/entities/astana-maslihat",
      },
    },
    {
      name: "Алматы қалалық мәслихаты",
      details: {
        title: "Алматы қалалық мәслихаты",
        description:
            "Алматы қалалық мәслихаты қаладағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, г. Алматы, ул. Байзакова, № 3",
        email: "info@almaty-maslihat.kz",
        contacts: ["Telegram", "Instagram", "WhatsApp"],
        pageLink: "https://www.gov.kz/memleket/entities/maslihat-almaty",
      },
    },
    {
      name: "Шымкент қалалық мәслихаты",
      details: {
        title: "Шымкент қалалық мәслихаты",
        description:
            "Шымкент қалалық мәслихаты қаладағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, г. Шымкент, ул. Республика, № 18",
        email: "info@shymkent-maslihat.kz",
        contacts: ["WhatsApp", "Telegram", "Instagram"],
        pageLink: "https://www.gov.kz/memleket/entities/maslihat-shymkent",
      },
    },
    {
      name: "Ақмола облыстық мәслихаты",
      details: {
        title: "Ақмола облыстық мәслихаты",
        description:
            "Ақмола облыстық мәслихаты облыстағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, Ақмола облысы, г. Кокшетау, ул. Абай, № 32",
        email: "info@akmola-maslihat.kz",
        contacts: ["WhatsApp", "Telegram", "Instagram"],
        pageLink: "https://www.gov.kz/memleket/entities/maslihat-akmola",
      },
    },
    {
      name: "Ақтөбе облыстық мәслихаты",
      details: {
        title: "Ақтөбе облыстық мәслихаты",
        description:
            "Ақтөбе облыстық мәслихаты облыстағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, Ақтөбе облысы, г. Ақтөбе, ул. Абилкайыр хана, № 10",
        email: "info@aktobe-maslihat.kz",
        contacts: ["WhatsApp", "Telegram", "Instagram"],
        pageLink: "https://www.gov.kz/memleket/entities/maslihat-aktobe",
      },
    },
    {
      name: "Алматы облыстық мәслихаты",
      details: {
        title: "Алматы облыстық мәслихаты",
        description:
            "Алматы облыстық мәслихаты облыстағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, Алматы облысы, г. Талдыкорган, ул. Абылай хан, № 50",
        email: "info@almatyobl-maslihat.kz",
        contacts: ["WhatsApp", "Telegram", "Instagram"],
        pageLink: "https://www.gov.kz/memleket/entities/maslihat-almatyobl",
      },
    },
    {
      name: "Атырау облыстық мәслихаты",
      details: {
        title: "Атырау облыстық мәслихаты",
        description:
            "Атырау облыстық мәслихаты облыстағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, Атырау облысы, г. Атырау, ул. Махамбет, № 15",
        email: "info@atyrau-maslihat.kz",
        contacts: ["WhatsApp", "Telegram", "Instagram"],
        pageLink: "https://www.gov.kz/memleket/entities/maslihat-atyrau",
      },
    },
    {
      name: "Шығыс Қазақстан облыстық мәслихаты",
      details: {
        title: "Шығыс Қазақстан облыстық мәслихаты",
        description:
            "Шығыс Қазақстан облыстық мәслихаты облыстағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, Шығыс Қазақстан облысы, г. Өскемен, ул. Кабанбай, № 30",
        email: "info@vko-maslihat.kz",
        contacts: ["WhatsApp", "Telegram", "Instagram"],
        pageLink: "https://www.gov.kz/memleket/entities/maslihat-vko",
      },
    },
    {
      name: "Жамбыл облыстық мәслихаты",
      details: {
        title: "Жамбыл облыстық мәслихаты",
        description:
            "Жамбыл облыстық мәслихаты облыстағы заңнамалық және экономикалық мәселелерді реттейді.",
        address: "Республика Казахстан, Жамбыл облысы, г. Тараз, ул. Төле би, № 28",
        email: "info@zhambyl-maslihat.kz",
        contacts: ["WhatsApp", "Telegram", "Instagram"],
        pageLink: "https://www.gov.kz/memleket/entities/maslihat-zhambyl",
      },
    },
  ]
};

export default function Modal({ isOpen, onClose }) {
  const [selectedTab, setSelectedTab] = useState("Акиматы");
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
  const [locale, setLocale] = useState("ru")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocale(window.localStorage.getItem("locale") || "")
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    axiosInstance.get("/akimat/regions")
        .then((res) => {
          setData({
            ...initData,
            "Акимат": res.data.map((item) => {
              return {
                name: item.title,
                details: {
                  title: item.title,
                  description: item.description,
                  address: item.address,
                  email: item.email,
                  contacts: [item.contacts],
                  pageLink: `/area/${item.id}`,
                },
              }
            })
          })
        })
        .finally(() => {
          setLoading(false)
        })
  }, [])



  const iconMapping = {
    Telegram: TelegramLogo,
    Instagram: InstagramLogo,
    WhatsApp: WhatsAppLogo,
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 z-[100] inset-0 bg-black bg-opacity-50 flex justify-center">
      <div className="bg-white relative w-5/6 h-[100vh] overflow-hidden shadow-lg">
        <button
          className="text-lg absolute top-[20px] right-[20px] font-bold hover:text-red-500"
          onClick={onClose}
        >
          <Image
            src={IconClose}
            alt={""}
            width={40}
            height={40}
          />
        </button>
        {loading}
        <div className="w-full flex">
          {/* Left Column */}
          <div className="h-[100vh] w-1/2 overflow-y-auto bg-gray-100">
            <div className="flex space-x-4 mt-4">
              {Object.keys(data).map((tab) => {
                let tabName = tab;
                if (tab === "Акимат") {
                  tabName = locale === "ru" ? "Акимат" : locale === "en" ? "Akimat" : "Әкімдік"
                } else if (tab === "Маслихаты") {
                  tabName = locale === "ru" ? "Маслихаты" : locale === "en" ? "Maslikhats" : "Мәслихаттар"
                }
                return (
                    <button
                        key={tab}
                        onClick={() => {
                          setSelectedTab(tab);
                          setSelectedItem(null); // Reset selected item when tab changes
                        }}
                        className={`px-4 py-2 ${
                            selectedTab === tab
                                ? "border-b-2 border-primary text-primary font-bold"
                                : "text-gray-500"
                        }`}
                    >
                      {tabName}
                    </button>
                )
              })}
            </div>

            <ul>
              {data[selectedTab]?.map((item, index) => (
                <li
                  key={index}
                  className={`flex ${
                    selectedItem?.name === item?.name ? "bg-white" : ""
                  } justify-between items-center p-4 hover:bg-gray-200 cursor-pointer`}
                  onClick={() =>
                    setSelectedItem({ ...item.details, name: item.name })
                  }
                >
                  {item.name} <span>›</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="h-full w-1/2 overflow-y-auto p-4">
            {selectedItem ? (
              <div className={"mt-14"}>
                <h3 className="text-lg font-bold mb-5">{selectedItem.title}</h3>
                <a
                  href={selectedItem.pageLink}
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mb-5 block"
                >
                  {locale === "ru" ? "Перейти на страницу" : locale === "en" ? "Go to the page" : "Бетке өту"} →
                </a>
                <p className="mb-8">{selectedItem.description}</p>
                <div className="mb-16">
                  <button className="px-4 py-2 border border-primary text-primary hover:bg-primary50 mr-2">
                    {locale === "ru" ? "Онлайн-приемная" : locale === "en" ? "Online reception" : "Онлайн қабылдау бөлмесі"}
                  </button>
                  <button className="px-4 py-2 border border-primary text-primary hover:bg-primary50 mr-2">
                    {locale === "ru" ? "Написать сообщение" : locale === "en" ? "Write a message" : "Хабарлама жазу"}
                  </button>
                </div>
                <p>

                  {locale === "ru" ? "Адрес" : locale === "en" ? "Address" : "Мекен-жайы"}: </p>
                <p className="mb-4">{selectedItem.address}</p>
                <p>
                  E-mail:{" "}
                  <a
                    href={`mailto:${selectedItem.email}`}
                    className="text-primary hover:underline"
                  >
                    {selectedItem.email}
                  </a>
                </p>
                <p className="mt-4">
                  {locale === "ru" ? "Контакты" : locale === "en" ? "Contacts" : "Байланыс"}:
                </p>
                <div className="flex space-x-4">
                  {selectedItem.contacts.map((contact, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`${iconMapping[contact] ? 'w-8' : 'w-26'} h-8 hover:opacity-75`}
                    >
                      {
                        iconMapping[contact] ?
                        <Image
                          src={iconMapping[contact]}
                          alt={contact}
                          width={20}
                          height={20}
                        /> :
                            contact
                      }
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">
                {locale === "ru" ? "Выберите элемент для просмотра" : locale === "en" ? "Select an item to view" : "Көру үшін элементті таңдаңыз"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
