import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    flex: 1;
    height: 54px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    padding: 14px;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    margin-bottom: 32px;
`