/**
 * Created by mave on 15/12/7.
 */

'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    TabBarIOS,
    Text,
    NavigatorIOS,
    View,
    } = React;
var SearchBar = React.createClass({

    getInitialState: function () {

        return ({

        });
    },

  render() {
    return (
<View>
    </View>
    );
  }
});

var First=
React.createClass({
    getInitialState: function () {
        return {
            bgColor: 'white'
        };
    },
    getDefaultProps(){
        return {
            bgColor: 'yellow',
            hint:null
        };
    },
    render: function () {
        return (<View style={ {backgroundColor: this.props.bgColor,flex:1,alignItems:'center',paddingTop:128}}>
            <Text>
                { this.props.hint}
            </Text>
        </View>);
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

module.exports = First;