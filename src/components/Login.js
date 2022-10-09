import { Form, Formik, ErrorMessage, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";


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

                <Field type="email" name="email" id='newUserEmail' placeholder="email"></Field>
                <ErrorMessage name="email" />

                <Field type="tel" name="password" id='newUserPassword' placeholder="password"></Field>
                <ErrorMessage name='password' />

                <button type='submit'>Login</button>
            </Form>
        </Formik>
    </>)
}