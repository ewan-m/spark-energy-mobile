import React, { FunctionComponent } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { colours } from '../styles/ColourPalette';
import { scaledFontSize } from './SparkText';

export const SparkForm: FunctionComponent<TextInputProps> = (props) => (
	<TextInput
		{...props}
		style={Object.assign(
			{},
			{
				fontFamily: 'SparkOmnes-Regular',
				fontSize: scaledFontSize(18),
				borderWidth: 1,
				borderRadius: 5,
				padding: 15,
				borderColor: colours.secondaryText,
				color: colours.primaryText,
				backgroundColor: '#fff',
			},
			props.style
		)}
	></TextInput>
);
