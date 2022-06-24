import React from 'react';
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    MarkTitle
} from './styles'

interface Props extends TouchableOpacityProps{
    title: string;
    onPress: () => void;
}

export default function SideMenuItem({ title, onPress ,...rest }: Props) {
    return(
        <Container onPress={onPress}>
            <MarkTitle>{title}</MarkTitle>
        </Container>
    );
}