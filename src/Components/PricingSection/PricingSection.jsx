import React from 'react';
import Transform from './Transform';

const planPricingCards = [
    {
        "name": "Starter",
        "description": "Perfect for getting started",
        "price": 0,
        "period": "Month",
        "features": [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month"
        ],
        "button_text": "Get Started Free",
        "popular": false
    },
    {
        "name": "Pro",
        "description": "Best for professionals",
        "price": 29,
        "period": "Month",
        "features": [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics"
        ],
        "button_text": "Start Pro Trial",
        "popular": true
    },
    {
        "name": "Enterprise",
        "description": "For teams and businesses",
        "price": 99,
        "period": "Month",
        "features": [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding"
        ],
        "button_text": "Contact Sales",
        "popular": false
    }
]


const PricingSection = () => {
    return (
        <div>

            <div className='my-30'>
                <div className='text-center space-y-4 mb-10'>
                    <h1 className="text-5xl font-extrabold ">Simple, Transparent Pricing</h1>
                    <p className='text-[#627382FF]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className="container mx-auto grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40">
                    {
                        planPricingCards.map((plancard, index) => {
                            return (
                                <div key={index}>
                                    <div className={`card w-96 ${plancard.popular ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "bg-base-100"} shadow-sm h-full`}>
                                        <div className="card-body">
                                            {
                                                plancard.popular ? <span className="absolute -top-4 right-35 badge bg-[#fef3c6FF] text-red-600 py-3 px-4 rounded-full">Most Popular</span> : ""
                                            }

                                            <div className="">
                                                <h2 className="text-3xl font-bold">{plancard.name}</h2>
                                                <p className="mb-5">{plancard.description}</p>

                                                <p className="text-xl ">
                                                    <span className="font-bold text-4xl">${plancard.price}</span>/{plancard.period}
                                                </p>
                                            </div>

                                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                                {
                                                    plancard.features.map((feature, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                                <span>{feature}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                            <div className="mt-6">
                                                <button className={`btn ${plancard.popular ? "bg-white text-[#4f39f6]" : "btn-primary"} btn-block rounded-full`}>{plancard.button_text}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <Transform></Transform>
        </div>
    );
};

export default PricingSection;