import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export const Button = ({
    title,
    onPress,
    style = {},
    textStyle = {},
    variant = 'primary'
}) => {
    const buttonStyles = [
        globalStyles.button,
        variant === 'primary' && globalStyles.buttonPrimary,
        variant === 'secondary' && globalStyles.buttonSecondary,
        style
    ];

    const textStyles = [
        globalStyles.buttonText,
        variant === 'primary' && globalStyles.buttonTextPrimary,
        variant === 'secondary' && globalStyles.buttonTextSecondary,
        textStyle
    ];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};