import React from 'react'
import "./DestinationStyle.css";


const Destination = (props) => {
  return (
    <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see alot, within a time frame.</p>

        <div className={props.firstDes}>
            <div className="des-text">
                <h2>{props.head1}</h2>
                <p>{props.head1desc}</p>
            </div>

            <div className="image">
                <img alt='img' src={props.img1}/>
                <img alt='img' src={props.img2}/>
            </div>
        </div>

        <div className={props.secodDes}>
            <div className="des-text">
                <h2>{props.head2}</h2>
                <p>{props.head1desc2}</p>
            </div>

            <div className="image">
                <img alt='img' src={props.img3}/>
                <img alt='img' src={props.img4}/>
            </div>
        </div>
    </div>

    // <div className="destination">
    // <h1>Popular Destinations</h1>
    // <p>Tours give you the opportunity to see alot, within a time frame.</p>

    // <div className="first-des">
    //     <div className="des-text">
    //         <h2>Taal Volcano, Batangas</h2>
    //         <p>A captivating natural wonder known for its unique 
    //             and picturesque setting. With a beautiful lake-filled 
    //             crater and an active volcanic island within, Taal Volcano 
    //             offers visitors a breathtaking experience. Its rich geological 
    //             history, combined with its scenic beauty, attracts adventurers 
    //             and nature enthusiasts alike.
    //         </p>
    //     </div>

    //     <div className="image">
    //         <img alt='img' src={Mountain1}/>
    //         <img alt='img' src={Mountain2}/>
    //     </div>
    // </div>
    // </div>
  )
}

export default Destination