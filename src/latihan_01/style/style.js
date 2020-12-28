import React from 'react'
import { StyleSheet } from 'react-native'

const colorMenu = '#676767';

const style = StyleSheet.create({
    menu : {
        width : '100%',
        height: 100,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection : 'row',
        paddingHorizontal:30
    },
    sidebarLeftMenu : {
        height:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    menuIcon : {
        width: 16,
        height : 3,
        backgroundColor : '#6A6B6C',
        marginBottom : 5,
    },
    centerMenu : {
        display : 'flex',
        justifyContent : 'center',
        alignItems:'center'
    },
    contentMenuLocation : {
        fontSize : 18,
        color : '#D2D2D2'
    },
    contentMenuLocationMap : {
        display:'flex',
        flexDirection:'row',
        marginTop:0,
        alignItems:'center',
    },
    contentMenuLocationText1 : {
        color : colorMenu,
    },
    contentMenuLocationText2 : {
        fontSize: 18,
        fontWeight:'bold',
        color: colorMenu
    },
    profileMenu : {
        width:45,
        height:'100%',
        display:'flex',
        justifyContent:"center"
    },
    scrollContent : {
        width:'100%',
        height:'auto',
        backgroundColor : '#F6F6F6',
        borderTopRightRadius : 30,
        borderTopLeftRadius : 30,
        marginTop : 5,
    },
    contentContainer : {
        width:'100%',
        paddingBottom:150,
        display:'flex',
        alignItems:'center',
        marginTop : 30
    },
    inputContainer : {
        width:'90%',
        height : 50,
        backgroundColor:'white',
        borderRadius : 20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    boxInput : {
        borderRadius : 20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal : 5
    },
    textInputPet : {
        width:'80%',
        marginLeft : 10,
        fontSize:16,
        color: colorMenu,
        fontWeight:'bold'
    },
    scrollMenuPet : {
        marginLeft : 50,
        marginTop : 30,
        width:'100%',
        display:'flex',
        flexDirection : 'row',
    },
    boxMenuPet : {
        width:'auto',
        marginRight:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    headerImgMenuPet : {
        width:'auto',
        backgroundColor:'white',
        borderRadius:15,
        paddingVertical:15,
        paddingHorizontal:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        elevation : 1
    },
    textMenuPet :{
        fontSize : 17,
        color : colorMenu,
        marginTop :12,
        fontWeight:'bold'
    },
    containerPet : {
        width:'95%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop : 60,
        marginLeft:-10
    },
    headerPetImage : {
        width:180,
        height : 170,
        position:'relative',
        borderRadius:25,
        display:'flex',
        alignItems:'center',
    },
    imagePet : {
        width:'90%',
        height:200,
        marginTop:-40
    },  
    contentPet : {
        width:'43%',
        padding:20,
        paddingVertical:15,
        color : colorMenu,
        borderRadius:25,
        backgroundColor:'white',
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0
    },
    headerContentPet : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textHeaderContentPet : {
        fontWeight : 'bold',
        fontSize:18
    },
    typeCatText : {
        marginTop : 8,
        fontWeight:'bold',
        fontSize:13,
        opacity:0.5
    },
    oldCatText : {
        marginTop : 7,
        opacity : 0.3
    },
    footerContentPet : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop : 10,
        marginLeft:-5
    },
    distancePetText : {
        color:colorMenu,
        opacity:0.5
    }
});

export default style;

