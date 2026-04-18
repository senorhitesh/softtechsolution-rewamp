import Image from "next/image";
import cms from "@/public/Orbit/cms.png";
import {
  TvMinimal,
  ShieldCheck,
  UserCheck,
  SmartphoneNfc,
  Workflow,
} from "lucide-react";

interface OrbitalItem {
  id: string;
  startDeg: number;
  radius: number;
  content: React.ReactNode;
}

const items: OrbitalItem[] = [
  {
    id: "telecom-services",
    startDeg: 0,
    radius: 248,
    content: (
      <div className="flex gap-2 justify-center px-4 py-2 border transition bg-white ring-1 ring-purple-100 group border-neutral-200 rounded-full items-center shadow-sm hover:ring-purple-300">
        <p className="text-nowrap text-sm font-semibold text-neutral-800 transition group-hover:text-purple-700">
          Telco Services
        </p>
        <TvMinimal className="w-4 h-4 group-hover:text-purple-700 transition text-neutral-600" />
      </div>
    ),
  },
  {
    id: "npci-solutions",
    startDeg: 100,
    radius: 248,
    content: (
      <div className="flex gap-2 justify-center px-4 py-2 border transition bg-white ring-1 ring-green-100 group border-neutral-200 rounded-full items-center shadow-sm hover:ring-green-300">
        <p className="text-nowrap text-sm font-semibold text-neutral-800 transition group-hover:text-green-700">
          NPCI Solutions
        </p>
        <SmartphoneNfc className="w-4 h-4 group-hover:text-green-700 transition text-neutral-600" />
      </div>
    ),
  },
  {
    id: "cyber-compliance",
    startDeg: 360,
    radius: 248,
    content: (
      <div className="flex gap-2 justify-center px-4 py-2 border transition bg-white ring-1 ring-red-100 group border-neutral-200 rounded-full items-center shadow-sm hover:ring-red-300">
        <p className="text-nowrap text-sm font-semibold text-neutral-800 transition group-hover:text-red-700">
          Cyber Compliance
        </p>
        <ShieldCheck className="w-4 h-4 group-hover:text-red-700 transition text-neutral-600" />
      </div>
    ),
  },
  // --- Inner Orbit (Radius 150) ---

  {
    id: "upi-payment",
    startDeg: 210,
    radius: 150,
    content: (
      <div className="w-14 h-14 border border-neutral-200 rounded-full bg-white flex items-center justify-center shadow-sm">
        <div className="relative scale-75 flex items-center justify-center h-10 w-10">
          <img
            src="https://images.icon-icons.com/2699/PNG/512/upi_logo_icon_170312.png"
            alt="UPI"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    id: "whatsapp-svg",
    startDeg: 90,
    radius: 150,
    content: (
      <div className="w-14 h-14 border border-neutral-200 rounded-full bg-white flex items-center justify-center shadow-sm">
        <svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8144 2.17813C11.4045 0.77424 9.52942 0.000712272 7.5315 0C3.41462 0 0.0641025 3.33166 0.06267 7.42686C0.0619538 8.73601 0.406103 10.0138 1.05966 11.1399L0 14.9891L3.95932 13.9563C5.05013 14.5482 6.27846 14.8598 7.52829 14.8602H7.5315C11.6477 14.8602 14.9986 11.5281 15 7.43291C15.0007 5.44819 14.2247 3.58238 12.8144 2.17848V2.17813ZM7.5315 13.6058H7.529C6.41525 13.6055 5.32267 13.3077 4.36938 12.7454L4.14268 12.6115L1.79308 13.2244L2.42014 10.9462L2.2726 10.7126C1.65127 9.72965 1.32288 8.59355 1.32359 7.42724C1.32503 4.02363 4.10973 1.25431 7.53404 1.25431C9.19208 1.25502 10.7506 1.89785 11.9227 3.06491C13.0948 4.23162 13.7398 5.78296 13.7391 7.43221C13.7376 10.8362 10.953 13.6055 7.5315 13.6055V13.6058ZM10.9365 8.98247C10.7499 8.88953 9.83242 8.44077 9.66121 8.37883C9.49004 8.31684 9.36579 8.28588 9.2415 8.47177C9.11725 8.65769 8.7595 9.07579 8.65063 9.19935C8.54175 9.32329 8.43288 9.33862 8.24629 9.24564C8.05975 9.15269 7.45846 8.95682 6.74546 8.32467C6.19075 7.83249 5.81613 7.22494 5.70729 7.03902C5.59842 6.85314 5.69583 6.75269 5.78892 6.66046C5.87271 6.57713 5.9755 6.44358 6.06896 6.3353C6.16246 6.22703 6.19325 6.14942 6.25554 6.02582C6.31788 5.90188 6.28671 5.79365 6.24017 5.70066C6.19358 5.60772 5.82046 4.69421 5.66467 4.32278C5.51317 3.96095 5.35921 4.0101 5.24496 4.00404C5.13608 3.9987 5.01183 3.99763 4.88721 3.99763C4.76258 3.99763 4.56058 4.04393 4.38942 4.22983C4.21825 4.41572 3.73621 4.86481 3.73621 5.77794C3.73621 6.69108 4.40483 7.57396 4.49829 7.6979C4.59175 7.82184 5.81433 9.69617 7.68621 10.5003C8.13137 10.6916 8.47908 10.8059 8.75017 10.8914C9.19713 11.0327 9.60392 11.0128 9.9255 10.9651C10.284 10.9117 11.0296 10.516 11.185 10.0826C11.3404 9.64914 11.3404 9.27733 11.2939 9.20006C11.2473 9.12278 11.1227 9.07612 10.9361 8.98318Z"
            fill="#103928"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "cms-icon",
    startDeg: 310,
    radius: 150,
    content: (
      <div className="w-14 h-14 border border-neutral-200 rounded-full bg-white flex items-center justify-center shadow-sm">
        <div className="relative scale-90 flex items-center justify-center h-10 w-10">
          <Image src={cms} alt="CMS" fill className="object-contain" />
        </div>
      </div>
    ),
  },
];

export default items;
