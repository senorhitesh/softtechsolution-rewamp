import CircularGallery from "@/components/CircularGallery";
const defaultItems = [
  {
    image: `https://picsum.photos/seed/1/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/2/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/3/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/4/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/5/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/16/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/17/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/8/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/9/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/10/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/21/800/600?grayscale`,
  },
  {
    image: `https://picsum.photos/seed/12/800/600?grayscale`,
  },
];
const ImagesSection = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CircularGallery
        items={defaultItems}
        bend={3}
        scrollEase={0.02}
        borderRadius={0}
        scrollSpeed={2}
      />
    </div>
  );
};

export default ImagesSection;
