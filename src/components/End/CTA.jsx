import styles from "../../styles";
import Button from "../Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col text-center">
      <h2 className={`${styles.heading2} `}>Let’s try our bot now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center self-center`}>
        Everything you need to generate traffic and grow your agency 
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
