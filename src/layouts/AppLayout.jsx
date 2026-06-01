import { useState, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import MobileBottomBar from '../components/MobileBottomBar';
import EnquiryModal from '../components/EnquiryModal';

import { useReveal } from '../hooks/useReveal';
import { useCountdown } from '../hooks/useCountdown';

export default function AppLayout() {

  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // OPEN MODAL
  const openEnquiryModal = useCallback(() => {
    setEnquiryOpen(true);
  }, []);

  // CLOSE MODAL
  const closeEnquiryModal = useCallback(() => {
    setEnquiryOpen(false);

    // reopen after 1 min
    setTimeout(() => {
      setEnquiryOpen(true);
    }, 60000);

  }, []);

  // AUTO OPEN AFTER 30 SEC
  useEffect(() => {

    const timer = setTimeout(() => {
      setEnquiryOpen(true);
    }, 30000);

    return () => clearTimeout(timer);

  }, []);

  // PACKAGE CLICK EVENT
  useEffect(() => {

    const handleOpenModal = () => {
      setEnquiryOpen(true);
    };

    window.addEventListener(
      'open-enquiry-modal',
      handleOpenModal
    );

    return () => {
      window.removeEventListener(
        'open-enquiry-modal',
        handleOpenModal
      );
    };

  }, []);

  useReveal();
  useCountdown();
  return (
    <div className="bg-softwhite font-sans text-slate-800 antialiased pb-16 lg:pb-0">

      <main id="main-content">
        <Outlet
          context={{
            openEnquiryModal,
            closeEnquiryModal,
          }}
        />
      </main>

      <Footer />

      <WhatsAppWidget />

      <MobileBottomBar
        onEnquire={openEnquiryModal}
      />

      <EnquiryModal
        open={enquiryOpen}
        onClose={closeEnquiryModal}
      />

    </div>
  );
}
