import { UsersContextProvider } from '../../../context/users-context/users-context';
import CardsContact from './cards-contact-component';
import './contact.css';

 function Contact() {
  return (
<UsersContextProvider>
  <h1>keren</h1>
  <CardsContact/>
</UsersContextProvider>
    )
}
export default Contact;