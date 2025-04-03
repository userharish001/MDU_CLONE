// components/AboutPage.tsx
"use client";

const AboutPage = () => {
  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <section className="space-y-4">
        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-semibold">LUXELEATHER</span>, where we offer premium quality leather products
          crafted with care and precision. Our mission is to deliver elegant and timeless pieces that blend fashion and functionality.
        </p>
        <p className="text-lg leading-relaxed">
          At LUXELEATHER, we believe in creating lasting impressions with every product we offer. Our collections include
          bags, wallets, and accessories made from the finest leather, sourced from trusted suppliers who share our commitment
          to sustainability.
        </p>
        <p className="text-lg leading-relaxed">
          With years of experience in the industry, we have built a reputation for delivering high-quality products that
          exceed expectations. Whether you're looking for a stylish bag for everyday use or a classic wallet that stands the test
          of time, you'll find it at LUXELEATHER.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          Our vision is to be the leading brand for luxury leather goods, offering the perfect blend of craftsmanship, design,
          and functionality. We aim to continuously innovate while staying true to our values of quality, sustainability, and customer satisfaction.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg">Premium quality leather sourced from sustainable and ethical suppliers.</li>
          <li className="text-lg">Timeless designs that combine elegance with functionality.</li>
          <li className="text-lg">Exceptional customer service and a seamless shopping experience.</li>
          <li className="text-lg">Free shipping and easy returns on all orders.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
