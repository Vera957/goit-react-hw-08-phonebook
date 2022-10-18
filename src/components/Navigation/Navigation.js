import { useAuth } from "hooks/AuthHook";
import { StyledNavLink } from 'style/style';
import { Box } from "@chakra-ui/react";


export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (<Box spacing='24px'>
        
        {isLoggedIn ? (<>
            <StyledNavLink to="/contacts">
            Contacts
            </StyledNavLink>
        </>) : <StyledNavLink to="/" color="black">
            Home
        </StyledNavLink>}
    </Box>

    );
};