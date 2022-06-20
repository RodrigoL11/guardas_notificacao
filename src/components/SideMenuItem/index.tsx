import React from 'react';
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    MarkTitle
} from './styles'

interface Props extends TouchableOpacityProps {
    title: string;
}

export default function SideMenuItem({ title, ...rest }: Props) {
    return(
        <Container {...rest}>
            <MarkTitle>{title}</MarkTitle>
        </Container>
    );
}