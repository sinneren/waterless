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
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="title" 
                                className="input"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title} 
                            />
                            {errors.title}
                            <p>&nbsp;</p>
                            <textarea 
                                name="content"
                                className="textarea"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.content}
                            />
                            {errors.content}
                            <div className="buttons">
                                <button type="submit" className="btn btn-success" disabled={isSubmitting}>Сохранить</button>
                                <button disabled={isSubmitting} className="btn btn-secondary" onClick={this.handleCancel}>Отмена</button>
                            </div>
                        </form>
                    )
                }
                </Formik>
            </>
        )
    }
}
