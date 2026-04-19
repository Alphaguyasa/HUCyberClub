"use client";

import { Spectral } from "next/font/google";
import { useRouter } from "next/navigation";
import { Component as Footer } from "@/components/footer-taped-design";

const spectral = Spectral({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cards = [
  {
    image: "/images/adminother1.png",
    title: "Active Users",
    description: "View statistics on active users within the platform. Understand engagement levels to foster a more vibrant community and encourage participation.",
    button: "View Users",
    href: "/admin/analytics/active-users",
  },
  {
    image: "/images/adminother2.png",
    title: "Engagement Stats",
    description: "Analyze engagement metrics to determine which resources and activities are most popular among members. Leverage this data to enhance future offerings.",
    button: "View Stats",
    href: "/admin/analytics/engagement",
  },
  {
    image: "/images/adminother3.png",
    title: "Resource Popularity",
    description: "Identify which educational materials and resources are being accessed most frequently. Use this information to refine content and ensure relevance for members.",
    button: "View Resources",
    href: "/admin/analytics/resources",
  },
];

export default function AnalyticsSection() {
  const router = useRouter();
  return (
    <>
      <section id="analytics" className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col gap-16">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-10">

                {/* Image - left */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '320px' }}
                  />
                </div>

                {/* Text - right, title at top */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <h3 className="font-semibold mb-4" style={{ fontSize: '24px', color: '#F6F8FA' }}>
                    {card.title}
                  </h3>
                  <p className="font-light leading-relaxed mb-6" style={{ fontSize: '16px', color: 'rgba(246,248,250,0.7)' }}>
                    {card.description}
                  </p>
                  <div>
                    <button
                      onClick={() => router.push(card.href)}
                      className="font-medium transition-opacity hover:opacity-80 px-8 py-3"
                      style={{ backgroundColor: 'rgb(80, 85, 92)', color: '#F6F8FA', borderRadius: '9999px', fontSize: '15px' }}
                    >
                      {card.button}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
