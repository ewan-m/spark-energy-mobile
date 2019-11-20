import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SparkTextProps } from './interfaces/SparkTextProps';

export const SparkTextSemiBold: FunctionComponent<SparkTextProps> = (props) => (
	<Text
		{...props}
		children={props.children}
		style={Object.assign(
			{},
			{
				backgroundColor: 'transparent',
				fontFamily: 'SparkOmnes-SemiBold',
				fontSize: { small: 15, normal: 20, big: 40 }[props.size ?? "normal"],
			},
			props.style
		)}
	></Text>
);
