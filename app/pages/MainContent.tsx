import React, { FunctionComponent, useState } from 'react';
import { StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { NavigationFooter } from './NavigationFooter';
import { navigationItems } from './NavigationItems';
import { NavigationNavigatorProps } from 'react-navigation';

export const MainContent: FunctionComponent<NavigationNavigatorProps> = () => {
	const [currentNavIndex, setCurrentNavIndex] = useState(0);

	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>{navigationItems[currentNavIndex].page}</ScrollView>
				<NavigationFooter
					selectedNavIndex={currentNavIndex}
					setSelectedNavIndex={setCurrentNavIndex}
					navigationItems={navigationItems}
				></NavigationFooter>
			</SafeAreaView>
		</>
	);
};
