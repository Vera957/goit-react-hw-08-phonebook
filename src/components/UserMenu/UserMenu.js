import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/AuthHook';
import { logOut } from 'redux/auth/operations';
import { Button, Flex } from '@chakra-ui/react';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Flex align='center' justify='space-between' bg='whiteAlpha.500' p={2}>
            <p>Welcome, {user.name}</p>
            <Button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </Flex>
    );
};