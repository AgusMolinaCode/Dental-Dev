import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { BsFillStarFill } from "react-icons/bs";

export default function BackgroundBlogCard({ doctor }) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] max-w-[450px]  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{
          backgroundImage: `url(${doctor.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 m-0 h-full w-full rounded-none"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-2 px-1 md:px-2">
        <Typography variant="h2" className="mb-4 text-white font-bold text-2xl">
          {doctor.name}
        </Typography>
        <Typography
          variant="p"
          color="white"
          className="mb-10 font-semibold leading-[1.5] h-32 md:h-28 text-sm"
        >
          {doctor.description}
        </Typography>
        <div className="flex justify-between items-center px-2 pt-4">
          {/* <div className="w-20 h-20 object-cover pt-3 object-center">
            <Avatar alt="tania andrew" src={doctor.img} />
          </div> */}
          <div className="flex items-center gap-2">
            <BsFillStarFill className="text-yellow-400 text-[1.3rem]" />
            <p className="text-gray-500 text-[1.4rem]">{doctor.stars}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
