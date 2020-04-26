import axios from 'axios'
const URL='https://covid19.mathdro.id/api/';

export const fetchData = async (country)=>{
var changURI=URL;
if(country){
    changURI=`${URL}/countries/${country}`
}



try {
    
var {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changURI);
return {
    confirmed,
    recovered,
    deaths,
    lastUpdate

};

} catch (error) {
    throw error;
}



}

export const getdailyData=async ()=>{

try {
    const {data}=await axios.get(`${URL}\daily`)


    const filteredData=data.map((dailyData)=>({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate
    }))

    return filteredData;

} catch (error) {
    throw error
    
}


}

export const getcountries=async ()=>{


    try {
        const {data:{countries}}=await axios.get(`${URL}\countries`)
    
    
        const filteredData=countries.map((countries)=>countries.name)
    
        return filteredData;
    
    } catch (error) {
        throw error
        
    }

}