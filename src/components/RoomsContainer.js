import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  // const roomsFound = Object.keys(sortedRooms).length;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
      {/* <RoomsList rooms={rooms} /> */}


      {/* <button className="search_btn">Показать {roomsFound} предложений</button> */}
    </>
  );
}

export default withRoomConsumer(RoomContainer);