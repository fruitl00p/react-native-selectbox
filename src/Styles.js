import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const PADDING = 8;
const BORDER_RADIUS = 5;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';
const OPTION_CONTAINER_HEIGHT = 400;

export default StyleSheet.create({

  overlayStyle: {
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },

  optionContainer: {
    borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    height: OPTION_CONTAINER_HEIGHT,
    backgroundColor: 'rgba(255,255,255,0.8)',
    left: width * 0.1,
    top: (height - OPTION_CONTAINER_HEIGHT) / 2
  },

  optionContainerInnerContainer: {
    paddingHorizontal: 10
  },

  promptContainer: {
    left: width * 0.1,
    top: ((height - OPTION_CONTAINER_HEIGHT) / 2) - 10
  },

  cancelContainer: {
    left: width * 0.1,
    top: ((height - OPTION_CONTAINER_HEIGHT) / 2) + 10
  },

  selectStyle: {
    flex: 1,
    padding: 8,
  },

  selectContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  selectLabelStyle: {
    flex: 1,
    color: '#333',
    fontSize: FONT_SIZE
  },

  promptStyle: {
    borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: PADDING
  },

  promptLabelStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: FONT_SIZE
  },

  cancelStyle: {
    borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: PADDING
  },

  cancelLabelStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: FONT_SIZE
  },

  optionStyle: {
    padding: PADDING,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  optionLabelStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
    color: HIGHLIGHT_COLOR
  },

  sectionStyle: {
    padding: PADDING * 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  sectionLabelStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE
  }
});
