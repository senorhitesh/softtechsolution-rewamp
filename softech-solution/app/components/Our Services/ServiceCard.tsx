import { ArrowRightIcon } from "lucide-react";
type Service = {
  id: number;
  title: string;
  tag: string;
  color: string;
  bg: string;
  tagColor: string;
  description: string;
};
const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  return (
    <div
      className="group bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-4 cursor-pointer hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Icon Tile */}
      <div
        className="w-full h-40 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: service.bg, color: service.color }}
      ></div>

      {/* Title */}
      <p className="text-xl font-medium text-gray-900 leading-snug flex-1">
        {service.title}
      </p>
      <p className="text-sm">{service.description}</p>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ background: service.bg, color: service.tagColor }}
        >
          {service.tag}
        </span>

        <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-150 group-hover:bg-gray-900 group-hover:border-transparent">
          <ArrowRightIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:-rotate-45 transition-colors duration-150" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
