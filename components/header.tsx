'use client'

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre-a-clinica" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <Link href="/" className="font-bold text-xl">Logo</Link>

        {/* Botão Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 border rounded"
        >
          {open ? "X" : "≡"}
        </button>

        {/* Links desktop */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-[#D4AF37]">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Menu Mobile com overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Painel lateral com fundo branco */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg flex flex-col p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mb-4 text-lg font-medium hover:text-[#D4AF37]"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}