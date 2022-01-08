import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack"
import {MainScreen} from '../Screens/MainScreen'
import {SingleCardScreen} from "../Screens/SingleCardScreen"

const Stack = createNativeStackNavigator()

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerTitle: 'Feed',
  headerStyle: {
    backgroundColor: '#eff4fd',
  }
}

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Main'} component={MainScreen} options={{headerShown: false}}/>
      <Stack.Screen name={'Card'} component={SingleCardScreen} options={defaultScreenOptions} />
    </Stack.Navigator>
  )
}

export default MainNavigation
