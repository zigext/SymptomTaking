import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import ImageResizer from 'react-native-image-resizer'

const imageOptions = {
    title: 'Choose a photo',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
}

var { width } = Dimensions.get('window')

export default class AnswerTakePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            path: '',
            filename: '',
            timestamp: '',
        }
    }

    //KOPAI: 
    _onPress = async () => {
        ImagePicker.showImagePicker(imageOptions, response => {
            if (response.didCancel) {
                
            } else if (response.error) {
                
            } else if (response.customButton) {
        
            } else {
                let imageSource = { uri: 'data:image/jpeg;base64,' + response.data }
                let imageUri = response.uri + ''
                let filename = response.fileName + ''
                let timestamp = response.timestamp + ''
                ImageResizer.createResizedImage(imageUri, 328, 495, 'JPEG', 60).then(async response => {
                    let path = response.path + ''
                    await this.setState({ path, filename, timestamp })
                    this.setState({ imageSource: imageUri })
                })
                    .then(() => {
                        this.props._setCurrentPatientAnswer(this.props.answer)
                        this.props._setImage(this.state.path, this.state.filename, this.state.timestamp)
                    })
                    .catch(err => {
                        Alert.alert('ผิดพลาด! ไม่สามารถเลือกรูปภาพ')
                    })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Image source={require('../assets/images/borg_great.png')} resizeMode = 'cover' style={{flex: 1, alignSelf: 'center', overflow: 'visible', margin: 10}} />*/}
                <Image source={{ uri: this.state.imageSource }} style={styles.image} resizeMode='cover'></Image>
                <Button
                    title="เลือกรูปภาพ"
                    onPress={this._onPress}
                    buttonStyle={styles.button}
                    fontFamily="Kanit-Regular"
                    rounded
                    raised
                    color="#FFFFFF"
                    backgroundColor="#9CD8B9"
                />

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    button: {
        margin: 3,
        flex: 1,
        borderWidth: 2,
        borderColor: '#9CD8B9'
    },
    image: {
        // height: 300,
        // width: width * 0.5,
        margin: 20,
        alignSelf: 'center',
        // overflow: 'visible',
        // flex: 1,
        height: 300,
        width: '100%'
    }
}