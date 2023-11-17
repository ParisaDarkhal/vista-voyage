import React from "react";
import "./main.css";
import img from "../../Assets/img.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "A dream destination for many travelers who want to experience a slice of paradise. It offers stunning scenery, luxurious accommodation, and amazing activities. Whether you want to relax on the beach, swim with colorful fish, or hike up the mountains, Bora Bora has something for everyone.",
  },
  // {
  //   id: 2,
  //   imgSrc: img2,
  //   destTitle: "Machu Pichu",
  //   location: "Peru",
  //   grade: "CULTURAL RELAX",
  //   fees: "$700",
  //   description:
  //     "Visit Machu Picchu, an ancient Inca city on a mountain. Relax and enjoy the architecture, views, and history. A World Heritage Site for adventurers.",
  // },
  // {
  //   id: 3,
  //   imgSrc: img3,
  //   destTitle: "Great Barrier Reef",
  //   location: "Australia",
  //   grade: "CULTURAL RELAX",
  //   fees: "$800",
  //   description:
  //     "Explore the world's largest coral reef with 9,000+ marine species, islands, and beaches. The Great Barrier Reef is a natural wonder to relax and enjoy.",
  // },
  // {
  //   id: 4,
  //   imgSrc: img4,
  //   destTitle: "Cappadocia",
  //   location: "Turkey",
  //   grade: "CULTURAL RELAX",
  //   fees: "$900",
  //   description:
  //     "Cappadocia is a historical region in Turkey with stunning volcanic landscapes, caves, and ancient churches. Explore the fairy chimneys and underground cities of Cappadocia.",
  // },
  // {
  //   id: 5,
  //   imgSrc: img5,
  //   destTitle: "Guanajuato",
  //   location: "Mexico",
  //   grade: "CULTURAL RELAX",
  //   fees: "$1200",
  //   description:
  //     "Guanajuato is a historical and cultural treasure in Mexico, where you can admire colonial architecture, colorful houses, and underground tunnels. Enjoy the vibrant festivals, art museums, and local cuisine of Guanajuato.",
  // },
  // {
  //   id: 6,
  //   imgSrc: img6,
  //   destTitle: "Cinque Terre",
  //   location: "Italy",
  //   grade: "CULTURAL RELAX",
  //   fees: "$950",
  //   description:
  //     "A dreamy destination in Italy, where you can admire five ancient villages perched on the cliffs overlooking the sea. Hike along the scenic trails, enjoy the local wine and cuisine, and soak up the colorful charm of Cinque Terre.",
  // },
  // {
  //   id: 7,
  //   imgSrc: img7,
  //   destTitle: "Angkor Wat",
  //   location: "Cambodia",
  //   grade: "CULTURAL RELAX",
  //   fees: "$900",
  //   description:
  //     "A magnificent temple complex in Cambodia, Angkor Wat is a UNESCO World Heritage Site, the largest religious structure in the world. It was built in the 12th century. You can marvel at the intricate bas-reliefs, the towering quincunx of towers, and the moat that surrounds the temple.",
  // },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div className="singleDestination" key={id}>
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small> +1 </small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
