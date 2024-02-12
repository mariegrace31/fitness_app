import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";


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
  }
]
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
      <div className="md:my-5 md:w-3/5">
        <HText>MORE THAN JUST A GYM.</HText>
        <p className="my-5 text-sm">
          We provide fitness equipememnt, trainers and fitness classes to get you to your ultimate fitness goals with ease.
          We provide true care into each every member.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="md:flex items-center justify-between gap-8 mt-5">
        {Benefits.map((benefit) => (
          <Benefit />
        ))}
      </div>
    </motion.div>
  </section>
}

export default Benefits;