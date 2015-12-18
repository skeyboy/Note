/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
    TextInput,
    SliderIOS,
    NavigatorIOS,
    SwitchIOS,
    View,
    AlertIOS,
    } = React;

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var First = require('./tab/First');
var Third = require('./tab/third');

var MyView = React.createClass({
    render: function () {
        return (
            <View style={{  flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',}}>

                <SwitchIOS value={this.props.isOn}
                           text='点击退回'
                           onValueChange={ (value)=>{
    this.props.navigator.pop();
  }}/>
            </View>
        );
    }
});

var Nav = React.createClass({

    getInitialState: function () {
        return {
            nextPage: false,
            selectedTab: 'first',
            notifCount: 0,
            presses: 0,

            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            badge: null,
            searchText: '',

        };
    },
    componentWillMount: function () {


    },
    componentDidMount: function () {
        this.fetchData();

    },

    fetchData: function () {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    },

    render: function () {

        var property = this.props.property;
        if (!property) {
            property = {property: {isOn: true, isFirst: true}}
        } else {
        }
        //this.setState({nextPage:property.isOn});
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <TabBarIOS
                tintColor="white"
                barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="Blue Tab"
                    icon={{uri: base64Icon, scale: 3}}
                    selected={this.state.selectedTab === 'first'}
                    onPress={() => {
            this.setState({
              selectedTab: 'first',
            });
          }}>
                    <View>
                        <First >
                            <SliderIOS />
                            <SwitchIOS onValueChange={(value)=> { this.setState({nextPage:value});
property.isFirst = false;
                    if (value) {
                      this.props.navigator.push( {
                  component:MyView,
                  title: '主页',
                  passProps: {property:{isOn:value,isFirst:false}},
                } ) ;
                    }else {
                      //this.props.navigator.pop();
                    }
                    }}

                                       value={ !property.isFirst ? property.isOn : this.state.nextPage}/>
                        </First>
                    </View>

                </TabBarIOS.Item>

                <TabBarIOS.Item
                    badge={this.state.badge}
                    title="Blue Tab"
                    icon={{uri: base64Icon, scale: 3}}
                    selected={this.state.selectedTab === 'second'}
                    onPress={() => {

            this.setState({
              selectedTab: 'second',
badge:this.state.badge+1
            });
          }}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderMovie}
                        style={styles.listView}
                        />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Third"
                    selected={this.state.selectedTab === 'third'}
                    onPress={()=> this.setState({selectedTab:'third'})}
                    >
                    <Third />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    },

    renderLoadingView: function () {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    },

    renderMovie: function (movie) {
        return (
            <View style={styles.container}>
                <Image
                    defaultSource={ {uri:base64Icon}}
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                    />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    },
});

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});


module.exports = Nav;
