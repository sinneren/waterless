import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import history from "../history";

export default class NewsEdit extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleCancel(event) {
        event.preventDefault();
        history.push('/news/' + this.props.details._id);
    }
    render() {
        return (
            <>
                <Formik
                    initialValues={{
                        title: this.props.details.title,
                        content: this.props.details.content,
                    }}
                    validate={values => {
                        let errors = {};
                        if (!values.title && values.title.length < 1) {
                            errors.title = 'Обязательное поле и должно быть более 1 символов';
                        }
                        if (!values.content && values.content.length < 1) {
                            errors.content = 'Обязательное поле и должно быть более 1 символов';
                        }
                       
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, setErrors }) => {
                        this.props.saveAction(values, () => {
                            setSubmitting(false);
                        });
                    }}
                >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <label>Заголовок</label>
                            <Field
                                type="text"
                                name="title"
                                className="input"
                                value={values.title} 
                            />
                            <ErrorMessage name="title" />
                            <p>&nbsp;</p>
                            <label>Пароль</label>
                            <Field
                                type="textarea"
                                name="content"
                                className="textarea"
                                value={values.content}
                            />
                            <ErrorMessage name="content" />
                            <div className="buttons">
                                <button type="submit" className="btn btn-success" disabled={isSubmitting}>Сохранить</button>
                                <button disabled={isSubmitting} className="btn btn-secondary" onClick={this.handleCancel}>Отмена</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </>
        )
    }
}
