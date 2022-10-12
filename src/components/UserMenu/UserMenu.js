import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/AuthHook';
import { logOut } from 'redux/auth/operations';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <Button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </div>
    );
};