import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "MERN Stack Developer",
              "Passionate Machine Learning Enthusiast",
              
              "Effective Problem Solver",
              "Tech enthusiast transforming challenges into innovative software solutions"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type