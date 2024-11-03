import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Navbar } from '../components/Navbar';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.title}>Software Developer</Text>
        
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>Points to Claim: </Text>
          <Text style={styles.pointsValue}>1,500</Text>
          <TouchableOpacity style={styles.claimButton}>
            <Text style={styles.claimButtonText}>Claim Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoSection}>
        <InfoItem label="Email" value="john.doe@example.com" />
        <InfoItem label="Location" value="Austin, TX" />
        <InfoItem label="Join Date" value="March 2024" />
      </View>
      
      <Navbar />
    </View>
  );
}

const InfoItem = ({ label, value }: { label: string, value: string }) => (
  <View style={styles.infoItem}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#666',
  },
  infoSection: {
    padding: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
  },
  pointsContainer: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  pointsText: {
    fontSize: 16,
    color: '#666',
  },
  pointsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginVertical: 5,
  },
  claimButton: {
    backgroundColor: '#2ecc71',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 5,
  },
  claimButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
