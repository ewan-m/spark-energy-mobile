import React, { FunctionComponent } from 'react';
import { SafeAreaView, ImageBackground, View } from 'react-native';
import { colours } from '../../styles/ColourPalette';
import { SparkCard } from '../../atoms/SparkCard';
import { Login } from './Login';
import { SparkText } from '../../atoms/SparkText';

export const Welcome: FunctionComponent<any> = (props) => (
	<SafeAreaView>
		<ImageBackground
			source={require('../../../assets/images/logo-energy-loop.png')}
			style={{ width: '100%', height: '100%' }}
		>
			<View
				style={{
					padding: 20,
					alignItems: 'center',
					justifyContent: 'space-evenly',
					height: '100%',
				}}
			>
				<SparkCard>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginBottom: 20,
							borderBottomWidth: 1,
							paddingBottom: 10,
						}}
					>
						<SparkText semiBold size="big">Login</SparkText>
						<SparkText semiBold style={{ color: colours.greyDark }} size="big">
							Register
						</SparkText>
					</View>

					<Login onLoginSuccess={() => props.navigation.navigate('MainContent')} />
				</SparkCard>
			</View>
		</ImageBackground>
	</SafeAreaView>
);
