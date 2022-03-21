import {
  Container,
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
  
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getWeather } from "../data/getWeatherdata";

//JSON.toString(data);

const TempNum = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("");
  const [state, setState] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setApiData(data);
        console.log(data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };
  const submitHandler = () => {
    setState(getState);
  };

  return (
      <Container>

     
  <FormControl>
    <FormLabel htmlFor='city'>City</FormLabel>
    <Input id='city' type='city' onChange={inputHandler} value={getState}/>
  <FormHelperText>Search any City</FormHelperText>
  </FormControl>
<Box>
<Button colorScheme='teal' size='sm'>
Select
</Button>
</Box>

</Container>
  )
};

export default TempNum;
