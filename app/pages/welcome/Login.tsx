import { FunctionComponent, useState } from 'react';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { SparkTextRegular } from '../../atoms/SparkTextRegular';
import { SparkForm } from '../../atoms/SparkForm';
import { SparkButton } from '../../atoms/SparkButton';
import { login } from '../../api-communication/login';
import { colours } from '../../styles/ColourPalette';

type LoginProps = {
	onLoginSuccess: Function;
};

const skipLoginIfToken = async (onLoginSuccess: Function) => {
	const token = await AsyncStorage.getItem('accessToken');

	if (token) {
		onLoginSuccess();
	}
};

export const Login: FunctionComponent<LoginProps> = (props) => {
	skipLoginIfToken(props.onLoginSuccess);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	
	const attemptLogin = async () => {
		setError('');
		const loginResponse = await login(email, password);

		if (loginResponse.success && loginResponse.data) {
			await AsyncStorage.setItem('accessToken', loginResponse.data);
			props.onLoginSuccess();
		} else {
			setError(loginResponse.msg ?? 'Oops, something went wrong.');
		}
	};

	return (
		<>
			<SparkTextRegular size="normal">Email</SparkTextRegular>
			<SparkForm
				autoCompleteType="email"
				keyboardType="email-address"
				autoCapitalize="none"
				style={{ marginBottom: 20 }}
				onChangeText={setEmail}
			></SparkForm>

			<SparkTextRegular size="normal">Password</SparkTextRegular>
			<SparkForm
				autoCapitalize="none"
				secureTextEntry={true}
				autoCompleteType="password"
				style={{ marginBottom: 20 }}
				onChangeText={setPassword}
			></SparkForm>

			{error !== '' && (
				<SparkTextRegular
					size="normal"
					style={{ color: colours.failureRed, marginBottom: 20 }}
				>
					{error}
				</SparkTextRegular>
			)}

			<SparkButton onPress={attemptLogin} size="normal">
				Login
			</SparkButton>
		</>
	);
};
