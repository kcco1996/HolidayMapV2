// js/map.js
const withV = window.withV || ((u) => u);

// -----------------------------------------------------------------------------
// 1) Your destination data + icons
// -----------------------------------------------------------------------------

// Example placeholders – replace with your real ones
const destinations = window.destinations || [ //


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
// -----------------------------------------------------------------------------
// 2) Storage helpers (localStorage)
// -----------------------------------------------------------------------------

function lsKeyForDestination(destName) {
  return `holidayPlan:${destName}`;
}

function loadLocalPlan(destName) {
  try {
    const raw = localStorage.getItem(lsKeyForDestination(destName));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveLocalPlan(destName, planObj) {
  localStorage.setItem(lsKeyForDestination(destName), JSON.stringify(planObj));
}

// -----------------------------------------------------------------------------
// 3) Firebase helpers (NO imports here — expects window.firebaseAuth/window.firebaseDB)
// -----------------------------------------------------------------------------

function currentUser() {
  return window.firebaseAuth?.currentUser || null;
}

function uidOrNull() {
  const u = currentUser();
  return u ? u.uid : null;
}

// users/{uid}/destinations/{destName}
function docRefForDestination(destName) {
  const uid = uidOrNull();
  if (!uid) return null;
  return window.doc(window.firebaseDB, "users", uid, "destinations", destName);
}

async function loadPlanFromFirebase(destName) {
  const ref = docRefForDestination(destName);
  if (!ref) return null;
  const snap = await window.getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

async function savePlanToFirebase(destName, planObj) {
  const ref = docRefForDestination(destName);
  if (!ref) throw new Error("Not signed in");
  await window.setDoc(ref, planObj, { merge: true });
}

// Optional: one-time hydration (slow if you have many destinations)
async function hydrateAllPlansOnce() {
  const u = currentUser();
  if (!u) return;

  for (const d of destinations) {
    const name = d.name || d.title || d.destination || d;
    try {
      const fb = await loadPlanFromFirebase(name);
      if (fb) saveLocalPlan(name, fb);
    } catch (e) {
      console.warn("Hydrate failed for", name, e);
    }
  }
}
window.hydrateAllPlansOnce = hydrateAllPlansOnce;

// -----------------------------------------------------------------------------
// 4) Leaflet map + markers
// -----------------------------------------------------------------------------

let map;
let markerByName = new Map();

// Simple cache so we don’t recreate identical icons 500 times
const iconCache = new Map();

function getIcon(iconUrl) {
  const url = iconUrl || "assets/black-dot.png";
  if (iconCache.has(url)) return iconCache.get(url);

  const icon = L.icon({
    iconUrl: url,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -10],
  });

  iconCache.set(url, icon);
  return icon;
}

function ensureMap() {
  if (map) return map;

  map = L.map("map", { preferCanvas: true }).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  return map;
}

function buildPopupHTML(destName, plan) {
  return `
    <div class="popup">
      <div class="header">
        <div class="title">
          <strong>${destName}</strong>
          <div class="hint">Plan loads from localStorage (and Firebase when signed in)</div>
        </div>
      </div>

      <div class="tabs">
        <button class="tab-btn active" data-tab="days">Days</button>
        <button class="tab-btn" data-tab="notes">Notes</button>
      </div>

      <div class="tab-panel active" data-panel="days">
        <div class="row">
          <label>Days</label>
          <input id="days-input" type="number" min="1" value="${plan?.days || 1}">
        </div>
        <div class="save-bar">
          <button class="btn primary" id="save-btn">Save</button>
          <span class="saved-toast" id="saved-toast">Saved ✓</span>
        </div>
      </div>

      <div class="tab-panel" data-panel="notes">
        <textarea class="textarea" id="notes-input">${plan?.notes || ""}</textarea>
        <div class="save-bar">
          <button class="btn primary" id="save-notes-btn">Save Notes</button>
        </div>
      </div>
    </div>
  `;
}

function bindPopupEvents(popupEl, destName) {
  // Tabs
  popupEl.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      popupEl.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      popupEl.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      popupEl
        .querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`)
        .classList.add("active");
    });
  });

  // Save (Days)
  popupEl.querySelector("#save-btn")?.addEventListener("click", async () => {
    const plan = loadLocalPlan(destName) || {};
    const days = Number(popupEl.querySelector("#days-input")?.value || 1);
    plan.days = days;

    saveLocalPlan(destName, plan);

    try {
      if (currentUser()) await savePlanToFirebase(destName, plan);
    } catch (e) {
      console.warn("Firebase save failed (still saved locally):", e);
    }

    const toast = popupEl.querySelector("#saved-toast");
    if (toast) {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1200);
    }
  });

  // Save (Notes)
  popupEl.querySelector("#save-notes-btn")?.addEventListener("click", async () => {
    const plan = loadLocalPlan(destName) || {};
    plan.notes = popupEl.querySelector("#notes-input")?.value || "";
    saveLocalPlan(destName, plan);

    try {
      if (currentUser()) await savePlanToFirebase(destName, plan);
    } catch (e) {
      console.warn("Firebase save failed (still saved locally):", e);
    }
  });
}

function renderMap() {
  ensureMap();
  markerByName.clear();

  // Remove old markers (keep the tile layer)
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) map.removeLayer(layer);
  });

  for (const d of destinations) {
    const destName = d.name || d.title || d.destination || d;
    const lat = d.lat ?? d.latitude;
    const lng = d.lng ?? d.longitude;
    if (lat == null || lng == null) continue;

    const plan = loadLocalPlan(destName) || {};

    const marker = L.marker([lat, lng], {
      icon: getIcon(d.destination),
    }).addTo(map);

    markerByName.set(destName, marker);

    marker.on("popupopen", async () => {
      // Load-on-open from Firebase (fast + up to date)
      if (currentUser()) {
        try {
          const fb = await loadPlanFromFirebase(destName);
          if (fb) saveLocalPlan(destName, fb);
        } catch (e) {
          console.warn("Popup load from firebase failed:", e);
        }
      }

      const freshPlan = loadLocalPlan(destName) || {};
      marker.setPopupContent(buildPopupHTML(destName, freshPlan));

      const popupEl = marker.getPopup()?.getElement()?.querySelector(".popup");
      if (popupEl) bindPopupEvents(popupEl, destName);
    });

    marker.bindPopup(buildPopupHTML(destName, plan), { maxWidth: 600 });
  }
}

window.renderMap = renderMap;