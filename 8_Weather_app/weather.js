const API_key = "1c523658c22fec90338d5e88ec2bc900";
const API_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function weatherCheck(){
    const response = await fetch(API_url + `&appid=${API_key}`);
    var data = await response.json();

    console.log(data);
}