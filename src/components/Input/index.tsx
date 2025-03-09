import { TextInputProps } from "react-native";
import { Container } from "./styles";
import theme from "@/theme";

type Props = TextInputProps;
export function InputApp({...rest}: Props){
    return(
        <Container 
        {...rest}
        placeholderTextColor={theme.COLORS.GRAY_300}
        />
    )
 
}