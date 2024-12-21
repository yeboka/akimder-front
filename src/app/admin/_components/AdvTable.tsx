import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';
import axiosInstance from "@/service";

interface DataType {
  key: string;
  image_url: string;
  link: string;
  description: string;
  is_active: boolean;
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedAdvertisement: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsFormOpen: any;
}

const AdvertisementTable: React.FC<Props> = ({ setSelectedAdvertisement, setIsFormOpen }) => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/advertisement');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedData = response.data.map((item: any) => ({
        key: item.id.toString(),  // Преобразуем id в строку для ключа
        image_url: item.image_url,
        link: item.link,
        description: item.description || 'Нет описания',
        is_active: item.is_active,
      }));
      setData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Изображение',
      dataIndex: 'image_url',
      key: 'image_url',
      render: (text: string) => <img src={text} alt="Advertisement" width={50} />,
    },
    {
      title: 'Ссылка',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Статус',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (isActive: boolean) => (isActive ? 'Активно' : 'Неактивно'),
    },
    {
      title: 'Действия',
      key: 'action',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (value: any) => {
        return <Space size="middle">
          <a onClick={() => {
            setSelectedAdvertisement(value);
            setIsFormOpen(true);
          }}>Изменить</a>
          <a onClick={() => {
            axiosInstance.delete(`/advertisements/${value.key}`).then(fetchData);
          }}>Удалить</a>
        </Space>
      },
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Table<DataType> columns={columns} dataSource={data as any} loading={loading} />;
};

export default AdvertisementTable;
