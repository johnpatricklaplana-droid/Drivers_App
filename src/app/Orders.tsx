import { Text, View, FlatList, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './navBar';
import { useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { Ionicons } from '@expo/vector-icons'; 

export default function Orders () {

    const orders = [
        {id: "PH-GE-JP", product: 'good one', time: '12:00pm'},
        {id: "PH-GE-JP", product: "bad one", time: '10:50am'},
        {id: "PH-GE-JP", product: 'semibad', time: '3:00pm'},
        {id: "PH-GE-JP", product: 'semigood', time: '2:05pm'},
        {id: "PH-GE-JP", product: 'not bad', time: 'timecheck'},
        {id: "PH-GE-JP", product: "not good", time: 'hehe'},
    ]

    const [active, setActive] = useState("new");

    const filters = [
        {id: 'new', label: 'new'},
        {id: 'otw', label: 'On The Way'},
        {id: 'completed', label: 'completed'},
    ];

    return (
        <SafeAreaView edges={['top']} style={{ flex: 1 }}>
            <NavBar pageName='Orders' />
            <Shadow distance={3} startColor="#00000010">
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    {filters.map(t => {
                        let style = { width: 100, paddingHorizontal: 8, paddingVertical: 16 };
                        if (t.id === active) {
                            style = { ...style, ...styles.activeOne };
                        }
                        return <Pressable style={style} onPress={() => setActive(t.id)}><Text style={{ textAlign: 'center', fontWeight: 700 }}>{t.label}</Text></Pressable>
                    }
                    )}
                </View>
            </Shadow>
            <FlatList
                contentContainerStyle={styles.superContainer}
                data={orders}
                numColumns={1}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Shadow distance={3} style={{ width: '100%' }}>
                        <View style={{ padding: 16, borderRadius: 16 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                <Text style={styles.product}>{item.product}</Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                            <View >
                                <Text style={styles.destination}>Destination</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name='location' size={24} color={'red'}></Ionicons>
                                    <Text style={styles.location}>John's Power</Text>
                                </View>
                                <Text style={{ color: colors.textMuted, fontSize: typography.xs }}>Urdaneta pangasinan philippines</Text>
                            </View>
                            <View>
                                <Text style={[styles.price]}>$13,000</Text>
                                <Text style={{ width: '100%', textAlign: 'right' }}>Cash on delivery</Text>
                            </View>
                        </View>
                    </Shadow>
                )}
            >

            </FlatList>
        </SafeAreaView>
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
  superContainer: {
    padding: 24,
    gap: 16
  },
  activeOne: {
    borderBottomColor: "blue",
    borderBottomWidth: 2
  },
  product: {
    fontWeight: 600,
    fontSize: typography.lg,
    color: colors.textPrimary,
    lineHeight: lineHeight.lg
  },
  time: {
    color: colors.textMuted,
    fontSize: typography.xs,
    lineHeight: lineHeight.sm
  },
  destination: {
    fontSize: typography.sm,
    marginBottom: 8
  },
  location: {
    fontSize: typography.md,
    color: colors.textPrimary,
    fontWeight: 600
  },
  price: {
    color: 'red',
    fontSize: typography.md,
    fontWeight: 600,
    marginTop: 16,
    textAlign: 'right'
  }
})