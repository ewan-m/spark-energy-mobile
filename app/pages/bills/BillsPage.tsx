import { FunctionComponent, useState, useEffect } from 'react';
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { SparkText } from '../../atoms/SparkText';
import { SparkCard } from '../../atoms/SparkCard';
import { getBills, Bill } from '../../api-communication/bills';

export const BillsPage: FunctionComponent = () => {
	const [bills, setBills] = useState([] as Bill[]);

	 useEffect(() => {
	 	getBills().then(data => {
	 		setBills(data);
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
				<SparkText semiBold style={{ width: '100%', marginBottom: 20 }} size="big">
					Bills
				</SparkText>

				{bills.map(bill => 
				<SparkCard style={{marginBottom: 20}}  key={bill.id}>
					<SparkText>{bill.transactionDate}</SparkText>
				</SparkCard>
				)}
			</View>
		</SafeAreaView>
	);
};
