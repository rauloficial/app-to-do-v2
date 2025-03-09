import styled from "styled-components/native";

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;
`

export const ContainerStatus = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const StatusOne = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.BLUE};
`
export const Counter = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-left: 5px;
`