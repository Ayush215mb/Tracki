import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

const ErrorNotification = (
    {
        title ,
        description,
        onClose
    }:{
        title?:string;
        description?:string;
        onClose?:()=>void;
    }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        // Slide in and fade in animation
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.spring(slideAnim, {
                toValue: 0,
                tension: 50,
                friction: 8,
                useNativeDriver: true,
            }),
        ]).start();

        // Auto dismiss after 3 seconds
        const timer = setTimeout(() => {
            handleClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: -100,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            onClose && onClose();
        });
    };

    return (
        <Animated.View
            style={{
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
            }}
            className="absolute top-12 left-4 right-4 z-50"
        >
            <View className="bg-rose-50 border-l-4 border-rose-500 rounded-2xl shadow-2xl p-5 flex-row items-start justify-between">
                {/* Content Container */}
                <View className="flex-1 pr-3">
                    {/* Error Icon & Heading */}
                    <View className="flex-row items-center mb-2">
                        <View className="w-6 h-6 bg-rose-500 rounded-full items-center justify-center mr-2">
                            <Text className="text-white font-bold text-xs">!</Text>
                        </View>
                        <Text className="text-rose-900 font-bold text-lg tracking-tight">
                            {title}
                        </Text>
                    </View>

                    {/* Description */}
                    <Text className="text-rose-700 text-sm leading-5 ml-8">
                        {description}
                    </Text>
                </View>

                {/* Close Button */}
                <TouchableOpacity
                    onPress={handleClose}
                    className="w-8 h-8 bg-rose-100 rounded-full items-center justify-center active:bg-rose-200"
                    activeOpacity={0.7}
                >
                    <Text className="text-rose-600 font-bold text-lg">×</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

export default ErrorNotification;