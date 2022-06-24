import React, { useState } from 'react';
import { Alert } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from '../../hooks/auth';
import * as Location from "expo-location";
import { database } from '../../config/Firebase';

import Button from '../../components/Button'

import {
    Container,
    Title,
    Input,
    Label
} from './styles'

export default function CreateNotification(){
    const { authData } = useAuth();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const createNotification = async () =>{
        if(title.trim() && description.trim()){
            const region = await getCurrentPosition();

            if(region && authData){
                const newData = {
                    id: 0,
                    name: authData.name,
                    title: title,
                    description: description,
                    region: region,
                }

                const docRef = await addDoc(collection(database, 'Markers'), newData);
                console.log("Document written with ID: ", docRef.id);

                setTitle(''); setDescription('');
            }
        }
    }

    const getCurrentPosition = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
        
            if (status !== "granted") {
                Alert.alert("Ops!", "Permissão de acesso a localização negada.");
                return;
            }
        
            let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        
            return { latitude, longitude, latitudeDelta: 0.09, longitudeDelta: 0.04 };
    };

    return(
            <Container>
                <Title>Criar Notificação</Title>
                <Label>Nome</Label>
                <Input
                    style={{backgroundColor: "#b8b7bb"}}
                    value={authData?.name}
                    editable={false}
                />
                <Label>Title</Label>
                <Input 
                    value={title}
                    onChangeText={value => setTitle(value)}
                />
                <Label>Description</Label>
                <Input
                    value={description}
                    onChangeText={value => setDescription(value)}
                    multiline={true}
                    numberOfLines={5}
                />
                <Button onPress={createNotification}
                    title="Create Notification"   
                />
            </Container>
    );
}