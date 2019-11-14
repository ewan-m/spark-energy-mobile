import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import { FooterTab } from '../molecules/FooterTab';
import { colours } from '../styles/ColourPalette';
import { navigationItems } from './NavigationItems';

export const NavigationFooter: FunctionComponent = () => {
	const [navigationState, setNavState] = useState(navigationItems);

	const updateNavState = () => {

    };

	return (
		<View
			style={{
				flexDirection: 'row',
				height: 80,
				justifyContent: 'space-between',
			}}
		>
			{navigationItems.map(({ isActive, icon, label, colour }, index) => (
				<FooterTab
					key={index}
					isActive={!!isActive}
					icon={icon}
					label={label}
					colour={colour}
					onTouch={updateNavState}
				></FooterTab>
			))}
		</View>
	);
};
