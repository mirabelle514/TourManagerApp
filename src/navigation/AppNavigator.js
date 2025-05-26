import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { TodayScreen } from '../screens/TodayScreen';
import { ScheduleScreen } from '../screens/ScheduleScreen';
import { MoneyScreen } from '../screens/MoneyScreen';
import { CrewScreen } from '../screens/CrewScreen';
import { MoreScreen } from '../screens/MoreScreen';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Today') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Schedule') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Money') {
                        iconName = focused ? 'card' : 'card-outline';
                    } else if (route.name === 'Crew') {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === 'More') {
                        iconName = focused ? 'menu' : 'menu-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.labelTertiary,
                tabBarStyle: {
                    backgroundColor: colors.backgroundPrimary,
                    borderTopColor: colors.separator,
                    borderTopWidth: 0.5,
                    paddingBottom: 8,
                    paddingTop: 8,
                    height: 84,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Today" component={TodayScreen} />
            <Tab.Screen name="Schedule" component={ScheduleScreen} />
            <Tab.Screen name="Money" component={MoneyScreen} />
            <Tab.Screen name="Crew" component={CrewScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);