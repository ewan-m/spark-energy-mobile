import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SparkTextProps } from './interfaces/SparkTextProps';

export const SparkTextSemiBold: FunctionComponent<SparkTextProps> = (props) => (
	<Text
		{...props}
		children={props.children}
		style={Object.assign({}, props.style, {
			fontFamily: 'SparkOmnes-SemiBold',
			fontSize: { normal: 20, big: 40 }[props.size],
		})}
	></Text>
);
