import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup';
import { StyledField } from "style/style";
import s from './FormikContactForm.module.css';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/operations";
import { selectContactsArr } from "redux/selectors";
import { Button, Text, chakra } from '@chakra-ui/react';
import { StyledFormFormik } from "style/style";


export const FormikContactForm = () => {
    const patternName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    const titleName = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
    const patternNumber = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    const titleNumber = 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
    const initialValues = { name: '', number: '' };
    const shemaContactsForm = yup.object().shape({
        name: yup.string().matches(patternName, titleName).required().min(2).max(16),
        number: yup.string().matches(patternNumber, titleNumber).min(10).max(15).required(),
    })
    const dispatch = useDispatch();
    const contacts = useSelector(selectContactsArr);

    const getValues = (values, { resetForm }) => {

        const noPass = contacts.filter(item => item.name.toLowerCase() === values.name.toLowerCase());
        if (noPass.length < 1) {
            dispatch(addContact(values));
            resetForm();
        } else alert(`${values.name} alredy in contacts.`)
    }

    return (<>
        <Text textAlign={['center']} fontSize={32}>Phonebook</Text>
        <Formik initialValues={initialValues} onSubmit={getValues} validationSchema={shemaContactsForm}>
            <StyledFormFormik>
                <chakra.label fontSize={17} htmlFor="Name" className={s.labelFormik}>Name
                    <StyledField className={s.fieldFormik} type="text" name="name" id="contactInListName" ></StyledField>
                </chakra.label>
                <ErrorMessage color='red' name="name" />
                <chakra.label fontSize={17} htmlFor="Number" className={s.labelFormik}>Number
                    <StyledField className={s.fieldFormik} type="tel" name="number" id='numberInListName' placeholder=""></StyledField>
                </chakra.label>
                <ErrorMessage name="number" />
                <Button type='submit' ml='auto'>Add contact</Button>
            </StyledFormFormik>
        </Formik>
    </>)
}

FormikContactForm.propTypes = {
    onNewVal: propTypes.func,
}
