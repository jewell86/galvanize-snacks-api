
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        {id: 1, name: "Pork Rinds", description: "Mauris lacinia sapien quis libero.", price: 8.44, img: "https://az808821.vo.msecnd.net/content/images/thumbs/0000398_salt-pepper-pork-rinds-2-oz_560.jpeg", is_perishable: true},
        {id: 2, name: "Soup - Campbells Beef Noodle", description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.", price: 26.37, img: "https://images-na.ssl-images-amazon.com/images/I/71MavWF1P9L._SY550_.jpg", is_perishable: false},
        {id: 3, name: "Pie Filling - Cherry", description: "Fusce posuere felis sed lacus.", price: 3.16, img: "http://wickedgoodkitchen.com/wp-content/uploads/2018/06/Mom%E2%80%99s-Homemade-Tart-Cherry-Pie-Filling.png", is_perishable: false},
        {id: 4, name: "Chicken - Chicken Phyllo", description: "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.", price: 5.08, img: "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps191978_SD163575C10_07_6b.jpg", is_perishable: true},
        {id: 5, name: "Foam Dinner Plate", description: "In quis justo. Maecenas rhoncus aliquam lacus.", price: 5.88, img: "hhttp://www.uscasehouse.com/media/catalog/product/cache/1/image/736x460/9df78eab33525d08d6e5fb8d27136e95/p/a/pactiv-0th1001000y-satinware-white-foam-dinner-plate-540-case-bulk-us-casehouse.jpg", is_perishable: false},
        {id: 6, name: "Wine - White, Riesling, Semi - Dry", description: "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.", price: 13.92, img: "https://www.bothamvineyards.com/wp-content/uploads/2013/03/riesling-cropped-lo-res.jpg", is_perishable: false},
        {id: 7, name: "Cheese - Taleggio D.o.p.", description: "Nulla ut erat id mauris vulputate elementum. Nullam varius.", price: 1.17, img: "https://www.melburyandappleton.co.uk/ekmps/shops/melburyapple/images/taleggio-dop-500g-4422-p.jpg", is_perishable: true},
        {id: 8, name: "Cheese - Brie", description: "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.", price: 26.34, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/1200px-Brie_01.jpg", is_perishable: false},
        {id: 9, name: "Tea - Darjeeling, Azzura", description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.", price: 18.22, img: "https://www.udyantea.com/media/catalog/product/cache/1/image/1800x/af097278c5db4767b0fe9bb92fe21690/c/a/castleton_muscatel_gold_black_tea_01.jpg", is_perishable: true},
        {id: 10, name: "Veal Chops", description: "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.", price: 24.80, img: "https://foodsogoodmall.com/wp-content/uploads/2014/05/Pan-Seared-Oven-Roasted-Veal-Chops.jpg", is_perishable: true},
        {id: 11, name: "Tomatoes - Roma", description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.", price: 14.44, img: "https://windsetfarms.com/wp-content/uploads/2016/10/WF_Website_Product-on-White-500x375_ROMA.jpg", is_perishable: true},
        {id: 12, name: "Sauce - Bearnaise, Mix", description: "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.", price: 8.75, img: "https://i5.walmartimages.ca/images/Large/151/164/151164.jpg?odnBound=460", is_perishable: false},
        {id: 13, name: "Jam - Strawberry, 20 Ml Jar", description: "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.", price: 8.14, img: "https://happymoneysaver.com/wp-content/uploads/2014/06/1.jpg", is_perishable: true},
        {id: 14, name: "Cheese - Ricotta", description: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.", price: 14.20, img: "https://www.thepkpway.com/wp-content/uploads/2016/12/how-to-make-ricotta-cheese-5f.jpg", is_perishable: true},
        {id: 15, name: "Remy Red Berry Infusion", description: "Nunc purus. Phasellus in felis. Donec semper sapien a libero.", price: 20.82, img: "https://cdn3.volusion.com/nelew.mwyhw/v/vspfiles/photos/RemyRed--2.jpg?1443985288", is_perishable: false},
        {id: 16, name: "Wine - Chateau Bonnet", description: "Nam nulla.", price: 21.29, img: "https://www.wespeakwine.com/Shared/Images/Product/Andre-Lurton-Chateau-Bonnet-Bordeaux-Rouge-2010-750ML/bonnet_red_bottle.jpg", is_perishable: true},
        {id: 17, name: "Vegetable - Base", description: "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.", price: 10.73, img: "https://cdn.shopify.com/s/files/1/1078/9836/products/0844VegLSFront.jpg?v=1470685826", is_perishable: false},
        {id: 18, name: "Squeeze Bottle", description: "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.", price: 15.98, img: "https://cdnimg.webstaurantstore.com/images/products/large/48478/1424919.jpg", is_perishable: false},
        {id: 19, name: " Pure Vanilla Extract", description: "Duis at velit eu est congue elementum.", price: 12.94, img: "https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/8/8/889301.jpg", is_perishable: false},
        {id: 20, name: "Beef Striploin", description: "Donec dapibus.", price: 6.18, img: "https://s3.amazonaws.com/product-images.imshopping.com/nimblebuy/the-butcher-shoppe-1169042-1976272-regular.jpg", is_perishable: true},
        {id: 21, name: "Tea - Jasmin Green", description: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.", price: 6.41, img: "https://www.teabeau.com/wp-content/uploads/2017/12/Mo-Li-Piao-Xue-Jasmine-Green-Tea-1.jpg", is_perishable: true},
        {id: 22, name: "Wine - Red, Gamay Noir", description: "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.", price: 28.21, img: "https://moorewilsons.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/e/te-mata-estate-vineyards-ga/te-mata-estate-vineyards-gamay-noir-31.1513226341.jpg", is_perishable: false},
        {id: 23, name: "All Natural Organic Black Plastique Fork (qty: 1)", description: "It is like a really really nice fork...", price: 5000000.01, img: "https://cdn.shopify.com/s/files/1/1516/1182/products/Black_6inch_Fork_1080x1080_160b0a6d-8f00-4bf0-a40c-1870c761baaf_1024x1024.png?v=1482161307", is_perishable: true},
        {id: 24, name: "Mushroom - Shitake, Dry", description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.", price: 13.45, img: "http://www.2funguys.com/store/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/i/t/itop_shiitake_dried.jpg", is_perishable: true},
        {id: 25, name: "Lettuce - Radicchio", description: "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.", price: 16.24, img: "http://cdn.shopify.com/s/files/1/0206/9470/products/Lettuce_Radichia_0140e32a-b0e7-4fef-ac83-46c597a1f71d_grande.jpeg?v=1479149541", is_perishable: true},
        {id: 26, name: "Olives - Black, Pitted", description: "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.", price: 14.01, img: "https://sc02.alicdn.com/kf/HTB1Rp02KFXXXXXwXFXXq6xXFXXXG/Pitted-Black-Olives.jpg", is_perishable: true},
        {id: 27, name: "Cocoa Powder - Natural", description: "Donec semper sapien a libero. Nam dui.", price: 20.89, img: "http://www.ciranda.com/sites/ciranda.com/files/Organic-Cocoa-Powder-Natural-10-12-gold-w-shadow.png", is_perishable: false},
        {id: 28, name: "Mushroom - Oyster, Fresh", description: "Morbi ut odio.", price: 27.26, img: "http://stockarch.com/files/13/08/oyster_mushroom_uncooked.jpg", is_perishable: true},
        {id: 29, name: "Rosemary - Primerba, Paste", description: "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.", price: 17.18, img: "http://www.food.reaton.ru/glimg/food/0912115L.jpg", is_perishable: false},
        {id: 30, name: "Apple Flavored Scooby Snacks", description: "A caramel-flavored cookie with special munchy-inducing properties. Good at any time, at home or on the go.", price: 8.44, img: "https://www.k9bytesgifts.com/gallery/dog-treat-samples-loose.jpg", is_perishable: false},
        {id: 31, name: "BB-8's Brownie Balls", description: "Delicious and rollable, these flavorful bites will melt in your mouth without tempting you to join the darkside.", price: 8.44, img: "https://foodsofdiversepopulations.files.wordpress.com/2012/08/brownie-ball-pic1.jpg", is_perishable: false}
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));`)
    })
}
