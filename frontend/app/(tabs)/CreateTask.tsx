import { Text, View} from 'react-native'
import React from 'react'
import {TaskForm} from "@/features/tasks/components/TaskForm";
import {Screen} from "@/components/layout/Screen"
import {createTask} from "@/services/api";

const CreateTask = () => {
    return (
        <Screen className={"flex-1"}>
            <View className=" gap-2 mt-4 mb-6 ">
                <Text className="text-3xl font-bold tracking-widest text-white">
                    Today&apos;s progress
                </Text>
            </View>
            <View className={"mb-4 "}>
                <TaskForm />
            </View>
        </Screen>
)
}
export default CreateTask
