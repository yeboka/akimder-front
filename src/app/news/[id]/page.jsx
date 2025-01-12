import React from 'react';
import PageContent from "./PageContent";

export async function generateMetadata({ params }) {
    // Fetch news data
    const newsData = await fetch(`https://akimpress.kz/api/news/${params.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ru",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch news data");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching news data:", error);
            return null;
        });

    if (!newsData) {
        return {
            title: "Новости - Акимпресс",
            description: "Последние новости и события Казахстана на Акимпресс.",
            authors: [{ name: "Akimpress" }],
            robots: {
                index: true,
                follow: true,
            },
            openGraph: {
                title: "Новости - Акимпресс",
                description: "Последние новости и события Казахстана на Акимпресс.",
                url: `https://akimpress.kz/news/${params.id}`,
                images: [{ url: "/default-news-image.png", alt: "Default News Image" }],
                type: "website",
            },
        };
    }

    // Extract locale-specific values
    const title = newsData.title || "Новость - Акимпресс";
    const description = newsData.text?.substring(0, 150) || "Читайте последние новости и события на Акимпресс.";
    const image = newsData.image_url || "/default-news-image.png";
    const url = `https://akimpress.kz/news/${params.id}`;

    // Generate metadata
    return {
        title: `${title} - Акимпресс`,
        description,
        authors: [{ name: "Akimpress" }],
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `${title} - Акимпресс`,
            description,
            url,
            images: [{ url: image, alt: "News Image" }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} - Акимпресс`,
            description,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    };
}


const Page = () => {
    return (
        <PageContent />
    );
};

export default Page;