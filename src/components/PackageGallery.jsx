import { useRef, useState } from "react";
import {
  PACKAGE_CATEGORIES,
  PACKAGE_IMAGES_BY_CATEGORY,
  PACKAGE_DETAILS,
} from "../data/packages";
import OptimizedImage from "./OptimizedImage";

const BADGES = [
  "POPULAR PACKAGE - 20% off ",
  "BEST SELLING - 8% off ",
  "HIGH DEMAND - 15% off ",
  "BEST SELLING - 10% off ",
  "VALUE FOR MONEY - 5% off ",
  "HIGH DEMAND - 12% off ",
  "SUPER SAVER - 18% off ",
];

function PackageCard({
  src,
  category,
  onEnquire,
  expanded,
  setExpanded,
  badgeText = BADGES[0],
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
            from-blue-900
            via-blue-500
            to-blue-400
            px-3
            py-[6px]
            shadow-[0_0_22px_rgba(255,90,0,0.95)]
            
          "
          style={{ animationDuration: "5s" }}
        >
          <span className="h-2 w-2 rounded-full bg-yellow-100"></span>

          <span className="text-[10px] font-black tracking-[1.5px] uppercase text-white">
            {badgeText}
          </span>
        </div>
      </div>

      <div className="relative h-[260px] w-full overflow-hidden sm:h-[280px] lg:h-[300px]">
        <OptimizedImage
          src={src}
          alt={packageInfo?.title || "Thailand Package"}
          width="666"
          height="1000"
          className="ko-img h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-0 right-0 bg-red-500 px-1 py-0 ">
          <span className="text-base font-bold text-white">
            {packageInfo?.duration}
          </span>
        </div>
      </div>

      <div className="p-5">
  <div className="mb-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-green-700">
    ALL INCLUSIVE
  </div>

  <h3 className="text-2xl font-bold text-navy">
    {packageInfo?.title}
  </h3>

        {/* <p className="mt-1 font-medium text-gray-500">
          {category.replace("|", "/")}
        </p> */}

        <div className="mt-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-3xl font-extrabold text-red-600">
              {packageInfo?.price}
            </p>

            {/* <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
              {packageInfo?.duration}
            </span> */}
          </div>

          <p className="mt-1 text-sm font-semibold text-gray-700">
            (PER PERSON) | Min Pax - 2 Person
          </p>

          <p className="mt-2 text-base font-semibold text-navy">
            Extra Adult{" "}
            <span className="font-extrabold text-red-600">₹15000</span>
          </p>

          <p className="mt-1 text-base text-navy">
            <span className="font-extrabold">4 Star</span> Hotel
          </p>

          <div className="mt-3">
            <p className="text-base font-semibold text-navy">Inclusions</p>

            <div className="mt-3 grid grid-cols-4 gap-3">
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl">🍽️</span>
                <span className="mt-1 text-[11px] font-semibold leading-tight text-gray-700">
                  Meals
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-2xl">🚐</span>
                <span className="mt-1 text-[11px] font-semibold leading-tight text-gray-700">
                  Airport Transfers
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-2xl">🏨</span>
                <span className="mt-1 text-[11px] font-semibold leading-tight text-gray-700">
                  Hotel
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-2xl">🚗</span>
                <span className="mt-1 text-[11px] font-semibold leading-tight text-gray-700">
                  Transport
                </span>
              </div>
            </div>
          </div>

          {/* <div className="mt-4">
            <p className="text-lg font-extrabold text-navy">
              Package Excludes
            </p>

            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="text-xl text-red-600">❌</span>
              Flight Ticket Available - At Best Prices
            </p>
          </div> */}
        </div>

        {/* More Info Button */}
        <button
          type="button"
          onClick={() => setExpanded(expanded === category ? null : category)}
          className="mt-4 w-full rounded-xl border border-red-500 py-3 font-semibold text-red-600 transition hover:bg-red-50"
        >
          {expanded === category ? "Hide Details ▲" : "Tour Highlights ▼"}
        </button>

        {/* Expandable Details */}
        {expanded === category && (
          <div className="mt-4 rounded-xl border bg-slate-50 p-4">
            <h4 className="mb-3 font-bold text-navy">Package Details</h4>

            <ul className="space-y-2 text-sm text-gray-700">
              {packageInfo?.details?.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onEnquire}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0039b3] px-4 py-3 text-sm font-bold text-white transition hover:scale-105"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </article>
  );
}

export default function PackageGallery({ onEnquire }) {
  const [activeCategory, setActiveCategory] = useState(PACKAGE_CATEGORIES[0]);
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
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-8 text-center">
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
                className={`${isActive
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
            {mobilePackages.map(({ category, src }, index) => (
              <div
                key={`${category}-${src}`}
                ref={(node) => {
                  if (node && !mobileCardRefs.current[category]) {
                    mobileCardRefs.current[category] = node;
                  }
                }}
              >
                <PackageCard
                  src={src}
                  category={category}
                  onEnquire={onEnquire}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  badgeText={BADGES[index % BADGES.length]}
                />
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {desktopPackages.map(({ category, src }, index) => (
              <PackageCard
                key={`${category}-${src}`}
                src={src}
                category={category}
                onEnquire={onEnquire}
                expanded={expanded}
                setExpanded={setExpanded}
                badgeText={BADGES[index % BADGES.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}