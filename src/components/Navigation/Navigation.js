import { useAuth } from "hooks/AuthHook";
import { StyledNavLink } from 'style/style';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <StyledNavLink  to="/">
                Home
            </StyledNavLink>
            {isLoggedIn && (
                <StyledNavLink  to="/contacts">
                    Contacts
                </StyledNavLink>
            )}
        </nav>
    );
};