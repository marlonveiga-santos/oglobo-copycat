import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Headlines from "./src/containers/Headlines";
import NewsPage from "./src/containers/NewsPage";
import ExternalPage from "./src/containers/ExternalPage";

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
          /* title: "Noticia".toUpperCase(), */
          headerTitleStyle: {
            textAlign: "center",
            flex: 1
          }
        }
      },
      ExternalPage: {
        screen: ExternalPage,
        navigationOptions: {
          headerTitleStyle: {
            textAlign: "center",
            flex: 1
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
