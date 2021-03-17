import React from 'react';
import {Header, Body, Button, Left} from 'native-base';
import styles from "./AppStock/Styles"
import {Image} from "react-native";
import {Text} from "react-native";


const AppFooter = () => (

    <Header style={styles.container}>
        <Left>
            <Button transparent style={styles.clockIcon}>
                <Image source={require('./AppStock/clock.png')} />
            </Button>
        </Left>
        <Body>
            <Text style={styles.title}>осталось</Text>
            <Text style={styles.stockTime}>22 ДНЯ : 17 ЧАСОВ : 55 МИНУТ</Text>
        </Body>
    </Header>

);
export default AppFooter;