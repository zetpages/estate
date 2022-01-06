import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import { Link } from 'react-router-dom';
// import RoomsList from "./RoomsList";

function SearchContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;

    const roomsFound = Object.keys(sortedRooms).length;
    // console.log(sortedRooms);

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="search_container">
            <div className="filter_parent">
                <RoomsFilter rooms={rooms} />
                <div className="search_link">
                    <Link className="search_a" to="/rooms">Показать {roomsFound} вариантов</Link>
                </div>
            </div>
            {/* <RoomsList rooms={sortedRooms} /> */}
        </div>
    );
}

export default withRoomConsumer(SearchContainer);

// import React from "react";
// import { withRoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";

// function RoomContainer({ context }) {
//     const { loading, sortedRooms, rooms } = context;
//     // const roomsFound = Object.keys(sortedRooms).length;
//     if (loading) {
//         return <Loading />;
//     }
//     return (
//         <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />

//             {/* <button className="search_btn">Показать {roomsFound} предложений</button> */}
//         </>
//     );
// }


// export default withRoomConsumer(RoomContainer);