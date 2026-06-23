"use client"

import { useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
  message?: string
}

export function ThankYouModal({
  isOpen,
  onClose,
  message = "Thank you! We will reach you soon.",
}: ThankYouModalProps) {
  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return
    const timer = setTimeout(handleClose, 3000)
    return () => clearTimeout(timer)
  }, [isOpen, handleClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white text-black rounded-2xl p-8 md:p-10 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-gray-500 hover:text-black transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-7 h-7 text-green-600" />
              </div>
            </div>
            <p className="text-lg font-medium text-gray-900">{message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
