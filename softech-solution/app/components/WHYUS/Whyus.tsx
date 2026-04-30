import world from "@/public/world.png";
import Image from "next/image";
import chatui from "@/public/Chat.png";
import languugaes from "@/public/languge.png";
import logo from "@/public/illustration.png";
import scalibility from "@/public/scalibilty.png";
type CardProps = {
  title: string;
  description?: string;
  variant?: "dark" | "light" | "lime";
  className?: string;
  icon?: React.ReactNode;
};

const titleFont =
  "[font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]";

function FeatureCard({
  title,
  description,
  variant = "light",
  className = "",
  icon,
}: CardProps) {
  const isDark = variant === "dark";
  const isLime = variant === "lime";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-md p-5 shadow-[0_0_18px_rgba(0,0,0,0.12)]",
        "min-h-47.5",
        isDark && "bg-[#1f1f1f] text-white",
        isLime && "bg-[#59ff38] text-green-800",
        !isDark && !isLime && "bg-[#f2f2f2] text-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h3
        className={`${titleFont} max-w-65 text-[28px] uppercase leading-[0.95] tracking-tight`}
      >
        {title}
      </h3>

      {description && (
        <p className="absolute bottom-8 left-5 max-w-97.5 text-sm leading-snug text-white/80">
          {description}
        </p>
      )}

      {icon && (
        <div className="absolute bottom-8 right-8 flex items-center justify-center">
          {icon}
        </div>
      )}
    </div>
  );
}

function BRANDLOGO() {
  return (
    <div className="  absolute -right-42 bottom-5   pointer-events-none  w-90 h-90 ">
      <Image src={logo} className="object-contain" alt="chatui" />
    </div>
  );
}
function SupportIcon() {
  return (
    <div className="  absolute -right-8 pointer-events-none  w-90 h-90 ">
      <Image src={chatui} className="object-contain" alt="chatui" />
    </div>
  );
}

function CubesIcon() {
  return (
    <div className="absolute -right-8 -bottom-12 h-34 w-34">
      <Image src={languugaes} alt="alt" className="pointer-events-none" />
    </div>
  );
}

function FiveGIcon() {
  return (
    <div
      className={` absolute right-0 -bottom-25   w-44 h-44 pointer-events-none `}
    >
      <Image src={scalibility} alt="scalibility" />
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="absolute  w-48  h-48">
      <Image
        src={world}
        className="object-contain pointer-events-none"
        alt="world"
      />
    </div>
  );
}

export default function WhyChooseRivertel() {
  return (
    <section className="w-full bg-white px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2
            className={`${titleFont} text-[42px] uppercase leading-none tracking-tight text-black md:text-[52px]`}
          >
            Why Choose <span className="text-brand2">SOFT-TECH?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium text-neutral-600">
            Whatever your need is, our packages are geared to serve you anywhere
            and anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            variant="dark"
            title="Proven Industry Excellence"
            description="Our extensive track record of successful implementations has
                established us as a trusted leader in fintech and telecom
                innovation."
            className="md:col-span-2 md:min-h-65"
            icon={<BRANDLOGO />}
          />

          <FeatureCard
            title="Client-Centric Philosophy"
            icon={<SupportIcon />}
            className="md:min-h-65"
          />

          <FeatureCard title="Leading-Edge Innovation" icon={<CubesIcon />} />

          <FeatureCard title="Agile Scalability" icon={<FiveGIcon />} />

          <FeatureCard
            variant="lime"
            title="Global Expertise"
            icon={<CheckIcon />}
          />
        </div>
      </div>
    </section>
  );
}
