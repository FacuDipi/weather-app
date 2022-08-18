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
import { useState, useEffect } from "react";
import * as Temp from "../data/getWeatherdata";


import { useDispatch, useSelector } from "react-redux";
import { fetchPassengers } from "./store/actions";
import { getPassengers, getCount } from "./store/selectors";

  const dispatch = useDispatch();
  const passengers = useSelector(getPassengers);
  const count = useSelector(getCount);


//JSON.toString(data);

const TempNum = () => {
  const inputHandler = (event) => {
    setGetState(event.target.value);
  };
  const submitHandler = () => {
    setState(getState);
  };

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
