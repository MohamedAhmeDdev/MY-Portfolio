export default function ContactCTA({ onOpenModal }) {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Decorative ambient background blur objects */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl animate-float-1" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl animate-float-2" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-low-contrast-theme">
          GET IN TOUCH
        </span>
        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 mb-6 leading-tight text-main-theme">
          Let's design something inevitable.
        </h2>
        <p className="font-sans text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10 text-muted-theme">
          Have an idea or a project that needs deep technical execution and pristine design polish? Let's build it together.
        </p>
        <button
          onClick={onOpenModal}
          className="font-sans text-xs font-bold px-8 py-4 rounded-full transition-all active:scale-95 shadow-sm tracking-wide cursor-pointer bg-[#0a0a0f] text-white hover:bg-[#0a0a0f]/90 dark:bg-white dark:text-[#0a0a0f] dark:hover:bg-white/90"
        >
          Initiate Conversation
        </button>
      </div>
    </section>
  );
}