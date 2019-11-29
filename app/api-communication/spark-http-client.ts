import AsyncStorage from '@react-native-community/async-storage';
import { Api3Response } from './api3-response.interface';

interface RequestInterface {
	method: string;
	url: URL;
	headers?: any;
	body?: BodyInit;
	authorize: boolean;
}

async function getToken(): Promise<string> {
	const token = await AsyncStorage.getItem('accessToken');

	if (typeof token !== 'string' || token === '') {
		throw 'Token not found';
	}

	return token;
}

const getAuthHeader = async () => {
	return { Authorization: `Bearer ${await getToken()}` };
};

const redirectToLogin = () => {
	console.log('// TODO kick the fella out to login screen');
};

type AuthoriseRequest = 'NO_AUTH' | 'AUTH';

export const sparkHttpClient = {
	_request: async function<T>({
		method,
		url,
		body,
		authorize,
		...request
	}: RequestInterface): Promise<T> {
		let headers;
		if (authorize) {
			try {
				headers = {
					...(await getAuthHeader()),
					...request.headers,
				};
			} catch (e) {
				if (e === 'Token not found') {
					redirectToLogin();
					return Promise.reject(e);
				}
			}
		} else {
			headers = request.headers;
		}

		const response = await fetch(url.toString(), { headers, method, body });
		const json = await response.json();

		if (!response.ok) {
			if ('errorCode' in json && json.errorCode === 'INV_TOK') {
				await AsyncStorage.removeItem('accessToken');
				redirectToLogin();
			}

			return Promise.reject(json);
		}

		return json;
	},

	get: async function<T>(
		url: string,
		auth: AuthoriseRequest = 'AUTH',
		headers?: any
	) {
		return sparkHttpClient._request<Api3Response<T>>({
			method: 'GET',
			url: new URL(url),
			headers,
			authorize: auth === 'AUTH',
		});
	},

	post: async function<K, T extends Api3Response<K>>(
		url: string,
		body: BodyInit,
		auth: AuthoriseRequest = 'AUTH',
		headers?: any
	) {
		return sparkHttpClient._request<T>({
			method: 'POST',
			url: new URL(url),
			body,
			headers,
			authorize: auth === 'AUTH',
		});
	},
};
