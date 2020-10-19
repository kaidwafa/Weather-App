import React ,{useState}   from 'react';
import { TextInput,Button,Card} from 'react-native-paper';
import { View,Text,FlatList } from 'react-native';
import Header from './Header'

export default Search=()=> {
const [city,setCity] =  React.useState('')
const [cities,setCities] = useState([])
const fetchCities = (text)=>{
     setCity(text)
     fetch("https://autocomplete.wunderground.com/aq?query="+text)
        .then(item=>item.json())
        .then(cityData=>{
            setCities(cityData.RESULTS.slice(0.9))
        })
            
}
    return(
<View style={{flex:1}}>
        <Header name="Search Screen"/>
        <TextInput
        label="city name"
        theme={{colors:{primary:"#00aaff"}}}
        value={city}
        onChangeText={(text)=>fetchCities(text)}
        />
         <Button
          icon="content-save" 
          mode="contained"
          theme={{colors:{primary:"#00aaff"}}}
          style={{margin:20}}
         onPress={() => console.log('Pressed')}>
    <Text style={{color:"white"}}>Press me</Text>     
  </Button>
  <FlatList
  data={cities}
  renderItem={({item})=>{
      return(
          <Card
          style={{margin:2,padding:12}}
          >
           <Text>{item.name}</Text>   
          </Card>
          
      )
  }}
  keyExtractor={item=>item.name}
  />
</View>
    );
}

