import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { typography } from './typography';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: colors.backgroundPrimary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.separator,
    },
    headerTitle: {
        ...typography.headline,
        color: colors.labelPrimary,
    },
    headerButton: {
        ...typography.body,
        color: colors.primary,
    },
    searchContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: colors.backgroundPrimary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.separator,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.backgroundSecondary,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    searchInput: {
        flex: 1,
        marginLeft: 12,
        ...typography.body,
        color: colors.labelPrimary,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
    },
    dateHeader: {
        alignItems: 'center',
        paddingVertical: 24,
    },
    card: {
        backgroundColor: colors.backgroundPrimary,
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    cardSection: {
        padding: 24,
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.separator,
    },
    actionGrid: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 24,
    },
    button: {
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 44,
    },
    buttonPrimary: {
        backgroundColor: colors.primary,
    },
    buttonSecondary: {
        backgroundColor: colors.backgroundPrimary,
        borderWidth: 1,
        borderColor: colors.separator,
    },
    buttonText: {
        ...typography.body,
        fontWeight: '600',
    },
    buttonTextPrimary: {
        color: colors.backgroundPrimary,
    },
    buttonTextSecondary: {
        color: colors.primary,
    },
    statusDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    actionButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
