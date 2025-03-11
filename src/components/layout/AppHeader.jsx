import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link style={{ color: '#fff', fontSize: 35, fontWeight: 600 }} to='/'>ToDo List</Link>
            <ul style={{display: 'flex', gap: 30, alignItems: "center", marginTop: '10px'}}>
                <li><Link to='/matrix' style={{color: '#fff', fontSize: 27}}><AppstoreOutlined /></Link></li>
                <li><Link to='/chart' style={{color: '#fff', fontSize: 27}}><PieChartOutlined /></Link></li>
                <li><a style={{color: '#fff', fontSize: 27}} href="#!" onClick={() =>setDark((prev) => !prev)}>{
                    dark ? <SunOutlined />
                    : <MoonOutlined />}
                    </a></li>
            </ul>
        </Layout.Header>
    )
}