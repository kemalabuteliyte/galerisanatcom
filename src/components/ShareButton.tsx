import React, { useState } from 'react';
import { Share2, Facebook, Twitter, MessageCircle, Linkedin, Link2, Check } from 'lucide-react';

/**
 * Props for the ShareButton component
 */
interface ShareButtonProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Social sharing component with support for multiple platforms and native share API
 *
 * @example
 * <ShareButton
 *   url={window.location.href}
 *   title="Artwork Title"
 *   description="Check out this amazing artwork"
 * />
 */
export const ShareButton: React.FC<ShareButtonProps> = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Eliyte™ Digital Art Gallery',
  description = 'Check out this amazing digital art',
  className = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  /**
   * Share using native Web Share API if available
   */
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
        setShowModal(false);
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled or failed:', error);
      }
    } else {
      setShowModal(true);
    }
  };

  /**
   * Copy link to clipboard
   */
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  /**
   * Share to Facebook
   */
  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      '_blank',
      'width=600,height=400'
    );
  };

  /**
   * Share to Twitter
   */
  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      '_blank',
      'width=600,height=400'
    );
  };

  /**
   * Share to WhatsApp
   */
  const shareToWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      '_blank',
      'width=600,height=400'
    );
  };

  /**
   * Share to LinkedIn
   */
  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      '_blank',
      'width=600,height=400'
    );
  };

  return (
    <>
      <button
        onClick={handleNativeShare}
        className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors ${className}`}
        aria-label="Share"
      >
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>

      {/* Share Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Share this page</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Social Share Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={shareToFacebook}
                className="flex items-center gap-3 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="font-medium">Facebook</span>
              </button>

              <button
                onClick={shareToTwitter}
                className="flex items-center gap-3 p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="font-medium">Twitter</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="flex items-center gap-3 p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </button>

              <button
                onClick={shareToLinkedIn}
                className="flex items-center gap-3 p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </button>
            </div>

            {/* Copy Link */}
            <div className="pt-4 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or copy link
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={url}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    copied
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="w-4 h-4" />
                      <span className="text-sm">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
};
