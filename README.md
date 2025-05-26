# Tour Manager App

A comprehensive mobile application for managing tour logistics, schedules, finances, and communication for music tours and events. Built with React Native and Expo, featuring an Apple-style design system for intuitive user experience.

## 🎯 Features

### Core Functionality
- **📅 Day Sheet**: Complete daily tour management with venue information, load-in times, schedules, and contact details
- **🗓️ Schedule**: Interactive calendar with upcoming shows, tour timeline, and event management
- **💰 Money**: Financial tracking with profit/loss analysis, expense management, and settlement tracking
- **👥 Crew**: Team management, communication tools, and role-based access control
- **⚙️ More**: User profiles, app settings, emergency contacts, and road assistance

### Advanced Features
- **🎨 Apple-Style Design**: Native iOS design patterns with proper typography, colors, and spacing
- **📱 Responsive Interface**: Optimized for mobile devices with touch-friendly interactions
- **🔄 Real-time Updates**: Live data synchronization for schedule changes and communications
- **🎭 Role-Based Access**: Different permission levels for band members, crew, and management
- **📊 Financial Analytics**: Comprehensive profit/loss tracking with visual indicators
- **🚗 Road Assistant**: GPS integration and travel coordination tools

## 🛠️ Tech Stack

- **Frontend**: React Native with TypeScript
- **Framework**: Expo (SDK 53+)
- **Navigation**: React Navigation v7
- **Icons**: Expo Vector Icons
- **State Management**: Redux Toolkit
- **UI Components**: React Native Paper
- **Development**: TypeScript, ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (Xcode for Mac) or Android Studio

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/mirabelle514/TourManagerApp.git
cd TourManagerApp
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npx expo start
```

4. **Run on iOS:**
```bash
# Press 'i' in the Expo CLI terminal, or:
npx expo run:ios
```

5. **Run on Android:**
```bash
# Press 'a' in the Expo CLI terminal, or:
npx expo run:android
```

### 🔧 Development Commands

```bash
# Start Expo development server
npm start

# Start with cache cleared
npx expo start --clear

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Type checking
npx tsc --noEmit

# Linting
npx eslint . --ext .ts,.tsx
```

## 📁 Project Structure

```
TourManagerApp/
├── App.tsx                 # Main app component with navigation
├── index.ts               # App entry point
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
├── src/                  # Source code (future modular structure)
│   ├── components/       # Reusable UI components
│   ├── screens/         # Screen components
│   ├── navigation/      # Navigation configuration
│   ├── styles/         # Design system and styles
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   └── store/          # Redux store and slices
├── assets/             # Images, fonts, and static assets
└── docs/              # Documentation and guides
```

## 🎨 Design System

The app follows Apple's Human Interface Guidelines with:

- **Colors**: iOS system colors (primary blue #007AFF, success green #34C759)
- **Typography**: SF Pro font scale with semantic text styles
- **Spacing**: 8pt grid system for consistent layouts
- **Components**: Native iOS patterns (cards, buttons, navigation)
- **Accessibility**: VoiceOver support and proper contrast ratios

## 📱 Screen Overview

### Today (Day Sheet)
- Venue information with capacity and location
- Load-in and show schedule with countdown timers
- Contact information with direct call/navigation
- Financial overview for the day
- Expandable technical details (WiFi, parking, catering)

### Schedule
- Calendar view with tour dates
- Upcoming shows with status indicators
- Quick navigation to venue details
- Search functionality for events

### Money
- Tour financial summary with profit/loss tracking
- Recent transaction history
- Expense categorization for tax purposes
- Settlement tracking and payment status
- Quick expense entry and receipt scanning

### Crew
- Band and crew member directory
- Online status indicators
- Direct messaging capabilities
- Group chat functionality
- Role-based information access

### More
- User profile management
- App settings and preferences
- Emergency contacts and procedures
- Road assistance integration
- Tour configuration options

## 🔐 Security & Permissions

- Role-based access control (RBAC)
- Secure data encryption
- Authentication required for sensitive financial data
- Audit trails for financial transactions
- Privacy controls for personal information

## 🌐 API Integration Points

The app is designed to integrate with:
- Calendar services (Google Calendar, Apple Calendar)
- Accounting software (QuickBooks, Xero)
- Payment processors (Stripe, PayPal)
- Cloud storage (Google Drive, Dropbox)
- Mapping services (Google Maps, Apple Maps)
- Weather services for outdoor shows

## 📈 Performance Considerations

- Optimized for offline functionality
- Efficient data caching and synchronization
- Image optimization for receipts and documents
- Battery-efficient location services
- Minimal data usage for touring environments

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:**
```bash
git checkout -b feature/amazing-feature
```
3. **Make your changes with tests**
4. **Commit with conventional commits:**
```bash
git commit -m 'feat: add amazing feature'
```
5. **Push to your fork:**
```bash
git push origin feature/amazing-feature
```
6. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain the Apple design system
- Write tests for new features
- Update documentation for API changes
- Ensure accessibility compliance

## 🐛 Known Issues & Roadmap

### Current Limitations
- Calendar integration pending
- Offline mode in development
- Push notifications not implemented

### Upcoming Features
- [ ] Real-time chat functionality
- [ ] Receipt OCR scanning
- [ ] GPS-based automatic check-ins
- [ ] Integration with streaming platforms
- [ ] Multi-language support
- [ ] Dark mode implementation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- **Developer**: Mirabelle Doiron
- **GitHub**: [@mirabelle514](https://github.com/mirabelle514)
- **Project**: [TourManagerApp Repository](https://github.com/mirabelle514/TourManagerApp)

For bug reports and feature requests, please use the [GitHub Issues](https://github.com/mirabelle514/TourManagerApp/issues) page.

## 🙏 Acknowledgments

- Apple Human Interface Guidelines for design inspiration
- React Native and Expo teams for excellent frameworks
- Music industry professionals for feature requirements and testing
- Open source community for tools and libraries

---

**Built with ❤️ for The Wednesday Projects**