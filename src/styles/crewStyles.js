import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const crewStyles = StyleSheet.create({
    crewItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    crewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    crewActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    badge: {
        backgroundColor: colors.danger,
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chatPreview: {
        gap: 8,
    },
    chatMessage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chatAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
});