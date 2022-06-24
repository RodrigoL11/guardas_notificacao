import styled from 'styled-components/native'

export const Container = styled.View`
    width: 90%;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.border_card};
    padding: 20px;
`

export const IdText = styled.Text`
    color: #6E7B8A;
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 10px;
`

export const NomeText = styled.Text`
    color: #66a0d9;
    font-size: 19px;
    font-weight: 500;
`

export const EmailText = styled.Text`
    color: #abbed4;
    font-size: 13px;
    font-weight: 400;
`

export const TokenText = styled.Text`
    color: #6E7B8A;
    font-size: 12px;
`

export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`