import React, {useEffect, useState} from 'react';
import axiosInstance from "@/service";
import {Select} from 'antd';

const {Option} = Select;

const AkimatForm = ({isBg=flase, setIsFormOpen, akimat}) => {
    const [formData, setFormData] = useState({
        title_ru: '',
        title_kk: '',
        title_en: '',
        description_ru: '',
        description_kk: '',
        description_en: '',
        address_ru: '',
        address_kk: '',
        address_en: '',
        email: '',
        contacts: '',
        region_name_ru: '',
        region_name_kk: '',
        region_name_en: '',
        region_image: '',
        region_description_ru: '',
        region_description_kk: '',
        region_description_en: '',
        head_name_ru: '',
        head_name_kk: '',
        head_name_en: '',
        head_image: '',
        head_description_ru: '',
        head_description_kk: '',
        head_description_en: '',
        parent_id: null,
        whatsapp: '',
        instagram: '',
        telegram: '',
        type: 'regional', // Default type
    });

    const [akimatOptions, setAkimatOptions] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!akimat) return;
        axiosInstance.get(`/akimat/${akimat.key}`).then((res) => {
            setFormData(res.data);
        });
    }, [akimat]);

    useEffect(() => {
        const fetchAkimatOptions = async () => {
            try {
                const response = await axiosInstance.get('/akimat');
                setAkimatOptions(response.data);
            } catch (error) {
                console.error('Error fetching akimat options:', error);
            }
        };
        fetchAkimatOptions();
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSelectChange = (value) => {
        setFormData((prev) => ({...prev, parent_id: value}));
    };

    const handleTypeChange = (value) => {
        setFormData((prev) => ({...prev, type: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.contacts) {
            setResponseMessage('Пожалуйста, заполните обязательные поля.');
            return;
        }

        setLoading(true);
        setResponseMessage('');

        try {
            if (akimat) {
                await axiosInstance.put(`/akimat/${akimat.key}`, formData);
                setResponseMessage('Данные успешно обновлены!');
            } else {
                const response = await axiosInstance.post('/akimat', formData);
                if (response.status === 201) {
                    setResponseMessage('Данные успешно отправлены!');
                }
            }
            setFormData({
                title_ru: '',
                title_kk: '',
                title_en: '',
                description_ru: '',
                description_kk: '',
                description_en: '',
                address_ru: '',
                address_kk: '',
                address_en: '',
                email: '',
                contacts: '',
                region_name_ru: '',
                region_name_kk: '',
                region_name_en: '',
                region_image: '',
                region_description_ru: '',
                region_description_kk: '',
                region_description_en: '',
                head_name_ru: '',
                head_name_kk: '',
                head_name_en: '',
                head_image: '',
                head_description_ru: '',
                head_description_kk: '',
                head_description_en: '',
                parent_id: null,
                whatsapp: '',
                instagram: '',
                telegram: '',
                type: 'regional',
            });
            setIsFormOpen(false);
        } catch (e) {
            console.log(e)
            setResponseMessage('Произошла ошибка при отправке данных.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={`${isBg && "bg-gray-200 p-3 rounded-lg "}`}>
            <form onSubmit={handleSubmit} className="space-y-10">
                <div className="rounded-md border-1 bg-white border-gray p-4 space-y-4"
                     style={{"box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                    <h3 className="text-lg font-medium">Основная информация</h3>
                    <div>
                        <label className="block text-sm font-normal mb-1">Название (RU)</label>
                        <input
                            type="text"
                            name="title_ru"
                            value={formData.title_ru}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-normal mb-1">Атауы (KK)</label>
                        <input
                            type="text"
                            name="title_kk"
                            value={formData.title_kk}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-normal mb-1">Title (EN)</label>
                        <input
                            type="text"
                            name="title_en"
                            value={formData.title_en}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div className="flex gap-4 items-end">
                        <div className="w-1/3">
                            <label className="block text-sm font-normal mb-1">Тип</label>
                            <Select
                                value={formData.type}
                                onChange={handleTypeChange}
                                className="w-full"
                                placeholder="Выберите тип"
                            >
                                <Option value="regional">Областной</Option>
                                <Option value="district">Региональный</Option>
                                <Option value="village">Сельский</Option>
                            </Select>
                        </div>
                        {
                            formData.type !== "regional" &&
                            <div className="w-2/3">
                                <label className="block text-sm font-normal mb-1">Родительский акимат (если тип акимата
                                    Региональный
                                    или Сельский укажите родительский акимат)</label>
                                <Select
                                    value={formData.parent_id}
                                    onChange={handleSelectChange}
                                    className="w-full"
                                    placeholder="Select parent akimat"
                                >
                                    {akimatOptions.map((option) => (
                                        <Option key={option.id} value={option.id}>
                                            {option.title}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        }

                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Описание (RU)</label>
                        <textarea
                            name="description_ru"
                            value={formData.description_ru}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Сипаттама (KZ)</label>
                        <textarea
                            name="description_kk"
                            value={formData.description_kk}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Description (EN)</label>
                        <textarea
                            name="description_en"
                            value={formData.description_en}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                </div>

                <div className="rounded-md border-1 bg-white border-gray p-4 space-y-4"
                     style={{"box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                    <h3 className="text-lg font-medium">Контакты и Социальные сети</h3>
                    <div>
                        <label className="block text-sm font-normal mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-normal mb-1">Номер телефона</label>
                            <input
                                type="text"
                                name="contacts"
                                value={formData.contacts}
                                onChange={handleChange}
                                className="border rounded-md border-gray-300 p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-normal mb-1">WhatsApp</label>
                            <input
                                type="text"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                className="border rounded-md border-gray-300 p-2 w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-normal mb-1">Instagram</label>
                            <input
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleChange}
                                className="border rounded-md border-gray-300 p-2 w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-normal mb-1">Telegram</label>
                            <input
                                type="text"
                                name="telegram"
                                value={formData.telegram}
                                onChange={handleChange}
                                className="border rounded-md border-gray-300 p-2 w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-md border-1 bg-white border-gray p-4 space-y-4"
                     style={{"box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}
                >
                    <h3 className="text-lg font-medium">Информация про область</h3>
                    <div>
                        <label className="block text-sm font-normal mb-1">Название области/региона (RU)</label>
                        <input
                            type="text"
                            name="region_name_ru"
                            value={formData.region_name_ru}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-normal mb-1">Название области/региона (KK)</label>
                        <input
                            type="text"
                            name="region_name_kk"
                            value={formData.region_name_kk}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Название области/региона (EN)</label>
                        <input
                            type="text"
                            name="region_name_en"
                            value={formData.region_name_en}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-normal mb-1">Ссылка на фотографию области/региона</label>
                        <input
                            type="text"
                            name="region_image"
                            value={formData.region_image}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-normal mb-1">Описание области/региона (RU)</label>
                        <textarea
                            name="region_description_ru"
                            value={formData.region_description_ru}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-normal mb-1">Описание области/региона (KK)</label>
                        <textarea
                            name="region_description_kk"
                            value={formData.region_description_kk}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Описание области/региона (EN)</label>
                        <textarea
                            name="region_description_en"
                            value={formData.region_description_en}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                </div>


                <div className="rounded-md border-1 bg-white border-gray p-4 space-y-4"
                     style={{"box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                    <h3 className="text-lg font-medium">Информация про акима</h3>
                    <div>
                        <label className="block text-sm font-normal mb-1">Имя акима (RU)</label>
                        <input
                            type="text"
                            name="head_name_ru"
                            value={formData.head_name_ru}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Имя акима (KK)</label>
                        <input
                            type="text"
                            name="head_name_kk"
                            value={formData.head_name_kk}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Имя акима (EN)</label>
                        <input
                            type="text"
                            name="head_name_en"
                            value={formData.head_name_en}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-normal mb-1">Ссылка на фотографию акима</label>
                        <input
                            type="text"
                            name="head_image"
                            value={formData.head_image}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-normal mb-1">Описание акима (RU)</label>
                        <textarea
                            name="head_description_ru"
                            value={formData.head_description_ru}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Описание акима (KK)</label>
                        <textarea
                            name="head_description_kk"
                            value={formData.head_description_kk}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-normal mb-1">Описание акима (EN)</label>
                        <textarea
                            name="head_description_en"
                            value={formData.head_description_en}
                            onChange={handleChange}
                            className="border rounded-md border-gray-300 p-2 w-full"
                        />
                    </div>

                </div>


                <div className="mt-4">
                    {loading ? (
                        <div className="text-blue-500">Отправка данных...</div>
                    ) : (
                        <div className="flex gap-5">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                            >
                                Сохранить
                            </button>
                            <button
                                onClick={() => {
                                    setFormData({
                                        title_ru: '',
                                        title_kk: '',
                                        title_en: '',
                                        description_ru: '',
                                        description_kk: '',
                                        description_en: '',
                                        address_ru: '',
                                        address_kk: '',
                                        address_en: '',
                                        email: '',
                                        contacts: '',
                                        region_name: '',
                                        region_image: '',
                                        region_description: '',
                                        head_name: '',
                                        head_image: '',
                                        head_description: '',
                                        parent_id: null,
                                    });
                                    setIsFormOpen(false)
                                }}
                                className="border-blue-500 border text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition"
                            >
                                Назад
                            </button>

                        </div>


                    )}
                </div>

                {responseMessage && (
                    <div className="mt-4 text-sm text-red-500">{responseMessage}</div>
                )}
            </form>
        </div>
    );
};

export default AkimatForm;

