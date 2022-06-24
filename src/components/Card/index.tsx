import React, { useImperativeHandle, useRef, useState } from "react";
import { DocumentData } from "firebase/firestore";

import {
    Container,
    EmailText,
    IdText,
    NomeText,
    TokenText,
    RowContainer
} from "./styles";

import CardButton from '../CardButton'
import { View } from "react-native";

export default function Card({ user }: DocumentData) {
    return (
        <Container>
            <RowContainer>
                <IdText>#{user.id}</IdText>
                <TokenText>{user.data.token}</TokenText>
            </RowContainer>
            <NomeText>{user.data.name}</NomeText>

            <RowContainer>
                <EmailText>{user.data.email}</EmailText>
                <View style={{ flexDirection: 'row' }}>
                    <CardButton
                        title="Editar"
                        color="#16812d"
                        icon="pencil"
                        onPress={() => {}}
                    />
                    <CardButton
                        title="Remover"
                        color="#991717"
                        icon="trash"
                        onPress={() => { }}
                    />
                </View>
            </RowContainer>

        </Container>
    );
}