import { Api3Response } from './api3-response.interface';
import { sparkHttpClient } from './spark-http-client';
import { environment } from './environment';

export interface MeterReadingFormData {
	label: string;
	supply: "Electricity" | "Gas";
	meterId: string;
	value: string;
	lastReadDate: string | "dd/MM/yyyy";
	dials: number;
	decimals: number;
	name: string;
	e7: null | "Day" | "Night";
}

export interface Customer {
	meterReadingFormData: Array<MeterReadingFormData>;
	Fuel: "Dual" | "Electricity" | "Gas";
	IsDD: boolean;
	CurrentBalance: string;
	CollectionDay: number;
	CollectionAmount: string;
	NextBillDate: string;
	NextDirectDebitCollectionDate: string;
	NextDirectDebitCollectionAmount: string;
	CustomerReference: string;
}

export const getMeters = async (): Promise<Api3Response<Customer>> =>
	sparkHttpClient.get<Customer>(
		`${environment.baseApi}/v1/customer`
	);
