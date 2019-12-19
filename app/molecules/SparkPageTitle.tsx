import React, { FunctionComponent } from 'react';
import { SparkText } from '../atoms/SparkText';

export interface SparkPageTitleProps {
	children: string;
}

export const SparkPageTitle: FunctionComponent<SparkPageTitleProps> = ({
	children,
}) => (
	<SparkText
		primary
		semiBold
		style={{ width: '100%', marginBottom: 20 }}
		size="big"
	>
		{children}
	</SparkText>
);
