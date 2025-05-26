import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tour Manager</Text>
      <Text style={styles.subtitle}>Loading your tour...</Text>
      <ActivityIndicator animating={true} size="large" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 32,
  },
  loader: {
    marginTop: 20,
  },
});
