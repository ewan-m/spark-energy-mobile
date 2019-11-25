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
import { SparkTextRegular } from "../atoms/SparkTextRegular";

export const navigationItems: Array<FooterTabProps> = [
	{
		label: 'Home',
		Icon: IconHome,
		page: <View><SparkTextRegular>Home</SparkTextRegular></View>
	},
	{
		label: 'Reading',
		Icon: IconSearch,
		page: <View><SparkTextRegular>Reading</SparkTextRegular></View>
	},
	{
		label: 'Bills',
		Icon: IconMobileApp,
		page: <View><SparkTextRegular>Bills</SparkTextRegular></View>
	},
	{
		label: 'Help',
		Icon: IconQuestionMark,
		page: <View><SparkTextRegular>Help</SparkTextRegular></View>
	},
	{
		label: 'Profile',
		Icon: IconUser,
		page: <View><SparkTextRegular>Profile</SparkTextRegular></View>
	},
];
