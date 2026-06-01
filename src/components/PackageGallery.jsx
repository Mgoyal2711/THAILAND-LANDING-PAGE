import { useRef, useState } from "react";
import {
  PACKAGE_CATEGORIES,
  PACKAGE_IMAGES_BY_CATEGORY,
  PACKAGE_DETAILS,
} from "../data/packages";
import OptimizedImage from "./OptimizedImage";

function PackageCard({
  src,
  category,
  onEnquire,
  expanded,
  setExpanded,
}) {
  const packageInfo = PACKAGE_DETAILS[category];

  return (
    <article className="group relative w-full overflow-hidden rounded-2xl border border-white/50 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Live Sale Badge */}
      <div className="absolute left-3 top-3 z-20">
        <div
          className="
            flex items-center gap-1.5
            rounded-full
            border-2 border-white
            bg-gradient-to-r
            from-red-700
            via-orange-500
            to-yellow-400
            px-3
            py-[6px]
            shadow-[0_0_22px_rgba(255,90,0,0.95)]
            animate-pulse
          "
          style={{ animationDuration: "5s" }}
        >
          <span className="h-2 w-2 rounded-full bg-yellow-100"></span>

          <span className="text-[10px] font-black tracking-[1.5px] uppercase text-white">
            🔥 LIVE SALE
          </span>
        </div>
      </div>

      <OptimizedImage
        src={src}
        alt={packageInfo?.title || "Thailand Package"}
        width="666"
        height="1000"
        className="ko-img h-auto w-full object-contain object-top transition duration-500"
      />

      <div className="p-5">

        <h3 className="text-2xl font-bold text-navy">
          {packageInfo?.title}
        </h3>

        <p className="mt-1 text-gray-500 font-medium">
          {category.replace("|", "/")}
        </p>

        <p className="mt-3 text-3xl font-extrabold text-red-600">
          {packageInfo?.price}
        </p>

        {/* More Info Button */}
        <button
          type="button"
          onClick={() =>
            setExpanded(
              expanded === category ? null : category
            )
          }
          className="mt-4 w-full rounded-xl border border-red-500 py-3 font-semibold text-red-600 transition hover:bg-red-50"
        >
          {expanded === category
            ? "Hide Details ▲"
            : "More Info ▼"}
        </button>

        {/* Expandable Details */}
        {expanded === category && (
          <div className="mt-4 rounded-xl bg-slate-50 p-4 border">
            <h4 className="mb-3 font-bold text-navy">
              Package Details
            </h4>

            <ul className="space-y-2 text-sm text-gray-700">
              {packageInfo?.details?.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">

          <button
            type="button"
            onClick={onEnquire}
            className="flex min-h-12 items-center justify-center rounded-xl bg-[#805d08] px-4 py-3 text-sm font-bold text-white transition hover:scale-105"
          >
            ENQUIRE NOW
          </button>

          <a
            href="https://wa.me/919599260057"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center rounded-xl bg-[#046526] px-4 py-3 text-sm font-bold text-white transition hover:scale-105"
          >
            WHATSAPP NOW
          </a>

        </div>

      </div>

    </article>
  );
}

export default function PackageGallery({ onEnquire }) {
  const [activeCategory, setActiveCategory] = useState(
    PACKAGE_CATEGORIES[0]
  );

  const [expanded, setExpanded] = useState(null);

  const mobileCardRefs = useRef({});

  const selectCategory = (category) => {
    setActiveCategory(category);

    requestAnimationFrame(() => {
      mobileCardRefs.current[category]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const desktopPackages = PACKAGE_CATEGORIES.flatMap((category) =>
    (PACKAGE_IMAGES_BY_CATEGORY[category] || []).map((src) => ({
      category,
      src,
    }))
  );

  const mobilePackages = desktopPackages;

  return (
    <section className="px-4 pt-10 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 text-center reveal">
          <h2 className="font-display mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
            Popular Thailand Packages
          </h2>

          <p className="fire-text mx-auto mt-3 max-w-3xl text-base font-bold leading-relaxed">
            Thailand Trips Designed for Couples, Families & Friends
          </p>
        </div>

        {/* Mobile Category Tabs */}
        <div className="glass-panel reveal mb-8 flex flex-wrap justify-center gap-3 rounded-2xl p-4 shadow-card md:hidden">

          {PACKAGE_CATEGORIES.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                className={`${
                  isActive
                    ? "btn-travel-gradient text-white shadow-lg"
                    : "bg-white text-navy hover:border-ocean/30 hover:bg-slate-100"
                } min-h-12 rounded-full border border-red-500 px-4 py-2 text-sm font-semibold transition duration-300`}
              >
                {category.replace("|", "/")}
              </button>
            );
          })}

        </div>

        <div className="package-container reveal">

          {/* Mobile */}
          <div className="flex flex-col gap-6 md:hidden">
            {mobilePackages.map(({ category, src }) => (
              <div
                key={`${category}-${src}`}
                ref={(node) => {
                  mobileCardRefs.current[category] = node;
                }}
              >
                <PackageCard
                  src={src}
                  category={category}
                  onEnquire={onEnquire}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {desktopPackages.map(({ category, src }) => (
              <PackageCard
                key={`${category}-${src}`}
                src={src}
                category={category}
                onEnquire={onEnquire}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}