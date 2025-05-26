import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const moneyStyles = StyleSheet.create({
    financialSummary: {
        marginBottom: 24,
    },
    financialGrid: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 16,
    },
    financialCard: {
        flex: 1,
        borderRadius: 16,
        padding: 16,
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 16,
    },
    transactionIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
});