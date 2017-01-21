import color from 'color';

export default {
  primary100: '#E1BEE7',
  primary500: '#9C27B0',
  primary700: '#7B1FA2',
  get toolbarDefaultBg() {
    return this.primary500;
  },
  get transparent() {
    return color(this.darkText).alpha(0).hsl();
  },
  get statusBarColor() {
    return this.primary700;
  },
  whiteText: '#fff',
  get backgroundText() {
    return color(this.darkText).alpha(0.08).hsl();
  },
  get primaryWhiteText() {
    return this.whiteText;
  },
  get secondaryWhiteText() {
    return color(this.whiteText).alpha(0.7).hsl();
  },
  get hintWhiteText() {
    return color(this.whiteText).alpha(0.5).hsl();
  },
  get dividerWhite() {
    return color(this.whiteText).alpha(0.12).hsl();
  },
  get rippleWhiteColor() {
    return color(this.whiteText).alpha(0.8).hsl();
  },
  darkText: '#000000',
  get primaryDarkText() {
    return color(this.darkText).alpha(0.87).hsl();
  },
  get secondaryDarkText() {
    return color(this.darkText).alpha(0.54).hsl();
  },
  get hintDarkText() {
    return color(this.darkText).alpha(0.38).hsl();
  },
  get dividerDarkText() {
    return color(this.darkText).alpha(0.12).hsl();
  },
};
