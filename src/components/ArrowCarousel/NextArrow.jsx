import "slick-carousel/slick/slick-theme.css";

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#FFF",
        height: "5rem",
        marginRight: "5rem",
        position: "absolute",
        zIndex: "100",
        transform: "scale(2)"
      }}
      onClick={onClick}
    />
  );
}
