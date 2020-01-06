import React, { FunctionComponent, useState } from 'react';
import { SparkCard } from '../../atoms/SparkCard';
import { View } from 'react-native';
import { IconLock } from '../../atoms/Icons';
import { SparkText } from '../../atoms/SparkText';
import { SparkButton } from '../../atoms/SparkButton';
import { FormState } from '../../helpful-utilities/form-state.enum';

export const ChangePassword: FunctionComponent = () => {
	const [formState, setFormState] = useState(FormState.initial);

	return (
		<SparkCard style={{ marginBottom: 20 }}>
			<SparkText size="big" primary style={{ marginBottom: 20 }}>
				Password
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
					<SparkButton
						size="normal"
						onPress={() => setFormState(FormState.inProgress)}
					>
						Change Password
					</SparkButton>
				</View>
			</View>
		</SparkCard>
	);
};
