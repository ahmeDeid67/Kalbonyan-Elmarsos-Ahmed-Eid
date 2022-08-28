import { useHistory } from "react-router-dom";
import NewMeetupForm from "../Components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const historyData = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-94824-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then(() => historyData.replace("/"));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
