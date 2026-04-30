import {
  SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
const technologies = [
  {
    title: "Laravel",

    icon: SiLaravel,
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    title: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    title: "PHP",
    icon: FaPhp,
  },
  {
    title: "HTML",
    icon: FaHtml5,
  },
  {
    title: "CSS",
    icon: FaCss3Alt,
  },
];
export default function TechGrid() {
  return (
    <div className=" bg-gray-50 ">
      <h2 className="text-center text-2xl font-semibold text-gray-900 mb-10">
        Development Technologies
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {technologies.map((tech, index) => (
          <TechCard key={index} title={tech.title} Icon={tech.icon} />
        ))}
      </div>
    </div>
  );
}
import { IconType } from "react-icons";

type TechCardProps = {
  title: string;
  Icon: IconType;
};
const TechCard = ({ title, Icon }: TechCardProps) => {
  return (
    <div className="flex flex-col  group relative technologycard items-center text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm border border-gray-100">
      {/* Icon Circle */}
      <div className="w-16 h-16 dhrandhar   flex items-center justify-center rounded-full bg-gray-50 shadow-sm mb-4">
        <Icon className="text-3xl text-brand2" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold group-hover:text-white delay-[0.2s] text-gray-900 mb-2">
        {title}
      </h3>
    </div>
  );
};
