import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { MapPin, Phone, Navigation, Clock, Users, DollarSign, Wifi, Car } from 'lucide-react-native';
import { Calendar } from 'lucide-react-native';

export default function DaySheetScreen() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Navigation Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity>
            <Text style={styles.headerButton}>‹ Tour</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Today</Text>
          <TouchableOpacity>
            <Text style={styles.headerButton}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Date Header */}
        <View style={styles.dateHeader}>
          <Text style={styles.dateTitle}>Friday</Text>
          <Text style={styles.dateSubtitle}>March 15, 2024</Text>
        </View>

        {/* Main Day Sheet Card */}
        <Card style={styles.mainCard}>
          {/* Venue Header */}
          <View style={styles.venueHeader}>
            <View style={styles.venueInfo}>
              <Text style={styles.venueTitle}>The Fillmore</Text>
              <Text style={styles.venueSubtitle}>San Francisco, CA • Cap. 1,315</Text>
              <View style={styles.locationInfo}>
                <MapPin size={16} color="#6200ee" />
                <Text style={styles.locationText}>1.2 miles away</Text>
              </View>
            </View>
            <View style={styles.statusDot} />
          </View>

          {/* Quick Info Grid */}
          <View style={styles.infoGrid}>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Clock size={20} color="#6200ee" />
                <View>
                  <Text style={styles.infoLabel}>Load-in</Text>
                  <Text style={styles.infoValue}>2:00 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Users size={20} color="#6200ee" />
                <View>
                  <Text style={styles.infoLabel}>Doors</Text>
                  <Text style={styles.infoValue}>7:00 PM</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Show Schedule */}
          <View style={styles.scheduleSection}>
            <Text style={styles.sectionTitle}>Show Schedule</Text>
            <View style={styles.scheduleList}>
              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleLabel}>Soundcheck</Text>
                <Text style={styles.scheduleTime}>4:00 PM</Text>
              </View>
              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleLabel}>Opener</Text>
                <Text style={styles.scheduleTime}>8:00 PM</Text>
              </View>
              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleLabel}>Headline</Text>
                <Text style={[styles.scheduleTime, styles.highlightedTime]}>9:30 PM</Text>
              </View>
            </View>
          </View>

          {/* Contact & Actions */}
          <View style={styles.contactSection}>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>Sarah Johnson</Text>
              <Text style={styles.contactRole}>Venue Manager</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <Phone size={18} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
                <Navigation size={18} color="#6200ee" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Expandable Details */}
          <TouchableOpacity
            onPress={() => setIsExpanded(!isExpanded)}
            style={styles.expandButton}
          >
            <Text style={styles.expandButtonText}>
              {isExpanded ? 'Show Less' : 'Show More Details'}
            </Text>
          </TouchableOpacity>

          {isExpanded && (
            <View style={styles.expandedContent}>
              <View style={styles.detailsGrid}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>WiFi</Text>
                  <Text style={styles.detailValue}>FillmoreGuest</Text>
                  <Text style={styles.detailSubtext}>music2024</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Parking</Text>
                  <Text style={styles.detailValue}>Street only</Text>
                  <Text style={styles.detailSubtext}>Load zone available</Text>
                </View>
              </View>

              <View style={styles.detailSection}>
                <Text style={styles.detailLabel}>Catering</Text>
                <Text style={styles.detailValue}>$75 buyout per person</Text>
              </View>

              <View style={styles.detailSection}>
                <Text style={styles.detailLabel}>Next Venue</Text>
                <View style={styles.nextVenueInfo}>
                  <View>
                    <Text style={styles.detailValue}>The Greek Theatre</Text>
                    <Text style={styles.detailSubtext}>Berkeley, CA • 287 miles</Text>
                  </View>
                  <View style={styles.departureInfo}>
                    <Text style={styles.detailSubtext}>Depart by</Text>
                    <Text style={styles.detailValue}>11:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Card>

        {/* Financial Summary Card */}
        <Card style={styles.financialCard}>
          <View style={styles.financialHeader}>
            <Text style={styles.financialTitle}>Today's P&L</Text>
            <DollarSign size={20} color="#6200ee" />
          </View>
          <View style={styles.financialSummary}>
            <Text style={styles.profitAmount}>+$2,450</Text>
            <Text style={styles.profitLabel}>Projected profit</Text>
          </View>
          <View style={styles.financialGrid}>
            <View style={styles.financialItem}>
              <Text style={styles.financialLabel}>Revenue</Text>
              <Text style={styles.financialValue}>$4,200</Text>
            </View>
            <View style={styles.financialItem}>
              <Text style={styles.financialLabel}>Expenses</Text>
              <Text style={styles.financialValue}>$1,750</Text>
            </View>
          </View>
        </Card>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.primaryAction}>
            <Users size={20} color="#ffffff" />
            <Text style={styles.actionText}>Guest List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryAction}>
            <Car size={20} color="#6200ee" />
            <Text style={[styles.actionText, styles.secondaryActionText]}>Road Assistant</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-blue-500 rounded mb-1"></div>
            <span className="text-xs text-blue-500 font-medium">Today</span>
          </button>
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-gray-400 rounded mb-1"></div>
            <span className="text-xs text-gray-500">Schedule</span>
          </button>
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-gray-400 rounded mb-1"></div>
            <span className="text-xs text-gray-500">Money</span>
          </button>
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-gray-400 rounded mb-1"></div>
            <span className="text-xs text-gray-500">Crew</span>
          </button>
          <button className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 bg-gray-400 rounded mb-1"></div>
            <span className="text-xs text-gray-500">More</span>
          </button>
        </div>
      </div>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingTop: 48,
    paddingBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerButton: {
    color: '#3b82f6',
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  dateHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  dateTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  dateSubtitle: {
    fontSize: 18,
    color: '#6b7280',
  },
  mainCard: {
    borderRadius: 24,
    marginBottom: 16,
  },
  venueHeader: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  venueInfo: {
    flex: 1,
  },
  venueTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  venueSubtitle: {
    fontSize: 18,
    color: '#6b7280',
    marginTop: 4,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  locationText: {
    marginLeft: 8,
    color: '#6b7280',
    fontSize: 16,
  },
  statusDot: {
    width: 12,
    height: 12,
    backgroundColor: '#22c55e',
    borderRadius: 6,
    marginLeft: 16,
    marginTop: 8,
  },
  infoGrid: {
    flexDirection: 'row',
    padding: 24,
    gap: 16,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    color: '#6b7280',
    fontSize: 14,
    marginLeft: 12,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  scheduleSection: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  scheduleList: {
    gap: 12,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduleLabel: {
    color: '#4b5563',
  },
  scheduleTime: {
    fontWeight: '500',
  },
  highlightedTime: {
    color: '#3b82f6',
  },
  contactSection: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontWeight: '500',
  },
  contactRole: {
    color: '#6b7280',
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    width: 40,
    height: 40,
    backgroundColor: '#3b82f6',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: '#f3f4f6',
  },
  expandButton: {
    padding: 16,
    alignItems: 'center',
  },
  expandButtonText: {
    color: '#3b82f6',
    fontSize: 18,
  },
  expandedContent: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    gap: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    color: '#6b7280',
    fontSize: 14,
    marginBottom: 4,
  },
  detailValue: {
    fontWeight: '500',
  },
  detailSubtext: {
    color: '#9ca3af',
    fontSize: 12,
  },
  detailSection: {
    marginTop: 16,
  },
  nextVenueInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  departureInfo: {
    alignItems: 'flex-end',
  },
  financialCard: {
    borderRadius: 24,
    marginBottom: 16,
    padding: 24,
  },
  financialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  financialTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  financialSummary: {
    alignItems: 'center',
  },
  profitAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#22c55e',
  },
  profitLabel: {
    color: '#6b7280',
    marginTop: 4,
  },
  financialGrid: {
    flexDirection: 'row',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    gap: 16,
  },
  financialItem: {
    flex: 1,
    alignItems: 'center',
  },
  financialLabel: {
    color: '#6b7280',
    fontSize: 14,
  },
  financialValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 16,
  },
  primaryAction: {
    flex: 1,
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  secondaryAction: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  actionText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  secondaryActionText: {
    color: '#3b82f6',
  },
});