import React, { useEffect, useState } from 'react';
import axiosInstance from "@/service";

const NewsForm = ({ setIsFormOpen, news }) => {
    const [formData, setFormData] = useState({
        akimat_id: 0,
        title_ru: '',
        title_kk: '',
        title_en: '',
        text_ru: '',
        text_kk: '',
        text_en: '',
        image_url: '',
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [akimatOptions, setAkimatOptions] = useState([]);

    useEffect(() => {
        // Fetch available akimat options
        const fetchAkimatOptions = async () => {
            try {
                const response = await axiosInstance.get('/akimat');
                setAkimatOptions(response.data);
            } catch (error) {
                console.error('Error fetching akimat options:', error);
            }
        };

        fetchAkimatOptions();

        if (news) {
            axiosInstance.get(`/news/${news.key}`)
                .then((res) => setFormData(res.data))
                .catch((error) => {
                    console.error('Error fetching news:', error);
                    setResponseMessage('Не удалось загрузить данные.');
                });
        }
    }, [news]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage('');

        try {
            if (news) {
                const response = await axiosInstance.put(`/news/${news.key}`, formData);
                if (response.status === 200) {
                    setResponseMessage('Новость успешно обновлена!');
                    setIsFormOpen(false);
                }
            } else {
                const response = await axiosInstance.post('/news', formData);
                if (response.status === 201) {
                    setResponseMessage('Новость успешно создана!');
                    setFormData({
                        akimat_id: 0,
                        title_ru: '',
                        title_kk: '',
                        title_en: '',
                        text_ru: '',
                        text_kk: '',
                        text_en: '',
                        image_url: '',
                    });
                    setIsFormOpen(false);
                }
            }
        } catch (error) {
            if (error.response) {
                setResponseMessage(`Ошибка: ${error.response.data.message || 'Не удалось отправить данные.'}`);
            } else {
                setResponseMessage('Произошла ошибка сети. Попробуйте снова.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Название (RU)</label>
                    <input
                        type="text"
                        name="title_ru"
                        value={formData.title_ru}
                        onChange={handleChange}
                        className="border rounded-md border-gray-300 p-2 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Атауы (KK)</label>
                    <input
                        type="text"
                        name="title_kk"
                        value={formData.title_kk}
                        onChange={handleChange}
                        className="border rounded-md border-gray-300 p-2 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Title (EN)</label>
                    <input
                        type="text"
                        name="title_en"
                        value={formData.title_en}
                        onChange={handleChange}
                        className="border rounded-md border-gray-300 p-2 w-full"
                    />
                </div>

                {/* Text fields */}
                <div>
                    <label className="block text-sm font-medium mb-1">Текст (RU)</label>
                    <textarea
                        name="text_ru"
                        value={formData.text_ru}
                        onChange={handleChange}
                        className="border rounded-md border-gray-300 p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Мәтін (KK)</label>
                    <textarea
                        name="text_kk"
                        value={formData.text_kk}
                        onChange={handleChange}
                        className="border rounded-md border-gray-300 p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Text (EN)</label>
                    <textarea
                        name="text_en"
                        value={formData.text_en}
                        onChange={handleChange}
                        className="border rounded-md border-gray-300 p-2 w-full"
                    />
                </div>

                {/* Akimat ID select dropdown */}
                <div>
                    <label className="block text-sm font-medium mb-1">Akimat</label>
                    <select
                        name="akimat_id"
                        value={formData.akimat_id}
                        onChange={handleChange}
                        className="border rounded-md border-gray-300 p-2 w-full"
                    >
                        <option value={0} disabled>
                            Выберите Akimat
                        </option>
                        {akimatOptions.map((akimat) => (
                            <option key={akimat.id} value={akimat.id}>
                                {akimat.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Ссылка на изображение</label>
                    <input
                        type="text"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleChange}
                        className="border rounded-md border-gray-300 p-2 w-full"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {news ? (loading ? 'Обновляем...' : 'Обновить') : (loading ? 'Создаем...' : 'Создать')}
                </button>
                <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    disabled={loading}
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 disabled:bg-gray-400 ml-4"
                >
                    Назад
                </button>
            </form>
            {responseMessage && <p className="mt-4 text-red-500">{responseMessage}</p>}
        </div>
    );
};

export default NewsForm;
