import React, { Component } from 'react';
import { Formik } from 'formik';
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
                        let errors= {};
                        if (!values.title) {
                            errors.title = 'Обязательное поле';
                        }
                        if (!values.content) {
                            errors.content = 'Обязательное поле';
                        }
                    }}
                    onSubmit={(values, { setSubmitting }) => {
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
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="title" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title} 
                            />
                            {errors.title && touched.title && errors.title}
                            <textarea 
                                name="content"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.content}
                            />
                            {errors.content && touched.content && errors.content}
                            <button type="submit" disabled={isSubmitting}>Сохранить</button>
                            <button disabled={isSubmitting} onClick={this.handleCancel}>Отмена</button>
                        </form>
                    )
                }
                </Formik>
            </>
        )
    }
}
