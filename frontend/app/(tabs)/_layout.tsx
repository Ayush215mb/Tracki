import React from 'react'
import { Tabs } from "expo-router"
import {MaterialIcons} from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="Completion"
                options={{
                    title: 'History',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
                }}
            />
            <Tabs.Screen
                name="CreateTask"
                options={{
                    title: 'Create Task',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="create" color={color} />,
                }}
            />

        </Tabs>
    )
}
export default TabLayout
