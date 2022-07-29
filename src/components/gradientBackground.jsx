
import {motion, useAnimation} from "framer-motion"
import { Container, Box} from "@chakra-ui/react";




const GradientBackGround = ()=>{
    const control = useAnimation()

return(

    <Container classname= "back-container"
    onChange={()=> control.start({


    }
       )}>

    <motion.Box
    classname= "BackBox"
    animate={control}
    >

    


    </motion.Box>
    </Container>


)
};
export default GradientBackGround

