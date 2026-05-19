import * as Device from 'expo-device';
import { Platform, Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {

  const Tab = createBottomTabNavigator();

  const data = [
    { id: '1', title: 'Orders', number: 4 },
    { id: '2', title: 'Completed', number: 3 },
    { id: '3', title: 'Rating', number: 6 },
    { id: '4', title: 'Acceptance', number: 8 },
  ];

  const orders = [
    {orderId: 'PH-GE-JP', price: '$100,000'},
    {orderId: 'JTA', price: '$12,00'},
    {orderId: 'JAYPEE', price: '$12'},
    {orderId: 'JONAS-SAM', price: '$59'},
    {orderId: 'RASMA', price: '$200'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>

        <View style={styles.navBarTopOne}>
          <Pressable>
            <Ionicons name='menu' color={'white'} size={24}></Ionicons>
          </Pressable>

          <Text style={styles.title}>Super Driver</Text>

          <Pressable>
            <Ionicons color={'white'} name='notifications-outline' size={24}></Ionicons>
          </Pressable>
        </View>

        {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Image 
            source={{ uri: 'https://picsum.photos/200/300?random=1'}} 
            style={styles.userProfilePicture}
          />
          <View>
            <Text style={{ fontSize: 16, color: 'white' }}>Good morning</Text>
            <Text style={{ color: 'white', fontSize: 24 }}>John</Text>
          </View>
        </View> */}

      </View>

      <View style={styles.superContainer}>

        <View
          style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 32, marginBottom: 16 }}
        >
          {data.map(d =>
            <View
              style={styles.shadow}
              key={d.id}
            >
              <View style={styles.hightlightBoxes}>
                <Text style={{ fontSize: 32, fontWeight: 600 }}>{d.number}</Text>
                <Text>{d.title}</Text>
              </View>
            </View>
          )}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Today's Orders</Text>
          <Pressable>
            <Text style={{ color: 'blue', fontWeight: 600 }}>View all</Text>
          </Pressable>
        </View>
        <FlatList
          style={{ backgroundColor: 'white', borderRadius: 16, overflow: 'hidden' }}
          data={orders}
          numColumns={1}
          keyExtractor={(order) => order.orderId}
          renderItem={({ item }) => (
            <View style={styles.orders}>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.orderId}</Text>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.price}</Text>
            </View>
          )}
        >

        </FlatList>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  superContainer: {
    padding: 24
  },
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: 'blue',
    textAlign: 'center',
    marginTop: 300,
  },
  navBar: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#1c398e',
    gap: 24
  },
  navBarTopOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: 700,
    fontSize: 24,
  },
  userProfilePicture: {
    width: 64,
    height: 64,
    borderRadius: 50
  },
  hightlightBoxes: {
    height: 'auto',
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 16
  },
  shadow: {
    margin: 8,
    borderRadius: 16,
    flex: 0,
    width: '45%',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 2,
  },
  orders : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#99A1AF'
  }
});
