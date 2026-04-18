"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/motion-primitives/carousel";
import PositionAwareButton from "../Global/AnimatedButton";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section className="w-full py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Section: Header */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              Our Latest <span className="text-brand2">Blogs.</span>
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Explore our thought-provoking content, from expert blogs to
              insightful webinars.
            </p>
          </div>

          <PositionAwareButton title={"Explore All"} />
        </div>

        {/* Right Section: Carousel */}
        <div className="lg:col-span-2 relative">
          <Carousel>
            <CarouselContent className="ml-4">
              <CarouselItem className="basis-1/2 pl-4">
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
              <CarouselItem className="basis-1/2 pl-4">
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
              <CarouselItem className="basis-1/2 pl-4">
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
            <CarouselNavigation
              className="absolute -bottom-4 left-auto top-auto w-full justify-end gap-2"
              classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
              alwaysShow
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
