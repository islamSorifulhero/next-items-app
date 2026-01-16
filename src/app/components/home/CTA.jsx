
"use client";
import { motion } from "framer-motion";
import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-base-200">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-base-content uppercase tracking-tighter"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
                    <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
                        Find quick answers to common questions about orders, delivery,
                        payments, and returns.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {/* FAQ 1 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-lg font-semibold">
                            How do I place an order?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                Browse products, add your desired items to the cart, and proceed
                                to checkout. Complete the payment process to confirm your order.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            What payment methods do you accept?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                We accept credit/debit cards, mobile banking, and secure online
                                payment gateways for a smooth checkout experience.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            How long does delivery take?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                Standard delivery usually takes 3–5 business days, depending on
                                your location and order volume.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            Can I return or exchange a product?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                Yes, you can request a return or exchange within 7 days of
                                receiving your order, provided the product is unused and in its
                                original condition.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            Is my payment information secure?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                Absolutely. We use encrypted and secure payment gateways to
                                protect your personal and financial information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default CTA;
