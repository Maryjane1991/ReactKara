import { useColors } from "./context/ColorContext";

const Footer = () => {
  const { colors, setColors } = useColors();

  console.log(colors);
  // {primary: "bg-blue-500", secondary: "bg-green-500", tertiary: "bg-black"}

  // Function to change the primary color
  const changeColor = () => {
    setColors({
      ...colors, 
      primary: "bg-slate-500", 
    });
  };

  return (
    <div>
      <h1 className={`${colors.primary}`}>Footer</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Footer;
