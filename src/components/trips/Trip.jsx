import "./TripStyle.css"
import React from 'react'
import TripData from "./TripData"
import Tripimage1 from "../../assets/5.jpg";
import Tripimage2 from "../../assets/8.jpg";
import Tripimage3 from "../../assets/6.jpg";
import Tripimage4 from "../../assets/10.jpg";
import Tripimage5 from "../../assets/4.jpg";
import Tripimage6 from "../../assets/12.jpg";

const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>


        <TripData
                tripimg = {Tripimage1}
                heading = "Trip in Indonesia"
                text = "Indonesia, Officially the Repiblic of indonesia, is a country in Southeast Asia and Oceania between the Indian and the Pacific cean it consist of over 17,000 islands, including Sumatra, java, sulawest and part of Borneo and New Guinea"

                tripimg1 = {Tripimage2}
                heading1 = "Trip in Indonesia"
                text1 = "Indonesia, Officially the Repiblic of indonesia, is a country in Southeast Asia and Oceania between the Indian and the Pacific cean it consist of over 17,000 islands, including Sumatra, java, sulawest and part of Borneo and New Guinea"

                tripimg2 = {Tripimage3}
                heading2 = "Trip in Indonesia"
                text2 = "Indonesia, Officially the Repiblic of indonesia, is a country in Southeast Asia and Oceania between the Indian and the Pacific cean it consist of over 17,000 islands, including Sumatra, java, sulawest and part of Borneo and New Guinea"
        />

        {/* <TripData
                tripimg = {Tripimage4}
                heading = "Trip in Indonesia"
                text = "Indonesia, Officially the Repiblic of indonesia, is a country in Southeast Asia and Oceania between the Indian and the Pacific cean it consist of over 17,000 islands, including Sumatra, java, sulawest and part of Borneo and New Guinea"

                tripimg1 = {Tripimage5}
                heading1 = "Trip in Indonesia"
                text1 = "Indonesia, Officially the Repiblic of indonesia, is a country in Southeast Asia and Oceania between the Indian and the Pacific cean it consist of over 17,000 islands, including Sumatra, java, sulawest and part of Borneo and New Guinea"

                tripimg2 = {Tripimage6}
                heading2 = "Trip in Indonesia"
                text2 = "Indonesia, Officially the Repiblic of indonesia, is a country in Southeast Asia and Oceania between the Indian and the Pacific cean it consist of over 17,000 islands, including Sumatra, java, sulawest and part of Borneo and New Guinea"
        /> */}
    </div>
  )
}

export default Trip