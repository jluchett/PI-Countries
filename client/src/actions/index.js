import axios from 'axios';

export function getCountries(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/countries",{
        });
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}

export function getNameCountry(name){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/countries?name=" + name)
            return dispatch({
                type: 'GET_NAME_COUNTRY',
                payload: json.data
            })
        }catch (error){
            console.log(error)
        }
    }

}

export function postActivity(payload){
    return async function(dispatch){
        try{
            const response = await axios.post("http://localhost:3001/activities", payload)
            return response

        }catch (error){
            console.log(error)
        }
    }

}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/countries/" + id);
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        }catch (error){
            console.log(error);
        }
    }
}

export function filterCountryByContinent(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}