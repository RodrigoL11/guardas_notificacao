import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, DocumentData, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { database } from '../../config/Firebase'; 
import * as Location from 'expo-location'

import MapView, {
  Callout,
  Marker,
  Region,
} from 'react-native-maps'

import SideMenuItem from '../../components/SideMenuItem'
import SideMenu from '../../components/SideMenu'

import {
  Container,
  IconContainer,
  CalloutContainer,
  CalloutTitle,
  CalloutText,
} from './styles'

const deleteNotification = async (notification: DocumentData) => {
  let id: string = "";

  const querySnapshot = await getDocs(collection(database,"Markers"));
      querySnapshot.forEach((doc) => {
        notification === doc.data() ? id = doc.id : 0
      });

 await deleteDoc(doc(database, "Markers", id));
}

const createThreeButtonAlert = (notification: DocumentData) =>{
  Alert.alert(
    notification.title,
    notification.description,
    [
      {
        text: "Deletar",
        onPress: () => deleteNotification(notification)
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
 
}

var initialRegion: Region;

async function getCurrentPosition() {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
      Alert.alert("Ops!", "Permissão de acesso a localização negada.");
      return;
  }

  let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

  initialRegion = { latitude, longitude, latitudeDelta: 0.09, longitudeDelta: 0.04 };
}

getCurrentPosition()

export default function Maps() {
  const [region, setRegion] = useState<Region>();
  const [open, setOpen] = useState<boolean>(false);
  const [markers, setMarkers] = useState<DocumentData[]>([])

  useEffect(() => {
    async function queryDB(){
      const querySnapshot = await getDocs(collection(database, "Markers"));
      querySnapshot.forEach((doc) => {
       setMarkers(arr => [...arr, doc.data()])
      });
    }
  
    queryDB();
  }, [])

  function handleNotification(index: number) {
    console.log()
  }

  return (
    <Container>
      <MapView
        onPress={() => {open === true ? setOpen(false) : null}}
        initialRegion={initialRegion}
        region={region}
        showsUserLocation={true}
        style={{ width: '100%', height: '100%' }}
      >
        {markers.map((notification, index) => (
          <Marker
            image={require("../../images/map_marker.png")}
            key={index}
            coordinate={{
              latitude: Number(notification.region.latitude),
              longitude: Number(notification.region.longitude),
            }}            
          >
            <Callout onPress={() => createThreeButtonAlert(notification)}>
              <CalloutContainer>
                <CalloutTitle>{notification.title}</CalloutTitle>
                <CalloutText>{notification.description}</CalloutText>
              </CalloutContainer>         
              
            </Callout>
          </Marker>
        ))}
      </MapView>
      {!open ? null :
        <SideMenu>
          {markers.map((notification, index) => (
            <SideMenuItem
              key={index}
              title={notification.title}
              onPress={() => {
                const newRegion = {
                  latitude: notification.region.latitude,
                  longitude: notification.region.longitude, 
                  latitudeDelta: 0.001, 
                  longitudeDelta: 0.001,
                };
                setRegion(newRegion);
                setTimeout(() => {
                  setRegion(undefined);
                  setOpen(false);
                }, 10)
              }}
            />
          ))}
        </SideMenu>
      }
      <IconContainer 
        menuIsOpen={open}
        onPress={() => setOpen(!open)}>
        <FontAwesome5 name="map-marker-alt" size={24} color={open ? "white" : "black"} />
      </IconContainer>
    </Container>
  );
};