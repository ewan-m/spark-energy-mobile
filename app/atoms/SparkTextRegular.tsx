import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SparkTextProps } from './interfaces/SparkTextProps';

export const SparkTextRegular: FunctionComponent<SparkTextProps> = (props) => (
	<Text
		{...props}
		children={props.children}
		style={Object.assign({}, props.style, {
			fontFamily: 'SparkOmnes-Regular',
			fontSize: { normal: 20, big: 40 }[props.size],
		})}
	></Text>
);
