import React from "react";
import { FooterTabProps } from '../molecules/FooterTab';
import {
	IconHome,
	IconQuestionMark,
	IconUser,
	IconPound,
	IconLightning,
} from '../atoms/Icons';
import { View } from "react-native";
import { SparkText } from "../atoms/SparkText";
import { BillsPage } from "../pages/bills/BillsPage";
import { MetersPage } from "../pages/meters/MetersPage";

export const navigationItems: Array<FooterTabProps> = [
	{
		label: 'Home',
		Icon: IconHome,
		page: <View><SparkText>Home</SparkText></View>
	},
	{
		label: 'Meters',
		Icon: IconLightning,
		page: <MetersPage />
	},
	{
		label: 'Payments',
		Icon: IconPound,
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
