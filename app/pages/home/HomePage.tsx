import React, { FunctionComponent } from 'react';
import { SparkText } from '../../atoms/SparkText';
import { SafeAreaView } from 'react-navigation';
import { SparkMaskedText } from '../../molecules/SparkMaskedText';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkPageContainer } from '../../molecules/SparkPageContainer';
import { View, ImageBackground } from 'react-native';
import { sparkShadow } from '../../styles/Shadows';
import { colours } from '../../styles/ColourPalette';

const SparkImagePanel: FunctionComponent<any> = ({panelImage}) => (
	<View
		style={{
			width: '100%',
			height: 150,
			marginBottom: 20,
			borderRadius: 10,
			borderColor: colours.primaryText,
			...(sparkShadow(3) as any),
			overflow: 'hidden',
		}}
	>
		<ImageBackground
			style={{
				width: '100%',
				height: 150,
			}}
			source={panelImage}
		/>
	</View>
);

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
