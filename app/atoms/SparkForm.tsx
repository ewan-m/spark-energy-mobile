import React, { FunctionComponent } from 'react';
import { TextInput, TextInputProps } from 'react-native';

export const SparkForm: FunctionComponent<TextInputProps> = (props) => (
	<TextInput
		{...props}
		style={Object.assign(
			{},
			{
				fontFamily: 'SparkOmnes-Regular',
				fontSize: 20,
				borderWidth: 1,
				borderRadius: 10,
				padding: 15,
				borderColor: '#666',
				color: '#666',
				backgroundColor: '#fff',
			},
			props.style
		)}
	></TextInput>
);
