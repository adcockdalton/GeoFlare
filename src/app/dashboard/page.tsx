import Strategies from '@/components/strategy-panel';
import Properties from '@/components/property-panel';
import React from 'react';

function DashboardPage() {
    return (
        <div className="flex h-screen">
            <div className="bg-geo-white flex-1 m-6 ml-[8%] mr-[16%]">
                <Properties />
            </div>
            <div className="w-1/3">
                <Strategies />
            </div>
        </div>
    );
};

export default DashboardPage;
