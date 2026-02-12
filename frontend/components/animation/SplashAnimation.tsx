import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    withDelay,
    Easing,
    runOnJS,
} from 'react-native-reanimated';

interface SplashAnimationProps {
    onAnimationComplete?: () => void;
}

const SplashAnimation: React.FC<SplashAnimationProps> = ({ onAnimationComplete }) => {
    // Shared values for animations
    const scale1 = useSharedValue(0);
    const scale2 = useSharedValue(0);
    const scale3 = useSharedValue(0);
    const rotation = useSharedValue(0);
    const opacity = useSharedValue(1);
    const translateY = useSharedValue(0);

    useEffect(() => {
        // Sequence of animations
        // First shape appears with spring
        scale1.value = withSpring(1, {
            damping: 8,
            stiffness: 100,
        });

        // Second shape appears delayed
        scale2.value = withDelay(
            400,
            withSpring(1, {
                damping: 10,
                stiffness: 120,
            })
        );

        // Third shape appears delayed
        scale3.value = withDelay(
            800,
            withSpring(1, {
                damping: 12,
                stiffness: 140,
            })
        );

        // Rotation animation
        rotation.value = withDelay(
            1200,
            withTiming(360, {
                duration: 1000,
                easing: Easing.bezier(0.33, 1, 0.68, 1),
            })
        );

        // Final fade out and transition
        opacity.value = withDelay(
            2800,
            withTiming(
                0,
                {
                    duration: 600,
                    easing: Easing.ease,
                },
                (finished) => {
                    if (finished && onAnimationComplete) {
                        runOnJS(onAnimationComplete)();
                    }
                }
            )
        );

        translateY.value = withDelay(
            2800,
            withTiming(-30, {
                duration: 600,
                easing: Easing.ease,
            })
        );
    }, []);

    // Animated styles for each shape
    const shape1Style = useAnimatedStyle(() => ({
        transform: [
            { scale: scale1.value },
            { rotate: `${rotation.value * 0.5}deg` },
        ],
        opacity: opacity.value,
    }));

    const shape2Style = useAnimatedStyle(() => ({
        transform: [
            { scale: scale2.value },
            { rotate: `${-rotation.value * 0.7}deg` },
        ],
        opacity: opacity.value,
    }));

    const shape3Style = useAnimatedStyle(() => ({
        transform: [
            { scale: scale3.value },
            { rotate: `${rotation.value}deg` },
        ],
        opacity: opacity.value,
    }));

    const containerStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value,
    }));

    return (
        <View className="flex-1 bg-[#0a0e27] justify-center items-center">
            <Animated.View style={containerStyle} className="w-[200px] h-[200px] justify-center items-center">
                {/* First shape - Circle */}
                <Animated.View
                    style={shape1Style}
                    className="absolute w-[120px] h-[120px] rounded-full bg-[#6366f1] shadow-lg shadow-[#6366f1]"
                />

                {/* Second shape - Square */}
                <Animated.View
                    style={[shape2Style, { transform: [{ rotate: '45deg' }] }]}
                    className="absolute w-[100px] h-[100px] bg-[#ec4899] rounded-[20px] shadow-md shadow-[#ec4899]"
                />

                {/* Third shape - Triangle */}
                <Animated.View
                    style={shape3Style}
                    className="absolute w-0 h-0 border-l-[50px] border-r-[50px] border-b-[87px] border-l-transparent border-r-transparent border-b-[#22d3ee]"
                />
            </Animated.View>
        </View>
    );
};

export default SplashAnimation;