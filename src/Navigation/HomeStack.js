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
    <Stack.Screen name="AddTHR" component={AddTHRScreen} />
    <Stack.Screen name="AddPengeluaran" component={AddPengeluaranScreen}/>
    </Stack.Navigator>
  );
}

export default HomeStack;