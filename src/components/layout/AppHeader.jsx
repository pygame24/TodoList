import { useState } from "react";
import { Layout } from 'antd';
import { PieChartOutlined, MoonOutlined, SunOutlined, AppstoreOutlined  } from '@ant-design/icons';

const headerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    color: '#fff',
    height: 70,
    backgroundColor: '#0c2c4b',
};

export default function AppHeader() {
    // Эту строчку в useContext или в redux
    const [dark, setDark] = useState(false);

    return (
        <Layout.Header style={headerStyle}>
            <h1 style={{fontSize: 35, fontWeight: 600}}>ToDo List</h1>
            <ul style={{display: 'flex', gap: 30, alignItems: "center", marginTop: '10px'}}>
                <li><a href="#!"><AppstoreOutlined style={{color: '#fff', fontSize: 27}} /></a></li>
                <li><a href="#!"><PieChartOutlined style={{color: '#fff', fontSize: 27}} /></a></li>
                <li><a href="#!" onClick={() =>setDark((prev) => !prev)}>{
                    dark ? <SunOutlined style={{color: '#fff', fontSize: 27}} />
                    : <MoonOutlined style={{color: '#fff', fontSize: 27}} />}
                    </a></li>
            </ul>
        </Layout.Header>
    )
}