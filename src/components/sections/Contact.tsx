"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

export function Contact() {
    return (
        <section className="py-24 px-6" id="contact">
            <div className="max-w-3xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Let&apos;s work together.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-xl mx-auto">
                        {portfolioData.contact.text}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a href={`mailto:${portfolioData.personal.email}`}>
                        <Button size="lg" className="rounded-full px-12 h-16 text-lg">
                            <p className="text-2xl text-black leading-relaxed">
                                Let&apos;s talk.
                            </p>
                        </Button>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
