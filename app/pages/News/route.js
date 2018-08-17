/**
 * Created by kwon on 2018/5/3.
 */
import React from 'react';

import {
	StackNavigator,
	TabNavigator,
	TabBarBottom,
	TabBarTop,
	createMaterialTopTabNavigator
} from 'react-navigation';


import {System} from '../../utils';
import { Icon, Theme } from '../../components';


import { ZNShare } from '../ZNShare';
import { BuDeJie }  from '../News/BuDeJie';
import { Main } from '../Main';

export const GankTab = createMaterialTopTabNavigator({
	Gank: {
		screen: BuDeJie,
		navigationOptions: () => TabOptions('测试呵呵', 'ZNShare', '测试呵呵'),
	},
	ZNShare: {
		screen: ZNShare,
		navigationOptions: () => TabOptions('测试呵呵111', 'ZNShare', '测试呵呵'),
	},
	Main1: {
		screen: BuDeJie,
		navigationOptions: () => TabOptions('测试呵呵222', 'ZNShare', '测试呵呵'),
	},
	Main2: {
		screen: Main,
		navigationOptions: () => TabOptions('测试呵呵333', 'ZNShare', '测试呵呵'),
	},
	Main3: {
		screen: ZNShare,
		navigationOptions: () => TabOptions('测试呵呵4444', 'ZNShare', '测试呵呵'),
	},
	Main4: {
		screen: Main,
		navigationOptions: () => TabOptions('测试呵呵5555555', 'ZNShare', '测试呵呵'),
	},
	Main5: {
		screen: Main,
		navigationOptions: () => TabOptions('测试呵呵666666666', 'ZNShare', '测试呵呵'),
	},

}, {

	initialRouteName: 'ZNShare',
	swipeEnabled: true,
	animationEnabled: false,
	backBehavior: 'none',

	lazy: true,
	tabBarOptions: {
		lazy: true,
		activeTintColor: '#4ECBFC',
		inactiveTintColor: 'black',
		// upperCaseLabel: false,
		scrollEnabled: true,
		// tabbar的style
		style: {
			height: 44,
			backgroundColor: 'white'
		},
		tabStyle: {
			// height:80,
			// width: 70,
			// backgroundColor: 'red'
		},
		labelStyle: {
			fontSize: 15,
		},
		// 是否显示label，默认为true
		// showLabel: false,
		indicatorStyle: {
			height: 3, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了,
			backgroundColor: '#4ECBFC',
			// width:30,
			// alignItems:'center',
			// justifyContent:'center',
			// left: 48
		}
	}
});

const TabOptions = (tabBarTitle, tabBarIconName, navTitle) => {
	const tabBarLabel = tabBarTitle;

	const headerTitle = navTitle;
	const headerTitleStyle = {
		fontSize: System.iOS ? 23 : 20,
		color: 'white',
		alignSelf: 'center',
		paddingTop: System.Android ? 17 : null,
	};
	// header的style
	const headerStyle = { backgroundColor: 'red' };
	const tabBarVisible = true;
	return { tabBarLabel, tabBarVisible, };
};