// import voor animation
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

// import css
import './info.css';
//import alle afbeeldingen
import info1 from '../../assets/info1.png';
import info2 from '../../assets/info2.png';
import info3 from '../../assets/info3.jpg'

const Info = () => {
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
    <div className="container">
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
          <p>alle informatie die je nodig hebt</p>
        </div>
        <div className="title-projects">
            <h2>Info.</h2>
        </div>
      </motion.div>
      <div className="center">
        {/* Info stuk 1 */}
        <section className="info-section">
          <div className="info-container">
            <div className="info-image">
              <img src={info1} alt="Karting image" loading="lazy" />
            </div>
            <div className="info-text">
              <h2>Locatie</h2>
              <p>Powerarea - Mamelis 1, Lemiers Vaals. Een moderne kartbaan met uitdagende indoor en outdoor tracks.</p>
              <h2>Teams en Wedstrijden</h2>
              <p>Teams van 4 personen (random indeling).</p>
              <p>Er is een opwarmings ronde en kwalificatie ronde, daarna volgt de "Grand Prix".</p>
              <p>Het team met de meeste punten wint.</p>
              <p>Alles onder de top 10 krijgt geen punten</p>
              <p>ieder plek wat je omlaag gaat is 1 punt er vanaf dus: <br/> 1ste 10 punten, 2de 9 punten etc.</p>
            </div>
          </div>
        </section>
        {/* Info stuk 2 */}
        <section className="info-section">
          <div className="info-container info2-container">
            <div className="info-text info2-text">
              <div className="disclaimer">
                <p>disclaimer: tijden kunnen veranderen</p>
              </div>
              <h2>Tijdschema</h2>
              <div className="p2">
                <p>9:30 tot 10:00 : Registratie en Welkomst</p>
                <p>10:00 tot 11:00 : Oefensessies</p>
                <p>11:00 tot 12:00 : Kwalificatie</p>
                <p>12:00 tot 13:00 : Lunchpauze</p>
                <p>13:00 tot 14:00 : Race</p>
                <p>14:00 tot 14:30 : Prijsuitreiking en Afsluiting</p>
              </div>
              <div className="disclaimer">
                <p>disclaimer: bij medische klachten niet inschrijven</p>
              </div>
              <h2>Regels</h2>
              <p>NEEM JE ID MEE zonder ID geen toegang.</p>
              <p>Geen loshangende kleding, dichten schoenen en lang haar stevig en kort vastmaken.</p>
              <p>Alle kartbaan regels worden toegelicht door het personeel op aankomst.</p>
            </div>
            <div className="info-image">
              <img src={info2} alt="Karting image" loading="lazy" />
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* img devider */}
    <div className='image-container img2'>
      <img src={info3} alt="Image" className="image" loading="lazy"/>
    </div>
    </>
  );
}

export default Info;
