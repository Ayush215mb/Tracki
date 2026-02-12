import {Stack, useFocusEffect} from "expo-router";
import "../global.css";
import {QueryClient, QueryClientProvider, useQueryClient} from "@tanstack/react-query"
import {useEffect, useRef} from "react";
import {onAppStateChange} from "@/hooks/onAppStateChange"
import {AppState} from "react-native";
const Client = new QueryClient()


export default function RootLayout() {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])
  return (
      <QueryClientProvider client={Client} >
        <Stack screenOptions={{headerShown: false}}  />
      </QueryClientProvider>
  );
}
