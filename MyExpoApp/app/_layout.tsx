import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => (
	<Stack>
		<Stack.Screen name="index" options={{ title: 'HomePage' }} />
	</Stack>
);

export default Layout;