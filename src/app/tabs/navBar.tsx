import { Ionicons } from '@expo/vector-icons'; 
import { Pressable, Text, View, StyleSheet } from 'react-native';


export default function NavBar ({ pageName = "Home" }) {
    
    return (
        <View style={styles.navBar}>
        
            <View style={styles.navBarTopOne}>
              <Pressable>
                <Ionicons name='menu' color={'white'} size={24}></Ionicons>
              </Pressable>
    
              <Text style={styles.title}>{pageName}</Text>
    
              <Pressable>
                <Ionicons color={'white'} name='notifications-outline' size={24}></Ionicons>
              </Pressable>
            </View>
        
        </View>
    );

}

const styles = StyleSheet.create({
    navBar: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#4f46e5',
        gap: 24
    },
    navBarTopOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 700,
        fontSize: 24,
    },
})