import React, { FunctionComponent } from 'react';
import MaskedView from '@react-native-community/masked-view';
import { View, Image } from 'react-native';
import { SparkText } from '../atoms/SparkText';

type SparkMaskedTextProps = {
    children: string;
    textAlign?: 'flex-end' | 'flex-start';
}

export const SparkMaskedText: FunctionComponent<SparkMaskedTextProps> = (props) => {
	return (
		<View style={{ width: '100%', height: 80 }}>
			<MaskedView
				style={{ flex: 1, flexDirection: 'row', height: '100%' }}
				maskElement={
					<View
						style={{
                            backgroundColor: 'transparent',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: props.textAlign ?? "flex-start"
						}}
					>
						<SparkText primary semiBold size="huge">
							{props.children}
						</SparkText>
					</View>
				}
			>
				<Image
					style={{ width: '100%', height: 100, overflow: 'hidden' }}
					source={require('../../assets/images/abstract-dark.png')}
				/>
			</MaskedView>
		</View>
	);
};
