export * from './helperFunctions';
export * from './validations';
export * from './constants';
export * from './axios';

export const handleNumber = (e, isNumber) => {
    if (isNumber) {
      if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
    }
  };
  
  export const handleString = (e, text) => {
    if (text) {
      if (!(e.which >= 65 && e.which <= 122) && e.which != 32 && e.which != 0) {
        e.preventDefault();
      }
    }
  };
  
  export const checkValidType = (fileType,type)=>{
    return new Promise((resolve,reject)=>{
      if(type === "image" && fileType){
        var img = ["jpeg","jpg","jiff","jfif","png","gif","tiff","psd","webp"];
        resolve(img.includes(fileType.toLowerCase()))
      }else
      if(type ==="document" &&fileType){
        var doc = ["doc","docx","odt","pdf","rtf","txt","excel","xlsx","xls","plain"];
        resolve(doc.includes(fileType.toLowerCase()))
      }else{
        resolve(false)
      }
  
    })
  }
  
  export const handleEmail= (email)=>{
    if(email){
     let isEmail = !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
     return isEmail
    }
  }
  