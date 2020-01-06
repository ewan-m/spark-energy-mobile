import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SparkPageTitle } from '../../molecules/SparkPageTitle';
import { getCustomer, Customer } from '../../api-communication/customer';
import { ChangeEmailAddress } from './ChangeEmailAddress';
import { ChangePassword } from './ChangePassword';
import { ProfileInfo } from './ProfileInfo';
import { Vulnerabilities } from './Vulnerabilities';
import { ContactPreferences } from './ContactPreferences';
import { ChangePhoneNumber } from './ChangePhoneNumber';
import { SparkPageContainer } from '../../molecules/SparkPageContainer';
import { AdditionalPeople } from './AdditionalPeople';

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
			<SparkPageContainer>
				<SparkPageTitle>Profile</SparkPageTitle>
				<ProfileInfo isLoading={isLoading} customer={customer} />
				<ChangeEmailAddress isLoading={isLoading} customer={customer} />
				<ChangePassword />
				<ChangePhoneNumber isLoading={isLoading} customer={customer} />
				<Vulnerabilities />
				<ContactPreferences />
				<AdditionalPeople />
			</SparkPageContainer>
		</SafeAreaView>
	);
};
