// src/app/contact/page.js
// "use client" حذف شد!

import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Contact | Zana",
  description: "Get in Touch - Let's Build Something Together",
};

// این قسمت رو به یه کامپوننت جدا منتقل می‌کنیم
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s bring it to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* فرم تماس — حالا Client Component جدا */}
          <ContactForm />

          {/* اطلاعات تماس */}
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Info
              </h2>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "zana@example.com",
                  href: "mailto:zana@example.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+98 912 345 6789",
                  href: "tel:+989123456789",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Tehran, Iran",
                  href: "#",
                },
              ].map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {info.label}
                      </div>
                      <div className="font-semibold text-gray-800 dark:text-white">
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white">
                <p className="text-lg font-semibold mb-2">
                  Available for Freelance
                </p>
                <p className="text-sm opacity-90">
                  Open to new opportunities and collaborations
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
