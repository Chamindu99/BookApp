import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,Image } from "react-native";


const DATA = [
  {
    title: "PEKING PEM PATHA",
    data: ["Author	J. Jayaneththi",
     "Originally published: September 17, 1990",
       "Publisher:	SAMEERA PUBLICATIONS",
         "Price: Rs.352.00",
         
    ]    
  },
   {
    title: "PARA WALALLA",
    data: ["Author:	Anula De Silva",
     "Originally published: July 11, 1960", 
     "Publisher:	Author Publication",
     " Price:	Rs. 480.00"]
  },
  {
  title: "RATHU WASANTHAYA",
    data: ["Author:	Anula De Silva", 
    "Originally published: September 1, 1952", 
    "Publisher:	Author Publication",
    "Price:Rs.850.00"]
  },
  {
  title: "SUNDARA NAWATHANA",
    data: ["Author:	Anula De Silva",
     "Originally published: July 11, 1960", 
     "Publisher:	Author Publication",
     "Price:Rs.800.00"]
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