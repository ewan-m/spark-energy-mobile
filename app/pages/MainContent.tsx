import React, { FunctionComponent, useState } from 'react';
import { StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { NavigationFooter } from '../organisms/NavigationFooter';
import { navigationItems } from '../organisms/NavigationItems';

export const MainContent: FunctionComponent = () => {
	const [currentNavIndex, setCurrentNavIndex] = useState(0);

	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>
					{navigationItems[currentNavIndex].page}
				</ScrollView>
				<NavigationFooter
					selectedNavIndex={currentNavIndex}
					setSelectedNavIndex={setCurrentNavIndex}
					navigationItems={navigationItems}
				></NavigationFooter>
			</SafeAreaView>
		</>
	);
};
