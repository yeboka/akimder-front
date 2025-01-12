import React from 'react';
import PageContent from "./PageContent";

export async function generateMetadata({params}) {
    // Fetch Akimat data
    const akimatData = await fetch(`https://akimpress.kz/api/akimat/${params.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Default content type
            Accept: "application/json",
            "Accept-Language": "ru",
        },
    })
        .then(async (response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch Akimat data: ${response.status}`);
            }
            const data = await response.json(); // Read the body once here
            return data;
        })
        .catch((error) => {
            console.error("Error fetching Akimat data:", error);
            return null;
        });

    const title =
        akimatData?.[`title_ru`] || "Акимат - Информация об области";
    const description =
        akimatData?.[`description_ru`]?.substring(0, 150) ||
        "Изучайте информацию об акимате, его руководстве, новостях и обновлениях на сайте Акимпресс.";
    const image = akimatData?.region_image || "/default-image.png";
    const url = `https://akimpress.kz/area/${params.id}`;

    return {
        title: `${title}`,
        description,
        authors: [{ name: "Akimpress" }],
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `${title} - Официальная страница акимата`,
            description,
            url,
            images: [
                {
                    url: image,
                    alt: "Region Image",
                },
            ],
            type: "website",
        },
    };
}

const Page = () => {
    return (
        <PageContent />
    );
};

export default Page;
