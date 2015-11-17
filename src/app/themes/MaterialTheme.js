let Colors = require('material-ui/lib/styles/colors');
let ColorManipulator = require('material-ui/lib/utils/color-manipulator');
let Spacing = require('material-ui/lib/styles/spacing');

export const TLAPalette = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#2E4151',
    primary2Color: '#1565C0', // used for blue accent across the site
    primary3Color: 'red', //Colors.lightBlack,
    accent1Color: 'orange',
    accent2Color: 'purple', //Colors.grey100,
    accent3Color: 'yellow', //Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: 'teal', //Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  }
};

export const ElementOverrides = {
    radioButton: {
      borderColor: TLAPalette.palette.primary2Color,
      checkedColor: TLAPalette.palette.primary2Color
    },
    checkbox: {
      boxColor: TLAPalette.palette.primary2Color,
      checkedColor: TLAPalette.palette.primary2Color
    }
}