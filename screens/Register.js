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
            <Text style={Styles.head}>User Register</Text>



            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder="Name with initials"
                    placeholderTextColor="black"

                    onChangeText={(email) => setEmail(email)} />
            </View>

            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder="e-mail"
                    placeholderTextColor="black"
                    textAlign="center"

                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)} />
            </View>

            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder="Mobile number"
                    placeholderTextColor="black"
                    textAlign="center"

                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)} />
            </View>

            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="black"
                    textAlign="center"

                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)} />
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


            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Submit', {
                    paraKey: "name "
                })}

            >
                <Text style={Styles.loginText}>Submit</Text>
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
        marginBottom: 55,
        shadowColor: "black",
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
        flex: 1,

    },

    forgot_button: {
        height: 30,
        marginBottom: 20,
        color: "blue",
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

    }
})