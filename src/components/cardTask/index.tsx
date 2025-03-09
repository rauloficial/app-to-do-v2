import { TouchableOpacityProps } from "react-native";
import { Button, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    onRemove: () => void;
}
export function CardTask({title, onRemove, ...rest}: Props){
    return (
        <Container>
            <Title>{title}</Title>
            <Button{...rest} onPress={onRemove}>
                <Icon name="trash-can-outline"/>
            </Button>
        </Container>
    )
}