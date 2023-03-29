var config = {
    style: 'mapbox://styles/damdemmapsyall/clb0p8cs8007u15p4ctv269sw',
    accessToken: 'pk.eyJ1IjoiZGFtZGVtbWFwc3lhbGwiLCJhIjoiY2w1cWc2ZGsxMGpwbDNkbjJ4bXZseXFxMyJ9.n4CR0jcceopdLHs8S2n-rA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'TIGA BURUNG YANG PALING TERANCAM',
            image: '',
            description: '<br>Gunung Sahendaruman terletak di tengah tiga kecamatan Pulau Sangihe, yakni Tamako, Manganitu, dan Tabukan Tengah. Sahendaruman dikelilingi hutan lindung yang menopang 70 aliran sungai untuk mengaliri seisi pulau. Hutan Lindung Gunung Sahendaruman juga merupakan habitat bagi beragam satwa, termasuk primata terkecil hingga burung endemis. <br><br> Kawasan tersebut juga menjaga tiga burung endemis yang terancam punah. Menurut Daftar Merah IUCN, burung-burung ini hanya tinggal selangkah hingga dikategorikan sebagai efektif punah. Designasi ini berarti turunnya populasi mereka tidak akan memungkinkan keberlanjutan spesies burung tersebut.',
            location: {
                center: [125.54446, 3.49248],
                zoom: 10.09,
                pitch: 45.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer:'TMS-KONSESI',
                opacity: 0.0,
              },
              {
                layer:'sangihe-cerulean-flycather',
                opacity: 0,
              },
              {
                layer:'sangihe-whistler',
                opacity: 0,
              },
              {
                layer:'sangihe-white-eye',
                opacity: 0,
              }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [

                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Berikut adalah wilayah konsesi PT. Tambang Mas Sangihe. Wilayah konsesi sebesar 42 ribu hektare, mengambil bagian hampir setengah dari luas pulau tersebut.',
            location: {
              center: [125.54446, 3.49248],
              zoom: 10.09,
              pitch: 45.00,
              bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer:'TMS-KONSESI',
                opacity: 0.85,
              }
            ],
            onChapterExit: [
              {
                layer:'TMS-KONSESI',
                opacity: 0,
              }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Sariwang Sangihe',
            image: 'assets/images/1.JPG',
            description: '<ul><li><strong>Nama Saintifik:</strong> <em>Eutrichomysias Rowleyi</em></li><li><strong>Tren Populasi:</strong> Menurun</li><li><strong>Jumlah:</strong> 21-100 burung</li><li><strong>Analisis IUCN:</strong> Sariwang Sangihe pernah dikira punah hingga akhir 1990-an sampai ditemukan di Gunung Sahendaruman. Burung ini memenuhi kriteria masuk sebagai Sangat Terancam Punah karena memiliki sebaran dan populasi yang kecil yang diakibatkan kehilangan habitat. IUCN mengharapkan upaya konservasi bisa memastikan perlindungan habitat yang tersisa, dan dengan demikian mencegah kepunahannya.</li></ul>',
            location: {
              center: [125.54446, 3.49248],
              zoom: 12.58,
              pitch: 45.00,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer:'sangihe-whistler',
                opacity: 0.85,
              }
            ],
            onChapterExit: [
              {
                layer:'sangihe-whistler',
                opacity: 0,
              }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Kacamata Sangihe',
            image: '',
            description: '<ul><li><strong>Nama Saintifik:</strong> <em>Zosterops Nehrkorni</em></li><li><strong>Tren Populasi:</strong> Menurun</li><li><strong>Jumlah:</strong> 1-49 burung</li><li><strong>Analisis IUCN:</strong> Kacamata Sangihe memenuhi syarat sebagai Sangat Terancam Punah karena terlihat bertahan hidup dalam jumlah kecil hanya di satu lokasi, di mana habitatnya terus dihancurkan dan terdegradasi, sehingga jangkauan dan populasi keseluruhannya cenderung menurun.</li></ul>.',
            location: {
              center: [125.54446, 3.49248],
              zoom: 12.58,
              pitch: 45.00,
              bearing: -53.60,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer:'sangihe-cerulean-flycather',
                opacity: 0.85,
              }
            ],
            onChapterExit: [
              {
                layer:'sangihe-cerulean-flycather',
                opacity: 0,
              }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Anis-bentet Sangihe',
            image: 'assets/images/3.JPG',
            description: '<ul><li><strong>Nama Saintifik:</strong> <em>Coracornis sanghirensis</em></li><li><strong>Tren Populasi:</strong> Menurun</li><li><strong>Jumlah:</strong> 50-249</li><li><strong>Analisis IUCN:</strong> Anis-bentet Sangihe dikenal hanya tinggal di Gunung Sahendaruman. Habitat burung ini terus menurun dalam luas dan kualitasnya, sehingga populasinya yang kecil pasti akan berkurang. Karena situasi yang mengkhawatirkan ini, burung ini diklasifikasikan sebagai Sangat Terancam Punah.</li></ul>.',
            location: {
              center: [125.54446, 3.49248],
              zoom: 12.58,
              pitch: 45.00,
              bearing: 8.80,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer:'sangihe-white-eye',
                opacity: 0.85,
              }
            ],
            onChapterExit: [
              {
                layer:'sangihe-white-eye',
                opacity: 0,
              }
            ]
        }
    ]
};
