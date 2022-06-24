import React from "react";
import { FontAwesome } from '@expo/vector-icons';

import { 
    Container, 
    Title 
} from "./styles";
import { View } from "react-native";

interface Props{
    title: string;
    color: string;
    icon: keyof typeof FontAwesome.glyphMap;
    onPress: () => void;
}

export default function Card({ title, color, icon, onPress }: Props) {
    return (
        <Container style={{backgroundColor: color}} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome name={icon} size={11} color="#EDEDED" />
                <Title>{title}</Title>
                </View>
        </Container>
    );
}