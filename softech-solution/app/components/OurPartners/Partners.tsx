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
        alt: "jio",
      },
      {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTmDBGjNKlpmkPVscQh4cdNut3QlYSGfsEA&s",
        alt: "VideoCon",
      },
      {
        id: 3,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TwNCqLeMIH_fjQ6qQFVa08h-nTrwkdqS-A&s",
        alt: "airte",
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
      {
        id: 5,
        src: "data:image/png;base64,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",
        alt: "Oracel",
      },
      {
        id: 6,
        src: "data:image/png;base64,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",
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
      className="relative col-span-1 flex items-center justify-center group"
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
    <div className="p-12  w-full flex flex-col items-center">
      <p className="text-neutral-500 font-medium mb-12">
        {" "}
        Our Trusted Partners
      </p>
      <div className="   flex lg:flex-row md:flex-row flex-col gap-16 items-center  justify-center">
        {PARTNERS.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
