import { Image, StyleSheet, View, Platform} from 'react-native';
import theme from '../theme';
import StyledText from './StyledText';

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
    <View style={{flexDirection: 'row', paddingBottom: 2}}>
        <View style={{ paddingRight:10}}>       
             <Image style={styles.images} source={{uri: ownerAvatarUrl}}/>
        </View>
        <View style={{flex:1}}>
            <StyledText fontWeight='bold'>{fullName}</StyledText>
            <StyledText color='secondary'>{description}</StyledText>
            <StyledText style={styles.language} >{language}</StyledText>
        </View>
    </View>
);

const styles = StyleSheet.create({
    language:
    {
        padding:4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: 'green',
            ios: '#09f',
            default: 'green'
        }),
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 5,
        overflow: 'hidden'
    },
    images:{
        width: 48,
        height: 48,
        borderRadius: 4
    }

});

export default RepositoryItemHeader;