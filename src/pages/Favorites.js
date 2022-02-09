import { useContext } from "react";
import MeetupList from "../components/meetup/MeetupList";
import FavoritesContext from "../components/store/favorites-context";

export default function Favorites() {
	const favoritesCtx = useContext(FavoritesContext);
	let content;
	if (favoritesCtx.totalFavorites === 0) {
		content = <p>You have no favorites. </p>;
	} else {
		content = <MeetupList meetups={favoritesCtx.favorites} />;
	}
	return (
		<section>
			<h2>My Favourites</h2>
			{content}
		</section>
	);
}
