import React from "react"
import { Layout } from 'antd';
import AppHeader from "./AppHeader";
import AppSider from './AppSider';
import AppContent from "./AppContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppChart from "./AppChart";
import AppMatrix from "./AppMatrix";

export default function AppLayout() {
    function borderColor(task) {
        let tag;
        if (task.tag == 'Срочно и важно') {
            tag = 'red'
        }
        else if (task.tag == 'Не срочно, но важно') {
            tag = 'orange';
        }
        else if (task.tag == 'Срочно, но не важно') {
            tag = 'blue';
        }
        else {
            tag = 'grey'
        }
        return tag;
    }

    return (
        <BrowserRouter>
            <Layout style={{ width: "100%", height: "100vh" }}>
                <AppHeader />
                <Layout>
                    <AppSider borderColor={borderColor} />

                    <Routes>
                        <Route path="/" element={<AppContent borderColor={borderColor} />} />
                        <Route path="/chart" element={<AppChart borderColor={borderColor} />} />
                        <Route path="/matrix" element={<AppMatrix borderColor={borderColor} />} />
                    </Routes>

                </Layout>
            </Layout>
        </BrowserRouter>
    )
}