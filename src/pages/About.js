import React from "react";
import MyCarousel from "../components/MyCarousel";

function About() {
  return (
    <div>
        <h1 className="about-us-header">North Fork Cattle Company</h1>
      <h2 className="about-us-h2">About us</h2>
      <p className="about-text">Established in 2024, North Fork Cattle Company proudly stands as a beacon of tradition and quality in the heart of Montana. As a fifth-generation Montanan family-run business, we are deeply rooted in the rich heritage of cattle ranching that defines our state and community. Our founder, continuing the legacy passed down through generations, has honed the art of cattle ranching to provide premium quality beef to our customers.</p>
      <h2 className="about-us-h2">Our Vision</h2>
      <p>At North Fork Cattle Company, our vision is to sustain the time-honored practices of cattle ranching while incorporating sustainable methods that respect our environment and enhance animal welfare. We strive to be leaders in the industry, promoting a culture of responsibility and excellence.</p>
      <h2 className="about-us-h2">What We Offer</h2>
      <p>We specialize in high-quality, grass-fed beef known for its exceptional flavor and tenderness. Our cattle are raised on the vast, lush pastures of Montana, ensuring a natural and stress-free environment. We offer a range of beef products, from steaks and roasts to ground beef, all processed under strict quality control measures to ensure the highest standard of food safety and excellence.</p>
      <h2 className="about-us-h2">Sustainability Practices</h2>
      <p>Sustainability is at the core of our operations. North Fork Cattle Company is committed to eco-friendly practices, including rotational grazing that naturally improves soil health and biodiversity. Our approach not only benefits the environment but also produces healthier, more flavorful beef for our customers.</p>
      <h2 className="about-us-h2">Community Engagement</h2>
      <p>As a locally owned and operated business, North Fork Cattle Company is dedicated to giving back to the community that has supported us for generations. We are active participants in local events, and we support various local initiatives aimed at improving the quality of life in Montana.</p>
      <MyCarousel />
    </div>
  );
}
export default About;
