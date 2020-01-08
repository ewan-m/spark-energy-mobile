import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-navigation';
import { SparkText } from '../../atoms/SparkText';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkPageContainer } from '../../molecules/SparkPageContainer';
import { SparkImagePanel } from '../../molecules/SparkImagePanel';
import { SparkPageTitle } from '../../molecules/SparkPageTitle';

export const HomePage: FunctionComponent = () => {
	return (
		<SafeAreaView>
			<SparkPageContainer>
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkPageTitle>Meters</SparkPageTitle>
					<SparkText>
						Submit meter readings to help improve the accuracy of your bills. Look at
						your previous reads to get an idea of how much energy you use.
					</SparkText>
				</SparkCard>
				<SparkImagePanel
					panelImage={require('../../../assets/images/Couple_breakfast_iPad.png')}
				/>
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkPageTitle>Payments</SparkPageTitle>
					<SparkText>
						Take a look at your payment history and check your balance.
					</SparkText>
				</SparkCard>

				<SparkImagePanel
					panelImage={require('../../../assets/images/mother-child.png')}
				/>
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkPageTitle>Profile</SparkPageTitle>
					<SparkText>
						Check out the personal information we have for your account and make sure
						everything is up to date.
					</SparkText>
				</SparkCard>
			</SparkPageContainer>
		</SafeAreaView>
	);
};
