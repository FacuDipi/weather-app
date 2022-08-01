import { Container, Flex, Box, extendTheme, theme  } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import headerTheme from "../theme/components/headerTheme";






const Header = () => {
  return (
    <Container  maxW='100vw' width='full' p={0} m={0} >
      <Flex justifyContent='flex-start' >
        <Box pl='2vw' pr='4vw' paddingTop= '1vw' >
          <Logo />
        </Box>
        <Box  width='full' bg='#caf6fb' >
          
        </Box>
      </Flex>
      
    </Container>
    
  );


};

export default Header;
