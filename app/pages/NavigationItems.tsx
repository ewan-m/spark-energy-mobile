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
import { ProfilePage } from "./profile/ProfilePage";
import { HomePage } from "./home/HomePage";

export const navigationItems: Array<FooterTabProps> = [
	{
		label: 'Home',
		Icon: IconHome,
		page: <HomePage />
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
		label: 'Profile',
		Icon: IconUser,
		page: <ProfilePage />
	},
];
