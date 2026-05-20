import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
import { Ionicons } from '@expo/vector-icons'; 
import { router } from 'expo-router';

export default function OrderDetails () {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 32, padding: 32, backgroundColor: 'white' }}>
                <Shadow distance={3} startColor='#00000010'>
                    <Image
                        source={{ uri: 'https://picsum.photos/200/300?random=1' }}
                        style={{ width: 120, height: 120 }}
                    >

                    </Image>
                </Shadow>
                <View>
                    <Text style={styles.product}>Jonas Sam</Text>
                    <Text style={styles.variant}>Variant: Rasma with sauce</Text>
                    <Text style={styles.quantity}>quantity: 10 pieces</Text>
                    <Text style={styles.price}>Price: $100,125</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 8, padding: 32, backgroundColor: 'white' }}>
                <Shadow distance={3} startColor='#00000010'>
                    <Image
                        source={{ uri: 'https://picsum.photos/200/300?random=2' }}
                        style={{ width: 92, height: 92, borderRadius: 50 }}
                    >

                    </Image>
                </Shadow>
                <View>
                    <Text style={styles.product}>Rasma Insal</Text>
                    <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                        <Ionicons name='location' size={24} color={'red'}></Ionicons>
                        <Text style={{ color: colors.textSecondary }}>Location: Urdaneta city philippines</Text>
                    </View>
                    <Text style={styles.quantity}>phone#: <Text style={{ color: "green", fontWeight: 600 }}>090909999</Text></Text>
                </View>
            </View>
            <Pressable onPress={() => router.push("/completeOrder")} style={styles.markAsDeliveredBtn}><Text style={{ color: 'white', fontWeight: 600, textAlign: 'center', fontSize: typography.lg }}>Beat it?</Text></Pressable>
        </View>
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

const styles = StyleSheet.create({
    product: {
        color: colors.textPrimary,
        fontSize: typography.lg,
        lineHeight: lineHeight.xs,
        fontWeight: 700,
        marginBottom: 4
    },
    variant: {
        fontSize: typography.sm,
        color: colors.textSecondary,
        marginBottom: 8,
    },
    price: {
        color: 'red',
        fontWeight: 600,
        fontSize: typography.md,
    },
    quantity: {
        fontSize: typography.sm,
        color: colors.textSecondary,
        marginBottom: 8
    },
    markAsDeliveredBtn: {
        backgroundColor: '#4f46e5',
        paddingHorizontal: 16,
        paddingVertical: 16,
        position: 'absolute',
        bottom: 16,
        left: 24,
        right: 24,
        borderRadius: 16,
    }
});
