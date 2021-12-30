import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
      name: this.props.navigation.getParam("name"),
      details: {}
    };
  }

  componentDidMount() {
    const {name} = this.state 
    this.getDetails(name);
  }
  getDetails = (name) => {
    const  url  = `http://c409-183-87-245-228.ngrok.io/star?name=${name}`;
    axios
      .get(url)
      .then(response=>{
        this.setState({details:response.data.data})
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };


  render() {
    const { name,details } = this.state;
    if (details) {
      return (
        <View style={styles.container}>
          <Card>
            <Card.Title style={{fontSize:30, fontFamily:'serif', color:'blue'}}>{details.name}</Card.Title>
            
            <View>
              <Text
                style={styles.cardItem}
              >{`Name : ${details.name}`}</Text>
              <Text
                style={styles.cardItem}
              >{`mass : ${details.mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${details.gravity}`}</Text>
              <Text
                style={styles.cardItem}
              >{`radius : ${details.radius}`}</Text>
              <Text
                style={styles.cardItem}
              >{`distance : ${details.distance}`}</Text>
            </View>
            </Card>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10,
    fontSize:25,
    fontFamily:'serif',
    borderWidth:2,
    borderColor:'cyan',
    padding:5
  }
});