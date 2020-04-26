import React from 'react';
import './App.css';
import Chart from './component/Chart/Chart';
import Card from './component/Cards/Card';
import Country from './component/Country/Countery';
import {fetchData} from './api/index'


class  App extends React.Component {
 state={
   data:{},
   country:''
 }
 
async componentDidMount(){
const fetchedData=await fetchData();
this.setState({data:fetchedData})


}


handleCountry=async (country)=>{

  const fetchedData=await fetchData(country)
  console.log(fetchData)
this.setState({country:country,data:fetchedData})


}


 render(){
  
  return (
    <div className="continer">
    <h2>COVID-19</h2>
    <h5>developed by AK</h5>
    <Card data={this.state.data} />
    <Country handleCountry={this.handleCountry}  />
    <Chart  data={this.state.data} country={this.state.country}  />
    &copy;AK 
    
    
    
    </div>
  );

 }
  
}

export default App;
