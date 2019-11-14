import { FooterTabProps } from '../molecules/FooterTab';
import { colours } from '../styles/ColourPalette';
import { IconHome, IconBill, IconQuestionMark, IconUser, IconSearch } from '../atoms/Icons';
import React from 'react';

export const navigationItems: Array<FooterTabProps> = [{
    colour: colours.blue,
    label: 'Home',
    icon: <IconHome fill={colours.blue} />
}, {
    colour: colours.turquoise,
    label: 'Reading',
    icon: <IconSearch fill={colours.turquoise} />
}, {
    colour: colours.hotPink,
    label: 'Bills',
    icon: <IconBill fill={colours.hotPink} />
}, {
    colour: colours.magenta,
    label: 'Help',
    icon: <IconQuestionMark fill={colours.magenta} />
}, {
    colour: colours.purple,
    label: 'Profile',
    icon: <IconUser fill={colours.purple} />,
    isActive: true
}];