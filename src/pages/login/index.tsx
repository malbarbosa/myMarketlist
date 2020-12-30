import React, {useState} from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  view:{
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignContent: 'space-between',
    flex:1
  },
  input:{
    marginTop:10
  }
});

const onLogin = () => {
  Alert.alert("Login")
}

const onForgorPassword = () => {
  Alert.alert("Forgot Password")
}

const Login = () => {
    const [password, setPassword] = useState('');
    return (
          <SafeAreaView style={{flex:1, backgroundColor:'#F4F0F4'}}>
            <View style={{flex:1,justifyContent:'center'}}>
              <FloatingLabelInput
                  label="Username"
                  placeholderTextColor="#707070"
                />
                <FloatingLabelInput style={{marginTop:100}}
                  label="Password"
                  value={password}
                  onChangeText={(value) => {
                    setPassword(value);
                  }}
                />
              </View>
              <View style={{flex:1,justifyContent:'space-between', flexDirection:'row'}}>
                <Button
                  onPress={onForgorPassword}
                  title="Esqueci minha senha"
                  color="#841584"
                  accessibilityLabel="Clique aqui caso tenha esquecido sua senha"
                ></Button>
                <Button
                    onPress={onLogin}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Clique aqui para logar"
                  ></Button>
              </View>
        </SafeAreaView>
              
    )
}

export default Login;
