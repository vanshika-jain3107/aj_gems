import { MapPin, Navigation, MessageCircle, Clock, ExternalLink, Phone, Store } from "lucide-react";
import {
  buildGeneralWhatsAppMessage,
  buildWhatsAppLink,
  AJ_GEMS_DISPLAY_PHONE,
  AJ_GEMS_PHONE_RAW,
  AJ_GEMS_INSTAGRAM_URL,
  AJ_GEMS_INSTAGRAM_HANDLE,
  AJ_GEMS_ALIBABA_URL,
} from "@/lib/whatsapp";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Location() {
  const whatsappUrl = buildWhatsAppLink(buildGeneralWhatsAppMessage());
  const mapsUrl =
    "https://www.google.com/maps/place/AJ+Gems/@26.919381,75.8222221,17z/data=!4m10!1m2!2m1!1sShop+No.+149+Chandrwatan+ki+Gali+Ghee+Walo+Ka+Rasta+Johri+Bazar+Jaipur+Rajasthan+302003!3m6!1s0x396db7400de683ff:0x9b24f4b2f11cd00e!8m2!3d26.919381!4d75.8267282!15sCldTaG9wIE5vLiAxNDkgQ2hhbmRyd2F0YW4ga2kgR2FsaSBHaGVlIFdhbG8gS2EgUmFzdGEgSm9ocmkgQmF6YXIgSmFpcHVyIFJhamFzdGhhbiAzMDIwMDOSAQ9nZW1zdG9uZV9kZWFsZXLgAQA!16s%2Fg%2F11zh5r924c?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="location" className="py-24 bg-black border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-3">
            Visit Our Showroom
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
            Location & Hours
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Hours Info Card */}
          <div className="lg:col-span-5 bg-charcoal border border-gold/20 p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-xl">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-gold font-sans text-xs uppercase tracking-widest font-medium mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Johri Bazar, Jaipur</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-normal mb-3">
                  AJ Gems Showroom
                </h3>
                <p className="text-sm text-ivory/80 font-sans font-light leading-relaxed">
                  Shop No. 149, Chandrwatan ki Gali,<br />
                  Ghee Walo Ka Rasta, Johri Bazar,<br />
                  Pink City, Jaipur, Rajasthan 302003, India
                </p>
              </div>

              {/* Contact Number & Hours */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-gold font-sans text-xs uppercase tracking-widest font-medium mb-2">
                    <Phone className="w-4 h-4" />
                    <span>Phone / WhatsApp Contact</span>
                  </div>
                  <a
                    href={`tel:${AJ_GEMS_PHONE_RAW}`}
                    className="text-sm text-ivory/90 hover:text-gold font-sans font-light transition-colors"
                  >
                    {AJ_GEMS_DISPLAY_PHONE}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gold font-sans text-xs uppercase tracking-widest font-medium mb-2">
                    <InstagramIcon className="w-4 h-4" />
                    <span>Follow on Instagram</span>
                  </div>
                  <a
                    href={AJ_GEMS_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ivory/90 hover:text-gold font-sans font-light transition-colors"
                  >
                    {AJ_GEMS_INSTAGRAM_HANDLE}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gold font-sans text-xs uppercase tracking-widest font-medium mb-2">
                    <Store className="w-4 h-4" />
                    <span>Alibaba Store</span>
                  </div>
                  <a
                    href={AJ_GEMS_ALIBABA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ivory/90 hover:text-gold font-sans font-light transition-colors underline-offset-4 hover:underline"
                  >
                    Alibaba Certified TrustPass Store
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gold font-sans text-xs uppercase tracking-widest font-medium mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Visiting Hours</span>
                  </div>
                  <p className="text-sm text-ivory/80 font-sans font-light">
                    Open Daily • 11:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black px-5 py-3 rounded-md text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gold/40 hover:border-gold text-gold px-5 py-3 rounded-md text-xs font-sans uppercase tracking-widest font-medium transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Card pointing to exact AJ Gems business listing */}
          <div className="lg:col-span-7 bg-charcoal border border-gold/20 rounded-2xl overflow-hidden min-h-[380px] relative shadow-2xl group">
            {/* "Open in Maps" Badge Overlay matching official link */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 bg-white/95 hover:bg-white text-black font-sans text-xs font-semibold px-4 py-2 rounded-lg shadow-lg backdrop-blur-md border border-black/10 transition-transform duration-300 hover:scale-105"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
            </a>

            {/* Google Maps Embed with Exact AJ Gems Coordinates */}
            <iframe
              title="AJ Gems Official Google Maps Listing"
              src="https://maps.google.com/maps?q=AJ+Gems+Shop+No.+149+Chandrwatan+ki+Gali+Ghee+Walo+Ka+Rasta+Johri+Bazar+Jaipur+Rajasthan+302003&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px] rounded-2xl transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
