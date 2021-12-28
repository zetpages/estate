// import React from "react";
// import { withRoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import { Link } from 'react-router-dom';

// function SearchContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   const roomsFound = Object.keys(sortedRooms).length;
//   console.log(sortedRooms);
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <>
//       <RoomsFilter rooms={rooms} />
//       <Link to="/sorted-rooms">Показать {roomsFound} предложений</Link>
//     </>
//   );
// }

// export default withRoomConsumer(SearchContainer);
