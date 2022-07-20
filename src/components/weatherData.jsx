  import { useState, useEffect } from "react";

 export const WeatherData = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState("");
    const [state, setState] = useState("");
  
    const apiKey = process.env.REACT_APP_API_KEY;
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
        });
    }, [apiUrl]);
  
    const inputHandler = (event) => {
      setGetState(event.target.value);
    };
    const submitHandler = () => {
      setState(getState);
    };
  
    return (
        WeatherData
    )
  };
  

  