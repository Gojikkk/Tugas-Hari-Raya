// HomeStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import AddTHRScreen from '../screen/AddTHRScreen'
import AddPengeluaranScreen from '../screen/AddPengeluaranScreen'

const Stack = createNativeStackNavigator();

function HomeStack() { 
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen name="MainTabs" component={HomeTabs} options={{ headerShown: false }}/>
    <Stack.Screen name="AddTHR" component={AddTHRScreen}   options={{
    headerTitleAlign: 'left',headerShadowVisible: false,headerStyle: {backgroundColor: '#e8e4f3',},headerTintColor: '#8c36c6',headerTitleStyle: {fontWeight: 'bold',fontSize: 18,},headerTitle: 'Find My THR',
    }}/>
    <Stack.Screen name="AddPengeluaran" component={AddPengeluaranScreen}   options={{
    headerTitleAlign: 'left',headerShadowVisible: false,headerStyle: {backgroundColor: '#e8e4f3',},headerTintColor: '#8c36c6',headerTitleStyle: {fontWeight: 'bold',fontSize: 18,},headerTitle: 'Find My THR',
    }}/>
    </Stack.Navigator>
  );
}

export default HomeStack;