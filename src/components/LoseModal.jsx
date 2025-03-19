import React from 'react';
import {
    View,
    Text,
    Modal,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import loseImage from '../assets/win/lose.png';
import sadMan from '../assets/win/sadMan.png';

export default function LoseModal({
    visible,
    onRetry,
    onMenuPress,
}) {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Image source={loseImage} style={styles.loseImage} />

                    <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
                        <Text style={styles.retryButtonText}>Retry?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
                        <Text style={styles.menuButtonText}>Go to menu</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={sadMan} style={styles.modalMan} />
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 346,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingVertical: 34,
    },
    loseImage: {
        marginBottom: 16,
        resizeMode: 'contain',
    },
    retryButton: {
        width: 141,
        height: 39,
        borderRadius: 15,
        backgroundColor: '#410563',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 23,
    },
    retryButtonText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 15,
        color: '#FFFFFF',
    },
    menuButton: {
        width: 175,
        height: 39,
        borderRadius: 15,
        backgroundColor: '#410563',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButtonText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 15,
        color: '#FFFFFF',
    },
    modalMan: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        resizeMode: 'contain',
        zIndex: 5,
    },
});
