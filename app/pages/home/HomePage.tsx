import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { SparkText } from '../../atoms/SparkText';
import { SafeAreaView } from 'react-navigation';
import { SparkPageTitle } from '../../molecules/SparkPageTitle';
import { SparkMaskedText } from '../../molecules/SparkMaskedText';
import { SparkCard } from '../../atoms/SparkCard';

export const HomePage: FunctionComponent = () => {
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
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkMaskedText textAlign="flex-start">Meters</SparkMaskedText>
					<SparkText>
						Submit meter readings to help improve the accuracy of your bills. Look at
						your previous reads to get an idea of how much energy you use.
					</SparkText>
				</SparkCard>
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkMaskedText textAlign="flex-end">Payments</SparkMaskedText>
					<SparkText>
						Take a look at your payment history and check your balance.
					</SparkText>
				</SparkCard>
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkMaskedText textAlign="flex-start">Profile</SparkMaskedText>
					<SparkText>
						Check out the personal information we have for your account and make sure
						everything is up to date.
					</SparkText>
				</SparkCard>
			</View>
		</SafeAreaView>
	);
};
