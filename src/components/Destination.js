import React from "react";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import img1 from "../assets/5.jpg";
import img2 from "../assets/4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give yu the opportunity to see a lot within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano,Batangas"
        text="Its cold in December, January and February. A lot of guests love
      this weather, but some don't. So if you find cold weather
      unbearable, the rest of the year is fine. We've good heaters, but
      there's so much that's beyond our control, like voltage
      fluctuations. If the worst comes to the worst, you may have to come
      up in a 4*4 vehicle or take a walk while we carry your luggage up"
        img1={img1}
        alt="Nature"
        img2={img2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Himachal Pradesh,Shimla"
        text="Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts such as Dalhousie. Host to the Dalai Lama, Himachal Pradesh has a strong Tibetan presence. This is reflected in its Buddhist temples and monasteries, as well as its vibrant Tibetan New Year celebrations. The region is also well known for its trekking, climbing and skiing areas"
        img1="https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Nature"
        img2="https://images.pexels.com/photos/2792601/pexels-photo-2792601.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </div>
  );
};

export default Destination;
