import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings191913Navigator from '../features/Settings191913/navigator';
import UserProfile191911Navigator from '../features/UserProfile191911/navigator';
import Maps191872Navigator from '../features/Maps191872/navigator';
import Additem191871Navigator from '../features/Additem191871/navigator';
import Maps191867Navigator from '../features/Maps191867/navigator';
import UserProfile191863Navigator from '../features/UserProfile191863/navigator';
import BlankScreen0191840Navigator from '../features/BlankScreen0191840/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings191913: { screen: Settings191913Navigator },
UserProfile191911: { screen: UserProfile191911Navigator },
Maps191872: { screen: Maps191872Navigator },
Additem191871: { screen: Additem191871Navigator },
Maps191867: { screen: Maps191867Navigator },
UserProfile191863: { screen: UserProfile191863Navigator },
BlankScreen0191840: { screen: BlankScreen0191840Navigator },

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
