import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Card,
  Title,
  Paragraph,
  Chip,
} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';

interface AuthScreenProps {
  onAuthSuccess: () => void;
}

export default function AuthScreen({ onAuthSuccess }: AuthScreenProps) {
  const [email, setEmail] = useState('demo@tourmanager.com');
  const [password, setPassword] = useState('password');
  const [selectedRole, setSelectedRole] = useState('band_member');
  const dispatch = useDispatch();

  const roles = [
    { key: 'super_admin', label: 'Super Admin', color: '#e74c3c' },
    { key: 'tour_manager', label: 'Tour Manager', color: '#3498db' },
    { key: 'band_leader', label: 'Band Leader', color: '#9b59b6' },
    { key: 'band_member', label: 'Band Member', color: '#2ecc71' },
    { key: 'crew_chief', label: 'Crew Chief', color: '#f39c12' },
    { key: 'general_crew', label: 'General Crew', color: '#95a5a6' },
  ];

  const handleLogin = () => {
    const mockUser = {
      id: '1',
      name: 'Demo User',
      email,
      role: selectedRole,
    };

    dispatch(
      loginSuccess({
        user: mockUser,
        token: 'mock-jwt-token',
        role: selectedRole,
        permissions: ['all'],
      })
    );

    onAuthSuccess();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Tour Manager</Title>
            <Paragraph style={styles.subtitle}>
              Sign in to access your tour
            </Paragraph>

            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              style={styles.input}
              secureTextEntry
            />

            <Text style={styles.roleTitle}>Select Role (Demo)</Text>
            <View style={styles.roleContainer}>
              {roles.map((role) => (
                <Chip
                  key={role.key}
                  selected={selectedRole === role.key}
                  onPress={() => setSelectedRole(role.key)}
                  style={[
                    styles.roleChip,
                    {
                      backgroundColor: selectedRole === role.key ? role.color : 'transparent',
                    },
                  ]}
                  textStyle={{
                    color: selectedRole === role.key ? 'white' : role.color,
                  }}
                >
                  {role.label}
                </Chip>
              ))}
            </View>

            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.loginButton}
              disabled={!email || !password}
            >
              Sign In
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 8,
    color: '#6200ee',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    opacity: 0.7,
  },
  input: {
    marginBottom: 16,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
    color: '#ffffff',
  },
  roleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  roleChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 8,
  },
});
