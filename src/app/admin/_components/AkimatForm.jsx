import React, {useEffect, useState} from 'react';
import axiosInstance from "@/service";
import { Select } from 'antd';

const { Option } = Select;

const AkimatForm = ({setIsFormOpen, akimat}) => {
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, parent_id: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.contacts) {
      setResponseMessage('Пожалуйста, заполните обязательные поля.');
      return;
    }

    setLoading(true);
    setResponseMessage('');

    if (akimat) {
      await axiosInstance.put(`/akimat/${akimat.key}`, formData)
          .then(() => {
            setResponseMessage('Данные успешно отправлены!');
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
            });
            setIsFormOpen(false);
          })
          .catch((error) => {
            if (error.response) {
              setResponseMessage(`Ошибка: ${error.response.data.message || 'Не удалось отправить данные'}`);
            } else {
              setResponseMessage('Произошла ошибка сети. Попробуйте снова.');
            }
          })
          .finally(() => {
            setLoading(false)
          });
      return;
    }

    try {
      const response = await axiosInstance.post('/akimat', formData);

      if (response.status === 201) {
        setResponseMessage('Данные успешно отправлены!');
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
        });
        setIsFormOpen(false)
      }
    } catch (error) {
      if (error.response) {
        setResponseMessage(`Ошибка: ${error.response.data.message || 'Не удалось отправить данные'}`);
      } else if (error.request) {
        setResponseMessage('Ошибка сети. Пожалуйста, попробуйте снова.');
      } else {
        setResponseMessage(`Ошибка: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="">
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

          <div>
            <label className="block text-sm font-medium mb-1">Описание (RU)</label>
            <textarea
                name="description_ru"
                value={formData.description_ru}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Сипаттама (KZ)</label>
            <textarea
                name="description_kk"
                value={formData.description_kk}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description (EN)</label>
            <textarea
                name="description_en"
                value={formData.description_en}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
                required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Контакты</label>
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
            <label className="block text-sm font-medium mb-1">Название области/региона (RU)</label>
            <input
                type="text"
                name="region_name_ru"
                value={formData.region_name_ru}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Название области/региона (KK)</label>
            <input
                type="text"
                name="region_name_kk"
                value={formData.region_name_kk}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div><div>
          <label className="block text-sm font-medium mb-1">Название области/региона (EN)</label>
          <input
              type="text"
              name="region_name_en"
              value={formData.region_name_en}
              onChange={handleChange}
              className="border rounded-md border-gray-300 p-2 w-full"
          />
        </div>

          <div>
            <label className="block text-sm font-medium mb-1">Фотография области/региона</label>
            <input
                type="text"
                name="region_image"
                value={formData.region_image}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Описание области/региона (RU)</label>
            <textarea
                name="region_description_ru"
                value={formData.region_description_ru}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Описание области/региона (KK)</label>
            <textarea
                name="region_description_kk"
                value={formData.region_description_kk}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div> <div>
          <label className="block text-sm font-medium mb-1">Описание области/региона (EN)</label>
          <textarea
              name="region_description_en"
              value={formData.region_description_en}
              onChange={handleChange}
              className="border rounded-md border-gray-300 p-2 w-full"
          />
        </div>

          <div>
            <label className="block text-sm font-medium mb-1">Имя акима (RU)</label>
            <input
                type="text"
                name="head_name_ru"
                value={formData.head_name_ru}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Имя акима (KK)</label>
            <input
                type="text"
                name="head_name_kk"
                value={formData.head_name_kk}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Имя акима (EN)</label>
            <input
                type="text"
                name="head_name_en"
                value={formData.head_name_en}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Фотография акима</label>
            <input
                type="text"
                name="head_image"
                value={formData.head_image}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Описание акима (RU)</label>
            <textarea
                name="head_description_ru"
                value={formData.head_description_ru}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Описание акима (KK)</label>
            <textarea
                name="head_description_kk"
                value={formData.head_description_kk}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Описание акима (EN)</label>
            <textarea
                name="head_description_en"
                value={formData.head_description_en}
                onChange={handleChange}
                className="border rounded-md border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Родительский акимат</label>
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

