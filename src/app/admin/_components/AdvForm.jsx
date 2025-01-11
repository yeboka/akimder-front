import React, { useEffect, useState } from 'react';
import axiosInstance from "@/service";
import { Switch } from 'antd';

const AdvertisementForm = ({ setIsFormOpen, advertisement }) => {
  const [formData, setFormData] = useState({
    image_url: '',
    link: '',
    description: '',
    is_active: true,
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!advertisement) return;
    axiosInstance.get(`/advertisement/${advertisement.key}`).then((res) => {
      setFormData(res.data);
    });
  }, [advertisement]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked) => {
    setFormData((prev) => ({ ...prev, is_active: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image_url || !formData.link) {
      setResponseMessage('Пожалуйста, заполните обязательные поля.');
      return;
    }

    setLoading(true);
    setResponseMessage('');

    try {
      if (advertisement) {
        await axiosInstance.put(`/advertisement/${advertisement.key}`, formData);
        setResponseMessage('Реклама успешно обновлена!');
      } else {
        await axiosInstance.post('/advertisement', formData);
        setResponseMessage('Реклама успешно создана!');
      }
      setIsFormOpen(false);
    } catch (error) {
      if (error.response) {
        setResponseMessage(`Ошибка: ${error.response.data.message || 'Не удалось отправить данные'}`);
      } else {
        setResponseMessage('Произошла ошибка сети. Попробуйте снова.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">URL изображения</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="border rounded-md border-gray-300 p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Ссылка на продукт/событие</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="border rounded-md border-gray-300 p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Описание (необязательно)</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded-md border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Активна</label>
          <Switch
            checked={formData.is_active}
            onChange={handleSwitchChange}
            className="ml-2"
          />
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
                    image_url: '',
                    link: '',
                    description: '',
                    is_active: true,
                  });
                  setIsFormOpen(false);
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

export default AdvertisementForm;
