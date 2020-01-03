import React, { FunctionComponent } from 'react';
import { SparkText, SparkTextProps } from '../atoms/SparkText';
import { SparkMaskedText } from './SparkMaskedText';
import { View } from 'react-native';

export interface SparkPageTitleProps extends SparkTextProps {
	children: string;
}

export const SparkPageTitle: FunctionComponent<SparkPageTitleProps> = ({
	children,
	style
}) => (
	<View style={{ marginBottom: 20 }} {...style}>
		<SparkMaskedText>{children}</SparkMaskedText>
	</View>
);
