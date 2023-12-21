import React, { useState } from 'react';

const FaqFooter = () => {
    // FAQ data
    const faqs = [
        { question: "How do I use hte bot", answer: "Here's how to use it..." },
        { question: "How much it would get me to get my return on ivestmens", answer: "Our return policy is..." },
        { question: "How does the bot work", answer: "Our return policy is..." },
        { question: "Does it work on anti-dected chrome extensions", answer: "Our return policy is..." },
    ];

    // State to track the opened FAQ
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // Function to toggle the FAQ
    const toggleFaq = index => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <footer style={{ color : 'white', textAlign: 'center' }}>
            <div style={{ maxWidth: '600px', margin: 'auto', textAlign : 'center' }}>
                {faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd' }}>
                        <button
                            style={{ background: 'none', border: 'none', width: '100%', textAlign: 'center', padding: '10px', fontSize: '16px', cursor: 'pointer'}}
                            onClick={() => toggleFaq(index)}
                        >
                            {faq.question}
                        </button>
                        {openFaqIndex === index && (
                            <div style={{ padding: '10px', fontSize: '14px' }}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default FaqFooter;
