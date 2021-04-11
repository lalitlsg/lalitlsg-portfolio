import flicker1 from "../images/project-images/flicker/flicker1.png";
import flicker2 from "../images/project-images/flicker/flicker2.png";
import flicker3 from "../images/project-images/flicker/flicker3.png";
import flicker4 from "../images/project-images/flicker/flicker4.png";
import flicker5 from "../images/project-images/flicker/flicker5.png";
import flicker6 from "../images/project-images/flicker/flicker6.png";

import ofm1 from "../images/project-images/ofm/ofm1.png";
import ofm2 from "../images/project-images/ofm/ofm2.png";
import ofm3 from "../images/project-images/ofm/ofm3.png";
import ofm4 from "../images/project-images/ofm/ofm4.png";
import ofm5 from "../images/project-images/ofm/ofm5.png";
import ofm6 from "../images/project-images/ofm/ofm6.png";

import park1 from "../images/project-images/park/park1.png";
import park2 from "../images/project-images/park/park2.png";
import park3 from "../images/project-images/park/park3.png";
import park4 from "../images/project-images/park/park4.png";
import park5 from "../images/project-images/park/park5.png";
import park6 from "../images/project-images/park/park6.png";

import signup1 from "../images/project-images/signup/signup1.png";
import signup2 from "../images/project-images/signup/signup2.png";
import signup3 from "../images/project-images/signup/signup3.png";
import signup4 from "../images/project-images/signup/signup4.png";
import signup5 from "../images/project-images/signup/signup5.png";
import signup6 from "../images/project-images/signup/signup6.png";

import lenden1 from "../images/project-images/lenden/lenden1.png";
import lenden2 from "../images/project-images/lenden/lenden2.png";
import lenden3 from "../images/project-images/lenden/lenden3.png";
import lenden4 from "../images/project-images/lenden/lenden4.png";
import lenden5 from "../images/project-images/lenden/lenden5.png";
import lenden6 from "../images/project-images/lenden/lenden6.png";

export const projects = [
  {
    id: "p5",
    title: "Flickr Groups",
    info:
      "Here you can search flickr groups,see comparison of number of images of each group and their images in masonry layout.",
    link: "https://stoic-clarke-da7932.netlify.app/",
    githubLink: "https://github.com/lalitlsg/flickr-groups",
    youtubeLink: "https://www.youtube.com/embed/vZyBayzFA4w",
    bgColor: "#cda7d7",
    width: "230px",
    height: "150px",
    expand: false,
    tag: "React",
    images: [
      { id: "i1", url: flicker1, gridArea: "1 / 1 / 3 / 3" },
      { id: "i2", url: flicker2 },
      { id: "i3", url: flicker3 },
      { id: "i4", url: flicker4 },
      { id: "i5", url: flicker5 },
      { id: "i6", url: flicker6, gridArea: "2 / 3 / -1 / -1" },
    ],
  },
  {
    id: "p4",
    title: "One For Me",
    info:
      "One For Me is an application which connects customers to developers to create their dream website",
    link: "https://upbeat-einstein-10a425.netlify.app/",
    githubLink: "https://github.com/lalitlsg/one-for-me",
    youtubeLink: "https://www.youtube.com/embed/LcLFSP0ol1k",
    bgColor: "#c2c2ef",
    width: "230px",
    height: "150px",
    expand: false,
    tag: "React",
    images: [
      { id: "i1", url: ofm1, gridArea: "1 / 1 / 3 / 3" },
      { id: "i2", url: ofm2 },
      { id: "i3", url: ofm3 },
      { id: "i4", url: ofm4 },
      { id: "i5", url: ofm5 },
      { id: "i6", url: ofm6, gridArea: "2 / 3 / -1 / -1" },
    ],
  },
  {
    id: "p1",
    title: "Parking App",
    info:
      "Manage parking of vehicles in your organization.You can park the vehicle, show the status of available slots and remove the vehicle by applying some charges based on 1Rs/min",
    link: "https://parking-e486e.web.app",
    githubLink: "https://github.com/lalitlsg/Park-My-Vehicle",
    youtubeLink: "https://www.youtube.com/embed/pe6UxOGMuv0",
    bgColor: "#f0bcf6",
    width: "230px",
    height: "150px",
    expand: false,
    tag: "Vue",
    images: [
      { id: "i1", url: park1, gridArea: "1 / 1 / 3 / 3" },
      { id: "i2", url: park2 },
      { id: "i3", url: park3 },
      { id: "i4", url: park4 },
      { id: "i5", url: park5 },
      { id: "i6", url: park6, gridArea: "2 / 3 / -1 / -1" },
    ],
  },
  {
    id: "p2",
    title: "Sign In",
    info:
      "Simple Sign In Application which provides sign in using google, facebook and email registration",
    link: "https://signup-24552.web.app",
    githubLink: "https://www.youtube.com/embed/OCwUuF7umK0",
    youtubeLink: "https://www.youtube.com/embed/OCwUuF7umK0",
    bgColor: "#b9f9b9",
    width: "230px",
    height: "150px",
    expand: false,
    tag: "Vue",
    images: [
      { id: "i1", url: signup1, gridArea: "1 / 1 / 3 / 3" },
      { id: "i2", url: signup2 },
      { id: "i3", url: signup3 },
      { id: "i4", url: signup4 },
      { id: "i5", url: signup5 },
      { id: "i6", url: signup6, gridArea: "2 / 3 / -1 / -1" },
    ],
  },
  {
    id: "p3",
    title: "Len-Den",
    info:
      "Len-Den is an app which keeps the track of all your money with your friends,like how much you have to give them and how much you have to take from them.It can also used in shops to keep track of customer's money who buy item and pay later",
    link: "https://lenden-68143.web.app/#/",
    githubLink: "https://github.com/lalitlsg/LenDen-Web-App",
    youtubeLink: "https://www.youtube.com/embed/aiw8HzfxnbI",
    bgColor: "#b5d9fc",
    width: "230px",
    height: "150px",
    expand: false,
    tag: "Vue",
    images: [
      { id: "i1", url: lenden1, gridArea: "1 / 1 / 3 / 3" },
      { id: "i2", url: lenden2 },
      { id: "i3", url: lenden3 },
      { id: "i4", url: lenden4 },
      { id: "i5", url: lenden5 },
      { id: "i6", url: lenden6, gridArea: "2 / 3 / -1 / -1" },
    ],
  },
];
