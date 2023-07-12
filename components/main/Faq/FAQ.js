/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

export default function FAQ() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="my-20">
      <div className="inner-cont mx-10 mb-10">
        <div className="smallertex">
          <div className="inner-smaller-text flex items-center font-semibold my-2 uppercase text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path d="M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z" />
              <path d="M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z" />
            </svg>
            <p>FAQ</p>
          </div>
        </div>
        <div className="larger-text text-2xl font-bold capitalize">
          You Got questions? we got answers!
        </div>
      </div>
      <div className="faq-cont mx-10">
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AccordionItem value="item-1" className=" ">
            <AccordionTrigger className="font-bold text-sm hover:no-underline">
              How can I get started with your platform?
            </AccordionTrigger>
            <AccordionContent>
              To get started, simply sign up on our website and follow the
              onboarding process. You'll have access to all our platform
              features and tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className=" ">
            <AccordionTrigger className="font-bold text-sm hover:no-underline">
              What payment methods do you support?
            </AccordionTrigger>
            <AccordionContent>
              We support a variety of payment methods, including credit cards,
              bank transfers, and popular digital wallets such as PayPal and
              Stripe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className=" ">
            <AccordionTrigger className="font-bold text-sm hover:no-underline">
              Are my funds safe with your platform?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. We take security seriously and have implemented robust
              measures to ensure the safety of your funds. Your account is
              protected by advanced encryption and authentication protocols.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className=" ">
            <AccordionTrigger className="font-bold text-sm hover:no-underline">
              Do you provide customer support?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer 24/7 customer support via email, live chat, and
              phone. Our dedicated support team is ready to assist you with any
              questions or issues you may have.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className=" ">
            <AccordionTrigger className="font-bold text-sm hover:no-underline">
              Can I trade on mobile devices?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. Our trading platform is fully responsive and supports
              trading on various devices, including smartphones and tablets. You
              can trade anytime, anywhere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className=" ">
            <AccordionTrigger className="font-bold text-sm hover:no-underline">
              How can I withdraw my profits?
            </AccordionTrigger>
            <AccordionContent>
              Withdrawing your profits is easy. Simply navigate to the
              withdrawal section in your account dashboard and follow the
              instructions to initiate a withdrawal. Your funds will be
              transferred to your designated bank account or payment method.
            </AccordionContent>
          </AccordionItem>
          {showMore && (
            <>
              <AccordionItem value="item-7" className=" ">
                <AccordionTrigger className="font-bold text-sm hover:no-underline">
                  What should I do if I forgot my password?
                </AccordionTrigger>
                <AccordionContent>
                  If you forgot your password, you can click on the "Forgot
                  Password" link on the login page. Follow the instructions to
                  reset your password and regain access to your account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className=" ">
                <AccordionTrigger className="font-bold text-sm hover:no-underline">
                  Is there a minimum deposit amount?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, there is a minimum deposit amount required to open an
                  account. The specific minimum deposit requirement will be
                  mentioned during the account registration process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9" className=" ">
                <AccordionTrigger className="font-bold text-sm hover:no-underline">
                  What trading tools do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a comprehensive range of trading tools, including
                  advanced charting, technical analysis indicators, real-time
                  market data, and trade execution features. These tools are
                  designed to assist traders in making informed decisions and
                  maximizing their trading potential.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10" className=" ">
                <AccordionTrigger className="font-bold text-sm hover:no-underline">
                  Are there any trading fees?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we charge trading fees based on the specific financial
                  instruments and trading activities. The fee structure is
                  transparent and can be found on our website. We strive to
                  provide competitive and fair pricing for our traders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11" className=" ">
                <AccordionTrigger className="font-bold text-sm hover:no-underline">
                  Can I use automated trading strategies?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we support automated trading strategies through the use
                  of API integration. Traders can connect their preferred
                  trading bots or algorithmic trading systems to our platform
                  for seamless automated trading.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12" className=" ">
                <AccordionTrigger className="font-bold text-sm hover:no-underline">
                  Is there a demo account available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a demo account for traders to practice and
                  familiarize themselves with our platform. The demo account
                  provides a risk-free environment to test strategies and
                  explore the features before trading with real funds.
                </AccordionContent>
              </AccordionItem>
            </>
          )}
        </Accordion>

        <button
          className="text-black my-5 flex items-center text-lg rounded-lg x-6 py-4 font-bold md:hidden mt-4"
          onClick={handleShowMore}
        >
          <p>{showMore ? "Show less" : "Show more"}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 ml-1 transition-transform ${
              showMore ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
