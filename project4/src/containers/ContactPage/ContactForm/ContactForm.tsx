import { Field, Form, FormikProps, withFormik } from 'formik';
import { PropsWithChildren } from 'react';
import * as Yup from 'yup';

type ContactFormProps = {}

type FormValues = {
  name: string,
  email: string,
  message: string,
}

const InnerForm = (props: (PropsWithChildren<ContactFormProps>) & FormikProps<FormValues>) => {
  const { touched, errors } = props;
  return <>
    <Form>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Votre nom</label>
        <Field type="text" className="form-control" id="inputName"
        name={"name"}/>
        {touched.name && errors.name && <div>{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Votre adresse email :</label>
        <Field type="email" className="form-control" id="inputEmail" name={"email"}/>
        <div id="emailHelp" className="form-text">Nous ne transmettrons votre adresse email à personne.</div>
        {touched.email && errors.email && <div>{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label className="form-check-label" htmlFor="inputMessage">Votre message</label>
        <Field type={"textarea"} className="form-control" id="inputMessage" name={"message"}/>
        {touched.message && errors.message && <div>{errors.message}</div>}
      </div>
      <button type={'submit'} disabled={!!(errors.email || errors.name || errors.message)} className="btn btn-primary">Envoyer</button>
    </Form>
  </>;
};

const ContactForm = withFormik<ContactFormProps, FormValues>({
  mapPropsToValues: (_) => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, "Le nom doit faire au minimum 3 caractères"),
    email: Yup.string().email("Le champ email est invalide"),
    message: Yup.string()
      .min(10, "Le message doit être long d'au moins 10 caractères")
      .max(50, "Le message ne doit pas dépasser 50 caractères"),
  }),
  handleSubmit: (values, {props}) => {
    console.log({ values, props });
    alert("Message envoyé");
  }
})(InnerForm);

export default ContactForm
