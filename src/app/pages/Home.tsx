import { useNavigate } from "react-router";
import { CARDS } from "../data/cards";

function LogoContent() {
  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <p
        className="leading-none tracking-tight"
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          color: "transparent",
          backgroundImage: "linear-gradient(135deg, #f9a8d4 0%, #c4b5fd 50%, #a78bfa 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          letterSpacing: "-0.03em",
        }}
      >
        <span>S</span>
        <span style={{ textTransform: "lowercase", fontWeight: 300 }}>ammell</span>
        <span>A</span>
      </p>
      <p
        style={{
          fontFamily: "DM Mono, monospace",
          fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
          fontWeight: 400,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#a78bfa99",
        }}
      >
        creatives
      </p>
    </div>
  );
}

const MOBILE_IDS = [1, 3, 4, 2, 5, 7, 9, 10, 8, 6, 12, 11, 13, 14];

export default function Home() {
  const navigate = useNavigate();
  const mobileCards = MOBILE_IDS.map((id) => CARDS.find((c) => c.id === id)!);

  const mobileColMap: Record<number, string> = {
    1: "col-span-2 row-span-1",
    3: "col-span-1 row-span-2",
    4: "col-span-1 row-span-1",
    2: "col-span-1 row-span-1",
    5: "col-span-2 row-span-1",
    7: "col-span-1 row-span-2",
    9: "col-span-1 row-span-1",
    10: "col-span-1 row-span-1",
    8: "col-span-2 row-span-1",
    6: "col-span-1 row-span-1",
    12: "col-span-1 row-span-1",
    11: "col-span-2 row-span-2",
    13: "col-span-1 row-span-2",
    14: "col-span-1 row-span-2",
  };

  return (
    <div
      className="min-h-screen w-full p-4 md:p-10"
      style={{
        background:
          "radial-gradient(ellipse at 15% 20%, #3b0764 0%, #1a0a2e 40%, #2d0a3e 70%, #0f0520 100%)",
      }}
    >
      {/* Desktop */}
      <div
        className="hidden md:grid gap-4 w-full max-w-5xl mx-auto"
        style={{ gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "140px" }}
      >
        {CARDS.map((card) => (
          <div
            key={card.id}
            onClick={() => !card.noClick && navigate(`/card/${card.slug}`)}
            className={`
              ${card.col} ${card.bg} border ${card.border}
              rounded-[2rem] relative overflow-hidden
              transition-all duration-300
              ${card.noClick ? "cursor-default" : "cursor-pointer hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-900/50"}
              ${card.logo ? "flex flex-col items-center justify-center" : ""}
            `}
          >
            {card.logo ? (
              <LogoContent />
            ) : (
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                {card.img && (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                )}
                <div className="relative z-10">
                  <h3
                    className="font-extrabold text-white leading-tight mb-0.5 drop-shadow"
                    style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(0.75rem, 1.2vw, 1rem)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-white/60 leading-snug"
                    style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(0.6rem, 0.9vw, 0.75rem)" }}
                  >
                    {card.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        className="grid md:hidden gap-3 w-full"
        style={{ gridTemplateColumns: "repeat(2, 1fr)", gridAutoRows: "120px" }}
      >
        {mobileCards.map((card) => (
          <div
            key={card.id}
            onClick={() => !card.noClick && navigate(`/card/${card.slug}`)}
            className={`
              ${mobileColMap[card.id]} ${card.bg} border ${card.border}
              rounded-[1.75rem] relative overflow-hidden
              transition-all duration-300
              ${card.noClick ? "cursor-default" : "cursor-pointer active:scale-95"}
              ${card.logo ? "flex flex-col items-center justify-center" : ""}
            `}
          >
            {card.logo ? (
              <LogoContent />
            ) : (
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                {card.img && (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                )}
                <div className="relative z-10">
                  <h3
                    className="font-extrabold text-white text-xs leading-tight drop-shadow"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
