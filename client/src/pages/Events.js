import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import axios from "axios";
import { EventsSearch } from "../spotify";

const Events = () => {
  const [event, setEvents] = useState(null);

  useEffect(() => {

    setEvents(EventsSearch);
  }, []);


  console.log("Events: ", event);

  return (
  
  <>
  {event && (
    <>
    <div className={"text"}>
    event.events[0].name
    </div>
    
    </>
  )}
  
  
  </>
  );
};

export default Events;

  