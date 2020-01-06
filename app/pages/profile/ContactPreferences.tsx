import React, { FunctionComponent, useState } from 'react';
import { FormState } from '../../helpful-utilities/form-state.enum';
import { SparkCard } from '../../atoms/SparkCard';
import { View } from 'react-native';
import { SparkButton } from '../../atoms/SparkButton';
import { SparkText } from '../../atoms/SparkText';
import { IconSpeechBubble } from '../../atoms/Icons';

export const ContactPreferences: FunctionComponent = () => {
	const [formState, setFormState] = useState(FormState.initial);

	return (
		<SparkCard style={{ marginBottom: 20 }}>
			<SparkText size="big" primary style={{ marginBottom: 20 }}>
				Contact Preferences
			</SparkText>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
				}}
			>
				<IconSpeechBubble width={50} height={50} style={{ marginRight: 20 }} />
				<View style={{ flex: 1 }}>
					<SparkButton
						size="normal"
						onPress={() => setFormState(FormState.inProgress)}
					>
						Change Contact Preferences
					</SparkButton>
				</View>
			</View>
		</SparkCard>
	);
};
