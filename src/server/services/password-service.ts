require('dotenv').config();

export const passwordCheck = async (
    password:string
  ) => {
    if(password == process.env.PASSWORD) {
        return true;
    } else {
        return false;
    }
  };



