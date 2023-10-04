import User from "./User";
import UserContext from "../utils/UserContex";

const About = () => { 
  return <div>
            <h1>About</h1>
            <div>
              LoggedIn User
              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )}
              </UserContext.Consumer>
            </div>
            <User />
        </div>
};

export default About;
