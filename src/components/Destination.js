import React from "react";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
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
        img1="https://a0.muscache.com/im/pictures/6c77fd63-ea25-4eb5-ae1d-71bae29a2ee2.jpg?im_w=720"
        alt="Nature"
        img2="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/197cde9c-273e-4aac-92ec-a8dabc20cd8e.jpeg?im_w=720"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Himachal Pradesh,Shimla"
        text="Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts such as Dalhousie. Host to the Dalai Lama, Himachal Pradesh has a strong Tibetan presence. This is reflected in its Buddhist temples and monasteries, as well as its vibrant Tibetan New Year celebrations. The region is also well known for its trekking, climbing and skiing areas"
        img1="https://a0.muscache.com/im/pictures/6c77fd63-ea25-4eb5-ae1d-71bae29a2ee2.jpg?im_w=720"
        alt="Nature"
        img2="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/197cde9c-273e-4aac-92ec-a8dabc20cd8e.jpeg?im_w=720"
      />
    </div>
  );
};

export default Destination;
