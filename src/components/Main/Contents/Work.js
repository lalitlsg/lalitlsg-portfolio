import React from "react";

import {
  Card,
  CardTitle,
  CardBody,
  CardContainer,
  Button
} from "../../../styles/Card";

const work = [
  {
    id: 1,
    title: "Parking App",
    info:
      "Manage parking of vehicles in your organization.You can park the vehicle, show the status of available slots and remove the vehicle by applying some charges based on 1Rs/min",
    link: "https://parking-e486e.web.app"
  },
  {
    id: 2,
    title: "Sign In",
    info:
      "Simple Sign In Application which provides sign in using google, facebook and email registration",
    link: "https://signup-24552.web.app"
  },
  {
    id: 3,
    title: "Len-Den",
    info:
      "Len-Den is an app which keeps the track of all your money with your friends,like how much you have to give them and how much you have to take from them.It can also used in shops to keep track of customer's money who buy item and pay later",
    link: "https://lenden-68143.web.app/#/"
  },
  {
    id: 4,
    title: "One For Me",
    info:
      "One For Me is an application which connects customers to developers to create their dream website",
    link: "https://upbeat-einstein-10a425.netlify.app/"
  },
  {
    id: 5,
    title: "Flickr Groups",
    info:
      "Here you can search flickr groups,see comparison of number of images of each group and their images in masonry layout.",
    link: "https://stoic-clarke-da7932.netlify.app/"
  }
];

function Work() {
  const goToWork = link => {
    window.open(link, "_blank");
  };
  return (
    <CardContainer>
      {work.map(item => (
        <Card key={item.id}>
          <CardTitle>{item.title}</CardTitle>
          <CardBody fontSize={"16px"}>{item.info}</CardBody>
          <Button onClick={() => goToWork(item.link)}>View Project</Button>
        </Card>
      ))}
    </CardContainer>
  );
}

export default Work;
