import { TextProps } from "react-native";

export interface SparkTextProps extends TextProps {
	size?: 'small' | 'normal' | 'big';
	semiBold?: boolean;
}