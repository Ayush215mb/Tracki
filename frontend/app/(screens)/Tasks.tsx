import {FlatList, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import type {Task} from "@/lib/types";
import {getAllDates, getAllTasks, getTaskById} from "@/services/api";
import {useQuery} from "@tanstack/react-query";
import {Screen} from "@/components/layout/Screen";

const Tasks = ({id}:{id:string}) => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['getAllDates'],
        queryFn: async()=> {
          const task:Task=  await getTaskById(id)
            return task
        },
        staleTime: 10000,
    })

    return (
        <Screen className={"justify-center items-center"}>
            <Text>{data?.name}</Text>
            <Text>{data?.description}</Text>
            <Text>{data?.points}</Text>
        </Screen>
    )
}
export default Tasks
