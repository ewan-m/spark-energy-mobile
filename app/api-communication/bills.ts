import { sparkHttpClient } from './spark-http-client';
import { Api3Response } from './api3-response.interface';

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

export const getBills = async (): Promise<Api3Response<Bill[]>> =>
	sparkHttpClient.get<Bill[]>('/v1/customer-invoice-statement');
