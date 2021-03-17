import React from 'react';
import {Header, Left, Body, Button, Title } from 'native-base';
import styles from "./AppHeader/Styles"
import {Image} from "react-native";

const AppFooter = () => (

        <Header style={styles.container}>
            <Left>
                <Button transparent style={styles.backButton}>
                    <Image source={require('./AppHeader/back.png')} />
                </Button>
            </Left>
            <Body>
                <Title style={styles.title}>Получатель</Title>
            </Body>

        </Header>

);
export default AppFooter;