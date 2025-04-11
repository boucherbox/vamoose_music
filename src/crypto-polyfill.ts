// Add this file to your project and import it in main.tsx

// Polyfill for crypto.randomUUID
if (!crypto.randomUUID) {
    crypto.randomUUID = function() {
      // Simple UUID v4 implementation
      return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
      );
    };
  }