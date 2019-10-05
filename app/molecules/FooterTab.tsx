import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from 'react-native-svg';

export interface FooterTabProps {
    colour: any;
    icon: any;
    label: string;
    isActive?: boolean;
}

export const FooterTab = (props: FooterTabProps) => {
    return (
        <View style={{
            width: '20%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <SvgXml width="50%" height="50%" xml={props.icon}>

            </SvgXml>
            {
                props.isActive &&
                <Text style={{ color: props.colour }}>
                    {props.label}
                </Text>
            }
        </View>
    )
}