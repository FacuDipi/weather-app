import {
  Container,
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";


import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/actions";
import { getTemp,getCity,getCountry,getRain} from "../store/selectors/weatherSelector";

//JSON.toString(data);

const TempNum = () => {
  const dispatch = useDispatch();
  const temp = useSelector(getTemp);
  const city = useSelector(getCity);
  const coutry = useSelector(getCountry);
  const rainProb = useSelector(getRain);

//change thid fucntion
  const inputHandler = temp(state => state.target.value);

  const submitHandler = () => {
    setState(getState);
  };


//for this function
  const inputValue = useSelector(state => state.sample.value);
  
  const handleChange = (e) => {
    dispatch({type: 'CHANGE_INPUT_VALUE', payload: e.target.value})
  }


  return (
    <Container bg="red" maxW="30vw" maxH="30vh" border="1px">
      <FormControl>
        <FormLabel htmlFor="city">City</FormLabel>
        <Input id="city" type="city" onChange={inputHandler} value={getState} />
        <FormHelperText>Search any City</FormHelperText>
      </FormControl>
      <Box>
        <Button colorScheme="teal" size="sm" onClick={submitHandler}>
          Search
        </Button>
      </Box>

      <Box border="1px" height="30px">
        {apiData.main ? (
          <p>The temp is: {apiData.main.temp.toFixed(0)} °C</p>
        ) : (
          ""
        )}
        <Flex>
          {apiData.name}
          <Spacer />
          {apiData.sys ? <div>{apiData.sys.country} </div> : ""}
        </Flex>
      </Box>
    </Container>
  );
};

export default TempNum;
