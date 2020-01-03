import { FunctionComponent, useState, useEffect } from 'react';
import React from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { SparkText } from '../../atoms/SparkText';
import {
	getCustomer,
	MeterReadingFormData,
} from '../../api-communication/customer';
import { SparkForm } from '../../atoms/SparkForm';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkButton } from '../../atoms/SparkButton';
import { IconSun, IconMoon } from '../../atoms/Icons';
import { HistoricalReading } from '../../api-communication/reading-history';
import { SparkBulletList } from '../../molecules/SparkBulletList';
import { SparkPageTitle } from '../../molecules/SparkPageTitle';
import { colours } from '../../styles/ColourPalette';

export const MetersPage: FunctionComponent = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [meters, setMeters] = useState([] as Array<MeterReadingFormData>);
	const [historicalReads, setHistoricalReads] = useState(
		[] as Array<HistoricalReading>
	);

	useEffect(() => {
		let isSubscribed = true;
		getCustomer().then((response) => {
			if (isSubscribed) {
				setIsLoading(false);

				if (response.success && response.data) {
					setMeters(response.data.meterReadingFormData);
				}
			}
		});
		return () => {
			isSubscribed = false;
		};
	}, []);
	return (
		<SafeAreaView>
			<View
				style={{
					padding: 20,
					alignItems: 'center',
					justifyContent: 'space-evenly',
					height: '100%',
					width: '100%',
				}}
			>
				<SparkPageTitle>Meters</SparkPageTitle>

				{isLoading && <ActivityIndicator size="large" color={colours.magenta} />}
				{!isLoading && (
					<SparkCard
						imageBackgroundUrl={require('../../../assets/images/abstract-white.jpg')}
					>
						{meters.map((meter) => (
							<View key={meter.name} style={{ marginBottom: 20 }}>
								<View
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'flex-end',

										marginBottom: 10,
									}}
								>
									<View
										style={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
										}}
									>
										{meter.e7 &&
											(meter.e7 === 'Day' ? (
												<IconSun width={30} height={30} />
											) : (
												<IconMoon width={30} height={30} />
											))}
										<SparkText size="big"> {meter.supply} </SparkText>
									</View>
									<SparkText size="small">{meter.label}</SparkText>
								</View>
								<SparkForm keyboardType="numeric" placeholder={meter.value} />
							</View>
						))}
						<SparkButton size="normal">Submit Readings</SparkButton>
					</SparkCard>
				)}

				<SparkPageTitle style={{marginVertical: 20}}>Help</SparkPageTitle>
				<SparkCard>
					<SparkBulletList
						title="General Advice"
						content={[
							'Any numbers in red or after a decimal point can be ignored.',
							'Meters are read from left to right, and zeros at the start should be included.',
						]}
					/>
				</SparkCard>
			</View>
		</SafeAreaView>
	);
};
