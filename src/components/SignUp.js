import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = props => {
    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    recaptcha: '',
                }}
                validate={values => {
                    let errors = {};
                    if (!values.username && values.username.length > 2) {
                        errors.username = 'Обязательное поле и должно быть более 2 символов';
                    }
                    if (!values.password && values.password.length > 5) {
                        errors.password = 'Обязательное поле и должно быть более 6 символов';
                    }
                    if (!values.recaptcha) {
                        errors.recaptcha = 'Не валидна рекапча';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    props.saveAction(values, () => {
                        setSubmitting(false);
                    });
                }}
            >
                {
                    ({
                        errors,
                        touched,
                        setFieldValue,
                        handleSubmit,
                        isSubmitting,
                        validateForm,
                    }) => (
                            <Form onSubmit={handleSubmit}>
                                <label>Логин</label>
                                <Field
                                    type="text"
                                    name="username"
                                    className="input"
                                />
                                <ErrorMessage name="username" />
                                <p>&nbsp;</p>
                                <label>Пароль</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="input"
                                />
                                <ErrorMessage name="password" />
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA}
                                    onChange={(response) => { setFieldValue("recaptcha", response); }}
                                />
                                <ErrorMessage name="recaptcha" />
                                <div className="buttons">
                                    <button type="submit" className="btn btn-success" disabled={isSubmitting}>Зарегистрироваться</button>
                                </div>
                            </Form>
                        )
                }
            </Formik>
        </>
    )
}

export default SignUp;