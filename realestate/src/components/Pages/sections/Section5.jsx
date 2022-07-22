import styles from "./Section5.module.scss";
import { ArrowButton } from "../../buttons/Button";
import building4 from "../../../../src/assets/5.jpg";
import building5 from "../../../../src/assets/4.jpg";
const Section5 = () => {
  return (
    <section className={styles.section_5}>
      <div className={styles.action}>
        <h1>Your Best Partner To find New House</h1>
        <ArrowButton text="Get Started" path="search" />
      </div>
      <div className={styles.image_container_1}>
        <img src={building4} alt="building" />
      </div>
      <div className={styles.image_container_2}>
        <img src={building5} alt="building" />
      </div>
    </section>
  );
};

export default Section5;