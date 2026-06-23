import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  const handleBack = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("properties");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  if (!property) {
    return (
      <div className="details-page">
        <h2>Property not found.</h2>

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back Home
        </button>
      </div>
    );
  }

  return (
    <section className="details-page">

      <button
        className="back-btn"
        onClick={handleBack}
      >
        ← Back to Properties
      </button>

      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  className="property-swiper"
>

  {property.images.map((image, index) => (
    <SwiperSlide key={index}>
      <img
        src={image}
        alt={property.title}
        className="property-slide-image"
      />
    </SwiperSlide>
  ))}

</Swiper>

      <div className="details-content">
        
        <div className="status-badge">
        {property.status}
  </div>

        <h1>{property.title}</h1>

        <h2>{property.price}</h2>

        <p>{property.location}</p>

        <div className="specs">
          <span>🛏 {property.bedrooms} Beds</span>
          <span>🛁 {property.bathrooms} Baths</span>
          <span>📐 {property.sqft} sqft</span>
        </div>

        <p className="description">
          {property.description}
        </p>

        <div className="agent-card">
          <h3>Property Agent</h3>

          <p>John Anderson</p>

          <p>Senior Realtor</p>

          <p>john@primeestates.com</p>

          <p>+1 (555) 123-4567</p>
        </div>

      </div>

      <div className="viewing-form">

  <h3>Schedule a Viewing</h3>

  <form>

    <input
      type="text"
      placeholder="Full Name"
      required
    />

    <input
      type="email"
      placeholder="Email Address"
      required
    />

    <input
      type="tel"
      placeholder="Phone Number"
      required
    />

    <input
      type="date"
      required
    />

    <button type="submit">
      Schedule Viewing
    </button>

  </form>

</div>
    </section>
  );
}

export default PropertyDetails;