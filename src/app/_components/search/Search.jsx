'use client';
import React, { useState, useEffect } from "react";
import SearchIcon from './assets/Vector.svg';
import Image from "next/image";
import debounce from "lodash/debounce";
import Link from "next/link";
import axiosInstance from "@/service";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [locale, setLocale] = useState("ru");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocale(window.localStorage.getItem("locale") || "ru")
    }
  }, [])


  // Define debounced search function
  const debouncedSearch = debounce(async (query) => {
    if (query.trim()) {
      try {
        const response = await axiosInstance.get(`/search?text=${encodeURIComponent(query)}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  }, 500); // 500ms debounce delay

  useEffect(() => {
    // Call debounced function on query change
    debouncedSearch(query);

    // Cleanup function to cancel debounce on unmount or query change
    return () => {
      debouncedSearch.cancel();
    };
  }, [query]);

  return (
    <div className="flex items-center w-full max-w-[720px] bg-white z-50 relative">
      <input
        type="text"
        placeholder={locale === "ru" ? "Поиск" : locale === "en" ? "Search" : "Іздеу"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 text-gray-700 placeholder-gray-400 font-black outline-none w-full"
      />
      <button
        type={'submit'}
        onClick={() => debouncedSearch(query)} // Optional: Trigger search on button click
        className="p-2 ml-2 text-gray-600 hover:text-gray-800 transition w-14 flex justify-center bg-accent"
        aria-label='Поиск'
      >
        <Image src={SearchIcon} alt={''} className={'text-white'} width={20} height={20} />
      </button>

      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 overflow-auto z-[100]">
          {suggestions.map((item) => (
            <Link href={item.type === "akimat" ? `/area/${item.id}` : `/news/${item.id}`} key={item.id + item.title.ru} className="px-4 cursor-pointer py-2 text-gray-800 flex items-center justify-between hover:bg-gray-100  z-[1000]">
              <strong>{item.title.ru}</strong> {/* Show Russian title as default */}
              <p className={"text-[14px] text-gray-400"}>{item.type === "akimat" ? locale === "ru" ? "Акимат" : "Акімдік" : locale === "ru" ? "Новость" : "Жаңалық"}</p>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
