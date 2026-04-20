"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/motion-primitives/carousel";
import PositionAwareButton from "../Global/AnimatedButton";
import BlogCard from "./BlogCard";
import RotatingText from "@/app/components/Global/Rotating";

const Blogs = () => {
  return (
    <section
      style={{
        clipPath: "polygon(100% 5%, 100% 100%, 0 100%, 0 0, 95% 0)",
      }}
      className="w-full mb-10 sm:mb-18 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#000 0,#64748b 1px,transparent 0,transparent 50%)",
          backgroundSize: "15px 15px",
        }}
      />

      <div className="max-w-7xl mx-auto relative px-6 py-12 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Section: Header */}
          <div className="flex flex-col  items-start text-left space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl flex flex-wrap justify-items-start  items-start gap-3 font-bold tracking-tight text-neutral-900">
                Our Latest{" "}
                <span className="text-brand2">
                  <RotatingText
                    texts={["Blogs !", "Case Studies !"]}
                    mainClassName="px-3 w-fit bg-brand2 text-white overflow-hidden py-2 text-[20px] sm:text-[24px] rounded-lg"
                    staggerFrom="first"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.015}
                    splitLevelClassName="overflow-hidden pb-0.5"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                    splitBy="characters"
                    auto
                    loop
                  />
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-500 leading-relaxed max-w-md">
                Explore our thought-provoking content, from expert blogs to
                insightful webinars.
              </p>
            </div>

              <PositionAwareButton title={"Explore All"} />
          </div>

          {/* Right Section: Carousel */}
          <div className="lg:col-span-2 relative w-full">
            <Carousel>
              <CarouselContent className="-ml-4">
                <CarouselItem className="basis-full sm:basis-1/2 pl-4">
                  <BlogCard
                    title={"NACH ROLE IN DIGITAL BANKING"}
                    img={
                      "https://i.pinimg.com/736x/89/ca/1c/89ca1c56c547bef572a44d89452b4800.jpg"
                    }
                    date={"2023-03-03"}
                    tagbg={"#edfff2"}
                    tag={"Education"}
                    tagTextColor={"#009126"}
                  />
                </CarouselItem>

                <CarouselItem className="basis-full sm:basis-1/2 pl-4">
                  <BlogCard
                    title={"How Telecom Fraud Erodes Customer Trust"}
                    img={
                      "https://i.pinimg.com/1200x/49/13/af/4913af109a94599e0090ddf69ffdae11.jpg"
                    }
                    date={"2023-03-03"}
                    tagbg={"#edfff2"}
                    tag={"Education"}
                    tagTextColor={"#009126"}
                  />
                </CarouselItem>

                <CarouselItem className="basis-full sm:basis-1/2 pl-4">
                  <BlogCard
                    title={"Securing Profits in the 5G Era"}
                    img={
                      "https://i.pinimg.com/736x/d3/ad/d0/d3add0368b510f15803a2f78d9d94d85.jpg"
                    }
                    date={"2023-03-03"}
                    tagbg={"#edfff2"}
                    tag={"Education"}
                    tagTextColor={"#009126"}
                  />
                </CarouselItem>
              </CarouselContent>

              {/* Adjusted navigation for mobile accessibility */}
              <CarouselNavigation
                className="absolute -bottom-55 lg:-bottom-4 left-80 lg:right-auto w-full justify-center lg:justify-end gap-2"
                classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800 shadow-lg"
                alwaysShow
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
