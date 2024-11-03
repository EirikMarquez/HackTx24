import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/card';
import { markers } from '../assets/markers';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Page</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {markers.map((marker, index) => (
          <Card 
            key={index}
            name={marker.name} 
            description={marker.description} 
          />
        ))}
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});
