var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=02d0d7c333fb3b8398189fef73e518fb&units=imperial';

//   02d0d7c333fb3b8398189fef73e518fb

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		},function(res){
			//throw new Error(res.response.data.message);
			throw new Error('Unable to fetch weather for that location.');
		})
	}
}
