import { environment } from "./environment";
import AsyncStorage from "@react-native-community/async-storage";

export interface Bill {
    balance: string;
    credit: string;
    debit: string;
    description: string;
    id: string;
    label: string;
    transactionDate: string;
    link: string;
}

export const getBills = async (): Promise<Bill[]> =>
	JSON.parse(
		await (
			await fetch(`${environment.baseApi}/v1/customer-invoice-statement`, {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${await AsyncStorage.getItem('accessToken')}`,
				}
			})
		).text()
	).data;
