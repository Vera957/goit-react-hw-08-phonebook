import { Form, Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/auth/operations";
import { selectIsLoggedIn } from "redux/selectors";
import { StyledField, Button } from 'style/style';

export const UserRegistration = () => {
    const logined = useSelector(selectIsLoggedIn)

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(
            register({
                name: values.name,
                email: values.email,
                password: values.password,
            })
        );
        resetForm();
    };

    return (<>
        {!logined && (
            <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit} /*validationSchema={shemaContactsForm}*/>
                <Form>
                    <StyledField autoComplete='off' type="text" name="name" id="newUserName" placeholder='name'></StyledField>
                    <ErrorMessage name="name" />

                    <StyledField autoComplete='off' type="email" name="email" id='newUserEmail' placeholder="email"></StyledField>
                    <ErrorMessage name="email" />

                    <StyledField autoComplete='off' type="password" name="password" id='newUserPassword' placeholder="password"></StyledField>
                    <ErrorMessage name='password' />

                    <Button type='submit'>Register</Button>
                </Form>
            </Formik>)}
    </>)
}
