import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
    align-items: center;
`
export const Form = styled.View`
    flex-direction: row;
`
export const ContainerList = styled.View`
    width: 100%;
    flex: 1;
`