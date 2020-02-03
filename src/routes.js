import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Headlines from "./containers/Headlines";
import NewsPage from "./containers/NewsPage";
import ExternalPage from "./containers/ExternalPage";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Headlines: {
        screen: Headlines,
        navigationOptions: {
          title: "O globo".toUpperCase(),
          headerTitleStyle: {
            textAlign: "center",
            flex: 1
          }
        }
      },
      NewsPage: {
        screen: NewsPage,
        navigationOptions: {
          headerTitleStyle: {
            textAlign: "center",
            flex: 1,
          }
        }
      },
      ExternalPage: {
        screen: ExternalPage,
        navigationOptions: {
          headerTitleStyle: {
            justifyContent:"flex-start"
          }
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "#125e92"
        }
      }
    }
  )
);

export default Routes;
