import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { globalStyles } from '../styles/globalStyles';
import { crewStyles } from '../styles/crewStyles';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

export const CrewScreen = () => (
    <SafeAreaView style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.backgroundPrimary} />

        <Header
            title="Crew"
            leftAction={{ text: '‹ Back', action: () => { } }}
            rightAction={{ text: 'Add', action: () => { } }}
            hasSearch={true}
        />

        <ScrollView style={globalStyles.scrollView} showsVerticalScrollIndicator={false}>
            {/* Band Section */}
            <Text style={[typography.title3, { color: colors.labelPrimary, marginBottom: 12, marginLeft: 8 }]}>
                Band
            </Text>

            {[
                { name: 'Alex Rivera', role: 'Lead Vocals', status: 'online', initial: 'AR' },
                { name: 'Jordan Kim', role: 'Guitar', status: 'online', initial: 'JK' },
                { name: 'Sam Chen', role: 'Bass', status: 'away', initial: 'SC' },
                { name: 'Riley Martinez', role: 'Drums', status: 'offline', initial: 'RM' }
            ].map((member, index) => (
                <Card key={index} style={{ marginBottom: 12 }}>
                    <TouchableOpacity style={globalStyles.cardSection}>
                        <View style={crewStyles.crewItem}>
                            <View style={crewStyles.crewContent}>
                                <View style={[crewStyles.avatar, { backgroundColor: colors.primary }]}>
                                    <Text style={[typography.body, { color: colors.backgroundPrimary, fontWeight: 'bold' }]}>
                                        {member.initial}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                                        {member.name}
                                    </Text>
                                    <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                        {member.role}
                                    </Text>
                                </View>
                            </View>
                            <View style={crewStyles.crewActions}>
                                <View style={[
                                    globalStyles.statusDot,
                                    {
                                        backgroundColor: member.status === 'online' ? colors.success :
                                            member.status === 'away' ? colors.warning : colors.labelTertiary
                                    }
                                ]} />
                                <TouchableOpacity style={[globalStyles.actionButton, { backgroundColor: colors.backgroundSecondary }]}>
                                    <Icon name="chatbubble" size={18} color={colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Card>
            ))}

            {/* Crew Section */}
            <Text style={[typography.title3, { color: colors.labelPrimary, marginBottom: 12, marginTop: 24, marginLeft: 8 }]}>
                Crew
            </Text>

            {[
                { name: 'Mike Thompson', role: 'Tour Manager', status: 'online', initial: 'MT' },
                { name: 'Sarah Davis', role: 'Sound Engineer', status: 'online', initial: 'SD' },
                { name: 'Chris Wilson', role: 'Lighting Tech', status: 'away', initial: 'CW' }
            ].map((member, index) => (
                <Card key={index} style={{ marginBottom: 12 }}>
                    <TouchableOpacity style={globalStyles.cardSection}>
                        <View style={crewStyles.crewItem}>
                            <View style={crewStyles.crewContent}>
                                <View style={[crewStyles.avatar, { backgroundColor: colors.labelSecondary }]}>
                                    <Text style={[typography.body, { color: colors.backgroundPrimary, fontWeight: 'bold' }]}>
                                        {member.initial}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                                        {member.name}
                                    </Text>
                                    <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                        {member.role}
                                    </Text>
                                </View>
                            </View>
                            <View style={crewStyles.crewActions}>
                                <View style={[
                                    globalStyles.statusDot,
                                    {
                                        backgroundColor: member.status === 'online' ? colors.success :
                                            member.status === 'away' ? colors.warning : colors.labelTertiary
                                    }
                                ]} />
                                <TouchableOpacity style={[globalStyles.actionButton, { backgroundColor: colors.backgroundSecondary }]}>
                                    <Icon name="chatbubble" size={18} color={colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Card>
            ))}

            {/* Group Chat */}
            <Card style={{ marginBottom: 16 }}>
                <View style={globalStyles.cardSection}>
                    <View style={crewStyles.chatHeader}>
                        <Text style={[typography.headline, { color: colors.labelPrimary }]}>
                            Tour Group Chat
                        </Text>
                        <View style={crewStyles.badge}>
                            <Text style={[typography.caption2, { color: colors.backgroundPrimary }]}>3</Text>
                        </View>
                    </View>

                    <View style={crewStyles.chatPreview}>
                        <View style={crewStyles.chatMessage}>
                            <View style={[crewStyles.chatAvatar, { backgroundColor: colors.primary }]}>
                                <Text style={[typography.caption1, { color: colors.backgroundPrimary, fontWeight: 'bold' }]}>
                                    MT
                                </Text>
                            </View>
                            <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                Mike: Load-in moved to 1:30 PM
                            </Text>
                        </View>
                        <View style={crewStyles.chatMessage}>
                            <View style={[crewStyles.chatAvatar, { backgroundColor: colors.labelSecondary }]}>
                                <Text style={[typography.caption1, { color: colors.backgroundPrimary, fontWeight: 'bold' }]}>
                                    SD
                                </Text>
                            </View>
                            <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                Sarah: Soundcheck at 4 PM sharp!
                            </Text>
                        </View>
                    </View>

                    <Button
                        title="Open Chat"
                        variant="primary"
                        style={{ marginTop: 16 }}
                        onPress={() => { }}
                    />
                </View>
            </Card>
        </ScrollView>
    </SafeAreaView>
);