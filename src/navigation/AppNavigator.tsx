import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import DashboardScreen from '../screens/DashboardScreen';
import AddBookScreen from '../screens/AddBookScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthNavigator from './AuthNavigator';
import { AppStackParamList, AppTabParamList } from './types';

const AppStack = createNativeStackNavigator<AppStackParamList>();
const AppTab = createBottomTabNavigator<AppTabParamList>();

function LibraryNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={({ navigation }) => ({
        header: ({ options, back }) => (
          <Header
            title={options.title ?? ''}
            canGoBack={!!back}
            onBack={() => navigation.goBack()}
          />
        ),
      })}
    >
      <AppStack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'My Personal Library' }} />
      <AppStack.Screen name="AddBook" component={AddBookScreen} options={{ title: 'Add Book' }} />
      <AppStack.Screen name="BookDetail" component={BookDetailScreen} options={{ title: 'Book Details' }} />
    </AppStack.Navigator>
  );
}

function AppNavigator() {
  const { theme } = useTheme();
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.secondaryBackground,
        header: ({ options }) => <Header title={options.title ?? ''} />,
      }}
    >
      <AppTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/MinimalistOpenBookIconCropped.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/icons/user.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}

export default function RootNavigator({ fontsLoaded }: { fontsLoaded: boolean }) {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fontsLoaded && !authLoading && minTimeElapsed) SplashScreen.hideAsync();
  }, [fontsLoaded, authLoading, minTimeElapsed]);

  if (!fontsLoaded || authLoading || !minTimeElapsed) return null;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
