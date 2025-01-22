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
            <Text style={Styles.head}></Text>
            
       <Image
                style={Styles.image}
                source={{ uri: 'https://i.pinimg.com/originals/dd/54/9e/dd549e800133ab7b94cbb64c4d95f826.jpg' }} />
            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Novels', {
                    paraKey: "name "
                })}
            >
            
                <Text style={Styles.loginText}>Novels</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Historical', {
                    paraKey: "name "
                })}
            >
                <Text style={Styles.loginText}>Historical</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Translations', {
                    paraKey: "name "
                })}
            >
                <Text style={Styles.loginText}>Translations</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Comic', {
                    paraKey: "name "
                })}
            >
                <Text style={Styles.loginText}>Comics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Poetry', {
                    paraKey: "name "
                })}
            >
                <Text style={Styles.loginText}>Poetry</Text>
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
        marginBottom: 10,
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