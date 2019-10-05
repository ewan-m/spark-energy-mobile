import { FooterTabProps } from '../molecules/FooterTab';
import { colours } from '../styles/ColourPalette';

export const navigationItems: Array<FooterTabProps> = [{
    colour: colours.blue,
    label: 'Home',
    icon: 't'
}, {
    colour: colours.turquoise,
    label: 'Reading',
    icon: 't'
}, {
    colour: colours.hotPink,
    label: 'Bills',
    icon: 't'
}, {
    colour: colours.magenta,
    label: 'Help',
    icon: 't'
}, {
    colour: colours.purple,
    label: 'Profile',
    icon: 't',
    isActive: true
}];