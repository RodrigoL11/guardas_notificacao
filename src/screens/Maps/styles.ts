import styled from 'styled-components/native';

interface IContainerProps {
    menuIsOpen: boolean;
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const IconContainer = styled.TouchableOpacity<IContainerProps>`
    width: 48px;
    height: 48px;
    border-width: 3px;
    border-color: ${props => props.menuIsOpen ? '#FFF' : '#000'};
    border-radius: 999px;
    position: absolute;
    left: 15px;
    top: 35px;
    align-items: center;
    justify-content: center;
`

export const CalloutContainer = styled.View`
    width: 160px;
    height: 100%;
    padding: 6px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    justify-content: center;
`

export const CalloutTitle = styled.Text`
    color: #0089a5;
    text-decoration-line: underline;
    font-size: 15px;
    margin-bottom: 10px;
`

export const CalloutText = styled.Text`
    color: #005555;
    font-size: 12px;
`