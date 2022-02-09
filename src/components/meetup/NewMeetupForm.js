import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imgInputRef = useRef();
	const addrInputRef = useRef();
	const descInputRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const title = titleInputRef.current.value;
		const image = imgInputRef.current.value;
		const address = addrInputRef.current.value;
		const description = descInputRef.current.value;

		const newMeetup = {
			title: title,
			image: image,
			address: address,
			description: description,
		};

		props.onAddNewMeetup(newMeetup);
	};
	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						ref={titleInputRef}
						required
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Image</label>
					<input type="url" id="image" ref={imgInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						id="address"
						ref={addrInputRef}
						required
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						rows="5"
						ref={descInputRef}
						required
					/>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}
