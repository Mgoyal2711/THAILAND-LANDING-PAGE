// import { Link } from 'react-router-dom';

// import OptimizedImage from './OptimizedImage';

// export default function Footer() {
//   return (
//     <footer className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
//           <div>
//             <div className="flex items-center gap-2">
//               <div className="h-10 w-10 overflow-hidden rounded-lg">
//                 <OptimizedImage
//                   src="/img/koh logo.jpeg"
//                   alt="Kingdom of Holidays"
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               <div>
//                 <p className="text-lg font-bold text-navy">Kingdom of Holidays</p>
//                 <p className="text-xs text-slate-500">Thailand packages · Custom itineraries</p>

//                 <div className="mt-2 flex items-center gap-2">
//                   <a
//                     href="https://www.facebook.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-110"
//                   >
//                     <span className="text-sm font-black leading-none">f</span>
//                   </a>

//                   <a
//                     href="https://www.instagram.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white transition hover:scale-110"
//                   >
//                     <span className="text-xs font-black leading-none">IG</span>
//                   </a>

//                   <a
//                     href="https://www.youtube.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="YouTube"
//                     className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white transition hover:scale-110"
//                   >
//                     <span className="text-[10px] font-black leading-none">YT</span>
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="LinkedIn"
//                     className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:scale-110"
//                   >
//                     <span className="text-xs font-black leading-none">in</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="mb-1 font-semibold text-navy">Quick Links</h4>
//             <div className="flex flex-col gap-0.5 text-sm text-slate-600">
//               <Link to="/about">About Us</Link>
//               <Link to="/contact">Contact Us</Link>
//               <Link to="/privacy">Privacy Policy</Link>
//               <Link to="/terms">Terms &amp; Conditions</Link>
//               <Link to="/cancel">Cancellation Policy</Link>
//             </div>
//           </div>

//           <div>
//             <h4 className="mb-1 font-semibold text-navy">📍 India Office</h4>
//             <p className="text-sm leading-5 text-slate-500">
//               SHOPPER SQUARE MALL
//               <br />
//               1st Floor, SNO4 14/8 Raj Nagar
//               <br />
//               DELHI-NCR-GZB -201002
//             </p>
//             <p className="mt-1 text-sm text-slate-500">📞 +91 9971600663</p>
//           </div>

//           <div>
//             <h4 className="mb-1 font-semibold text-navy">📍 Thailand Office</h4>
//             <p className="text-sm leading-5 text-slate-500">
//               193/59, Rungland Alley
//               <br />
//               South Pattaya Road
//               <br />
//               Nangpura, Banglamung
//               <br />
//               Chonburi – 20150
//             </p>
//             <p className="mt-1 text-sm text-slate-500">📞 +66 924751704</p>
//           </div>
//         </div>

//         <div className="mt-4 border-t pt-3 text-center">
//           <p className="text-sm text-slate-500">
//             © 2026 Kingdom of Holidays. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Link } from 'react-router-dom';

import OptimizedImage from './OptimizedImage';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-lg">
                <OptimizedImage
                  src="./img/koh logo.jpeg"
                  alt="Kingdom of Holidays"
                  width="40"
                  height="40"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-lg font-bold text-navy">Kingdom of Holidays</p>
                <p className="text-xs text-slate-500">Thailand packages · Custom itineraries</p>

                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/people/Kingdomofholidays/61558052705132/# "
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-200 transition hover:scale-110"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width="28"
                      height="28"
                      className="h-7 w-7 object-contain"
                    />
                  </a>

                  <a
                    href="http://instagram.com/kingdomofholidays/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-200 transition hover:scale-110"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width="28"
                      height="28"
                      className="h-7 w-7 object-contain"
                    />
                  </a>

                  <a
                    href="https://www.youtube.com/@kingdomofholidays"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-200 transition hover:scale-110"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width="28"
                      height="28"
                      className="h-7 w-7 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-1 font-semibold text-navy">Quick Links</h3>
            <div className="flex flex-col gap-0.5 text-sm text-slate-600">
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms &amp; Conditions</Link>
              <Link to="/cancel">Cancellation Policy</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-1 font-semibold text-navy">📍 India Office</h3>
            <p className="text-sm leading-5 text-slate-500">
              SHOPPER SQUARE MALL
              <br />
              1st Floor, SNO4 14/8 Raj Nagar
              <br />
              DELHI-NCR-GZB -201002
            </p>
            <p className="mt-1 text-sm text-slate-500">📞 +91 9971600663</p>
          </div>

          <div>
            <h3 className="mb-1 font-semibold text-navy">📍 Thailand Office</h3>
            <p className="text-sm leading-5 text-slate-500">
              193/59, Rungland Alley
              <br />
              South Pattaya Road
              <br />
              Nangpura, Banglamung
              <br />
              Chonburi – 20150
            </p>
            <p className="mt-1 text-sm text-slate-500">📞 +66 924751704</p>
          </div>
        </div>

        <div className="mt-4 border-t pt-3 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Kingdom of Holidays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
