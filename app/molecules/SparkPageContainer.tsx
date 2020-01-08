import React, { FunctionComponent, useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { colours } from '../styles/ColourPalette';

export const SparkPageContainer: FunctionComponent = ({ children }) => {
	const [grow] = useState(new Animated.Value(0.98));
	useEffect(() => {
		Animated.timing(grow, {
			toValue: 1,
			duration: 250,
			useNativeDriver: true,
			easing: Easing.cubic,
		}).start();
	}, []);
	return (
		<Animated.View
			style={{
				padding: 15,
				alignItems: 'center',
				backgroundColor: colours.greyLight,
				justifyContent: 'space-evenly',
				height: '100%',
				width: '100%',
				transform: [
					{
						scale: grow,
					},
				],
			}}
		>
			{children}
		</Animated.View>
	);
};
