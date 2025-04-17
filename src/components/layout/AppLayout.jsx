import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';

import AppHeader from "./AppHeader";
import AppSider from './AppSider';
import AppContent from "./AppContent";
import AppChart from "./AppChart";
import AppMatrix from "./AppMatrix";
import { useTaskContext } from "../../context/TaskContext";

export default function AppLayout() {
    const { dark } = useTaskContext()

    return (
        <BrowserRouter>
            <Layout className={dark && 'dark'} style={{ width: "100%", height: "100vh" }}>
                <AppHeader />
                <Layout>
                    <AppSider />
                    <Routes>
                        <Route path="/" element={<AppContent />} />
                        <Route path="/chart" element={<AppChart 
                        />} />
                        <Route path="/matrix" element={
                            <AppMatrix />} />
                    </Routes>

                </Layout>
            </Layout>
        </BrowserRouter>
    )
}