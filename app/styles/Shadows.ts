import { StyleProp, ViewStyle } from 'react-native';

export const sparkShadow: (elevation?: number) => StyleProp<ViewStyle> = (
	elevation: number = 3
) => {
	return {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation,
	};
};
