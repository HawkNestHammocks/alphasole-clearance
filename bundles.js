/* ===== AlphaSole Clearance — shared funnel config (landing + upsell) ===== */
window.AS = (function(){
  var STORE = "https://alphasole.com"; // native checkout host

  // variant id maps by size key (S = Small/Medium, L = Large/X-Large, XL = X-Large)
  var V = {
    copper:    {S:"9990491144228", L:"9990492454948", XL:"9990494126116"}, // $14.99
    sleeve:    {S:"7675030208548", L:"7675030241316"},                      // $9.99 (white foot sleeve)
    calf:      {S:"8828939567140", L:"8828939599908"},                      // $9.99
    alphasock: {S:"9912658591780", L:"9912658591780", XL:"9912658624548"},  // $29.99 (S/L -> L/XL)
    bunion:    "8667394703396",  // $19.99
    gloves:    "8667340734500",  // $14.99
    slider:    "8993538015268",  // $9.99
    gel:       "9654290645028"   // $9.99
  };

  var IMG = {
    copper:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/Alpha_Sole_3_Pack_7_159f4269-eb40-4077-b63e-3c7bf13b6e7f.png",
    copper2:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/x_1_7_339a9013-ad8d-45e8-b5e8-ee9d148067b3.png",
    bunion:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/Deon_Nel_Photography-22.jpg",
    bunion2:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/Deon_Nel_Photography-23.jpg",
    sleeve:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/Image-11.jpg",
    calf:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/IMG_5146.jpg",
    alphasock:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/Untitled_design_1_0205f103-2773-413d-a601-283783a689b4.png",
    gloves:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/Deon_Nel_Photography-28.jpg",
    slider:"https://cdn.shopify.com/s/files/1/0004/0534/0196/products/IMG_5429.jpg"
  };

  // product blurbs reused in "what's inside"
  var P = {
    copper:{n:"Copper Compression Socks", b:"Graduated copper-infused compression boosts circulation, eases swelling & fights odor — built for all-day wear."},
    bunion:{n:"Alpha II Bunion Corrector", b:"Gently realigns the big toe to relieve bunion pain. Non-surgical, wear day or night."},
    sleeve:{n:"Compression Foot Sleeves", b:"Open-toe arch & heel support that targets plantar fasciitis and tired, achy arches."},
    calf:{n:"Compression Calf Sleeve", b:"Calf support for shin splints, runners and faster recovery with better circulation."},
    alphasock:{n:"The Alpha Sock", b:"Targeted arch-support sock engineered for plantar-fasciitis & heel-pain relief."}
  };

  var BUNDLES = {
    comfort6: {
      id:"comfort6", name:"The All-Day Comfort Pack", tag:"★ Best Value", badge:"SAVE 63%",
      why:"On your feet all day? Six pairs of graduated copper compression — a fresh pair for every day, to fight swelling, fatigue &amp; odor.",
      price:54.99, was:149.94, perUnit:"$9.17 a pair", code:"CLEAR-COPPER6",
      img:IMG.copper, featured:true,
      sizes:[{k:"L",label:"Large"},{k:"S",label:"Small"},{k:"XL",label:"X-Large"}],
      inside:[{img:IMG.copper, n:"6 × "+P.copper.n, b:P.copper.b}],
      items:function(sz){return [V.copper[sz]+":6"];}
    },
    system: {
      id:"system", name:"The Complete Foot Relief System", tag:"★ Most Complete", badge:"SAVE 47%",
      why:"Everything your feet need in one box — hit bunions, plantar fasciitis, swelling &amp; arch fatigue all at once.",
      price:49.99, was:94.93, code:"CLEAR-KIT",
      img:IMG.bunion, featured:true,
      sizes:[{k:"L",label:"Large"},{k:"S",label:"Small"}],
      inside:[
        {img:IMG.bunion, n:"1 × "+P.bunion.n, b:P.bunion.b},
        {img:IMG.copper, n:"2 × "+P.copper.n, b:P.copper.b},
        {img:IMG.sleeve, n:"2 × "+P.sleeve.n, b:P.sleeve.b},
        {img:IMG.calf, n:"1 × "+P.calf.n, b:P.calf.b}
      ],
      items:function(sz){return [V.bunion+":1", V.copper[sz]+":2", V.sleeve[sz]+":2", V.calf[sz]+":1"];}
    },
    bunion4: {
      id:"bunion4", name:"The Bunion Rescue Bundle", badge:"SAVE 50%",
      why:"Realign both feet, day and night — with spares so you're never without relief. Non-surgical correction that actually works.",
      price:39.99, was:79.96, perUnit:"$10.00 each", code:"CLEAR-BUNION4",
      img:IMG.bunion2,
      sizes:[],
      inside:[{img:IMG.bunion, n:"4 × "+P.bunion.n, b:P.bunion.b}],
      items:function(){return [V.bunion+":4"];}
    },
    pf: {
      id:"pf", name:"The Plantar Fasciitis Fighter", badge:"SAVE 37%",
      why:"Heel pain first thing in the morning? Attack plantar fasciitis from every angle — daytime sleeves plus overnight arch-support socks.",
      price:49.99, was:79.94, code:"CLEAR-PF",
      img:IMG.alphasock,
      sizes:[{k:"L",label:"Large"},{k:"S",label:"Small"}],
      inside:[
        {img:IMG.alphasock, n:"2 × "+P.alphasock.n, b:P.alphasock.b},
        {img:IMG.sleeve, n:"2 × "+P.sleeve.n, b:P.sleeve.b}
      ],
      items:function(sz){return [V.alphasock[sz]+":2", V.sleeve[sz]+":2"];}
    },
    starter3: {
      id:"starter3", name:"The Starter Relief Pack", badge:"SAVE 53%",
      why:"New to compression? Start here. Three pairs to feel the difference in tired, achy legs &amp; feet.",
      price:34.99, was:74.97, perUnit:"$11.66 a pair", code:"CLEAR-COPPER3",
      img:IMG.copper2,
      sizes:[{k:"L",label:"Large"},{k:"S",label:"Small"},{k:"XL",label:"X-Large"}],
      inside:[{img:IMG.copper, n:"3 × "+P.copper.n, b:P.copper.b}],
      items:function(sz){return [V.copper[sz]+":3"];}
    },
    recovery: {
      id:"recovery", name:"The Active Recovery Kit", badge:"SAVE 30%",
      why:"For runners &amp; gym-goers — calf support plus compression socks to speed recovery, beat shin splints and keep legs fresh.",
      price:34.99, was:49.96, code:"CLEAR-RECOVERY",
      img:IMG.calf,
      sizes:[{k:"L",label:"Large"},{k:"S",label:"Small"}],
      inside:[
        {img:IMG.calf, n:"2 × "+P.calf.n, b:P.calf.b},
        {img:IMG.copper, n:"2 × "+P.copper.n, b:P.copper.b}
      ],
      items:function(sz){return [V.calf[sz]+":2", V.copper[sz]+":2"];}
    }
  };
  var ORDER = ["comfort6","system","bunion4","pf","starter3","recovery"];

  // upsell add-ons shown after bundle selection
  var UPSELLS = [
    {id:"u_bunion", variant:V.bunion,    name:"Alpha II Bunion Corrector", price:19.99, img:IMG.bunion,    b:"Add a spare or treat your other foot."},
    {id:"u_sleeve", variant:V.sleeve.L,  name:"Compression Foot Sleeves",  price:9.99,  img:IMG.sleeve,    b:"Arch & heel support for plantar fasciitis."},
    {id:"u_calf",   variant:V.calf.L,    name:"Compression Calf Sleeve",   price:9.99,  img:IMG.calf,      b:"Beat shin splints & boost circulation."},
    {id:"u_gloves", variant:V.gloves,    name:"Compression Gloves",        price:14.99, img:IMG.gloves,    b:"Soothe arthritis & tired hands."},
    {id:"u_slider", variant:V.slider,    name:"Alpha Sock Slider",         price:9.99,  img:IMG.slider,    b:"Put socks on without bending over."},
    {id:"u_alpha",  variant:V.alphasock.L,name:"The Alpha Sock",           price:29.99, img:IMG.alphasock, b:"Targeted plantar-fasciitis relief sock."}
  ];

  // build a /cart checkout url from item strings + discount code
  function checkoutUrl(items, code){
    var url = STORE + "/cart/" + items.join(",") + "?storefront=true";
    if(code) url += "&discount=" + encodeURIComponent(code);
    // carry UTMs / fbclid through to checkout
    try{
      var qs = new URLSearchParams(location.search), keep=[];
      ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid"].forEach(function(k){
        if(qs.get(k)) keep.push(k+"="+encodeURIComponent(qs.get(k)));
      });
      if(keep.length) url += "&" + keep.join("&");
    }catch(e){}
    return url;
  }

  function pixel(ev, data){ try{ if(window.fbq) fbq('track', ev, data||{}); }catch(e){} }

  return { STORE:STORE, BUNDLES:BUNDLES, ORDER:ORDER, UPSELLS:UPSELLS, checkoutUrl:checkoutUrl, pixel:pixel };
})();
