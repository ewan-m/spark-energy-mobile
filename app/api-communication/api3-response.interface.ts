export interface Api3Response<T> {
	success: boolean;
	msg?: string;
	errorCode?: string;
	data?: T;
}
