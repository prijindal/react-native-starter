/* @flow */
import React, { Component, PropTypes } from 'react';
import { TouchableNativeFeedback, View, Text, Image } from 'react-native';
import theme from '../../themes/base-theme';

const styles = {
  view: {
    elevation: 2,
    borderColor: theme.dividerDarkText,
    backgroundColor: theme.whiteText,
    borderBottomWidth: 1,
    minHeight: 56,
    // alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  avatar: {
    marginTop: 8,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  content: {
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    color: theme.primaryDarkText,
    fontSize: 16,
  },
};

class ListItem extends Component {
  static defaultProps = {
    idx: 0,
    length: 1,
    onPress: () => {},
  }

  static propTypes = {
    idx: PropTypes.number,
    length: PropTypes.number,
    item: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
    onPress: PropTypes.func,
  }

  getBody() {
    const MAX_LENGTH = 80;
    const { body } = this.props.item;
    if (!body) return '';
    if (body.length > MAX_LENGTH) {
      return body.substr(0, MAX_LENGTH);
    }
    return body;
  }

  getAdditionalStyles() {
    const { idx, length } = this.props;
    return {
      borderBottomWidth: idx === length - 1 ? 0 : 1,
    };
  }

  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={[styles.view, this.getAdditionalStyles()]}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.content}>
            <Text style={styles.text}>{item.title}</Text>
            <Text>{this.getBody()}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default ListItem;
