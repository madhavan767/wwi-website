import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | WWI" },
      { name: "description", content: "How Work Wizards Innovations Pvt Ltd collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy | WWI" },
      { property: "og:description", content: "Learn how Work Wizards Innovations Pvt Ltd protects your data and manages privacy." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://wwi.org.in/favicon.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy | WWI" },
      { name: "twitter:description", content: "Learn how Work Wizards Innovations Pvt Ltd protects your data and manages privacy." },
      { name: "twitter:image", content: "https://wwi.org.in/favicon.svg" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHero title="Privacy Policy" description="Last updated: January 2026" />
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto prose-sm text-sm text-muted-foreground space-y-5 leading-relaxed">
          <p>Work Wizards Innovations Pvt Ltd ("we", "us") respects your privacy. This policy explains what data we collect when you use our website and services, how we use it, and the rights you have over it.</p>
          <h2 className="text-foreground font-semibold text-lg">Information We Collect</h2>
          <p>We collect information you provide directly to us — such as your name, email, and message contents — as well as basic technical data (device, browser, referrer) used to operate and improve the site.</p>
          <h2 className="text-foreground font-semibold text-lg">How We Use Information</h2>
          <p>To respond to inquiries, deliver requested services, improve our products, and comply with legal obligations. We do not sell your personal data.</p>
          <h2 className="text-foreground font-semibold text-lg">Cookies</h2>
          <p>We use essential cookies to operate the site and optional analytics cookies to understand usage. You can control cookies in your browser settings.</p>
          <h2 className="text-foreground font-semibold text-lg">Your Rights</h2>
          <p>You may request access, correction, or deletion of your personal data by emailing official@wwi.org.in.</p>
          <h2 className="text-foreground font-semibold text-lg">Contact</h2>
          <p>For any privacy-related questions, contact us at official@wwi.org.in.</p>
        </div>
      </section>
    </>
  ),
});
