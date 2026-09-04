/**
 * AJ Gems WhatsApp Utility Module
 * 
 * Single source of truth for business contact details and WhatsApp message generation.
 * All WhatsApp CTAs throughout the application MUST import from this file.
 */

// Business WhatsApp number in international format (+91 93520 45336)
export const AJ_GEMS_WHATSAPP_NUMBER = "919352045336";
export const AJ_GEMS_DISPLAY_PHONE = "+91 93520 45336";
export const AJ_GEMS_PHONE_RAW = "+919352045336";
export const AJ_GEMS_INSTAGRAM_URL = "https://www.instagram.com/crystal_sorcerer?igsh=MTRoMGd3NXUyaDhtZw==";
export const AJ_GEMS_INSTAGRAM_HANDLE = "@crystal_sorcerer";
export const AJ_GEMS_ALIBABA_URL = "https://in19081462791jbqe.trustpass.alibaba.com/";

/**
 * Builds standard message for general inquiries.
 */
export function buildGeneralWhatsAppMessage(): string {
  return "Hello AJ Gems, I would like to know more about your gemstones.";
}

/**
 * Builds specific message for a particular gemstone product.
 * @param productName Name of the gemstone product
 */
export function buildProductWhatsAppMessage(productName: string): string {
  return `Hello AJ Gems, I am interested in the ${productName}. Please share its price, availability, and complete details.`;
}

/**
 * Builds message for prospective buyers requesting additional photos of a product.
 * @param productName Name of the gemstone product
 */
export function buildPhotosWhatsAppMessage(productName: string): string {
  return `Hello AJ Gems, could you share more photos of the ${productName}?`;
}

/**
 * Builds message for prospective buyers requesting a close-up video of a product.
 * @param productName Name of the gemstone product
 */
export function buildVideoWhatsAppMessage(productName: string): string {
  return `Hello AJ Gems, could you share a video of the ${productName}?`;
}

/**
 * Builds message for prospective buyers looking for gem recommendation or custom enquiry.
 */
export function buildEnquiryWhatsAppMessage(): string {
  return "Hello AJ Gems, I am looking for a gemstone. Please help me find a suitable option.";
}

/**
 * Encodes text message and constructs full wa.me direct messaging link.
 * @param message Plain-text message string to send
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${AJ_GEMS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
