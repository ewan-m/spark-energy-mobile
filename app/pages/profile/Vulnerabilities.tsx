import React, { FunctionComponent, useState } from 'react';
import { FormState } from '../../helpful-utilities/form-state.enum';
import { SparkCard } from '../../atoms/SparkCard';
import { View } from 'react-native';
import { SparkButton } from '../../atoms/SparkButton';
import { SparkText } from '../../atoms/SparkText';
import { IconQuestionMark } from '../../atoms/Icons';

export const Vulnerabilities: FunctionComponent = () => {
	const [formState, setFormState] = useState(FormState.initial);

	return (
		<SparkCard style={{ marginBottom: 20 }}>
			<SparkText size="big" primary style={{ marginBottom: 20 }}>
				Vulnerabilities
			</SparkText>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
				}}
			>
				<IconQuestionMark width={50} height={50} style={{ marginRight: 20 }} />
				<View style={{ flex: 1 }}>
					<SparkButton
						size="normal"
						onPress={() => setFormState(FormState.inProgress)}
					>
						Change Vulnerabilities
					</SparkButton>
				</View>
			</View>
		</SparkCard>
	);
};
