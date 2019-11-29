import React, { FunctionComponent, useState } from 'react';
import { StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { NavigationFooter } from '../organisms/NavigationFooter';
import { navigationItems } from '../organisms/NavigationItems';
import { NavigationNavigatorProps } from 'react-navigation';

export const MainContent: FunctionComponent<NavigationNavigatorProps> = ({navigation}) => {
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
