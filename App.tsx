import {NavigationContainer} from '@react-navigation/native';
import {useFonts} from "expo-font";
import MainNavigation from "./src/navigation/MainNavigation";
import {View,Text} from "react-native";

const App = () => {
  const [fontsLoaded] = useFonts({
    'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
    'lato-black': require('./assets/fonts/Lato-Black.ttf'),
    'lato-light': require('./assets/fonts/Lato-Light.ttf'),
    'lato-thin': require('./assets/fonts/Lato-Thin.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );

}

export default App;
