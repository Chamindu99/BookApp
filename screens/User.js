import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

const Login = ({ route }) => {
    const navigation = useNavigation();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={Styles.container}>
            <Text style={Styles.head}>
            
            </Text>
            
       <Image
                style={Styles.image}
                source={{ uri: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' }} />

           <View style={Styles.container}>
           <Text style={Styles.profile}>
           ->  Name: .........................  {'\n'} {'\n'}
           ->  E-mail: .........................  {'\n'} {'\n'}
           ->  Mobile: .........................  {'\n'} {'\n'}
           ->  Intersted Books: .........................  {'\n'} {'\n'}



           </Text>
           
            
        </View>
        </View>

    )
}

export default Login
const Styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: "#dda0dd",
        alignItems: "center",
        justifyContent: "center",

       
    },
    head: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        fontFamily:"Times New ",
        marginBottom: 10,
         marginLeft: 30,
        shadowColor: "black",

    },
    profile:{
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    borderColor: "Purple",
    borderWidth: 3,
    borderRadius: 10,
    fontFamily: 'lucida grande, tahoma, verdana, arial, sans-serif',
    width:220,
    marginBottom:60,
    alignContent:"Center",




    },

    image: {
        marginBottom: 50,
        height: 150,
        width: 150,
        borderWidth: 4,
        borderRadius: 40,
        

    },

    loginBtn: {
        width: "60%",
        fontSize: 40,
        fontWeight: "bold",
        height: 50,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "#800080",
       
    },


    loginText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        fontStyle: "Times new",

    }
})