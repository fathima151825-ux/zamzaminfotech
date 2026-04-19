import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundPolicyPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Refund &amp; Cancellation Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: April 19, 2026</p>

        <div className="flex flex-col gap-10">
          {[
            {
              title: '1. Subscription Cancellation',
              body: 'You may cancel your Zambi Jr or Zambi Enterprise subscription at any time from your account dashboard. Cancellations take effect at the end of your current billing period. You will retain full access to the software until that date.',
            },
            {
              title: '2. Refund Eligibility',
              body: 'ZamzamInfotech offers a 7-day refund window from the date of your first payment for new subscriptions. If you are not satisfied with the product within 7 days of your initial purchase, contact us at billing@zamzaminfotech.com for a full refund.',
            },
            {
              title: '3. Non-Refundable Situations',
              body: 'Refunds are not applicable for: (a) renewals after the initial subscription period, (b) partial months of service, (c) one-time setup or customization fees, (d) subscriptions cancelled after the 7-day window.',
            },
            {
              title: '4. Razorpay Payment Compliance',
              body: 'All payments are processed via Razorpay in accordance with RBI guidelines. Refunds, once approved, are credited to your original payment method within 5–7 business days. ZamzamInfotech complies with Razorpay\'s merchant refund policies.',
            },
            {
              title: '5. How to Request a Refund',
              body: 'To request a refund, email billing@zamzaminfotech.com with your registered email address, order/invoice number, and reason for the refund. Our team will respond within 2 business days.',
            },
            {
              title: '6. Disputes',
              body: 'If you believe an incorrect charge has been made, contact us immediately at billing@zamzaminfotech.com. We will investigate and resolve billing disputes within 7 business days.',
            },
          ]?.map((section) => (
            <div key={section?.title} className="border-b border-border pb-8 last:border-b-0">
              <h2 className="text-xl font-bold text-foreground mb-3">{section?.title}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{section?.body}</p>
            </div>
          ))}
        </div>

        {/* Razorpay compliance note */}
        <div className="mt-10 bg-muted border border-border rounded-2xl p-6 flex items-start gap-4">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground mb-1">Razorpay Compliance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ZamzamInfotech is a Razorpay-compliant merchant. All transactions are secured and processed in accordance with PCI DSS standards and RBI payment guidelines.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}