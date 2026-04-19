import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: April 19, 2026</p>

        <div className="flex flex-col gap-10">
          {[
            {
              title: '1. Acceptance of Terms',
              body: 'By accessing or using ZamzamInfotech\'s products (Zambi Jr, Zambi Enterprise) or website, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately.',
            },
            {
              title: '2. License to Use',
              body: 'ZamzamInfotech grants you a non-exclusive, non-transferable license to use our software products for your internal business operations. You may not resell, sublicense, or distribute our software without written permission.',
            },
            {
              title: '3. User Responsibilities',
              body: 'You are responsible for maintaining the confidentiality of your account credentials, ensuring accurate GST and business information is entered into the system, and complying with all applicable Indian tax laws when using our billing software.',
            },
            {
              title: '4. Payment Terms',
              body: 'Subscription fees are billed monthly or annually as per your selected plan. Payments are processed via Razorpay. Prices are in Indian Rupees (INR) and inclusive of applicable GST. ZamzamInfotech reserves the right to modify pricing with 30 days\' notice.',
            },
            {
              title: '5. Intellectual Property',
              body: 'All software, designs, trademarks, and content associated with ZamzamInfotech products are the intellectual property of ZamzamInfotech. Unauthorized copying, modification, or reverse engineering is strictly prohibited.',
            },
            {
              title: '6. Limitation of Liability',
              body: 'ZamzamInfotech shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products. Our total liability is limited to the amount paid by you in the 3 months preceding any claim.',
            },
            {
              title: '7. Termination',
              body: 'Either party may terminate the subscription with 30 days\' written notice. Upon termination, you will retain access until the end of your paid billing period. Your data will be available for export for 60 days post-termination.',
            },
            {
              title: '8. Governing Law',
              body: 'These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu.',
            },
          ]?.map((section) => (
            <div key={section?.title} className="border-b border-border pb-8 last:border-b-0">
              <h2 className="text-xl font-bold text-foreground mb-3">{section?.title}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{section?.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}