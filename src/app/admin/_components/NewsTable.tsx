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
  setSelectedNews: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsFormOpen: any,
}

const NewsTable: React.FC<Props> = ({setSelectedNews, setIsFormOpen}) => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/news');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedData = response.data.map((item: any) => ({
        key: item.id.toString(),
        title: item.title,
        text: item.text,
        akimatName: item.akimatName,
        view_count: item.view_count,
        createdAt: item.createdAt,
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
      title: 'Акимат',
      dataIndex: 'akimatName',
      key: 'akimatName',
    },
    {
      title: 'Просмотры',
      dataIndex: 'view_count',
      key: 'view_count',
    },
    {
      title: 'Действия',
      key: 'action',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (value: any) => {
        console.log(value)
        return <Space size="middle">
          <a onClick={() => {
            setSelectedNews(value)
            setIsFormOpen(true)
          }
          }>Изменить</a>
          <a onClick={() => {
            axiosInstance.delete(`/news/${value.key}`).then(fetchData)
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

export default NewsTable;
