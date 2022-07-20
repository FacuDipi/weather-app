import { useState, useEffect } from "react";

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
  Spacer
  
} from "@chakra-ui/react";
export const GetWeather = () => {
 



const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("");
  const [state, setState] = useState("");

  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=dbe74c1e10696b7c5c58b4e703b1eefd&units=metric`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setIsLoaded(true);
        console.log(data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.log(error);
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
    <Input id='city'  onChange={inputHandler} value={getState}/>
  <FormHelperText>Search any City</FormHelperText>
  </FormControl>
<Box>
<Button colorScheme='teal' size='sm' onClick={submitHandler}>
Search
</Button>
</Box>

<Box border='1px' height= '30px'>

{apiData.main ? (
<p>

The temp is: {(apiData.main.temp).toFixed(0)} °C

</p>
):("")

}
<Flex >

{apiData.name}
<Spacer/>
{apiData.sys ? (<div>{apiData.sys.country } </div>)
: ("")
}


</Flex>

</Box>

</Container>
  )
};

export default GetWeather;