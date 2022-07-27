import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:"row",
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    inner_container:{
      padding:10,
      flex:1,
      
    },
    title:{
        fontWeight:"bold",
        fontSize:26,
        color: colors.songCardTitle,
    },
    info_container:{
        flexDirection:"row",
        alignItems:"center",
        flex:1,
        
    },
    year:{
        fontSize:12,
        color:colors.songCardYear,
        marginLeft:10,
        fontWeight:'600',
        
    },
    soldout_container:{
        padding:5,
        borderColor: colors.songCardSoldoutBorder,
        borderWidth:1,
        borderRadius:5,
        marginLeft:'auto',
    },
    soldout_title:{
        color: colors.songCardSoldoutText,
        fontSize:12,
        
    },
    content_container:{
        flexDirection:"row",

    },
})