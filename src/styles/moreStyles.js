import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const moreStyles = StyleSheet.create({
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileAvatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    settingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    settingsContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    appInfo: {
        alignItems: 'center',
        paddingVertical: 24,
        gap: 4,
    },
});