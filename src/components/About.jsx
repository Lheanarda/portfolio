import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
        corporis. Tenetur corrupti asperiores rerum ipsum recusandae esse alias
        ipsa libero, doloribus illo ipsam obcaecati animi facere sint. Nostrum
        voluptatum quos voluptatibus ea ut voluptates est doloribus similique,
        eveniet nulla nemo dolore ipsum odio rem dolorem voluptas magnam sequi
        fugiat explicabo ex enim et minima vel dignissimos? Debitis, deserunt
        ipsa assumenda excepturi nulla dignissimos similique nostrum
        necessitatibus beatae blanditiis corporis perferendis, fugit qui natus
        culpa at cumque? Hic sunt ex reprehenderit qui blanditiis. Possimus ut
        iusto, quod incidunt voluptate, nobis impedit error consequuntur a quia,
        nostrum accusantium veniam harum sint magnam.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
