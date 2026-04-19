import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: April 19, 2026</p>

        <div className="prose prose-neutral max-w-none">
          <div className="flex flex-col gap-10">
            {[
              {
                title: '1. Information We Collect',
                body: 'ZamzamInfotech collects information you provide directly, such as your name, email address, phone number, and business details when you register for our products or contact us. We also collect usage data including billing records, inventory transactions, and product interaction logs to improve our services.',
              },
              {
                title: '2. How We Use Your Information',
                body: 'We use your information to provide and improve our billing and inventory software, send product updates and support communications, process payments through our payment partners (Razorpay), and comply with applicable Indian laws including GST regulations.',
              },
              {
                title: '3. Data Storage & Security',
                body: 'Your data is stored on secure servers located in India. We implement industry-standard encryption (AES-256) for data at rest and TLS 1.2+ for data in transit. Zambi Enterprise\'s offline data is stored locally on your device and synced securely when internet connectivity is available.',
              },
              {
                title: '4. Data Sharing',
                body: 'We do not sell your personal data. We share data only with trusted service providers (cloud infrastructure, payment processors) who are contractually bound to protect it, and with government authorities when required by Indian law.',
              },
              {
                title: '5. Your Rights',
                body: 'You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at privacy@zamzaminfotech.com. We will respond within 30 days.',
              },
              {
                title: '6. Cookies',
                body: 'Our website uses essential cookies for authentication and session management. We do not use advertising or tracking cookies. You can disable cookies in your browser settings, though this may affect website functionality.',
              },
              {
                title: '7. Contact',
                body: 'For privacy-related questions, contact ZamzamInfotech at: privacy@zamzaminfotech.com | +91 9840167910 | No.234, 2nd Floor, P.H.Road, Aminjikarai, Chennai-600 029. Tamil Nadu, India.',
              },
            ]?.map((section) => (
              <div key={section?.title} className="border-b border-border pb-8 last:border-b-0">
                <h2 className="text-xl font-bold text-foreground mb-3">{section?.title}</h2>
                <p className="text-base text-muted-foreground leading-relaxed">{section?.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}