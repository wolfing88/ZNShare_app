/**
 * @flow
 * Created by kwon on 2018/8/7.
 */

import {observable, action, computed, runInAction} from 'mobx';
import {AsyncStorage} from 'react-native';

const ST_BACKGROUND_IMAGE = 'ST_BACKGROUND_IMAGE';

class PowerStore {

	@observable ZNShareBackgroundImage: string;

	constructor() {


		this.handleZNShareBackgroundImage();


	}

	handleZNShareBackgroundImage = () => {
		let image_url;

		AsyncStorage.getItem(ST_BACKGROUND_IMAGE, (error, result) => {

			if (result === null) {
				image_url = 'https://ww1.sinaimg.cn/bmiddle/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg';
			} else {
				image_url = result;
			}
			runInAction(() => {
				this.ZNShareBackgroundImage = image_url;
			});
		});



	}

	@action.bound
	setZNShareBackgroundImage = async (url: string) => {

		console.log('setZNShareBackgroundImage', url);

		await AsyncStorage.setItem(ST_BACKGROUND_IMAGE, url);

		runInAction(() => {
			this.ZNShareBackgroundImage = url;
		});
	}

}

export { PowerStore };