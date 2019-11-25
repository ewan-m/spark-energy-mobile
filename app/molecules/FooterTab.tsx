import React, { FunctionComponent, ReactNode } from 'react';
import { View } from 'react-native';
import { SparkTextRegular } from '../atoms/SparkTextRegular';
import { colours } from '../styles/ColourPalette';
import { SparkSvgProps } from '../atoms/Icons';

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
		<View style={{ width: 35, height: 35 }}>
			<Icon fill={isActive ? colours.magenta : colours.secondaryText} />
		</View>
		<SparkTextRegular
			size="small"
			style={{ color: isActive ? colours.magenta : colours.secondaryText }}
		>
			{label}
		</SparkTextRegular>
	</View>
);
