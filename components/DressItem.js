import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DressItem = ({ item }) => {
    return (
        <View>
            <Pressable style={{
                backgroundColor: "#F8F8F8",
                borderRadius: 8,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 14
            }}>
                <View>
                    <Image style={{ width: 70, height: 70 }} source={{ uri: item.image }} />
                </View>

                <View>

                    <Text style={{width: 83,fontSize:17,fontWeight:"500",marginBottom:7}}>{item.name}</Text>
                    <Text style={{width:60,color:"gray",fontSize:15}}>₹{item.price}</Text>

                </View>

                <Pressable style={{width: 80}}>
                    <Text style={{
                        borderColor: "gray",
                        borderWidth: 0.8,
                        borderRadius: 4,
                        marginVertical: 10,
                        color: "#088FBF",
                        textAlign: "center",
                        padding: 5,
                        fontSize:17,
                        fontWeight: "bold",
                    }}>Add</Text>
                </Pressable>
            </Pressable>

        </View>
    )
}

export default DressItem

const styles = StyleSheet.create({})