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
import { moreStyles } from '../styles/moreStyles';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

export const MoreScreen = () => (
    <SafeAreaView style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.backgroundPrimary} />

        <Header
            title="More"
            leftAction={{ text: '‹ Back', action: () => { } }}
            rightAction={{ text: '', action: () => { } }}
        />

        <ScrollView style={globalStyles.scrollView} showsVerticalScrollIndicator={false}>
            {/* Profile Section */}
            <Card style={{ marginBottom: 24 }}>
                <View style={globalStyles.cardSection}>
                    <View style={moreStyles.profileSection}>
                        <View style={[moreStyles.profileAvatar, { backgroundColor: colors.primary }]}>
                            <Text style={[typography.title3, { color: colors.backgroundPrimary, fontWeight: 'bold' }]}>
                                AR
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[typography.title3, { color: colors.labelPrimary }]}>
                                Alex Rivera
                            </Text>
                            <Text style={[typography.body, { color: colors.labelSecondary }]}>
                                Lead Vocals • Band Leader
                            </Text>
                            <TouchableOpacity>
                                <Text style={[typography.footnote, { color: colors.primary }]}>
                                    Edit Profile
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Card>

            {/* Settings Sections */}
            {[
                {
                    title: 'Tour Settings',
                    items: [
                        { icon: 'calendar-outline', label: 'Tour Details' },
                        { icon: 'people-outline', label: 'Crew Management' },
                        { icon: 'location-outline', label: 'Venues & Locations' }
                    ]
                },
                {
                    title: 'Financial',
                    items: [
                        { icon: 'card-outline', label: 'Accounting Integration' },
                        { icon: 'receipt-outline', label: 'Expense Categories' },
                        { icon: 'wallet-outline', label: 'Payment Methods' }
                    ]
                },
                {
                    title: 'App Settings',
                    items: [
                        { icon: 'notifications-outline', label: 'Notifications' },
                        { icon: 'shield-outline', label: 'Privacy & Security' },
                        { icon: 'settings-outline', label: 'General' }
                    ]
                }
            ].map((section, sectionIndex) => (
                <View key={sectionIndex} style={{ marginBottom: 16 }}>
                    <Text style={[typography.headline, { color: colors.labelPrimary, marginBottom: 12, marginLeft: 8 }]}>
                        {section.title}
                    </Text>
                    <Card>
                        {section.items.map((item, itemIndex) => (
                            <TouchableOpacity
                                key={itemIndex}
                                style={[
                                    moreStyles.settingsItem,
                                    itemIndex < section.items.length - 1 && globalStyles.borderBottom
                                ]}
                            >
                                <View style={moreStyles.settingsContent}>
                                    <Icon name={item.icon} size={20} color={colors.labelSecondary} />
                                    <Text style={[typography.body, { color: colors.labelPrimary, marginLeft: 12 }]}>
                                        {item.label}
                                    </Text>
                                </View>
                                <Icon name="chevron-forward" size={20} color={colors.labelTertiary} />
                            </TouchableOpacity>
                        ))}
                    </Card>
                </View>
            ))}

            {/* Emergency Actions */}
            <View style={globalStyles.actionGrid}>
                <Button
                    title="Emergency"
                    style={{ flex: 1, marginRight: 8, backgroundColor: colors.danger }}
                    textStyle={{ color: colors.backgroundPrimary }}
                    onPress={() => { }}
                />
                <Button
                    title="Road Help"
                    style={{ flex: 1, marginLeft: 8, backgroundColor: colors.warning }}
                    textStyle={{ color: colors.backgroundPrimary }}
                    onPress={() => { }}
                />
            </View>

            {/* App Info */}
            <View style={moreStyles.appInfo}>
                <Text style={[typography.footnote, { color: colors.labelSecondary, textAlign: 'center' }]}>
                    Tour Manager v2.1.0
                </Text>
                <Text style={[typography.footnote, { color: colors.labelSecondary, textAlign: 'center', marginTop: 4 }]}>
                    © 2024 TourTech Solutions
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
);