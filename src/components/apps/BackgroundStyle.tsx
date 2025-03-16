import React from "react";

const BackgroundStyle = ({
  type,
  children,
}: {
  type: "M1" | "M2" | "dotted";
  children: React.ReactNode;
}) => {
  switch (type) {
    case "M1": {
      return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
            {children}
          </div>
        </div>
      );
    }
    case "M2": {
      //
      return (
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          {children}
        </div>
      );
    }
    case "dotted": {
      return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(rgba(0,0,0,0.13)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px]">
          {children}
        </div>
      );
    }
  }
};

export default BackgroundStyle;
