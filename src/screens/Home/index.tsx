import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '../../hooks/auth';
import  {
  Container,
  Button,
  ButtonTitle
} from './styles'

export default function Home(){
  const navigator = useNavigation();
  const { signOut } = useAuth();
  const { authData } = useAuth();

  return(
    <Container>
      {authData?.token === 'admin' ? 
        (
          <Button 
          onPress={() => navigator.navigate("Maps")}>
            <ButtonTitle>Maps</ButtonTitle>
          </Button>
        )
      :
        (
          <Button 
        onPress={() => navigator.navigate("CreateNotification")}>
          <ButtonTitle>Create Notification</ButtonTitle>
        </Button>
        )
      }
      <Button 
      onPress={signOut}>
        <ButtonTitle>Sair</ButtonTitle>
      </Button>
    </Container>
  );
}