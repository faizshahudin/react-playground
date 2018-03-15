import _ from 'lodash';
import axios from 'axios';

export const FETCH_WEEKLY_WEATHER = 'fetch_weekly_weather';

export const fetchWeather = () => {
    return (dispatch) => {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=1733049&APPID=884cf0b64e724906604c0fde02917e12&units=imperial')
            .then((response) => {
                const list = response.data.list;
                _.map(list, result => {
                    let str = result.dt_txt;
                    if (str.search("12:00:00") > 0) {
                        console.log('inside-action: ',result);
                        dispatch({
                            type: FETCH_WEEKLY_WEATHER,
                            payload: result
                        })
                    }
                }) 
            })
            .catch((error) => console.log(error))
    };    
};
