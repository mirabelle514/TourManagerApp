import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Types
interface HeaderProps {
  title: string;
  leftAction?: { text: string; action: () => void };
  rightAction?: { text: string; action: () => void };
  hasSearch?: boolean;
}

interface CardProps {
  children: React.ReactNode;
  style?: any;
}

const TourManagerApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('today');
  const [isExpanded, setIsExpanded] = useState(false);

  // Colors (iOS style)
  const colors = {
    primary: '#007AFF',
    success: '#34C759',
    warning: '#FF9500',
    danger: '#FF3B30',
    labelPrimary: '#000000',
    labelSecondary: '#8E8E93',
    labelTertiary: '#C7C7CC',
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F2F2F7',
    separator: '#C6C6C8',
  };

  // Typography
  const typography = {
    largeTitle: { fontSize: 34, fontWeight: 'bold' as const },
    title1: { fontSize: 28, fontWeight: 'normal' as const },
    title2: { fontSize: 22, fontWeight: 'bold' as const },
    title3: { fontSize: 20, fontWeight: '600' as const },
    headline: { fontSize: 17, fontWeight: '600' as const },
    body: { fontSize: 17, fontWeight: 'normal' as const },
    footnote: { fontSize: 13, fontWeight: 'normal' as const },
    caption1: { fontSize: 12, fontWeight: 'normal' as const },
  };

  // Reusable Components
  const Header: React.FC<HeaderProps> = ({ title, leftAction, rightAction, hasSearch = false }) => (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={leftAction?.action}>
            <Text style={styles.headerButton}>{leftAction?.text || '‹ Back'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
          <TouchableOpacity onPress={rightAction?.action}>
            <Text style={styles.headerButton}>{rightAction?.text || 'Edit'}</Text>
          </TouchableOpacity>
        </View>
        {hasSearch && (
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color={colors.labelTertiary} />
            <TextInput
              placeholder="Search..."
              style={styles.searchInput}
              placeholderTextColor={colors.labelTertiary}
            />
          </View>
        )}
      </View>
    </View>
  );

  const Card: React.FC<CardProps> = ({ children, style = {} }) => (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );

  const Button: React.FC<{
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary';
    style?: any;
  }> = ({ title, onPress, variant = 'primary', style = {} }) => (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          variant === 'primary' ? styles.buttonTextPrimary : styles.buttonTextSecondary,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  // Tab Bar Component
  const TabBar: React.FC = () => (
    <View style={styles.tabBar}>
      <View style={styles.tabBarContent}>
        {[
          { id: 'today', icon: 'home', label: 'Today' },
          { id: 'schedule', icon: 'calendar', label: 'Schedule' },
          { id: 'money', icon: 'card', label: 'Money' },
          { id: 'crew', icon: 'people', label: 'Crew' },
          { id: 'more', icon: 'menu', label: 'More' },
        ].map((tab) => {
          const isActive = currentPage === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              onPress={() => setCurrentPage(tab.id)}
              style={styles.tabBarButton}
            >
              <Ionicons
                name={isActive ? tab.icon as any : `${tab.icon}-outline` as any}
                size={24}
                color={isActive ? colors.primary : colors.labelTertiary}
              />
              <Text
                style={[
                  styles.tabBarLabel,
                  isActive && styles.tabBarLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  // Today Page (Day Sheet)
  const TodayPage: React.FC = () => (
    <View style={styles.page}>
      <Header
        title="Today"
        leftAction={{ text: '‹ Tour', action: () => { } }}
        rightAction={{ text: 'Edit', action: () => { } }}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Date Header */}
        <View style={styles.dateHeader}>
          <Text style={[typography.largeTitle, { color: colors.labelPrimary }]}>
            Friday
          </Text>
          <Text style={[typography.body, { color: colors.labelSecondary, marginTop: 4 }]}>
            March 15, 2024
          </Text>
        </View>

        {/* Main Venue Card */}
        <Card style={{ marginBottom: 16 }}>
          {/* Venue Header */}
          <View style={[styles.cardSection, styles.borderBottom]}>
            <View style={styles.venueHeader}>
              <View style={{ flex: 1 }}>
                <Text style={[typography.title2, { color: colors.labelPrimary }]}>
                  The Fillmore
                </Text>
                <Text style={[typography.body, { color: colors.labelSecondary, marginTop: 4 }]}>
                  San Francisco, CA • Cap. 1,315
                </Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location-outline" size={16} color={colors.labelSecondary} />
                  <Text style={[typography.footnote, { color: colors.labelSecondary, marginLeft: 8 }]}>
                    1.2 miles away
                  </Text>
                </View>
              </View>
              <View style={[styles.statusDot, { backgroundColor: colors.success }]} />
            </View>
          </View>

          {/* Quick Info Grid */}
          <View style={[styles.cardSection, styles.borderBottom]}>
            <View style={styles.infoGrid}>
              <View style={styles.infoCard}>
                <View style={styles.infoCardContent}>
                  <Ionicons name="time-outline" size={20} color={colors.primary} />
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
              <View style={styles.infoCard}>
                <View style={styles.infoCardContent}>
                  <Ionicons name="people-outline" size={20} color={colors.success} />
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
          <View style={[styles.cardSection, styles.borderBottom]}>
            <Text style={[typography.headline, { color: colors.labelPrimary, marginBottom: 16 }]}>
              Show Schedule
            </Text>
            <View style={styles.scheduleList}>
              <View style={styles.scheduleItem}>
                <Text style={[typography.body, { color: colors.labelSecondary }]}>Soundcheck</Text>
                <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                  4:00 PM
                </Text>
              </View>
              <View style={styles.scheduleItem}>
                <Text style={[typography.body, { color: colors.labelSecondary }]}>Opener</Text>
                <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                  8:00 PM
                </Text>
              </View>
              <View style={styles.scheduleItem}>
                <Text style={[typography.body, { color: colors.labelSecondary }]}>Headline</Text>
                <Text style={[typography.body, { color: colors.primary, fontWeight: '500' }]}>
                  9:30 PM
                </Text>
              </View>
            </View>
          </View>

          {/* Contact Section */}
          <View style={styles.cardSection}>
            <View style={styles.contactHeader}>
              <View>
                <Text style={[typography.body, { color: colors.labelPrimary, fontWeight: '500' }]}>
                  Sarah Johnson
                </Text>
                <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                  Venue Manager
                </Text>
              </View>
              <View style={styles.contactActions}>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.primary }]}>
                  <Ionicons name="call" size={18} color={colors.backgroundPrimary} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.backgroundSecondary }]}>
                  <Ionicons name="navigate" size={18} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.expandButton}
              onPress={() => setIsExpanded(!isExpanded)}
            >
              <Text style={[typography.body, { color: colors.primary, textAlign: 'center' }]}>
                {isExpanded ? 'Show Less' : 'Show More Details'}
              </Text>
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.expandedContent}>
                <View style={styles.detailGrid}>
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
          <View style={styles.cardSection}>
            <View style={styles.financialHeader}>
              <Text style={[typography.headline, { color: colors.labelPrimary }]}>
                Today's P&L
              </Text>
              <Ionicons name="trending-up" size={20} color={colors.success} />
            </View>
            <View style={styles.financialContent}>
              <Text style={[typography.largeTitle, { color: colors.success, textAlign: 'center' }]}>
                +$2,450
              </Text>
              <Text style={[typography.body, { color: colors.labelSecondary, textAlign: 'center', marginTop: 4 }]}>
                Projected profit
              </Text>
            </View>
            <View style={styles.financialGrid}>
              <View style={{ alignItems: 'center' }}>
                <Text style={[typography.footnote, { color: colors.labelSecondary }]}>Revenue</Text>
                <Text style={[typography.headline, { color: colors.labelPrimary }]}>$4,200</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={[typography.footnote, { color: colors.labelSecondary }]}>Expenses</Text>
                <Text style={[typography.headline, { color: colors.labelPrimary }]}>$1,750</Text>
              </View>
            </View>
          </View>
        </Card>

        {/* Quick Actions */}
        <View style={styles.actionGrid}>
          <Button
            title="Guest List"
            onPress={() => { }}
            style={{ flex: 1, marginRight: 8 }}
          />
          <Button
            title="Road Assistant"
            variant="secondary"
            onPress={() => { }}
            style={{ flex: 1, marginLeft: 8 }}
          />
        </View>
      </ScrollView>
    </View>
  );

  // Schedule Page
  const SchedulePage: React.FC = () => (
    <View style={styles.page}>
      <Header
        title="Schedule"
        leftAction={{ text: '‹ Back', action: () => { } }}
        rightAction={{ text: 'Add', action: () => { } }}
        hasSearch={true}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.dateHeader}>
          <Text style={[typography.title1, { color: colors.labelPrimary }]}>March 2024</Text>
        </View>

        {/* Calendar Placeholder */}
        <Card style={{ marginBottom: 16 }}>
          <View style={styles.cardSection}>
            <Text style={[typography.headline, { color: colors.labelPrimary, marginBottom: 16 }]}>
              This Week
            </Text>
            <View style={styles.calendarPlaceholder}>
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
            <TouchableOpacity style={styles.cardSection}>
              <View style={styles.showItem}>
                <View style={{ flex: 1 }}>
                  <View style={styles.showHeader}>
                    <View style={[styles.statusDot, { backgroundColor: show.status }]} />
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
                <Ionicons name="chevron-forward" size={20} color={colors.labelTertiary} />
              </View>
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>
    </View>
  );

  // Money Page
  const MoneyPage: React.FC = () => (
    <View style={styles.page}>
      <Header
        title="Money"
        leftAction={{ text: '‹ Back', action: () => { } }}
        rightAction={{ text: 'Add', action: () => { } }}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Financial Overview */}
        <Card style={{ marginBottom: 16 }}>
          <View style={styles.cardSection}>
            <Text style={[typography.title3, { color: colors.labelPrimary, marginBottom: 16 }]}>
              Tour Financial Summary
            </Text>
            <View style={styles.financialSummary}>
              <Text style={[typography.largeTitle, { color: colors.success, textAlign: 'center' }]}>
                $24,680
              </Text>
              <Text style={[typography.body, { color: colors.labelSecondary, textAlign: 'center', marginTop: 4 }]}>
                Total Profit (5 shows)
              </Text>
            </View>

            <View style={styles.financialOverviewGrid}>
              <View style={[styles.financialCard, { backgroundColor: '#34C75915' }]}>
                <Ionicons name="trending-up" size={24} color={colors.success} style={{ alignSelf: 'center', marginBottom: 8 }} />
                <Text style={[typography.footnote, { color: colors.success, textAlign: 'center' }]}>
                  Total Revenue
                </Text>
                <Text style={[typography.headline, { color: colors.labelPrimary, textAlign: 'center', fontWeight: 'bold' }]}>
                  $48,200
                </Text>
              </View>
              <View style={[styles.financialCard, { backgroundColor: '#FF3B3015' }]}>
                <Ionicons name="trending-down" size={24} color={colors.danger} style={{ alignSelf: 'center', marginBottom: 8 }} />
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
            <TouchableOpacity style={styles.cardSection}>
              <View style={styles.transactionItem}>
                <View style={styles.transactionContent}>
                  <View style={[
                    styles.transactionIcon,
                    { backgroundColor: transaction.type === 'income' ? '#34C75915' : '#FF3B3015' }
                  ]}>
                    <Ionicons
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
        <View style={styles.actionGrid}>
          <Button
            title="Add Expense"
            onPress={() => { }}
            style={{ flex: 1, marginRight: 8 }}
          />
          <Button
            title="Settlement"
            onPress={() => { }}
            style={{ flex: 1, marginLeft: 8, backgroundColor: colors.success }}
          />
        </View>
      </ScrollView>
    </View>
  );

  // Crew Page
  const CrewPage: React.FC = () => (
    <View style={styles.page}>
      <Header
        title="Crew"
        leftAction={{ text: '‹ Back', action: () => { } }}
        rightAction={{ text: 'Add', action: () => { } }}
        hasSearch={true}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
            <TouchableOpacity style={styles.cardSection}>
              <View style={styles.crewItem}>
                <View style={styles.crewContent}>
                  <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
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
                <View style={styles.crewActions}>
                  <View style={[
                    styles.statusDot,
                    {
                      backgroundColor: member.status === 'online' ? colors.success :
                        member.status === 'away' ? colors.warning : colors.labelTertiary
                    }
                  ]} />
                  <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.backgroundSecondary }]}>
                    <Ionicons name="chatbubble" size={18} color={colors.primary} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Card>
        ))}

        {/* Group Chat */}
        <Card style={{ marginBottom: 16 }}>
          <View style={styles.cardSection}>
            <View style={styles.chatHeader}>
              <Text style={[typography.headline, { color: colors.labelPrimary }]}>
                Tour Group Chat
              </Text>
              <View style={styles.badge}>
                <Text style={[typography.caption1, { color: colors.backgroundPrimary }]}>3</Text>
              </View>
            </View>

            <View style={styles.chatPreview}>
              <View style={styles.chatMessage}>
                <View style={[styles.chatAvatar, { backgroundColor: colors.primary }]}>
                  <Text style={[typography.caption1, { color: colors.backgroundPrimary, fontWeight: 'bold' }]}>
                    MT
                  </Text>
                </View>
                <Text style={[typography.footnote, { color: colors.labelSecondary }]}>
                  Mike: Load-in moved to 1:30 PM
                </Text>
              </View>
            </View>

            <Button
              title="Open Chat"
              onPress={() => { }}
              style={{ marginTop: 16 }}
            />
          </View>
        </Card>
      </ScrollView>
    </View>
  );

  // More Page
  const MorePage: React.FC = () => (
    <View style={styles.page}>
      <Header
        title="More"
        leftAction={{ text: '‹ Back', action: () => { } }}
        rightAction={{ text: '', action: () => { } }}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <Card style={{ marginBottom: 24 }}>
          <View style={styles.cardSection}>
            <View style={styles.profileSection}>
              <View style={[styles.profileAvatar, { backgroundColor: colors.primary }]}>
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
                    styles.settingsItem,
                    itemIndex < section.items.length - 1 && styles.borderBottom
                  ]}
                >
                  <View style={styles.settingsContent}>
                    <Ionicons name={item.icon as any} size={20} color={colors.labelSecondary} />
                    <Text style={[typography.body, { color: colors.labelPrimary, marginLeft: 12 }]}>
                      {item.label}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={colors.labelTertiary} />
                </TouchableOpacity>
              ))}
            </Card>
          </View>
        ))}

        {/* Emergency Actions */}
        <View style={styles.actionGrid}>
          <Button
            title="Emergency"
            onPress={() => { }}
            style={{ flex: 1, marginRight: 8, backgroundColor: colors.danger }}
          />
          <Button
            title="Road Help"
            onPress={() => { }}
            style={{ flex: 1, marginLeft: 8, backgroundColor: colors.warning }}
          />
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={[typography.footnote, { color: colors.labelSecondary, textAlign: 'center' }]}>
            Tour Manager v2.1.0
          </Text>
          <Text style={[typography.footnote, { color: colors.labelSecondary, textAlign: 'center', marginTop: 4 }]}>
            © 2024 TourTech Solutions
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  // Page router
  const renderPage = () => {
    switch (currentPage) {
      case 'today':
        return <TodayPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'money':
        return <MoneyPage />;
      case 'crew':
        return <CrewPage />;
      case 'more':
        return <MorePage />;
      default:
        return <TodayPage />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.backgroundPrimary} />
      {renderPage()}
      <TabBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  page: {
    flex: 1,
    paddingBottom: 84, // Space for tab bar
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
  },
  headerContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    color: '#007AFF',
    fontSize: 17,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 17,
    color: '#000000',
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
    backgroundColor: '#FFFFFF',
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
    borderBottomColor: '#C6C6C8',
  },
  venueHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 16,
    marginTop: 8,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#F2F2F7',
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
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandButton: {
    paddingVertical: 8,
  },
  expandedContent: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#C6C6C8',
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
  financialGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 16,
  },
  financialSummary: {
    marginBottom: 24,
  },
  financialOverviewGrid: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  financialCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
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
    backgroundColor: '#007AFF',
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C6C6C8',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
  },
  buttonTextSecondary: {
    color: '#007AFF',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderTopColor: '#C6C6C8',
    paddingBottom: 34, // Safe area for iPhone
    paddingTop: 8,
  },
  tabBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#C7C7CC',
    marginTop: 4,
  },
  tabBarLabelActive: {
    color: '#007AFF',
  },
  calendarPlaceholder: {
    height: 200,
    backgroundColor: '#F2F2F7',
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
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatPreview: {
    gap: 8,
    marginBottom: 16,
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  settingsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 4,
  },
});

export default TourManagerApp;