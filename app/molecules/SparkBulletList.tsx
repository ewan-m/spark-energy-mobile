import React, { FunctionComponent } from 'react';
import { SparkText } from '../atoms/SparkText';
import { View } from 'react-native';
import { IconArrowRightCircle } from '../atoms/Icons';

export interface SparkBulletListProps {
	title: string;
	content: Array<string>;
}

export const SparkBulletList: FunctionComponent<SparkBulletListProps> = ({
	title,
	content,
}) => {
	return (
		<>
			<SparkText semiBold>{title}</SparkText>
			{content.map((item) => (
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 5,
					}}
				>
					<IconArrowRightCircle width={20} height={20} />
					<SparkText key={item} style={{ paddingHorizontal: 10, width: '90%' }}>
						{item}
					</SparkText>
				</View>
			))}
		</>
	);
};
