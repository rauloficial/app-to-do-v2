import { Container, Img } from "./styles";
import LogoImg from "@/assets/Logo.png"
export function Logo(){
    return(
        <Container>
            <Img source={LogoImg}/>
        </Container>
    )
}