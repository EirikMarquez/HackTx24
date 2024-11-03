import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { markers } from '../assets/markers';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Page</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {markers.map((marker, index) => (
          <Card 
            image={marker.image}
            key={index}
            name={marker.name}  
            description={marker.description} 
            points={marker.points}
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
    width: '100%',
    paddingVertical: 10,
  },
});
