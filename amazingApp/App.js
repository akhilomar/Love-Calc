import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput, Appbar, Button} from 'react-native-paper';
import { render } from 'react-dom';
import Displaylove from './components/Displaylove';


class App extends React.Component{
  state={
    fname:'',
    lname:'',
    result:'Loading...'
  }
 
submitit=()=>{
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.lname}`,{
    
    headers:{
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
	    "X-RapidAPI-Key": "2de28b0a67msha974739da9a0fc5p10e576jsn93e8b7c89b38",
    }
  })
  .then(data=>data.json())
  .then(data2=>{
    console.log(data2)
    this.setState({
      result:data2
    })
  })
}

render(){

  return (
    <View style={StyleSheet.container}>
    <Appbar.Header>
      <Appbar.Content style={{alignItems:"center"}} title="Love Calculator" />
    </Appbar.Header>
      <TextInput
        label='Female Partner Name'
       value={this.state.fname}
        onChangeText={text=>this.setState({fname:text})}
      />
      <TextInput
        label='Male Partner Name'
       value={this.state.lname}
        onChangeText={text=>this.setState({lname:text})}
      />
      <Button mode="contained" style={{marginTop:10}} onPress={()=>this.submitit()}>
        Calculate
      </Button>
      <Displaylove data={this.state.result} />
    </View>
  );
}
}
export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  

  },
});

