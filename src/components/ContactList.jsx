import React from "react";
import { ListItem } from "style/style";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "redux/operations";
import { selectContactsArr, selectFilter } from "redux/selectors";
import { Button } from '@chakra-ui/react';


export const ContactList = ({ children }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contactsList = useSelector(selectContactsArr);
    const que = useSelector(selectFilter);
    let filteredList = null;

    if (contactsList) {
        filteredList = que ? contactsList.filter(item =>
            item.name.toLowerCase().includes(que)) :
            contactsList;
    }

    return (
        <>
            <h2>Contacts</h2>
            {children}
            <ul>
                {filteredList.map((item) =>
                    <ListItem key={item.name}> {item.name}: {item.number}
                        <Button type="button"
                            id={item.id}
                            onClick={() => dispatch(deleteContact(item.id))}>
                            Delete
                        </Button>
                    </ListItem>)}
            </ul>
        </>
    )
}


