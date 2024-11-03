import React, { useEffect, useRef } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import { markers } from '../assets/markers';
import { Navbar } from '../components/Navbar';


const INITIAL_REGION = {
	latitude: 30.2672,
	longitude: -97.7431,
	latitudeDelta: 2,
	longitudeDelta: 2
};

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

export default function App() {
	const mapRef = useRef<any>(null);
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={focusMap}>
					<View style={{ padding: 10 }}>
						<Text>Focus</Text>
					</View>
				</TouchableOpacity>
			)
		});
	}, []);

	const focusMap = () => {
        // Austin, TX
        // #TODO: Get user location and use it instead of hardcoded location
        const userLocation = {
			latitude: 30.2672,
			longitude: -97.7431,
			latitudeDelta: 0.1,
			longitudeDelta: 0.1
		};

		mapRef.current?.animateToRegion(userLocation);
		mapRef.current?.animateCamera({ center: userLocation, zoom: 14 }, { duration: 2000 });
	};

	const onMarkerSelected = (marker: any) => {
		Alert.alert(marker.name);
	};

	const calloutPressed = (ev: any) => {
		console.log(ev);
	};

	const onRegionChange = (region: Region) => {
		console.log(region);
	};

	return (
		<View style={{ flex: 1 }}>
			<MapView
				style={StyleSheet.absoluteFillObject}
				initialRegion={INITIAL_REGION}
				showsUserLocation
				showsMyLocationButton
				provider={PROVIDER_GOOGLE}
				ref={mapRef}
				onRegionChangeComplete={onRegionChange}
			>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						title={marker.name}
						coordinate={marker}
						onPress={() => onMarkerSelected(marker)}
					>
						<Callout onPress={calloutPressed}>
							<View style={{ padding: 10 }}>
								<Text style={{ fontSize: 12 }}>{marker.name}</Text>
							</View>
						</Callout>
					</Marker>
				))}
			</MapView>

            {/* Navbar */}
            {/* <Navbar /> */}

            <View style={styles.navbar}>
            <TouchableOpacity style={styles.navButton}>
                <Text>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Text>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Text>Camera</Text>
            </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>

		</View>
	);
}