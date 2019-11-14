import React, { FunctionComponent, ReactNode } from 'react';
import { View } from 'react-native';
import { SparkTextRegular } from '../atoms/SparkTextRegular';

export interface FooterTabProps {
	colour: any;
	icon: ReactNode;
	label: string;
	isActive?: boolean;
	onTouch?: (label: string) => void;
}

export const FooterTab: FunctionComponent<FooterTabProps> = ({
	icon,
	isActive,
	colour,
	label,
	onTouch
}) => {
	return (
		<View
			style={{
				width: '20%',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onTouchEnd={() => onTouch ? onTouch(label) : console.log('no')}
		>
			<View style={{width: 40, height: 40}}>{icon}</View>
			{isActive && <SparkTextRegular size="normal" style={{ color: colour }}>{label}</SparkTextRegular>}
		</View>
	);
};
