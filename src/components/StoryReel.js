import React from "react";
import Story from "./Story";

import "../styles/StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
        profileSrc="https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg"
        title="Aurey Blanche"
      />
      <Story
        image="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
        profileSrc="https://media.istockphoto.com/photos/fit-man-standing-outdoors-in-a-city-picture-id1299360127?b=1&k=20&m=1299360127&s=170667a&w=0&h=1Rvw_UPTnj1LkB543cuCjiLM0xbIdjjin0rw6yaL8bc="
        title="John Doelus"
      />
      <Story
        image="https://www.fao.org/images/homepagelibraries/default-album/sdg-2.png"
        profileSrc="https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200&fit=bounds"
        title="Mellisa Dabrina"
      />
      <Story
        image="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
        profileSrc="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        title="Janet Bicks"
      />
      <Story
        image="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        profileSrc="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1176783543.1638748800"
        title="dickson Rooney"
      />
      <Story
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*"
        profileSrc="https://www.mantruckandbus.com/fileadmin/_processed_/c/7/csm_frank-sprenger-interviewkachel_4470dab1a7.jpg"
        title="Joseph Ford"
      />
      {/* <Story
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*"
          profileSrc="https://www.mantruckandbus.com/fileadmin/_processed_/c/7/csm_frank-sprenger-interviewkachel_4470dab1a7.jpg"
          title="Joseph Ford"
          />
               <Story
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*"
          profileSrc="https://www.mantruckandbus.com/fileadmin/_processed_/c/7/csm_frank-sprenger-interviewkachel_4470dab1a7.jpg"
          title="Joseph Ford"
          /> */}
    </div>
  );
}
export default StoryReel;
