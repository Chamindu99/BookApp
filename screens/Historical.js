import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,Image } from "react-native";


const DATA = [
  {
    title: "The Pillars of the Earth",
    data: ["Author: Ken Follett",
     "Originally published: 1989",
       "Preceded by: The Adventures of Augie March",
        "Characters: Jack Jackson, Regan Hamleigh, Aliena,",
         "Genres: Novel, historical novel, Historical Fiction" ,
         "Price: $8",
         
    ]    
  },
   {
    title: "The Other Boleyn Girl",
    data: ["Author: Harper Lee",
     "Originally published: July 11, 1960", 
     "Characters: Atticus Finch, Jean Louise 'Scout' Finch, Boo Radley",
     "Genres: Novel, Bildungsroman, Southern Gothic, Thriller, Domestic Fiction, Legal Story",
     "Price:$10"]
  },
  {
  title: "The Old Man and the Sea",
    data: ["Author: Ernest Hemingway", 
    "Originally published: September 1, 1952", 
    "Characters: Manolin, The Old Man, Joe DiMaggio, Perico, Martin",
    "Genres: Novel, Nautical fiction",
    "Price:$10"]
  },
  {
  title: "Beloved",
    data: ["Author: Toni Morrison",
     "Originally published: September 1987", 
     "Characters: Sethe, Paul D Garner, Baby Suggs, Denver, Beloved",
     "Genres: Novel, Magical Realism, Historical Fiction",
     "Price:$18"]
  },
  {
  title: "Wolf Hall",
    data: ["Author: Hilary Mantel",
     "Originally published: April 30, 2009", 
     "Characters: Thomas Cromwell, Anne Boleyn, Sir Thomas More",
     "Genres: Novel, Historical Fiction",
     "Price:$12"]
  },
  
  
  
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  
  },
  item: {
    backgroundColor: "plum",
    padding: 20,
    marginVertical: 8,
    fontFamily: "Times New Roman",
    borderRadius: 5,
    borderWidth: 3,
   
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    fontStyle: "bold",
    
  },
  title: {
    fontSize: 24
  }
});

export default App;