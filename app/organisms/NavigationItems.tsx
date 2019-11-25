import React from "react";
import { FooterTabProps } from '../molecules/FooterTab';
import {
	IconHome,
	IconQuestionMark,
	IconUser,
	IconSearch,
	IconMobileApp,
} from '../atoms/Icons';
import { View } from "react-native";
import { SparkText } from "../atoms/SparkText";
import { BillsPage } from "../pages/bills/BillsPage";

export const navigationItems: Array<FooterTabProps> = [
	{
		label: 'Home',
		Icon: IconHome,
		page: <View><SparkText>Home</SparkText></View>
	},
	{
		label: 'Reading',
		Icon: IconSearch,
		page: <View><SparkText>Reading</SparkText></View>
	},
	{
		label: 'Bills',
		Icon: IconMobileApp,
		page: <BillsPage />
	},
	{
		label: 'Help',
		Icon: IconQuestionMark,
		page: <View><SparkText>Help</SparkText></View>
	},
	{
		label: 'Profile',
		Icon: IconUser,
		page: <View><SparkText>Profile</SparkText></View>
	},
];
