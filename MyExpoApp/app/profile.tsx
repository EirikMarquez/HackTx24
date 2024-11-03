import { View, Text, StyleSheet } from 'react-native';
import { Navbar } from '../components/Navbar';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
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
});
