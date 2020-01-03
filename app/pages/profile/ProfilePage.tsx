import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SparkText } from '../../atoms/SparkText';
import { IconUser } from '../../atoms/Icons';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkPageTitle } from '../../molecules/SparkPageTitle';
import { getCustomer, Customer } from '../../api-communication/customer';
import { colours } from '../../styles/ColourPalette';
import { ChangeEmailAddress } from './ChangeEmailAddress';
import { ChangePassword } from './ChangePassword';

export const ProfilePage: FunctionComponent = () => {
	const signOut = async () => {
		await AsyncStorage.removeItem('accessToken');
	};

	const [isLoading, setIsLoading] = useState(true);
	const [customer, setCustomer] = useState({} as Customer);

	useEffect(() => {
		let isSubscribed = true;
		getCustomer().then((response) => {
			if (isSubscribed) {
				setIsLoading(false);
				if (response.success && response.data) {
					setCustomer(response.data);
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
				<SparkPageTitle>Profile</SparkPageTitle>
				<SparkCard
					style={{ marginBottom: 20 }}
					imageBackgroundUrl={require('../../../assets/images/abstract-white.jpg')}
				>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
						}}
					>
						<IconUser width={50} height={50} style={{ marginRight: 20 }} />

						<View style={{flex: 1}}>
							{isLoading && <ActivityIndicator size="large" color={colours.magenta} />}
							{!isLoading && (
								<>
									<SparkText size="small">{customer?.CustomerReference}</SparkText>
									<SparkText primary size="normal" semiBold style={{ marginBottom: 10 }}>
										{customer?.Name}
									</SparkText>
									<SparkText>{customer?.AddressLine1}</SparkText>

									{!!customer.AddressLine2 && (
										<SparkText size="small">{customer?.AddressLine2}</SparkText>
									)}
									<SparkText size="small">
										{customer?.TownCity}, {customer?.County}
									</SparkText>
									<SparkText size="small">{customer?.PostCode}</SparkText>
								</>
							)}
						</View>
					</View>
				</SparkCard>
				<ChangeEmailAddress isLoading={isLoading} customer={customer} />
				<ChangePassword />
			</View>
		</SafeAreaView>
	);
};
