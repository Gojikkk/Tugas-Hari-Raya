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
        tabBarStyle: { height: 60, paddingBottom: 8 },
        })}
    >
        <Tab.Screen name='Home' component={HomeScreen} options={{headerTitleAlign: 'center', headerShadowVisible: false}} />
        <Tab.Screen name='History' component={SHistoryScreen} options={{headerTitleAlign: 'center', headerShadowVisible: false}}/>
        <Tab.Screen name='Profile' component={ProfileScreen} options={{headerTitleAlign: 'center', headerShadowVisible: false}}  />
    </Tab.Navigator>
    );
    }
export default HomeTabs;