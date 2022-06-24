import styled from  'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background};
`

export const Title = styled.Text`
    font-size: 26px;
    margin-bottom: 30px;
    color: #fff;
`

export const Input = styled.TextInput`
    width: 70%;
    border-width: 1px;
    background-color: #FFF;
    border-radius: 6px;
    padding: 5px 7px;
    margin-bottom: 20px;
`

export const Label = styled.Text`
    width: 70%;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
`