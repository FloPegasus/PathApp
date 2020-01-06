import React from'react'
import {Image} from 'react-native'
import {creatAppContainer, creatStackNavigator} from 'react-navigation';

import Welcome from 'screens/Welcome';
import Login from 'screens/Login';
import Personnage from 'screens/Personnage';
import PersonnageNew from 'screens/PersonnageNew';
import PersCarac from 'screens/PersCarac';
import PersCombat from 'screens/PersCombat';
import PersArmes from 'screens/PersArmes';
import PersCompetences from 'screens/PersCompetences';

import {theme} from '../constants';
const screens = createStackNavigator({
    Welcome, 
    Login, 
    Personnage,
    PersonnageNew,
    PersCarac,
    PersCombat,
    PersArmes,
    PersCompetences,
},
 {
     defaultNavigationOptions:{
        headerStyles: {},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainersStyle: {},
        headerRightContainersStyle: {},
     }
     
 });

 export default creatAppContainer(screens);

