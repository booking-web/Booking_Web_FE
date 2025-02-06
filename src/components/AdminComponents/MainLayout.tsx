import type { MenuProps } from "antd";
import { Menu, Layout, Button } from "antd";
import Text from "../../components/helpers/I18Text";
import { PieChartOutlined, SettingOutlined, PlusCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: <Text id="statistical" />,
    icon: <PieChartOutlined />,
    children: [
      { key: "/statistical/top-rated-doctor", label: <Text id="top.rated.doctor" /> },
      { key: "/statistical/most-booked-doctor", label: <Text id="most.booked.doctor" /> },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub2",
    label: <Text id="manage" />,
    icon: <SettingOutlined />,
    children: [
      { key: "/manage/doctors", label: <Text id="doctors" /> },
      { key: "/manage/users", label: <Text id="users" /> },
      { key: "/manage/clinics", label: <Text id="clinics" /> },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub3",
    label: <Text id="create" />,
    icon: <PlusCircleOutlined />,
    children: [
      { key: "/create/doctor-account", label: <Text id="doctor.account" /> },
      { key: "/create/specialty-information", label: <Text id="specialty.information" /> },
    ],
  },
  {
    type: "divider",
  },
];

const MainLayout = () => {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/admin${e.key}`);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width="300px">
        <Menu onClick={onClick} style={{ height: "100vh", paddingTop: "50px" }} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" items={items} />
        <Button>a</Button>
      </Sider>
      <Content>
        <div style={{ padding: 24, background: "#fff", textAlign: "center", height: "100%" }}>
          <LogoutOutlined style={{ fontSize: "30px", display: "flex", justifyContent: "end" }} onClick={() => navigate("/")} />
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
