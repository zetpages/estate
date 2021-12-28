import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import { Link } from 'react-router-dom';
import RoomsList from "./RoomsList";

function ResultsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    const roomsFound = Object.keys(sortedRooms).length;
    console.log(sortedRooms);
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(ResultsContainer);