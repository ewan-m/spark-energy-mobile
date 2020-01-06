import React, { FunctionComponent, useState } from 'react';
import { SparkCard } from '../../atoms/SparkCard';
import { View, ActivityIndicator } from 'react-native';
import { IconPhone } from '../../atoms/Icons';
import { SparkText } from '../../atoms/SparkText';
import { SparkButton } from '../../atoms/SparkButton';
import { FormState } from '../../helpful-datatypes/form-state.enum';
import { colours } from '../../styles/ColourPalette';
import { SparkForm } from '../../atoms/SparkForm';

const InitialForm: FunctionComponent<any> = (props) => (
	<>
		<SparkText size="small">Current Telephone Number</SparkText>
		<SparkText style={{ marginBottom: 10 }} primary semiBold>
			{props.customer?.PhoneNumber || '-'}
		</SparkText>
		<SparkText size="small">Current Mobile Number</SparkText>
		<SparkText style={{ marginBottom: 20 }} primary semiBold>
			{props.customer?.MobileNumber || '-'}
		</SparkText>
		<SparkButton
			size="normal"
			onPress={() => props.setFormState(FormState.inProgress)}
		>
			Change Phone Number
		</SparkButton>
	</>
);

const InProgressForm: FunctionComponent<any> = (props) => (
	<>
		<SparkText semiBold style={{ marginBottom: 5 }}>
			New Telephone Number
		</SparkText>
		<SparkForm
			autoCompleteType="email"
			keyboardType="email-address"
			autoCapitalize="none"
			style={{ marginBottom: 20 }}
			onChangeText={() => {}}
		></SparkForm>
		<SparkText semiBold style={{ marginBottom: 5 }}>
			New Mobile Number
		</SparkText>
		<SparkForm
			autoCompleteType="email"
			keyboardType="email-address"
			autoCapitalize="none"
			style={{ marginBottom: 20 }}
			onChangeText={() => {}}
		></SparkForm>
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<SparkButton
				type="secondary"
				onPress={() => props.setFormState(FormState.initial)}
				size="normal"
			>
				Cancel
			</SparkButton>
			<SparkButton onPress={() => {}} size="normal">
				Confirm
			</SparkButton>
		</View>
	</>
);

export const ChangePhoneNumber: FunctionComponent<any> = ({
	customer,
	isLoading,
}) => {
	const [formState, setFormState] = useState(FormState.initial);

	return (
		<SparkCard style={{ marginBottom: 20 }}>
			<SparkText size="big" primary style={{ marginBottom: 20 }}>
				Phone Number
			</SparkText>

			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
				}}
			>
				<IconPhone width={50} height={50} style={{ marginRight: 20 }} />
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
							{formState === FormState.inProgress && (
								<InProgressForm setFormState={setFormState} />
							)}
						</>
					)}
				</View>
			</View>
		</SparkCard>
	);
};
