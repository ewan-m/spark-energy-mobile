import React, { FunctionComponent, useState, useEffect } from 'react';
import moment from 'moment';
import {
	HistoricalReading,
	getHistoricalReadings,
} from '../../api-communication/reading-history';
import { groupBy } from '../../helpful-utilities/group-by';
import { ActivityIndicator, View, Dimensions } from 'react-native';
import { colours } from '../../styles/ColourPalette';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkText, scaledFontSize } from '../../atoms/SparkText';
import { MeterReadingFormData } from '../../api-communication/customer';

type UsefulHistory = {
	month: string;
	meterTitle: string;
	averageUnits: number;
	isEstimate: boolean;
};

type UsageHistoryProps = {
	meters: Array<MeterReadingFormData>;
};

export const UsageHistory: FunctionComponent<UsageHistoryProps> = ({
	meters,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [reads, setReads] = useState([[]] as Array<Array<UsefulHistory>>);

	useEffect(() => {
		let isSubscribed = true;
		getHistoricalReadings(
			moment(moment.now())
				.subtract(1, 'year')
				.format('DD/MM/YYYY'),
			moment(moment.now()).format('DD/MM/YYYY')
		).then((response) => {
			if (isSubscribed) {
				if (response.success && response.data) {
					const processed = groupBy(
						response.data,
						(item: HistoricalReading) => item.MeterReference + item.RegisterId
					).map((readsGroupedByMeter) =>
						readsGroupedByMeter
							.map((read, index) => {
								const nextReading =
									readsGroupedByMeter[
										Math.min(index + 1, readsGroupedByMeter.length - 1)
									];
								const averageUsageSinceLastRead =
									(Number(read.Units) - Number(nextReading.Units)) /
									moment(read.ReadingDate, 'DD/MM/YYYY').diff(
										moment(nextReading.ReadingDate, 'DD/MM/YYYY'),
										'days'
									);

								return {
									month: moment(read.ReadingDate, 'DD/MM/YYYY').format('MMMM'),
									averageUnits: averageUsageSinceLastRead,
									meterTitle: `${read.MeterReference} ${read.RegisterId}`,
									isEstimate: read.Source === 'E',
								};
							})
							.filter(
								(item, pos, self) =>
									self.map((item) => item.month).indexOf(item.month) === pos
							)
					);

					setReads(processed);
					setIsLoading(false);
				}
			}
		});
		return () => {
			isSubscribed = false;
		};
	}, []);

	const getSectionTitle = (array: UsefulHistory[]) => {
		const matchingMeter = meters.find(
			(meter) => meter.label === `Ref: ${array[0].meterTitle}`
		);

		if (matchingMeter?.e7) {
			return `${matchingMeter?.supply} (${matchingMeter?.e7})`;
		}

		return matchingMeter?.supply;
	};

	return isLoading ? (
		<ActivityIndicator size="large" color={colours.magenta} />
	) : (
		<>
			{reads.map((array) => (
				<SparkCard style={{ marginBottom: 20 }}>
					{meters.length === 0 ? (
						<ActivityIndicator
							size="small"
							color={colours.primaryText}
						></ActivityIndicator>
					) : (
						<SparkText size="big" style={{ marginBottom: 10 }}>
							{getSectionTitle(array)}
						</SparkText>
					)}
					{array.pop() &&
						array.map((item) => (
							<>
								<SparkText>
									{item.month} - {item.averageUnits.toFixed(2)}
								</SparkText>
								<View
									style={{
										width:
											(Dimensions.get('window').width - 80) *
												(Number(item.averageUnits) /
													Math.max(...array.map((b) => Number(b.averageUnits || 1)))) || 1,
										height: scaledFontSize(18),
										borderRadius: 10,
										marginTop: 5,
										marginBottom: 5,
										backgroundColor: item.isEstimate ? colours.grey : colours.violetDark,
									}}
								></View>
							</>
						))}
				</SparkCard>
			))}
		</>
	);
};
