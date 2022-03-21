import { Container, Flex } from "@chakra-ui/react";
import TempNum from "./tempNum";


const Body = () => {

return(
<Container  maxW='100vw' maxH='100vh' border= '1px'>
<Flex>
    <TempNum/>
    </Flex>
    </Container>


)

}

export default Body