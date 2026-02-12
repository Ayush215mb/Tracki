import { Text, View} from 'react-native'
import React from 'react'

const Date = ({date,month}:{date?:number; month?:number}) => {
    return (
        <View className={"w-full h-20 px-4 py-5 border-white border mb-4 rounded-xl "}>
            <Text className={"text-lg text-white tracking-wider mb-2 "}>{date}/{month}</Text>
        </View>
    )
}
export default Date
