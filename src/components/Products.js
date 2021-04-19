import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Products extends Component {
  constructor(props){
    super(props);
    this.state = { 
      color: ''
    }
  }

  render() {
    let imagem = this.props.data.image;

    if(this.props.data.category == "Não Perecível"){
      this.setState.color = 'blue'
    }
    else{
      this.setState.color = 'orange'
    }

    return (
      <View style={styles.item}>
        <View>
          <Image style={{ width: 200, height: 200,  }} source={{ uri: imagem }} />
        </View>
        <View style={styles.componentStyle}>
          <Text style={styles.title}>{this.props.data.description}</Text>
          <View style={styles.alignStyle}>
            <Text style={{ width: 90, backgroundColor: 'this.state.color' }}>{this.props.data.category}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alignStyle: {
    flex: 1,
  },
  componentStyle: {
    flex: 1,
    alignItems: "flex-end",
  },
  item: {
    backgroundColor: "gray",
    flex: 1,
    width: 340,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 25,
    alignItems: ''
  },
  title: {
    fontSize: 32,
    color: "#FFFF",
    fontWeight: 600,
  },
});
