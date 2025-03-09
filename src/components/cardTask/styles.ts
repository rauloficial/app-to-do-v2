import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 14px;
`;
export const Title = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
export const Button = styled(TouchableOpacity)`
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`
export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.DANGER,
}))`
`;
