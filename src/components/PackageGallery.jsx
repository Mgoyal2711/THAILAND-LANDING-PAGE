import { useRef, useState } from "react";
import {
  PACKAGE_CATEGORIES,
  PACKAGE_IMAGES_BY_CATEGORY,
  PACKAGE_DETAILS,
} from "../data/packages";
import OptimizedImage from "./OptimizedImage";

const BADGES = [
  "POPULAR PACKAGE - 20% off ",
  "BEST SELLING - 15% off ",
  "HIGH DEMAND - 8% off ",
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
  cityHeading,
}) {
  const packageInfo = PACKAGE_DETAILS[category];

  const coveredCities = category
    .split("|")
    .map((city) => city.trim())
    .filter(Boolean);

  return (
    <article className="group relative w-full overflow-hidden rounded-2xl border border-white/50 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute left-2 top-2 z-20">
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
        >
          <span className="h-2 w-2 rounded-full bg-blue-400"></span>

          <span className="text-[10px] font-black uppercase tracking-[1.5px] text-white">
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

        <div className="absolute bottom-0 right-0 bg-red-500 px-2 py-1">
          <span className="text-base font-bold text-white">
            {packageInfo?.duration}
          </span>
        </div>
      </div>

      <div className="p-5">
        {packageInfo?.cityHeading && (
          <p
            className="mb-2 text-sm font-extrabold uppercase tracking-wide text-red-600
  "
          >
            {packageInfo.cityHeading}
          </p>
        )}

        {/* {packageInfo?.cityHeading && (
  <div className="mb-2 flex justify-end">
    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-blue-700">
      {packageInfo.cityHeading}
    </span>
  </div>
)} */}
        <div className="mb-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-green-700 mt-1.5">
          ALL INCLUSIVE
        </div>

        <h3 className="text-2xl font-bold text-navy ">
          <span className="inline box-decoration-clone bg-accent px-1 leading-tight py-1 rounded-sm">
            {packageInfo?.title}
          </span>
        </h3>

        <div className="mt-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
              <p className="text-xl font-extrabold text-slate-400 line-through decoration-red-500 decoration-2">
                {packageInfo?.price}
              </p>

              <p className="text-3xl font-extrabold text-red-600">
                {packageInfo?.offerPrice || packageInfo?.price}
              </p>

              {packageInfo?.offerPrice && (
                <span className="mb-1 rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-600">
                  Offer Price
                </span>
              )}
            </div>
          </div>

          <p className="mt-1 text-sm font-semibold text-gray-700">
            (PER PERSON) | Min Pax - 2 Person
          </p>

          <p className="mt-2 text-base font-semibold text-navy">
            Extra Adult{" "}
            <span className="font-extrabold text-red-600">
              {packageInfo?.extraAdultPrice || "₹15,000"}
            </span>
          </p>

          <p className="mt-1 text-base text-navy">
            <span className="font-extrabold">4 Star</span> Hotel
          </p>

          <div className="mt-4">
            <p className="text-base font-extrabold text-orange-700">
              Inclusions
            </p>

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
        </div>

        <button
          type="button"
          onClick={() => setExpanded(expanded === category ? null : category)}
          className="mt-4 w-full rounded-xl border border-red-500 py-3 font-semibold text-red-600 transition hover:bg-red-50"
        >
          {expanded === category
            ? "Hide Tour Details ▲"
            : "View Tour Details ▼"}
        </button>

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
    })),
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
