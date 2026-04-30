import CircularGallery from "@/components/CircularGallery";

const ImagesSection = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CircularGallery
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
        bend={0}
        borderRadius={0}
        scrollSpeed={2}
        scrollEase={0.08}
      />
    </div>
  );
};

export default ImagesSection;
