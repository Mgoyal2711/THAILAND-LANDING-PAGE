





import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function HomeBody() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>

      <section className="py-14 bg-gradient-to-r from-[#063a7b] to-[#0d4e9e] overflow-hidden">

        <div className="max-w-7xl mx-auto px-4">

          <p className="text-center text-white/80 text-sm font-semibold tracking-wider uppercase mb-3">
            OTHER POPULAR TOUR PACKAGES
          </p>

          <h2 className="text-center text-3xl font-bold text-white mb-10">
            Explore More Destinations 🌍
          </h2>

          <div className="slider overflow-hidden">

            <div className="slide-track flex gap-6 pb-4">

              {/* ANDAMAN */}
              <div
                onClick={() => setOpenModal(true)}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 shadow-lg transition hover:scale-[1.03]"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                  className="w-full h-[190px] object-cover rounded-2xl"
                  alt="Andaman"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">
                    Explore Andaman
                  </h3>

                  <div className="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹16,000 / per person
                  </div>
                </div>
              </div>

              {/* DUBAI */}
              <div
                onClick={() => setOpenModal(true)}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 shadow-lg transition hover:scale-[1.03]"
              >
                <img
                  src="https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg"
                  className="w-full h-[190px] object-cover rounded-2xl"
                  alt="Dubai"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">
                    Explore Dubai
                  </h3>

                  <div className="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹21,000 / per person
                  </div>
                </div>
              </div>

              {/* SINGAPORE */}
              <div
                onClick={() => setOpenModal(true)}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 shadow-lg transition hover:scale-[1.03]"
              >
                <img
                  src="https://images.unsplash.com/photo-1565967511849-76a60a516170?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                  className="w-full h-[190px] object-cover rounded-2xl"
                  alt="Singapore"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">
                    Explore Singapore
                  </h3>

                  <div className="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹32,500 / per person
                  </div>
                </div>
              </div>

              {/* MALAYSIA */}
              <div
                onClick={() => setOpenModal(true)}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 shadow-lg transition hover:scale-[1.03]"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/040/975/135/small_2x/kuala-lumpur-skyline-photo.jpg"
                  className="w-full h-[190px] object-cover rounded-2xl"
                  alt="Malaysia"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">
                    Explore Malaysia
                  </h3>

                  <div className="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹20,500 / per person
                  </div>
                </div>
              </div>

              {/* VIETNAM */}
              <div
                onClick={() => setOpenModal(true)}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 shadow-lg transition hover:scale-[1.03]"
              >
                <img
                  src="https://t4.ftcdn.net/jpg/05/27/35/17/360_F_527351710_aH1947RJnh0lRsUWHVOZRPDgKmW70GUQ.jpg"
                  className="w-full h-[190px] object-cover rounded-2xl"
                  alt="Vietnam"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">
                    Explore Vietnam
                  </h3>

                  <div className="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹21,500 / per person
                  </div>
                </div>
              </div>

              {/* BALI */}
              <div
                onClick={() => setOpenModal(true)}
                className="min-w-[280px] cursor-pointer bg-white rounded-3xl p-3 shadow-lg transition hover:scale-[1.03]"
              >
                <img
                  src="https://t3.ftcdn.net/jpg/03/23/68/06/360_F_323680669_1plSwiFmIYF6mAplKcZQS8rMBbqqxaCp.jpg"
                  className="w-full h-[190px] object-cover rounded-2xl"
                  alt="Bali"
                />

                <div className="pt-3">
                  <h3 className="font-bold text-lg">
                    Explore Bali
                  </h3>

                  <div className="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Starts ₹23,500 / per person
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <EnquiryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </>
  );
}