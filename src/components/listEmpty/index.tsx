import { Container, ImgEmpty, InfoOne, InfoTwo } from "./styles";
import Img from "@/assets/Clipboard.png"
export function ListEmpty(){
    return (
        <Container>
            <ImgEmpty source={Img}/>
            <InfoOne>Você ainda não adicionou nenhuma tarefa.</InfoOne>
            <InfoTwo>Adicione agora mesmo!</InfoTwo>
        </Container>
    )
}