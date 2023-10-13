import { useState } from "react";
import classes from "../../assets/WideContainer.module.scss";
import { Spinner } from "../../components/Spinner";
import { EventList } from "./EventList";
import { useGetEventsQuery } from "./eventHooks";
import { Event } from "../../models/Event";
export const Events = () => {
  const eventsQuery = useGetEventsQuery();
  const [selectedEvent, setSelectedEvent] = useState<Event>()
  if(!eventsQuery.data){
    return <Spinner/>
  }
  return (
    <div className={classes.customContainer}>
      <div className="row">
        <div className="col border" style={{ height: "100ex" }}>
          <div className="text-center fs-4">Events</div>
          <div><EventList events={eventsQuery.data} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/></div>
        </div>
        <div className="col border-start border-end border">
          <div className="text-center fs-4">Competitions</div>
        </div>
        <div className="col border-start border-end border">
          <div className="text-center fs-4">Sessions</div>
        </div>
      </div>
    </div>
  );
};
