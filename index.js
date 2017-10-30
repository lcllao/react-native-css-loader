const parseCss = require('gulp-react-native-stylesheet-css/lib/parseCss');

module.exports = function(source) {
    return `import {StyleSheet} from 'react-native';export default StyleSheet.create(${parseCss(source.replace(/\r?\n|\r/g, ""))});`;
};