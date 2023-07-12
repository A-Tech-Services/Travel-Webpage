import React from 'react';
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/9.jpg";
import Destination from './Destination';

const DestinationData = () => {
    return(
        <>
            <Destination
                // head1 = "Popular Destinations" 
                // head1desc = "Tours give you the opportunity to see alot, within a time frame."
                firstDes = "first-des"
                secodDes = "first-des first-des-reverse"
                head1= "Taal Volcano, Batangas"
                head1desc = "A captivating natural wonder known for its unique and picturesque setting. With a beautiful lake-filled crater and an active volcanic island within, Taal Volcano offers visitors a breathtaking experience. Its rich geological history, combined with its scenic beauty, attracts adventurers and nature enthusiasts alike."
                img1 = {Mountain1}
                img2 = {Mountain2}

                head2= "Mt. Daguldul, Batangas"
                head1desc2 = "A picturesque mountain located in the province of Batangas, Philippines. Rising majestically to a height of approximately 670 meters above sea level, it offers breathtaking views and a tranquil escape for nature enthusiasts and adventure seekers alike. Covered in lush tropical vegetation, the mountain features a combination of dense forests, rolling hills, and pristine streams, creating a rich and diverse ecosystem."
                img3 = {Mountain3}
                img4 = {Mountain4}
            />
        </>
    )
}

export default DestinationData;