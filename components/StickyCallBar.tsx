// components/StickyCallBar.tsx

import PhoneNumber, { TEL_NUMBER, DISPLAY_NUMBER } from "./PhoneNumber";

export default function StickyCallBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-50">
      <a
        href={`tel:${TEL_NUMBER}`}
        className="block text-center bg-green-600 text-white font-semibold py-3 text-lg hover:bg-green-700"
      >
        Call Now • {DISPLAY_NUMBER}
      </a>
    </div>
  );
}
