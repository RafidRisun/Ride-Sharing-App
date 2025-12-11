import { iconBack } from '@/assets/icons';
import Header from '@/src/components/ui/header';
import ArrivingSheetView from '@/src/components/ui/sheetViews/arrivingSheetView';
import ChooseVehicleSheetView from '@/src/components/ui/sheetViews/chooseVehicleSheetView';
import ConfirmPickupLocationSheetView from '@/src/components/ui/sheetViews/confirmPickupLocationSheetView';
import FindingDriversSheetView from '@/src/components/ui/sheetViews/findingDriversSheetView';
import HomeBottomSheetView from '@/src/components/ui/sheetViews/homeBottomSheetView';
import PickDestinationSheetView from '@/src/components/ui/sheetViews/pickDestinationSheetView';
import tw from '@/src/lib/tailwind';
import { returnFromCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import { RootState } from '@/src/state/store';
import { bothPlatform } from '@/src/utils/utils';
import { ImageBackground } from 'expo-image';
import React from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';

export default function Index() {
	const expanded = useSelector((state: RootState) => state.expand.expanded);
	const dispatch = useDispatch();
	const currentComponent = useSelector(
		(state: RootState) =>
			state.currentComponent[state.currentComponent.length - 1]
	);

	return (
		<KeyboardAvoidingView
			behavior={bothPlatform === 'ios' ? 'padding' : 'height'}
			// keyboardVerticalOffset={80}
			style={{ flex: 1 }}
		>
			<GestureHandlerRootView
				style={tw`flex-1 bg-slate-500 flex items-center justify-start`}
			>
				{currentComponent !== 'planTrip' && (
					<TouchableOpacity
						style={tw`absolute left-4 top-4 z-10`}
						onPress={() => {
							dispatch(returnFromCurrentComponent());
						}}
					>
						<SvgXml xml={iconBack} width={34} height={34} />
					</TouchableOpacity>
				)}
				{!expanded && currentComponent === 'planTrip' && <Header />}
				{/* Map Image for now */}
				<ImageBackground
					source={require('../../../assets/images/Map.png')}
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
			</GestureHandlerRootView>
		</KeyboardAvoidingView>
	);
}
