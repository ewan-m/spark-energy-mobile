import { FunctionComponent } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { colours } from '../styles/ColourPalette';
import { sparkShadow } from '../styles/Shadows';
import { SparkCardProps } from './interfaces/SparkCardProps';

export const SparkCard: FunctionComponent<SparkCardProps> = (props) => (
	<View
		{...props}
		style={{
			padding: props.imageBackgroundUrl ? 0 : 20,
			width: '100%',
			backgroundColor: '#fff',
			borderWidth: props.imageBackgroundUrl ? 1 : 0,
			borderRadius: props.imageBackgroundUrl ? 0 : 10,
			borderColor: colours.primaryText,
			...(sparkShadow(props.imageBackgroundUrl ? 10 : 5) as any),
			...(props.style as any),
		}}
	>
		{props.imageBackgroundUrl ? (
			<ImageBackground source={props.imageBackgroundUrl} style={{ width: '100%' }}>
				<View style={{ padding: 20 }}>{props.children}</View>
			</ImageBackground>
		) : (
			props.children
		)}
	</View>
);
