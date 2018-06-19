import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Slider } from 'react-native-elements'

export default class AnswerVasScore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vas: 0
        }
    }

    _complete = () => {
        // this.props._setVasScore(this.state.vas)
    }

    _renderDescription = () => {
        let value
        value = this.state.vas
        if (value >= 0 && value <= 1)
            return <Text style={styles.descriptionText}>เหมือนนั่งเล่นสบายๆ</Text>
        else if (value >= 2 && value <= 3)
            return <Text style={styles.descriptionText}>เหนื่อยเล็กน้อย พูดคุยได้ปกติ</Text>
        else if (value >= 4 && value <= 5)
            return <Text style={styles.descriptionText}>เหนื่อยมากขึ้นแต่ทนได้ พูดสื่อสารได้ ใจไม่สั่น</Text>
        else if (value >= 6 && value <= 7)
            return <Text style={styles.descriptionText}>เหนื่อย หายใจเร็ว พูดได้เป็นคำๆ ต้องหยุดพัก</Text>
        else if (value >= 8 && value <= 9)
            return <Text style={styles.descriptionText}>เหนื่อย หายใจเร็ว พูดได้เป็นคำๆ ต้องหยุดพัก</Text>
        else
            return <Text style={styles.descriptionText}>เหนื่อยจนหอบ พูดไม่ไหว ใจสั่น</Text>
    }

    _renderImage = () => {
        let value

        value = this.state.vas
        if (value >= 0 && value <= 1)
            return <Image source={require('../assets/images/borg_great.png')} style={styles.image} />
        else if (value >= 2 && value <= 3)
            return <Image source={require('../assets/images/borg_good.png')} style={styles.image} />
        else if (value >= 4 && value <= 5)
            return <Image source={require('../assets/images/borg_normal.png')} style={styles.image} />
        else if (value >= 6 && value <= 7)
            return <Image source={require('../assets/images/borg_tired.png')} style={styles.image} />
        else if (value >= 8 && value <= 9)
            return <Image source={require('../assets/images/borg_tired.png')} style={styles.image} />
        else
            return <Image source={require('../assets/images/borg_bad.png')} style={styles.image} />
    }

    render() {
        return (

            // <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginVertical: 15, marginHorizontal: 20 }}>
            //     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            //         <View style={{ marginRight: 120, flex: 1 }}>
            //             {this._renderImage()}
            //             <View>
            //                 <Slider
            //                     value={this.state.borg}
            //                     onValueChange={(borg) => this.setState({ borg })}
            //                     minimumValue={6}
            //                     maximumValue={20}
            //                     step={1}
            //                     thumbTintColor="grey"
            //                     minimumTrackTintColor="blue" />
            //             </View>
            //             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            //                 <Text style={{ fontSize: 19 }}>Borg scale: {this.state.borg}</Text>
            //             </View>
            //         </View>
            //         <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 120 }}>
            //             {this._renderDescription()}
            //         </View>
            //     </View>
            // </View>
            <View style={{ flex: 1, flexWrap: "wrap", justifyContent: "center" }}>
                {this._renderImage()}
                <Text style={styles.text}>ความรุนแรง: {this.state.vas}</Text>
                {this._renderDescription()}
                <View style={{marginHorizontal: 20, marginVertical: 30}}>
                    <Slider
                        value={this.state.vas}
                        onValueChange={(vas) => this.setState({ vas })}
                        onSlidingComplete={this._complete}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        thumbTintColor="#80cdc0"
                        minimumTrackTintColor="#80cdc0"
                        trackStyle={{height: 10}}
                        thumbStyle={{height: 26, width: 26, borderRadius: 13}}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 20,

    },
    image: {
        resizeMode: 'contain',
        margin: 12,
        height: 100,
        width: 100,
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: "Kanit-Regular",
        color: "gray",
        textAlign: 'center',
        marginTop: 15
    },
    descriptionText: {
        fontSize: 16,
        fontFamily: "Kanit-Regular",
        textAlign: 'center',
        marginTop: 30
    }
}