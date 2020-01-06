import React, { FunctionComponent, useState } from 'react';
import { SparkText } from '../../atoms/SparkText';
import { View } from 'react-native';
import { SparkCard } from '../../atoms/SparkCard';
import { SparkButton } from '../../atoms/SparkButton';
import { IconUser } from '../../atoms/Icons';
import { FormState } from '../../helpful-datatypes/form-state.enum';

export const AdditionalPeople: FunctionComponent = () => {
	const [formState, setFormState] = useState(FormState.initial);

	return (
		<SparkCard style={{ marginBottom: 20 }}>
			<SparkText size="big" primary style={{ marginBottom: 20 }}>
				Additional People
			</SparkText>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
				}}
			>
				<IconUser width={50} height={50} style={{ marginRight: 20 }} />
				<View style={{ flex: 1 }}>
					<SparkButton
						size="normal"
						onPress={() => setFormState(FormState.inProgress)}
					>
						Change Additional Contacts
					</SparkButton>
				</View>
			</View>
		</SparkCard>
	);
};
