import {Spinner} from "@chakra-ui/react";

const OnPageLoading = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-myBlack">
        <Spinner color="teal.300" />
        <div className="text-myWhite font-mono">
          <span className="text-myBlue1">~</span>{" "}
          <span className="text-amber-400">docker</span> build . --tag
          portfolio:latest
        </div>
      </div>
    </>
  );
};

export default OnPageLoading;
