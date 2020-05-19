import React, { FunctionComponent } from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';
import { colours } from '../styles/ColourPalette';
import { SparkText } from './SparkText';
import LinearGradient from 'react-native-linear-gradient';

export interface SparkButtonProps extends TouchableOpacityProps {
	size?: 'big' | 'normal' |'huge';
	type?: 'primary' | 'secondary';
	innerStyle?: StyleProp<ViewStyle>;
}

export const SparkButton: FunctionComponent<SparkButtonProps> = ({
	size,
	type,
	innerStyle,
	...props
}) => (
	<TouchableOpacity
		{...props}
		activeOpacity={0.75}
		style={Object.assign(
			{},
			{
				alignItems: 'center',
				borderRadius: 20,
			},
			props.style
		)}
	>
		<LinearGradient
			colors={type==="secondary" ? [colours.greyLight, colours.greyMidDark]: [colours.magenta, colours.magentaDark]}
			style={Object.assign(
				{},
				{
					paddingVertical: 20,
					paddingHorizontal: 30,
					borderRadius: 40,
					width: '100%',
				},
				innerStyle
			)}
		>
			<SparkText
				semiBold
				size={size}
				style={{ color: type === 'secondary' ? colours.magenta : '#fff', textAlign: 'center' }}
			>
				{props.children}
			</SparkText>
		</LinearGradient>
	</TouchableOpacity>
);
