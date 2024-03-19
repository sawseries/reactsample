const breackpoints = {
  sm: 570,
  md: 970,
};

const navbar = {
  //background: "#30475e",
  background: "#FFF",
  color: "black",
  width: "0.5fr",
  minWidth: "220px",
  activeNavbarWith: "220px",

  divider: {
    height: "1px",
    background: "rgba(255, 255, 255, 0.24)",
  },

  logo: {
    fontSize: "2rem",
    stroke: "#fff",

    title: {
      color: "black",
      fontSize: "1rem",
    },
  },

  item: {
    color: "#ffffffa3",
    radius: "6px",
    padding: "1rem",

    hover: {
      color: "#fff",
      background: "#161616",
    },

    icon: {
      fontSize: "1.3rem",
      stroke: "#ffffffa3",
      
      hover: {
        stroke: "#fff",
      },
    },
  },
};

export { breackpoints, navbar };
