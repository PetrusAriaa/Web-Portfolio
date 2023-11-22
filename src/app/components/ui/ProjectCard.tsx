"use client";

import {FC} from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

interface projectCard {
  img: string;
  title: string;
  desc: string;
  projectLink: string;
  stack: Array<string>;
}

export const ProjectCard: FC<projectCard> = ({
  img,
  title,
  desc,
  stack,
  projectLink,
}) => {
  return (
    <Card
      isHoverable
      isPressable
      className="py-4 w-[20rem] dark md:flex-shrink-0"
    >
      <CardBody className="py-2 w-4/5">
        {/* <Skeleton> */}
        <div className="relative aspect-video">
          <Image
            isZoomed
            alt="Card background"
            className="object-cover rounded-xl"
            src={img}
          />
        </div>
        {/* </Skeleton> */}
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col relative items-start w-4/5">
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500 line-clamp-1 text-left">
          {desc}
        </small>
        <div className="w-full flex justify-end py-4">
          <Button
            href={projectLink}
            as={Link}
            showAnchorIcon
            variant="solid"
            className="bg-myBlue1"
          >
            Inspect
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
