import { useState } from 'react';
import emailjs from 'emailjs-com';

const inputClass =
    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-primaryBg placeholder:text-slate-400 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        emailjs.send(
            'service_qmxbl82',
            'template_q9ixmbh',
            formData,
            'HixwDykGat6LnFFSL'
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent successfully!");
            },
            (err) => {
                console.log('FAILED...', err);
                alert("Failed to send message.");
            }
        );
    };

    return (
        <section
            id="Contact"
            className="w-full bg-white py-14 md:py-20"
        >
            <div className="mx-auto max-w-2xl px-4 md:px-6">
                <div className="rounded-2xl border border-black bg-white p-8 shadow-sm md:p-10">
                    <h2 className="mb-2 text-center font-heading text-3xl font-bold tracking-tight text-primaryBg md:text-4xl">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mb-8 text-center text-sm text-slate-600 md:text-base">
                        Share a short note and I&apos;ll get back to you as soon as I can.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    Full name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    placeholder="username@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="What would you like to say?"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                required
                                className={`${inputClass} min-h-[140px] resize-y`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-btn py-3.5 text-[15px] font-semibold text-primaryBg shadow-sm transition hover:opacity-90 md:text-base"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
