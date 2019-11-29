import { FunctionComponent, useState, useEffect } from 'react';
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { SparkText } from '../../atoms/SparkText';
import { SparkCard } from '../../atoms/SparkCard';
import { getBills, Bill } from '../../api-communication/bills';
import { colours } from '../../styles/ColourPalette';
import { IconDownload } from '../../atoms/Icons';

export const BillsPage: FunctionComponent = () => {
	const [bills, setBills] = useState([] as Bill[]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getBills().then((response) => {
			if (response.data) {
				setBills(response.data);
			}
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
				<SparkText semiBold style={{ width: '100%', marginBottom: 20 }} size="big">
					Bills
				</SparkText>

				{isLoading && (
					<SparkText >
						Loading...
					</SparkText>
				)}

				{!isLoading && (
					<>
						<SparkCard
							style={{
								marginBottom: 40,
								borderWidth: 2,
							}}
						>
							<SparkText>Current Balance</SparkText>
							<SparkText size="big" semiBold>
								{bills.length > 0 && bills[0] && bills[0].balance.includes('-')
									? `+${bills[0].balance}`
									: `-${bills[0].balance}`}
							</SparkText>
						</SparkCard>

						{bills.map((bill) => (
							<SparkCard
								style={{
									marginBottom: 20,
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
								key={bill.id}
							>
								<View>
									<SparkText size="small">{bill.transactionDate}</SparkText>
									<SparkText
										style={{
											color: bill.debit ? colours.failureRed : colours.successGreen,
										}}
										size="big"
									>
										{bill.credit === '0.00' ? `-${bill.debit}` : `+${bill.credit}`}
									</SparkText>
									<SparkText>{bill.description}</SparkText>
								</View>
								<IconDownload fill={colours.blueDark} width="50" height="50" />
							</SparkCard>
						))}
					</>
				)}
			</View>
		</SafeAreaView>
	);
};
