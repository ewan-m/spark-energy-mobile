import React, { FunctionComponent } from 'react';
import { SafeAreaView, ImageBackground, View } from 'react-native';
import { colours } from '../styles/ColourPalette';
import { SparkTextRegular } from '../atoms/SparkTextRegular';
import { SparkButton } from '../atoms/SparkButton';
import { SparkForm } from '../atoms/SparkForm';
import { SparkTextSemiBold } from '../atoms/SparkTextBold';

export const Login: FunctionComponent<any> = (props) => (
	<SafeAreaView>
		<ImageBackground
			source={require('../../assets/images/logo-energy-loop.png')}
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
				<View
					style={{
						padding: 20,
						width: '100%',
						backgroundColor: 'rgba(255, 255, 255, 0.95)',
						borderRadius: 10,
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,

						elevation: 5,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginBottom: 20,
							borderBottomWidth: 1,
							paddingBottom: 10,
						}}
					>
						<SparkTextSemiBold size="big">Login</SparkTextSemiBold>
						<SparkTextSemiBold style={{ color: colours.grey }} size="big">
							Register
						</SparkTextSemiBold>
					</View>

					<SparkTextRegular size="normal">Email</SparkTextRegular>
					<SparkForm style={{ marginBottom: 20 }}></SparkForm>
					<SparkTextRegular size="normal">Password</SparkTextRegular>
					<SparkForm style={{ marginBottom: 20 }}></SparkForm>
					<SparkButton
						onPress={() => props.navigation.navigate('MainContent')}
						size="normal"
					>
						Login
					</SparkButton>
				</View>
			</View>
		</ImageBackground>
	</SafeAreaView>
);
