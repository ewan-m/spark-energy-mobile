import React, { FunctionComponent, useState } from 'react';
import {
	StatusBar,
	SafeAreaView,
	ScrollView,
	ImageBackground,
} from 'react-native';
import { NavigationFooter } from '../organisms/NavigationFooter';
import { navigationItems } from '../organisms/NavigationItems';
import { NavigationNavigatorProps } from 'react-navigation';

export const MainContent: FunctionComponent<NavigationNavigatorProps> = ({
	navigation,
}) => {
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

				<ImageBackground
					source={require('../../assets/images/Energy_Abstract_Lime.jpg')}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						zIndex: -1,
					}}
				></ImageBackground>
			</SafeAreaView>
		</>
	);
};
