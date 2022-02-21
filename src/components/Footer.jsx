import React from "react";

const name = "mia";
// const year = "2022";
const cDate = new Date();
const cYear = cDate.getUTCFullYear();

function Footer(){
 return (<p class="footer">©&copy{cYear}</p>);
}

export default Footer;