import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SparkTextProps } from './interfaces/SparkTextProps';

import { Dimensions, Platform, PixelRatio } from 'react-native';

const scaledFontSize = (size: number) => {
	const newSize = size * Dimensions.get('window').fontScale;
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
	}
};

export const SparkText: FunctionComponent<SparkTextProps> = (props) => (
	<Text
		{...props}
		style={Object.assign(
			{},
			{
				fontFamily: `SparkOmnes-${props.semiBold ? 'SemiBold' : 'Regular'}`,
				fontSize: {
					small: scaledFontSize(12),
					normal: scaledFontSize(15),
					big: scaledFontSize(25),
				}[props.size ?? 'normal'],
			},
			props.style
		)}
	>
		{props.children}
	</Text>
);
