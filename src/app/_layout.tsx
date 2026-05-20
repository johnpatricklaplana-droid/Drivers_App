import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function RootLayout() {


    StatusBar.setTranslucent(false);

    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="tabs" options={{ headerShown: false }} />
                <Stack.Screen options={{ title: 'order details', headerStyle: { backgroundColor: "#4f46e5" }, headerTintColor: '#fff' }} name="orderDetails" />
            </Stack>
        </SafeAreaProvider>
    );
}