/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
    SwitchAndroid,
    TextInput,
    TouchableHighlight,
    ToastAndroid,
  View,
} = React;
var Switch = React.createClass({
    render() {
        return (

            <View style={{flexDirection:'row',alignItems:'center',height:30,borderColor:'yellow',borderWidth:2}}>
                <Text style={{numberOfLines:0}}>
                    {this.props.switchTitle}
                </Text>
                < SwitchAndroid style={{height:30,width:45,margainRight:2}} onValueChange={this.props.onValueChange}
                                value={this.props.value}/>
            </View>
        );
    },
    _titlePosition: function (leftRoght) {
        if (leftRoght == null) {
            return 'row';
        }
        return leftRoght;
    },
});

var Note = React.createClass({
    getInitialState: function () {
        return {
            siwthOn: false,
            inputText: '',
        };
    },

  render: function() {
    return (
        
        <View style={styles.container}>
            <SwitchAndroid style={{height:30,width:45}}
                           onValueChange={ (value)=> this.setState({switchOn:value}) }
                           value={this.state.switchOn}
                />
            <Text style={[styles.welcome,{textAlign:'left',paddingLeft:20,margainLeft:100,margainRight:0}]}>
                Welcome to React Native!{this.state.inputText}
        </Text>
            <View style={{flexDirection:'row'}}>
                <Switch switchTitle={'开关'} titleLeftRight={'column'}
                        onValueChange={ (value)=> this.setState({switchOn:value}) }
                        value={this.state.switchOn}/>
                <Switch switchTitle={'开关开关开关开关'} titleLeftRight={'column'}
                        onValueChange={ (value)=> this.setState({switchOn:value}) }
                        value={this.state.switchOn}/>
            </View>
            <TextInput placeholder={'默认输入'} onChangeText={(text)=> this.setState({inputText:text})}/>
            <View style={{}}>
                <TouchableHighlight style={{margainLeft:300,width:50,justifyContent:'flex-end'}}
                                    onPress={()=>{ ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT) }}>
                    <Text style={{margainLeft:5,margainRight:5}}>
                        登陆
                    </Text>
                </TouchableHighlight>
            </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: 'flex-start',
      flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Note', () => Note);
