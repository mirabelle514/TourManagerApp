import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../styles/colors';

export const Header = ({ title, leftAction, rightAction, hasSearch = false }) => (
    <>
        <View style={globalStyles.header}>
            <TouchableOpacity onPress={leftAction?.action}>
                <Text style={globalStyles.headerButton}>
                    {leftAction?.text || '‹ Back'}
                </Text>
            </TouchableOpacity>
            <Text style={globalStyles.headerTitle}>{title}</Text>
            <TouchableOpacity onPress={rightAction?.action}>
                <Text style={globalStyles.headerButton}>
                    {rightAction?.text || 'Edit'}
                </Text>
            </TouchableOpacity>
        </View>
        {hasSearch && (
            <View style={globalStyles.searchContainer}>
                <View style={globalStyles.searchBar}>
                    <Icon name="search" size={20} color={colors.labelTertiary} />
                    <TextInput
                        style={globalStyles.searchInput}
                        placeholder="Search..."
                        placeholderTextColor={colors.labelTertiary}
                    />
                </View>
            </View>
        )}
    </>
);