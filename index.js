api_key="306deae046c8f5b8302428488fbcac7b"
function getWeather(city){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
	p=fetch(url)
	p.then(response=>
		response.json()).then((value)=>{
			console.log(value)
			document.getElementById('error').innerHTML=``
			document.getElementById('temp').innerHTML=value.main.temp+'°C';
			document.getElementById('image').innerHTML=`<img src="https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png" alt="">`
			document.getElementById('hum').innerHTML=value.main.humidity+'%'
			document.getElementById('feel').innerHTML=value.main.feels_like+'°C'
			document.getElementById('wind').innerHTML=value.wind.speed+' Km/hr'
			document.getElementById('des').innerHTML=value.weather[0].description
			document.getElementById('name').innerHTML=`<span>${value.name},${value.sys.country}`
		}).catch(()=>{
			document.getElementById('error').innerHTML=`Wrong Input!!!!!`
		})
}
function jeet(){
	city=document.getElementById('gsearch').value;
	getWeather(city)
}
window.onload=async ()=>{
	getWeather('kolkata')
	document.getElementById('sub').addEventListener('click',jeet)
}
