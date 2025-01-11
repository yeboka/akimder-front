import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';
import axiosInstance from "@/service";

interface DataType {
  key: string;
  title: string;
  description: string;
  email: string;
  contacts: string;
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedAkimat: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsFormOpen: any,
}

const AkimatTable: React.FC<Props> = ({setSelectedAkimat, setIsFormOpen}) => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/akimat');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedData = response.data.map((item: any) => ({
        key: item.id.toString(),  // Преобразуем id в строку для ключа
        title: item.title,
        description: item.description,
        email: item.email,
        contacts: item.contacts,
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
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Контакты',
      dataIndex: 'contacts',
      key: 'contacts',
    },
    {
      title: 'Действия',
      key: 'action',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (value: any) => {
        return <Space size="middle">
          <a onClick={() => {
            setSelectedAkimat(value)
            setIsFormOpen(true)
          }
          }>Изменить</a>
          <a onClick={() => {
            axiosInstance.delete(`/akimat/${value.key}`).then(fetchData)
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

export default AkimatTable;
