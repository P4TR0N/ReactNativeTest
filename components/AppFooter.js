import React from 'react';
import {Footer, FooterTab, Button} from 'native-base';
import {Image} from "react-native";

const AppFooter = () => (
    <Footer>
        <FooterTab style={{backgroundColor: "white"}}>
            <Button>
                <Image source={require('./AppFooter/home.png')}/>
            </Button>
            <Button>
                <Image source={require('./AppFooter/doc.png')}/>
            </Button>
            <Button>
                <Image source={require('./AppFooter/message.png')}/>
            </Button>
            <Button>
                <Image source={require('./AppFooter/cart.png')}/>
            </Button>
            <Button>
                <Image source={require('./AppFooter/user.png')}/>
            </Button>
        </FooterTab>
    </Footer>
);
export default AppFooter;