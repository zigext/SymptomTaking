// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';

// export default class AnswerVasScore extends Component {
//     _renderDescription = () => {
//         let value
//         (this.props.borg) ? value = this.props.borg : value = this.state.borg
//         if (value >= 6 && value <= 8)
//             return <Text style={styles.descriptionText}>เหมือนนั่งเล่นสบายๆ                                              </Text>
//         else if (value === 9)
//             return <Text style={styles.descriptionText}>เหนื่อยเล็กน้อย พูดคุยได้ปกติ                              </Text>
//         else if (value >= 10 && value <= 11)
//             return <Text style={styles.descriptionText}>เหนื่อยมากขึ้นแต่ทนได้ พูดสื่อสารได้ ใจไม่สั่น</Text>
//         else if (value >= 12 && value <= 13)
//             return <Text style={styles.descriptionText}>เหนื่อย หายใจเร็ว พูดได้เป็นคำๆ ต้องหยุดพัก  </Text>
//         else
//             return <Text style={styles.descriptionText}>เหนื่อยจนหอบ พูดไม่ไหว ใจสั่น                           </Text>
//     }

//     _renderImage = () => {
//         let value

//         (this.props.borg) ? value = this.props.borg : value = this.state.borg
//         if (value >= 6 && value <= 8)
//             return <Image source={require('../../assets/images/borg_great.png')} style={styles.image} />
//         else if (value === 9)
//             return <Image source={require('../../assets/images/borg_good.png')} style={styles.image} />
//         else if (value >= 10 && value <= 11)
//             return <Image source={require('../../assets/images/borg_normal.png')} style={styles.image} />
//         else if (value >= 12 && value <= 13)
//             return <Image source={require('../../assets/images/borg_tired.png')} style={styles.image} />
//         else
//             return <Image source={require('../../assets/images/borg_bad.png')} style={styles.image} />
//     }

//     render() {
//         return (
//             <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginVertical: 15, marginHorizontal: 20 }}>
//                 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//                     <View style={{ marginRight: 120, flex: 1 }}>
//                         {this.renderImage()}
//                         <View>
//                             <Slider
//                                 value={this.props.borg ? this.props.borg : this.state.borg}
//                                 onValueChange={(borg) => this.setState({ borg })}
//                                 minimumValue={6}
//                                 maximumValue={20}
//                                 step={1}
//                                 thumbTintColor={common.primaryColor}
//                                 minimumTrackTintColor={common.primaryColor} />
//                         </View>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                             <Text style={{ fontSize: 19 }}>Borg scale: {this.props.borg ? this.props.borg : this.state.borg}</Text>
//                         </View>
//                     </View>
//                     <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 120 }}>
//                         {this.renderDescription()}
//                         <Icon
//                             raised
//                             reverse
//                             name='ios-arrow-forward'
//                             type='ionicon'
//                             color={common.accentColor} size={35}
//                             onPress={this.onForward}
//                             containerStyle={{ alignSelf: 'flex-end', marginTop: 30 }}
//                         />
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = {
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignSelf: 'stretch',
//         padding: 20,

//     },
//     button: {
//         backgroundColor: '#FFFDF9',
//         borderColor: common.primaryColor,
//         borderWidth: 3,
//         borderRadius: 8,
//         marginHorizontal: 10,
//         marginVertical: 10,
//         paddingHorizontal: 10,
//         alignSelf: 'stretch',
//         justifyContent: 'center',
//     },
//     image: {
//         resizeMode: 'contain',
//         margin: 12,
//         height: 100,
//         width: 100,
//         alignSelf: 'center',
//     },
//     text: {
//         fontSize: 20,
//         color: common.grey,
//         textAlign: 'center',
//     },
//     descriptionText: {
//         fontSize: 20,
//         color: common.grey,
//         textAlign: 'center',
//         marginTop: 30
//     }
// }