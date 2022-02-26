import { Container, Flex, Box, extendTheme, theme  } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import headerTheme from "../theme/components/headerTheme";




const Header = () => {
  return (
    <Container theme={headerTheme} maxW='container.md'width='full' p={0} m={0} >
      <Flex justifyContent='flex-start'>
        <Box bg='brand.20'>
          <Logo />
        </Box>
        <Box pl={50}>
          <Logo />
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
