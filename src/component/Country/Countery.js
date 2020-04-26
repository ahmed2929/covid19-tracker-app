import React,{useEffect,useState} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import './country.css'
import {getcountries} from '../../api/index'

const Country=({handleCountry})=>{

    const [countries,setcountries]=useState([]);

    useEffect(()=>{
        const getData=async ()=>{
            setcountries(await getcountries())
        }
        getData()
    },[setcountries])







    return(
       <FormControl>
       <NativeSelect defaultValue="" onChange={(e)=>handleCountry(e.target.value)}>
       <option value="global">global</option>
       {countries.map((country,i)=><option key={i} value={country}>{country}</option>)}
       </NativeSelect>
       
       </FormControl>

    )
}

export default Country