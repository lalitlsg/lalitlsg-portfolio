import React, { useState } from "react";
import { MdKeyboardArrowRight, MdPlayCircleOutline } from "react-icons/md";

import { AiOutlineProject, AiOutlineGithub } from "react-icons/ai";
import { BiExpand } from "react-icons/bi";

import { projects } from "../../../data/projects";

import {
  ExpandButton,
  GridContainer,
  GridItem,
  Tag,
  Title,
  Gallery,
  GalleryItem,
  CardHeader,
  CardDetails,
  CardContent,
  Description,
  AppButton,
  Image,
  OverlayModel,
  BackDrop,
  ViewIcon,
} from "../../../styles/Grid";

function Work() {
  const [currentProjects, setCurrentProjects] = useState(projects);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");

  const goToLink = (link) => {
    window.open(link, "_blank");
  };

  const getScrollPosition = () => {
    setScrollPosition(window.pageYOffset);
  };

  const toggleVideoPlayer = (demoUrl) => {
    getScrollPosition();
    setShowVideoPlayer((currentShowVideoPlayer) => !currentShowVideoPlayer);
    setCurrentVideo(demoUrl);
  };

  const toggleImage = (imageUrl) => {
    getScrollPosition();
    setShowFullImage((currentShowFullImage) => !currentShowFullImage);
    setCurrentImage(imageUrl);
  };

  const expandCard = (id, action) => {
    if (action === "expand") {
      currentProjects.map((project) => {
        if (project.id === id) {
          project.width = "100%";
          project.height = "480px";
          project.expand = true;
        }
        return project;
      });
      setCurrentProjects([...currentProjects]);
    }
    if (action === "collapse") {
      currentProjects.map((project) => {
        if (project.id === id) {
          project.width = "230px";
          project.height = "150px";
          project.expand = false;
        }
        return project;
      });
      setCurrentProjects([...currentProjects]);
    }
  };

  return (
    <>
      {showFullImage && (
        <BackDrop onClick={toggleImage} scrollPosition={scrollPosition}>
          <OverlayModel animation={true}>
            <Image src={currentImage} />
          </OverlayModel>
        </BackDrop>
      )}
      {showVideoPlayer && (
        <BackDrop onClick={toggleVideoPlayer} scrollPosition={scrollPosition}>
          <OverlayModel>
            <iframe
              src={currentVideo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              title="video"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              width="100%"
              height="100%"
              style={{ borderRadius: "5px" }}
            />
          </OverlayModel>
        </BackDrop>
      )}
      <GridContainer>
        {currentProjects.map((project) => (
          <GridItem
            key={project.id}
            bgColor={project.bgColor}
            width={project.width}
            height={project.height}
          >
            <Tag> {project.tag}</Tag>
            <CardHeader>
              <Title>{project.title}</Title>
            </CardHeader>
            {project.expand ? (
              <CardDetails>
                <Gallery>
                  {project?.images?.map((img) => (
                    <GalleryItem key={img.id} gridArea={img.gridArea}>
                      <Image src={img.url} />
                      <ViewIcon onClick={() => toggleImage(img.url)}>
                        <BiExpand />
                      </ViewIcon>
                    </GalleryItem>
                  ))}
                </Gallery>
                <CardContent>
                  <Description>{project?.info}</Description>
                  <AppButton
                    onClick={() => toggleVideoPlayer(project.youtubeLink)}
                  >
                    <MdPlayCircleOutline />
                    View Demo
                  </AppButton>
                  <AppButton onClick={() => goToLink(project.link)}>
                    <AiOutlineProject />
                    View Project
                  </AppButton>
                  <AppButton onClick={() => goToLink(project.githubLink)}>
                    <AiOutlineGithub />
                    GitHub Link
                  </AppButton>
                </CardContent>
              </CardDetails>
            ) : null}
            <ExpandButton expand={project.expand}>
              {project.expand ? (
                <MdKeyboardArrowRight
                  onClick={() => expandCard(project.id, "collapse")}
                />
              ) : (
                <MdKeyboardArrowRight
                  onClick={() => expandCard(project.id, "expand")}
                />
              )}
            </ExpandButton>
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
}

export default Work;
