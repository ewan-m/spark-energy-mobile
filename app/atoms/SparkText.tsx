import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { Dimensions, Platform, PixelRatio } from 'react-native';
import { colours } from '../styles/ColourPalette';

import { TextProps } from 'react-native';

export interface SparkTextProps extends TextProps {
	size?: 'small' | 'normal' | 'big' | 'huge';
	primary?: boolean;
	secondary?: boolean;
	semiBold?: boolean;
	textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

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
				textAlign: props.textAlign,
				color: props?.primary ? colours.primaryText : colours.secondaryText,
				fontFamily: `SparkOmnes-${props.semiBold ? 'SemiBold' : 'Regular'}`,
				fontSize: {
					small: scaledFontSize(15),
					normal: scaledFontSize(18),
					big: scaledFontSize(32),
					huge: scaledFontSize(60)
				}[props.size ?? 'normal'],
			},
			props.style
		)}
	>
		{props.children}
	</Text>
);
