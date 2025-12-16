"use client"

import { useState, useEffect, useRef } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer w-14 h-14"
        aria-label="Open contact form"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed left-24 top-1/2 -translate-y-1/2 z-50">
          <div
            ref={formRef}
            className="bg-white rounded-2xl shadow-2xl w-[400px] relative animate-in slide-in-from-left duration-300"
          >
            <div className="bg-purple-600 text-white p-6 rounded-t-2xl relative flex items-center justify-between">
              <h3 className="text-xl font-semibold">Have a question?</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form content */}
            <div className="p-6">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  👤
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Enter your question below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <Input placeholder="Name" className="bg-gray-50 border-gray-200" />
                </div>

                <div>
                  <Input type="email" placeholder="E-mail" className="bg-gray-50 border-gray-200" />
                </div>

                <div>
                  <Textarea
                    placeholder="I want to know more"
                    rows={4}
                    className="bg-gray-50 border-gray-200 resize-none"
                  />
                </div>

                <div>
                  <Input placeholder="Your website" className="bg-gray-50 border-gray-200" />
                </div>

                <p className="text-xs text-gray-500">
                  By submitting you agree to receive SMS or e-mails for the provided channel. Rates may be applied.
                </p>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-6 rounded-lg cursor-pointer"
                >
                  Send <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
