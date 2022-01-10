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
                <div className="filter_links">
                    <Link className="active_tab" to="/">Купить</Link>
                    <Link className="sell_link" to="/sell">Продать</Link>
                </div>
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