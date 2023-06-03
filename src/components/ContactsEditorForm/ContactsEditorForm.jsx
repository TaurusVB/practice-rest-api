import { Form, Formik, Field } from 'formik';

export const ContactsEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', email: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name
            <Field type="text" name="name" placeholder="Name" />
          </label>
          <br />
          <label>
            Email
            <Field type="email" name="email" placeholder="Email" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
