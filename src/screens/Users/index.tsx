import React, { useEffect, useState } from 'react';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { database } from '../../config/Firebase';

import {
  Container,
} from './styles'

import Card from '../../components/Card';

export default function Users() {
  const [users, setUsers] = useState<DocumentData[]>([])

  useEffect(() => {
    const queryUsers = async () => {
      const querySnapshot = await getDocs(collection(database, "Users"));
      querySnapshot.forEach((doc) => {
        setUsers(arr => [...arr,
          {
            id: doc.id,
            data: doc.data(),
          }
        ]
        )
      });
    }

    queryUsers();
  }, [])

  return (
    <Container>
        {users.map((data, index) =>     
          (          
            <Card 
              key={index}
              user={data}
            />
          )
        )}
    </Container>
  );
}