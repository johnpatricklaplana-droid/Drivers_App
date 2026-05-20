import * as Device from 'expo-device';
import { Platform, Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './navBar';

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

  const data = [
    { id: '1', title: 'Orders', number: 4 },
    { id: '2', title: 'Completed', number: 3 },
    { id: '3', title: 'Rating', number: 4.9 },
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
    <SafeAreaView style={styles.container} edges={['top']}>
      <NavBar pageName={"Home"} />
      <FlatList
        contentContainerStyle={styles.superContainer}
        data={orders}
        numColumns={1}
        keyExtractor={(order) => order.orderId}
        ListHeaderComponent={<>
          <View
            style={{ flexDirection: 'row', flexWrap: 'wrap' }}
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
          <View style={{ marginTop: 24, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>Today's Orders</Text>
            <Pressable>
              <Text style={{ color: 'blue', fontWeight: 600 }}>View all</Text>
            </Pressable>
          </View>
        </>}
        renderItem={({ item }) => (
          <View style={styles.orders}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.orderId}</Text>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.price}</Text>
          </View>
        )}
      >
      </FlatList>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  superContainer: {
    padding: 24,
  },
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: 'blue',
    textAlign: 'center',
    marginTop: 300,
  },
  container: {
    flex: 1,
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
    borderColor: '#99A1AF',
    backgroundColor: 'white'
  }
});
