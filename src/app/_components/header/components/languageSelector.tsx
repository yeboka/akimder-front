'use client';
import React, { useEffect, useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("kk");
  const languages = ["ru", "kk", "en"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSelectedLanguage(window.localStorage.getItem("locale") || "")
    }
  }, [])

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    setSelectedLanguage(event.target.value);
    if (typeof window === "undefined") return;
    window.localStorage.setItem("locale", event.target.value)
    window.location.reload()
  };

  return (
    <div className="flex items-center">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="p-2 text-white bg-primary hover:cursor-pointer focus:outline-none transition appearance-none"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
