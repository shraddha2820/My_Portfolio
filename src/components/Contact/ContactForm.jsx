import { useState } from 'react';
import emailjs from 'emailjs-com';

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
        //  email service logic 
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
        <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-purple-900 to-black text-white rounded-xl shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Let's Work Together</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-[#1c1e2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-[#1c1e2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="What do want to say?"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="w-full p-3 rounded bg-[#1c1e2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-[#465697] hover:bg-[#5e6fa9] transition duration-300 py-3 px-6 text-lg font-semibold rounded-full"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
