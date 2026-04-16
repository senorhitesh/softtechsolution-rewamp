import BGRINGS from "./BGRINGS";
import BGGradient from "./BGGradient";

const BackgroundDecoration = () => {
  return (
    <>
      <BGGradient />
      <BGRINGS size={1400} />
      <BGRINGS size={700} />
      <BGRINGS size={1000} />
    </>
  );
};

export default BackgroundDecoration;
