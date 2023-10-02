import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestauranMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);
  return (
    <div className="m-4 p-4">
      <h1 className="font-bold text-lg">{name}</h1>
      <h3 className="text-sm">{cuisines.join(", ")}</h3>
      <h3 className="text-sm">{costForTwoMessage}</h3>
      <br className="dott"/>
      <h2 className="font-bold text-lg">Menu</h2>
      <ul className="">
        {itemCards.map((item) => (
          <li className="p-4 border border-t-b-solid border-gray"
            key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
