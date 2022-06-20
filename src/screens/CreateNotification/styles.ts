import styled from  'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`

export const Title = styled.Text`
    font-size: 26px;
    margin-bottom: 30px;
`

export const Button = styled.TouchableOpacity`
    width: 40%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f80555;
`

export const ButtonTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
`

export const Input = styled.TextInput`
    width: 70%;
    border-width: 1px;
    border-color: #094444;
    padding: 5px 7px;
    margin-bottom: 20px;
`

export const Label = styled.Text`
    width: 70%;
    color: #094444;
    font-weight: bold;
    font-size: 14px;
`