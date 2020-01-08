import React, { FunctionComponent } from 'react';
import { SparkText, SparkTextProps } from '../atoms/SparkText';
import { View } from 'react-native';
import { colours } from '../styles/ColourPalette';

export interface SparkPageTitleProps extends SparkTextProps {
	children: string;
}

export const SparkPageTitle: FunctionComponent<SparkPageTitleProps> = ({
	children,
	style,
}) => (
	<View style={Object.assign({}, { width: '100%', marginBottom: 20 }, style)}>
		<SparkText size="huge" style={{ color: colours.primaryText }}>
			{children}
		</SparkText>
	</View>
);
