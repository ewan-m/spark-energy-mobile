import { Api3Response } from './api3-response.interface';
import { sparkHttpClient } from './spark-http-client';

export interface MeterReadingFormData {
	label: string;
	supply: 'Electricity' | 'Gas';
	meterId: string;
	value: string;
	lastReadDate: string; // 'dd/MM/yyyy';
	dials: number;
	decimals: number;
	name: string;
	e7: null | 'Day' | 'Night';
}

export interface Customer {
	meterReadingFormData: Array<MeterReadingFormData>;
	Fuel: 'Dual' | 'Electricity' | 'Gas';
	IsDD: boolean;
	CurrentBalance: string;
	CollectionDay: number;
	CollectionAmount: string;
	NextBillDate: string;
	NextDirectDebitCollectionDate: string;
	NextDirectDebitCollectionAmount: string;
	CustomerReference: string;
	Name: string;
	AddressLine1: string;
	AddressLine2: string;
	TownCity: string;
	County: string;
	PostCode: string;
	PhoneNumber: string;
	MobileNumber: string;
	EmailAddress: string;
}

export const getCustomer = async (): Promise<Api3Response<Customer>> =>
	sparkHttpClient.get<Customer>('/v1/customer');
