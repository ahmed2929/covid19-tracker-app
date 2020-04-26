import React,{useEffect,useState} from 'react'
import {getdailyData} from '../../api/index'
import {Line,chart,Bar} from 'react-chartjs-2'
import './chart.css'
const Chart=({data:{confirmed,recovered,deaths},country})=>{
const [dailyData,setDailydata]=useState([])

useEffect(()=>{
    const getData=async ()=>{
       setDailydata(await getdailyData())
    }
    getData()
},[])


const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

        
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

    


    return(
        <div className="continer">
        
        {
          country ?
          (
            barChart
          ):lineChart

        }


        </div>

    )
}

export default Chart