import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { FooterTab, FooterTabProps } from '../molecules/FooterTab';

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
				height: 70,
				justifyContent: 'space-between',
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
