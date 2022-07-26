
let cultpass_container_cards_data = [
    {heading : "cultpass", img : "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,ar_3.59,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png", para : "Unlimited access to group classes, all gyms and at-home workouts"},

    {heading : "cultpass", img : "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,ar_2.63,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png", para : "Unlimited access to all PRO gyms and at-home workouts"},

    {heading : "cultpass", img : "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png", para : "Unlimited access to at-home workouts with calorie tracking"},
];

let cultpass_container = document.querySelector(".cultpass-container");

displayCultpass_cards(cultpass_container_cards_data);

function displayCultpass_cards(data){
    cultpass_container.innerHTML = "";
    data.forEach(function(ele){
        let div = document.createElement("div");
        div.setAttribute("class", "cards");

        let h2 = document.createElement("h2");
        h2.innerText = ele.heading;

        let img = document.createElement("img");
        img.setAttribute("src", ele.img);

        let p = document.createElement("p");
        p.innerText = ele.para;

        div.append(h2, img, p);

        cultpass_container.append(div);
    });
}

// Animation section data

let ani_container_2 = document.querySelector(".ani-container-2");
let ani_container_2_data = [
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.29,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png",

    "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.488,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png",

    "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.123,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png"
];

displayAni_container_2(ani_container_2_data);

function displayAni_container_2(data){
    ani_container_2.innerHTML = "";
    data.forEach(function(ele){
        let div = document.createElement("div");
        div.setAttribute("data-aos", "zoom-in-up")
        let img = document.createElement("img");
        img.setAttribute("src", ele);

        div.append(img);

        ani_container_2.append(div);
    });
}


////////////////////////////////////////////////////////////////////
let class_container = document.querySelector(".class-container");

let class_container_data = [
"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.29,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_287,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/black2.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_287,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_287,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_287,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/yHz1nfjmiafpYRHeTMiBfB9A"
];

display_class_container(class_container_data);

function display_class_container(data){
    class_container.innerHTML = "";
    data.forEach(function(ele){
        let div = document.createElement("div");
        div.setAttribute("data-aos", "fade-up");
        div.setAttribute("data-aos-duration", "3000")

            let img = document.createElement("img");
            img.setAttribute("src", ele);

            div.append(img);

        class_container.append(div);
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////


