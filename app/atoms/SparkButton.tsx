import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { SparkButtonProps } from './interfaces/SparkButtonProps';
import { colours } from '../styles/ColourPalette';
import { SparkText } from './SparkText';

export const SparkButton: FunctionComponent<SparkButtonProps> = (props) => (
	<TouchableOpacity
		{...props}
		style={Object.assign(
			{},
			{
				fontFamily: 'SparkOmnes-Regular',
				fontSize: { big: 20, normal: 40 }[props.size],
				padding: 15,
				backgroundColor: colours.magenta,
				fill: '#fff',
				alignItems: 'center',
				borderRadius: 10,
			},
			props.style
		)}
	>
		<SparkText semiBold size={props.size} style={{ color: '#fff' }}>
			{props.children}
		</SparkText>
	</TouchableOpacity>
);
