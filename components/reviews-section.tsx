"use client";

import { Button } from "@/components/ui/button";

type ReviewsSectionProps = {
  className?: string;
};

export function ReviewsSection({ className = "" }: ReviewsSectionProps) {
  const handleGoogleReview = () => {
    const googleReviewUrl = "https://g.page/r/CcRoCjMMT1duEAE/review";
    window.open(googleReviewUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-700/50 text-center ${className}`.trim()}
      style={{ backgroundColor: "#222222" }}
    >
      <div className="w-16 h-16 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-6 border border-gray-600/50">
        <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </div>
      <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
        Compartí tu experiencia
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed font-light mb-8 lg:mt-8">
        Tu reseña en Google nos ayuda a que más personas descubran Laguna by
        Mestizo.
      </p>

      <Button
        onClick={handleGoogleReview}
        className="w-full bg-gray-800 hover:bg-gray-700 text-white py-5 text-lg border border-gray-700/50 mt-6 lg:mt-14"
        size="lg"
      >
        <div className="flex items-center justify-center gap-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span>Dejar reseña en Google</span>
        </div>
      </Button>
    </div>
  );
}
