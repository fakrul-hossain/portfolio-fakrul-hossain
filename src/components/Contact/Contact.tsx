import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:Hello@dev.fakrulhossain@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:dev.fakrulhossain@gmail.com
">dev.fakrulhossain@gmail.com
          </a>
        </div>
        <div>
        <a href="tel:+1795624169"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+1795624169">(+880) 1795624169</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}