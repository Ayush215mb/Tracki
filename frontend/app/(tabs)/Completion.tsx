import {ActivityIndicator, FlatList, Text, View} from 'react-native'
import React from 'react'
import {getAllDates} from "@/services/api";
import {useQuery} from "@tanstack/react-query"
import {useRefreshOnFocus} from "@/hooks/useRefreshOnFocus";
import {Screen} from "@/components/layout/Screen";
import Date from "@/components/ui/Date"
import {Dates} from "@/lib/types";
const Completion = () => {
    useRefreshOnFocus()
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['getAllDates'],
        queryFn: getAllDates,
        staleTime: 5000,
    })

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large"/>
            </View>
        )
    }
        if (isError) {
            return (
                <View className="flex-1 justify-center items-center">
                    <Text className="text-red-500">{error.message}</Text>
                </View>
            )
        }

        return (
            <Screen className="pt-4">
                <View className="border border-slade-800 bg-slate-900/60 px-4 rounded-xl py-5 h-full ">
                    <Text className={"text-3xl font-bold text-center text-white tracking-wider mb-10"}>Calendar</Text>
                    <FlatList
                        data={data || []}  // Access the array property and provide fallback
                        renderItem={({item}) => <Date date={item.date} month={item.month}/>}  // Function that returns component
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </Screen>
        )
}
export default Completion;