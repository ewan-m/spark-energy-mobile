import { FunctionComponent, useState, useEffect } from 'react';
import React from 'react';
import { View, SafeAreaView, Linking, ActivityIndicator } from 'react-native';
import { SparkText } from '../../atoms/SparkText';
import { SparkCard } from '../../atoms/SparkCard';
import { getBills, Bill } from '../../api-communication/bills';
import { colours } from '../../styles/ColourPalette';
import { IconDownload } from '../../atoms/Icons';
import { SparkMoney } from '../../molecules/SparkMoney';
import { SparkPageTitle } from '../../molecules/SparkPageTitle';

export const BillsPage: FunctionComponent = () => {
	const [bills, setBills] = useState([] as Bill[]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentBalance, setCurrentBalance] = useState('');
	const [inDebt, setInDebt] = useState(false);

	useEffect(() => {
		let isSubscribed = true;
		getBills().then((response) => {
			if (response.data && isSubscribed) {
				setBills(response.data);
				if (response.data.length > 0 && response.data[0]) {
					const balance = response.data[0].balance;
					setCurrentBalance(`${-Number(balance)}`);
					setInDebt(!balance.includes('-'));
				}
			}
			setIsLoading(false);
		});
		return () => {
			isSubscribed = false;
		};
	}, []);

	const openBillInBrowser = async (url: string) => {
		const isUrlSupported = await Linking.canOpenURL(url);
		if (isUrlSupported) {
			Linking.openURL(url);
		}
	};

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
				<SparkPageTitle>Bills</SparkPageTitle>

				{isLoading && <ActivityIndicator size="large" color={colours.magenta} />}

				{!isLoading && (
					<>
						<SparkCard
							style={{
								marginBottom: 40,
							}}
							imageBackgroundUrl={require('../../../assets/images/abstract-white.jpg')}
						>
							<SparkText primary semiBold>
								Current Balance
							</SparkText>
							<SparkMoney colour="contextual" amount={currentBalance} />
							<SparkText>{inDebt ? '#PayYourBills' : '#PaidMyBills'}</SparkText>
						</SparkCard>

						{bills.map((bill) => (
							<SparkCard
								style={{
									marginBottom: 20,
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'flex-end',
								}}
								key={bill.id}
							>
								<View>
									<SparkText size="small">{bill.transactionDate}</SparkText>
									<SparkMoney
										colour="contextual"
										amount={bill.credit === '0.00' ? `-${bill.debit}` : bill.credit}
									/>
									<SparkText primary>{bill.label}</SparkText>
								</View>
								{bill.link && (
									<View
										onTouchEnd={() => openBillInBrowser(bill.link)}
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'space-between',
										}}
									>
										<IconDownload width={40} height={40} fill={colours.secondaryText} />
										<SparkText semiBold size="small">
											Download.pdf
										</SparkText>
									</View>
								)}
							</SparkCard>
						))}
					</>
				)}
			</View>
		</SafeAreaView>
	);
};
