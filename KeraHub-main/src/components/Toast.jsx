import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X, Sparkles } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#84CC16] flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />,
    info: <Sparkles className="w-5 h-5 text-[#A3E635] flex-shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-3 liquid-glass-dark-pill px-4 py-3 shadow-2xl min-w-[290px] max-w-md border border-white/20">
        {icons[toast.type || 'info']}
        <div className="flex-1 text-xs font-semibold text-white tracking-tight">
          {toast.message}
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
