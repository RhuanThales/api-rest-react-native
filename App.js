import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import api from './src/services/api'
import Products from './src/components/Products'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      productsItens: []
    }
  }

  async componentDidMount() {
    const response = await api.get('items');
    this.setState({
      productsItens: response.data
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Xesque Hipermercado</Text>
        <FlatList
          data={this.state.productsItens}
          keyExtractor={item => item.id.toString()}
          renderItem={ ({item}) => <Products data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD',
  },
  title: {
    fontSize: 32,
    color: "#FFFF",
    fontWeight: 600,
  }
});
