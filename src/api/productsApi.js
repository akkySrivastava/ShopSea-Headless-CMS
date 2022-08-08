const products = [
    {
        id: 1,
        name: "Apple iPhone 13 128GB Red ",
        overview:
            "Apple iPhone 13 128GB Red:6.1-inch Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording  A15 Bionic chip for lightning-fast performance Up to 19 hours of video playback",
        imageURL: "https://cdn.dsmcdn.com/ty439/product/media/images/20220526/14/116422547/250485278/1/1_org_zoom.jpg",
        category: "phone",
    },
    {
        id: 2,
        name: "Razer Nari Essential Wireless 7.1 Surround Sound Gaming Headset",
        overview:
            "Razer Nari Essential Wireless 7.1 Surround Sound Gaming Headset:The #1 Best-Selling Gaming Peripherals Manufacturer in the US: Source - The NPD Group, Inc. U.S. Retail Tracking Service, Keyboards, Mice, PC Headset/Pc Microphone, Gaming Designed, based on dollar sales, 2017-2021 Lightweight & Auto-Adjusting Headband for Extended Gaming Sessions: The Nari Essential adapts to the shape of the user's head for convenient comfort THX Spatial Audio for Full Immersion: Simulates sound in a 360° sphere to provide positional information from gunfire and enemy footsteps On-Headset Audio Controls: Volume adjustment wheel and mic mute button directly on the headset for convenience 16-Hour Battery Life for Continuous Use: Allows for extended wireless media consumption (charges via micro USB 2.0 cable) Noise Cancelling Microphone for Clear In-Game Chat: The outward-flipping microphone extends when needed and collapses when it's not, all while blocking out background noise",
        imageURL: "https://m.media-amazon.com/images/I/71XbTJ0dytL._AC_SX522_.jpg",
        category: "headphones",
    },
    {
        id: 3,
        name: "OLEVS Men's Automatic Mechanical Wrist Watches",
        overview:
            "OLEVS Men's Automatic Mechanical Wrist Watches: Business Dress Wacthes : Solid silver stainless steel watch is design for business and causal style. Can be matched with your suits and casual wear, what an everyday watch it is!Men's Wrist Watches : The watch combines multifunction dial and unique moon phase dial, easy for read for date and suit for travel.Automatic Mechanical Watches : Import movement, support manual and self winding, no battery. Rotate the crown clockwise 30 times for winding and continuous movement.Premium OLEVS Box Packaging: watch packaging includes -- A watch, watch manual, free adjustment tool, watch gift box.FREE Warranty Service: We provide 30-day no reason returns and 1 year of warranty service for our watches.",
        imageURL: "https://m.media-amazon.com/images/I/81+KsGb072L._AC_UY879_.jpg",
        category: "watch",
    },
    {
        id: 4,
        name: "Xperia PRO-I 5G SmartPhone",
        overview:
            "Xperia PRO-I 5G SmartPhone: World's first native 4K 120fps high frame rate recording in a smartphone[ii] Eye AF and Object tracking keeps subjects in focus for videos and stills Triple camera array w/ ZEISS optics (16mm/24mm/50mm) and 3D iToF sensor Anti-distortion shutter helps suppress the rolling-shutter effect 12bit RAW for smooth color gradation[iii] and high dynamic range",
        imageURL: "https://m.media-amazon.com/images/I/41XydBYdgRL._AC_SX522_.jpg",
        category: "phone",
    },
    {
        id: 5,
        name: "SAMSUNG Galaxy S22+ Cell Phone 256GB",
        overview:
            "SAMSUNG Galaxy S22+ Cell Phone 256GB:8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22 Plus NIGHTOGRAPHY plus PORTAIT MODE: Capture the night with crystal clear, bright pics and videos, no matter the lighting with Night Mode; Portrait Mode auto-detects and adjusts to what you want front and center, making all your photos worthy of a frame 50MP PHOTO RESOLUTION plus BRIGHT DISPLAY: From elaborate landscapes to intricate creations, capture vivid detail with 50MP resolution; Your favorite content will look even more epic on our brightest display ever with Vision Booster  ADAPTIVE COLOR CONTRAST: Streaming on the go, working from your patio or binge-watching late into the night. The Galaxy S22 plus adaptive screen automatically optimizes color and brightness, outdoors and indoors LONG LASTING BATTERY plus FAST CHARGING: Power every scroll, click, tap and stream all day long and then some with an intelligent, long-lasting battery; Dive back into action at a moment’s notice with 25W Super-Fast Charging PREMIUM DESIGN & CRAFTMANSHIP: With a classy, eye-catching glass-metal-glass design, we’re setting a standard for smart phones; With our strongest aluminum frame and the latest Gorilla Glass, this phone is lightweight and durable to help endure scratches and dings    LIVE SHARING w/ GOOGLE DUO: Watch viral YouTube videos and content together with your friends, from anywhere ",
        imageURL: "https://m.media-amazon.com/images/I/71VawMP6R1L._AC_SX522_.jpg",
        category: "phone",
    },
    {
        id: 6,
        name: "sephia SP3060 Earbuds Wired in-Ear Headphones",
        overview:
            "sephia SP3060 Earbuds Wired in-Ear Headphones: Wired in ear earbud headphones perfect for listening music while running or GYM, with 6 sets of ear pads (S/M/L), Headphones stay in your ears while keeping surrounding noise out A powerful 10mm Neodymium earbud magnet provides outstanding audio clarity for all music genres; Together with the in ear noise isolating earbud design, these wired headphones reduces external noise and minimizes sound leakages significantly shape 3.8ft long wire with standard Headphone Jack for easy connect to Android or iPhone With common standard 3.5mm headphone input, Frequency Response 20-20,000Hz, without microphone Lightweight design for easy portability, Easy to slip in your pocket,The charm silver and black color make them look more noble and elegant, while high quality and enhanced materials mean they last longer Wired in ear earbuds are compatible with iPhone SE/ 6/6s/6 Plus/6s Plus/5/5c/5s, iPad Mini, iPad Air, iPod touch 5, Samsung S10, S9, S8, Note 9, Note 8, Android Smartphones and tablets, Windows devices and other devices equipped with 3.5mm headphone jack",
        imageURL: "https://m.media-amazon.com/images/I/71ENlyHZqkL._AC_SX522_.jpg",
        category: "headphones",
    },
    {
        id: 7,
        name: "HIFIMAN HE1000 V2 Planar Magnetic Full-Size Over-Ear Open-Back Hi-Fi Headphones",
        overview:
            "HIFIMAN HE1000 V2 Planar Magnetic Full-Size Over-Ear Open-Back Hi-Fi Headphones: World’s First Diaphragm in Nanometer Thickness: In the HE1000 V2, the film we use is so thin, it is a diaphragm in nanometer thickness which is a breakthrough core technology developed by HIFIMAN and first of its kind in headphone application. Working with this advanced material is extremely challenging yet the successful incorporation of this film as the HE1000’s planar driver is the cornerstone of its remarkable sound. Advanced Asymmetrical Magnetic Circuit: 7 years of painstaking research with this groundbreaking design offers near perfect reproduction of live music; Patented “Window Shade” System: Created to meet the need for driver protection and optimized open-back design The newly upgraded HE1000 (HE1000 V2) features improved reference quality sound plus: ★Improved headband design that will accommodate a wider range of head sizes ★Less weight (reduced to 420g) with increased comfort ★Updated ear cup trimmed down in size for a slimmer, sleeker look ★Thicker, beveled ear pads with a larger asymmetrical angle and Polyester surface ★Newly upgraded cable with improved stronger structure Craftsmanship: The metal structure is created via CNC milling and hand polishing. To meet the critical standard set out by HIFIMAN, the surface finishing is handled and refined by meticulous craftsmen With its unique design, exceptional function and exquisite craftsmanship, the HE1000 is the total luxury item that redefines the audio landscape. The Plugs: The HE1000 V2 package includes three different types of plugs: ¼” (mini 6.35mm), 3.5mm and 4-pin XLR connector so it can be used with a wide array of equipment. The plugs are easy to switch and quickly connected to different cables and amplifiers.",
        imageURL: "https://m.media-amazon.com/images/I/71sO4jDBBaL._AC_SX522_.jpg",
        category: "headphones",
    },
    {
        id: 8,
        name: "Apple iPhone SE, 64GB, White",
        imageURL: "https://m.media-amazon.com/images/I/81W-CgG2ORL._AC_SX522_.jpg",
        overview:
            "Apple iPhone SE, 64GB, White:This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.). Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity. Backed by a one-year satisfaction guarantee, with free access to Amazon’s Technical Support team throughout the full year and ability to replace or return the product if it does not work as expected. Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card. Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm’s length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.",
        category: "phone",
    },

    {
        id: 9,
        name: "KleenGuard™ V30 Nemesis Safety Glasses, Smoke Anti-Fog Lens with Black Frame, 12 Pairs / Case",
        overview:
            "KleenGuard™ V30 Nemesis Safety Glasses, Smoke Anti-Fog Lens with Black Frame, 12 Pairs / Case: These KleenGuard Nemesis Safety Glasses (safety sunglasses) have a black frame and smoke anti-fog lenses for outdoor use: smoke anti-fog lenses are ideal for bright, sunny days to provide glare reduction, even when you are moving between hot, cold, and humid environments KleenGuard Nemesis Smoke Anti-Fog Safety Glasses feature a sporty, flexible, lightweight design that your employees will be happy to wear; they have a stylish, sporty look and feel Meets ANSI Z87.1-plus standards for personal eye protection Polycarbonate lenses provide 99.9% UVA/ UVB/UVC protection Patented FLEX-DRY designed to be extremely flexible, to channel sweat away from the eyes, and to help prevent slippage down the nose – all for long-term comfort",
        imageURL: "https://m.media-amazon.com/images/I/71LIzE1cnfL._SX522_.jpg",
        category: "glasses",
    },
];

export default products;
