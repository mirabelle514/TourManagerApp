import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const scheduleStyles = StyleSheet.create({
    calendarPlaceholder: {
        height: 200,
        backgroundColor: colors.backgroundSecondary,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    showItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    showHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
});