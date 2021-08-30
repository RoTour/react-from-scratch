import { FC } from 'react';
import Title from '../../components/Title/Title';
import { Route, RouteComponentProps } from "react-router-dom";
import ContactForm from './ContactForm/ContactForm';

type ContactPageProps = {
}

const ContactPage: FC<RouteComponentProps<ContactPageProps>> = (props) => {
  return <div className={"container"}>
    <Title className={"mt-2"}>Contactez-nous !</Title>
    <h1>Adresse</h1>
    <div>xxxxxxxxxxxxxxxxxxxxx</div>
    <h1>Téléphone</h1>
    <div>00 00 00 00 00</div>
    <h1>Vous préférez nous écrire ?</h1>
    <button onClick={() => props.history.push(`${props.match.path}/form`)} className={"btn btn-success"}>Formulaire de contact</button>
    <Route path={`${props.match.url}/form`}
           render={() => <div className={"col-6 mt-5"}><ContactForm /></div>}
    />
  </div>;
};

export default ContactPage;
