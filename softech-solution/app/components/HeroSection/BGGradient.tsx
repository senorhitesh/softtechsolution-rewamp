const BGGradient = () => {
  const speed = 1;
  const duration1 = 60 / speed;
  const duration2 = 80 / speed;
  const duration3 = 90 / speed;
  const duration4 = 70 / speed;
  const colors = ["#caabff", "#3625eb", "#066dd4", "#8b5cf6"];
  return (
    <>
      <div className="absolute z-0 max-w-7xl mx-auto inset-0">
        {/* Orb 1 - Top left */}
        <div
          className="absolute h-[60%] w-[60%] rounded-full"
          style={{
            left: "-10%",
            top: "-10%",
            background: `radial-gradient(circle, ${colors[0]}40 0%, transparent 70%)`,
            filter: "blur(80px)",
            animation: `meshMove1 ${duration1}s ease-in-out infinite`,
          }}
        />

        {/* Orb 2 - Top right */}
        <div
          className="absolute h-[50%] w-[50%] rounded-full"
          style={{
            right: "-5%",
            top: "10%",
            background: `radial-gradient(circle, ${colors[1]}35 0%, transparent 70%)`,
            filter: "blur(100px)",
            animation: `meshMove2 ${duration2}s ease-in-out infinite`,
          }}
        />

        {/* Orb 3 - Bottom center */}
        <div
          className="absolute h-[55%] w-[70%] rounded-full"
          style={{
            left: "20%",
            bottom: "-15%",
            background: `radial-gradient(circle, ${colors[2]}30 0%, transparent 70%)`,
            filter: "blur(120px)",
            animation: `meshMove3 ${duration3}s ease-in-out infinite`,
          }}
        />

        {/* Orb 4 - Center accent */}
        <div
          className="absolute h-[40%] w-[40%] rounded-full"
          style={{
            left: "40%",
            top: "30%",
            background: `radial-gradient(circle, ${colors[3] || colors[0]}25 0%, transparent 70%)`,
            filter: "blur(90px)",
            animation: `meshMove4 ${duration4}s ease-in-out infinite`,
          }}
        />
      </div>

      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
};

export default BGGradient;
