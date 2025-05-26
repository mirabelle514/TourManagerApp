import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

export default function FinancesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Finances</Title>
            <Paragraph style={styles.description}>
              Welcome to the Finances section of Tour Manager!
            </Paragraph>
            
            <Paragraph style={styles.comingSoon}>
              🚧 Full Finances functionality coming soon!
            </Paragraph>

            <Button 
              mode="contained" 
              style={styles.button}
              onPress={() => console.log('FinancesScreen feature coming soon!')}
            >
              Explore Features
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#6200ee',
    textAlign: 'center',
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
    opacity: 0.8,
    fontSize: 16,
  },
  comingSoon: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#03dac4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
  },
});
