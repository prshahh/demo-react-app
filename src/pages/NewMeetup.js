import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

export default function NewMeetup() {
	const navigate = useNavigate();
	function addMeetupHandler(meetup) {
		fetch(
			"https://react-starter-9b4e2-default-rtdb.firebaseio.com/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetup),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => {
			navigate("/");
		});
	}
	return (
		<section>
			<h2>Add New Meetup</h2>
			<NewMeetupForm onAddNewMeetup={addMeetupHandler} />
		</section>
	);
}
