import { Text, View, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
import { Ionicons } from '@expo/vector-icons'; 

export default function CompleteOrder () {
    return (
        <ScrollView contentContainerStyle={{ padding: 32 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingVertical: 24, paddingTop: 0, borderBottomWidth: 1, borderBottomColor: "#dcdcdc" }}>
                <View>
                    <Text style={{ color: colors.textMuted, fontSize: typography.sm }}>Drop off</Text>
                    <Text style={{ fontSize: typography.md, fontWeight: 600 }}>Rasma Inasal</Text>
                    <Text style={{ color: colors.textSecondary }}>Tarlac city pangasinan</Text>
                </View>
                <Ionicons size={22} style={{ backgroundColor: '#dcdcdc', padding: 8, borderRadius: 50 }} name='call'></Ionicons>
            </View>
            <View style={{ paddingVertical: 24, borderBottomWidth: 1, borderBottomColor: "#dcdcdc" }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                    <Text style={{ color: colors.textSecondary }}>Order ID</Text>
                    <Text style={{ color: colors.textPrimary, fontSize: typography.md, fontWeight: 600 }}>PH-GE-JP</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                    <Text style={{ color: colors.textSecondary }}>amount</Text>
                    <View>
                        <Text style={{ textAlign: 'right', fontSize: typography.md, fontWeight: 600 }}>$1000</Text>
                        <Text style={{ fontWeight: 600, color: 'green' }}>Cash on delivery</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 32 }}>
                <Text style={{ marginBottom: 16, fontWeight: 600, fontSize: typography.md }}>Proof of delivery</Text>
                <Shadow distance={3} startColor='#00000010'>
                    <Image
                        source={{ uri: 'https://picsum.photos/200/300?random=2' }}
                        style={{ width: 360, height: 200, }}
                    >

                    </Image>
                </Shadow>
            </View>
            <Pressable style={{ width: '100%', backgroundColor: '#4f46e5', marginTop: 16, paddingVertical: 16 }}><Text style={{ color: 'white', fontSize: typography.md, fontWeight: 600, textAlign: 'center' }}>Confirm delivery</Text></Pressable>
        </ScrollView>
    );
}

export const typography = {
    xs: 12,   // captions, hints
    sm: 14,   // secondary text
    base: 16, // default body
    md: 18,   // emphasized body
    lg: 20,   // small headings
    xl: 24,   // section headings
    xxl: 32,  // page titles
};

export const lineHeight = {
    xs: 16,   // tight captions but still readable
    sm: 20,   // small text spacing
    base: 24, // default readable paragraph spacing
    md: 28,   // slightly looser for emphasis
    lg: 28,   // headings (compact but clear)
    xl: 32,   // section headers
    xxl: 40,  // large titles / hero text
};

export const colors = {
    textPrimary: "#111827",   // almost black
    textSecondary: "#6B7280", // gray
    textMuted: "#9CA3AF",     // light gray

    primary: "#1C398E",      // your app blue
    accent: "#2563EB",

    white: "#FFFFFF",
    background: "#F9FAFB", // app background (light gray)
    border: "#E5E7EB",
};