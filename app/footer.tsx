// app/footer.tsx
import PhoneNumber from "@/components/PhoneNumber";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Branding */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h3 className="text-xl font-bold text-gray-900">
            Green Choice Excavation
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Excavation • Grading • Land Clearing
          </p>
        </div>

        {/* Phone Number */}
        <div className="text-center sm:text-right">
          <p className="text-sm text-gray-700">Call us today:</p>
          <PhoneNumber className="text-lg font-semibold text-green-600 hover:text-green-700" />
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mb-6">
        © {new Date().getFullYear()} Green Choice Excavation. All rights reserved.
      </div>
    </footer>
  );
}
