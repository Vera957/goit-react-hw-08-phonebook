import { useAuth } from "hooks/AuthHook";

export const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>
                Contacts manager welcome {user&&user.name}
              </h1>
        </div>
    );
}