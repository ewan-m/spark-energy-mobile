import React, { FunctionComponent } from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkText } from '../../atoms/SparkText';
import { View } from 'react-native';
import { IconLock } from '../../atoms/Icons';
import { SparkButton } from '../../atoms/SparkButton';
import AsyncStorage from '@react-native-community/async-storage';

const unwrappedLogout: FunctionComponent<NavigationInjectedProps> = (props) => {
	const logout = async () => {
		await AsyncStorage.removeItem('accessToken');
		props.navigation?.navigate('Welcome');
	};

	return (
		<SparkCard style={{ marginBottom: 20 }}>
			<SparkText size="big" primary style={{ marginBottom: 20 }}>
				Logout
			</SparkText>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
				}}
			>
				<IconLock width={50} height={50} style={{ marginRight: 20 }} />
				<View style={{ flex: 1 }}>
					<SparkButton size="normal" onPress={logout}>
						Logout
					</SparkButton>
				</View>
			</View>
		</SparkCard>
	);
};

export const Logout = withNavigation(unwrappedLogout);
