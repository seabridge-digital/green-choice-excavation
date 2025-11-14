// components/CallBanner.tsx

import PhoneNumber, { DISPLAY_NUMBER, TEL_NUMBER } from "./PhoneNumber";

export default function CallBanner() {
  return (
    <div className="mt-8 mb-6 rounded-lg border border-gray-200 bg-gray-50 px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          Prefer to talk through your project?
        </h3>
        <p className="text-sm text-gray-700">
          Call now for a fast quote on excavation, grading, or land clearing.
        </p>
      </div>

      <a
        href={`tel:${TEL_NUMBER}`}
        className="inline-block rounded-md px-4 py-2 text-sm font-semibold bg-green-600 text-white hover:bg-green-700"
      >
        {DISPLAY_NUMBER}
      </a>
    </div>
  );
}
