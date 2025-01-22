import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,Image } from "react-native";


const DATA = [
  {
    title: "Watchmen",
    data: ["Author: William Golding",
     "Originally published: September 17, 1954",
       "Preceded by: The Adventures of Augie March",
        "Characters: Jack, Piggy, Ralph, Simon, Sam, Roger, Eric",
         "Genres: Novel, Allegory, Young adult fiction, Psychological Fiction" ,
         "Price: $7",
         
    ]    
  },
   {
    title: "Uncanny X-Men: The Extremists",
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
  title: "To Kill a Mockingbird",
    data: ["Author: Harper Lee",
     "Originally published: July 11, 1960", 
     "Characters: Atticus Finch, Jean Louise 'Scout' Finch, Boo Radley",
     "Genres: Novel, Nautical fiction",
     "Price:$11"]
  },
  {
  title: "The Giver",
    data: ["Author: Lois Lowry",
     "Originally published: 1993", 
     "Characters: Jonas, Asher, The Giver, Fiona, Gabriel, Lily",
     "Characters: Jonas, Asher, The Giver, Fiona, Gabriel, Lily",
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