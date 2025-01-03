import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import {
    SidebarProvider,
} from "./ui/sidebar";
import { Button } from "./ui/button"; 
import SideBarDemo from './SideBarDemo';
import Repo from './Projects';
import MobileSidebar from './Mobile_Sidebar';
import RepositoryList from "./Project_List";
import repositories from "../assets/data/repositories.json";
import CodeAnt from "../assets/img/CodeAnt Ai_mobile.png";

import { Menu } from 'lucide-react';

const Dashboard = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const MobileLayout = () => (
        <div className='min-h-screen bg-gray-50'>
            <div className='flex items-center justify-between p-4 bg-white border-b'>
                <img src={CodeAnt} alt="CodeAnt AI" className="h-8" />
                <Button variant="outline" className="shadow-none" onClick={() => setIsSidebarOpen(true)}>
                    <Menu className='h-14 w-14'/>
                </Button>
            </div>
            <div className='p-1'>
                <RepositoryList repositories={repositories} />
            </div>
            <MobileSidebar className="bg-white" isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
    );

    const DesktopLayout = () => (
        <div className='flex h-screen bg-[#FAFAFA]'>
            <div className=' bg-white text-black w-1/6 h-full shadow-lg'>
                <SidebarProvider className="w-full h-full">
                    <SideBarDemo className="w-full h-full" />
                </SidebarProvider>
            </div>
            <div className="h-screen w-5/6 mx-auto px-4 py-4">
                <Repo />
            </div>
        </div>
    );

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Dashboard;
