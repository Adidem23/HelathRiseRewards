import '../Components/Connect.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Connect = () => {

    const form = useRef();

    const SubmitEmail = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2456tzr', 'template_afcuodo', form.current, 'HUvknbW91xc-zPo0s')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }


    return (
        <section className="connect-section">
            <h1 className="connect-heading">Connect with Us</h1>
            <p>Connect With Us By Joining Official Email</p>
            <form ref={form}>
                <div className="input-container">
                    <input type="text" placeholder="Add your xyz@gmail.com" />
                    <button className="button" onClick={SubmitEmail}>Connect</button>
                </div>
            </form>
        </section>
    );
};

export default Connect;
