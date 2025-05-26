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
import { moneyStyles } from '../styles/moneyStyles';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

export const MoneyScreen = () => (
    <SafeAreaView style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.backgroundPrimary} />

        <Header
            title="Money"
            leftAction={{ text: '‹ Back', action: () => { } }}
            rightAction={{ text: 'Add', action: () => { } }}
        />

        <ScrollView style={globalStyles.scrollView} showsVerticalScrollIndicator={false}>
            {/* Financial Overview */}
            <Card style={{ marginBottom: 16 }}>
                <View style={globalStyles.cardSection}>
                    <Text style={[typography.title3, { color: colors.labelPrimary, marginBottom: 16 }]}>
                        Tour Financial Summary
                    </Text>
                    <View style={moneyStyles.financialSummary}>
                        <Text style={[typography.largeTitle, { color: colors.success, textAlign: 'center' }]}>
                            $24,680
                        </Text>
                        <Text style={[typography.body, { color: colors.labelSecondary, textAlign: 'center', marginTop: 4 }]}>
                            Total Profit (5 shows)
                        </Text>
                    </View>

                    <View style={moneyStyles.financialGrid}>
                        <View style={[moneyStyles.financialCard, { backgroundColor: '#34C75915' }]}>
                            <Icon name="trending-up" size={24} color={colors.success} style={{ alignSelf: 'center', marginBottom: 8 }} />
                            <Text style={[typography.footnote, { color: colors.success, textAlign: 'center' }]}>
                                Total Revenue
                            </Text>
                            <Text style={[typography.headline, { color: colors.labelPrimary, textAlign: 'center', fontWeight: 'bold' }]}>
                                $48,200
                            </Text>
                        </View>
                        <View style={[moneyStyles.financialCard, { backgroundColor: '#FF3B3015' }]}>
                            <Icon name="trending-down" size={24} color={colors.danger} style={{ alignSelf: 'center', marginBottom: 8 }} />
                            <Text style={[typography.footnote, { color: colors.danger, textAlign: 'center' }]}>
                                Total Expenses
                            </Text>
                            <Text style={[typography.headline, { color: colors.labelPrimary, textAlign: 'center', fontWeight: 'bold' }]}>
                                $23,520
                            </Text>
                        </View>
                    </View>
                </View>
            </Card>

            {/* Recent Transactions */}
            <Text style={[typography.title3, { color: colors.labelPrimary, marginBottom: 12, marginLeft: 8 }]}>
                Recent Transactions
            </Text>

            {[
                { type: 'income', desc: 'The Fillmore - Settlement', amount: '+$4,200', time: '2 hours ago' },
                { type: 'expense', desc: 'Gas - Shell Station', amount: '-$85', time: '4 hours ago' },
                { type: 'expense', desc: 'Hotel - Marriott SF', amount: '-$320', time: '1 day ago' },
                { type: 'income', desc: 'Merchandise Sales', amount: '+$450', time: '1 day ago' }
            ].map((transaction, index) => (
                <Card key={index} style={{ marginBottom: 12 }}>
                    <TouchableOpacity style={globalStyles.cardSection}>
                        <View style={moneyStyles.transactionItem}>
                            <View style={moneyStyles.transactionContent}>
                                <View style={[
                                    moneyStyles.transactionIcon,
                                    { backgroundColor: transaction.type === 'income' ? '#34C75915' : '#FF3B3015' }
                                ]}>
                                    <Icon
                                        name={transaction.type === 'income' ? 'trending-up' : 'receipt'}
                                        size={20}
                                        color={transaction.type === 'income' ? colors.success : colors.danger}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                                        {transaction.desc}
                                    </Text>
                                    <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                                        {transaction.time}
                                    </Text>
                                </View>
                            </View>
                            <Text style={[
                                typography.headline,
                                {
                                    color: transaction.type === 'income' ? colors.success : colors.danger,
                                    fontWeight: 'bold'
                                }
                            ]}>
                                {transaction.amount}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Card>
            ))}

            {/* Quick Actions */}
            <View style={globalStyles.actionGrid}>
                <Button
                    title="Add Expense"
                    variant="primary"
                    style={{ flex: 1, marginRight: 8 }}
                    onPress={() => { }}
                />
                <Button
                    title="Settlement"
                    variant="secondary"
                    style={{ flex: 1, marginLeft: 8, backgroundColor: colors.success }}
                    textStyle={{ color: colors.backgroundPrimary }}
                    onPress={() => { }}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
);