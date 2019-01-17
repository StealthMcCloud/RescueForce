import React, { Component, Fragment } from "react";
import LeftBannerImage from "../../Images/LeftSideGraphic.png";
import RightBannerImage from "../../Images/RightSideGraphic.png"

class MissionStatement extends Component {
  render() {
    return (
      <Fragment>
        <h3
          style={{
            paddingTop: "30px",
            textAlign: "center",
            fontFamily: "fantasy",
            fontStyle: "bold",
            fontSize: "40px"
          }}
        >
          <img class="ui medium image" src={LeftBannerImage}
          style={{float: "left"}} alt="BannerImage"
          ></img>
          Rescue Force
        <img class="ui medium image" src={RightBannerImage}
        style={{float: "right"}}
        alt="BannerImage"></img>
        </h3>
        <div
          style={{
            padding: "20px",
            paddingTop: "30px",
            textAlign: "center",
            fontSize: "21px",
            fontFamily: "fantasy",
            // fontStyle: "italic"
          }}
        >
          <p>
            Most animal rescue groups and shelters depend on a network of foster
            homes. RescueForce helps rescue groups manage that network.
          </p>
          <p>
            A shelter can add an animal. When the animal is marked as needing a
            foster home, the animal is displayed on all of the approved foster
            homes’ page. A foster home can then claim this animal for foster
            care.
          </p>
          <p>
            The animal shelter can view a list of all foster homes (aka hosts).
            This list displays the vacancies at each hosts along with what
            animals are at the foster home. Gone are the days of excessive
            texting, calling, and email blasts asking if a foster home has room
            for an animal and confirming what animals are already there.
          </p>
          <p>
            Once the animal is in foster care, the foster home manages updating
            the information of the animal, including pictures. Rescue groups no
            longer need to handle the organization of photos.
          </p>
          <p>
            Homes wishing to foster can register as a foster. A rescue group can
            review this application and approve or deny.
          </p>
          <p>
            Once a rescue animal is ready to be listed for adoption, a simple
            click of a button will make this animal viewable to all the public.
          </p>
          <p>Helping animals is important. Helping those who help animals is our mission.</p>
        </div>
      </Fragment>
    );
  }
}

export default MissionStatement;
