import React, { FunctionComponent, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { SparkText } from '../../atoms/SparkText';
import { SparkForm } from '../../atoms/SparkForm';
import { SparkButton } from '../../atoms/SparkButton';
import { login } from '../../api-communication/login';
import { colours } from '../../styles/ColourPalette';
import { ActivityIndicator, View } from 'react-native';

const skipLoginIfToken = async (onLoginSuccess: Function) => {
	const token = await AsyncStorage.getItem('accessToken');

	if (token) {
		onLoginSuccess();
	}
};

const unwrappedLogin: FunctionComponent<NavigationInjectedProps> = (props) => {
	const onLoginSuccess = () => props.navigation?.navigate('MainContent');
	skipLoginIfToken(onLoginSuccess);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [focusPasswordInput, setFocusPasswordInput] = useState(false);

	const attemptLogin = async () => {
		setError('');
		setIsLoading(true);
		login(email, password)
			.then((response) => {
				setIsLoading(false);
				if (response.success && response.data) {
					onLoginSuccess();
				} else {
					setError(response.msg ?? 'Oops, something went wrong.');
				}
			})
			.catch((response) => {
				setIsLoading(false);
				setError(response.msg ?? 'Oops, something went wrong.');
			});
	};

	return (
		<>
			<SparkText semiBold style={{ marginBottom: 5 }}>
				Email
			</SparkText>
			<SparkForm
				autoCompleteType="email"
				keyboardType="email-address"
				autoCapitalize="none"
				style={{ marginBottom: 20 }}
				onChangeText={setEmail}
				returnKeyType="next"
			></SparkForm>

			<SparkText semiBold style={{ marginBottom: 5 }}>
				Password
			</SparkText>
			<SparkForm
				autoCapitalize="none"
				secureTextEntry={true}
				autoCompleteType="password"
				onChangeText={(text) => {
					setPassword(text);
				}}
				onSubmitEditing={attemptLogin}
			></SparkForm>

			{error !== '' && (
				<SparkText
					style={{ color: colours.failureRed, marginBottom: 20, marginTop: 5 }}
				>
					{error}
				</SparkText>
			)}
			<View style={{ marginTop: 25 }}>
				{isLoading ? (
					<ActivityIndicator
						size="large"
						color={colours.magenta}
					></ActivityIndicator>
				) : (
					<SparkButton onPress={attemptLogin} size="normal">
						Login
					</SparkButton>
				)}
			</View>
		</>
	);
};

export const Login = withNavigation(unwrappedLogin);
