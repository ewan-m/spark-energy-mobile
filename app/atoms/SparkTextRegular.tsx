import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SparkTextProps } from './interfaces/SparkTextProps';

export const SparkTextRegular: FunctionComponent<SparkTextProps> = (props) => (
	<Text
		{...props}
		style={Object.assign(
			{},
			{
				fontFamily: 'SparkOmnes-Regular',
				fontSize: { normal: 20, big: 40 }[props.size],
			},
			props.style
		)}
	>
		{props.children}
	</Text>
);
