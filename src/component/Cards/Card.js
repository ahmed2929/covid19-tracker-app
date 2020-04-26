import React from 'react'
import  styles from'./Card.css';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import CountUp from 'react-countup'
const card=({data:{confirmed,recovered,deaths,lastUpdate}})=>{


    if(!confirmed){
        return 'Loding...'
    }
   

    return(
        <div className="continer">
        <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3}  className={"card confirmed"}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>infected</Typography>
        <Typography variant="h5">
        
        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
     
        </Typography>
        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">number of active cases</Typography>
        </CardContent>
        
        
        
        
        
        </Grid>

      

        <Grid item component={Card} xs={12} md={3} className={"card recovred"}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>recovered</Typography>
        <Typography variant="h5">
        
        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
     
        </Typography>
        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">number of recovered cases</Typography>
        </CardContent>
        
        
        
        
        
        </Grid>





        <Grid item component={Card} xs={12} md={3} className={"card death"}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>deaths</Typography>
        <Typography variant="h5">
        
        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
     
        </Typography>
        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">number of deaths</Typography>
        </CardContent>
        
        
        
        
        
        </Grid>
        
        
        
        
        </Grid>
        
        
        
        </div>
       
      

    )
}

export default card