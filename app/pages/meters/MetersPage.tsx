import { FunctionComponent, useState, useEffect } from 'react';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { SparkText } from '../../atoms/SparkText';
import { getMeters } from '../../api-communication/customer';

export const MetersPage: FunctionComponent = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		getMeters().then((response) => {
            setIsLoading(false);
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
				<SparkText
					primary
					semiBold
					style={{ width: '100%', marginBottom: 20 }}
					size="big"
				>
					Meters
				</SparkText>

				{isLoading && <SparkText>Loading...</SparkText>}
			</View>
		</SafeAreaView>
	);
};
