/**
 * @flow
 * Created by kwon on 2018/8/15.
 */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import BaseContainer from '../../components/BaseContainer'
import { Images } from '../../resource'
import React, { Component } from 'react'
import CarouselView from '../../components/CarouselView'
import MarqueeLabel from 'react-native-lahk-marquee-label'

type Props = {
  navigation: any
};

export class Home extends React.Component<Props, any> {
  constructor (props) {
    super(props)
    this.state = {
      imageList: ['http://img.zcool.cn/community/01481559841b3da801215603a36220.jpg@2o.jpg']
    }
  }

  componentDidMount () {
    this.setState({
      imageList: [
        'http://img.zcool.cn/community/01481559841b3da801215603a36220.jpg@2o.jpg', 'http://img.zcool.cn/community/01881a5652c7516ac7251c94522683.jpg', 'http://img.zcool.cn/community/019a0558be22d6a801219c77d0578a.jpg@2o.jpg'
      ]
    })
  }

  render () {
    return (
      <BaseContainer style={styles.container} isHiddenNavBar={false} isTopNavigator={true} title={'我的'}>
        <CarouselView imageList={this.state.imageList}/>
          <MarqueeLabel
            //有bug时在源码 Animated.timing 加上 isInteraction: false,
            duration={8000}
            text={'This is a Marquee Label.'}
            textStyle={{ fontSize: FONT_SIZE(13), color: '#6f6' }}
          />
        <Botton navigation={this.props.navigation}/>
      </BaseContainer>
    )
  }
}

class Botton extends Component {

  constructor (props) {
    super(props)
    this.state = {
      bottonList: [
        { 'title': 'test', 'router': 'News', 'img': Images.Main },
        { 'title': 'test', 'router': 'BuDeJie', 'img': Images.Main },
        { 'title': 'test', 'router': 'BuDeJie', 'img': Images.Main },
        { 'title': 'test', 'router': 'lm', 'img': Images.Main },
        { 'title': 'test', 'router': 'lm', 'img': Images.Main },
        { 'title': 'test', 'router': 'lm', 'img': Images.Main },
        { 'title': 'test', 'router': 'lm', 'img': Images.Main },
        { 'title': 'test', 'router': 'lm', 'img': Images.Main }
      ]
    }
  }

  //跳转
  toJump = (data) => {
    this.props.navigation.navigate(data.router)
  }

  render () {
    let bottons = this.state.bottonList && this.state.bottonList.map((data, index) => {
      return (
        <TouchableOpacity key={index} style={styles.btnTouchableOpacity}
                          onPress={() => {this.toJump(data)}}>
          <View style={styles.btnBox}>
            <View style={styles.btnImgBox}>
              <Image style={{ flex: 1 }} resizeMode={'contain'} source={data.img}/>
            </View>
            <View style={styles.btnTextBox}>
              <Text style={{ fontSize: px2dp(30) }}>{data.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <View style={styles.btnsBox}>
        {
          bottons
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnTouchableOpacity: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 5.5
  },
  btnsBox: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eeeeef'
  },
  btnBox: {
    backgroundColor: '#FFF',
    margin: px2dp(2),
    borderRadius: px2dp(5)
  },
  btnImgBox: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_WIDTH / 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTextBox: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 5.5 - SCREEN_WIDTH / 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: px2dp(30)
  }
})