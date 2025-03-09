import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  margin-top: 20px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
export const ImgEmpty = styled.Image`
  margin-top: 20px;
  width: 56px;
  height: 56px;
  margin-bottom: 10px;
`;
export const InfoOne = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const InfoTwo = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
