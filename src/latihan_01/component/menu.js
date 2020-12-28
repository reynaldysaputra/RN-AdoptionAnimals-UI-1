import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native';
import style from '../style/style';
import Icon from 'react-native-vector-icons/Entypo';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import SettingSearch from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';

function Menu_App() {
    return(
        <>
        {/* -- Menu -- */}
            <View style={style.menu}>
                {/* Sidebar Left Menu  */}
                <View style={style.sidebarLeftMenu}>
                    <View style={style.menuIcon}></View>
                    <View style={[style.menuIcon, {width:25}]}></View>
                    <View style={style.menuIcon}></View>
                </View>
                {/*  Center Menu */}
                <View style={style.centerMenu}>
                    <Text style={style.contentMenuLocation}>Location</Text>
                    <View style={style.contentMenuLocationMap}>
                        <Icon name={'location-pin'} size={25} color='#386565' />   
                        <Text style={style.contentMenuLocationText1}>
                            <Text style={style.contentMenuLocationText2}>Jakarta, </Text>
                            Indonesia
                        </Text>        
                    </View>   
                </View>
                {/* Sidebar Right Menu */}
                <View style={style.profileMenu}>
                    <Image 
                        source={require('../img/me.jpg')} 
                        style={{width:'auto', height:45, borderRadius:50}} />
                </View>
            </View>

            {/* -- Content -- */}
            <ScrollView style={style.scrollContent} showsVerticalScrollIndicator={true}>
                <View style={style.contentContainer}>
                    {/* Input Text */}
                    <View style={style.inputContainer}>
                        <View style={style.boxInput}>
                            <SearchIcon name={'search1'} size={20} color='#D2D2D2' />
                            <TextInput placeholder='Search pet to adapt' style={style.textInputPet}/>
                        </View>
                        <View style={style.boxInput}>
                            <SettingSearch name={'settings'} size={20} color='#D2D2D2' />
                        </View>
                    </View>

                    {/* Pet Menu */}
                    <ScrollView style={style.scrollMenuPet} showsHorizontalScrollIndicator={false} horizontal={true}>
                        <View style={style.boxMenuPet}>
                            <View style={[style.headerImgMenuPet, {backgroundColor:'#386565'}]}>
                                <FontAwesome5 name={'cat'} color='white' size={45}/>
                            </View>
                            <Text style={style.textMenuPet}>Cats</Text>
                        </View>
                        <View style={style.boxMenuPet}>
                            <View style={style.headerImgMenuPet}>
                                <FontAwesome5 name={'dog'} color='#386565' size={45}/>
                            </View>
                            <Text style={style.textMenuPet}>Dogs</Text>
                        </View>
                        <View style={style.boxMenuPet}>
                            <View style={style.headerImgMenuPet}>
                                <FontAwesome5 name={'kiwi-bird'} color='#386565' size={45}/>
                            </View>
                            <Text style={style.textMenuPet}>Bird</Text>
                        </View>
                        <View style={style.boxMenuPet}>
                            <View style={style.headerImgMenuPet}>
                                <MaterialCommunityIcons name={'rabbit'} color='#386565' size={45}/>
                            </View>
                            <Text style={style.textMenuPet}>Rabbit</Text>
                        </View>
                        <View style={style.boxMenuPet}></View>
                    </ScrollView>   
                    
                    {/* Pet Content */}
                    <View style={{marginTop:5}}>
                        <View style={style.containerPet}>
                            <View style={[style.headerPetImage, {backgroundColor:'#EDD6B4'}]}>
                                <Image source={require('../img/cat2.png')} style={style.imagePet} />
                            </View>
                            <View style={style.contentPet}>
                                <View style={style.headerContentPet}>
                                    <Text style={style.textHeaderContentPet}>Miaw</Text>
                                    <Foundation name={'female-symbol'} size={25} color='#D2D2D2' />
                                </View>
                                <Text style={style.typeCatText}>Normal Cat</Text>
                                <Text style={style.oldCatText}>3 years old</Text>
                                <View style={style.footerContentPet}>
                                    <Icon name={'location-pin'} size={20} color='#386565'/>   
                                    <Text style={style.distancePetText}>Distance: 3.6 km</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.containerPet}>
                            <View style={[style.headerPetImage, {backgroundColor:'#CCD6D9'}]}>
                                <Image source={require('../img/cat1.png')} style={style.imagePet} />
                            </View>
                            <View style={style.contentPet}>
                                <View style={style.headerContentPet}>
                                    <Text style={style.textHeaderContentPet}>Jacky</Text>
                                    <Foundation name={'female-symbol'} size={25} color='#D2D2D2' />
                                </View>
                                <Text style={style.typeCatText}>Anggora Cat</Text>
                                <Text style={style.oldCatText}>2 years old</Text>
                                <View style={style.footerContentPet}>
                                    <Icon name={'location-pin'} size={20} color='#386565'/>   
                                    <Text style={style.distancePetText}>Distance: 3.6 km</Text>
                                </View>
                            </View>
                        </View>
                    </View> 
                </View>
            </ScrollView>
        </>
    )
}

export default Menu_App;