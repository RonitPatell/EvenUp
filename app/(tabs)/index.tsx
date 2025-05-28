import {Text, View, Image, ScrollView} from "react-native"
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

export default function Index() {
  return (
    <View className="flex-1 bg-dark-200">
        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{
            minHeight: '100%', paddingBottom: 10 }}>
                <Image source={icons.mini_logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
            <Text className="text-white test-base font-semibold text-center">
                Welcome to PayMate!
            </Text>
        </ScrollView>
    </View>
  );
}
