import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { FooterTab, FooterTabProps } from '../molecules/FooterTab';
import { colours } from '../styles/ColourPalette';

type NavigationFooterProps = {
	navigationItems: Array<FooterTabProps>;
	selectedNavIndex: number;
	setSelectedNavIndex: Dispatch<SetStateAction<number>>;
};

export const NavigationFooter: FunctionComponent<NavigationFooterProps> = ({
	navigationItems,
	selectedNavIndex,
	setSelectedNavIndex,
}) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				height: 65,
				justifyContent: 'space-between',
				borderTopWidth: 2,
				borderTopColor: colours.grey,
				backgroundColor: '#eee'
			}}
		>
			{navigationItems.map(({ Icon, label }, index) => (
				<FooterTab
					key={index}
					isActive={index === selectedNavIndex}
					Icon={Icon}
					label={label}
					onTouch={() => setSelectedNavIndex(index)}
				></FooterTab>
			))}
		</View>
	);
};
