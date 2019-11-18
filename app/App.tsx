import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainContent } from './pages/MainContent';
import { Welcome } from './pages/welcome/Welcome';

const MainNavigator = createStackNavigator(
	{
		Welcome: Welcome,
		MainContent: MainContent,
	},
	{ initialRouteName: 'Welcome' , headerMode: "none"}
);

const App = createAppContainer(MainNavigator);

export default App;
