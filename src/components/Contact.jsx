import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        const mailtoLink = `mailto:shivamsingh113355@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="bg-black text-white py-20">
            <div className="container mx-auto px-4 max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-emerald-400">
                    Contact
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-md transition duration-300 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
