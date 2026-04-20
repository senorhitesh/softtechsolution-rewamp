"use client";
import { motion } from "framer-motion";
interface logoProps {
  id: number;
  src: string;
  alt: string;
}
interface PartnerProps {
  id: number;
  name: string;
  description: string;
  logos: logoProps[];
}
const PARTNERS = [
  {
    id: 1,
    name: "Telecom Partners",
    description: "Reliable solutions for telecom operations",
    logos: [
      {
        id: 1,
        src: "https://i.pinimg.com/736x/0d/b0/92/0db092c4b746e85e2a70de1b2409c5d6.jpg",
        alt: "Airtel",
      },
      {
        id: 2,
        src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Idea_Cellular_Logo.svg",
        alt: "Idea",
      },
      {
        id: 3,
        src: "https://i.pinimg.com/1200x/a1/57/3f/a1573f9ac2587b85af90582544d9e7d2.jpg",
        alt: "Jio",
      },
      {
        id: 4,
        src: "https://i.pinimg.com/736x/d9/e8/1a/d9e81ae05fe5d6686978d9def45e9254.jpg",
        alt: "Vodafone",
      },
    ],
  },
  {
    id: 2,
    name: "Digital & IT Partners",
    description: "Built for modern enterprise infrastructure",
    logos: [
      {
        id: 1,
        src: "https://i.pinimg.com/736x/73/f5/c2/73f5c2612322296fc58b8760d4fcb72a.jpg",
        alt: "Google",
      },
      {
        id: 2,
        src: "https://i.pinimg.com/736x/38/20/4a/38204a11c30295fc953e079e4300be4d.jpg",
        alt: "Meta",
      },
      {
        id: 3,
        src: "https://i.pinimg.com/736x/36/76/4c/36764cad429d97090de6e08a7ef82c7b.jpg",
        alt: "Zoho",
      },
      {
        id: 4,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMMrFjOlliLa68ye86MqZ7wyQ0L_dDRO2ng&s",
        alt: "Emuhdha",
      },
    ],
  },
  {
    id: 3,
    name: "NPCI  Partners",
    description: "Trusted for compliant payment solutions",
    logos: [
      {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6FYT9Dv2vQpAb0NvIkmVweJi3ZaKW2ox9g&s",
        alt: "NPCI",
      },
      {
        id: 2,
        src: "https://startinup.up.gov.in/wp-content/uploads/2022/12/yes-bank.png",
        alt: "Yes Bank",
      },
      {
        id: 3,
        src: "https://staticprintenglish.theprint.in/wp-content/uploads/2023/08/ANI-20230827074826.jpg",
        alt: "Zoho",
      },
    ],
  },
];

const PartnerCard = ({ partner }: { partner: PartnerProps }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center group"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {partner.logos.map((logo, index) => {
        const xOffset = (index - (partner.logos.length - 1) / 2) * 80;

        return (
          <motion.div
            key={logo.id}
            variants={{
              rest: {
                opacity: 1,
                x: index * 40 - (partner.logos.length - 1) * 20,
                y: -75,
                scale: 0.5,
                rotate: 0,
              },
              hover: {
                opacity: 1,
                x: xOffset,
                y: -85,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.05,
                },
              },
            }}
            className="absolute w-14 h-14 bg-white rounded-full group shadow-xl border border-gray-100 p-2 flex items-center justify-center "
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain"
            />
          </motion.div>
        );
      })}

      {/* MAIN CARD */}
      <motion.div
        className="relative z-10 w-64 h-32 bg-white/80 backdrop-blur-md border border-purple-200 rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.02 },
        }}
      >
        {/* Subtle glassmorphism background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />

        <h3 className="font-bold text-gray-800 text-lg tracking-tight uppercase">
          {partner.name}
        </h3>
        <p className="text-xs text-purple-600 font-medium mt-1">
          {partner.description}
        </p>

        {/* Bottom indicator line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-purple-500"
          variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
        />
      </motion.div>
    </motion.div>
  );
};

const Partners = () => {
  return (
    <div className="p-12 flex flex-col items-center">
      <p className="text-neutral-500 font-medium mb-12">
        {" "}
        Our Trusted Partners
      </p>
      <div className="flex flex-wrap gap-20 justify-center">
        {PARTNERS.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
