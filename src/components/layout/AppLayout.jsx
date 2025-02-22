import React from "react"
import { Layout } from 'antd';
import AppHeader from "./AppHeader";
import AppSider from './AppSider';
import AppContent from "./AppContent";

// const { Header, Sider, Content } = Layout;

export default function AppLayout() {


    return (
        <Layout style={{width: "100%", height: "100vh"}}>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
        </Layout>
    )
}