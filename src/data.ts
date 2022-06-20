import { Region } from 'react-native-maps'

export interface MarkerProps{
    id: number;
    name: string;
    title: string;
    description: string;
    region: Region;
};

export const markers: MarkerProps[] = [];