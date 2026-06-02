
// const DURATIONS = [
//   "3N-4D",
//   "4N-5D",
//   "5N-6D",
//   "6N-7D",
//   "7N-8D",
//   "8N-9D",
//   "9N-10D",
//   "10N-11D",
// ];

// const TOUR_TYPES = ["Family", "Couple", "Honeymoon", "Friends"];

// export default function EnquiryModal({ open, onClose }) {
//   if (!open) return null;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const [{ default: emailjs }, { default: Swal }] = await Promise.all([
//       import("@emailjs/browser"),
//       import("sweetalert2"),
//     ]);

//     emailjs
//       .sendForm("service_uxwdrrf", "template_rvx3a2p", e.target, {
//         publicKey: "5nlF7sfx0GCXUMqiq",
//       })
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Success 🎉",
//           text: "Enquiry Sent Successfully",
//           confirmButtonColor: "#063a7b",
//         });

//         e.target.reset();
//         onClose();
//       })
//       .catch(() => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops!",
//           text: "Something went wrong",
//         });
//       });
//   };

//   return (
//     <div
//       id="enquiryModal"
//       className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-4"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="enquiry-title"
//     >
//       <div className="flex min-h-screen items-center justify-center p-2 sm:p-4">
//         <div className="relative max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-[24px] bg-white p-4 shadow-2xl sm:max-h-[90vh] sm:rounded-[30px] sm:p-6">
//           {/* HEADER */}
//           <div className="mb-4 pr-12 sm:mb-8">
//             <h2
//               id="enquiry-title"
//               className="text-xl font-bold text-blue-700 sm:text-2xl"
//             >
//               Get Free Quotes In 30 Minutes
//             </h2>

//             {/* <p className="mt-1 text-right text-[10px] font-semibold uppercase tracking-wide text-gray-500">
//               Terms & Conditions Applied
//             </p> */}

//             <button
//               type="button"
//               onClick={onClose}
//               className="absolute right-3 top-3 z-[999] flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-600 hover:bg-gray-200 sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:text-xl"
//               aria-label="Close"
//             >
//               ✕
//             </button>
//           </div>

//           {/* FORM */}
//           <form
//             id="enquiryForm"
//             className="space-y-3 sm:space-y-4"
//             onSubmit={handleSubmit}
//           >
//             {/* NAME + PHONE */}
//             <div className="grid gap-3 sm:grid-cols-2">
//               <input
//                 type="text"
//                 name="full_name"
//                 aria-label="Name"
//                 placeholder="Name"
//                 required
//                 className="w-full rounded-xl border p-2.5 outline-none focus:ring-2 focus:ring-blue-400 sm:p-3"
//               />

//               <div className="flex items-center overflow-hidden rounded-xl border focus-within:ring-2 focus-within:ring-blue-400">
//                 <span className="border-r bg-gray-100 px-3 text-gray-700">
//                   +91
//                 </span>

//                 <input
//                   type="tel"
//                   name="phone"
//                   aria-label="Phone Number"
//                   placeholder="Phone Number"
//                   required
//                   className="w-full p-2.5 outline-none sm:p-3"
//                 />
//               </div>
//             </div>

//             {/* DEPARTURE CITY */}
//             <input
//               type="text"
//               name="departure_city"
//               aria-label="Departure City"
//               placeholder="Departure City"
//               required
//               className="w-full rounded-xl border p-2.5 outline-none sm:p-3"
//             />

//             {/* TRAVEL DATE */}
//             <div>
//               <label
//                 htmlFor="travel-date"
//                 className="mb-1.5 block text-sm font-semibold text-black sm:mb-2"
//               >
//                 Travel Date
//               </label>

//               <input
//                 type="date"
//                 id="travel-date"
//                 name="travel_date"
//                 required
//                 min={new Date().toISOString().split("T")[0]}
//                 className="w-full appearance-none rounded-xl border border-slate-300 px-3 py-2.5 outline-none sm:px-4 sm:py-3"
//               />
//             </div>

//             {/* NO. OF PERSON */}
//             <select
//               name="adults"
//               aria-label="Number of persons"
//               required
//               className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none sm:px-4 sm:py-3"
//             >
//               <option value="">No. Of Person</option>
//               <option value="1">1 Person</option>
//               <option value="2">2 Persons</option>
//               <option value="3">3 Persons</option>
//               <option value="4">4 Persons</option>
//               <option value="5">5 Persons</option>
//               <option value="6">6 Persons</option>
//               <option value="7">7 Persons</option>
//               <option value="8">8 Persons</option>
//               <option value="9">9 Persons</option>
//               <option value="10+">10+ Persons</option>
//             </select>

//             {/* TOUR TYPE */}
//             <select
//               name="tour_type"
//               aria-label="Tour type"
//               required
//               className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none sm:px-4 sm:py-3"
//             >
//               <option value="">Select Tour Type</option>
//               {TOUR_TYPES.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>

//             {/* SUBMIT BUTTON */}
//             <button
//               type="submit"
//               className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#022b57] to-[#004a8f] py-2.5 text-sm font-bold text-white transition hover:scale-[1.02] sm:mt-5 sm:py-3 sm:text-base"
//             >
//               Get My Quote 🚀 | Get 20% Off Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";

const TOUR_TYPES = ["Family", "Couple", "Honeymoon", "Friends"];

export default function EnquiryModal({ open, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const [{ default: emailjs }, { default: Swal }] = await Promise.all([
        import("@emailjs/browser"),
        import("sweetalert2"),
      ]);

      await emailjs.sendForm("service_uxwdrrf", "template_rvx3a2p", e.target, {
        publicKey: "5nlF7sfx0GCXUMqiq",
      });

      await Swal.fire({
        icon: "success",
        title: "Success 🎉",
        text: "Enquiry Sent Successfully",
        confirmButtonColor: "#063a7b",
      });

      e.target.reset();
      onClose();
    } catch {
      const { default: Swal } = await import("sweetalert2");

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="enquiryModal"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
    >
      <div className="flex min-h-screen items-center justify-center p-2 sm:p-4">
        <div className="relative max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-[24px] bg-white p-4 shadow-2xl sm:max-h-[90vh] sm:rounded-[30px] sm:p-6">
          <div className="mb-4 pr-12 sm:mb-8">
            <h2
              id="enquiry-title"
              className="text-xl font-bold text-blue-700 sm:text-2xl"
            >
              Get Free Quotes In 30 Minutes
            </h2>

            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="absolute right-3 top-3 z-[999] flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-600 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60 sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:text-xl"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <form
            id="enquiryForm"
            className="space-y-3 sm:space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="full_name"
                aria-label="Name"
                placeholder="Name"
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border p-2.5 outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-slate-100 sm:p-3"
              />

              <div className="flex items-center overflow-hidden rounded-xl border focus-within:ring-2 focus-within:ring-blue-400">
                <span className="border-r bg-gray-100 px-3 text-gray-700">
                  +91
                </span>

                <input
                  type="tel"
                  name="phone"
                  aria-label="Phone Number"
                  placeholder="Phone Number"
                  required
                  disabled={isSubmitting}
                  className="w-full p-2.5 outline-none disabled:bg-slate-100 sm:p-3"
                />
              </div>
            </div>

            <input
              type="text"
              name="departure_city"
              aria-label="Departure City"
              placeholder="Departure City"
              required
              disabled={isSubmitting}
              className="w-full rounded-xl border p-2.5 outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-slate-100 sm:p-3"
            />

            <div>
              <label
                htmlFor="travel-date"
                className="mb-1.5 block text-sm font-semibold text-black sm:mb-2"
              >
                Travel Date
              </label>

              <input
                type="date"
                id="travel-date"
                name="travel_date"
                required
                disabled={isSubmitting}
                min={new Date().toISOString().split("T")[0]}
                className="min-h-[46px] w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none [color-scheme:light] focus:ring-2 focus:ring-blue-400 disabled:bg-slate-100 sm:px-4 sm:py-3"
              />
            </div>

            <select
              name="adults"
              aria-label="Number of persons"
              required
              disabled={isSubmitting}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-slate-100 sm:px-4 sm:py-3"
            >
              <option value="">No. Of Person</option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5">5 Persons</option>
              <option value="6">6 Persons</option>
              <option value="7">7 Persons</option>
              <option value="8">8 Persons</option>
              <option value="9">9 Persons</option>
              <option value="10+">10+ Persons</option>
            </select>

            <select
              name="tour_type"
              aria-label="Tour type"
              required
              disabled={isSubmitting}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-slate-100 sm:px-4 sm:py-3"
            >
              <option value="">Select Tour Type</option>
              {TOUR_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#022b57] to-[#004a8f] py-2.5 text-sm font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:mt-5 sm:py-3 sm:text-base"
            >
              {isSubmitting ? "Sending..." : "Get My Quote 🚀 | Get 20% Off Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}