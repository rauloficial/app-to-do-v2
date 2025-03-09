import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps;
export function ButtonApp({...rest}: Props){
    return(
        <Container {...rest}>
            <Icon name="add"/>
        </Container>
    )
 
}