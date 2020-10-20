import React ,{useState, useEffect}   from 'react';
import { TextInput,Button,Card,Title} from 'react-native-paper';
import { View,Text,FlatList,Image } from 'react-native';
import Header from './Header'


const Home =()=>{
    const[info,setInfo] = useState({
        name:"loading ",
        temp:"loading",
        humidity:"loading",
        desc:"loading",
        icon:"loding",
    })
    useEffect(()=>{
        getWeather()
    },[])
   const getWeather = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
      
      fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a42924d7a438fd25bd38ca9b5a555df2", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setInfo({
                name:result.name,
                temp:result.main.temp,
                humidity:result.main.humidity,
                description:result.weather.description,
                icon:result.weather.icon,
            })
        })
        .catch(error => console.log('error', error));
            
        
        
   }
   return(
       <View style={{flex:1}}>
           <Header name="Weather App"/>
           <View>
               <Title
               style={{
                   color:'#00aaff',
                   marginTop:30,
                   fontSize:30,
                   }}>
             {info.name}

               </Title>
               <Image
               style={{
                   width:120,
                   height:120
               }}
               source={{uri:"https;//openweathermap.org/img/w/"+info.icon+".png"}}
               />
           </View>
           <Card style={{
               magin:5,
               padding:12
           }}>
               <Title style={{color:"#00aaff"}}>Temperature - {info.temp}</Title>
           </Card>
           <Card style={{
               magin:5,
               padding:12
           }}>
               <Title style={{color:"#00aaff"}}> humidity- {info.humidity}</Title>
           </Card>
           <Card style={{
               magin:5,
               padding:12
           }}>
               <Title style={{color:"#00aaff"}}> Description - {info.desc}</Title>
           </Card>
           

      
       </View>
   ) 
}
export default Home
