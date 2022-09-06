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

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import { fetchWeather } from "../store/actions/weatherActions";
import { getTemp,getCity,getCountry,getRain} from "../store/selectors/weatherSelector";

//JSON.toString(data);

const TempNum = () => {
  const dispatch = useDispatch();
  const temp = useSelector(getTemp);
  // const city = useSelector(getCity);
  // const country = useSelector(getCountry);
  // const rainProb = useSelector(getRain);

//change thid fucntion
  const inputHandler = temp(temp);

//const submitHandler = () => {
  //  setState(getState);
  //};


//for this function
  //const inputValue = useSelector(state => state.sample.value);
  
  const handleChange = (e) => {
    dispatch({type: 'FETCH_WEATHER', payload: e.target.value})
  }

  useEffect(() => dispatch(fetchWeather()), [dispatch]);

  return (
    <Container bg="red" maxW="30vw" maxH="30vh" border="1px">
      <FormControl>
        <FormLabel htmlFor="city">City</FormLabel>
        <Input id="city" type="city" onChange={temp} value={"city"} />
        <FormHelperText>Search any City</FormHelperText>
      </FormControl>
      <Box>
        <Button colorScheme="teal" size="sm" onClick={inputHandler}>
          Search
        </Button>
      </Box>

      <Box border="1px" height="30px">
        {this.state? (
          <p>The temp is: {temp.toFixed(0)} °C</p>
        ) : (
          ""
        )}
        <Flex>
        {/*   {city}
          <Spacer />
          {this.state ? <div>{country} </div> : ""} */}
        </Flex>
      </Box>
    </Container>
  );
};

export default TempNum;