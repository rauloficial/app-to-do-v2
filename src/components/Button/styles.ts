import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {MaterialIcons} from "@expo/vector-icons"
export const Container = styled(TouchableOpacity)`
    width: 54px;
    height: 54px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
    align-items: center;
    justify-content: center;
    margin-left: 12px;
`
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 23,
    color: theme.COLORS.WHITE
  }))``