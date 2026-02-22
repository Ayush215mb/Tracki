
const databaseURL:string | undefined = process.env.NODE_ENV ==="dev" ? process.env.DEV_DATABASE_URL: process.env.PROD_DATABASE_URL;

if( typeof databaseURL == "undefined") {
     throw Error("Missing database url");
}

export default  databaseURL;