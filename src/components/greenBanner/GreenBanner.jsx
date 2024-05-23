import React from "react";
import PrimaryButton from "../primaryButton/PrimaryButton";
import Link from "next/link";

const GreenBanner = () => {
  return (
    <section className="pb-20 dark:bg-slate-600 dark:text-slate-100">
      <div className="container mx-auto px-20 py-20 bgLinearGreen rounded-sm">
        {/* Here class: bgLinearGreen is a Custom Class, defined in globals.css */}
        <h2 className="text-3xl sm:text-4xl font-medium mb-5 text-center sm:text-start">
          The Best Eldery Care Center For You
        </h2>
        <p className="font-light mb-8 md:w-4/5">
          Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat
          faucibus nam purus sem. Urna pulvinar porttitor dignissim congue
          pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi
          dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in.
        </p>
        <div className="btnBox text-center sm:text-start">
          <Link
            href={"tel:192922882"}
            className="bg-slate-200 px-5 py-2 text-slate-800 rounded-sm transition-all border border-transparent hover:text-slate-200 hover:border-slate-200 hover:bg-transparent"
          >
            Call Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GreenBanner;
