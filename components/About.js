import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, ActivityIndicatorComponent, Image} from 'react-native'


export default class About extends React.Component{

    static navigationOptions = {
        tabBarIcon:() =>{
            return <Image source={require('./icons/user.png')} />
        }
    }
    render() {
        return (
            <View style={style.bloc}>
                    <Text style={style.title}>
                        TEST
                    </Text>
                    <Text>
                        <Image source={require('./icons/user.png')}  style={style.logo} />
                    </Text>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <ActivityIndicator color="#FF0000" size="large" animating={true}/>
                     <ActivityIndicator color="#FF0000" size="large" animating={true}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    title: {
        fontSize: 80,
        marginTop: 50
    },
    bloc:{
        marginLeft: 10
    },
    logo: {
        width: 66,
        height: 58,
    },
})



