import React, { FunctionComponent, ReactNode } from 'react';
import { View } from 'react-native';
import { SparkText } from '../atoms/SparkText';
import { colours } from '../styles/ColourPalette';
import { SparkSvgProps } from '../atoms/Icons';
import { sparkShadow } from '../styles/Shadows';
import { SparkCard } from '../atoms/SparkCard';
import LinearGradient from 'react-native-linear-gradient';

export interface FooterTabProps {
	Icon: FunctionComponent<SparkSvgProps>;
	page?: ReactNode;
	label: string;
	isActive?: boolean;
	onTouch?: (label: string) => void;
}

export const FooterTab: FunctionComponent<FooterTabProps> = ({
	Icon,
	isActive,
	label,
	onTouch,
}) => (
	<View
		style={{
			width: '20%',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		}}
		onTouchEnd={() => (onTouch ? onTouch(label) : console.log('no'))}
	>
		<View
			style={{
				width: 30,
				height: 30,
				borderRadius: 35,
				padding: 0,
				elevation: 0
			}}
			colors={[colours.grey, colours.greyLight]}

		>
			<Icon fill={isActive ? colours.magenta : colours.secondaryText} />
		</View>
		<SparkText
			size="small"
			semiBold={isActive}
			style={{ color: isActive ? colours.magenta : colours.secondaryText }}
		>
			{label}
		</SparkText>
	</View>
);
