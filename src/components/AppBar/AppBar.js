import { useAuth } from "hooks/AuthHook";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header >
            <Navigation /> {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};