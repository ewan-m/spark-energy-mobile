import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { colours } from '../styles/ColourPalette';
import { SparkText } from './SparkText';

import { TouchableOpacityProps } from 'react-native';

export interface SparkButtonProps extends TouchableOpacityProps {
	size: 'big' | 'normal';
	type?: 'primary' | 'secondary';
}

export const SparkButton: FunctionComponent<SparkButtonProps> = (props) => (
	<TouchableOpacity
		{...props}
		style={Object.assign(
			{},
			{
				padding: 15,
				backgroundColor:
					props.type === 'secondary' ? colours.greyLight : colours.magenta,
				fill: props.type === 'secondary' ? colours.magenta : '#fff',
				borderRadius: 10,
				borderWidth: 1,
				alignItems: 'center',
				borderColor: colours.primaryText,
			},
			props.style
		)}
	>
		<SparkText
			semiBold
			size={props.size}
			style={{ color: props.type === 'secondary' ? colours.magenta : '#fff' }}
		>
			{props.children}
		</SparkText>
	</TouchableOpacity>
);
