import React from "react"
import { Layout } from 'antd';
import AppHeader from "./AppHeader";
import AppSider from './AppSider';
import AppContent from "./AppContent";

import { BrowserRouter, Routes, Route } from "react-router";
import AppChart from "./AppChart";

export default function AppLayout() {

    return (
        <Layout style={{ width: "100%", height: "100vh" }}>
            <AppHeader />
            <Layout>
                <AppSider />

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<AppContent />} />
                        <Route path="/chart" element={<AppChart />} />
                    </Routes>
                </BrowserRouter>

            </Layout>
        </Layout>
    )
}