import './globals.css';
import { SafeAreaProvider} from 'react-native-safe-area-context'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import React from "react"
import InitialLayout from "./components/initialLayout"
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
        <SafeAreaProvider>
            <InitialLayout />
        </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
