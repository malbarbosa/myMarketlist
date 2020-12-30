import  React  from 'react';
import Home from './pages/home';
import {createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/login';


const AppNavigation = createStackNavigator();
const Routes = () =>{
    return (
        <NavigationContainer>
             <AppNavigation.Navigator headerMode="none" screenOptions={{
                cardStyle:{
                    backgroundColor:'#f0f0f5'
                }
            }}>
                <AppNavigation.Screen component={Login} name="Login"/>    
            </AppNavigation.Navigator>
        </NavigationContainer>
    );
    
}

export default Routes;