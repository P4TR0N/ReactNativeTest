import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';
import {Container, Content} from 'native-base';
import AppHeader from '../components/AppHeader.js';
import AppStock from '../components/AppStock';
import AppFooter from '../components/AppFooter.js';
import {Image} from "react-native";


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
                <Text style={{fontSize: 20, left: 20, top: 10, height: 24}}>724,50 ₽</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', top: 20}}>
                <Image
                    source={require('./Main/stockLeft.png')}
                    style={{left: 20}}
                />
                <View style={{left: 23, width: 70, height: 34, bottom: 16, borderColor: '#e6e6e6', borderWidth: 1}}>
                    <Text style={{marginLeft: "auto", marginRight: "auto", color: '#393939', fontSize: 13}}>700,00 ₽</Text>
                    <Text style={{marginLeft: "auto", marginRight: "auto", color: '#89888d', fontSize: 12, bottom: 4}}>&lt; 3 шт.</Text>
                </View>
                <View style={{left: 26, width: 70, height: 34, bottom: 16, borderColor: '#e6e6e6', borderWidth: 1}}>
                    <Text style={{marginLeft: "auto", marginRight: "auto", color: '#393939', fontSize: 13}}>700,00 ₽</Text>
                    <Text style={{marginLeft: "auto", marginRight: "auto", color: '#89888d', fontSize: 12, bottom: 4}}>4-10 шт.</Text>
                </View>
                <View style={{left: 29, width: 70, height: 34, bottom: 16, borderColor: '#e6e6e6', borderWidth: 1}}>
                    <Text style={{marginLeft: "auto", marginRight: "auto", color: '#393939', fontSize: 13}}>700,00 ₽</Text>
                    <Text style={{marginLeft: "auto", marginRight: "auto", color: '#89888d', fontSize: 12, bottom: 4}}>11-20 шт.</Text>
                </View>
                <Image
                    source={require('./Main/stockRight.png')}
                    style={{left: 32}}
                />
            </View>
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