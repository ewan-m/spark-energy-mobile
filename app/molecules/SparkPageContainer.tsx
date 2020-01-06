import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

export const SparkPageContainer: FunctionComponent = ({ children }) => (
	<View
		style={{
			padding: 15,
			alignItems: 'center',
			justifyContent: 'space-evenly',
			height: '100%',
			width: '100%',
		}}
	>
		{children}
	</View>
);
