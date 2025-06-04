import {View, Text, Image} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIconStyle: {
                    marginTop: 5,
                },
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 0,
                    position: "absolute",
                    elevation: 0,
                    height: 75,
                    paddingBottom: 8,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="home"
                    size={22} color={color} />
                }}
            />
            <Tabs.Screen
                name="newEvent"
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="create"
                                                             size={22} color={color} />
                }}
            />
            <Tabs.Screen
                name="friends"
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="person-add-sharp"
                                                             size={22} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="person"
                                                             size={22} color={color} />
                }}
            />
        </Tabs>
    )
}

export default _Layout