import React from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';

export default function Notifications() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={80}
			style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
		>
			<TextInput placeholder="Type here..." />
		</KeyboardAvoidingView>
	);
}
