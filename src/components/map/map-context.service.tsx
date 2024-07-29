import { create } from 'zustand';
import { MapContext } from './types';

const INITIAL_CONTEXT: MapContext = {
    layers: [
        {
            type: 'xyz',
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        }
    ],
    view: {
        zoom: 5,
        center: [78.9629, 20.5937]
    }
};

interface MapStore {
    mapContext: MapContext;
    setMapContext: (context: MapContext) => void;
}

export const useMapStore = create<MapStore>((set: (arg0: { mapContext: any; }) => any) => ({
    mapContext: INITIAL_CONTEXT,
    setMapContext: (context: any) => set({ mapContext: context }),
}));