{
  //

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (param: Shape): number => {
    if (param.shape === "circle") {
      return Math.PI * param.radius * param.radius;
    }

    return param.width * param.height;
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea);
  console.log(rectangleArea);

  //
}
