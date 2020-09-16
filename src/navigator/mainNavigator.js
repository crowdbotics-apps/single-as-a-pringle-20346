import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings102442Navigator from '../features/Settings102442/navigator';
import UserProfile102435Navigator from '../features/UserProfile102435/navigator';
import Settings102434Navigator from '../features/Settings102434/navigator';
import Settings102432Navigator from '../features/Settings102432/navigator';
import SignIn2102430Navigator from '../features/SignIn2102430/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings102442: { screen: Settings102442Navigator },
UserProfile102435: { screen: UserProfile102435Navigator },
Settings102434: { screen: Settings102434Navigator },
Settings102432: { screen: Settings102432Navigator },
SignIn2102430: { screen: SignIn2102430Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
