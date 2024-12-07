import styles from './MockMap.module.scss'

function MockMap() {
  return (
    <div className={styles.container}>
       
        <div className={styles.mapContainer}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.008402929721!2d-117.9215491236715!3d33.81209623037153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e0!3m2!1sen!2sus!4v1733400301676!5m2!1sen!2sus"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
}

export default MockMap;
