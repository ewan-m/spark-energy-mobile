import React, { FunctionComponent } from "react";
import { View, ImageBackground } from "react-native";
import { colours } from "../styles/ColourPalette";
import { sparkShadow } from "../styles/Shadows";

export const SparkImagePanel: FunctionComponent<any> = ({panelImage}) => (
	<View
		style={{
			width: '100%',
			height: 150,
			marginBottom: 20,
			borderRadius: 5,
			borderColor: colours.primaryText,
			...(sparkShadow(3) as any),
			overflow: 'hidden',
		}}
	>
		<ImageBackground
			style={{
				width: '100%',
				height: 150,
			}}
			source={panelImage}
		/>
	</View>
);