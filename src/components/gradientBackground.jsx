<<<<<<< HEAD

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
=======
import {animate,motion} from "framer-motion"
import { Container,} from "@chakra-ui/react";

const gradientBackground = ()=> {

    return (
<Container>
    <motion.div>
        
    </motion.div>
</Container>

    );

};

export default gradientBackground
>>>>>>> c40df8a225051a7e9167ae97db9a41c900b28958
