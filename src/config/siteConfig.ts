/**
 * SOUNIVEX ENTERPRISES - SITE & LOGO CONFIGURATION
 * 
 * You can customize your logo in two ways:
 * 1. From the live website: Click "Change Logo" in the footer to upload a new logo image instantly from your phone or PC.
 * 2. Permanent Hosting upload:
 *    - Place your new logo image file inside the "public" folder as "public/logo.png",
 *    - OR set customLogoUrl below to your image path (e.g. "/logo.png" or an online URL).
 *    - If left empty (""), the built-in gold & deep-sky-blue vector emblem will be used.
 */

export const siteConfig = {
  // Set this to your logo image path (e.g. "/logo.png" or an uploaded image link). Leave empty to use default.
  customLogoUrl: "", 

  companyName: "SOUNIVEX",
  companySubtitle: "ENTERPRISES",
  phone: "9903312856",
  email: "sounivexenterprises@gmail.com",
  address: "BAGHAJATIN S.P.D. BLOCK, KMC MARKET COMPLEX, UNIT-3, 1ST FLOOR, SHOP NO. 13, BAGHAJATIN STATION ROAD, KOLKATA - 700086",
};

export const LOCAL_STORAGE_LOGO_KEY = 'sounivex_custom_logo_data';

// Helper to get active logo (localStorage overrides config file)
export const getActiveLogoUrl = (): string => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(LOCAL_STORAGE_LOGO_KEY);
    if (saved) return saved;
  }
  return siteConfig.customLogoUrl || "";
};

// Helper to save uploaded logo
export const setActiveLogoUrl = (url: string) => {
  if (typeof window !== 'undefined') {
    if (url) {
      localStorage.setItem(LOCAL_STORAGE_LOGO_KEY, url);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_LOGO_KEY);
    }
    // Dispatch custom event to notify all components
    window.dispatchEvent(new Event('sounivex-logo-updated'));
  }
};
