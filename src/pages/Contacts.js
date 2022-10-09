import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading } from "../redux/selectors";
import { fetchContacts } from "redux/operations";
import { FormikContactForm } from "components/FormikContactForm/FormikContactForm";
import { Field2 } from "components/Filter2/Filter2";
import { ContactList } from "components/ContactList";

export const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <FormikContactForm></FormikContactForm>
            <div>{isLoading && 'Request in progress...'}</div>
            <Field2></Field2>
            <ContactList></ContactList>
        </>
    );
}