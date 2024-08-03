"use client";

import React, { useRef, useEffect } from 'react';
import { createMapFromContext, applyContextDiffToMap } from '@geospatial-sdk/openlayers';
import { computeMapContextDiff } from "@geospatial-sdk/core";
import { useMapStore } from './map-context.service';
import { Map, MapContext } from './types';
import { transform } from 'ol/proj';
import Overlay from 'ol/Overlay';
import './map-container.css';
import { getDIGIPINFromLatLon } from 'digipin';
import {PlaceholdersAndVanishInputDemo} from "@/components/search-bar";

interface MapContainerProps {
    setDigipin: (digipin: string) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({ setDigipin }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<Map | null>(null);
    const { mapContext } = useMapStore();
    const popupContainerRef = useRef<HTMLDivElement>(null);
    const popupContentRef = useRef<HTMLDivElement>(null);
    const popupCloserRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        if (!mapInstanceRef.current) {
            mapInstanceRef.current = createMapFromContext(mapContext, mapRef.current);
        } else {
            const diff = computeMapContextDiff(mapContext, mapInstanceRef.current.get('context') as MapContext);
            applyContextDiffToMap(mapInstanceRef.current, diff);
        }

        mapInstanceRef.current.set('context', mapContext);

        const overlay = new Overlay({
            element: popupContainerRef.current!,
            autoPan: false, // Disable autoPan
        });
        mapInstanceRef.current.addOverlay(overlay);

        mapInstanceRef.current.on('click', async (event: any) => {
            const coordinates = event.coordinate;
            const [longitude, latitude] = transform(coordinates, 'EPSG:3857', 'EPSG:4326');
            const digipin = await getDIGIPINFromLatLon(latitude, longitude);
            setDigipin(digipin);
            popupContentRef.current!.innerHTML = `<p>Latitude: ${latitude} <br> Longitude: ${longitude}</p><p>DIGIPIN: ${digipin}</p>`;
            overlay.setPosition(coordinates);
        });

        const clearDigipin = () => {
            setDigipin('');
        };

        popupCloserRef.current!.onclick = function () {
            overlay.setPosition(undefined);
            popupCloserRef.current!.blur();
            clearDigipin();
            return false;
        };

    }, [mapContext]);

    return (
        <div className='relative'>
            <div ref={mapRef} className='h-[calc(100vh-200px)] mt-1 ml-8 mr-8 rounded-3xl overflow-hidden relative'>
                <div className='absolute bottom-4 z-10 w-full'>
                    <PlaceholdersAndVanishInputDemo />
                </div>
            </div>
            <div ref={popupContainerRef} className='ol-popup'>
                <a ref={popupCloserRef} href='#' className='ol-popup-closer'></a>
                <div ref={popupContentRef} className='ol-popup-content'></div>
            </div>
        </div>
    );
};

export default MapContainer;