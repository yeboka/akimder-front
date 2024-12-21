"use client"

import React, { useState } from 'react';
import { BankOutlined, FileTextOutlined, GroupOutlined, LogoutOutlined } from '@ant-design/icons';
import type { GetProp, MenuProps } from 'antd';
import { Button, Menu, Modal, Typography } from "antd";
import AkimatTable from "@/app/admin/_components/AkimatTable";
import AkimatForm from "@/app/admin/_components/AkimatForm";
import NewsTable from "@/app/admin/_components/NewsTable";
import NewsForm from "@/app/admin/_components/NewsForm";
import Container from "@/app/_components/container";
import { useRouter } from "next/navigation";
import AdvertisementTable from "@/app/admin/_components/AdvTable";
import AdvertisementForm from "@/app/admin/_components/AdvForm";

const { Title } = Typography;

type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <BankOutlined />,
    label: 'Акиматы',
  },
  {
    key: '2',
    icon: <FileTextOutlined />,
    label: 'Новости',
  },
  {
    key: '4',
    icon: <GroupOutlined />,
    label: 'Реклама',
  },
  {
    key: '3',
    icon: <LogoutOutlined />,
    label: 'Выйти',
  },
];
//
// interface Akimat {
//   id: number;
//   title: string;
//   description: string;
//   email: string;
//   contacts: string;
// }


const App: React.FC = () => {

  const [selectedKey, setSelectedKey] = useState<string>('1');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Указываем тип MenuInfo для e
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMenuClick = (e: any) => {
    if (e.key == 3) {
      setOpen(true);
      return;
    }
    setSelectedKey(e.key);
  };


  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      router.push('/');

    }
  };

  return (
    <Container>
      <div className='min-h-[97vh] w-full flex'>
        <Menu
          style={{ width: 256 }}
          selectedKeys={[selectedKey]} // Set selected key based on state
          onClick={handleMenuClick} // Handle menu click to update state
          items={items}
        />
        {selectedKey === '1' && <Akimats />}
        {selectedKey === '2' && <News />}
        {selectedKey === '4' && <Advertisements />}
      </div>
      <Modal
        title="Выход"
        open={open}
        onOk={logout}
        okText={"Да"}
        cancelText={"Назад"}
        onCancel={() => {
          setOpen(false)
        }}
      >
        <p>Вы уверены что хотите выйти?</p>
      </Modal>
    </Container>
  );
};

const Akimats: React.FC = () => {

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [akimat, setAkimat] = useState<any>(null)

  return (
    <div className="flex flex-col flex-1 p-6">
      <div className={"w-full flex justify-between items-center"}>
        <Title level={2}>Акиматы</Title>
        {!isFormOpen && <Button type="primary" onClick={() => {
          setIsFormOpen(true)
        }}>
          Добавить акимат
        </Button>}
      </div>
      {
        isFormOpen ?
          <AkimatForm setIsFormOpen={setIsFormOpen} akimat={akimat}/>
          // <AkimatForm akimat={akimat}/>
          :
          <AkimatTable  setSelectedAkimat={setAkimat} setIsFormOpen={setIsFormOpen}/>
          // <AkimatTable setAkimat={setAkimat} />
      }
    </div>
  );
};

const Advertisements: React.FC = () => {

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [akimat, setAkimat] = useState<any>(null)

  return (
    <div className="flex flex-col flex-1 p-6">
      <div className={"w-full flex justify-between items-center"}>
        <Title level={2}>Реклама</Title>
        {!isFormOpen && <Button type="primary" onClick={() => {
          setIsFormOpen(true)
        }}>
            Добавить рекламу
        </Button>}
      </div>
      {
        isFormOpen ?
          <AdvertisementForm setIsFormOpen={setIsFormOpen} advertisement={akimat}/>
          // <AkimatForm akimat={akimat}/>
          :
          <AdvertisementTable  setSelectedAdvertisement={setAkimat} setIsFormOpen={setIsFormOpen}/>
        // <AkimatTable setAkimat={setAkimat} />
      }
    </div>
  );
};

const News: React.FC = () => {

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  const [news, setNews] = useState(null)

  return (
    <div className="flex flex-col flex-1 p-6">
      <div className={"w-full flex justify-between items-center"}>
        <Title level={2}>Новости</Title>
        <Button type="primary" onClick={() => setIsFormOpen(true)}>Добавить новость</Button>
      </div>
      {
        isFormOpen ?
          <NewsForm setIsFormOpen={setIsFormOpen} news={news}/>
          // <NewsForm akimat={news}/>
          :
          // <NewsTable />
          <NewsTable setSelectedNews={setNews} setIsFormOpen={setIsFormOpen}/>
      }
    </div>
  );
};

export default App;
