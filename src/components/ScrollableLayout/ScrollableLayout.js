/* @flow */
import React, { Component, PropTypes } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FixedQueue from 'fixed-size-queue';
import { debounce } from 'lodash';

import StatusBar from '../StatusBar';
import Layout from '../Layout';

const styles = {
  animatable: {
    marginTop: 0,
    zIndex: -1,
  },
};

const MARGIN = 56;

class ScrollableLayout extends Component {
  static defaultProps = {
    loadNewData: () => {},
    refreshing: false,
    onRefresh: () => {},
  }

  static propTypes = {
    ...Layout.propTypes,
    loadNewData: PropTypes.func,
    refreshing: PropTypes.bool,
    onRefresh: PropTypes.func,
  }

  state = {
    marginTop: 0,
  }

  queue: FixedQueue;
  offset: number;
  scrollView: any;

  componentWillMount() {
    this.changeToolbar = debounce(this.changeToolbar, 10);
    this.offset = 0;
    this.queue = FixedQueue.create(5);
  }

  onScroll = (event: any) => {
    event.persist();
    const { nativeEvent } = event;
    // console.log(nativeEvent);
    const offsetBuffer = 500;
    const offset = nativeEvent.contentOffset.y;
    const size = nativeEvent.contentSize.height;
    const measurement = nativeEvent.layoutMeasurement.height;
    if (size - (measurement + offset) < offsetBuffer) {
      this.props.loadNewData();
    }
    this.changeToolbar(offset, size, measurement);
  }

  changeToolbar = (offset: number, size: number, measurement: number) => {
    const isDown = offset - this.offset > 0;
    if (this.queue.getCount() >= this.queue.capacity) {
      this.queue.dequeue();
    }
    let marginTop = this.state.marginTop;
    this.queue.enqueue(isDown);
    if (this.queue.container.every(item => item === true)) {
      marginTop = -MARGIN;
    }
    if (this.queue.container.every(item => item === false)) {
      marginTop = 0;
    }
    if (offset <= 0) {
      marginTop = 0;
    }
    if (size - (measurement + offset) < 50) {
      marginTop = -MARGIN;
    }
    this.setState({
      marginTop,
    });
    this.offset = offset;
  }
  render() {
    return (
      <View>
        <StatusBar backgroundColor={this.props.backgroundColor} />
        <Animatable.View
          duration={100}
          transition={['marginTop']}
          easing="ease-out"
          style={[styles.animatable, [{ marginTop: this.state.marginTop }]]}
          ref={(c) => { this.toolbar = c; }}
        >
          <Layout
            statusBar={false}
            title={this.props.title}
            actions={this.props.actions}
            onActionSelected={this.props.onActionSelected}
            navigation={this.props.navigation}
          />
        </Animatable.View>
        <ScrollView
          ref={(c) => { this.scrollView = c; }}
          onScroll={this.onScroll}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.props.onRefresh}
            />
          }
        >
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default ScrollableLayout;
