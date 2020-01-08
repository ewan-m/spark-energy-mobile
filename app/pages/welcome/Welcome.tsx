import React, { FunctionComponent, useState } from 'react';
import {
	SafeAreaView,
	View,
	Dimensions,
	Image,
	ScrollView,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Login } from './Login';
import { Register } from './Register';
import { SparkText } from '../../atoms/SparkText';
import { SparkCard } from '../../atoms/SparkCard';
import { colours } from '../../styles/ColourPalette';
import { SparkPageContainer } from '../../molecules/SparkPageContainer';

const LoginPage = () => (
	<View style={{ padding: 15 }}>
		<Login />
	</View>
);

const RegisterPage = () => (
	<View style={{ padding: 15 }}>
		<Register />
	</View>
);

const renderTabBar = (props: any) => (
	<TabBar
		{...props}
		indicatorStyle={{
			backgroundColor: colours.magenta,
			height: 2,
		}}
		style={{ backgroundColor: 'transparent', marginBottom: 20, elevation: 0 }}
		renderLabel={({ route, focused }) => (
			<SparkText
				size="big"
				style={{
					color: focused ? colours.magenta : colours.secondaryText,
				}}
			>
				{route.title}
			</SparkText>
		)}
	/>
);

export const Welcome: FunctionComponent<any> = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'first', title: 'Login' },
		{ key: 'second', title: 'Register' },
	]);
	const renderScene = SceneMap({
		first: LoginPage,
		second: RegisterPage,
	});
	const initialLayout = { width: Dimensions.get('window').width };

	return (
		<SafeAreaView>
			<ScrollView>
				<SparkPageContainer>
					<View style={{ width: '100%', alignItems: 'center', paddingVertical: 30 }}>
						<Image
							style={{ width: 250, height: 150, marginBottom: 5 }}
							source={require('../../../assets/images/logo-transparent.png')}
						></Image>
					</View>
					<SparkCard style={{ padding: 0, marginBottom: 20 }}>
						<TabView
							renderTabBar={renderTabBar}
							navigationState={{ index, routes }}
							renderScene={renderScene}
							onIndexChange={setIndex}
							initialLayout={initialLayout}
							style={{
								marginBottom: 20,
								width: '100%',
							}}
						/>
					</SparkCard>
					<View style={{ paddingHorizontal: 15, paddingVertical: 5, width: '100%' }}>
						<SparkText size="small">
							© Spark Energy {new Date().getFullYear()}
						</SparkText>
					</View>
				</SparkPageContainer>
			</ScrollView>
		</SafeAreaView>
	);
};
