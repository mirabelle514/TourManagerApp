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
import { Header } from '../components/Header';
import { globalStyles } from '../styles/globalStyles';
import { scheduleStyles } from '../styles/scheduleStyles';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

export const ScheduleScreen = () => (
    <SafeAreaView style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.backgroundPrimary} />

        <Header
            title="Schedule"
            leftAction={{ text: '‹ Back', action: () => { } }}
            rightAction={{ text: 'Add', action: () => { } }}
            hasSearch={true}
        />

        <ScrollView style={globalStyles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={globalStyles.dateHeader}>
                <Text style={[typography.title1, { color: colors.labelPrimary }]}>March 2024</Text>
            </View>

            {/* Calendar Card */}
            <Card style={{ marginBottom: 16 }}>
                <View style={globalStyles.cardSection}>
                    <Text style={[typography.headline, { color: colors.labelPrimary, marginBottom: 16 }]}>
                        This Week
                    </Text>
                    <View style={scheduleStyles.calendarPlaceholder}>
                        <Text style={[typography.body, { color: colors.labelSecondary, textAlign: 'center' }]}>
                            Calendar Component
                        </Text>
                    </View>
                </View>
            </Card>

            {/* Upcoming Shows */}
            <Text style={[typography.title3, { color: colors.labelPrimary, marginBottom: 12, marginLeft: 8 }]}>
                Upcoming Shows
            </Text>

            {[
                { date: 'Today', venue: 'The Fillmore', city: 'San Francisco, CA', status: colors.success },
                { date: 'Tomorrow', venue: 'Greek Theatre', city: 'Berkeley, CA', status: colors.warning },
                { date: 'March 17', venue: 'Shoreline Amphitheatre', city: 'Mountain View, CA', status: colors.primary }
            ].map((show, index) => (
                <Card key={index} style={{ marginBottom: 12 }}>
                    <TouchableOpacity style={globalStyles.cardSection}>
                        <View style={scheduleStyles.showItem}>
                            <View style={{ flex: 1 }}>
                                <View style={scheduleStyles.showHeader}>
                                    <View style={[globalStyles.statusDot, { backgroundColor: show.status }]} />
                                    <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                        {show.date}
                                    </Text>
                                </View>
                                <Text style={[typography.headline, { color: colors.labelPrimary, marginTop: 4 }]}>
                                    {show.venue}
                                </Text>
                                <Text style={[typography.body, { color: colors.labelSecondary }]}>
                                    {show.city}
                                </Text>
                            </View>
                            <Icon name="chevron-forward" size={20} color={colors.labelTertiary} />
                        </View>
                    </TouchableOpacity>
                </Card>
            ))}
        </ScrollView>
    </SafeAreaView>
);