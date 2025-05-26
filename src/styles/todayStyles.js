import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const todayStyles = StyleSheet.create({
    venueHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    infoGrid: {
        flexDirection: 'row',
        gap: 16,
    },
    infoCard: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
        borderRadius: 16,
        padding: 16,
    },
    infoCardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scheduleList: {
        gap: 12,
    },
    scheduleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contactHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    contactActions: {
        flexDirection: 'row',
        gap: 12,
    },
    expandButton: {
        paddingVertical: 8,
    },
    expandedContent: {
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 0.5,
        borderTopColor: colors.separator,
    },
    detailGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
    },
    financialHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    financialContent: {
        marginBottom: 16,
    },
});