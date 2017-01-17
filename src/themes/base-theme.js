import color from 'color';

export default {
  toolbarDefaultBg: '#4179F7',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hexString();
  },
};
