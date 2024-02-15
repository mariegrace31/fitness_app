import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Neque adiscing amet enim. Feugiat dolor dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Eu ipsum egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpisid."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapiem nisl. Locus at mi sit pellentesque. Congue parturient."
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
      {/* HEADER */}
      <motion.div
      className="md:my-5 md:w-3/5"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
         hidden: { opacity: 0, x: -50 },
         visible: { opacity: 1, x: 0},
       }}
       >
        <HText>MORE THAN JUST A GYM.</HText>
        <p className="my-5 text-sm">
          We provide fitness equipememnt, trainers and fitness classes to get you to your ultimate fitness goals with ease.
          We provide true care into each every member.
        </p>
      </motion.div>

      {/* BENEFITS */}
      <motion.div
      className="mt-5 items-center justify-between gap-8 md:flex"
      initial= "hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
          <Benefit
           key={benefit.title}
           icon={benefit.icon}
           title={benefit.title}
           description={benefit.description}
           setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
        <img 
        className="mx-auto"
        alt="benefits-page-graphic"
        src={BenefitsPageGraphic}
        />

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 befor:-left-20 before:z-[1] beforre:content-abstractwaves">
              <div>
                <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}</HText>
                <span className="text-primary-500">FIT</span>
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div>
            <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, obcaecati illum perspiciatis
              enim deserunt ipsam repellat ad, sapiente odit maiores asperiores magni tempore libero! Quo perspiciatis
              neque minima voluptatem iusto! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto nulla debitis quaerat vel harum
              quo error nobis labore adipisci. Ullam atque deserunt ducimus eveniet praesentium, fugiat est similique voluptatem?
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, dolore veniam. Illum ab perferendis voluptatem deserunt
             ullam porro enim cum mollitia? Iure suscipit sit assumenda aut vero tenetur voluptates exercitationem.
            </p>
          </div>
          {/* BUTTON */}
          <div className="realtive mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
}

export default Benefits;