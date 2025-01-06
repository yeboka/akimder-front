"use client"

import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [locale, setLocale] = useState<string>("ru")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocale(window.localStorage.getItem("locale") || "")
    }
  }, [])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        phoneNumber,
        password,
      });

      const { access_token, refresh_token } = response.data;

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      // Save tokens to window.localStorage

      // Redirect to dashboard or homepage after successful login
      router.push('/');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (err: any)
    {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">{locale === "ru" ? "Вход" : locale === "en" ? "Sign in" : "Кіру"}</h2>

        {error && <div className="text-red-600 text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">{locale === "ru" ? "Номер телефона" : locale === "en" ? "Phone number" : "Телефон номері"}</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">{locale === "ru" ? "Пароль" : locale === "en" ? "Password" : "Құпия сөз"}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {locale === "ru" ? "Вход" : locale === "en" ? "Sign in" : "Кіру"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
