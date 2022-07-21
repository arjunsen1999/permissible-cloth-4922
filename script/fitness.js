
let litepass_data = [
    {topHeading: "cultpass", img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,ar_3.59,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png", para : "Starting at ₹1357 / month"},
    {topHeading: "cultpass", img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,ar_2.63,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png", para : "Starting at ₹857 / month"},
    {topHeading: "cultpass", img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png", para : "Starting at ₹115 / month"},
];

let litepass = document.querySelector(".litepass");

displayLitepass(litepass_data);

function displayLitepass(data){
    litepass.innerHTML = "";
    data.forEach(function(ele){
        let div = document.createElement("div");
        
        let heading = document.createElement("h2");
         heading.innerText = ele.topHeading;

         let img = document.createElement("img");
         img.setAttribute("src", ele.img);

         let para = document.createElement("h2");
         para.innerText = ele.para;

         div.append(heading, img, para);

        litepass.append(div);
    });
}