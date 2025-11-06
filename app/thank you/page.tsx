import Link from "next/link";

export const metadata = {
  title: "Thank You - Green Choice Excavation",
  description: "Thank you for contacting Green Choice Excavation. We'll get back to you soon.",
};

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-amber-50 font-sans">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-10 text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your submission. We’ll contact you as soon as we can.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-bold"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}