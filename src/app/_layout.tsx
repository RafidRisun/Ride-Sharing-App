import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '../state/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		sfpro: require('../../assets/fonts/Sf-Pro.otf'),
		sfpromedium: require('../../assets/fonts/Sf-Pro-Medium.otf'),
		sfprobold: require('../../assets/fonts/Sf-Pro-Bold.otf'),
		poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			console.log('Fonts loaded');
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	return (
		<Provider store={store}>
			<GestureHandlerRootView>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="index" />
				</Stack>
				<StatusBar style="dark" />
			</GestureHandlerRootView>
		</Provider>
	);
}
