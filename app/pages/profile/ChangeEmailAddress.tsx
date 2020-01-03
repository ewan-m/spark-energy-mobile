import React, { FunctionComponent, useState } from 'react';
import { SparkCard } from '../../atoms/SparkCard';
import { View, ActivityIndicator } from 'react-native';
import { IconMail } from '../../atoms/Icons';
import { SparkText } from '../../atoms/SparkText';
import { SparkForm } from '../../atoms/SparkForm';
import { SparkButton } from '../../atoms/SparkButton';
import { Customer } from '../../api-communication/customer';
import { colours } from '../../styles/ColourPalette';

interface ChangeEmailAddressProps {
	isLoading: boolean;
	customer?: Customer;
}

enum FormState {
	initial,
	inProgress,
	submitting,
	completed,
}

const InitialForm: FunctionComponent<any> = (props) => (
	<>
		<SparkText size="small">Current Email</SparkText>
		<SparkText style={{ marginBottom: 20 }} primary semiBold>
			{props.customer?.EmailAddress}
		</SparkText>
		<SparkButton
			size="normal"
			onPress={() => props.setFormState(FormState.inProgress)}
		>
			I want to change my email
		</SparkButton>
	</>
);

const InProgressForm: FunctionComponent<any> = (props) => (
	<>
		<SparkText size="normal">New Email</SparkText>
		<SparkForm
			autoCompleteType="email"
			keyboardType="email-address"
			autoCapitalize="none"
			style={{ marginBottom: 20 }}
			onChangeText={() => {}}
		></SparkForm>
		<SparkText size="normal">Confirm New Email</SparkText>
		<SparkForm
			autoCompleteType="email"
			keyboardType="email-address"
			autoCapitalize="none"
			style={{ marginBottom: 20 }}
			onChangeText={() => {}}
		></SparkForm>
		<SparkText size="normal">Current Password</SparkText>
		<SparkForm
			autoCompleteType="password"
			autoCapitalize="none"
			style={{ marginBottom: 20 }}
			onChangeText={() => {}}
		></SparkForm>
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between'
			}}
		>
			<SparkButton type="secondary" onPress={() => props.setFormState(FormState.initial)} size="normal">
				Cancel
			</SparkButton>
			<SparkButton onPress={() => {}} size="normal">
				Change Email
			</SparkButton>
		</View>
	</>
);

export const ChangeEmailAddress: FunctionComponent<ChangeEmailAddressProps> = ({
	isLoading,
	customer,
}) => {
	const [formState, setFormState] = useState(FormState.initial);

	return (
		<SparkCard style={{ marginBottom: 20 }}>
			<SparkText size="big" primary semiBold style={{ marginBottom: 20 }}>
				Email Address
			</SparkText>

			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
				}}
			>
				<IconMail width={50} height={50} style={{ marginRight: 20 }} />
				<View style={{ flex: 1 }}>
					{isLoading && (
						<ActivityIndicator
							size="large"
							color={colours.magenta}
						></ActivityIndicator>
					)}
					{!isLoading && (
						<>
							{formState === FormState.initial && (
								<InitialForm customer={customer} setFormState={setFormState} />
							)}
							{formState === FormState.inProgress && <InProgressForm setFormState={setFormState} />}
						</>
					)}
				</View>
			</View>
		</SparkCard>
	);
};
