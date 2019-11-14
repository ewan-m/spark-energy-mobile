import { TouchableOpacityProps } from "react-native";

export interface SparkButtonProps extends TouchableOpacityProps {
	size: 'big' | 'normal';
}