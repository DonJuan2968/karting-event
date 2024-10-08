// import voor animation
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

// import css
import './prijzen.css';

// import images
import eerstePlaatsImg from '../../assets/1st.png';
import tweedePlaatsImg from '../../assets/2nd.png';
import derdePlaatsImg from '../../assets/3rd.png';

const Prijzen = () => {
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
            <div className="content-container">
                {/* Title */}
                <motion.div className="title-container"
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
                        <p>alle prijzen wat je kan winnen</p>
                    </div>
                    <div className="title-projects">
                        <h2>Prijzen.</h2>
                    </div>
                </motion.div>
                {/* Prijzen */}
                <div className="prijzen-container">
                    <div className="prijs-card">
                        <img src={tweedePlaatsImg} alt="Tweede Plaats"  loading='lazy' className="prijs-image" />
                        <h3>2e Plaats</h3>
                        <p>€50,-</p>
                    </div>
                    <div className="prijs-card">
                        <img src={eerstePlaatsImg} alt="Eerste Plaats" loading='lazy' className="prijs-image" />
                        <h3>1e Plaats</h3>
                        <p>€100,-</p>
                    </div>
                    <div className="prijs-card">
                        <img src={derdePlaatsImg} alt="Derde Plaats" loading='lazy' className="prijs-image" />
                        <h3>3e Plaats</h3>
                        <p>€25,-</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prijzen