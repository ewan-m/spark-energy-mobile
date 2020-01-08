import React, { FunctionComponent } from 'react';
import { SparkText } from '../atoms/SparkText';
import { colours, SparkColour } from '../styles/ColourPalette';
import { View } from 'react-native';

export interface SparkMoneyProps {
	amount: string;
	colour?: 'contextual' | SparkColour;
	prependPlusSign?: boolean;
}

export const SparkMoney: FunctionComponent<SparkMoneyProps> = ({
	amount,
	colour = 'secondaryText',
	prependPlusSign = true,
}) => {
	if (prependPlusSign && !amount.includes('-')) {
		amount = `+${amount}`;
	}
	const calculatedColour =
		colour === 'contextual'
			? amount.includes('-')
				? colours.failureRed
				: colours.successGreen
			: colour;

	const bigMoney = amount.split('.')[0];
	const littleMoney = amount.split('.')[1];

	return (
		<View
			style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}
		>
			<SparkText
				style={{
					color: calculatedColour,
				}}
				size="big"
			>
				{bigMoney[0]} £{bigMoney.slice(1)}
			</SparkText>
			<SparkText
				style={{
					paddingLeft: 1,
					paddingBottom: 3.5,
					color: calculatedColour,
				}}
				size="normal"
			>
				.{littleMoney}
			</SparkText>
		</View>
	);
};
