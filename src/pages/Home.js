import { useAuth } from "hooks/AuthHook";
import { Box, chakra } from "@chakra-ui/react"

export const Home = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <Box h='100vh'>
            {user.name ? (<chakra.h1 fontSize={20}> Welcome, {user && user.name}</chakra.h1>) :
                <chakra.h1 fontSize={20} textAlign={['center']}>Please, register or log in to use app</chakra.h1>
              }
        </Box>
    );
}