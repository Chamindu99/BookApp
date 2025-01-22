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
            <Text style={Styles.head}>Your</Text>
             <Text style={Styles.head}>Registration</Text>
             <Text style={Styles.head}>Successful!</Text>

              <Image
                style={Styles.image}
                source={{ uri: 'https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-commercially-available-cartoon-characters-reading-books-on-world-book-day-png-image_2620642.jpg' }} />


            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Home', {
                    paraKey: "name "
                })}

            >
                <Text style={Styles.loginText}>Next</Text>
            </TouchableOpacity>


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
        marginBottom: 20,
         marginLeft: 30,
        shadowColor: "black",

    },

    image: {
        marginBottom: 28,
        height: 150,
        width: 150,
        borderWidth: 4,
        borderRadius: 40,
        

    },

    loginBtn: {
        width: "40%",
        fontSize: 40,
        fontWeight: "bold",
        height: 50,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#800080",
       
    },


    loginText: {
        fontSize: 20,
        fontWeight: "bold",

    }
})