import React from 'react';

import MaterialIcons from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Home from '../screens/home';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Vender') {
                            iconName = focused ? 'money' : 'money';
                        } else if (route.name === 'Cadastro') {
                            iconName = focused ? 'plus' : 'plus';
                        } else if (route.name === 'Estoque') {
                            iconName = focused ? 'list' : 'list';
                        }                        
                        return <MaterialIcons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#253C78',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Vender" component={Home} />
                <Tab.Screen name="Cadastro" component={Home} />
                <Tab.Screen name="Estoque" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
