import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DressItem = ({ item }) => {
    return (
        <View>
            <Pressable style={{
                backgroundColor:"#F8F8F8",
                borderRadius: 8,
                padding:10,
                flexDirection:"row",
                alignItems: "center",
                justifyContent:"space-between",
                margin:14
            }}>
                <View>
                    <Image style={{width:70,height:70}} source={{uri: item.image}}/>
                </View>

                <View>

                </View>

                <Pressable>

                </Pressable>
            </Pressable>

        </View>
    )
}

export default DressItem

const styles = StyleSheet.create({})