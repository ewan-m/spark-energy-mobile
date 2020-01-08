import React, { FunctionComponent, useState } from 'react';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkText } from '../../atoms/SparkText';
import { SparkForm } from '../../atoms/SparkForm';
import { SparkButton } from '../../atoms/SparkButton';
import { colours } from '../../styles/ColourPalette';

export const Register: FunctionComponent = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	return (
		<>
			<SparkText semiBold style={{ marginBottom: 2 }}>
				Account Number
			</SparkText>
			<SparkText size="small" style={{ marginBottom: 5 }}>
				This is a 10 digit number, usually begins with 9.
			</SparkText>
			<SparkForm
				autoCompleteType="email"
				keyboardType="email-address"
				autoCapitalize="none"
				style={{ marginBottom: 20 }}
				onChangeText={setEmail}
			></SparkForm>
			<SparkText semiBold style={{ marginBottom: 5 }}>
				Postcode
			</SparkText>
			<SparkForm
				autoCompleteType="email"
				keyboardType="email-address"
				autoCapitalize="none"
				style={{ marginBottom: 20 }}
				onChangeText={setEmail}
			></SparkForm>
			<SparkText semiBold style={{ marginBottom: 2 }}>
				Email
			</SparkText>
			<SparkText size="small" style={{ marginBottom: 5 }}>
				Choose your email for your new online account.
			</SparkText>
			<SparkForm
				autoCompleteType="email"
				keyboardType="email-address"
				autoCapitalize="none"
				style={{ marginBottom: 20 }}
				onChangeText={setEmail}
			></SparkForm>

			<SparkText semiBold style={{ marginBottom: 2 }}>
				Password
			</SparkText>
			<SparkText size="small" style={{ marginBottom: 5 }}>
				Include a capital letter, number and special character. It has to be at
				least 8 characters long.
			</SparkText>
			<SparkForm
				autoCapitalize="none"
				secureTextEntry={true}
				autoCompleteType="password"
				onChangeText={setPassword}
			></SparkForm>

			{error !== '' && (
				<SparkText
					style={{ color: colours.failureRed, marginTop: 5, marginBottom: 20 }}
				>
					{error}
				</SparkText>
			)}

			<SparkButton style={{ marginTop: 20 }} onPress={() => {}} size="normal">
				Register
			</SparkButton>
		</>
	);
};
