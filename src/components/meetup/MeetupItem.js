import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export default function MeetupItem(props) {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
	function toggleFavoritesStatusHandler() {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				title: props.title,
				image: props.image,
				address: props.address,
				description: props.description,
			});
		}
	}
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt="" />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoritesStatusHandler}>
						{itemIsFavorite
							? "Remove from Favorites"
							: "Add to Favorites"}
					</button>
				</div>
			</Card>
		</li>
	);
}
