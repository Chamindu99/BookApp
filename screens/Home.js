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
    ImageBackground,
} from "react-native";

const image = { uri: "https://i.pinimg.com/564x/96/9f/65/969f656054dd2168d59599dc1bfa67b6.jpg" };




function Home() {
    const navigation = useNavigation();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

      

        <View style={Styles.container}>
            <Text style={Styles.head}>BookApp</Text>
             <ImageBackground source={image} resizeMode="cover" style={Styles.imageb}>
             </ImageBackground>

            <Image
                style={Styles.image}
                source={{ uri: 'https://i.pinimg.com/originals/dd/54/9e/dd549e800133ab7b94cbb64c4d95f826.jpg' }} />

            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="black"

                    onChangeText={(email) => setEmail(email)} />
            </View>

            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="black"
                    textAlign="center"

                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)} />
            </View>

            <TouchableOpacity>
                <Text style={Styles.forgot_button}

                    onPress={() => navigation.navigate('Login', {
                        paraKey: "name "
                    })}

                >Forgot Password? Reset it!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Success', {
                    paraKey: "name "
                })}

            >
                <Text style={Styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Register', {
                    paraKey: "name "
                })}

            >
                <Text style={Styles.loginText}>Register</Text>
            </TouchableOpacity>


        </View>

    )
}

export default Home
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dda0dd",
        alignItems: "center",
        justifyContent: "center",
    },
  
    
  imageb: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
    head: {
        fontSize: 50,
        fontWeight: "bold",
        color: "black",
        fontFamily:"Times New ",
        marginBottom: 35,
        shadowColor: "black",
    },

    image: {
        marginBottom: 28,
        height: 150,
        width: 150,
        borderWidth: 1,
        borderRadius: 50,
        

    },

    inputViewLog1: {

        borderRadius: 80,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 3,
        borderColor: "purple",
        fontWeight: "bold",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "black",
        justifyContent: "center",
        
    },

    forgot_button: {
        height: 30,
        marginBottom: 20,
        color: "blue",
        fontSize: 15,
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
    loginBtn2: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#f47373",
        fontWeight: "bold",
    },

    loginText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily:"Times New",

    }
})