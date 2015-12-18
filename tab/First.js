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
    TextInput,
    ScrollView,
    MapView,
    Text,
    NavigatorIOS,
    View,
    } = React;

var NoMovies = React.createClass({
    render: function () {
        var text = '';
        if (this.props.filter) {
            text = `No results for "${this.props.filter}"`;
        } else if (!this.props.isLoading) {
            // If we're looking at the latest movies, aren't currently loading, and
            // still have no results, show a message
            text = 'No movies found';
        }

        return (
            <View style={[styles.container, styles.centerText]}>
                <Text style={styles.noMoviesText}>{text}</Text>
            </View>
        );
    }
});


var First = React.createClass({
    getInitialState: function () {
        return {
            textValue: '',
        };
    },
    getDefaultProps(){
        return {
            bgColor: 'yellow',
            hint: null,
            searchholder: '',
        };
    },
    render: function () {
        var items = ['12', '34', '56', '78', '910'];
        var item = [];
        items.forEach((aItem)=> {
            item.push(<Text>{aItem}</Text>);
        });
        return (
            <ScrollView>
                <View style={[styles.container,{flexDirection:'column'}]}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                        <Text>
                            输入的数据{this.state.textValue}
                        </Text>
                        <TextInput onChangeText={(text)=> this.setState({textValue:text}) } placeholder='默认输入'
                                   style={{flex:1,height:35,minWidth:200,marginRight:0,borderWidth:3,borderColor:'red',}}/>
                    </View>
                    <MapView style={{flex:1,height:200,}}/>
                    <Image style={{alignSelf:'flex-start',width:35,height:35,borderWidth:3,borderColor:'red'}}
                           source={{uri:'http://down.tutu001.com/d/file/20101129/2f5ca0f1c9b6d02ea87df74fcc_560.jpg'}}/>
                    <Image style={{alignSelf:'center',width:35,height:35,borderWidth:3,borderColor:'red'}}
                           source={{uri:'http://down.tutu001.com/d/file/20101129/2f5ca0f1c9b6d02ea87df74fcc_560.jpg'}}/>
                    <Image style={{alignSelf:'flex-end',width:35,height:35,borderWidth:3,borderColor:'red'}}
                           source={{uri:'http://down.tutu001.com/d/file/20101129/2f5ca0f1c9b6d02ea87df74fcc_560.jpg'}}/>
                    <NoMovies filter={''} isLoading={false}/>
                    {this.props.children}
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                    {item}
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Image
                            source={{uri:'http://down.tutu001.com/d/file/20101129/2f5ca0f1c9b6d02ea87df74fcc_560.jpg'}}
                            style={{width:100,height:100}}/>
                        <View style={{flexDirection:'column',alignItems:'center'}}>
                            <Text>
                                Log Book
                            </Text>
                            <Text style={{paddingTop:15}}>
                                技术记录本
                            </Text>
                        </View>
                    </View>
                    <Text style={{alignSelf:'center',fontSize:50,textAlign:'left',marginLeft:50}}>
                        B-1976(W)
                    </Text>
                </View>
            </ScrollView>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        backgroundColor: '#F5FCFF',
    },
    noMoviesText: {
        justifyContent: 'center',
        color: '#888888',
    },
});

module.exports = First;
