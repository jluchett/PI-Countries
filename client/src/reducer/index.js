const initialState = {
    countries:[],
    copyCountries: [],
    detail: [],
    activities: []
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload,
                copyCountries: action.payload
            }
        case 'GET_NAME_COUNTRY':
            return{
                ...state,
                countries: action.payload
            }
        case 'GET_ACTIVITIES':
            return{
                ...state,
                activities: action.payload
            }
        case 'POST_ACTIVITY':
            return{
                ...state,
            }
        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        case 'FILTER_BY_CONTINENT':
            const allCountries = state.copyCountries
            const continentFiltered = action.payload === 'All' ? allCountries 
            : allCountries.filter(el => el.continent === action.payload)
            return{
                ...state,
                countries: continentFiltered
            
            }
        case 'FILTER_BY_ACTIVITY':
            const countriesByActi = state.copyCountries
            const activityFiltered = action.payload === 'All' ? countriesByActi 
            : countriesByActi.filter((c) => c.activities.find((a) => a.name === action.payload))
            return{
                ...state,
                countries: activityFiltered
            }
        case 'ORDER_BY_NAME':
            let sortedCountry = action.payload === 'asc' ?
            state.countries.sort(function (a,b){
                if (a.name > b.name){
                    return 1
                }
                if (b.name > a.name){
                    return -1
                }
                return 0
            }) :
            state.countries.sort(function (a,b){
                if (a.name > b.name){
                    return -1
                }
                if (b.name > a.name){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                countries: sortedCountry
            }

        default:
            return state;
    }

}

export default rootReducer;
