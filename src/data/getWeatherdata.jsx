

export const getWeather = () => {
    fetch(`api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=dbe74c1e10696b7c5c58b4e703b1eefd`)
    .then(res => res.json())

}
