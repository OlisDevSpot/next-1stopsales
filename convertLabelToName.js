// import fs from "fs";

// const solutions = [
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Remove & reinstall panels",
//     image_url:
//       "https://solarfixaz.com/core/uploads/2023/11/Residential-Solar-Panels.6116fa95c5e8f0.47033230-1024x536.jpg",
//     description: "Remove existing solar panels & reinstall at a later date",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Replace package unit",
//     image_url:
//       "https://superiormsi.com/wp-content/uploads/2021/05/Residential-Rooftop-Package-Unit.png",
//     description:
//       "Remove an existing roof HVAC unit with a crane and replacing it with a new, high-efficiency HVAC package unit",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Replace furnace",
//     image_url:
//       "https://prowbrothers.com/wp-content/uploads/2023/04/new-furnace-in-closet.webp",
//     description:
//       "Replace only the heating components of a central air system (furnace)",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Insulation top-off",
//     image_url:
//       "https://braxroofing.com/wp-content/uploads/2022/10/roofer-installing-an-attic-insulation.jpg",
//     description: "Add insulation on top of your existing attic insulation",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Install radiant barrier",
//     image_url:
//       "https://www.atticmasters.net/wp-content/uploads/2021/02/radiantbarrier15.png",
//     description:
//       "Boost your home's energy efficiency and reduce cooling costs by installing a radiant barrier in your attic",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Install tankless WH",
//     image_url:
//       "https://i.pinimg.com/564x/19/d3/b2/19d3b2cbc16da1d108434b89f1572c38.jpg",
//     description:
//       "Enhance your home's efficiency and never run out of hot water by upgrading to a tankless water heater",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Shower remodel",
//     image_url:
//       "https://virginiakitchenandbath.com/wp-content/uploads/2020/11/shower-remodel-ideas.jpg",
//     description:
//       "Revitalize your daily routine and add luxury to your bathroom by upgrading to a modern, high-quality shower",
//     scope_of_work_init: null,
//   },
//   {
//     name: "",
//     label: "Electrical upgrade",
//     image_url:
//       "https://images.crutchfieldonline.com/ImageBank/v20161019092600/ImageHandler/scale/978/978/core/learn/article/3937/unfinished_pre-wired_room.jpg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Replace flooring",
//     image_url:
//       "https://media.llflooring.com/image/upload/w_1000,h_1000,f_auto,q_auto,c_pad,c_fit/10053543-h_fkxr9c.jpg",
//     description:
//       "Transform your home's look and feel by upgrading to new flooring that adds both style and comfort",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Remove popcorn ceiling",
//     image_url:
//       "https://storables.com/wp-content/uploads/2023/10/how-much-does-it-cost-to-remove-popcorn-ceiling-1696331622.jpeg",
//     description:
//       "Transform your home's interior and modernize your space by upgrading from a popcorn ceiling to a sleek, smooth finish",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Drywall patch & repair",
//     image_url:
//       "https://cdn.majorpaintingco.com/images/blog/images/2018/may/4-easy-steps-to-patching-a-hole-in-drywall.jpg",
//     description:
//       "Restore your walls to pristine condition by fixing them with drywall patching for a seamless and polished look",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Repaint",
//     image_url:
//       "https://residential.keim-usa.com/wp-content/uploads/2021/09/Web-Development_Interior-Mineral-Paint-Product-Page-Image-1-Color-20303-scaled.jpg",
//     description:
//       "Revitalize your living space and refresh your home’s ambiance by upgrading to a new coat of interior paint",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Update countertops",
//     image_url:
//       "https://www.constructionresourcesusa.com/wp-content/uploads/2018/09/kitchen_cambria-brittanica_1135-2.jpg",
//     description:
//       "Elevate your kitchen’s look and functionality by replacing your old countertops with durable, stylish new surfaces",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "New construction ADU",
//     image_url:
//       "https://superioradus.com/wp-content/uploads/2020/10/5-1024x576.png",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Patio Cover",
//     image_url:
//       "https://static.vecteezy.com/system/resources/previews/023/378/822/large_2x/modern-patio-furniture-include-a-pergola-shade-structure-an-awning-a-patio-roof-a-dining-table-seats-and-a-metal-grill-ai-generated-photo.jpg",
//     description:
//       "Enhance your outdoor living area and enjoy year-round comfort by adding a stylish patio cover to your home’s exterior",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Redeck",
//     image_url:
//       "https://www.contractortalk.com/attachments/2-2_plywoodoverskipsheathing-jpg.134649/",
//     description:
//       "Remove all 3 roof layers down to rafters, install OSB or Plywood per code, install new waterproofing & roof finish",
//     scope_of_work_init:
//       'Phase I: Site Preparation\r\n- Cover ground around house, HVAC condensers as needed, fragile items and exposed ceilings in garage with nylon and tarps in order to collect debris from roof in an organized fashion\r\n\r\nPhase II: Demo\r\n- Provide dumpster to jobsite\r\n- Demo existing asphalt shingles\r\n- Demo existing roof underlayment to decking\r\n- Demo all existing decking and vents\r\n- Team will inspect rafters (if damaged additional costs may apply)\r\n- Valley metal remains for re-enforcement\r\n- Provide and install new 1/2 inch plywood/osb boards over entire house roof\r\n- Clean all debris & haul away\r\n- Pass decking inspection with local city inspector\r\n\r\nPhase III: Install new roofing material per code\r\n- Install new synthetic underlayment - UDL30 or equivalent and fasten down with 1" plastic cap nails per code\r\n- Install new powder coated 2x2/ 2x3 drip edge metal flashings along perimeter (Eaves/gutters and Rakes)- Color TBD\r\n- Install starter shingles around the perimeter per manufacturer standards\r\n- Install ice & water shield (weather-lock) on all penetrations and valleys as needed.\r\n- Install, seal and paint all metal flashings, pipes vents to match\r\n- Install new low profile attic vents to match\r\n- Install new Owens Corning Cool Shingles- 25 yr Warranty Color to be selected by customer.\r\n- Install decorative hip/ ridge caps\r\n\r\nNotes\r\n- *1 sq.= 100 square feet\r\n- *Permit fees will be billed separately. Contractor to pull and company to reimburse',
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Cabinet refinishing",
//     image_url:
//       "https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2013/8/28/1/BPF_holiday-house_interior_upgrading_contractor_kitchen_beauty_h.jpg.rend.hgtvcom.616.462.suffix/1405416660510.jpeg",
//     description:
//       "Give your kitchen a stylish update and extend the life of your cabinets by opting for a professional refinishing",
//     scope_of_work_init:
//       "Phase I: Site Preparation\r\n- Protect the floors with covers\r\n- isolate kitchen with plastic sheeting as needed\r\n- Provide structural engineering (if needed)\r\n\r\nPhase II: Remove Existing\r\n- Remove existing cabinet doors\r\n- Clean up and haul away debris.\r\n\r\nPhase III: Refinish Cabinets\r\n- Sand down existing cabinets\r\n- Apply primer on existing cabinets\r\n- Paint or stain existing cabinets\r\n- Fix & adjust rails & sliding as much as possible\r\n- Install new hardware (homeowner provides)\r\n\r\nPhase IX: Finishes\r\n- Install new faucets (homeowner to provide)\r\n- Install new sink (homeowner to provide)\r\n- Install appliances (homeowner will provide)\r\n- Final touchups\r\n- Clean up and haul away debris.\r\n\r\nNotes:\r\n- Approx. 55 linear-ft of cabinets to refinish",
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Repaint (Cool Life)",
//     image_url:
//       "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/painting-the-exterior-of-our-house-with-the-projectcolor-app-hero.jpg",
//     description:
//       "Rejuvenate your home's exterior appeal while simultaneously combatting the heat!",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Mixed landscape & hardscape",
//     image_url:
//       "https://assets-global.website-files.com/63a02e61e7ffb565c30bcfc7/659cd16736c2b44e259d4a68_modern%20landscape%20design.webp",
//     description:
//       "Upgrade your home's exterior features with a beautiful & unique landscape + hardscape design",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Install mini-split",
//     image_url:
//       "https://www.shipleyenergy.com/wp-content/uploads/2023/03/mini-split-remote-air-conditioner-1024x682.jpg",
//     description: "Install an individual wall mounted AC & Heat unit per room",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Replace split unit",
//     image_url:
//       "https://www.hatchyourhome.com/wp-content/uploads/2019/12/attic-air-conditioner-attic-air-conditioning-units-attic-ac-unit-6-photos-for-heating-cooling-attic-ac-unit-price-attic-air-conditioning-attic-air-conditioning-system-cost-min.jpg",
//     description: "Replace an existing central air / split unit system",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Install new-cut",
//     image_url:
//       "https://www.hatchyourhome.com/wp-content/uploads/2019/12/attic-air-conditioner-attic-air-conditioning-units-attic-ac-unit-6-photos-for-heating-cooling-attic-ac-unit-price-attic-air-conditioning-attic-air-conditioning-system-cost-min.jpg",
//     description: "Create a new HVAC system, completely from scratch!",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Landscaping",
//     image_url:
//       "https://miro.medium.com/v2/resize:fit:736/1*G0SHQeORsSRDJIpErgGd6Q.jpeg",
//     description:
//       "Create a unique & beautiful backyard, front-yard, and side-yard designs that will reduce maintenance & monthly expenses!",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Half bathroom remodel",
//     image_url:
//       "https://static.homeguide.com/assets/images/content/homeguide-completely-remodeling-a-small-bathroom-wood-vanity-grey-walls-black-hardware.jpg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Cabinet refacing",
//     image_url:
//       "https://premiercabinetpainting.com/wp-content/uploads/2022/11/cabinet-refacing-vs-painting-940x470.jpeg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "ADU Planning & Blueprints",
//     image_url:
//       "https://www.livehome3d.com/assets/img/articles/design-house/buy-a-ready-house-design-plan.jpg",
//     description:
//       "Set the foundation for your dream expansion by preparing detailed blueprints and plans for your home addition",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Home extension",
//     image_url:
//       "https://static.homeguide.com/assets/images/content/homeguide-sun-room-addition-with-large-windows-and-bright-lighting.jpeg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Deck",
//     image_url:
//       "https://cdn.shopify.com/s/files/1/1125/5528/files/Floating_Deck_Ideas_800px_00000.jpg?v=1705896714",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Full bathroom remodel",
//     image_url:
//       "https://nvkitchenandbath.com/wp-content/uploads/2022/03/bathroom-remodel-1-scaled.jpg",
//     description:
//       "Refresh your daily routine and increase your home's comfort by upgrading your outdated bathroom to a sleek, modern space",
//     scope_of_work_init: `Phase I: Site Preparation\r\n- Protect the floors with covers.\r\n\r\nPhase II: Demo\r\n- Demo existing Bathroom (tub, floors, partition wall).\r\n- Remove existing fixtures (toilet, vanity, mirrors, light fixtures, tp holder, towel rack).\r\n- Break the Walls in the shower area to the stud level.\r\n- Demo the tub framing.\r\n- Clean up and haul away debris.\r\n\r\nPhase III: framing\r\n- Build new framing for a new tub fitting\r\n- Build new recessed shelf in tub area \r\n- Create new fitting for new vanity location\r\n- Create new framing for a recessed medicine cabinets\r\n\r\nPhase IV: Rough Plumbing\r\n- Create new copper plumbing for the tub (valve, faucet, shower head, hand held fixture)\r\n- Adjust plumbing for the shower as needed (shower head height, valve location, faucet)\r\n- Relocate existing tub drainage system if needed\r\n- Create 1 sink location and upgrade water lines for vanity to copper by code\r\n- Upgrade the drain line for vanity by code\r\n- Create ventilation for shower fan\r\n- Update valves for the toilet\r\n- Upgrade toilet ring by code\r\n\r\nPhase V: Rough Electricals\r\n- Install new lights (up to 4; location will be specified by the homeowner)\r\n- Install motion electric fan (with light if desired)\r\n- Create GFCI outlet for the vanity per code\r\n- Update switch to code, 2 way switch for lights and fan\r\n\r\nPhase VI: Waterproofing walls & floors\r\n- Apply tar underlayment on the walls at the tub area by code\r\n- Lath installation: install chicken wire and lath paper on shower walls by code\r\n- Install 1 layer of water barrier - protection underlayment to the studs\r\n- Apply floating cement on the walls\r\n- Seal cement \r\n- Waterproof floor per code \r\n- Prepare bathroom floor and walls for tile installation\r\n- Level the bathroom floors as much as possible and check for leveling\r\n\r\nPhase VII: Tile Installation\r\n- Apply thin set on tub walls \r\n- Install  tiles on the wall (8 ft high, up to the ceiling in tub location) \r\n- Apply spacer on the tiles for an even finish\r\n- Apply grout between the new tiles (homeowner will select the color)\r\n- Apply 1 layer of front sealer on new tiles as needed.\r\n- Install finish metal / edge / bullnose tiles on edges (owner provides)\r\n- Check for leveling all throughout \r\n- Install tile on flooring\r\n- Apply spacers for an even finish\r\n- Apply grout (company will provide, homeowner will choose color)\r\n- Tiles will be uniform installation all throughout the whole walls\r\n\r\nPhase VIII: Drywall & Patch\r\n- Close drywall on open areas \r\n- Patch, prime and paint bathroom walls \r\n- Paint will be by Behr / Dawn Edwards \r\n- Paint sheen to be selected by homeowner\r\n\r\nPhase IX: Finishes\r\n- Install tub (homeowner will provide)\r\n- Install new valve, shower head, faucets for tub (homeowner will provide)\r\n- Install grab bar in shower area (homeowner will provide)\r\n- Install new handheld shower head (homeowner will provide)\r\n- Install vanity with attached countertop and sink, install faucet (homeowner will provide)\r\n- Install toilet (homeowner will provide)\r\n- Install fixtures: motion electric fan (homeowner will provide)\r\n- Install all light fixtures\r\n- Install toilet paper holder, towel rack (homeowner will provide)\r\n- Final touchups\r\n- Clean up and haul away debris.\r\n\r\nNotes\r\n- Follow the design and by code: no relocations \r\n- Plumbing work will be from floor level and up (not including underneath the sub floor)\r\n- Tiles to be 3*6 inches minimum in size (owner provides)\r\n`,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Replace sliders & doors",
//     image_url:
//       "https://bearwindows.com/wp-content/uploads/2020/05/vinyl-french1.jpg",
//     description:
//       "Enhance your home's insulation and reduce noise by upgrading your sliding doors to double-pane glass",
//     scope_of_work_init:
//       "Phase I: Site Preparation\r\n- Accurately measure the size of each door opening.\r\n- Fabricate & provide new energy-efficient double pane doors.\r\n\r\nPhase II: Demo\r\n- Remove existing doors.\r\n- Clean up and haul away debris.\r\n- Prepare the door opening, ensuring it is clean and level.\r\n\r\nPhase III: Installation\r\n- Install new doors according to manufacturer instructions and industry best practices.\r\n- Apply 50 years caulking, all around frame by city code to properly insulate around the door frame and prevent air and water leakage.\r\n- Install trim and finish around the door frame to enhance aesthetics.\r\n\r\nQuality Assurance\r\n- Conduct thorough inspections of each door installation to ensure proper functionality and appearance.\r\n- Test doors for smooth operation, proper sealing, security and no leaks.\r\n- Clean up the work area and remove any debris or construction waste.\r\n\r\nNotes\r\n- Doors will be without grids \r\n- Doors will have self-lock mechanism\r\n- No alteration to existing structure - all doors remain the size\r\n- Provide warranty information for the installed doors.",
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Replace windows",
//     image_url:
//       "https://www.windowwire.com/cdn/shop/products/Window_Wire_0010_BA_W_No_Grids_bb520116-c33c-40f7-b355-c6b54903912a_1200x1200.jpg?v=1588609566",
//     description:
//       "Improve your home's energy efficiency and comfort by upgrading to double-pane windows",
//     scope_of_work_init:
//       "Phase I: Site Preparation\r\n- Accurately measure the size of each window opening.\r\n- Fabricate & provide new energy-efficient double pane windows.\r\n\r\nPhase II: Demo\r\n- Remove existing windows\r\n- Clean up and haul away debris\r\n- Prepare the window opening, ensuring it is clean and level.\r\n\r\nPhase III: Installation\r\n- Install new windows according to manufacturer instructions and industry best practices.\r\n- Apply 50 years caulking, all around frame by city code to properly insulate around the window frame and prevent air and water leakage.\r\n- Install trim and finish around the window frame to enhance aesthetics.\r\n\r\nQuality Assurance\r\n- Conduct thorough inspections of each window installation to ensure proper functionality and appearance.\r\n- Test windows for smooth operation, proper sealing, security and no leaks.\r\n- Clean up the work area and remove any debris or construction waste.\r\n\r\nNotes\r\n- Windows will be without grids \r\n- Windows will have self-lock mechanism\r\n- No alteration to existing structure - all windows remain the size\r\n- Provide warranty information for the installed windows.",
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Add sliders & doors",
//     image_url:
//       "https://bearwindows.com/wp-content/uploads/2020/05/vinyl-french1.jpg",
//     description:
//       "Enhance your home's insulation and reduce noise by adding new double-pane sliding doors",
//     scope_of_work_init:
//       "Phase I: Site Preparation\r\n- Accurately measure the size of each new door opening.\r\n- - Fabricate & provide new energy-efficient double pane windows.\r\n\r\nPhase II: Demo\r\n- Remove existing doors.\r\n- Clean up and haul away debris.\r\n- Prepare the door opening, ensuring it is clean and level.\r\n\r\nPhase III: Installation\r\n- Install new doors according to manufacturer instructions and industry best practices.\r\n- Apply 50 years caulking, all around frame by city code to properly insulate around the door frame and prevent air and water leakage.\r\n- Install trim and finish around the door frame to enhance aesthetics.\r\n\r\nQuality Assurance\r\n- Conduct thorough inspections of each door installation to ensure proper functionality and appearance.\r\n- Test doors for smooth operation, proper sealing, security and no leaks.\r\n- Clean up the work area and remove any debris or construction waste.\r\n\r\nNotes\r\n- Doors will be without grids \r\n- Doors will have self-lock mechanism\r\n- No alteration to existing structure - all doors remain the size\r\n- Provide warranty information for the installed doors.",
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Re-piping",
//     image_url:
//       "https://allasplumbingllc.com/wp-content/uploads/2020/12/shutterstock_29517232-1080x628.jpg",
//     description:
//       "Ensure a reliable and efficient plumbing system by re-piping your home to prevent leaks and improve water flow",
//     scope_of_work_init: null,
//   },
//   {
//     name: "",
//     label: "Demo",
//     image_url:
//       "https://bigeasydemolition.b-cdn.net/wp-content/uploads/2023/01/63b3e2f037283-1.jpg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     name: "",
//     label: "Plumbing upgrade",
//     image_url:
//       "https://danikaplumbing.com/wp-content/uploads/2021/11/blog-featured-img-_0006_professional-plumbing.jpg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Garage conversion",
//     image_url:
//       "https://www.greatbuildz.com/wp-content/uploads/2020/06/Garage-Conversion-Los-Angeles.jpg",
//     description:
//       "Maximize your property's potential and create valuable living space by converting your garage into an ADU",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Room addition",
//     image_url:
//       "https://images.ctfassets.net/79nimht05j33/6lOnGRf7aWzOYtcOC5jKOc/c0cbc1127bf87d5ef4ca6c86a0fe9623/homeadditions.jpg?w=1500&h=1000&fl=progressive&q=70&fm=jpg&bg=transparent",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Fencing & gates",
//     image_url:
//       "https://st.hzcdn.com/simgs/77e1f26a0f124134_4-5327/home-design.jpg",
//     description:
//       "Secure your property and boost its curb appeal by installing a new gate and fence around your home",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Driveway",
//     image_url:
//       "https://www.homeadvisor.com/r/wp-content/uploads/2019/08/house-paver-driveway.jpg",
//     description:
//       "Enhance your home's curb appeal and functionality by upgrading to a new, durable driveway",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Outdoor kitchen",
//     image_url:
//       "https://www.outdoorkitchencreations.net/wp-content/uploads/2022/11/kit-3.jpg",
//     description:
//       "Enhance your outdoor living and entertainment space by adding a functional and stylish outdoor kitchen to your home",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Retaining wall",
//     image_url:
//       "https://i.pinimg.com/564x/ef/16/72/ef16727ca9cf3b93c869ee63ba14697f.jpg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Add windows",
//     image_url:
//       "https://www.windowwire.com/cdn/shop/products/Window_Wire_0010_BA_W_No_Grids_bb520116-c33c-40f7-b355-c6b54903912a_1200x1200.jpg?v=1588609566",
//     description:
//       "Brighten up your living spaces and enhance your home's appeal by adding new windows throughout your house",
//     scope_of_work_init:
//       "Phase I: Site Preparation\r\n- Accurately measure the size of each window opening.\r\n- Fabricate & provide new energy-efficient double pane windows.\r\n\r\nPhase II: Demo\r\n- Remove existing windows\r\n- Clean up and haul away debris\r\n- Prepare the window opening, ensuring it is clean and level.\r\n\r\nPhase III: Installation\r\n- Install new windows according to manufacturer instructions and industry best practices.\r\n- Apply 50 years caulking, all around frame by city code to properly insulate around the window frame and prevent air and water leakage.\r\n- Install trim and finish around the window frame to enhance aesthetics.\r\n\r\nQuality Assurance\r\n- Conduct thorough inspections of each window installation to ensure proper functionality and appearance.\r\n- Test windows for smooth operation, proper sealing, security and no leaks.\r\n- Clean up the work area and remove any debris or construction waste.\r\n\r\nNotes\r\n- Windows will be without grids \r\n- Windows will have self-lock mechanism\r\n- No alteration to existing structure - all windows remain the size\r\n- Provide warranty information for the installed windows.",
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Tear-off",
//     image_url:
//       "https://s42814.pcdn.co/wp-content/uploads/2020/01/Roofing_iStock-934626558.0-1-scaled.jpg.optimal.jpg",
//     description:
//       "Replace waterproofing & asphalt shingles with synthetic underlayment & Cool Roof Shingles",
//     scope_of_work_init:
//       'Phase I: Site Preparation\r\n- Provide dumpster to jobsite\r\n- Cover ground around house, HVAC condensers as needed, fragile items and exposed ceilings in garage with nylon and tarps in order to collect debris from roof in an organized fashion\r\n- Pull city permit (permit related expenses to be billed separately)\r\n\r\nPhase II: Demo\r\n- Demo existing roof finish\r\n- Clean wood deck from all nails and debris and prepare for new roof installation\r\n- Demo existing roof underlayment to decking\r\n- Inspect the wood decking for structural soundness and replace wood to match as necessary.\r\n- Replace up to 15% of damaged plywood\r\n- Clean all debris & haul away\r\n- Pass tear off inspection with local city inspector\r\n\r\nPhase III: Install new roofing material per code\r\n- Prep work area, HVAC condensers as needed, cover with nylon and tarps in order to collect debris from roof in an organized fashion\r\n- Install new synthetic underlayment (UDL30 or equivalent) and fasten down with 1" plastic cap nails per code\r\n- Install new powder coated 2x2/ 2x3 drip edge metal flashings along perimeter (Eaves/gutters and Rakes)\r\n- Install starter shingles around the perimeter per manufacturer standards\r\n- Install ice & water shield (weather-lock) on all penetrations and valleys as needed\r\n- Install, seal and paint all metal flashings, pipes vents to match\r\n- Install new low profile attic vents to match\r\n- Install new Owens Corning Cool Shingles (25 yr Warranty) (Color to be selected by customer)\r\n- Install decorative hip / ridge caps\r\n\r\nAgreement Notes\r\n- 1 BSQ.= 100 square feet\r\n- Contractor is not liable for any broken tiles\r\n- Any dry-rot repair is additional charge- $x/ man hour + material',
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Full kitchen remodel",
//     image_url:
//       "https://buildmethodconstruction.com/wp-content/uploads/2020/09/kitchen-remodeling-glendale-12.jpg",
//     description:
//       "Transform your daily routines and boost your home's value by updating your old kitchen to a modern, functional space",
//     scope_of_work_init:
//       "Phase I: Site Preparation\r\n- Protect the floors with floor covers\r\n- isolate kitchen with plastic sheeting\r\n- Provide structural engineering (if needed)\r\n\r\nPhase II: Demo\r\n- Demo existing wall between kitchen and dining area\r\n- Remove existing appliances (fridge, oven, hood, microwave, sink etc)\r\n- Clean up and haul away debris.\r\n\r\nPhase III: Framing & Footings\r\n- Create new framing to compensate for the wall removal\r\n- Follow engineering plan: create header and posts to support the opening\r\n- Excavate a hole in the ground 3*3*3 for concrete pads\r\n- Install rebars\r\n- Pour 2,500 psi certified cement\r\n- Attach Simpson plate and A35 brackets to support the framing members\r\n- Create a header beam as per engineering plan\r\n\r\nPhase IV: Rough Plumbing\r\n- Disconnect all relevant appliances and place away from work area\r\n- Create new fittings for the appliances\r\n\r\nPhase V: Rough Electricals\r\n- Install new lights (up to 4; location will be specified by the homeowner)\r\n- Create GFCI outlet for the kitchen as needed by code\r\n- Update switch to code, 2 way switch for lights\r\n\r\nPhase VI: Waterproofing\r\n- Apply waterproof drywall on the walls at the sink area and fridge by code as needed\r\n- Install lath: chicken wire and lath paper in kitchen area by code\r\n- Install 1 layer of water barrier - protection underlayment to the studs\r\n\r\nPhase V: Drywall & Patch\r\n- Install new drywall on all the framing in the kitchen area and on exposed walls\r\n- Patch all drywall, match walls and ceiling texture as much as possible\r\n- Prime all kitchen ceiling and walls\r\n- Paint ceiling and walls (sheen to be selected by homeowner)\r\n- Final paint touch ups\r\n\r\nPhase VI: Tile & Backsplash\r\n- Apply thin set on walls for backsplash\r\n- Install backsplash tiles on the wall as per design (appx. 50 sqft; homeowner will provide tiles)\r\n- Apply spacer between the tiles for an even finish\r\n- Apply grout between the new tiles (homeowner will select the color)\r\n- Apply 1 layer of front sealer on the new tiles if needed.\r\n- Install finish metal /edge / bullnose tiles on edges (homeowner provides)\r\n- Check for leveling all throughout \r\n- Apply front sealer if needed\r\n\r\nPhase VII: Refinish Cabinets\r\n- Sand down existing cabinets\r\n- Apply primer on existing cabinets\r\n- Paint or stain existing cabinets\r\n- Fix & adjust rails & sliding as much as possible\r\n- Install new hardware (homeowner provides)\r\n\r\nPhase VIII: Countertops\r\n- Install and fabricate new quartz slab from contractor’s edition (60 lnft) on kitchen cabinets\r\n- Caulk and seal gaps as needed\r\n- Final touchups\r\n\r\nPhase IX: Finishes\r\n- Install new faucets (homeowner to provide)\r\n- Install new sink (homeowner to provide)\r\n- Install appliances (homeowner will provide)\r\n- Final touchups\r\n- Clean up and haul away debris.\r\n\r\nNotes:\r\n- Approx. 55 linear-ft of cabinets to refinish\r\n- Paint manufacturer either Behr or Dawn Edwards\r\n- Tiles shall be 3*6 inches minimum in size\r\n- Staggered tile installation requested",
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Repaint (Water Paint)",
//     image_url:
//       "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/painting-the-exterior-of-our-house-with-the-projectcolor-app-hero.jpg",
//     description:
//       "Refresh your home's curb appeal and protect it from the elements by updating the exterior with a fresh coat of paint",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Replace condenser",
//     image_url:
//       "https://www.townsendtotalenergy.com/wp-content/uploads/2023/06/air-conditioner-condenser-unit-depicting-outside-ac-unit-stopped-working.jpg",
//     description:
//       "Replace only the A/C components (evaporative coil + condenser)",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Install attic fan",
//     image_url:
//       "https://mobileimages.lowes.com/productimages/05add23a-85d0-4475-b8ab-b68f68bb3576/12025028.jpg",
//     description:
//       "Improve your home's ventilation and energy efficiency by installing an attic fan to keep your space cooler and more comfortable",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Insulation replacement",
//     image_url: "https://i.ytimg.com/vi/1i_2Bk3j3q0/maxresdefault.jpg",
//     description:
//       'Replace existing attic insulation with new R30 (10") insulation per code',
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Hardscaping",
//     image_url:
//       "https://cfrouting.zoeysite.com/cdn-cgi/image/format=auto,fit=scale-down,quality=70/https://s3.amazonaws.com/zcom-media/sites/a0iE000000Hu85dIAB/media/catalog/product/u/s/uspaverscape-royal-castlescape-pavers-a.jpg",
//     description:
//       "Create a unique & beautiful backyard, front-yard, and side-yard designs that will reduce maintenance & monthly expenses!",
//     scope_of_work_init: null,
//   },
//   {
//     name: "",
//     label: "Foundation",
//     image_url:
//       "https://www.residentialresq.com/wp-content/uploads/2020/03/Foundation-Repair-Photo.jpg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     name: "",
//     label: "Framing",
//     image_url:
//       "https://res.cloudinary.com/liaison-inc/image/upload/f_auto/q_auto,w_1200/v1682781522/content/homeguide/homeguide-new-residential-construction-house-framing.jpg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Crawl space insulation installation",
//     image_url:
//       "https://cdn-gkfcl.nitrocdn.com/kiadCdAfswOKpACNMBDhwOlPAosZwYAr/assets/images/optimized/rev-c934f6c/noosapest.com/wp-content/uploads/2022/11/crawl-space-encapsulation-professional.jpg",
//     description:
//       "Add insulation to the cavities of your raised-foundation home",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Bath addition",
//     image_url:
//       "https://boyerbuilding.com/wp-content/uploads/2023/11/231120_16716_0211.jpg",
//     description: null,
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Second story addition",
//     image_url:
//       "https://sweeten.com/wp-content/uploads/2019/10/LA-ExteriorHome-2.jpg",
//     description:
//       "Expand your living space and enhance your home's value by adding a second story to accommodate your growing needs",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Install battery",
//     image_url:
//       "https://solaroptimum.com/wp-content/uploads/2022/01/SO_enphase_horiz_4-1.jpeg",
//     description: "Install a backup or grid-tied battery",
//     scope_of_work_init: null,
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Install panels",
//     image_url:
//       "https://t4.ftcdn.net/jpg/05/19/44/59/360_F_519445978_PEPYf1rgopUdcN31HobzIVv8RAaoqNRE.jpg",
//     description: "Install a new solar system",
//     scope_of_work_init:
//       "Phase I: Site Preparation\r\n- Conduct a comprehensive site inspection to determine the optimal layout for the solar system.\r\n- Develop detailed engineering plans for the proposed solar installation, ensuring compliance with all municipal requirements.\r\n- Design architectural layouts that meet the specific criteria set by the city.\r\n- Pull all necessary city permit(s)\r\n\r\nPhase II: Installation\r\n- Install the mounting brackets securely to support the solar panels.\r\n- Set up an approximately 8kW solar system, consisting of 20 Q-Cell PV modules, each rated at 400 watts.\r\n- Install 20 MicroInverters to convert the generated DC power to AC power.\r\n- Install risers where necessary to achieve the required tilt for optimal solar exposure.\r\n- Waterproof and seal all installations to prevent any potential leaks.\r\n- Clean up all debris from the installation site and ensure proper disposal.\r\n\r\nPhase III: Interconnection\r\n- Schedule and facilitate the city inspection to verify the installation meets all regulatory standards.\r\n- Arrange for the utility company to inspect the system to ensure it is ready for grid connection.\r\n- Activate and configure the solar system for operation.\r\n- Provide monitoring of the solar system’s energy generation for a period of six months to ensure optimal performance.",
//   },
//   {
//     upgrade_id: "",
//     name: "",
//     label: "Reset tile",
//     image_url:
//       "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/11/featured-tile-roof.jpeg.jpg",
//     description:
//       "Remove tiles, replace waterproofing with synthetic underlayment, reinstall original tiles",
//     scope_of_work_init:
//       "Phase I: Site Preparation\r\n- Cover ground around house, HVAC condensers as needed, fragile items and exposed ceilings in garage with nylon and tarps in order to collect debris from roof in an organized fashion\r\n- Pull city permit on homeowner's behalf\r\n\r\nPhase II: Demo\r\n- Remove existing tiles from roof and store away (tiles to be reinstalled)\r\n- Clean wood deck from all nails and debris and prepare for new roof installation.\r\n- Demo existing roof underlayment to decking\r\n- Inspect the wood decking for structural soundness and replace wood to match as necessary.\r\n- Replace up to 15% of damaged plywood.\r\n- Clean all debris & haul away\r\n- Pass tear off inspection with local city inspector\r\n\r\nPhase III: Install new roofing material per code\r\n- Prep work area, HVAC condensers as needed, cover with nylon and tarps in order to collect debris from roof in an organized fashion\r\n- Install new synthetic underlayment - UDL30 or equivalent and fasten down with 1\" plastic cap nails per code\r\n- Install new powder coated 2x2/ 2x3 drip edge metal flashings along perimeter (Eaves/gutters and Rakes)- Color TBD\r\n- Install ice & water shield (weather-lock) on all penetrations and valleys as needed.\r\n- Install, seal and paint all metal flashings, pipes vents to match\r\n- Install new low profile attic vents to match\r\n- Re-install original roof tiles\r\n- Install decorative hip / ridge caps as needed\r\n- Clean up and haul away all debris\r\n\r\nNotes\r\n- *1 sq.= 100 square feet\r\n- *Contractor is not liable for any broken tiles\r\n- *Permit fees will be billed separately. Contractor to pull and company to reimburse",
//   },
// ];

// let newSolutions = [];

// for (let i = 0; i < solutions.length; i++) {
//   solutions[i].name = solutions[i].label
//     .toLowerCase()
//     .replaceAll(" ", "-")
//     .replaceAll("&", "and");

//   newSolutions.push(solutions[i]);
// }

// console.log(newSolutions);

// fs.writeFileSync(`./src/data/newSolutions.json`, JSON.stringify(newSolutions));

const time = Date.now();
const date = new Date("2024-12-14");
const dateTime = date.getTime();
const dateDif = date.getTime() - Date.now();
const dateDifToMinutes = dateDif / (1000 * 60);
const json = null;
const parsed = JSON.stringify(null);

console.log({
  time,
  date,
  dateTime,
  dateDif,
  dateDifToMinutes,
  parsed,
});
