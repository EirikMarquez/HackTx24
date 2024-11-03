import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { Stack, useRouter, usePathname } from 'expo-router';

export default function Layout() {
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const backAction = () => {
			if (pathname === '/') {
				return false;
			}
			router.replace('/');
			return true;
		};

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		);

		return () => backHandler.remove();
	}, [pathname]);

	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Traverse' }} />
			<Stack.Screen name="profile" options={{ title: 'Profile' }} />
			<Stack.Screen name="location" options={{ title: 'Location' }} />
			<Stack.Screen name="explore" options={{ title: 'Explore' }} />
			<Stack.Screen name="camera" options={{ title: 'Camera' }} />
		</Stack>
	);
}