document.addEventListener("DOMContentLoaded", function() {
    var recipeList = document.getElementById("recipe-list");
    if (recipeList) {
        var recipes = [
            {
                title: "Nasi Goreng",
                description: "Nasi goreng lezat dengan bumbu spesial.",
                image: "gambar/Nasi-Goreng.jpg",
                content: "Bahan-bahan:\n- 2 piring nasi putih\n- 2 butir telur\n- 100 gram ayam\n- 1 sdm kecap manis\n- 2 siung bawang putih\n- Garam secukupnya\n\nCara Memasak:\n1. Panaskan minyak, tumis bawang putih hingga harum.\n2. Masukkan ayam, aduk hingga matang.\n3. Masukkan telur, aduk hingga telur matang.\n4. Masukkan nasi, aduk hingga rata.\n5. Tambahkan kecap manis dan garam, aduk hingga tercampur rata.\n6. Sajikan nasi goreng panas.",
                cookingSteps: [
                    "Panaskan minyak, tumis bawang putih hingga harum.",
                    "Masukkan ayam, aduk hingga matang.",
                    "Masukkan telur, aduk hingga telur matang.",
                    "Masukkan nasi, aduk hingga rata.",
                    "Tambahkan kecap manis dan garam, aduk hingga tercampur rata.",
                    "Sajikan nasi goreng panas."
                ]
            },

            {
                title: "Rendang",
                description: "Rendang daging sapi dengan rempah-rempah kaya.",
                image: "gambar/rendang2.jpeg", // Ganti dengan path gambar Anda
                content: "Bahan-bahan:\n- 1 kg daging sapi\n- 200 ml santan\n- 5 siung bawang putih\n- 3 batang serai\n- 3 lembar daun jeruk\n- Garam secukupnya\n\nCara Memasak:\n1. Rebus santan hingga mendidih, masukkan daging sapi, aduk rata.\n2. Tambahkan bawang putih, serai, dan daun jeruk, masak hingga daging empuk.\n3. Masukkan garam, masak hingga bumbu meresap dan santan mengental.\n4. Sajikan rendang dengan nasi hangat.",
                cookingSteps: [
                    "Rebus santan hingga mendidih, masukkan daging sapi, aduk rata.",
                    "Tambahkan bawang putih, serai, dan daun jeruk, masak hingga daging empuk.",
                    "Masukkan garam, masak hingga bumbu meresap dan santan mengental.",
                    "Sajikan rendang dengan nasi hangat."
                ]
            },

            {
                title: "Soto Ayam",
                description: "Soto ayam segar dengan kuah kuning yang lezat.",
                image: "gambar/sotoayam.jpg", // Ganti dengan path gambar Anda
                content: "Bahan-bahan:\n- 1 ekor ayam\n- 2 liter air\n- 4 lembar daun jeruk\n- 2 batang serai\n- 4 cm lengkuas, memarkan\n- 2 sdm minyak goreng\n- 4 siung bawang putih\n- 6 butir bawang merah\n- 3 cm kunyit\n- 2 cm jahe\n- 1 sdm garam\n- 1 sdt gula\n- 2 batang daun bawang, iris tipis\n- 2 tangkai seledri, iris halus\n- 100 gram taoge\n- 2 butir telur rebus, potong-potong\n- 1 buah jeruk nipis, potong-potong\n\nCara Memasak:\n1. Rebus ayam dengan air hingga matang dan empuk.\n2. Angkat ayam, tiriskan, dan suwir-suwir dagingnya.\n3. Panaskan minyak, tumis bumbu halus, daun jeruk, serai, dan lengkuas hingga harum.\n4. Masukkan bumbu tumis ke dalam air rebusan ayam.\n5. Tambahkan garam dan gula, masak hingga mendidih.\n6. Sajikan soto dengan taoge, telur rebus, irisan daun bawang, seledri, dan jeruk nipis.",
                cookingSteps: [
                    "Rebus ayam dengan air hingga matang dan empuk.",
                    "Angkat ayam, tiriskan, dan suwir-suwir dagingnya.",
                    "Panaskan minyak, tumis bumbu halus, daun jeruk, serai, dan lengkuas hingga harum.",
                    "Masukkan bumbu tumis ke dalam air rebusan ayam.",
                    "Tambahkan garam dan gula, masak hingga mendidih.",
                    "Sajikan soto dengan taoge, telur rebus, irisan daun bawang, seledri, dan jeruk nipis."
                ]
            },

            {
                title: "Sate Ayam",
                description: "Sate ayam dengan bumbu kacang yang gurih.",
                image: "gambar/sate_ayam3.jpeg", // Ganti dengan path gambar Anda
                content: "Bahan-bahan:\n- 500 gram daging ayam\n- 100 gram kacang tanah\n- 2 sdm kecap manis\n- 3 siung bawang putih\n- Garam secukupnya\n- Tusuk sate secukupnya\n\nCara Memasak:\n1. Haluskan bawang putih dan campur dengan kecap manis.\n2. Lumuri daging ayam dengan campuran bawang putih dan kecap manis.\n3. Tusuk daging ayam yang telah dilumuri ke tusuk sate.\n4. Panggang sate ayam hingga matang.\n5. Sajikan sate ayam dengan bumbu kacang dan kecap manis.",
                cookingSteps: [
                    "Haluskan bawang putih dan campur dengan kecap manis.",
                    "Lumuri daging ayam dengan campuran bawang putih dan kecap manis.",
                    "Tusuk daging ayam yang telah dilumuri ke tusuk sate.",
                    "Panggang sate ayam hingga matang.",
                    "Sajikan sate ayam dengan bumbu kacang dan kecap manis."
                ]
            },

            {
                title: "Ayam Rica-Rica",
                description: "Ayam rica-rica pedas khas Manado.",
                image: "gambar/ayamricarica.webp", // Ganti dengan path gambar Anda
                content: "Bahan-bahan:\n- 1 ekor ayam, potong menjadi 12 bagian\n- 6 siung bawang putih\n- 10 siung bawang merah\n- 15 cabai merah\n- 5 cabai rawit (sesuai selera)\n- 2 batang serai, memarkan\n- 5 lembar daun jeruk\n- 1 ruas jahe, memarkan\n- Garam dan gula secukupnya\n- Minyak untuk menumis\n\nCara Memasak:\n1. Haluskan bawang putih, bawang merah, cabai merah, dan cabai rawit.\n2. Panaskan minyak, tumis bumbu yang dihaluskan hingga harum.\n3. Masukkan serai, daun jeruk, dan jahe, tumis hingga bumbu matang.\n4. Masukkan ayam, aduk hingga ayam berubah warna.\n5. Tambahkan garam dan gula, aduk hingga rata.\n6. Masak hingga ayam matang dan bumbu meresap.\n7. Sajikan ayam rica-rica panas dengan nasi hangat.",
                cookingSteps: [
                    "Haluskan bawang putih, bawang merah, cabai merah, dan cabai rawit.",
                    "Panaskan minyak, tumis bumbu yang dihaluskan hingga harum.",
                    "Masukkan serai, daun jeruk, dan jahe, tumis hingga bumbu matang.",
                    "Masukkan ayam, aduk hingga ayam berubah warna.",
                    "Tambahkan garam dan gula, aduk hingga rata.",
                    "Masak hingga ayam matang dan bumbu meresap.",
                    "Sajikan ayam rica-rica panas dengan nasi hangat."
                ]
            },

            {
                title: "Ayam Bakar",
                description: "Ayam bakar dengan bumbu kecap yang lezat.",
                image: "gambar/ayambakar.jpg", // Ganti dengan path gambar Anda
                content: "Bahan-bahan:\n- 1 ekor ayam, potong menjadi 12 bagian\n- 5 siung bawang putih\n- 7 siung bawang merah\n- 5 buah cabai merah keriting\n- 3 lembar daun jeruk\n- 2 sdm kecap manis\n- 2 sdm minyak goreng\n- 1 sdm air asam jawa\n- Garam dan gula secukupnya\n\nCara Memasak:\n1. Haluskan bawang putih, bawang merah, dan cabai merah keriting.\n2. Panaskan minyak, tumis bumbu halus hingga harum.\n3. Masukkan daun jeruk, aduk hingga layu.\n4. Tambahkan kecap manis, air asam jawa, garam, dan gula, aduk rata.\n5. Masukkan ayam, aduk hingga tercampur dengan bumbu.\n6. Panggang ayam di atas bara api sambil sesekali diolesi sisa bumbu hingga matang.\n7. Sajikan ayam bakar dengan sambal dan lalapan.",
                cookingSteps: [
                    "Haluskan bawang putih, bawang merah, dan cabai merah keriting.",
                    "Panaskan minyak, tumis bumbu halus hingga harum.",
                    "Masukkan daun jeruk, aduk hingga layu.",
                    "Tambahkan kecap manis, air asam jawa, garam, dan gula, aduk rata.",
                    "Masukkan ayam, aduk hingga tercampur dengan bumbu.",
                    "Panggang ayam di atas bara api sambil sesekali diolesi sisa bumbu hingga matang.",
                    "Sajikan ayam bakar dengan sambal dan lalapan."
                ]
            },

            {
                title: "Ayam Pop",
                description: "Ayam goreng khas Padang dengan bumbu rempah yang harum.",
                image: "gambar/ayampop4.webp",
                content: "Bahan-bahan:\n- 1 ekor ayam, potong menjadi 8 bagian\n- 5 siung bawang putih\n- 3 cm jahe\n- 2 batang serai, memarkan\n- 3 lembar daun jeruk\n- 2 lembar daun salam\n- 3 cm lengkuas, memarkan\n- Garam secukupnya\n- Minyak untuk menggoreng\n\nCara Memasak:\n1. Haluskan bawang putih dan jahe.\n2. Tumis bumbu halus hingga harum.\n3. Masukkan ayam, aduk hingga berubah warna.\n4. Tambahkan serai, daun jeruk, daun salam, dan lengkuas.\n5. Tambahkan garam secukupnya.\n6. Masak hingga ayam matang dan bumbu meresap.\n7. Panaskan minyak, goreng ayam hingga kuning kecokelatan.\n8. Sajikan ayam pop panas dengan nasi hangat.",
                cookingSteps: [
                    "Haluskan bawang putih dan jahe.",
                    "Tumis bumbu halus hingga harum.",
                    "Masukkan ayam, aduk hingga berubah warna.",
                    "Tambahkan serai, daun jeruk, daun salam, dan lengkuas.",
                    "Tambahkan garam secukupnya.",
                    "Masak hingga ayam matang dan bumbu meresap.",
                    "Panaskan minyak, goreng ayam hingga kuning kecokelatan.",
                    "Sajikan ayam pop panas dengan nasi hangat."
                ]
            },

            {
                title: "Sayur Lodeh",
                description: "Sayur khas Indonesia dengan kuah santan yang lezat.",
                image: "gambar/sayurlodeh.jpg",
                content: "Bahan-bahan:\n- 200 gram labu siam, potong-potong\n- 100 gram tahu, potong-potong\n- 100 gram tempe, potong-potong\n- 50 gram kacang panjang, potong-potong\n- 2 lembar daun salam\n- 2 lembar daun jeruk\n- 1 batang serai, memarkan\n- 200 ml santan\n- Garam secukupnya\n- Minyak untuk menumis\n\nCara Memasak:\n1. Tumis bumbu halus hingga harum.\n2. Masukkan santan, aduk rata.\n3. Masukkan labu siam, tahu, tempe, kacang panjang, daun salam, daun jeruk, dan serai.\n4. Tambahkan garam secukupnya.\n5. Masak hingga sayuran matang dan kuah menyusut.\n6. Sajikan sayur lodeh hangat dengan nasi putih.",
                cookingSteps: [
                    "Tumis bumbu halus hingga harum.",
                    "Masukkan santan, aduk rata.",
                    "Masukkan labu siam, tahu, tempe, kacang panjang, daun salam, daun jeruk, dan serai.",
                    "Tambahkan garam secukupnya.",
                    "Masak hingga sayuran matang dan kuah menyusut.",
                    "Sajikan sayur lodeh hangat dengan nasi putih."
                ]
            },

            {
                title: "Sayur Asem",
                description: "Sayur segar dengan kuah asam yang segar dan nikmat.",
                image: "gambar/sayur_asem.jpeg",
                content: "Bahan-bahan:\n- 200 gram kacang panjang, potong-potong\n- 100 gram labu siam, potong-potong\n- 100 gram tahu, potong-potong\n- 100 gram tempe, potong-potong\n- 50 gram daun melinjo\n- 2 lembar daun salam\n- 2 lembar daun jeruk\n- 1 batang serai, memarkan\n- 2 liter air\n- 3 sdm asam jawa, larutkan dengan sedikit air\n- Gula secukupnya\n- Garam secukupnya\n- Minyak untuk menumis\n\nCara Memasak:\n1. Tumis bumbu halus hingga harum.\n2. Masukkan air, daun salam, daun jeruk, dan serai. Didihkan.\n3. Masukkan kacang panjang, labu siam, tahu, tempe, dan daun melinjo.\n4. Tambahkan asam jawa, gula, dan garam secukupnya.\n5. Masak hingga sayuran matang dan kuah terasa segar.\n6. Sajikan sayur asem hangat dengan nasi putih.",
                cookingSteps: [
                    "Tumis bumbu halus hingga harum.",
                    "Masukkan air, daun salam, daun jeruk, dan serai. Didihkan.",
                    "Masukkan kacang panjang, labu siam, tahu, tempe, dan daun melinjo.",
                    "Tambahkan asam jawa, gula, dan garam secukupnya.",
                    "Masak hingga sayuran matang dan kuah terasa segar.",
                    "Sajikan sayur asem hangat dengan nasi putih."
                ]
            },

            {
                "title": "Perkedel",
                "description": "Perkedel kentang yang gurih dan lezat.",
                "image": "gambar/perkedel.webp",
                "content": "Bahan-bahan:\n- 500 gram kentang, kukus dan haluskan\n- 2 butir telur\n- 3 sdm tepung terigu\n- 3 sdm bawang merah goreng\n- 2 batang daun bawang, iris halus\n- Garam secukupnya\n- Lada secukupnya\n- Minyak untuk menggoreng\n\nCara Memasak:\n1. Campurkan kentang yang sudah dihaluskan dengan telur.\n2. Bumbui dengan garam dan lada secukupnya.\n3. Bentuk adonan menjadi bulatan pipih.\n4. Panaskan minyak dalam wajan.\n5. Goreng perkedel hingga kecokelatan dan matang.\n6. Angkat dan tiriskan.\n7. Sajikan perkedel hangat sebagai pelengkap hidangan.",
                "cookingSteps": [
                    "Campurkan kentang yang sudah dihaluskan dengan telur..",
                    "Bumbui dengan garam dan lada secukupnya.",
                    "Bentuk adonan menjadi bulatan pipih.",
                    "Panaskan minyak dalam wajan.",
                    "Goreng perkedel hingga kecokelatan dan matang.",
                    "Angkat dan tiriskan.",
                    "Sajikan perkedel hangat sebagai pelengkap hidangan."
                ]
            },

            {
                "title": "Bakwan",
                "description": "Bakwan yang renyah dan lezat, cocok sebagai camilan.",
                "image": "gambar/bakwan.webp",
                "content": "Bahan-bahan:\n- 200 gram tepung terigu\n- 100 gram wortel, parut\n- 100 gram kol, iris halus\n- 2 batang daun bawang, iris halus\n- 2 siung bawang putih, haluskan\n- 1 butir telur\n- 1 sdt garam\n- 1/2 sdt merica bubuk\n- Air secukupnya\n- Minyak untuk menggoreng\n\nCara Memasak:\n1. Campurkan tepung terigu, wortel parut, kol, daun bawang, bawang putih, telur, garam.\n2. Tambahkan air sedikit demi sedikit sambil terus diaduk hingga adonan cukup kental.\n3. Panaskan minyak dalam wajan.\n4. Ambil sebagian adonan menggunakan sendok, lalu masukkan ke dalam minyak panas.\n5. Goreng bakwan hingga kecokelatan dan matang.\n6. Angkat dan tiriskan.\n7. Sajikan bakwan hangat dengan sambal atau saus kesukaanmu.",
                "cookingSteps": [
                    "Campurkan tepung terigu, wortel parut, kol, daun bawang, bawang putih, telur, garam.",
                    "Tambahkan air sedikit demi sedikit sambil terus diaduk hingga adonan cukup kental.",
                    "Panaskan minyak dalam wajan.",
                    "Ambil sebagian adonan menggunakan sendok, lalu masukkan ke dalam minyak panas.",
                    "Goreng bakwan hingga kecokelatan dan matang.",
                    "Angkat dan tiriskan.",
                    "Sajikan bakwan hangat dengan sambal atau saus kesukaanmu."
                ]
            },

            {
                "title": "Gehu",
                "description": "Gehu yang renyah di luar dan lembut di dalam.",
                "image": "gambar/gehu.jpg",
                "content": "Bahan-bahan:\n- 500 gram tahu putih, potong dadu\n- 100 gram tepung maizena\n- 2 sdm tepung terigu\n- 1 sdt bawang putih bubuk\n- 1/2 sdt merica bubuk\n- Garam secukupnya\n- Minyak untuk menggoreng\n\nCara Memasak:\n1. Campurkan tepung maizena, tepung terigu, bawang putih bubuk, merica bubuk, dan garam dalam sebuah mangkuk.\n2. Masukkan potongan tahu ke dalam campuran tepung, pastikan tahu terbalut rata.\n3. Panaskan minyak dalam wajan.\n4. Goreng tahu hingga kecokelatan dan renyah.\n5. Angkat tahu dan tiriskan di atas kertas minyak.\n6. Sajikan gehu hangat dengan saus atau sambal kesukaanmu.",
                "cookingSteps": [
                    "Campurkan tepung maizena, tepung terigu, bawang putih bubuk, merica bubuk, dan garam dalam sebuah mangkuk.",
                    "Masukkan potongan tahu ke dalam campuran tepung, pastikan tahu terbalut rata.",
                    "Panaskan minyak dalam wajan.",
                    "Goreng tahu hingga kecokelatan dan renyah.",
                    "Angkat tahu dan tiriskan di atas kertas minyak.",
                    "Sajikan gehu hangat dengan saus atau sambal kesukaanmu."
                ]
            },

            {
                "title": "Es Campur",
                "description": "Es campur segar dengan berbagai macam bahan.",
                "image": "gambar/escampur2.jpg",
                "content": "Bahan-bahan:\n- 200 gram es serut\n- 100 gram kelapa muda, iris tipis\n- 50 gram alpukat, potong dadu\n- 50 gram jelly, potong dadu\n- 50 gram nangka, potong dadu\n- 50 gram cincau, potong kotak\n- 2 sdm sirup cocopandan\n- 200 ml air kelapa\n- Es batu secukupnya\n\nCara Membuat:\n1. Siapkan gelas saji, masukkan es serut ke dalam gelas.\n2. Tambahkan kelapa muda, alpukat, jelly, nangka, dan cincau ke atas es serut.\n3. Tuangkan sirup cocopandan dan air kelapa ke atas bahan-bahan tersebut.\n4. Tambahkan es batu secukupnya.\n5. Es campur siap disajikan, aduk sebelum dinikmati.",
                "cookingSteps": [
                    "Siapkan gelas saji, masukkan es serut ke dalam gelas.",
                    "Tambahkan kelapa muda, alpukat, jelly, nangka, dan cincau ke atas es serut.",
                    "Tuangkan sirup cocopandan dan air kelapa ke atas bahan-bahan tersebut.",
                    "Tambahkan es batu secukupnya.",
                    "Es campur siap disajikan, aduk sebelum dinikmati."
                ]
            },

            {
                "title": "Es Jeruk",
                "description": "Minuman segar dengan campuran jeruk dan es serut.",
                "image": "gambar/esjeruk2.webp",
                "content": "Bahan-bahan:\n- 3 buah jeruk, peras airnya\n- 2 sdm gula pasir\n- 200 ml air dingin\n- Es serut secukupnya\n- Air secukupnya\n\nCara Membuat:\n1. Peras air dari jeruk, saring untuk mendapatkan jus jeruknya.\n2. Campur jus jeruk dengan gula pasir dan air dingin, aduk hingga gula larut.\n3. Siapkan gelas saji, tambahkan es serut ke dalam gelas.\n4. Tuangkan campuran jus jeruk ke atas es serut.\n5. Tambahkan air secukupnya sesuai selera.\n6. Es jeruk siap disajikan dingin.",
                "cookingSteps": [
                    "Peras air dari jeruk, saring untuk mendapatkan jus jeruknya.",
                    "Campur jus jeruk dengan gula pasir dan air dingin, aduk hingga gula larut.",
                    "Siapkan gelas saji, tambahkan es serut ke dalam gelas.",
                    "Tuangkan campuran jus jeruk ke atas es serut.",
                    "Tambahkan air secukupnya sesuai selera.",
                    "Es jeruk siap disajikan dingin."
                ]
            },

            {
                "title": "Es Teler",
                "description": "Minuman segar dengan campuran buah-buahan, es serut, dan santan.",
                "image": "gambar/esteler.jpeg",
                "content": "Bahan-bahan:\n- 1 buah alpukat, potong dadu\n- 1 buah kelapa muda, keruk dagingnya\n- 100 gram kelapa parut, sangrai\n- 100 gram nangka, potong-potong\n- 100 gram tape singkong\n- 100 gram cincau\n- 200 ml santan, kental\n- 2 sdm gula pasir\n- Es serut secukupnya\n- Sirup cocopandan secukupnya\n\nCara Membuat:\n1. Campur santan dengan gula pasir, aduk hingga gula larut.\n2. Siapkan gelas saji, tambahkan potongan alpukat, kelapa muda, kelapa parut sangrai, nangka, tape singkong, dan cincau ke dalam gelas.\n3. Tambahkan es serut ke dalam gelas.\n4. Tuangkan santan gula ke atas es serut dan bahan lainnya.\n5. Tambahkan sirup cocopandan secukupnya sesuai selera.\n6. Es teler siap disajikan dingin.",
                "cookingSteps": [
                    "Campur santan dengan gula pasir, aduk hingga gula larut.",
                    "Siapkan gelas saji, tambahkan potongan alpukat, kelapa muda, kelapa parut sangrai, nangka, tape singkong, dan cincau ke dalam gelas.",
                    "Tambahkan es serut ke dalam gelas.",
                    "Tuangkan santan gula ke atas es serut dan bahan lainnya.",
                    "Tambahkan sirup cocopandan secukupnya sesuai selera.",
                    "Es teler siap disajikan dingin."
                ]
            },
 
            
            
            
            // Tambahkan resep lain di sini
        ];

        recipes.forEach(function(recipe) {
            var recipeItem = document.createElement("div");
            recipeItem.classList.add("recipe-item");

            var recipeImage = document.createElement("img");
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.title;

            var recipeTitle = document.createElement("h3");
            recipeTitle.textContent = recipe.title;

            var recipeDescription = document.createElement("p");
            recipeDescription.textContent = recipe.description;

            recipeItem.appendChild(recipeImage);
            recipeItem.appendChild(recipeTitle);
            recipeItem.appendChild(recipeDescription);

            recipeItem.addEventListener("click", function() {
                localStorage.setItem("selectedRecipe", JSON.stringify(recipe));
                window.location.href = "detail_resep.html";
            });

            recipeList.appendChild(recipeItem);
        });
    }
});
