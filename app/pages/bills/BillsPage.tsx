import { FunctionComponent, useState, useEffect } from 'react';
import React from 'react';
import { View, SafeAreaView, Linking } from 'react-native';
import { SparkText } from '../../atoms/SparkText';
import { SparkCard } from '../../atoms/SparkCard';
import { getBills, Bill } from '../../api-communication/bills';
import { colours } from '../../styles/ColourPalette';
import { IconDownload } from '../../atoms/Icons';
import { SparkMoney } from '../../molecules/SparkMoney';

export const BillsPage: FunctionComponent = () => {
	const [bills, setBills] = useState([] as Bill[]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentBalance, setCurrentBalance] = useState('');
	const [inDebt, setInDebt] = useState(false);

	useEffect(() => {
		getBills().then((response) => {
			if (response.data) {
				setBills(response.data);
				if (response.data.length > 0 && response.data[0]) {
					const balance = response.data[0].balance;
					if (balance.includes('-')) {
						setInDebt(false);
						setCurrentBalance(`+${balance}`);
					} else {
						setInDebt(true);
						setCurrentBalance(`-${balance}`);
					}
				}
			}
			setIsLoading(false);
		});
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
				<SparkText
					primary
					semiBold
					style={{ width: '100%', marginBottom: 20 }}
					size="big"
				>
					Bills
				</SparkText>

				{isLoading && <SparkText>Loading...</SparkText>}

				{!isLoading && (
					<>
						<SparkCard
							style={{
								marginBottom: 40,
							}}
							imageBackgroundUrl={require('../../../assets/images/Energy_Abstract_White.jpg')}
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
									<SparkText primary>{bill.description}</SparkText>
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
