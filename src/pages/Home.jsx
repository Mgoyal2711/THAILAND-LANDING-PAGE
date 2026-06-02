import { useEffect, useState } from "react";
import PackageGallery from "../components/PackageGallery";
import OptimizedImage from "../components/OptimizedImage";
import LucideIcon from "../components/LucideIcon";

const happyClientImages = [
  `${import.meta.env.BASE_URL}optimized/arrivals/client-1.jpg`,
  `${import.meta.env.BASE_URL}optimized/arrivals/client-2.jpg`,
  `${import.meta.env.BASE_URL}optimized/arrivals/client-3.jpg`,
  `${import.meta.env.BASE_URL}optimized/arrivals/client-4.jpg`,
];

export default function Home({ openEnquiryModal }) {
  const [activeClientImage, setActiveClientImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveClientImage((current) =>
        current === happyClientImages.length - 1 ? 0 : current + 1,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-slate-200/80 bg-white/95 shadow-md backdrop-blur-md">
        <div className="mx-auto max-w-[95rem] px-3 py-2 sm:px-4 lg:py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4 xl:gap-8">
              <a
                href="#"
                className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
              >
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md ring-2 ring-ocean/20 sm:h-14 sm:w-14">
                  <OptimizedImage
                    src="/img/koh logo.jpeg"
                    alt="Kingdom of Holidays logo"
                    className="h-full w-full object-cover"
                    loading="eager"
                    width="56"
                    height="56"
                  />
                </div>

                <div className="leading-tight">
                  <span className="font-display block text-lg font-extrabold tracking-tight text-navy sm:text-xl">
                    Kingdom of Holidays
                  </span>

                  <span className="text-xs font-medium text-slate-500 sm:text-sm">
                    Thailand · Visa · Flights · Stays
                  </span>
                </div>
              </a>

              <div className="hidden xl:flex items-center gap-3">
                <div className="group relative overflow-hidden rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

                  <div className="relative flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow">
                      ✓
                    </div>

                    <div className="leading-tight">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-600">
                        Trusted
                      </p>
                      <p className="text-xs font-extrabold text-slate-800">
                        Verified Agent
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-full border border-yellow-200 bg-gradient-to-r from-yellow-50 to-white px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

                  <div className="relative flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-white shadow">
                      ★
                    </div>

                    <div className="leading-tight">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-yellow-600">
                        Best Deal
                      </p>
                      <p className="text-xs font-extrabold text-slate-800">
                        Price Guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-3 xl:flex">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-[10px] font-medium text-slate-600 shadow-sm">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 font-extrabold text-slate-800">
                    <LucideIcon
                      name="phone"
                      className="h-3.5 w-3.5 text-ocean"
                    />
                    9599260057 | 9971600663
                  </span>

                  <span className="inline-flex items-center gap-1 font-extrabold text-slate-800">
                    <LucideIcon
                      name="mail"
                      className="h-3.5 w-3.5 text-ocean"
                    />
                    info@kingdomofholidays.com
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2 whitespace-nowrap font-bold text-slate-800">
                  <span>📍 Delhi-NCR-GZB</span>
                  <span className="text-slate-300">|</span>
                  <span>📍 Sri Vijaya Puram, Andaman & Nicobar Islands</span>
                  <span className="text-slate-300">|</span>
                  <span>📍 Chonburi Pattaya - Thailand</span>
                </div>
              </div>

              <a
                href="https://wa.me/919599260057"
                className="btn-travel-gradient ripple-btn inline-flex items-center rounded-full px-5 py-2 text-sm font-bold text-white shadow-md"
              >
                Send Us Quotes
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[70px] sm:h-[90px] xl:h-[95px]"></div>

      {/* <div className="h-[150px] lg:h-[95px]"></div> */}
      <div className="relative z-10 bg-gradient-to-r from-navy via-ocean to-navy px-4 py-2 text-left text-xs font-semibold tracking-wide text-accent sm:text-sm">
        TAN License Number - MRTR09551D | IATTE /20-21/2157
      </div>

      <section className="relative isolate flex min-h-[70vh] flex-col justify-center overflow-hidden px-4 pb-12 pt-8 sm:pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?fm=jpg&q=70&w=1800&auto=format&fit=crop"
          srcSet="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?fm=jpg&q=65&w=900&auto=format&fit=crop 900w, https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?fm=jpg&q=70&w=1800&auto=format&fit=crop 1800w"
          sizes="100vw"
          width="1800"
          height="1200"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hero-img pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />

        <div className="hero-gradient pointer-events-none absolute inset-0 -z-10"></div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(72,202,228,0.15),transparent_55%)]"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-3xl">
            <div className="glass-panel mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-navy shadow-premium">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.1 3.55-5.19 3.55-8.65z"
                ></path>

                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.88-3c-1.08.73-2.47 1.17-4.05 1.17-3.11 0-5.74-2.1-6.68-4.92H1.32v3.08A12 12 0 0 0 12 24z"
                ></path>

                <path
                  fill="#FBBC05"
                  d="M5.32 14.35A7.2 7.2 0 0 1 4.95 12c0-.82.14-1.62.37-2.35V6.57H1.32a12 12 0 0 0 0 10.86l4-3.08z"
                ></path>

                <path
                  fill="#EA4335"
                  d="M12 4.77c1.76 0 3.34.6 4.59 1.79l3.45-3.45A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.32 6.57l4 3.08c.94-2.82 3.57-4.88 6.68-4.88z"
                ></path>
              </svg>

              <span>⭐ 4.7/5 Google Rating</span>
            </div>

            <p className="mb-2 inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-xs font-medium text-white backdrop-blur sm:text-sm">
              <LucideIcon name="map-pin" className="mr-1.5 h-4 w-4" />
              Bangkok · Pattaya · Phuket · Krabi & more
            </p>

            <h1 className="mt-5 font-display max-w-3xl text-[2.5rem] leading-[1.05] font-extrabold sm:text-5xl leading-[1.15] tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl">
              Best Thailand Tour Packages
            </h1>

            <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-white sm:text-lg">
              Plan your Thailand trip from your city with
              <span className="font-bold text-white">
                Guaranteed Best Price
              </span>
            </p>

            <div className="mt-5 flex items-center gap-0">
              {/* PRICE CARD */}
              <div className="mt-5 flex items-center gap-6">
                {/* BIG PRICE CARD */}
                <div
                  className="
relative
w-full
max-w-[480px]
rounded-3xl
bg-white
px-6
py-6
shadow-2xl
flex
items-center
justify-between
"
                >
                  {/* LEFT CONTENT */}
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-extrabold uppercase text-[#e6b400]">
                        LAND ONLY
                      </span>

                      <span className="text-xl line-through text-slate-400">
                        ₹20,000
                      </span>
                    </div>
                    {/* MOBILE LIVE SALE */}

                    <div
                      className="
absolute
top-4
right-4
md:hidden
"
                    >
                      <div
                        className="
flex
items-center
gap-1

rounded-full

bg-gradient-to-r
from-red-600
to-orange-500

px-3
py-1

text-[10px]
font-black
uppercase

text-white

animate-pulse
shadow-lg
"
                      >
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                        Season Sale 20%
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-5xl font-extrabold text-navy">
                        ₹16,000
                      </span>

                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                        No Cost EMI
                      </span>
                    </div>

                    <button
                      onClick={openEnquiryModal}
                      className="
          mt-5
          w-[320px]
          rounded-xl
          bg-navy
          px-5
          py-3
          text-white
        "
                    >
                      Send Us Quotes
                    </button>
                  </div>

                  {/* BADGE INSIDE CARD */}
                  <div className="hidden md:block shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}optimized/img/badge-display.jpg`}
                      alt="Season Sale 20% off"
                      loading="lazy"
                      decoding="async"
                      width="500"
                      height="333"
                      className="
    w-[250px]
    h-auto
    object-contain
    -ml-10
    animate-badge
  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="review-fade relative mt-4 h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[520px] lg:w-[380px]">
            <div className="review-track">
              <div className="review-card">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src="https://ui-avatars.com/api/?name=Avinash+Gupta&background=random"
                    alt="Avinash Gupta"
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                    className="h-12 w-12 rounded-full"
                  />

                  <div>
                    <p className="text-lg font-bold">Avinash Gupta</p>
                    <p className="text-sm text-white/70">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/90">
                  We recently returned from our honeymoon in Bangkok and
                  Pattaya, and it was an incredible experience with Kingdom of
                  Holidays.
                </p>
              </div>

              <div className="review-card">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src="https://ui-avatars.com/api/?name=Pavan+Patil&background=random"
                    alt="Pavan Patil"
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                    className="h-12 w-12 rounded-full"
                  />

                  <div>
                    <p className="text-lg font-bold">Pavan Patil</p>
                    <p className="text-sm text-white/70">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/90">
                  Everything was well planned by the team. Arrangements were
                  smooth and the stay experience was amazing.
                </p>
              </div>

              <div className="review-card">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src="https://ui-avatars.com/api/?name=Shalu+Jaitwar&background=random"
                    alt="Shalu Jaitwar"
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                    className="h-12 w-12 rounded-full"
                  />

                  <div>
                    <p className="text-lg font-bold">Shalu Jaitwar</p>
                    <p className="text-sm text-white/70">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/90">
                  Had a great Thailand experience with Kingdom of Holidays.
                  Everything was smooth and hassle free.
                </p>
              </div>

              <div className="review-card">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src="https://ui-avatars.com/api/?name=Avinash+Gupta&background=random"
                    alt="Avinash Gupta"
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                    className="h-12 w-12 rounded-full"
                  />

                  <div>
                    <p className="text-lg font-bold">Avinash Gupta</p>
                    <p className="text-sm text-white/70">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/90">
                  We recently returned from our honeymoon in Bangkok and
                  Pattaya, and it was an incredible experience with Kingdom of
                  Holidays.
                </p>
              </div>

              <div className="review-card">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src="https://ui-avatars.com/api/?name=Pavan+Patil&background=random"
                    alt="Pavan Patil"
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                    className="h-12 w-12 rounded-full"
                  />

                  <div>
                    <p className="text-lg font-bold">Pavan Patil</p>
                    <p className="text-sm text-white/70">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/90">
                  Everything was well planned by the team. Arrangements were
                  smooth and the stay experience was amazing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="travel-divider"></div>
      <div className="relative -mt-px bg-slate-50 text-white">
        <svg
          className="block w-full translate-y-px"
          viewBox="0 0 1440 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill="#f8fafc"
            d="M0 48V20c120 22 240 33 360 33s240-11 360-33 240-22 360-22 240 11 360 33V48H0z"
          />
        </svg>
      </div>

      <section className="travel-art-bg-soft border-y border-slate-200 py-10 overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl bg-white/90 p-5 shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-ocean/30">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100 blur-3xl transition duration-500 group-hover:scale-150"></div>

            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a192f] to-[#003459] text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <LucideIcon name="wand-sparkles" className="h-8 w-8" />
              </div>

              <div>
                <p className="text-lg font-bold text-navy">
                  100% Customized Packages
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Tailor-made itineraries
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/90 p-5 shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-300">
            <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-red-100 blur-3xl transition duration-500 group-hover:scale-150"></div>

            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <LucideIcon name="calendar-x-2" className="h-8 w-8" />
              </div>

              <div>
                <p className="text-lg font-bold text-navy">Free Cancellation</p>

                <p className="mt-1 text-sm text-slate-500">
                  Flexible booking support
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/90 p-5 shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-emerald-300">
            <div className="absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-emerald-100 blur-3xl transition duration-500 group-hover:scale-150"></div>

            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <LucideIcon name="shield-check" className="h-8 w-8" />
              </div>

              <div>
                <p className="text-lg font-bold text-navy">Free Insurance</p>

                <p className="mt-1 text-sm text-slate-500">
                  Safe & secure travel
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/90 p-5 shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-yellow-300">
            <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-yellow-100 blur-3xl transition duration-500 group-hover:scale-150"></div>

            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <LucideIcon name="credit-card" className="h-8 w-8" />
              </div>

              <div>
                <p className="text-lg font-bold text-navy">No Cost EMI</p>

                <p className="mt-1 text-sm text-slate-500">
                  Easy payment options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PackageGallery onEnquire={openEnquiryModal} />

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-sky-200 bg-gradient-to-r from-[#022b57] via-[#0a3d73] to-[#dbeeff] shadow-2xl">
          <img
            src="https://wsrv.nl/?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1436491865332-7a61a109cc05%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D70&w=1000&fit=cover&output=jpg&q=70"
            alt=""
            loading="lazy"
            decoding="async"
            width="1000"
            height="667"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#021d3a]/95 via-[#06325f]/90 to-[#dbeeff]/80"></div>

          <div className="relative flex flex-col gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:py-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white/10 shadow-lg ring-2 ring-white/20 backdrop-blur md:flex">
                <LucideIcon name="plane" className="h-14 w-14 text-[#ffd54a]" />
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold text-white sm:text-4xl">
                  Flight Booking
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-lg">
                  Lock fares to Bangkok, Phuket & beyond. Bundle flights with
                  your land package for one itinerary, one support line.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflbHdaqZznZSr6qVgosl7HU2UJ25l0BKpTQ&s"
                    loading="lazy"
                    decoding="async"
                    alt="Airline"
                    width="120"
                    height="48"
                    className="h-10 sm:h-12 rounded-lg bg-white p-1 shadow-md"
                  />

                  <img
                    src="https://seekvectorlogo.com/wp-content/uploads/2022/01/indigo-vector-logo-2022.png"
                    alt="Indigo"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                    className="h-8 sm:h-10 rounded-lg bg-white p-1 shadow-md"
                  />

                  <img
                    src="https://upload.wikimedia.org/wikipedia/kn/f/fa/SpiceJet_logo.png"
                    alt="SpiceJet"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                    className="h-8 sm:h-10 rounded-lg bg-white p-1 shadow-md"
                  />

                  <img
                    src="https://e7.pngegg.com/pngimages/796/303/png-clipart-kuala-lumpur-international-airport-airasia-flight-low-cost-carrier-simple-atmosphere-company-text.png"
                    alt="AirAsia"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                    className="h-8 sm:h-10 rounded-lg bg-white p-1 shadow-md"
                  />

                  <img
                    src="https://airhex.com/images/airline-logos/alt/thai-lion-air.png"
                    alt="thai lion"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                    className="h-8 sm:h-10 rounded-lg bg-white p-1 shadow-md"
                  />

                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJDz9FOxEZeNwXHtnyCwOwWrFm47CoB_e8g&s"
                    loading="lazy"
                    decoding="async"
                    alt="Singapore Airlines"
                    width="120"
                    height="40"
                    className="h-8 sm:h-10 rounded-lg bg-white p-1 shadow-md"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={openEnquiryModal}
              className="inline-flex w-full shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#ffcc00] to-[#ffb700] px-8 py-4 text-base font-extrabold text-[#082c4c] shadow-xl transition hover:scale-105 hover:brightness-105 md:w-auto"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
        <style>
          {`
      @keyframes happyClientsMarquee {
        from {
          transform: translateX(-50%);
        }
        to {
          transform: translateX(0);
        }
      }
    `}
        </style>

        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Happy Clients
            </h2>
          </div>

          <div className="mt-12 overflow-hidden">
            <div className="flex w-max gap-6 [animation:happyClientsMarquee_22s_linear_infinite]">
              {[
                "client-1.jpg",
                "client-2.jpg",
                "client-3.jpg",
                "client-4.jpg",
                "client-1.jpg",
                "client-2.jpg",
                "client-3.jpg",
                "client-4.jpg",
              ].map((image, index) => (
                <figure
                  key={`${image}-${index}`}
                  className="w-[300px] shrink-0 overflow-hidden rounded-[24px] border border-cyan-400/40 bg-white shadow-[0_0_25px_rgba(34,211,238,0.35)] sm:w-[380px] lg:w-[450px]"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}optimized/arrivals/${image}`}
                    alt={`Happy client ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="450"
                    className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[340px]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display reveal text-center text-3xl font-extrabold text-navy sm:text-4xl">
            How It Works
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Three simple steps from idea to confirmed holiday.
          </p>
          <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-[17%] right-[17%] top-12 hidden border-t-2 border-dashed border-ocean/25 md:block"></div>
            <div className="how-card reveal rounded-3xl p-6 text-center sm:p-7">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-ocean text-accent shadow-lg">
                <LucideIcon name="map-pinned" className="h-9 w-9" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-navy">
                Enquire
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Share dates, budget and departure city. We instantly shape
                options around your style of travel.
              </p>
            </div>
            <div className="how-card reveal rounded-3xl p-6 text-center sm:p-7">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-ocean text-accent shadow-lg">
                <LucideIcon name="plane-takeoff" className="h-9 w-9" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-navy">
                Consult
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Travel experts refine hotels, flights, transfers and activities
                until the plan fits perfectly.
              </p>
            </div>
            <div className="how-card reveal rounded-3xl p-6 text-center sm:p-7">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-ocean text-accent shadow-lg">
                <LucideIcon name="luggage" className="h-9 w-9" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-navy">
                Receive Confirmation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Get your vouchers and full support line. Pack your bags and
                start your Thailand journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="travel-divider"></div>

      <section className="py-14 bg-gradient-to-r from-[#063a7b] to-[#0d4e9e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-white mb-10">
            Explore More Destinations 🌍
          </h2>

          <div className="slider overflow-hidden">
            <div className="slide-track flex gap-6 pb-4">
              <button
                type="button"
                onClick={openEnquiryModal}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 text-left shadow-lg"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?fm=jpg&q=70&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Andaman beach"
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="475"
                  className="w-full h-[190px] object-cover rounded-2xl"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">Explore Andaman</h3>

                  <div className="mt-2 inline-block bg-red-700 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹16,000 / per person
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={openEnquiryModal}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 text-left shadow-lg"
              >
                <img
                  src="https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg"
                  alt="Dubai marina"
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="475"
                  className="w-full h-[190px] object-cover rounded-2xl"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">Explore Dubai</h3>

                  <div className="mt-2 inline-block bg-red-700 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹21,000 / per person
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={openEnquiryModal}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 text-left shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1565967511849-76a60a516170?fm=jpg&q=70&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww"
                  alt="Singapore skyline"
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="475"
                  className="w-full h-[190px] object-cover rounded-2xl"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">Explore Singapore</h3>

                  <div className="mt-2 inline-block bg-red-700 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹32,500 / per person
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={openEnquiryModal}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 text-left shadow-lg"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/040/975/135/small_2x/kuala-lumpur-skyline-photo.jpg"
                  alt="Kuala Lumpur skyline"
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="475"
                  className="w-full h-[190px] object-cover rounded-2xl"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">Explore Malaysia</h3>

                  <div className="mt-2 inline-block bg-red-700 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹20,500 / per person
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={openEnquiryModal}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 text-left shadow-lg"
              >
                <img
                  src="https://t4.ftcdn.net/jpg/05/27/35/17/360_F_527351710_aH1947RJnh0lRsUWHVOZRPDgKmW70GUQ.jpg"
                  loading="lazy"
                  decoding="async"
                  alt="Vietnam landscape"
                  width="700"
                  height="475"
                  className="w-full h-[190px] object-cover rounded-2xl"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">Explore Vietnam</h3>

                  <div className="mt-2 inline-block bg-red-700 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹21,500 / per person
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={openEnquiryModal}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 text-left shadow-lg"
              >
                <img
                  src="https://t3.ftcdn.net/jpg/03/23/68/06/360_F_323680669_1plSwiFmIYF6mAplKcZQS8rMBbqqxaCp.jpg"
                  loading="lazy"
                  decoding="async"
                  alt="Bali beach"
                  width="700"
                  height="475"
                  className="w-full h-[190px] object-cover rounded-2xl"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">Explore Bali</h3>

                  <div className="mt-2 inline-block bg-red-700 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹23,500 / per person
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
