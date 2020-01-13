import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { View, ImageBackground } from 'react-native';
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
				height: 60,
				justifyContent: 'space-between',
				borderTopWidth: 1,
				borderTopColor: colours.greyLight,
				backgroundColor: '#fff'
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
