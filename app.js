const isDevelopment = true;

const query = `
  CREATE TABLE structure_footer (
    id SERIAL PRIMARY KEY, 
    url VARCHAR NOT NULL,  
    redes VARCHAR NOT NULL
    ${isDevelopment ? "/* Development: Adding networks */" : ""}
  );
`;

console.log(query);
