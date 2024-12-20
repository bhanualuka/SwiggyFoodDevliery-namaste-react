import ShimmerUI from "./ShimmerUI";
import { BASE_URL_IMAGE } from "../utilits/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utilits/context/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const UserName = useContext(UserContext);
  const { loggedInUser } = UserName;
  console.log(resData);

  return (
    <>
      {resData.length > 0 ? (
        resData.map((item) => {
          const {
            info: {
              id,
              name,
              cloudinaryImageId,
              costForTwo,
              avgRating,
              cuisines,
            },

            info: {
              sla: { slaString },
            },
          } = item;
          return (
            <Link key={id} to={"/restaurants/" + id}>
              <div className="w-[250px] p-4 m-6 rounded-lg border border-black-200 bg-gray-200  hover:bg-gray-300 ">
                <div>
                  <img
                    className="rounded-md"
                    src={`${BASE_URL_IMAGE}${cloudinaryImageId}`}
                    alt="res-imiage"
                  />

                  <div className="res-info">
                    {/* <h1>{id}</h1> */}
                    <h3 className="font-bold"> {name} </h3>
                    <h4>{avgRating}</h4>
                    <h4> {cuisines.join(",")} </h4>
                    <h5>{costForTwo}</h5>
                    <h5> {slaString} </h5>
                    <span> User : {loggedInUser} </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <ShimmerUI />
      )}
    </>
  );
};

// Creating a Higher Order Component
// input - RestaurantCard ==> RestaurantPromoteCard;

/* const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label> Promoted </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
 */
export default RestaurantCard;
