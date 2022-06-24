import React from 'react';
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button'

import {
  Container 
} from './styles'

export default function Home() {
  const navigator = useNavigation();
  const { signOut } = useAuth();
  const { authData } = useAuth();

  return (
    <Container>
      {authData?.token === 'admin' ?
        (
          <View style={{width: '100%', alignItems: 'center'}}>
            <Button
              onPress={() => navigator.navigate("Maps")}
              title="Mapa"
            />
            <Button 
              onPress={() => navigator.navigate("Users")}
              title="Usuários"
            />
          </View>
        )
        : 0
      }

      <Button
        onPress={() => navigator.navigate("CreateNotification")}
        title="Criar Notificação"
      />

      <Button
        onPress={signOut}
        title="Sair"
      />
    </Container>
  );
}