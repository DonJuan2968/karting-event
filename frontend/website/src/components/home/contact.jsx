// import modules
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

// import css
import './contact.css';

const Contact = () => {
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                controls.start("visible");
            }
            });
        },
        {
            threshold: 0.5,
        }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [controls]);

  return (
    <>
        {/* Title */}
        <motion.div className="title-container" id='Contact'
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
        }}
        transition={{ duration: 1 }}
        >
        <div className="first-title">
            <p>wil je contact opnemen?</p>
        </div>
        <div className="title-projects">
            <h2>Contact.</h2>
        </div>
        </motion.div>
        <div className="contact-center">
            <div className="contact-section">
                {/* Info Card */}
                <div className="info-card">
                    <h2>Info</h2>
                    <p>Email: justinrabeling@outlook.com</p>
                    <p>Telefoon: +31 6 12345678</p>
                    <p>Adres: Amsterdam, Nederland</p>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Laat een bericht achter</h2>
                    <form>
                    <label htmlFor="name">Naam:</label>
                    <input type="text" id="name" name="name" placeholder='Je Naam...' required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='Je E-mail...'  required />

                    <label htmlFor="message">Bericht:</label>
                    <textarea id="message" name="message" rows="4" placeholder='Bericht...' required></textarea>

                    <button type="submit">Verstuur</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Contact;
