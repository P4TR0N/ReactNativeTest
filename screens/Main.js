import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';
import {Container, Content} from 'native-base';
import AppHeader from '../components/AppHeader.js';
import AppStock from '../components/AppStock';
import AppFooter from '../components/AppFooter.js';
import AppBatchSelector from '../components/AppBatchSelector'
import {Image} from "react-native";

import { createStore } from 'redux';
import stockPrice from '../store/reducers/stockPrice';
const store = createStore(stockPrice);

const MainScreen = () => (
    <Container>
        <Content>
            <AppHeader/>
            <AppStock/>
            <View>
                <StatusBar style="auto"/>
                <Image
                    source={{uri: 'http://rebusauto.ru/patron/product.png'}}
                    style={{width: 300, height: 300, marginLeft: "auto", marginRight: "auto"}}
                />
            </View>
            <View
                style={{
                    borderBottomColor: '#e6e6e6',
                    borderBottomWidth: 1,
                }}
            />
            <View>
                <Text style={{fontSize: 17, left: 20, top: 4, height: 22}}>Подсвечник на 3 свечи бронза 25 см</Text>
            </View>
           <AppBatchSelector
               value={store.getState()}
               oneBatch={() => store.dispatch({ type: "oneBatch" })}
               twoBatch={() => store.dispatch({ type: "twoBatch" })}
               treeBatch={() => store.dispatch({ type: "treeBatch" })}
           />
            <Image
                source={require('./Main/addCart.png')}
                style={{left: 270, top: -45}}
            />
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text style={{left: 20, color: '#89888d'}}>Нужно выкупить:</Text>
                    <Text style={{left: 25, fontWeight: 'bold'}}>100</Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text style={{left: 85, color: '#89888d'}}>Выкуплено:</Text>
                    <Text style={{left: 90, fontWeight: 'bold'}}>300</Text>
                </View>
            </View>
            <View
                style={{
                    borderBottomColor: '#e6e6e6',
                    borderBottomWidth: 1,
                    top: 10
                }}
            />
            <View style={{height: 50, flexDirection: 'row', flexWrap: 'wrap', top:20}}>
                <Text style={{left: 20, color: '#89888d'}}>Арт./Код:</Text>
                <Text style={{left: 20, color: '#89888d'}}>668093</Text>
            </View>

        </Content>
        <AppFooter/>
    </Container>
);
export default MainScreen;
store.subscribe(MainScreen);