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
import { IconSun, IconMoon } from '../../atoms/Icons';

type UsefulHistory = {
	month: string;
	meterTitle: string;
	averageUnits: number;
	totalUnits: number;
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
						readsGroupedByMeter.map((read, index) => {
							const nextReading =
								readsGroupedByMeter[
									Math.min(index + 1, readsGroupedByMeter.length - 1)
								];

							const totalUsed = Number(read.Units) - Number(nextReading.Units);
							const averageUsageSinceLastRead =
								totalUsed /
								moment(read.ReadingDate, 'DD/MM/YYYY').diff(
									moment(nextReading.ReadingDate, 'DD/MM/YYYY'),
									'days'
								);

							return {
								month: moment(read.ReadingDate, 'DD/MM/YYYY').format('MMM Do'),
								averageUnits: averageUsageSinceLastRead,
								totalUnits: totalUsed,
								meterTitle: `${read.MeterReference} ${read.RegisterId}`,
								isEstimate: read.Source === 'E',
							};
						})
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
			return (
				<View
					style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}
				>
					{matchingMeter.e7 === 'Day' ? (
						<IconSun
							fill={colours.primaryText}
							height={scaledFontSize(28)}
							width={scaledFontSize(28)}
						/>
					) : (
						<IconMoon
							fill={colours.primaryText}
							height={scaledFontSize(28)}
							width={scaledFontSize(28)}
						/>
					)}
					<SparkText size="big" primary>
						{matchingMeter?.supply}
					</SparkText>
				</View>
			);
		}

		return (
			<SparkText size="big" primary style={{ paddingBottom: 10 }}>
				{matchingMeter?.supply}
			</SparkText>
		);
	};

	return isLoading ? (
		<ActivityIndicator size="large" color={colours.magenta} />
	) : (
		<>
			<SparkCard style={{ marginBottom: 20 }}>
				<SparkText>
					Your average usage is the average units used per day since your last read.
					Grey bars are estimated reads and are needed when you haven't submitted a
					reading recently.
				</SparkText>
			</SparkCard>
			{reads.map((array) => (
				<SparkCard style={{ marginBottom: 20 }}>
					{meters.length === 0 ? (
						<ActivityIndicator
							size="small"
							color={colours.primaryText}
						></ActivityIndicator>
					) : (
						getSectionTitle(array)
					)}
					{array.pop() &&
						array.map((item) => (
							<>
								<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
									<SparkText style={{ width: 70 }}>{item.month} </SparkText>
									<View
										style={{
											width:
												(Dimensions.get('window').width - 200) *
													(Number(item.averageUnits) /
														Math.max(...array.map((b) => Number(b.averageUnits || 1)))) || 1,
											height: scaledFontSize(18),
											borderRadius: 10,
											backgroundColor: item.isEstimate ? colours.grey : colours.violetDark,
										}}
									></View>
									<SparkText size="small" style={{ marginLeft: 10 }}>
										{item.averageUnits.toFixed(1)} kWh
									</SparkText>
								</View>
							</>
						))}
				</SparkCard>
			))}
		</>
	);
};
