import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-navigation';
import { SparkText } from '../../atoms/SparkText';
import { SparkMaskedText } from '../../molecules/SparkMaskedText';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkPageContainer } from '../../molecules/SparkPageContainer';
import { SparkImagePanel } from '../../molecules/SparkImagePanel';


export const HomePage: FunctionComponent = () => {
	return (
		<SafeAreaView>
			<SparkPageContainer>
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkMaskedText textAlign="flex-start">Meters</SparkMaskedText>
					<SparkText>
						Submit meter readings to help improve the accuracy of your bills. Look at
						your previous reads to get an idea of how much energy you use.
					</SparkText>
				</SparkCard>
				<SparkImagePanel panelImage={require("../../../assets/images/Couple_breakfast_iPad.png")} />
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkMaskedText textAlign="flex-end">Payments</SparkMaskedText>
					<SparkText>
						Take a look at your payment history and check your balance.
					</SparkText>
				</SparkCard>
				
				<SparkImagePanel panelImage={require("../../../assets/images/mother-child.png")} />
				<SparkCard style={{ marginBottom: 20 }}>
					<SparkMaskedText textAlign="flex-start">Profile</SparkMaskedText>
					<SparkText>
						Check out the personal information we have for your account and make sure
						everything is up to date.
					</SparkText>
				</SparkCard>
			</SparkPageContainer>
		</SafeAreaView>
	);
};
