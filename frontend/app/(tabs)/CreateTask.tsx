import { Text, View} from 'react-native'
import React from 'react'
import {TaskForm} from "@/features/tasks/components/TaskForm";
import {Screen} from "@/components/layout/Screen"

const CreateTask = () => {
    return (
        <Screen>
            <View className=" gap-2 mt-4 mb-6 ">
                <Text className="text-3xl font-bold tracking-widest text-white">
                    Today&apos;s progress
                </Text>
            </View>
                <TaskForm />
        </Screen>
)
}
export default CreateTask
