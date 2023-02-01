import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import { i18n } from "../translate/i18n";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  
  const [yname, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [buttonText, setButtonText] = useState(i18n.t('contact.send'))

  

  function sendEmail(e){
    e.preventDefault();
    setButtonText(i18n.t('contact.send'));
    if(yname === '' || email === '' || message === '' || phone === ''){
      alert(i18n.t('contact.alerFil'))
      return;
    }

    const templateParams = {
      from_name: yname,
      message: message,
      email: email,
      phone: phone
    }
    emailjs.send("service_odjn8o7", "template_a2g7rua", templateParams, "heoWChdCF9lBFH5bc")
    .then((response) => {
      console.log("SENT EMAIL", response.status, response.text)
      setName('');
      setEmail('');
      setMessage('');
      setPhone(''); 

    }, (err) => {
      console.log("Failed: ", err)
    })

  }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{i18n.t('contact.Title')}</h2>
                <form onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={yname} placeholder={i18n.t('contact.name')} onChange={(e) => setName(e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={email} placeholder={i18n.t('contact.email')}  onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={phone} placeholder={i18n.t('contact.phone')} onChange={(e) => setPhone(e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={message} placeholder={i18n.t('contact.message')} onChange={(e) => setMessage(e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}