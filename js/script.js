let city_name, weather_object;
let anchors_arr = [];
let search = document.querySelector(".my_searchbar");
  search.getElementsByTagName("img")[0].addEventListener("click", async () => {
    city_name = search.getElementsByTagName("input")[0].value;
    city_name = city_name.toLowerCase();
    main(city_name);
  });
const url_func = async (city_name) =>{
  const url =
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + city_name;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "554bf72722mshbb5d5e842374aa9p1ba0ccjsn80f30ed69e78",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
  
}

function getCurrentDateTime() {
  const now = new Date();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[now.getDay()];

  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();

  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');

  const formattedDate = `${dd}/${mm}/${yyyy}`;
  const formattedTime = `${hh}:${min}`;

  return {
    currentTime: formattedTime,
    currentDate: formattedDate,
    currentDay: currentDay
  };
}
const other = async () =>{
  let mumbai_object = await url_func("mumbai");
  let new_delhi_object = await url_func("new delhi");
  let bangalore_object = await url_func("bangalore");

  let mumbai_temp_c = mumbai_object.current.temp_c;
  document.getElementsByClassName("other-temp")[0].getElementsByTagName("p")[0].innerHTML = `${mumbai_temp_c} &deg;C`;
   
  let mumbai_text = mumbai_object.current.condition.text;
  if(mumbai_text == "Moderate or heavy snow in area with thunder")
  mumbai_text = "Snow and Thunder";
  else if(mumbai_text == "Moderate or heavy rain with thunder")
  mumbai_text = "Rain and Thunder";
  document.getElementsByClassName("other-condition")[0].getElementsByTagName("h4")[0].innerHTML = mumbai_text;
  
  mumbai_text = mumbai_text.trim();
  let mumbai_img_src = `/img/${mumbai_text}`;
  if(mumbai_text == "Clear")
  {mumbai_img_src = `/img/Sunny`;}
  else if(mumbai_text.toLowerCase().includes("rain") == true && mumbai_text.toLowerCase().includes("thunder") == false)
  {mumbai_img_src = `/img/rain`;}
  else if(mumbai_text.toLowerCase().includes("snow") == true && mumbai_text.toLowerCase().includes("thunder") == false)
  {mumbai_img_src = `/img/snow`;}


  if(anchors_arr.includes(mumbai_img_src))
  {document.getElementsByClassName("other-image")[0].getElementsByTagName("img")[0].src = mumbai_img_src+`.png`;}
  else
  {document.getElementsByClassName("other-image")[0].getElementsByTagName("img")[0].src = mumbai_object.current.condition.icon;}
  
  const other_dateTimeInfo = getCurrentDateTime();
  document.querySelectorAll(".other-date")[0].getElementsByTagName("p")[0].innerHTML = other_dateTimeInfo.currentDate;
  document.querySelectorAll(".other-date")[1].getElementsByTagName("p")[0].innerHTML = other_dateTimeInfo.currentDate;
  document.querySelectorAll(".other-date")[2].getElementsByTagName("p")[0].innerHTML = other_dateTimeInfo.currentDate;
  
  document.querySelectorAll(".other-date")[0].getElementsByTagName("p")[1].innerHTML = `${other_dateTimeInfo.currentDay}, ${other_dateTimeInfo.currentTime}`;
  document.querySelectorAll(".other-date")[1].getElementsByTagName("p")[1].innerHTML = `${other_dateTimeInfo.currentDay}, ${other_dateTimeInfo.currentTime}`;
  document.querySelectorAll(".other-date")[2].getElementsByTagName("p")[1].innerHTML = `${other_dateTimeInfo.currentDay}, ${other_dateTimeInfo.currentTime}`;
  

  let new_delhi_temp_c = new_delhi_object.current.temp_c;
  document.getElementsByClassName("other-temp")[1].getElementsByTagName("p")[0].innerHTML = `${new_delhi_temp_c} &deg;C`;
   
  let new_delhi_text = new_delhi_object.current.condition.text;
  if(new_delhi_text == "Moderate or heavy snow in area with thunder")
  new_delhi_text = "Snow and Thunder";
  else if(new_delhi_text == "Moderate or heavy rain with thunder")
  new_delhi_text = "Rain and Thunder"
  document.getElementsByClassName("other-condition")[1].getElementsByTagName("h4")[0].innerHTML = new_delhi_text;
  
  new_delhi_text = new_delhi_text.trim();
  let new_delhi_img_src = `/img/${new_delhi_text}`;
  if(new_delhi_text == "Clear")
  {new_delhi_img_src = `/img/Sunny`;}
  else if(new_delhi_text.toLowerCase().includes("rain") == true && new_delhi_text.toLowerCase().includes("thunder") == false)
  {new_delhi_img_src = `/img/rain`;}
  else if(new_delhi_text.toLowerCase().includes("snow") == true && new_delhi_text.toLowerCase().includes("thunder") == false)
  {new_delhi_img_src = `/img/snow`;}

  if(anchors_arr.includes(new_delhi_img_src))
  {document.getElementsByClassName("other-image")[1].getElementsByTagName("img")[0].src = new_delhi_img_src+`.png`;}
  else
  {document.getElementsByClassName("other-image")[1].getElementsByTagName("img")[0].src = new_delhi_object.current.condition.icon;}


  let bangalore_temp_c = bangalore_object.current.temp_c;
  document.getElementsByClassName("other-temp")[2].getElementsByTagName("p")[0].innerHTML = `${bangalore_temp_c} &deg;C`;
   
  let bangalore_text = bangalore_object.current.condition.text;
  if(bangalore_text == "Moderate or heavy snow in area with thunder")
  bangalore_text = "Snow and Thunder";
  else if(bangalore_text == "Moderate or heavy rain with thunder")
  bangalore_text = "Rain and Thunder"
  document.getElementsByClassName("other-condition")[2].getElementsByTagName("h4")[0].innerHTML = bangalore_text;
  
  bangalore_text = bangalore_text.trim();
  let bangalore_img_src = `/img/${bangalore_text}`;
  if(bangalore_text == "Clear")
  {bangalore_img_src = `/img/Sunny`;}
  else if(bangalore_text.toLowerCase().includes("rain") == true && bangalore_text.toLowerCase().includes("thunder") == false)
  {bangalore_img_src = `/img/rain`;}
  else if(bangalore_text.toLowerCase().includes("snow") == true && bangalore_text.toLowerCase().includes("thunder") == false)
  {bangalore_img_src = `/img/snow`;}

  if(anchors_arr.includes(bangalore_img_src))
  {document.getElementsByClassName("other-image")[2].getElementsByTagName("img")[0].src = bangalore_img_src+`.png`;}
  else
  {document.getElementsByClassName("other-image")[2].getElementsByTagName("img")[0].src = bangalore_object.current.condition.icon;}
}

const main = async (city_name = "Kanpur") => {
  weather_object = await url_func(city_name);
  // to catch error
  try{
    if(weather_object.error.code>=400){
      document.querySelector(".image").getElementsByTagName("img")[0].src = `img/error.png`;
      document.querySelector(".temp-celsius").innerHTML = ``;
      document.querySelector(".condition").getElementsByTagName("h4")[0].innerHTML = weather_object.error.message;
      document.querySelector(".city").getElementsByTagName("h3")[0].innerHTML = ``;
    }
    return;
  }catch{}

  //Left Part
  let temp_c = weather_object.current.temp_c;
  document.querySelector(".temp-celsius").innerHTML = `${temp_c} &deg;C`;
   
  let text = weather_object.current.condition.text;
  if(text == "Moderate or heavy snow in area with thunder")
  text = "Snow and Thunder";
  else if(text == "Moderate or heavy rain with thunder")
  text = "Rain and Thunder"
  document.querySelector(".condition").getElementsByTagName("h4")[0].innerHTML = text;
  
  text = text.trim();
  let img_src = `/img/${text}`;
  if(text == "Clear")
  {img_src = `/img/Sunny`;}
  else if(text.toLowerCase().includes("rain") == true && text.toLowerCase().includes("thunder") == false)
  {img_src = `/img/rain`;}
  else if(text.toLowerCase().includes("snow") == true && text.toLowerCase().includes("thunder") == false)
  {img_src = `/img/snow`;}

  let data = await fetch(`Weather-App/img`);
  let response_img = await data.text();
  let div = document.createElement("div");
  div.innerHTML = response_img;
  let f = 0;
  let anchors = div.getElementsByTagName("a");
  anchors = Array.from(anchors);
  for(let i=0;i<anchors.length;i++)
  {
    if(anchors[i].getAttribute("href").endsWith(".png"))
    {
      anchors_arr.push(decodeURIComponent(anchors[i].getAttribute("href").split(".")[0]));
      if(decodeURIComponent(anchors[i].getAttribute("href").split(".")[0]) == img_src)
      {
        f = 1;
      }
    }
  }
  if(f==1)
  {document.querySelector(".image").getElementsByTagName("img")[0].src = img_src+`.png`;}
  else
  {document.querySelector(".image").getElementsByTagName("img")[0].src = weather_object.current.condition.icon;}
  
  const dateTimeInfo = getCurrentDateTime();
  document.querySelector(".date").getElementsByTagName("p")[0].innerHTML = dateTimeInfo.currentDate;
  
  document.querySelector(".date").getElementsByTagName("p")[1].innerHTML = `${dateTimeInfo.currentDay}, ${dateTimeInfo.currentTime}`;
  
  let city = weather_object.location.name;
  let country = weather_object.location.country;
  if(country == "United States of America")
  country = "USA";
  if(country.length>20)
  document.querySelector(".city").getElementsByTagName("h3")[0].innerHTML = `${city}`
  else
  document.querySelector(".city").getElementsByTagName("h3")[0].innerHTML = `${city}, ${country}`

  //Right Part
  let humidity = weather_object.current.humidity;
  document.getElementsByClassName("my-box")[0].getElementsByClassName("main")[0].innerHTML = `${humidity}%`;

  let feelslike_c = weather_object.current.feelslike_c;
  document.getElementsByClassName("my-box")[1].getElementsByClassName("main")[0].innerHTML = `${feelslike_c} &deg;C`;

  let chance_of_rain = weather_object.forecast.forecastday[0].day.daily_chance_of_rain;
  document.getElementsByClassName("my-box")[2].getElementsByClassName("main")[0].innerHTML = `${chance_of_rain}%`;

  let pressure_mb = weather_object.current.pressure_mb;
  document.getElementsByClassName("my-box")[3].getElementsByClassName("main")[0].innerHTML = `${pressure_mb} mb`;

  let uv = weather_object.current.uv;
  document.getElementsByClassName("my-box")[4].getElementsByClassName("main")[0].innerHTML = `${uv}`;

  let vis_km = weather_object.current.vis_km;
  document.getElementsByClassName("my-box")[5].getElementsByClassName("main")[0].innerHTML = `${vis_km} km`;

  let wind_kph = weather_object.current.wind_kph;
  let wind_degree = weather_object.current.wind_degree;
  document.getElementsByClassName("my-box")[6].getElementsByTagName("p")[1].innerHTML = `${wind_kph} km/h`;
  document.getElementsByClassName("my-box")[6].getElementsByTagName("p")[2].innerHTML = `${wind_degree} &deg;`;

  let maxtemp_c = weather_object.forecast.forecastday[0].day.maxtemp_c;
  let mintemp_c = weather_object.forecast.forecastday[0].day.mintemp_c;
  document.getElementsByClassName("my-box")[7].getElementsByTagName("p")[1].innerHTML = `&uarr; ${maxtemp_c} &deg;C`;
  document.getElementsByClassName("my-box")[7].getElementsByTagName("p")[2].innerHTML = `&darr; ${mintemp_c} &deg;C`;

  let sunrise = weather_object.forecast.forecastday[0].astro.sunrise;
  let sunset = weather_object.forecast.forecastday[0].astro.sunset;
  document.getElementsByClassName("my-box")[8].getElementsByTagName("p")[1].innerHTML = `Rise - &nbsp;${sunrise}`;
  document.getElementsByClassName("my-box")[8].getElementsByTagName("p")[2].innerHTML = `Set &nbsp;&nbsp;- &nbsp;${sunset}`;
};
(async () =>{
  await main();
  await other();
})()
