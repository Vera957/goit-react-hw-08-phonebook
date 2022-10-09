import { Form, Formik, ErrorMessage, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/auth/operations";
import { selectIsLoggedIn } from "redux/selectors";

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
                    <Field type="text" name="name" id="newUserName" placeholder='name'></Field>
                    <ErrorMessage name="name" />

                    <Field type="email" name="email" id='newUserEmail' placeholder="email"></Field>
                    <ErrorMessage name="email" />

                    <Field type="password" name="password" id='newUserPassword' placeholder="password"></Field>
                    <ErrorMessage name='password' />

                    <button type='submit'>Register</button>
                </Form>
            </Formik>)}
    </>)
}
