import { Container, Flex, Box, Spacer} from "@chakra-ui/react";
import TempNum from "./tempNum";
import Panel from "./sidePanel";


const Body = () => {


return(
<Container  maxW='100vw' maxH='100vh' border= '1px'>
<Flex>
<Panel/>
    <Box  w='30vw' h='30vh' border= '1px'>
    <TempNum />  
    </Box>
    
    </Flex>
    
    </Container>
    

)

}

export default Body