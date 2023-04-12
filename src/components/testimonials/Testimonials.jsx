import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import { guy1, guy2, girl1, girl2, guy3 } from "../../assets";
import Slider from "react-slick";
import "./Testimonials.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      } else if (window.innerWidth <= 991) {
        setSlidesToShow(2);
        setSlidesToScroll(2);
      } else {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonialsData = [
    {
      name: "Micheal React",
      image: guy1,
      message: "I have been using LotusFocus for a few weeks now and it has helped me stay focused and productive throughout the day. The interface is easy to use and the meditation sessions are very effective. I highly recommend this app to anyone looking to improve their focus and reduce stress.",
    },
    {
        name: "Steve Python",
        image: guy3,
        message: "LotusFocus has completely transformed the way I approach work. I used to struggle with procrastination and getting distracted easily, but with the help of LotusFocus, I am able to stay on task and be more productive than ever before. I highly recommend this app to anyone.",
    },
    {
      name: "Cassandra Styles",
      image: girl1,
      message: "As someone who struggles with anxiety and stress, LotusFocus has been a lifesaver. The guided meditations and breathing exercises help me relax and stay calm during the day. I have noticed a significant improvement in my mood and focus since I started using this app.",
    },
    {
      name: "Robert Java",
      image: guy2,
      message: "I have tried several meditation apps in the past, but none of them compare to LotusFocus. The app is well-designed and easy to navigate, and the guided meditations are incredibly relaxing and effective. I use it every day to help me start my day off on the right foot.",
    },
    {
      name: "Jane Query",
      image: girl2,
      message: "LotusFocus has helped me reduce my stress levels and improve my overall well-being. The app is user-friendly and the meditations are very calming and effective. I highly recommend this app to anyone who wants to improve their mental health and well-being.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div id="testimonials" className="testimonials">
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            image={testimonial.image}
            message={testimonial.message}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
