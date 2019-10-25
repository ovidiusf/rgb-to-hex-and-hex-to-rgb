//converts the received rgb color into hex by doing the following:
//convert into base 16 each color, push it into a new array and then joining it

const rgbToHex = ((r, g , b) => '#' + [r, g , b].map(x => {
    //converts the x to base 16
    const hex = x.toString(16);
    //returns the converted color (r , g or b) and adds a 0 if necessary
    return hex.length === 1 ? '0' + hex: hex
}).join(''));

//  console.log(rgbToHex(0, 51, 255)); // '#0033ff'


//converts from hex to rgb by splitting and converting the values
//in the array, using base 16;
const hexToRgb = (hex => {
   // if(hex.charAt(0) === '#'){
   //     hex = hex.substr(1);
   // }

   let values = hex.split(''),r,g,b;

   if(hex.length === 6){
       r = parseInt(values[0].toString() + values[1].toString(), 16);
       g = parseInt(values[2].toString() + values[3].toString(), 16);
       b = parseInt(values[4].toString() + values[5].toString(), 16);
   }
   return `rgb(${[r,g,b]})`;
});


//abstracted implementation of both hex and rgb convertors.
//hex needs to start with # in order to overwrite the r,g,b functionality
//otherwise rgb to hex will be used
const rgbOrHexConverter = ((r, g, b, hex) => {
    if(hex !== 0 && hex.charAt(0) === '#' ){
        return hexToRgb(hex);
    }else {
        return rgbToHex(r, g, b);
    }
});