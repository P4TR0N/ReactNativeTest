import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import {Image} from "react-native";

class AppBatchSelector extends Component {
    render() {
        const {value, oneBatch, twoBatch, treeBatch} = this.props;
        return (
            <View>
                <View>
                    <Text style={{fontSize: 20, left: 20, top: 10, height: 24}}>{value}</Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', top: 20}}>
                    <Image
                        source={require('../screens/Main/stockLeft.png')}
                        style={{left: 20}}
                    />
                    <Button style={{left: 23, width: 70, height: 34, bottom: 16, backgroundColor: 'transparent'}} onPress={oneBatch}>
                        <View>
                            <Text style={{marginLeft: "auto", marginRight: "auto", color: '#393939', fontSize: 13, top: 3, left: 8}}>700,00 ₽</Text>
                            <Text style={{marginLeft: "auto", marginRight: "auto", color: '#89888d', fontSize: 12, bottom: 4, top:0, left: 8}}>&lt; 3 шт.</Text>
                        </View>
                    </Button>
                    <Button style={{left: 26, width: 70, height: 34, bottom: 16, backgroundColor: 'transparent'}} onPress={twoBatch}>
                        <View>
                            <Text style={{marginLeft: "auto", marginRight: "auto", color: '#393939', fontSize: 13, top: 3, left: 8}}>700,00 ₽</Text>
                            <Text style={{marginLeft: "auto", marginRight: "auto", color: '#89888d', fontSize: 12, bottom: 4, top:0, left: 8}}>4-10 шт.</Text>
                        </View>
                    </Button>
                    <Button style={{left: 29, width: 70, height: 34, bottom: 16, backgroundColor: 'transparent'}} onPress={treeBatch}>
                        <View>
                            <Text style={{marginLeft: "auto", marginRight: "auto", color: '#393939', fontSize: 13, top: 3, left: 8}}>700,00 ₽</Text>
                            <Text style={{marginLeft: "auto", marginRight: "auto", color: '#89888d', fontSize: 12, bottom: 4, top:0, left: 8}}>11-20 шт.</Text>
                        </View>
                    </Button>
                    <Image
                        source={require('../screens/Main/stockRight.png')}
                        style={{left: 32}}
                    />
                </View>
            </View>

        )
    }
}

export default AppBatchSelector;