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
            <Text style={Styles.head}>Password Reset</Text>



            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="black"

                    onChangeText={(email) => setEmail(email)} />
            </View>

            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder="New Password."
                    placeholderTextColor="black"
                    textAlign="center"

                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)} />
            </View>

            <View style={Styles.inputViewLog1}>
                <TextInput
                    style={Styles.TextInput}
                    placeholder=" Confirm Password."
                    placeholderTextColor="black"
                    textAlign="center"

                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)} />
            </View>



            <TouchableOpacity style={Styles.loginBtn}
                mode="contained"
                onPress={() => navigation.navigate('Register', {
                    paraKey: "name "
                })}

            >
                <Text style={Styles.loginText}>Reset</Text>
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
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        marginBottom: 40,
    },

    image: {
        marginBottom: 15,
        height: 200,
        width: 200,
    },

    inputViewLog1: {

        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "black",
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
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "purple",
        fontSize: 40,
        fontWeight: "bold",
    },
    loginBtn2: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "purple",
        fontWeight: "bold",
    },

    loginText: {
        fontSize: 20,
        fontWeight: "bold",

    }
})