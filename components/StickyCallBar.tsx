// components/StickyCallBar.tsx
import { TEL_NUMBER, DISPLAY_NUMBER } from "./PhoneNumber";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 border-t border-gray-300 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-sm text-gray-700 hidden sm:block">
          Ready to start your next excavation or grading project?
        </p>
        <a
          href={`tel:${TEL_NUMBER}`}
          className="flex-1 sm:flex-none text-center rounded-md px-4 py-2 text-base font-semibold bg-green-600 text-white hover:bg-green-700"
        >
          Call Now • {DISPLAY_NUMBER}
        </a>
      </div>
    </div>
  );
}
