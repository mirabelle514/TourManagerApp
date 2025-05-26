import React, { useState } from 'react';
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
import { todayStyles } from '../styles/todayStyles';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

export const TodayScreen = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <SafeAreaView style={globalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.backgroundPrimary} />

            <Header
                title="Today"
                leftAction={{ text: '‹ Tour', action: () => { } }}
                rightAction={{ text: 'Edit', action: () => { } }}
            />

            <ScrollView style={globalStyles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Date Header */}
                <View style={globalStyles.dateHeader}>
                    <Text style={[typography.largeTitle, { color: colors.labelPrimary }]}>Friday</Text>
                    <Text style={[typography.body, { color: colors.labelSecondary, marginTop: 4 }]}>
                        March 15, 2024
                    </Text>
                </View>

                {/* Main Venue Card */}
                <Card style={{ marginBottom: 16 }}>
                    {/* Venue Header */}
                    <View style={[globalStyles.cardSection, globalStyles.borderBottom]}>
                        <View style={todayStyles.venueHeader}>
                            <View style={{ flex: 1 }}>
                                <Text style={[typography.title2, { color: colors.labelPrimary }]}>
                                    The Fillmore
                                </Text>
                                <Text style={[typography.body, { color: colors.labelSecondary, marginTop: 4 }]}>
                                    San Francisco, CA • Cap. 1,315
                                </Text>
                                <View style={todayStyles.locationRow}>
                                    <Icon name="location-outline" size={16} color={colors.labelSecondary} />
                                    <Text style={[typography.subhead, { color: colors.labelSecondary, marginLeft: 8 }]}>
                                        1.2 miles away
                                    </Text>
                                </View>
                            </View>
                            <View style={[globalStyles.statusDot, { backgroundColor: colors.success, marginLeft: 16, marginTop: 8 }]} />
                        </View>
                    </View>

                    {/* Quick Info Grid */}
                    <View style={[globalStyles.cardSection, globalStyles.borderBottom]}>
                        <View style={todayStyles.infoGrid}>
                            <View style={todayStyles.infoCard}>
                                <View style={todayStyles.infoCardContent}>
                                    <Icon name="time-outline" size={20} color={colors.primary} />
                                    <View style={{ marginLeft: 12 }}>
                                        <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                            Load-in
                                        </Text>
                                        <Text style={[typography.headline, { color: colors.labelPrimary }]}>
                                            2:00 PM
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={todayStyles.infoCard}>
                                <View style={todayStyles.infoCardContent}>
                                    <Icon name="people-outline" size={20} color={colors.success} />
                                    <View style={{ marginLeft: 12 }}>
                                        <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                            Doors
                                        </Text>
                                        <Text style={[typography.headline, { color: colors.labelPrimary }]}>
                                            7:00 PM
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Schedule Section */}
                    <View style={[globalStyles.cardSection, globalStyles.borderBottom]}>
                        <Text style={[typography.headline, { color: colors.labelPrimary, marginBottom: 16 }]}>
                            Show Schedule
                        </Text>
                        <View style={todayStyles.scheduleList}>
                            <View style={todayStyles.scheduleItem}>
                                <Text style={[typography.body, { color: colors.labelSecondary }]}>Soundcheck</Text>
                                <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                                    4:00 PM
                                </Text>
                            </View>
                            <View style={todayStyles.scheduleItem}>
                                <Text style={[typography.body, { color: colors.labelSecondary }]}>Opener</Text>
                                <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                                    8:00 PM
                                </Text>
                            </View>
                            <View style={todayStyles.scheduleItem}>
                                <Text style={[typography.body, { color: colors.labelSecondary }]}>Headline</Text>
                                <Text style={[typography.body, { color: colors.primary, fontWeight: '500' }]}>
                                    9:30 PM
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Contact Section */}
                    <View style={globalStyles.cardSection}>
                        <View style={todayStyles.contactHeader}>
                            <View>
                                <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                                    Sarah Johnson
                                </Text>
                                <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                    Venue Manager
                                </Text>
                            </View>
                            <View style={todayStyles.contactActions}>
                                <TouchableOpacity style={[globalStyles.actionButton, { backgroundColor: colors.primary }]}>
                                    <Icon name="call" size={18} color={colors.backgroundPrimary} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[globalStyles.actionButton, { backgroundColor: colors.backgroundSecondary }]}>
                                    <Icon name="navigate" size={18} color={colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={todayStyles.expandButton}
                            onPress={() => setIsExpanded(!isExpanded)}
                        >
                            <Text style={[typography.body, { color: colors.primary, textAlign: 'center' }]}>
                                {isExpanded ? 'Show Less' : 'Show More Details'}
                            </Text>
                        </TouchableOpacity>

                        {isExpanded && (
                            <View style={todayStyles.expandedContent}>
                                <View style={todayStyles.detailGrid}>
                                    <View>
                                        <Text style={[typography.footnote, { color: colors.labelSecondary }]}>WiFi</Text>
                                        <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                                            FillmoreGuest
                                        </Text>
                                        <Text style={[typography.caption1, { color: colors.labelTertiary }]}>
                                            music2024
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={[typography.footnote, { color: colors.labelSecondary }]}>Parking</Text>
                                        <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                                            Street only
                                        </Text>
                                        <Text style={[typography.caption1, { color: colors.labelTertiary }]}>
                                            Load zone available
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    </View>
                </Card>

                {/* Financial Card */}
                <Card style={{ marginBottom: 16 }}>
                    <View style={globalStyles.cardSection}>
                        <View style={todayStyles.financialHeader}>
                            <Text style={[typography.headline, { color: colors.labelPrimary }]}>
                                Today's P&L
                            </Text>
                            <Icon name="trending-up" size={20} color={colors.success} />
                        </View>
                        <View style={todayStyles.financialContent}>
                            <Text style={[typography.largeTitle, { color: colors.success, textAlign: 'center' }]}>
                                +$2,450
                            </Text>
                            <Text style={[typography.body, { color: colors.labelSecondary, textAlign: 'center', marginTop: 4 }]}>
                                Projected profit
                            </Text>
                        </View>
                    </View>
                </Card>

                {/* Quick Actions */}
                <View style={globalStyles.actionGrid}>
                    <Button
                        title="Guest List"
                        variant="primary"
                        style={{ flex: 1, marginRight: 8 }}
                        onPress={() => { }}
                    />
                    <Button
                        title="Road Assistant"
                        variant="secondary"
                        style={{ flex: 1, marginLeft: 8 }}
                        onPress={() => { }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};