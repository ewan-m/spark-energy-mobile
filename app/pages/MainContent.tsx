import React, { FunctionComponent } from "react";
import { StatusBar, SafeAreaView, ScrollView } from "react-native";
import { NavigationFooter } from "../organisms/NavigationFooter";

export const MainContent: FunctionComponent = () => {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>
				</ScrollView>
				<NavigationFooter></NavigationFooter>
			</SafeAreaView>
		</>
	);
};