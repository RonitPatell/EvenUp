import { useAuth } from "@clerk/clerk-expo";
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import {Stack} from "expo-router";

export default function initialLayout() {
    const {isLoaded, isSignedIn} = useAuth()

    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if(!isLoaded) return
        const inAuthPage = segments[0] === "(auth)"

        if (!isSignedIn && !inAuthPage) router.replace("/(auth)/login")
        else if (isSignedIn && inAuthPage) router.replace("/(tabs)")
    }, [isLoaded, isSignedIn, segments])

    if (!isLoaded) return null

    return <Stack screenOptions={{ headerShown: false }}/>;
}