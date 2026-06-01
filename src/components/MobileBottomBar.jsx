import { Mail, MessageCircle, Phone } from 'lucide-react';

export default function MobileBottomBar({ onEnquire }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden">
      <div className="grid grid-cols-3 text-center text-white">
        <a href="tel:+919599260057" className="bg-blue-500 py-2">
          <Phone aria-hidden="true" className="mx-auto h-4 w-4" />
          <p className="mt-1 text-xs">Call</p>
        </a>
        <button type="button" onClick={onEnquire} className="bg-purple-500 py-2">
          <Mail aria-hidden="true" className="mx-auto h-4 w-4" />
          <p className="mt-1 text-xs">Enquire</p>
        </button>
        <a href="https://wa.me/919599260057" className="bg-green-500 py-2">
          <MessageCircle aria-hidden="true" className="mx-auto h-4 w-4" />
          <p className="mt-1 text-xs">WhatsApp</p>
        </a>
      </div>
    </div>
  );
}
