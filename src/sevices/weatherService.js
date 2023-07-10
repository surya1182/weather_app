

const API_KEY="147e7f28061e325d20d5ea29c2d507c1"

const BASE_URL="https://api.openweathermap.org/data/2.5"

const getweatherdata = (infoType,searchParams)=>{
    const url=new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams,appid:API_KEY})

   
    return fetch(url)
    .then((res)=>res.json());
};

const fomatCurrentWeather=(data)=>{
         const{
            coord: { lat, lon },
            main: { temp, feels_like, temp_min, temp_max, humidity },
            name,
            dt,
            sys: { country, sunrise, sunset },
            weather,
            wind: { speed },
         }=data

         const { main: details, icon } = weather[0];

         return {
           lat,
           lon,
           temp,
           feels_like,
           temp_min,
           temp_max,
           humidity,
           name,
           dt,
           country,
           sunrise,
           sunset,
           details,
           icon,
           speed,
         };

};
//const formatToLocalTime = (
    //secs,
    //zone,
    //format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  //) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const getFormattedWeatherData=async(searchParams)=>{
    const  formattedCurrentWeather = await getweatherdata('weather',searchParams).then(fomatCurrentWeather)
    return formattedCurrentWeather
}  


const iconUrlFromCode = (code) =>

`https://openweathermap.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData;

export { iconUrlFromCode };