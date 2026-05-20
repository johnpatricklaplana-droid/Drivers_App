import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function RootLayout() {


    StatusBar.setTranslucent(false);

    return (
        <Stack>
            <Stack.Screen name="tabs" options={{ headerShown: false }} />
            <Stack.Screen options={{ title: 'order details', headerStyle: { backgroundColor: "#4f46e5" }, headerTintColor: '#fff' }} name="orderDetails" />
            <Stack.Screen options={{ title: 'complete order', headerStyle: { backgroundColor: "#4f46e5" }, headerTintColor: '#fff' }} name="completeOrder" />
        </Stack>
    );
}