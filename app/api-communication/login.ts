import { environment } from './environment';
import { Api3Response } from './api3-response.interface';
import { sparkHttpClient } from './spark-http-client';
import AsyncStorage from '@react-native-community/async-storage';

interface LoginRequest {
	strategy: 'UsernamePassword';
	token: string;
	keepMeLoggedIn: boolean;
	identity: string;
}

export interface LoginResponse extends Api3Response<string> {
	customerReference?: string;
}

export const login = async (
	username: string,
	password: string
): Promise<LoginResponse> => {
	const response = await sparkHttpClient.post<string, LoginResponse>(
		`${environment.baseApi}/v2/login`,
		JSON.stringify({
			strategy: 'UsernamePassword',
			keepMeLoggedIn: true,
			identity: username,
			token: password,
		} as LoginRequest) as BodyInit,
		'NO_AUTH',
		{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	);

	if (response.success && response.data) {
		await AsyncStorage.setItem('accessToken', response.data);
	}

	return response;
};
