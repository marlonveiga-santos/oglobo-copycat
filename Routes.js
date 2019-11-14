import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Headlines from './src/containers/Headlines';
import NewsPage from './src/containers/NewsPage';

const Routes = createAppContainer(
    createStackNavigator({
        Headlines: {
            screen: Headlines,
            navigationOptions: {
                headerShown: false,
            },
        },
        NewsPage: {
            screen: NewsPage,
            navigationOptions: {
                headerShown: false,
            },
        }

    })
);

export default Routes;