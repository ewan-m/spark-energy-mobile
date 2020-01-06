import React, { FunctionComponent } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Login } from './Login';
import { SparkPageContainer } from '../../molecules/SparkPageContainer';
import { SparkPageTitle } from '../../molecules/SparkPageTitle';

export const Welcome: FunctionComponent<any> = (props) => (
	<SafeAreaView>
		<SparkPageContainer>
			<View style={{width: '100%'}}>
				<SparkPageTitle>Login</SparkPageTitle>
				<Login onLoginSuccess={() => props.navigation.navigate('MainContent')} />
			</View>
			<View>
				<SparkPageTitle>Register</SparkPageTitle>
			</View>
		</SparkPageContainer>
	</SafeAreaView>
);
