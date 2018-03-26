import HomeScreen from './HomeScreen.js'
import { DrawerNavigator } from 'react-navigation'

export default DrawerNavigator(
  {
    Home: { screen: HomeScreen }
  }
)
