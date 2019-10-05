import React from "react";
import { View } from "react-native";
import { FooterTab } from "../molecules/FooterTab";
import { colours } from "../styles/ColourPalette";
import { navigationItems } from "./NavigationItems";


export const NavigationFooter = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-between'
            }}>
            {
                navigationItems.map((item, index) =>
                    <FooterTab key={index}
                        isActive={!!item.isActive}
                        icon={item.icon}
                        label={item.label}
                        colour={item.colour}
                    ></FooterTab>
                )
            }
        </View>
    )
}