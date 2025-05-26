import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export const Card = ({ children, style = {} }) => (
    <View style={[globalStyles.card, style]}>
        {children}
    </View>
);