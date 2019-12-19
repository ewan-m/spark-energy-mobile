import { sparkHttpClient } from './spark-http-client';

export interface HistoricalReading {
	ReadingId: number;
	SupplyPointId: number;
	MeterReference: string;
	RegisterId: string;
	ReadingDate: string; // DD/MM/YYYY
	Source: string;
	Units: string;
	IsInitial: boolean;
	IsFinal: boolean;
	FuelType: string;
}

export const getHistoricalReadings = async (from: string, to: string) =>
	sparkHttpClient.get<Array<HistoricalReading>>(
		`/v1/reading-history?startDate=${from}&endDate=${to}`,
	);
