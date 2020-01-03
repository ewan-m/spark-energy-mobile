import React, { FunctionComponent, ReactNode } from 'react';
import { View } from 'react-native';
import { SparkText } from '../atoms/SparkText';
import { colours } from '../styles/ColourPalette';
import { SparkSvgProps } from '../atoms/Icons';
import { sparkShadow } from '../styles/Shadows';
import { SparkCard } from '../atoms/SparkCard';

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
		<SparkCard style={{ width: 35, height: 35, borderRadius: 35, padding: 0}}>
			<Icon fill={isActive ? colours.magenta : colours.secondaryText} />
		</SparkCard>
		<SparkText
			size="small"
			semiBold={isActive}
			style={{ color: isActive ? colours.magenta : colours.secondaryText }}
		>
			{label}
		</SparkText>
	</View>
);
