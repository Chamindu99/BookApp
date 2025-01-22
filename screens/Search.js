import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [book, setBook] = useState([
    { name: 'book1', author: 'author1', price: 'Rs:1500/=', key: '1'},
    { name: 'book2', author: 'author2', price: 'Rs:1500/=', key: '2'},
    { name: 'book3', author: 'author3', price: 'Rs:1500/=', key: '3'},
    { name: 'book4', author: 'author4', price: 'Rs:1500/=', key: '4'},
  
   
  ])
  
  const [dataFromState, setDataFromState] = useState(book);

	const search = (inputBook) => {
		if (inputBook) {
			let data = book;
			let searchData = data.filter((item) => {
				return item.name.toLowerCase().includes(inputBook.toLowerCase());
			});
			setDataFromState(searchData);
		} else {
			setDataFromState(book);
		}
	};
  return (
    <View style={styles.container}>
      <Text>Book list</Text>
      <TextInput
        style={styles.input}
        placeholder='Search Here'
        onChangeText={(inputBook) => {
          search(inputBook);
        }}
      />
      
      
      
      <FlatList
        data={dataFromState}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
              <Image style={styles.image} source={item.src}></Image>
              <Text style={styles.text}>{item.name}{'\n'}{item.author}{'\n'}{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 42,
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop:40,
    paddingHorizontal:20,
  },
  item: {
    marginTop: 24,
    padding: 25,
    backgroundColor: '#dda0dd',
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 4,
  },
  input: {
    borderWidth:1,
    borderRadius:20,
    borderColor: '#777',
    padding:5,
    margin:10,
    width:345,
  },
 
  text:{
    fontSize:20,
    marginLeft: 70,
  }
});