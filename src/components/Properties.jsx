import { Link } from "react-router-dom";
import properties from "../data/properties";

function Properties() {
  return (
    <section id="properties" className="section">

      <h2>Featured Properties</h2>

      <div className="property-grid">

        {properties.map((property) => (
          <div key={property.id} className="property-card">

            <img
              src={property.image}
              alt={property.title}
            />

            <div className="property-content">

              <h3>{property.title}</h3>

              <p>{property.location}</p>

              <div className="features">
                <p>🛏 {property.bedrooms} Beds</p>
                <p>🛁 {property.bathrooms} Baths</p>
                <p>📐 {property.sqft} sqft</p>
              </div>

              <div className="property-info">
                <span>{property.price}</span>

                <div className="badge">
                  Featured
                </div>
              </div>

              <Link to={`/property/${property.id}`}>
                <button>
                  View Details
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Properties;