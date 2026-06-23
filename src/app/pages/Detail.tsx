import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { CARDS, type DetailSlot } from "../data/cards";

const DESKTOP_GRID = [
  { slot: 0, col: "col-span-2 row-span-2", home: false },
  { slot: 1, col: "col-span-1 row-span-1", home: false },
  { slot: 2, col: "col-span-1 row-span-2", home: false },
  { slot: 3, col: "col-span-1 row-span-1", home: true  },
  { slot: 4, col: "col-span-2 row-span-1", home: false },
  { slot: 5, col: "col-span-1 row-span-1", home: false },
  { slot: 6, col: "col-span-1 row-span-2", home: false },
  { slot: 7, col: "col-span-2 row-span-1", home: false },
  { slot: 8, col: "col-span-1 row-span-1", home: false },
  { slot: 9, col: "col-span-2 row-span-1", home: false },
  { slot: 10, col: "col-span-2 row-span-1", home: false },
];

const MOBILE_GRID = [
  { slot: 0, col: "col-span-2 row-span-1", home: false },
  { slot: 1, col: "col-span-1 row-span-2", home: false },
  { slot: 2, col: "col-span-1 row-span-1", home: false },
  { slot: 3, col: "col-span-1 row-span-1", home: true  },
  { slot: 4, col: "col-span-2 row-span-1", home: false },
  { slot: 5, col: "col-span-1 row-span-2", home: false },
  { slot: 6, col: "col-span-1 row-span-1", home: false },
  { slot: 7, col: "col-span-1 row-span-1", home: false },
  { slot: 8, col: "col-span-2 row-span-1", home: false },
  { slot: 9, col: "col-span-1 row-span-1", home: false },
  { slot: 10, col: "col-span-1 row-span-1", home: false },
];

function rgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function slotBg(slot: number, dark: string, mid: string) {
  return [dark, mid, mid, dark, dark, mid, dark, mid, dark, mid][slot % 10];
}

// --- Modal ---

interface ModalProps {
  slots: DetailSlot[];
  current: number;
  accent: string;
  dark: string;
  mid: string;
  onClose: () => void;
  onNav: (index: number) => void;
}

const NAVIGABLE = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10]; // slots without home (3)

function Modal({ slots, current, accent, dark, onClose, onNav }: ModalProps) {
  const content = slots[current] ?? {};
  const navIndex = NAVIGABLE.indexOf(current);

  const goPrev = () => {
    const prev = NAVIGABLE[(navIndex - 1 + NAVIGABLE.length) % NAVIGABLE.length];
    onNav(prev);
  };
  const goNext = () => {
    const next = NAVIGABLE[(navIndex + 1) % NAVIGABLE.length];
    onNav(next);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ backgroundColor: rgba(dark, 0.85), backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
        style={{ backgroundColor: dark, border: `1px solid ${rgba(accent, 0.25)}`, maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        {content.img && (
          <div className="relative w-full flex-shrink-0" style={{ height: "280px" }}>
            <img
              src={content.img}
              alt={content.title ?? ""}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${dark} 0%, transparent 60%)`,
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-4 p-6 flex-1 overflow-y-auto">
          {content.title && (
            <h2
              className="font-extrabold text-white text-2xl leading-tight"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              {content.title}
            </h2>
          )}
          {content.text && (
            <p
              className="leading-relaxed text-base"
              style={{ fontFamily: "Nunito, sans-serif", color: rgba(accent, 0.85) }}
            >
              {content.text}
            </p>
          )}

          {/* Slot indicator */}
          <div className="flex gap-1.5 mt-auto pt-2">
            {NAVIGABLE.map((s, i) => (
              <button
                key={s}
                onClick={() => onNav(s)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: s === current ? "24px" : "8px",
                  backgroundColor: s === current ? accent : rgba(accent, 0.3),
                }}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Nav arrows */}
        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: rgba(accent, 0.15), color: accent }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: rgba(accent, 0.15), color: accent }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: rgba(dark, 0.7), color: accent, backdropFilter: "blur(4px)" }}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// --- Main page ---

export default function Detail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const card = CARDS.find((c) => c.slug === slug);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => navigate("/")} className="text-white underline">
          Volver al inicio
        </button>
      </div>
    );
  }

  const { dark, mid, accent, detail } = card;

  const openSlot = (slot: number) => setActiveSlot(slot);
  const closeModal = () => setActiveSlot(null);

  const renderSlot = (slot: number, col: string, home: boolean, rounded: string) => {
    const bg = slotBg(slot, dark, mid);
    const content = detail[slot] ?? {};

    if (home) {
      return (
        <div
          key={`home-${slot}`}
          onClick={() => navigate("/")}
          className={`${col} ${rounded} relative overflow-hidden cursor-pointer flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl active:scale-95`}
          style={{ backgroundColor: accent, border: `1px solid ${rgba(accent, 0.5)}` }}
        >
          <ArrowLeft className="w-6 h-6 drop-shadow" style={{ color: dark }} />
          <span
            className="font-extrabold text-sm tracking-wide"
            style={{ fontFamily: "Nunito, sans-serif", color: dark }}
          >
            Volver a Home
          </span>
        </div>
      );
    }

    return (
      <div
        key={slot}
        onClick={() => openSlot(slot)}
        className={`${col} ${rounded} relative overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
        style={{ backgroundColor: bg, border: `1px solid ${rgba(accent, 0.18)}` }}
      >
        {/* Image — no filter, full color */}
        {content.img && (
          <img
            src={content.img}
            alt={content.title ?? ""}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Gradient overlay just for readability at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${rgba(dark, 0.85)} 0%, ${rgba(dark, 0.1)} 55%, transparent 100%)`,
          }}
        />

        {/* Title + "Ver más" */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
          {content.title && (
            <h3
              className="font-extrabold text-white leading-tight drop-shadow text-sm"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              {content.title}
            </h3>
          )}
          <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ExternalLink className="w-3 h-3" style={{ color: accent }} />
            <span
              className="text-xs font-bold"
              style={{ fontFamily: "DM Mono, monospace", color: accent }}
            >
              ver más
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="min-h-screen w-full p-4 md:p-10"
        style={{
          background: `radial-gradient(ellipse at 15% 20%, ${mid} 0%, ${dark} 45%, ${rgba(dark, 0.92)} 75%, ${dark} 100%)`,
        }}
      >
        {/* Desktop */}
        <div
          className="hidden md:grid gap-4 w-full max-w-5xl mx-auto"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "140px" }}
        >
          {DESKTOP_GRID.map(({ slot, col, home }) =>
            renderSlot(slot, col, home, "rounded-[2rem]")
          )}
        </div>

        {/* Mobile */}
        <div
          className="grid md:hidden gap-3 w-full"
          style={{ gridTemplateColumns: "repeat(2, 1fr)", gridAutoRows: "120px" }}
        >
          {MOBILE_GRID.map(({ slot, col, home }) =>
            renderSlot(slot, col, home, "rounded-[1.75rem]")
          )}
        </div>
      </div>

      {/* Modal */}
      {activeSlot !== null && (
        <Modal
          slots={detail}
          current={activeSlot}
          accent={accent}
          dark={dark}
          mid={mid}
          onClose={closeModal}
          onNav={setActiveSlot}
        />
      )}
    </>
  );
}
