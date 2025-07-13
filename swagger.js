import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Carambar API",
      version: "1.0.0",
      description: "API de blagues Carambar",
    },
    servers: [
      {
        url: "https://carambar-project-back.onrender.com/api/v1",
      },
    ],
  },
  apis: ["./routes/*.js", "./controllers/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;