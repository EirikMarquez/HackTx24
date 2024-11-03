import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    padding: 10,
  },
});

export function Navbar() {
    const router = useRouter();
    
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navButton} onPress={() => router.push('/location')}>
                <Text>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => router.push('/explore')}>
                <Text>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => router.push('/camera')}>
                <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => router.push('/profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
} 