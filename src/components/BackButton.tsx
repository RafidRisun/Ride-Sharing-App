import { iconBack } from '@/assets/icons';
import { returnFromCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import tw from '../lib/tailwind';

export default function BackButton() {
	const dispatch = useDispatch();
	return (
		<TouchableOpacity
			style={tw`absolute left-4 top-10 z-10`}
			onPress={() => {
				dispatch(returnFromCurrentComponent());
			}}
		>
			<SvgXml xml={iconBack} width={34} height={34} />
		</TouchableOpacity>
	);
}
