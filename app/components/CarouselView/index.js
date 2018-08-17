/**
 * @flow
 * Created by kwon on 2018/6/25.
 */
import {
  Image,
} from 'react-native'

import React, {Component} from 'react';
import Carousel from 'react-native-looped-carousel';

export default class CarouselView extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel
        delay={2000}   //自动切换的延迟 （毫秒）
        style={{width: SCREEN_WIDTH, height: 200}}  //轮播组件的样式
        autoplay    //自动轮播
        pageInfo={false}    //在底部显示当前页面下标 / 页面个数
        swiper      //允许手势滑动
        bullets={true}  //显示小圆点
        bulletStyle={{backgroundColor: '#fff', width: px2dp(18), height: px2dp(18)}} //未选中时小圆点的样式
        chosenBulletStyle={{backgroundColor: 'red', width: px2dp(18), height: px2dp(18)}}//选中时小圆点的样式
      >
        {
          React.Children.map(this.props.imageList, (child, index) => {
            return (
              <Image  style={{width: SCREEN_WIDTH, height: 200}}  source={{uri:child}}/>
            )
          })
        }
      </Carousel>
    );
  }
}



