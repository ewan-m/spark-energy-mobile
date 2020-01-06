import React, { FunctionComponent } from 'react';
import { SparkText } from '../../atoms/SparkText';
import { View, ActivityIndicator } from 'react-native';
import { SparkCard } from '../../atoms/SparkCard';
import { IconUser } from '../../atoms/Icons';
import { colours } from '../../styles/ColourPalette';

export const ProfileInfo: FunctionComponent<any> = ({
	customer,
	isLoading,
}) => (
	<SparkCard
		style={{ marginBottom: 20 }}
		imageBackgroundUrl={require('../../../assets/images/abstract-white.jpg')}
	>
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
			}}
		>
			<IconUser width={50} height={50} style={{ marginRight: 20 }} />

			<View style={{ flex: 1 }}>
				{isLoading && <ActivityIndicator size="large" color={colours.magenta} />}
				{!isLoading && (
					<>
						<SparkText size="small">{customer?.CustomerReference}</SparkText>
						<SparkText primary size="normal" semiBold style={{ marginBottom: 10 }}>
							{customer?.Name}
						</SparkText>
						<SparkText>{customer?.AddressLine1}</SparkText>

						{!!customer.AddressLine2 && (
							<SparkText size="small">{customer?.AddressLine2}</SparkText>
						)}
						<SparkText size="small">
							{customer?.TownCity}, {customer?.County}
						</SparkText>
						<SparkText size="small">{customer?.PostCode}</SparkText>
					</>
				)}
			</View>
		</View>
	</SparkCard>
);
