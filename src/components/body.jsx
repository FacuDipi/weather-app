import { Container, Flex } from "@chakra-ui/react";
import TempNum from "./tempNum";
import Bg from "./gradientBackground";

const Body = () => {

return(
<Container  maxW='100vw' maxH='100vh' border= '1px'>

<Flex>
<Bg/>   
    <TempNum/>
    </Flex>
    </Container>


)

}

export default Body