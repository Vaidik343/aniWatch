
import Animated, {
    FadeIn,
    FadeOut,
    SlideInRight,
    SlideOutLeft
} from "react-native-reanimated";

export default function AnimatedScreenWrapper({children, type = "slide"})
{

const entering = 
   type === "fade" ? FadeIn.duration(300) : SlideInRight.duration(300);

const exiting = 
   type === "fade" ? FadeOut.duration(300) : SlideOutLeft.duration(300);


return (
    <Animated.View
    entering={entering}
    exiting={exiting}
    className="flex-1 bg-[#0f0D23]"
    
    >
        {children}

    </Animated.View>
)
}