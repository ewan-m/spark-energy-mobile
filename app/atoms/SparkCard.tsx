import { FunctionComponent } from 'react';
import { ViewProps, View } from 'react-native';
import React from 'react';

export const SparkCard: FunctionComponent<ViewProps> = (props) => (
	<View
        {...props}
		style={Object.assign(
            {},
			{
				padding: 20,
				width: '100%',
				backgroundColor: '#fff',
				borderRadius: 10,
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,

				elevation: 5,
			},
			props.style
		)}
	>
		{props.children}
	</View>
);
