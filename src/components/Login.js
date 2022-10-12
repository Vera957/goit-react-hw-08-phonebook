import { Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { StyledField, Button } from 'style/style';


export const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(
            logIn({
                email: values.email,
                password: values.password,
            })
        );
    };
    return (<>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit} /* validationSchema={shemaContactsForm}*/>
            <Form>

                <StyledField type="email" name="email" id='newUserEmail' placeholder="email"></StyledField>
                <ErrorMessage name="email" />

                <StyledField type="tel" name="password" id='newUserPassword' placeholder="password"></StyledField>
                <ErrorMessage name='password' />

                <Button type='submit'>Login</Button>
            </Form>
        </Formik>
    </>)
}