import { motion } from "motion/react";

export function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-full max-w-4xl mx-auto mt-16 perspective-[1200px]"
    >
      <div className="rounded-xl overflow-hidden shadow-2xl shadow-neutral-900/10 border border-neutral-200">
        {/* Browser bar */}
        <div className="bg-neutral-100 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-[0.6875rem] text-neutral-400 text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            yourwebsite.com
          </div>
        </div>

        {/* Mock website content */}
        <div className="bg-white p-6 md:p-8 space-y-6">
          {/* Mock nav */}
          <div className="flex items-center justify-between">
            <div className="w-16 h-4 bg-neutral-900 rounded-sm" />
            <div className="flex gap-4">
              <div className="w-12 h-2.5 bg-neutral-200 rounded-full" />
              <div className="w-12 h-2.5 bg-neutral-200 rounded-full" />
              <div className="w-12 h-2.5 bg-neutral-200 rounded-full" />
              <div className="w-16 h-6 bg-neutral-900 rounded-full" />
            </div>
          </div>

          {/* Mock hero */}
          <div className="pt-8 pb-4 space-y-4">
            <motion.div
              className="w-48 h-4 bg-neutral-100 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-full max-w-sm h-6 bg-neutral-900 rounded-sm" />
            <div className="w-full max-w-xs h-6 bg-neutral-800 rounded-sm" />
            <div className="w-full max-w-md h-3 bg-neutral-100 rounded-full mt-4" />
            <div className="w-full max-w-sm h-3 bg-neutral-100 rounded-full" />

            <div className="flex gap-3 pt-4">
              <motion.div
                className="w-28 h-8 bg-neutral-900 rounded-full"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="w-28 h-8 border border-neutral-200 rounded-full" />
            </div>
          </div>

          {/* Mock cards */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.2 }}
                className="bg-neutral-50 rounded-lg p-4 space-y-2"
              >
                <div className="w-8 h-8 bg-neutral-200 rounded-lg" />
                <div className="w-full h-2.5 bg-neutral-200 rounded-full" />
                <div className="w-3/4 h-2 bg-neutral-100 rounded-full" />
                <div className="w-1/2 h-2 bg-neutral-100 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
