import BackButton from '@/src/components/BackButton';
import PaymentModal from '@/src/components/Modals/PaymentModal';
import RateDriver from '@/src/components/Modals/RateDriver';
import SuccessModal from '@/src/components/Modals/SuccessModal';
import TipModal from '@/src/components/Modals/TipModal';
import Header from '@/src/components/ui/header';
import ArrivingSheetView from '@/src/components/ui/sheetViews/arrivingSheetView';
import CancelRide from '@/src/components/ui/sheetViews/cancelRide';
import ChooseVehicleSheetView from '@/src/components/ui/sheetViews/chooseVehicleSheetView';
import ConfirmPickupLocationSheetView from '@/src/components/ui/sheetViews/confirmPickupLocationSheetView';
import FindingDriversSheetView from '@/src/components/ui/sheetViews/findingDriversSheetView';
import HomeBottomSheetView from '@/src/components/ui/sheetViews/homeBottomSheetView';
import PickDestinationSheetView from '@/src/components/ui/sheetViews/pickDestinationSheetView';
import TripDetails from '@/src/components/ui/sheetViews/tripDetails';
import tw from '@/src/lib/tailwind';
import { RootState } from '@/src/state/store';
import { ImageBackground } from 'expo-image';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, KeyboardAvoidingView, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

export default function Index() {
	const expanded = useSelector((state: RootState) => state.expand.expanded);
	const dispatch = useDispatch();

	const [payModalVisible, setPayModalVisible] = useState(false);

	const [successModalVisible, setSuccessModalVisible] = useState(false);

	const [rateDriverModalVisible, setRateDriverModalVisible] = useState(false);

	const [tipModalVisible, setTipModalVisible] = useState(false);

	const currentComponent = useSelector(
		(state: RootState) =>
			state.currentComponent[state.currentComponent.length - 1]
	);

	// Animated header slide values
	const HEADER_HIDE_OFFSET = 150; // pixels to slide header up when expanded — adjust if needed
	const headerTranslate = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(headerTranslate, {
			toValue: expanded ? -HEADER_HIDE_OFFSET : 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
	}, [expanded, headerTranslate]);

	useEffect(() => {
		if (currentComponent === 'tripDetails') {
			setTimeout(() => {
				setPayModalVisible(true);
			}, 3000);
		}
	}, [currentComponent]);

	return (
		<KeyboardAvoidingView
			behavior="padding"
			// keyboardVerticalOffset={80}
			style={{ flex: 1 }}
		>
			{/* <StatusBar style={currentComponent === 'planTrip' ? 'light' : 'dark'} /> */}
			<GestureHandlerRootView
				style={tw`flex-1 bg-slate-500 flex items-center justify-start`}
			>
				{currentComponent !== 'planTrip' && <BackButton />}
				{currentComponent === 'planTrip' && (
					<Animated.View
						style={{
							transform: [{ translateY: headerTranslate }],
							opacity: headerTranslate.interpolate({
								inputRange: [-HEADER_HIDE_OFFSET, 0],
								outputRange: [0, 1],
							}),
							zIndex: 20,
							width: '100%',
						}}
					>
						<Header />
					</Animated.View>
				)}
				{/* Map Image for now */}
				<ImageBackground
					source={require('@/assets/images/Map.png')}
					style={tw`flex-1 w-full`}
					contentFit="cover"
				/>
				{currentComponent === 'planTrip' && <HomeBottomSheetView />}
				{currentComponent === 'pickDestination' && <PickDestinationSheetView />}
				{currentComponent === 'chooseVehicle' && <ChooseVehicleSheetView />}
				{currentComponent === 'confirmPickupLocation' && (
					<ConfirmPickupLocationSheetView />
				)}
				{currentComponent === 'findingDrivers' && <FindingDriversSheetView />}
				{currentComponent === 'arriving' && <ArrivingSheetView />}
				{currentComponent === 'tripDetails' && <TripDetails />}
				{currentComponent === 'cancelRide' && <CancelRide />}
			</GestureHandlerRootView>

			<Modal visible={payModalVisible} animationType="none" transparent={true}>
				<PaymentModal
					setPayModalVisible={setPayModalVisible}
					setSuccessModal={setSuccessModalVisible}
				/>
			</Modal>
			<Modal
				visible={successModalVisible}
				animationType="none"
				transparent={true}
			>
				<SuccessModal
					setSuccessModal={setSuccessModalVisible}
					setRateDriverModalVisible={setRateDriverModalVisible}
					setTipModalVisible={setTipModalVisible}
				/>
			</Modal>
			<Modal
				visible={rateDriverModalVisible}
				animationType="none"
				transparent={true}
			>
				<RateDriver setRateDriverModalVisible={setRateDriverModalVisible} />
			</Modal>
			<Modal visible={tipModalVisible} animationType="none" transparent={true}>
				<TipModal setTipModalVisible={setTipModalVisible} />
			</Modal>
		</KeyboardAvoidingView>
	);
}
