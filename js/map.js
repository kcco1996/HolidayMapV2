// js/map.js
const withV = window.withV || ((u) => u);

// ----------------------------------------------------------------------------
// 1) Destination data
// ----------------------------------------------------------------------------

// If window.destinations exists, use it. Otherwise use the hardcoded array.
const destinations = Array.isArray(window.destinations) && window.destinations.length
  ? window.destinations
  : [

    // North America
           {
        name: "Seattle",
        lat: 47.60772453397215,  lng: -122.33571831316796,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Vancouver",
        lat: 49.28239845936347, lng: -123.1201280732361,    
        destination: "assets/black-dot.png",  
         note: "-",
        region: "north-america"
      },
           {
        name: "Banff",
        lat: 51.17832458370294, lng: -115.5707963532298,    
        destination: "assets/black-dot.png",  
         note: "-",
        region: "north-america"
      },
           {
        name: "Detroit",
        lat: 42.329879544353226, lng: -83.0409047870654,    
        destination: "assets/black-dot.png",  
         note: "-",
        region: "north-america"
      },
         {
        name: "Toronto",
        lat:  43.652627129818654, lng: -79.38432555629761,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Ottawa",
        lat: 45.41997247826557, lng: -75.70000171763027,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Montreal",
        lat: 45.503463342454616, lng: -73.56769621488876,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Quebec City",
        lat: 46.812554109739246, lng: -71.2081315885433,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
        {
        name: "New York City",
        lat: 40.71209411855515, lng: -74.00500529400429,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Philadelphia",
        lat: 39.95362138471616, lng: -75.15725298609271,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Boston",
        lat: 42.355756353550504, lng: -71.05980501991988,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Washington DC",
        lat: 38.90950627319311, lng: -77.0378603298129,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Charlotte",
        lat: 35.22068845703077, lng: -80.84207585899921,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Kentucky Bourbon Trail",
        lat: 36.96615901727974, lng: -86.18277184438787,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Chicago",
        lat: 41.88268842658458, lng: -87.62751922198979,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Indianapolis",
        lat: 39.7689786349564, lng: -86.15311289232605,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
        {
        name: "Cleveland",
        lat: 41.50273521152955, lng: -81.68986031536389,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Kansas City",
        lat: 39.10034294911827, lng: -94.5833309693297,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Denver",
        lat: 39.7403722248545, lng: -104.97767259664374,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Moab",
        lat: 38.57327876611761, lng: -109.55074386985126,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Yellowstone National Park",
        lat: 44.611411823368435, lng: -110.514530780498,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Miami",
        lat: 25.76323961340018, lng: -80.1922635683231,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Savannah",
        lat: 32.080776482381886, lng: -81.09070428371469,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Charleston",
        lat: 32.783630768755735, lng: -79.93041210581677,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
            {
        name: "Atlanta",
        lat: 33.74980983050412, lng: -84.3877520670381,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
            {
        name: "New Orleans",
        lat: 29.950974551233713, lng: -90.07527395509003,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
            {
        name: "Memphis",
        lat: 35.14814012845415, lng: -90.0504868932041,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
            {
        name: "Nashville",
        lat: 36.162542545391226, lng: -86.7822524630937,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
            {
        name: "Huntsville",
        lat: 34.73015580981167, lng: -86.58397780143977,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Houston",
        lat: 29.76656834960227, lng: -95.36236094159233,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Austin",
        lat: 30.271106994370317, lng: -97.73504184817182,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Santa Fe",
        lat: 35.68959519613997, lng:  -105.93721216032161,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Route 66",
        lat: 35.19212083604028, lng: -114.04847373827002,     
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
       {
        name: "Phoenix",
        lat: 33.44518313947133, lng: -112.07786658699041,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
       {
        name: "Sedona",
        lat: 34.86371195123784, lng: -111.81438583102138,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
       {
        name: "Grand Canyon",
        lat: 36.100802410513744, lng: -112.11205548994302,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
       {
        name: "Las Vegas",
        lat: 36.17149945007827, lng: -115.13872482571836,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
        {
        name: "Los Angeles",
        lat: 34.05465650605094, lng: -118.2561380681273,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
        {
        name: "San Francisco",
        lat: 37.77784484651388, lng: -122.41282705873314,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Guadalajara",
        lat: 20.677010987331542, lng: -103.34752670709736,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Mexico City",
        lat: 19.432544560239055, lng: -99.13096556640932,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Oaxaca",
        lat: 17.07278435125949, lng: -96.72634456484178,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Merida",
        lat: 20.967716148485437, lng: -89.59273287275839,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Havana",
        lat: 23.13459246458203, lng: -82.35791906899723,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Vinales",
        lat: 22.618811297850826, lng: -83.70665053329138,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Kingston",
        lat: 18.0183056544133,  lng: -76.8089772023489,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
           {
        name: "Ocho Rios",
        lat: 18.4073695583668,  lng: -77.10310726492314,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Negril",
        lat: 18.278913566295927, lng:  -78.34370756164991,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "Montego Bay",
        lat: 18.471831669696066, lng: -77.92041525946033,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },
         {
        name: "San Jose",
        lat:  9.928248163622198, lng: -84.09028388072183,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "north-america"
      },

      // South America
         {
        name: "Bogota",
        lat: 4.711093897883025, lng: -74.0714359026008,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Medellin",
        lat: 6.247629211964346, lng: -75.56438625894688,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Quito",
        lat: -0.2232819603237502, lng: -78.5136979263753,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Santiago",
        lat: -33.45130231352738, lng: -70.6766724657009,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Lima",
        lat: -12.045936019259404, lng:  -77.04475828442126, 
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Cusco",
        lat: -13.531907393993903, lng: -71.96733800414252,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
             {
        name: "Sucre",
        lat: -19.035251140767482, lng: -65.26030793967227,   
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
             {
        name: "La Paz",
        lat: -16.494290618939463, lng: -68.12111919909478,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Rio de Janeiro",
        lat: -22.9070198031695, lng: -43.17328824523965,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Sao Paulo",
        lat: -23.555503217315778, lng: -46.63535076679225,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Salvador",
        lat: -12.977855380518672, lng: -38.50186684249251,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Manaus",
        lat: -3.119432526904342, lng: -60.022290304328386,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Buenos Aires",
        lat: -34.60096265053558, lng: -58.38427623057528,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },
         {
        name: "Patagonia",
        lat: -50.33429494633946, lng: -72.16542956843975,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "south-america"
      },

      // Europe
           {
        name: "Reykjavik",
        lat: 64.14709405288546, lng: -21.94067790838177, 
        destination: "assets/black-dot.png",  
        note: "-",
        region: "europe"
      },
         {
        name: "Copenhagen",
        lat: 55.676854151467786, lng: 12.580432292830622, 
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Stockholm",
        lat: 59.33187532601879, lng: 18.064524018132875,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Oslo",
        lat: 59.91386946136484, lng: 10.752263050710615,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Tallinn",
        lat: 59.43696134448128, lng: 24.75359472967316,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Helsinki",
        lat: 60.169886209818955, lng: 24.938506956243987,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Rovaniemi",
        lat: 66.50399462506353, lng: 25.727375199411455,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Riga",
        lat: 56.9678169002369, lng: 24.10550715762453,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Vilnius",
        lat: 54.68727825033513, lng: 25.278964588963454,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Warsaw",
        lat: 52.229837385379945, lng: 21.013155400849673, 
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Krakow",
        lat: 50.06471010338415,  lng: 19.94501598212411,  
        destination: "assets/poland-flag.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Berlin",
        lat: 52.52015230261851,  lng: 13.40472495464267,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Dresden",
        lat: 51.050420008439275,  lng: 13.737185466428961,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Nuremburg",
        lat: 49.454344532422105,  lng: 11.074653808733487,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Munich",
        lat: 48.13515007527161,  lng: 11.582113298663685,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Cologne",
        lat: 50.93760687245601,  lng: 6.960286447380035,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "The Romantic Road",
        lat: 49.359239026082584,  lng: 10.146048324458654,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "The Black Forest",
        lat: 47.99931012062807,  lng: 7.843104291358877,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Stuttgart",
        lat: 48.77586339862911,  lng: 9.183066700353741,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Amsterdam",
        lat: 52.36769210020186,  lng: 4.90342956807473,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "The Hague",
        lat: 52.0705306104099,  lng: 4.300647577134074,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Brussels",
        lat: 50.847811707920954,  lng: 4.356641749053609,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Bruges",
        lat: 51.20842016126747,  lng: 3.225031505055912,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Ypres",
        lat: 50.85774375829256,  lng: 2.8715042484899715,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Kent",
        lat: 51.38798592149252,  lng: 0.5068152865021401,  
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
          {
        name: "London",
        lat: 51.50737420589367,  lng: -0.1274675391548623,  
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
           {
        name: "Cambridge",
        lat: 52.195405725848715,  lng: 0.13118782657581468,   
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
           {
        name: "York",
        lat: 53.96143607420014,  lng: -1.073896473243887,   
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
           {
        name: "Birmingham",
        lat: 52.482522920211096,  lng: -1.8871140472229588,   
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Cornwall",
        lat: 50.26318556354491,  lng: -5.051119976967521,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Cotswolds",
        lat: 51.79066737441077,  lng: -1.959030249663092,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
            {
        name: "Liverpool",
        lat: 53.3995552129288,  lng: -2.9919151290257204,   
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },

           {
        name: "Manchester",
        lat: 53.4807874264068,  lng: -2.242631762475635,    
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },

         {
        name: "Newcastle upon Tyne",
        lat: 54.97816889476448,  lng: -1.6192130711390966,    
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Norwich",
        lat: 52.62852569309048,  lng: 1.2920834867214679,   
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      }, 
          {
        name: "Sheffield",
        lat: 53.38118101891275,  lng: -1.4707796216441675,    
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      }, 
      {
        name: "Bath",
        lat: 51.38201048972575,  lng: -2.3598822371271715,   
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Nottingham",
        lat: 52.95433379037081,  lng: -1.1540116456294196,    
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Stratford upon Avon",
        lat: 52.19385188517134,  lng: -1.716165905373178,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Blackpool",
        lat: 53.81660271714891,  lng: -3.0366370473438615,    
        destination: "assets/england-flag.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Cardiff",
        lat: 51.48371637493049,  lng: -3.1680982278663974,     
        destination: "assets/wales-flag.png",
        note: "-",
        region: "europe"
      },
            {
        name: "Glasgow",
        lat: 55.86164769698071,  lng: -4.25806153603916,     
        destination: "assets/scotland-flag.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Edinburgh",
        lat: 55.95325883585607,  lng: -3.188374500397275,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Scottish Highlands",
        lat: 57.27071118684419,  lng: -4.491824424257684,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Mayo",
        lat: 53.944509443188004,  lng: -8.950306440377075,   
        destination: "assets/ireland-flag.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Galway",
        lat: 53.27400852952436,  lng: -9.051249879576808,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Dublin",
        lat: 53.35035230667644,   lng: -6.261570654846846,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Clare",
        lat:  53.01617120231845,  lng: -9.376488034917385,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Kerry",
        lat: 52.140880544924244,  lng: -10.266980672936224,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Cork",
        lat: 51.898777412116885,  lng: -8.475462716333837,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
            {
        name: "Normandy",
        lat: 49.02639381371219,   lng: -0.3697326266154875,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
            {
        name: "Loire Valley",
        lat: 47.386772141359685,  lng: 0.6890031823450209,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
            {
        name: "Champagne",
        lat: 49.25839361472694, lng: 4.031575031000748,    
        destination: "assets/black-dot.png",  
        note: "-",
        region: "europe"
      },
            {
        name: "Paris",
        lat: 48.85754857065964,  lng: 2.351095450719635,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Bordeaux",
        lat: 44.8415303873766,  lng:  -0.5813877132162164,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Lyon",
        lat:  45.764531696190446,  lng: 4.835179746610237,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Provence",
        lat: 43.53224241465617,  lng: 5.447647729782521,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "French Riviera",
        lat: 43.490900611084136,  lng: 6.793765877236518,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Zurich",
        lat: 47.37720188312213,  lng: 8.540854776359472,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Bern",
        lat: 46.947906876886854,  lng:  7.449008433944463,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Lausanne",
        lat: 46.51988531765292,  lng:  6.63178833810393,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Geneva",
        lat: 46.20459779299723,  lng: 6.1434692385512,
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Innsbruck",
        lat: 47.26773065798142,  lng: 11.391160498755447,     
        destination: "assets/black-dot.png",    
        note: "-",
        region: "europe"
      },
      {
        name: "Salzburg",
        lat: 47.80146559489588,  lng: 13.04496781804285,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Vienna",
        lat: 48.20820087607286,  lng: 16.372051489142063,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Hallstatt",
        lat: 47.56132162182419, lng: 13.647363161751343,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Budapest",
        lat: 47.49670043112757,  lng: 19.036921385094285,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Prague",
        lat: 50.07529559169478,  lng: 14.43796598469235,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Cesky Krumlov",
        lat: 48.81278385152057,  lng: 14.317374361641804,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Karlovy Vary",
        lat: 50.23193160462951,  lng: 12.87159277886476,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Bratislava",
        lat: 48.14771028366622,  lng: 17.108819044864113,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Ljubljana",
        lat: 46.05694787715469,  lng: 14.505271244549682,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Sarajevo",
        lat: 43.85626674115869,  lng: 18.41308798019437,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Mostar",
        lat: 43.34378183454105,  lng: 17.80773036265623,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Zagreb",
        lat: 45.81506100906844,  lng: 15.98182332859979,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Split",
        lat: 43.51470354492875,  lng: 16.443583819893906,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Dubrovnik",
        lat: 42.650679244840276,  lng: 18.094383893378385,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Bucharest",
        lat: 44.42651877964872, lng: 26.108711286865084, 
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Transylvania",
        lat: 45.65305831498248, lng: 25.736030432352848, 
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Belgrade",
        lat: 44.81473845896609,  lng: 20.45953718262759,
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Lviv",
        lat: 49.84240270117403, lng: 24.029742732639285,
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Kyiv",
        lat: 50.446102816627544,  lng: 30.522381936032804,
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Odesa",
        lat: 46.48680823524833,  lng: 30.73031732215606,
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Rome",
        lat: 41.89768815086756, lng: 12.476936055158559,
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Bologna",
        lat: 44.49496560820093, lng: 11.340267944322584,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Tuscany",
        lat: 43.772361190082286, lng: 11.239249355989253,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
    {
        name: "Naples",
        lat: 40.84894725749906, lng: 14.272991819770132,  
        destination: "assets/italy-flag.png",
        note: "City break base for Amalfi/Pompeii.",
        region: "europe"
      },
      {
        name: "Milan",
        lat: 45.468509121636934, lng: 9.182456487176053,  
        destination: "assets/black-dot.png",
        note: "Fashion & lakes gateway.",
        region: "europe"
      },
        {
        name: "Lake Como",
        lat: 46.010461636720414, lng: 9.258370422860988,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Cinque Terre",
        lat: 44.14693730452264, lng: 9.646125336631743,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Amalfi Coast",
        lat: 40.63666057445816, lng: 14.60243262282775,   
        destination: "assets/italy-flag.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Venice",
        lat: 45.44080421549296, lng: 12.317325210367073,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Athens",
        lat: 37.985824191533005, lng: 23.728725630749693,  
        destination: "assets/black-dot.png",  
        note: "-",
        region: "europe"
      },
          {
        name: "Mykonos",
        lat: 37.4458201103513,  lng: 25.326357225868886,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Santorini",
        lat: 36.416619151961775, lng: 25.432321334668732,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Rhodes",
        lat: 36.43713002447467,  lng: 28.218355279699313,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
            {
        name: "Tenerife",
        lat: 28.29327826635113, lng: -16.629586689107516,    
        destination: "assets/spain-flag.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Seville",
        lat: 37.38886748702286, lng: -5.985099678517259,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Toledo",
        lat: 39.8636917531435, lng: -4.029775145026025,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Madrid",
        lat: 40.415448974473684, lng: -3.701855273322984,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Barcelona",
        lat: 41.38825990594541, lng: 2.1638757607500914,
        destination: "assets/black-dot.png",
        note: "Beach + architecture.",
        region: "europe"
      },
         {
        name: "San Sebastian",
        lat: 43.31804706519294, lng: -1.980072603131987,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Valencia",
        lat: 39.4748365711434, lng: -0.37112701705047646,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Granada",
        lat: 37.18244889952489, lng: -3.6024299116716727,
        destination: "assets/black-dot.png",  
        note: "-",
        region: "europe"
      },
      {
        name: "Lisbon",
        lat: 38.723048843144994, lng: -9.140853723871166,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Porto",
        lat: 41.1583050409901, lng: -8.630365712766778,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
         {
        name: "Sintra",
        lat: 38.802329690843884, lng: -9.38164860384695,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
        {
        name: "Algarve",
        lat: 37.0167014704076,  lng: -7.9354679155059715,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
          {
        name: "Madeira",
        lat: 32.65106517114215, lng: -16.89610598550119,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Istanbul",
        lat: 41.008831294064244, lng: 28.984703163215887,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Cappadocia",
        lat: 38.6485294471911, lng: 34.850133350771664,  
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
      {
        name: "Sofia",
        lat: 42.699102152920766, lng: 23.322386765910494,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Saint Petersburg",
        lat: 59.934427728738875, lng: 30.347911942320994,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Moscow",
        lat: 55.75980497991659, lng: 37.613489679534126,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Kazan",
        lat: 55.79158767130585, lng: 49.125752153475034,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Nizhniy Novgorod",
        lat: 56.33863023023021, lng: 44.02407394794639,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Vladivostok",
        lat: 43.10766291186338, lng: 131.75664496518553,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Novosibirsk",
        lat: 54.9914425497611, lng: 82.87034985503675,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Samara",
        lat: 53.22063967045973, lng: 50.30563600562854,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },
       {
        name: "Yekaterinburg",
        lat: 56.844668410686566, lng: 60.649363398142995,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "europe"
      },

      // Africa

           {
        name: "Tangier",
        lat: 35.76519622921863, lng: -5.83103937197697,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
           {
        name: "Fez",
        lat: 34.02125274081572, lng: -5.0062043083969066,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
           {
        name: "Marrakesh",
        lat: 31.625240650856576, lng: -7.98622668742172,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
          {
        name: "Rabat",
        lat: 34.00887253019932, lng: -6.853794004072933,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
         {
        name: "Nairobi",
        lat: -1.2927133735799872, lng: 36.82294667348338,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
       {
        name: "Serengeti",
        lat: -1.9315360415877365, lng: 34.713923669409745,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },

       {
        name: "Zanzibar",
        lat: -6.165611978690259, lng: 39.205606782775384,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
       {
        name: "Addis Ababa",
        lat: 9.021420718978447, lng: 38.75764725727833,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
       {
        name: "Johannesburg",
        lat: -26.205817768123712, lng: 28.033246357057312,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
       {
        name: "Cape Town",
        lat: -33.9222519945119, lng: 18.426083283090602,   
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
      {
        name: "Cairo",
        lat: 30.04685244060589, lng: 31.236490953674103,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },
      {
        name: "Luxor",
        lat: 25.687385576610335, lng: 32.6397970280669,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "africa"
      },  

// Asia 

{
        name: "Tel Aviv",
        lat: 32.08428882890555,  lng: 34.78059411990009,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },

      {
        name: "Jerusalem",
        lat: 31.776548431123597, lng: 35.22375920797924,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
         {
        name: "Nazareth",
        lat: 32.69962007778769, lng: 35.30378994793834,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
         {
        name: "Bethlehem",
        lat: 31.70546805465603, lng: 35.202443641312925,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Doha",
        lat: 25.292374400028212, lng: 51.53674347744931,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Dubai",
        lat: 25.207730855832907, lng: 55.271777216689955,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Abu Dhabi",
        lat: 24.45884264645748, lng: 54.37884316312715,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Amman",
        lat: 31.963869136227153, lng: 35.91315978587027,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Petra",
        lat: 30.324071582180242, lng: 35.480108064581735,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Wadi Rum",
        lat: 29.572965142387975, lng: 35.421470700401095,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
      {
        name: "Muscat",
        lat: 23.58998938943278, lng: 58.3841813900166,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
      {
        name: "Kuwait City",
        lat: 29.378502985332236, lng: 47.974887416666895,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Riyadh",
        lat: 24.715895294828403, lng: 46.67566322133952,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Jeddah",
        lat: 21.53156143617193, lng: 39.16117332713833,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Beijing",
        lat: 39.904708948207066, lng: 116.40629378666631,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Xian",
        lat: 34.26753153354574, lng: 108.95453479024569,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Pyongyang",
        lat: 39.03976450173026, lng: 125.76275374068145,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Hong Kong",
        lat:  22.32159648361065, lng: 114.1727908314567,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Shenzhen",
        lat: 22.542565658160562, lng: 114.06266507893243,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Guilin",
        lat: 25.271175781713136, lng: 110.30209035294487,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Chengdu",
        lat: 30.572395054678324, lng: 104.0674766603587,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Shanghai",
        lat: 31.231548282892074, lng: 121.47375440409512,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Hangzhou",
        lat: 30.273474823912203, lng: 120.15454624495673,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
        {
        name: "Suzhou",
        lat: 31.298654766475444, lng: 120.58309739339623,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
        {
        name: "Yangshuo",
        lat: 24.77720779069028, lng: 110.49528760296474,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Ulaanbaatar",
        lat: 47.922340586775356, lng: 106.91623272436372,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Hanoi",
        lat: 21.02729979127629, lng: 105.83355947408955,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Ha Long Bay",
        lat: 20.971364767234384, lng:  107.04472913915995,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Hue",
        lat: 16.463400248681836, lng: 107.59028389695361,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Hoi An",
        lat: 15.880126911948263, lng: 108.3260499283607,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Vientiane",
        lat: 17.98009849914131, lng: 102.62848284748861,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Luang Prabang",
        lat: 19.88343247553513, lng: 102.13861060749099,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Yangon",
        lat: 16.84962869947336, lng: 96.17915465792554,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Mandalay",
        lat: 21.96076870912247, lng: 96.09017333791078,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Bagan",
        lat: 21.171783223328887, lng: 94.85861193643267,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Manila",
        lat: 14.599518801255039, lng: 120.9853587783262,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Boracay",
        lat: 11.967544811082488, lng: 121.924502332347,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Palawan",
        lat: 9.44180340554734, lng: 118.39350352286588,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Phnom Penh",
        lat: 11.557457618823975, lng: 104.9284773437748,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
         {
        name: "Sihanoukville",
        lat: 10.658582426769515,  lng: 103.26745258802944,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
         {
        name: "Siem Reap",
        lat: 13.363402361705312, lng: 103.85664038143845,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Bangkok",
        lat: 13.757196289320774, lng: 100.50180904895753,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Chiang Mai",
        lat: 18.789041587241105, lng: 98.98688984278627,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Phuket",
        lat: 7.985784278175289, lng: 98.33112686382262,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Jakarta",
        lat: -6.187357070671649, lng: 106.85413102385716,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Yogyakarta",
        lat: -7.801414654548781, lng: 110.36580328892495,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Borneo",
        lat: -0.25078218449481476, lng: 114.21965753241345,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Bali",
        lat: -8.40778769353757,  lng: 115.18413395274675,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Kuala Lumpur",
        lat: 3.149925859843929, lng: 101.69283219800404,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Singapore",
        lat: 1.2809496197123105, lng: 103.85011777392548,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Taipei",
        lat: 25.034374188812905, lng: 121.56692858749368,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Seoul",
        lat: 37.55395545384301, lng: 126.9936361370215,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Gyeongju",
        lat: 35.82195665684188, lng: 129.2650109125429,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Busan",
        lat: 35.164763969341344, lng: 129.05181443860144,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Delhi",
        lat: 28.68555588857057, lng: 77.22848852846143,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
           {
        name: "Agra",
        lat: 27.177560663830192, lng: 78.00784831692503,      
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Jaipur",
        lat: 26.914579627509745, lng: 75.79295806709231,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Jodhpur",
        lat: 26.24262492174262, lng: 73.02951022538846,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Mumbai",
        lat: 18.959501056711073, lng: 72.83288671970709,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Varanasi",
        lat: 25.318894877020533, lng: 82.9730837377627,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Chennai",
        lat: 13.085513669421807, lng: 80.27047989785116,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
         {
        name: "Udaipur",
        lat: 24.585578952802333, lng: 73.71250040486585,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Colombo",
        lat: 6.925926707030244, lng: 79.86204116414342,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Kathmandu",
        lat: 27.71229766152192, lng: 85.32235549565038,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Tokyo",
        lat: 35.68167621444384, lng: 139.7694776560827,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Nagoya",
        lat: 35.181748602682376, lng: 136.9072767815572,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Sapporo",
        lat: 43.06294133982934, lng: 141.35432679202515,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Kanazawa",
        lat: 36.581808011899284, lng: 136.56526033926303,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Hiroshima",
        lat: 34.39953198434529, lng: 132.45103637973926,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Osaka",
        lat: 34.695470570371114, lng: 135.50171588088833,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Nara",
        lat: 34.70280310803936, lng: 135.82606246414989,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Kyoto",
        lat: 35.01239320606751, lng: 135.76739059848708,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },
       {
        name: "Okayama",
        lat: 34.65820269705041, lng: 133.91912330122736,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "asia"
      },

// Oceania 

 {
        name: "Melbourne",
        lat: -37.804115012656496, lng: 144.95009983596563,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },
       {
        name: "Brisbane",
        lat: -27.471493931577516, lng: 153.01409227438853,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },
       {
        name: "Sydney",
        lat:  -33.87234939702612, lng: 151.20637468765491,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },
       {
        name: "Canberra",
        lat: -35.27830446247856, lng: 149.13083083876302,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },
       {
        name: "Tasmania",
        lat: -41.88770097039727, lng: 146.46066215547248,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },
       {
        name: "Auckland",
        lat: -36.8504369916508, lng: 174.7592070221226,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },
       {
        name: "Rotorua",
        lat:  -38.144253336442446, lng: 176.23598615409264,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },
       {
        name: "Queenstown",
        lat: -45.03020847165292, lng: 168.6612610095522,     
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },
       {
        name: "Bora Bora",
        lat:  -16.50599688653384, lng: -151.74218231492173,    
        destination: "assets/black-dot.png",
        note: "-",
        region: "oceania"
      },

    ];
function storageKey(name) {
  return `tripPlan:${name}`;
}

// --------------------------
// Food diary defaults
// --------------------------
const EMPTY_FOOD_DAY = {
  breakfast: { dish:"", description:"", hot:"", hotDescription:"", cold:"", coldDescription:"" },
  lunch:     { dish:"", description:"", hot:"", hotDescription:"", cold:"", coldDescription:"" },
  dinner:    { starter:"", starterDescription:"", main:"", mainDescription:"", dessert:"", dessertDescription:"", alcoholic:"", alcoholDescription:"", cold:"", coldDescription:"" }
};
function cloneFoodDay() {
  return JSON.parse(JSON.stringify(EMPTY_FOOD_DAY));
}

// --------------------------
// Load / save plans
// --------------------------
function loadPlan(name) {
  const raw = localStorage.getItem(storageKey(name));
  const base = {
    days: 1,
    activities: { 1: "" },
    notes: "",
    tips: "",
    hotel: { name:"", currency:"GBP", nightly:"", nights: 1, notes:"" },
    budget: {
      cheap:  { name:"", currency:"GBP", price:"", nights:"", notes:"" },
      luxury: { name:"", currency:"GBP", price:"", nights:"", notes:"" }
    },
    food: {}
  };

  let plan;
  try { plan = raw ? JSON.parse(raw) : base; } catch { plan = base; }

  if (!plan.activities) plan.activities = { 1: "" };
  if (typeof plan.days !== "number" || plan.days < 1) plan.days = 1;
  if (typeof plan.notes !== "string") plan.notes = "";
  if (typeof plan.tips !== "string") plan.tips = "";

  if (!plan.hotel) {
    plan.hotel = { name:"", currency:"GBP", nightly:"", nights: Math.max(1, (plan.days|0)-1 || 1), notes:"" };
  } else {
    if (!("name" in plan.hotel)) plan.hotel.name = "";
    if (!("currency" in plan.hotel)) plan.hotel.currency = "GBP";
    if (!("nightly" in plan.hotel)) plan.hotel.nightly = "";
    if (!("nights" in plan.hotel)) plan.hotel.nights = Math.max(1, (plan.days|0)-1 || 1);
    if (!("notes" in plan.hotel)) plan.hotel.notes = "";
  }

  // normalize budget container
  if (!plan.budget) {
    plan.budget = {
      cheap:  { name:"", currency: plan.hotel.currency || "GBP", price:"", nights:"", notes:"" },
      luxury: { name:"", currency: plan.hotel.currency || "GBP", price:"", nights:"", notes:"" }
    };
  } else {
    if (!plan.budget.cheap) plan.budget.cheap = { name:"", currency: plan.hotel.currency || "GBP", price:"", nights:"", notes:"" };
    if (!plan.budget.luxury) plan.budget.luxury = { name:"", currency: plan.hotel.currency || "GBP", price:"", nights:"", notes:"" };
  }

  // old single-day migration support (optional)
  if (plan.foodDiary && !plan.food) {
    plan.food = { 1: cloneFoodDay() };
    delete plan.foodDiary;
  }

  if (!plan.food || typeof plan.food !== "object" || Array.isArray(plan.food)) plan.food = {};
  for (let i = 1; i <= plan.days; i++) {
    if (!plan.food[i] || typeof plan.food[i] !== "object") {
      plan.food[i] = cloneFoodDay();
      continue;
    }
    plan.food[i].breakfast = { ...cloneFoodDay().breakfast, ...(plan.food[i].breakfast || {}) };
    plan.food[i].lunch     = { ...cloneFoodDay().lunch, ...(plan.food[i].lunch || {}) };
    plan.food[i].dinner    = { ...cloneFoodDay().dinner, ...(plan.food[i].dinner || {}) };
  }

  return plan;
}

function deepClean(obj) {
  if (obj === null || obj === undefined) return undefined;
  if (typeof obj === "string") {
    const trimmed = obj.trim();
    return trimmed === "" ? undefined : trimmed;
  }
  if (Array.isArray(obj)) {
    const arr = obj.map(deepClean).filter(v => v !== undefined);
    return arr.length ? arr : undefined;
  }
  if (typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const cleaned = deepClean(v);
      if (cleaned !== undefined) out[k] = cleaned;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return obj;
}

function prunePlanForStorage(plan) {
  const copy = JSON.parse(JSON.stringify(plan));

  if (!copy.activities) copy.activities = { 1: "" };
  if (!copy.hotel) copy.hotel = { name:"", currency:"GBP", nightly:"", nights:1, notes:"" };
  if (!copy.budget) copy.budget = { cheap:{}, luxury:{} };
  if (!copy.food) copy.food = {};

  const cleaned = deepClean(copy) || {};

  if (!cleaned.days) cleaned.days = plan.days || 1;
  if (!cleaned.activities) cleaned.activities = plan.activities || { 1: "" };
  if (!cleaned.hotel) cleaned.hotel = plan.hotel || { name:"", currency:"GBP", nightly:"", nights:1, notes:"" };
  if (!cleaned.budget) cleaned.budget = plan.budget || { cheap:{}, luxury:{} };
  if (!cleaned.food) cleaned.food = plan.food || {};

  return cleaned;
}

// --------------------------
// Firebase-safe sync (your same approach)
// --------------------------
const pendingUploads = new Map();
const lastUploadedHash = new Map();

function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i)) * 16777619;
  return String(h >>> 0);
}

function scheduleFirestoreUpload(destName, planObj) {
  const auth = window.firebaseAuth;
  const db = window.firebaseDB;
  const user = auth?.currentUser;
  if (!user || !db) return;

  const json = JSON.stringify(planObj);
  const h = hashString(json);
  if (lastUploadedHash.get(destName) === h) return;

  if (json.length > 900_000) {
    console.warn(`⚠️ Skipping Firestore upload for "${destName}" (plan too large).`);
    return;
  }

  if (pendingUploads.has(destName)) clearTimeout(pendingUploads.get(destName));
  pendingUploads.set(destName, setTimeout(async () => {
    try {
      const ref = window.doc(db, "users", user.uid, "plans", destName);
      const payload = { name: destName, data: planObj, updatedAt: planObj.updatedAt || Date.now() };
      await window.setDoc(ref, payload, { merge: true });
      lastUploadedHash.set(destName, h);
    } catch (err) {
      console.warn("Firestore upload failed:", destName, err);
    }
  }, 1200));
}

async function hydratePlanFromFirebaseIfSignedIn(destName) {
  const auth = window.firebaseAuth;
  const db = window.firebaseDB;
  const user = auth?.currentUser;
  if (!user || !db) return;

  try {
    const ref = window.doc(db, "users", user.uid, "plans", destName);
    const snap = await window.getDoc(ref);
    if (!snap.exists()) return;

    const remoteDoc = snap.data() || {};
    const remotePlan = remoteDoc.data;
    const remoteUpdatedAt = remoteDoc.updatedAt || 0;
    if (!remotePlan) return;

    const localRaw = localStorage.getItem(storageKey(destName));
    let localPlan = null;
    try { localPlan = localRaw ? JSON.parse(localRaw) : null; } catch {}

    const localUpdatedAt = localPlan?.updatedAt || 0;

    if (!localPlan || remoteUpdatedAt > localUpdatedAt) {
      const merged = { ...remotePlan, updatedAt: remoteUpdatedAt };
      localStorage.setItem(storageKey(destName), JSON.stringify(merged));
      lastUploadedHash.set(destName, hashString(JSON.stringify(merged)));
      console.log(`✅ Hydrated "${destName}" from Firebase (remote newer)`);
    }
  } catch (err) {
    console.warn("Hydrate failed:", destName, err);
  }
}

// --------------------------
// Save plan (local + firebase debounce)
// --------------------------
function savePlan(name, data) {
  data.updatedAt = Date.now();
  const pruned = prunePlanForStorage(data);
  localStorage.setItem(storageKey(name), JSON.stringify(pruned));
  scheduleFirestoreUpload(name, pruned);
}

function showSaved(toastEl) {
  if (!toastEl) return;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 1200);
}

// --------------------------
// Icons
// --------------------------
function destinationIcon(url) {
  const src = window.withV ? window.withV(url) : url;
  return L.divIcon({
    html: `<img src="${src}" alt="">`,
    className: "destination-icon",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -12]
  });
}

// --------------------------
// POPUP HTML (your design, fixed template strings)
// --------------------------
function buildPopup(d) {
  const plan = loadPlan(d.name);
  const days = Math.max(1, Number(plan.days || 1));
  const nightsDefault = Math.max(1, Number(plan.hotel?.nights ?? Math.max(1, days - 1)));

  const dayOptions = Array.from({ length: days }, (_, i) =>
    `<option value="${i + 1}">Day ${i + 1}</option>`
  ).join("");

  const currencies = ["GBP","EUR","USD","CAD","AUD","NZD","JPY","CNY"];
  const currencyOptions = currencies.map(c =>
    `<option value="${c}" ${plan.hotel.currency === c ? "selected" : ""}>${c}</option>`
  ).join("");

  const iconHtml = d.destination ? `<img src="${(window.withV ? window.withV(d.destination) : d.destination)}" alt="${d.name} icon" />` : "";

  return `
    <div class="popup" data-dest="${encodeURIComponent(d.name)}">
      <div class="header">
        ${iconHtml}
        <div class="title">
          <h3 style="margin:0 0 4px;">${d.name}</h3>
          ${d.note ? `<p style="margin:0 0 4px;">${d.note}</p>` : ""}
          <p style="margin:6px 0 0;">
            <a href="https://maps.google.com/?q=${d.lat},${d.lng}" target="_blank" rel="noopener">Open in Google Maps</a>
          </p>
        </div>
      </div>

      <div class="tabs">
        <button class="tab-btn active" data-tab="tab-days">Days</button>
        <button class="tab-btn" data-tab="tab-daily">Daily Plan</button>
        <button class="tab-btn" data-tab="tab-stay">Stay & Budget</button>
        <button class="tab-btn" data-tab="tab-food">Food</button>
        <button class="tab-btn" data-tab="tab-notes">Notes</button>
        <button class="tab-btn" data-tab="tab-tips">Tips</button>
        <span class="saved-toast" aria-live="polite">Saved</span>
      </div>

      <div id="tab-days" class="tab-panel active">
        <div class="row">
          <label for="days-input">Number of days:</label>
          <input id="days-input" type="number" min="1" step="1" value="${days}">
          <button class="btn primary" id="apply-days">Apply</button>
        </div>
        <p class="hint">Set how long you’ll stay. This also influences default nights for hotel total (editable).</p>
      </div>

      <div id="tab-daily" class="tab-panel">
        <div class="day-nav">
          <button class="btn ghost" id="prev-day" title="Previous day">&#9664;</button>
          <label for="day-select" style="min-width:auto;">Go to:</label>
          <select id="day-select">${dayOptions}</select>
          <button class="btn ghost" id="next-day" title="Next day">&#9654;</button>
        </div>
        <textarea id="day-activities" class="textarea" placeholder="Activities for this day (times, places, tickets, restaurants, notes)..."></textarea>
        <div class="save-bar">
          <button class="btn primary" id="save-day">Save Day</button>
          <button class="btn" id="clear-day">Clear Day</button>
        </div>
      </div>

      <div id="tab-stay" class="tab-panel">
        <div class="tabs budget-subtabs">
          <button class="tab-btn" data-btab="tab-cheap">Cheap option</button>
          <button class="tab-btn active" data-btab="tab-medium">Medium option (main hotel)</button>
          <button class="tab-btn" data-btab="tab-luxury">Luxury option</button>
        </div>

        <div id="tab-medium" class="tab-panel active">
          <h4>Main Hotel</h4>
          <div class="row">
            <label for="hotel-name">Hotel name (optional):</label>
            <input id="hotel-name" type="text" value="${(plan.hotel.name||"").replace(/"/g,'&quot;')}" placeholder="e.g., Hotel Central">
          </div>
          <div class="row">
            <label for="currency">Currency:</label>
            <select id="currency">${currencyOptions}</select>
          </div>
          <div class="row">
            <label for="nightly">Avg price per night:</label>
            <input id="nightly" type="number" min="0" step="1" value="${plan.hotel.nightly||""}">
          </div>
          <div class="row">
            <label for="nights">Nights:</label>
            <input id="nights" type="number" min="1" step="1" value="${nightsDefault}">
          </div>
          <div class="row">
            <label>Total (auto):</label>
            <div id="hotel-total" aria-live="polite" style="font-weight:600;">—</div>
          </div>
          <textarea id="hotel-notes" class="textarea" placeholder="Notes (optional)"></textarea>
          <div class="save-bar">
            <button class="btn primary" id="save-hotel">Save Stay</button>
            <button class="btn" id="clear-hotel">Clear</button>
          </div>
        </div>

        <div id="tab-cheap" class="tab-panel">
          <h4>Cheap option</h4>
          <div class="row"><label>Name:</label><input id="cheap-name" type="text"></div>
          <div class="row"><label>Currency:</label><select id="cheap-currency">${currencyOptions}</select></div>
          <div class="row"><label>Price per night:</label><input id="cheap-price" type="number" min="0" step="1"></div>
          <div class="row"><label>Nights:</label><input id="cheap-nights" type="number" min="1" step="1"></div>
          <div class="row"><label>Total:</label><div id="cheap-total" style="font-weight:600;">—</div></div>
          <textarea id="cheap-notes" class="textarea" placeholder="Notes (optional)"></textarea>
        </div>

        <div id="tab-luxury" class="tab-panel">
          <h4>Luxury option</h4>
          <div class="row"><label>Name:</label><input id="luxury-name" type="text"></div>
          <div class="row"><label>Currency:</label><select id="luxury-currency">${currencyOptions}</select></div>
          <div class="row"><label>Price per night:</label><input id="luxury-price" type="number" min="0" step="1"></div>
          <div class="row"><label>Nights:</label><input id="luxury-nights" type="number" min="1" step="1"></div>
          <div class="row"><label>Total:</label><div id="luxury-total" style="font-weight:600;">—</div></div>
          <textarea id="luxury-notes" class="textarea" placeholder="Notes (optional)"></textarea>
        </div>

        <div class="save-bar">
          <button class="btn primary" id="save-budget">Save Hotel Options</button>
        </div>
      </div>

      <div id="tab-food" class="tab-panel">
        <div class="day-nav">
          <label for="food-day-select">Day:</label>
          <select id="food-day-select"></select>
        </div>

        <div class="tabs food-subtabs">
          <button class="tab-btn active" data-subtab="tab-breakfast">Breakfast</button>
          <button class="tab-btn" data-subtab="tab-lunch">Lunch</button>
          <button class="tab-btn" data-subtab="tab-dinner">Dinner</button>
        </div>

        <div id="tab-breakfast" class="tab-panel active">
          <div class="row"><label>Dish:</label><input id="breakfast-dish" type="text"><input id="breakfast-dish-desc" type="text" placeholder="Description"></div>
          <div class="row"><label>Hot drink:</label><input id="breakfast-hot" type="text"><input id="breakfast-hot-desc" type="text" placeholder="Description"></div>
          <div class="row"><label>Cold drink:</label><input id="breakfast-cold" type="text"><input id="breakfast-cold-desc" type="text" placeholder="Description"></div>
        </div>

        <div id="tab-lunch" class="tab-panel">
          <div class="row"><label>Dish:</label><input id="lunch-dish" type="text"><input id="lunch-dish-desc" type="text" placeholder="Description"></div>
          <div class="row"><label>Hot drink:</label><input id="lunch-hot" type="text"><input id="lunch-hot-desc" type="text" placeholder="Description"></div>
          <div class="row"><label>Cold drink:</label><input id="lunch-cold" type="text"><input id="lunch-cold-desc" type="text" placeholder="Description"></div>
        </div>

        <div id="tab-dinner" class="tab-panel">
          <div class="row"><label>Starter:</label><input id="dinner-starter" type="text"><input id="dinner-starter-desc" type="text" placeholder="Description"></div>
          <div class="row"><label>Main course:</label><input id="dinner-main" type="text"><input id="dinner-main-desc" type="text" placeholder="Description"></div>
          <div class="row"><label>Dessert:</label><input id="dinner-dessert" type="text"><input id="dinner-dessert-desc" type="text" placeholder="Description"></div>
          <div class="row"><label>Alcoholic drink:</label><input id="dinner-alcohol" type="text"><input id="dinner-alcohol-desc" type="text" placeholder="Description"></div>
          <div class="row"><label>Cold drink:</label><input id="dinner-cold" type="text"><input id="dinner-cold-desc" type="text" placeholder="Description"></div>
        </div>

        <div class="save-bar">
          <button class="btn primary" id="save-food">Save Food Diary</button>
          <button class="btn" id="clear-food">Clear</button>
        </div>

        <p class="hint">Food diary is saved per destination and includes breakfast, lunch, and dinner entries per day.</p>
      </div>

      <div id="tab-notes" class="tab-panel">
        <textarea id="notes-text" class="textarea" placeholder="Anything else to remember (tickets, packing, misc)"></textarea>
        <div class="save-bar">
          <button class="btn primary" id="save-notes">Save Notes</button>
          <button class="btn" id="clear-notes">Clear</button>
        </div>
      </div>

      <div id="tab-tips" class="tab-panel">
        <textarea id="tips-text" class="textarea" placeholder="Write any travel tips, local secrets, or reminders here..."></textarea>
        <div class="save-bar">
          <button class="btn primary" id="save-tips">Save Tips</button>
          <button class="btn" id="clear-tips">Clear</button>
        </div>
      </div>
    </div>
  `;
}

// --------------------------
// Popup handlers (your logic, corrected)
// --------------------------
function initPopupHandlers(container, d) {
  const name = d.name;
  const toast = container.querySelector(".saved-toast");
  const plan = loadPlan(name);

  // Main tabs
  const mainTabBtns = container.querySelectorAll('.tab-btn[data-tab]');
  mainTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      mainTabBtns.forEach(b => b.classList.remove("active"));
      container.querySelectorAll(':scope > .tab-panel').forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const panel = container.querySelector("#" + btn.dataset.tab);
      if (panel) panel.classList.add("active");
    });
  });

  // DAYS
  const daysInput = container.querySelector("#days-input");
  const applyDaysBtn = container.querySelector("#apply-days");

  const rebuildDaySelector = () => {
    const newDays = Math.max(1, Number(daysInput?.value || 1));

    // activities
    for (let i = 1; i <= newDays; i++) {
      if (!(i in plan.activities)) plan.activities[i] = "";
    }
    Object.keys(plan.activities).map(k => +k).filter(k => k > newDays).forEach(k => delete plan.activities[k]);

    // day-select
    const daySelect = container.querySelector("#day-select");
    if (daySelect) {
      daySelect.innerHTML = Array.from({ length: newDays }, (_, i) => `<option value="${i + 1}">Day ${i + 1}</option>`).join("");
      if (!daySelect.value) daySelect.value = "1";
    }

    // food-day-select
    const foodDaySelect = container.querySelector("#food-day-select");
    if (foodDaySelect) {
      foodDaySelect.innerHTML = Array.from({ length: newDays }, (_, i) => `<option value="${i + 1}">Day ${i + 1}</option>`).join("");
      if (!foodDaySelect.value) foodDaySelect.value = "1";
    }

    // nights default tweak
    const nightsEl = container.querySelector("#nights");
    if (nightsEl && (!plan.hotel.nights || plan.hotel.nights === Math.max(1, plan.days - 1))) {
      nightsEl.value = String(Math.max(1, newDays - 1));
    }
  };

  applyDaysBtn?.addEventListener("click", () => {
    plan.days = Math.max(1, Number(daysInput?.value || 1));
    if (!plan.food || typeof plan.food !== "object") plan.food = {};
    for (let i = 1; i <= plan.days; i++) if (!plan.food[i]) plan.food[i] = cloneFoodDay();
    rebuildDaySelector();
    savePlan(name, plan);
    showSaved(toast);
  });

  // DAILY PLAN
  const daySelect = container.querySelector("#day-select");
  const prevBtn = container.querySelector("#prev-day");
  const nextBtn = container.querySelector("#next-day");
  const dayArea = container.querySelector("#day-activities");

  const loadDayText = () => {
    const day = Number(daySelect?.value || 1);
    dayArea.value = plan.activities[day] ?? "";
  };
  const saveDayText = () => {
    const day = Number(daySelect?.value || 1);
    plan.activities[day] = dayArea.value;
    savePlan(name, plan);
    showSaved(toast);
  };

  if (daySelect) {
    daySelect.addEventListener("change", () => {
      saveDayText();
      loadDayText();
    });
    prevBtn?.addEventListener("click", () => {
      const v = Number(daySelect.value || 1);
      if (v > 1) {
        saveDayText();
        daySelect.value = String(v - 1);
        loadDayText();
      }
    });
    nextBtn?.addEventListener("click", () => {
      const v = Number(daySelect.value || 1);
      const max = Math.max(1, Number(daysInput?.value || plan.days || 1));
      if (v < max) {
        saveDayText();
        daySelect.value = String(v + 1);
        loadDayText();
      }
    });
  }

  container.querySelector("#save-day")?.addEventListener("click", saveDayText);
  container.querySelector("#clear-day")?.addEventListener("click", () => {
    dayArea.value = "";
    saveDayText();
  });

  // STAY & BUDGET
  const hotelName = container.querySelector("#hotel-name");
  const currency = container.querySelector("#currency");
  const nightly = container.querySelector("#nightly");
  const nights = container.querySelector("#nights");
  const total = container.querySelector("#hotel-total");
  const hotelNotes = container.querySelector("#hotel-notes");

  // seed hotel fields
  if (hotelNotes) hotelNotes.value = plan.hotel.notes || "";
  if (hotelName) hotelName.value = plan.hotel.name || "";
  if (currency) currency.value = plan.hotel.currency || "GBP";
  if (nightly) nightly.value = plan.hotel.nightly || "";
  if (nights) nights.value = String(plan.hotel.nights || Math.max(1, (plan.days|0)-1 || 1));

  const renderTotal = () => {
    const n = Number(nightly?.value || 0);
    const k = Math.max(1, Number(nights?.value || 1));
    const curr = currency?.value || "GBP";
    total.textContent = (n > 0 && k > 0) ? `${curr} ${(n * k).toLocaleString(undefined, { maximumFractionDigits: 0 })}` : "—";
  };

  nightly?.addEventListener("input", renderTotal);
  nights?.addEventListener("input", renderTotal);
  currency?.addEventListener("change", renderTotal);
  renderTotal();

  const saveHotel = () => {
    plan.hotel.name = hotelName?.value || "";
    plan.hotel.currency = currency?.value || "GBP";
    plan.hotel.nightly = nightly?.value || "";
    plan.hotel.nights = Math.max(1, Number(nights?.value || 1));
    plan.hotel.notes = hotelNotes?.value || "";
    savePlan(name, plan);
    showSaved(toast);
  };

  container.querySelector("#save-hotel")?.addEventListener("click", saveHotel);
  container.querySelector("#clear-hotel")?.addEventListener("click", () => {
    if (hotelName) hotelName.value = "";
    if (currency) currency.value = "GBP";
    if (nightly) nightly.value = "";
    if (nights) nights.value = String(Math.max(1, (plan.days|0)-1 || 1));
    if (hotelNotes) hotelNotes.value = "";
    saveHotel();
    renderTotal();
  });

  // Budget subtabs
  const bButtons = container.querySelectorAll(".budget-subtabs .tab-btn");
  const bPanels = {
    "tab-cheap": container.querySelector("#tab-cheap"),
    "tab-medium": container.querySelector("#tab-medium"),
    "tab-luxury": container.querySelector("#tab-luxury")
  };
  bButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      bButtons.forEach(b => b.classList.remove("active"));
      Object.values(bPanels).forEach(p => p && p.classList.remove("active"));
      btn.classList.add("active");
      const panel = bPanels[btn.dataset.btab];
      if (panel) panel.classList.add("active");
    });
  });

  const cheap = plan.budget.cheap;
  const luxury = plan.budget.luxury;

  const cheapName = container.querySelector("#cheap-name");
  const cheapCurrency = container.querySelector("#cheap-currency");
  const cheapPrice = container.querySelector("#cheap-price");
  const cheapNights = container.querySelector("#cheap-nights");
  const cheapNotes = container.querySelector("#cheap-notes");

  const luxuryName = container.querySelector("#luxury-name");
  const luxuryCurrency = container.querySelector("#luxury-currency");
  const luxuryPrice = container.querySelector("#luxury-price");
  const luxuryNights = container.querySelector("#luxury-nights");
  const luxuryNotes = container.querySelector("#luxury-notes");

  // seed cheap/luxury
  if (cheapName) cheapName.value = cheap.name || "";
  if (cheapCurrency) cheapCurrency.value = cheap.currency || (plan.hotel.currency || "GBP");
  if (cheapPrice) cheapPrice.value = cheap.price || "";
  if (cheapNights) cheapNights.value = cheap.nights || String(plan.hotel.nights || Math.max(1,(plan.days|0)-1||1));
  if (cheapNotes) cheapNotes.value = cheap.notes || "";

  if (luxuryName) luxuryName.value = luxury.name || "";
  if (luxuryCurrency) luxuryCurrency.value = luxury.currency || (plan.hotel.currency || "GBP");
  if (luxuryPrice) luxuryPrice.value = luxury.price || "";
  if (luxuryNights) luxuryNights.value = luxury.nights || String(plan.hotel.nights || Math.max(1,(plan.days|0)-1||1));
  if (luxuryNotes) luxuryNotes.value = luxury.notes || "";

  function wireOptionTotal(prefix, totalId) {
    const priceEl = container.querySelector(`#${prefix}-price`);
    const nightsEl = container.querySelector(`#${prefix}-nights`);
    const totalEl = container.querySelector(`#${totalId}`);
    const currEl = container.querySelector(`#${prefix}-currency`);

    const render = () => {
      const price = Number(priceEl?.value || 0);
      const n = Math.max(1, Number(nightsEl?.value || 1));
      const curr = currEl?.value || "GBP";
      totalEl.textContent = (price > 0 && n > 0) ? `${curr} ${(price * n).toLocaleString(undefined, { maximumFractionDigits: 0 })}` : "—";
    };

    priceEl?.addEventListener("input", render);
    nightsEl?.addEventListener("input", render);
    currEl?.addEventListener("change", render);
    render();
  }
  wireOptionTotal("cheap", "cheap-total");
  wireOptionTotal("luxury", "luxury-total");

  container.querySelector("#save-budget")?.addEventListener("click", () => {
    plan.budget.cheap = {
      name: cheapName?.value || "",
      currency: cheapCurrency?.value || (plan.hotel.currency || "GBP"),
      price: cheapPrice?.value || "",
      nights: cheapNights?.value || "",
      notes: cheapNotes?.value || ""
    };
    plan.budget.luxury = {
      name: luxuryName?.value || "",
      currency: luxuryCurrency?.value || (plan.hotel.currency || "GBP"),
      price: luxuryPrice?.value || "",
      nights: luxuryNights?.value || "",
      notes: luxuryNotes?.value || ""
    };
    savePlan(name, plan);
    showSaved(toast);
  });

  // FOOD TAB
  const foodDaySelect = container.querySelector("#food-day-select");
  const saveFoodBtn = container.querySelector("#save-food");
  const clearFoodBtn = container.querySelector("#clear-food");

  if (foodDaySelect) {
    foodDaySelect.innerHTML = Array.from({ length: plan.days }, (_, i) => `<option value="${i + 1}">Day ${i + 1}</option>`).join("");
    foodDaySelect.value = "1";
  }

  function ensureFoodDay(day) {
    if (!plan.food[day] || typeof plan.food[day] !== "object") plan.food[day] = cloneFoodDay();
    plan.food[day].breakfast = { ...cloneFoodDay().breakfast, ...(plan.food[day].breakfast || {}) };
    plan.food[day].lunch     = { ...cloneFoodDay().lunch, ...(plan.food[day].lunch || {}) };
    plan.food[day].dinner    = { ...cloneFoodDay().dinner, ...(plan.food[day].dinner || {}) };
  }

  const setVal = (sel, v) => {
    const el = container.querySelector(sel);
    if (el) el.value = v || "";
  };
  const getVal = (sel) => (container.querySelector(sel)?.value ?? "");

  function loadFoodForDay(day) {
    ensureFoodDay(day);
    const f = plan.food[day];

    setVal("#breakfast-dish", f.breakfast.dish);
    setVal("#breakfast-dish-desc", f.breakfast.description);
    setVal("#breakfast-hot", f.breakfast.hot);
    setVal("#breakfast-hot-desc", f.breakfast.hotDescription);
    setVal("#breakfast-cold", f.breakfast.cold);
    setVal("#breakfast-cold-desc", f.breakfast.coldDescription);

    setVal("#lunch-dish", f.lunch.dish);
    setVal("#lunch-dish-desc", f.lunch.description);
    setVal("#lunch-hot", f.lunch.hot);
    setVal("#lunch-hot-desc", f.lunch.hotDescription);
    setVal("#lunch-cold", f.lunch.cold);
    setVal("#lunch-cold-desc", f.lunch.coldDescription);

    setVal("#dinner-starter", f.dinner.starter);
    setVal("#dinner-starter-desc", f.dinner.starterDescription);
    setVal("#dinner-main", f.dinner.main);
    setVal("#dinner-main-desc", f.dinner.mainDescription);
    setVal("#dinner-dessert", f.dinner.dessert);
    setVal("#dinner-dessert-desc", f.dinner.dessertDescription);
    setVal("#dinner-alcohol", f.dinner.alcoholic);
    setVal("#dinner-alcohol-desc", f.dinner.alcoholDescription);
    setVal("#dinner-cold", f.dinner.cold);
    setVal("#dinner-cold-desc", f.dinner.coldDescription);
  }

  function saveFoodForDay(day) {
    ensureFoodDay(day);
    plan.food[day] = {
      breakfast: {
        dish: getVal("#breakfast-dish"),
        description: getVal("#breakfast-dish-desc"),
        hot: getVal("#breakfast-hot"),
        hotDescription: getVal("#breakfast-hot-desc"),
        cold: getVal("#breakfast-cold"),
        coldDescription: getVal("#breakfast-cold-desc")
      },
      lunch: {
        dish: getVal("#lunch-dish"),
        description: getVal("#lunch-dish-desc"),
        hot: getVal("#lunch-hot"),
        hotDescription: getVal("#lunch-hot-desc"),
        cold: getVal("#lunch-cold"),
        coldDescription: getVal("#lunch-cold-desc")
      },
      dinner: {
        starter: getVal("#dinner-starter"),
        starterDescription: getVal("#dinner-starter-desc"),
        main: getVal("#dinner-main"),
        mainDescription: getVal("#dinner-main-desc"),
        dessert: getVal("#dinner-dessert"),
        dessertDescription: getVal("#dinner-dessert-desc"),
        alcoholic: getVal("#dinner-alcohol"),
        alcoholDescription: getVal("#dinner-alcohol-desc"),
        cold: getVal("#dinner-cold"),
        coldDescription: getVal("#dinner-cold-desc")
      }
    };
  }

  let currentFoodDay = Number(foodDaySelect?.value || 1);
  loadFoodForDay(currentFoodDay);

  foodDaySelect?.addEventListener("change", () => {
    saveFoodForDay(currentFoodDay);
    savePlan(name, plan);
    currentFoodDay = Number(foodDaySelect.value || 1);
    loadFoodForDay(currentFoodDay);
    showSaved(toast);
  });

  saveFoodBtn?.addEventListener("click", () => {
    saveFoodForDay(currentFoodDay);
    savePlan(name, plan);
    showSaved(toast);
  });

  clearFoodBtn?.addEventListener("click", () => {
    [
      "#breakfast-dish","#breakfast-dish-desc","#breakfast-hot","#breakfast-hot-desc","#breakfast-cold","#breakfast-cold-desc",
      "#lunch-dish","#lunch-dish-desc","#lunch-hot","#lunch-hot-desc","#lunch-cold","#lunch-cold-desc",
      "#dinner-starter","#dinner-starter-desc","#dinner-main","#dinner-main-desc","#dinner-dessert","#dinner-dessert-desc",
      "#dinner-alcohol","#dinner-alcohol-desc","#dinner-cold","#dinner-cold-desc"
    ].forEach(sel => setVal(sel, ""));
    plan.food[currentFoodDay] = cloneFoodDay();
    savePlan(name, plan);
    showSaved(toast);
  });

  // Food subtabs
  const subButtons = container.querySelectorAll(".food-subtabs .tab-btn");
  const subPanels = ["tab-breakfast", "tab-lunch", "tab-dinner"].map(id => container.querySelector("#" + id));

  function activateSubtab(id) {
    subButtons.forEach(b => b.classList.remove("active"));
    subPanels.forEach(p => p && p.classList.remove("active"));
    container.querySelector(`.food-subtabs .tab-btn[data-subtab="${id}"]`)?.classList.add("active");
    container.querySelector("#" + id)?.classList.add("active");
  }
  subButtons.forEach(btn => btn.addEventListener("click", () => activateSubtab(btn.dataset.subtab)));

  // Notes
  const notesArea = container.querySelector("#notes-text");
  if (notesArea) notesArea.value = plan.notes || "";
  container.querySelector("#save-notes")?.addEventListener("click", () => {
    plan.notes = notesArea?.value || "";
    savePlan(name, plan);
    showSaved(toast);
  });
  container.querySelector("#clear-notes")?.addEventListener("click", () => {
    if (notesArea) notesArea.value = "";
    plan.notes = "";
    savePlan(name, plan);
    showSaved(toast);
  });

  // Tips
  const tipsArea = container.querySelector("#tips-text");
  if (tipsArea) tipsArea.value = plan.tips || "";
  container.querySelector("#save-tips")?.addEventListener("click", () => {
    plan.tips = tipsArea?.value || "";
    savePlan(name, plan);
    showSaved(toast);
  });
  container.querySelector("#clear-tips")?.addEventListener("click", () => {
    if (tipsArea) tipsArea.value = "";
    plan.tips = "";
    savePlan(name, plan);
    showSaved(toast);
  });

  // Init daily selector
  if (daySelect) {
    daySelect.value = "1";
    loadDayText();
  }
}

// --------------------------
// Map setup + Voyager background (your “before”)
// --------------------------
const map = L.map("map").setView([48.5, 8], 5);
const cartoAttr = "&copy; OpenStreetMap contributors, &copy; CARTO";
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
  maxZoom: 20,
  subdomains: "abcd",
  attribution: cartoAttr
}).addTo(map);

// --------------------------
// Render map + popup hydration
// --------------------------
let allMarkers = [];
let allLayerGroup;

function renderMap() {
  if (allLayerGroup) map.removeLayer(allLayerGroup);
  allLayerGroup = L.featureGroup().addTo(map);
  allMarkers = [];

  for (const d of destinations) {
    const icon = d.destination ? destinationIcon(d.destination) : undefined;
    const marker = L.marker([d.lat, d.lng], icon ? { icon } : undefined);
    marker.destinationData = d;

    marker.bindPopup(buildPopup(d), { maxWidth: 600 });

    marker.on("popupopen", async () => {
      await hydratePlanFromFirebaseIfSignedIn(d.name);
      marker.setPopupContent(buildPopup(d));

      requestAnimationFrame(() => {
        const el = marker.getPopup()?.getElement();
        const container = el?.querySelector(".popup");
        if (container) initPopupHandlers(container, d);
      });
    });

    allLayerGroup.addLayer(marker);
    allMarkers.push(marker);
  }

  if (allLayerGroup.getLayers().length > 0) {
    const bounds = allLayerGroup.getBounds();
    if (bounds.isValid()) map.fitBounds(bounds.pad(0.2));
  }
}

window.renderMap = renderMap;

// Hydrate all once
async function hydrateAllPlansOnce() {
  for (const d of destinations) {
    await hydratePlanFromFirebaseIfSignedIn(d.name);
  }
}
window.hydrateAllPlansOnce = hydrateAllPlansOnce;

// --------------------------
// Search/filter + migrate button
// --------------------------
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const regionFilter = document.getElementById("region-filter");
  const resetBtn = document.getElementById("reset-view");
  const migrateBtn = document.getElementById("migrate-btn");

  function filterMap() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const region = regionFilter?.value || "all";

    allMarkers.forEach(marker => {
      const d = marker.destinationData;
      const nameMatch = d.name.toLowerCase().includes(query);
      const regionMatch = (region === "all") || d.region === region;

      if (nameMatch && regionMatch) marker.addTo(allLayerGroup);
      else allLayerGroup.removeLayer(marker);
    });

    if (allLayerGroup.getLayers().length > 0) {
      map.fitBounds(allLayerGroup.getBounds().pad(0.2));
    }
  }

  searchInput?.addEventListener("input", filterMap);
  regionFilter?.addEventListener("change", filterMap);
  resetBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (regionFilter) regionFilter.value = "all";
    renderMap();
  });

  window.addEventListener("DOMContentLoaded", async () => {
  // start firebase auth listener + process redirect result
  if (window.initAuth) await window.initAuth((m) => console.log("[AUTH]", m));

  const btn = document.getElementById("sign-in-btn");
  if (btn) {
    btn.addEventListener("click", async () => {
      if (window.signIn) await window.signIn((m) => console.log("[AUTH]", m));
    });
  }
});

  // initial render
  renderMap();

  // Migration: upload local tripPlan:* docs
  migrateBtn?.addEventListener("click", async () => {
    const user = window.firebaseAuth?.currentUser;
    const db = window.firebaseDB;
    if (!user || !db) return;

    const statusBox = document.getElementById("migration-status");
    const topBox = document.getElementById("migration-status-top");

    const writeLine = (msg) => {
      const line = document.createElement("div");
      line.textContent = msg;
      if (statusBox) statusBox.appendChild(line);
      if (topBox) topBox.appendChild(line.cloneNode(true));
    };

    if (statusBox) { statusBox.innerHTML = ""; statusBox.style.display = "block"; }
    if (topBox) { topBox.innerHTML = ""; topBox.style.display = "block"; }

    const keys = Object.keys(localStorage).filter(k => k.startsWith("tripPlan:"));
    if (keys.length === 0) { writeLine("❌ No local plans found."); return; }

    for (const key of keys) {
      const name = key.replace("tripPlan:", "");
      let data;
      try { data = JSON.parse(localStorage.getItem(key)); }
      catch { writeLine(`❌ Skipped "${name}" (invalid JSON).`); continue; }

      try {
        const pruned = prunePlanForStorage(data);
        pruned.updatedAt = pruned.updatedAt || Date.now();

        const ref = window.doc(db, "users", user.uid, "plans", name);
        await window.setDoc(ref, { name, data: pruned, updatedAt: pruned.updatedAt }, { merge: true });

        writeLine(`✅ Migrated "${name}" to Firebase.`);
      } catch (err) {
        writeLine(`❌ Failed to migrate "${name}": ${err?.message || err}`);
      }
    }
  });
});