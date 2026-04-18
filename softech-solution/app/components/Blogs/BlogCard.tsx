import { ArrowRightIcon } from "lucide-react";
import PositionAwareButton from "../Global/AnimatedButton";
const BlogCard = ({
  title,
  img,
  date,
  tagbg,
  tagTextColor,
  tag,
}: {
  title: string;
  img: string;
  date: string;
  tagbg: string;
  tagTextColor: string;
  tag: string;
}) => {
  return (
    <div className="group shrink-0 bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-4 cursor-pointer hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
      {/* Icon Tile */}
      <div className="w-full h-40 overflow-hidden rounded-lg flex items-center justify-center shrink-0">
        <img src={img} />
      </div>

      {/* Title */}
      <p className="text-xl font-medium text-gray-900 leading-snug flex-1">
        {title}
      </p>
      <p className="text-sm">{date}</p>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ background: tagbg, color: tagTextColor }}
        >
          {tag}
        </span>
        <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-150 group-hover:bg-gray-900 group-hover:border-transparent">
          <ArrowRightIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:-rotate-45 transition-colors duration-150" />
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
