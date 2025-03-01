'use client'
import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppPopup = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show message after 10 seconds
    const showTimer = setTimeout(() => {
      setShowMessage(true);
    }, 10000);

    // Hide message after 5 seconds
    const hideTimer = setTimeout(() => {
      setShowMessage(false);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {/* Message Pop-up */}
      {showMessage && (
        <div className="bg-white text-gray-500 px-4 py-2 rounded-lg shadow-md mb-2 animate-fadeIn">
          You have any course inquiry?
        </div>
      )}

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/27698379658?text=Hello! I'm interested in your courses."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#150233] p-3 rounded-full shadow-lg hover:bg-purple-600 transition"
      >
        <MessageCircle size={30} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsAppPopup;
