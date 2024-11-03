import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => (
	<Stack>
		<Stack.Screen name="index" options={{ title: 'Traverse' }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
	</Stack>
);

export default Layout;