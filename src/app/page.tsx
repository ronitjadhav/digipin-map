"use client";
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import DigipinDisplay from '../components/digipin-display';

const MapContainer = dynamic(() => import('../components/map/map-container'), {
    ssr: false
});

const Dashboard = () => {
    const [digipin, setDigipin] = useState<string>('');

    return (
        <div className="mt-24">
            <div className="text-center">
                <h1 className="text-1xl font-bold items-center">Please click on the map to get Digipin</h1>
            </div>
            <MapContainer setDigipin={setDigipin} />
            {digipin && (
                <div className="text-center mt-2">
                    <h1 className="text-1xl font-bold items-center">YOUR DIGIPIN IS: </h1>
                    <DigipinDisplay digipin={digipin}/>
                </div>
            )}


        </div>
    );
}

export default Dashboard;