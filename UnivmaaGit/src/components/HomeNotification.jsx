import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeNotification() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup automatically on page load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className="relative">
      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-3xl w-full shadow-xl relative flex flex-col md:flex-row gap-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-red-500 text-2xl font-bold"
              >
                ×
              </button>

              {/* Left Side: Image */}
              <div className="md:w-1/2 flex items-center justify-center">
                <img
                  src="/image/homemodal2.png"
                  alt="Dreamforce"
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Right Side: Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">
                  Next Stop 📍 Dreamforce 2026
                </h2>
                <p className="text-gray-600 mb-4">
                  We’ll be there with ideas, insights, and maybe a few
                  surprises.
                </p>
                <p className="mb-4 font-medium">
                  Want to chat, collaborate, or just say hi?{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Let’s Meet!
                  </span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md"
                >
                  Register Your Interest ➝
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
