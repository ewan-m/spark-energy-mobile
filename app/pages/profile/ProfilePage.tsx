import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SparkText } from '../../atoms/SparkText';
import { SparkButton } from '../../atoms/SparkButton';
import { IconUser, IconPhone } from '../../atoms/Icons';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkPageTitle } from '../../molecules/SparkPageTitle';
import { getCustomer, Customer } from '../../api-communication/customer';

export const ProfilePage: FunctionComponent = () => {
	const signOut = async () => {
		await AsyncStorage.removeItem('accessToken');
	};

	const [customer, setCustomer] = useState({} as Customer);

	useEffect(() => {
		getCustomer().then((response) => {
			if (response.success && response.data) {
				setCustomer(response.data);
			}
		});
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
				<SparkCard>
					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<IconUser width={75} height={75} />
						<View style={{ width: '70%' }}>
							<SparkText style={{ marginBottom: 5 }}>{customer?.Name}</SparkText>
							<SparkText semiBold size="small">
								{customer?.EmailAddress}
							</SparkText>
						</View>
					</View>
				</SparkCard>
				<SparkCard>
					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<View style={{ width: '70%' }}>
							<SparkText style={{ marginBottom: 5 }}>{customer?.Name}</SparkText>
							<SparkText semiBold size="small">
								{customer?.EmailAddress}
							</SparkText>
						</View>
						<IconPhone width={75} height={75} />
					</View>
				</SparkCard>
			</View>
		</SafeAreaView>
	);
};
