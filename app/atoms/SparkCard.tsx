import { FunctionComponent } from 'react';
import { View, ImageBackground } from 'react-native';
import React from 'react';
import { colours } from '../styles/ColourPalette';
import { sparkShadow } from '../styles/Shadows';
import { ViewProps, ImageSourcePropType } from 'react-native';

export interface SparkCardProps extends ViewProps {
	imageBackgroundUrl?: ImageSourcePropType;
}

export const SparkCard: FunctionComponent<SparkCardProps> = (props) => (
	<View
		{...props}
		style={{
			padding: props.imageBackgroundUrl ? 0 : 20,
			width: '100%',
			backgroundColor: '#fff',
			borderWidth: props.imageBackgroundUrl ? 1 : 0,
			borderRadius: props.imageBackgroundUrl ? 0 : 5,
			borderColor: colours.primaryText,
			...(sparkShadow(props.imageBackgroundUrl ? 3 : 2) as any),
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
