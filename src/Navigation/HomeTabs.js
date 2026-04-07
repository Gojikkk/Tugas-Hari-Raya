import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen';
import HistoryScreen from '../screen/HistoryScreen';
import ProfileScreen from '../screen/ProfileScreen'

const Tab = createBottomTabNavigator();
function HomeTabs() {
return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        const icons = {
            Home: focused ? 'home' : 'home-outline',
            History: focused ? 'history' : 'history-outline',
            Profile: focused ? 'person' : 'person-outline',
            };
        return <Ionicons name={icons[route.name]} size={size} color={color} />;
    },
        tabBarActiveTintColor: '#9936c6',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { position: 'absolute', backgroundColor: '#fdf2ff',height: 60, paddingBottom: 8, borderTopRightRadius: 30, borderTopLeftRadius: 20, height: 80},
        })}
    >
<Tab.Screen
  name='Home'
  component={HomeScreen}
  options={{
    headerTitleAlign: 'center',headerShadowVisible: false,headerStyle: {backgroundColor: '#e8e4f3',},headerTintColor: '#8c36c6',headerTitleStyle: {fontWeight: 'bold',fontSize: 20,},headerTitle: 'Find My THR', title: 'Home',
    }}
/>
        <Tab.Screen name='History' component={HistoryScreen} options={{
    headerTitleAlign: 'center',headerShadowVisible: false,headerStyle: {backgroundColor: '#e8e4f3',},headerTintColor: '#8c36c6',headerTitleStyle: {fontWeight: 'bold',fontSize: 20,},headerTitle: 'Find My THR', title: 'History',
    }}/>
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
    headerTitleAlign: 'center',headerShadowVisible: false,headerStyle: {backgroundColor: '#e8e4f3',},headerTintColor: '#8c36c6',headerTitleStyle: {fontWeight: 'bold',fontSize: 20,},headerTitle: 'Find My THR', title: 'Profile',
    }}  />
    </Tab.Navigator>
    );
    }
export default HomeTabs;