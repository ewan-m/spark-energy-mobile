import { environment } from './environment';

export interface LoginRequest {
	strategy: 'UsernamePassword';
	token: string;
	keepMeLoggedIn: boolean;
	identity: string;
}

export interface LoginResponse {
	success: boolean;
	msg?: string;
    errorCode?: string;
    data?: string;
    customerReference?: string;
}

export const login = async (
	username: string,
	password: string
): Promise<LoginResponse> =>
	JSON.parse(
		await (
			await fetch(`${environment.baseApi}/v2/login`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					strategy: 'UsernamePassword',
					token: password,
					keepMeLoggedIn: true,
					identity: username,
				} as LoginRequest),
			})
		).text()
	);
