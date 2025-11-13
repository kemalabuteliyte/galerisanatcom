import type { Artist, Artwork, Category, Gallery } from '../types';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Ayşe Demir',
    bio: 'Ayşe Demir, canlı soyut kompozisyonlarıyla tanınan çağdaş bir dijital sanatçıdır. Londra Sanat Üniversitesi\'nden mezun olduktan sonra, teknoloji ve duygu arasındaki kesişimi araştıran benzersiz bir tarz geliştirdi. Çalışmaları dijital sanatın geleneksel kavramlarına meydan okuyarak sürükleyici görsel deneyimler yaratır. Eserleri, Tate Modern, MoMA ve İstanbul Modern dahil olmak üzere dünyanın önde gelen galerilerinde sergilendi. 2022 yılında "En İyi Dijital Sanatçı" ödülünü kazandı.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    nationality: 'Türk',
    birthYear: 1985,
    website: 'https://aysedemir.art',
    social: {
      instagram: '@aysedemir',
    },
  },
  {
    id: '2',
    name: 'Mehmet Yılmaz',
    bio: 'Mehmet Yılmaz, geleneksel Türk estetiğinden ilham alan minimalist bir yaklaşımla dijital resim yapıyor. Mimar Sinan Güzel Sanatlar Üniversitesi mezunu olan Yılmaz, Japon zen felsefesini Osmanlı süsleme sanatlarıyla birleştirerek özgün bir dil oluşturdu. Çalışmaları dijital ortamda sadeliğin ve negatif alanın güzelliğine odaklanıyor. 20 yılı aşkın kariyerinde 50\'den fazla kişisel sergi açtı ve eserleri uluslararası özel koleksiyonlarda yer alıyor.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    nationality: 'Türk',
    birthYear: 1978,
    social: {
      instagram: '@mehmetyilmaz',
      twitter: '@mehmet_art',
    },
  },
  {
    id: '3',
    name: 'Zeynep Kaya',
    bio: 'Zeynep Kaya, fiziksel ve dijital unsurları harmanlayan karışık medya heykelleriyle tanınan bir sanatçıdır. Yenilikçi yaklaşımı dünya çapında büyük galerilerde sergilenerek çağdaş sanatın sınırlarını zorluyor. Berlin\'de yaşayan ve çalışan Kaya, 3D baskı teknolojisini geleneksel heykel teknikleriyle birleştirerek zamanın ve mekanın algısını sorgulayan eserler üretiyor. Venice Biennale ve Art Basel\'de eserleri sergilendi.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    nationality: 'Türk',
    birthYear: 1990,
    website: 'https://zeynepkaya.com',
  },
  {
    id: '4',
    name: 'Emre Şahin',
    bio: 'Emre Şahin, kentsel peyzajları ve mimari formları benzersiz bir perspektifle yakalayan ödüllü bir fotoğraf sanatçısıdır. İstanbul Technical University\'de mimarlık eğitimi aldıktan sonra fotoğrafçılığa yöneldi. Çalışmaları, modern şehirlerin kaotik güzelliğini ve insanların kentsel mekanlarla olan ilişkisini araştırıyor. National Geographic, Magnum Photos ve World Press Photo sergilerinde yer aldı. Eserleri birçok prestijli koleksiyonda bulunuyor.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    nationality: 'Türk',
    birthYear: 1982,
    website: 'https://emresahin.photo',
    social: {
      instagram: '@emre_sahin_photo',
      twitter: '@emresahin',
    },
  },
  {
    id: '5',
    name: 'Deniz Aydın',
    bio: 'Deniz Aydın, doğa ve teknolojinin dinamik etkileşimini keşfeden çok yönlü bir dijital sanatçıdır. Çukurova Üniversitesi Güzel Sanatlar Fakültesi mezunu olan Aydın, algoritmik sanat ve generative design alanında öncü çalışmalar yapıyor. Eserleri, organik formların matematiksel güzelliğini ve doğal sistemlerin kaosunu yansıtıyor. Sanatsal kod ve yapay zeka ile üretilen eserleri, dijital sanatın geleceğine dair önemli sorular soruyor.',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400',
    nationality: 'Türk',
    birthYear: 1993,
    social: {
      instagram: '@denizaydin_art',
    },
  },
  {
    id: '6',
    name: 'Can Yıldırım',
    bio: 'Can Yıldırım, soyut ekspresyonizm ve dijital teknolojileri birleştiren deneysel sanatçı olarak tanınıyor. Viyana Güzel Sanatlar Akademisi\'nde eğitim gören Yıldırım, renk teorisi ve dijital manipülasyon konusunda derin bir uzmanlığa sahip. Çalışmaları, duygusal yoğunluk ve görsel ritim arasındaki hassas dengeyi yakalıyor. Eserleri Paris, New York ve Tokyo\'daki prestijli galerilerde sergilendi ve uluslararası sanat eleştirmenlerinden yüksek takdir aldı.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    nationality: 'Türk',
    birthYear: 1987,
    website: 'https://canyildirim.art',
    social: {
      instagram: '@can.yildirim',
      twitter: '@canyildirim_art',
    },
  },
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Soyut',
    description: 'Renk, form ve duyguyu vurgulayan temsili olmayan sanatı keşfedin. Soyut sanat, nesnel gerçekliği temsil etmek yerine şekiller, renkler ve biçimler kullanarak duygusal ve psikolojik deneyimler yaratır.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    slug: 'soyut',
  },
  {
    id: '2',
    name: 'Dijital Resim',
    description: 'Modern resim teknikleriyle yaratılmış çağdaş dijital sanat eserleri. Geleneksel resim tekniklerinin dijital ortama aktarıldığı bu kategori, fırça vuruşlarından sulu boya efektlerine kadar geniş bir yelpazeyi kapsar.',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800',
    slug: 'dijital-resim',
  },
  {
    id: '3',
    name: 'Heykel',
    description: 'Yaratıcı sınırları zorlayan üç boyutlu sanat eserleri. Geleneksel malzemelerden dijital 3D baskıya, kinetik heykellerden çevresel yerleştirmelere kadar uzanan geniş bir yelpazede üretilen heykeller.',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800',
    slug: 'heykel',
  },
  {
    id: '4',
    name: 'Fotoğraf',
    description: 'Objektif aracılığıyla yakalanan etkileyici görsel anlatımlar. Belgesel fotoğrafçılıktan sanat fotoğrafçılığına, portrelerden kentsel peyzajlara kadar çeşitli konuları kapsayan eserler.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    slug: 'fotograf',
  },
  {
    id: '5',
    name: 'Generative Sanat',
    description: 'Algoritma ve kod kullanılarak yaratılan benzersiz sanat eserleri. Bu yenilikçi kategori, yapay zeka, matematik ve yaratıcılığın buluştuğu noktada yer alır ve her seferinde farklı sonuçlar üretir.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800',
    slug: 'generative-sanat',
  },
  {
    id: '6',
    name: 'Karışık Medya',
    description: 'Farklı sanat tekniklerinin ve malzemelerinin bir araya getirildiği deneysel eserler. Kolaj, montaj ve hibrit tekniklerle üretilen bu eserler, sanatsal ifadenin sınırlarını genişletir.',
    image: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800',
    slug: 'karisik-medya',
  },
];

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Dijital Rüyalar',
    description: 'Dijital alanda renk ve formun canlı bir keşfi. Bu eser, dijital bilincin akışkanlığını ve yaratıcı ifadenin sınırsız olanaklarını temsil ediyor. Katmanlar halinde örülmüş renkler, izleyiciyi bilinçaltının derinliklerine doğru bir yolculuğa çıkarıyor. Sanatçı, yapay zeka destekli boyama teknikleri kullanarak geleneksel fırça vuruşlarının duygusallığını dijital ortamın hassasiyetiyle birleştirmiş.',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800',
    year: 2023,
    medium: 'Dijital Sanat',
    dimensions: '4096 x 4096 piksel',
    artistId: '1',
    categoryId: '1',
    galleryId: '1',
    featured: true,
  },
  {
    id: '2',
    title: 'Zen Bahçesi',
    description: 'Geleneksel Japon kaya bahçelerinden ilham alan minimalist dijital resim. Bu çalışma, dikkatli kompozisyonuyla tefekkür ve iç huzuru davet ediyor. Her eleman özenle yerleştirilmiş, boşluk ve doluluk arasındaki denge mükemmel bir harmoni yaratıyor. Sanatçı, Osmanlı minyatür sanatındaki ince detayları Japon zen estetiğinin sadeliğiyle buluşturarak Doğu-Batı sentezini başarıyla gerçekleştirmiş.',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800',
    year: 2024,
    medium: 'Dijital Resim',
    dimensions: '3000 x 4000 piksel',
    artistId: '2',
    categoryId: '2',
    galleryId: '1',
    featured: true,
  },
  {
    id: '3',
    title: 'Kent Akışı',
    description: 'Şehir hayatının soyut bir temsili, cesur geometrik formlarla kentsel ortamların enerjisini ve hareketini yakalıyor. İstanbul\'un kaotik güzelliğinden ilham alan bu eser, modern metropollerin dinamizmini ve çelişkilerini yansıtıyor. Keskin çizgiler ve yumuşak geçişler, şehrin hem sert hem de şiirsel yönlerini aynı anda ifade ediyor.',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
    year: 2023,
    medium: 'Dijital Sanat',
    dimensions: '5000 x 3333 piksel',
    artistId: '1',
    categoryId: '1',
    featured: false,
    disableQuote: true,
  },
  {
    id: '4',
    title: 'Eterik Formlar',
    description: 'Fiziksel malzemeleri dijital projeksiyonlarla birleştiren karışık medya heykel, sürekli değişen bir sanatsal deneyim yaratıyor. 3D baskı teknolojisiyle üretilen organik formlar, LED projeksiyonlarıyla hayat buluyor. Her izleyicinin etkileşimine göre değişen bu dinamik heykel, sanatın gelecekteki formlarını bugünden deneyimlememizi sağlıyor. Eserin fiziksel varlığı ile dijital katmanları arasındaki diyalog, gerçeklik algımızı sorgulatıyor.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
    year: 2024,
    medium: 'Karışık Medya Heykel',
    dimensions: '120 x 80 x 60 cm',
    artistId: '3',
    categoryId: '3',
    galleryId: '2',
    featured: true,
  },
  {
    id: '5',
    title: 'Sessizlik Konuşuyor',
    description: 'Negatif alan ve minimalizm üzerine bir meditasyon, gösterilmeyenin gücünü sergiliyor. Bu eser, John Cage\'in "4\'33" bestesine görsel bir yanıt niteliğinde. Sanatçı, boşluğu bir eksiklik olarak değil, potansiyelin taşıyıcısı olarak sunuyor. Minimal müdahalelerle maksimum etki yaratılmış, her beyaz alan binlerce hikayeye gebe.',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800',
    year: 2024,
    medium: 'Dijital Resim',
    dimensions: '2400 x 3200 piksel',
    artistId: '2',
    categoryId: '2',
    featured: false,
  },
  {
    id: '6',
    title: 'Kromatik Dalgalar',
    description: 'Renk uyumu ve görsel ritim arasındaki ilişkiyi keşfeden akıcı soyut kompozisyon. Işık spektrumundan ilham alan bu eser, renklerin müzikal bir şekilde birbirine dönüşümünü görselleştiriyor. Her dalga, bir ses frekansını temsil eder gibi hareket ediyor ve izleyicinin gözünde bir senfoni yaratıyor.',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800',
    year: 2023,
    medium: 'Dijital Sanat',
    dimensions: '4500 x 3000 piksel',
    artistId: '1',
    categoryId: '1',
    galleryId: '1',
    featured: false,
  },
  {
    id: '7',
    title: 'İstanbul Anları',
    description: 'Modern metropolün nabzını yakalayan kentsel fotoğraf serisi. Boğaz\'ın iki yakasını birleştiren köprüler, tarihi yarımadanın silueti ve şehrin gündelik ritmi bu karede birleşiyor. Gün batımının altın ışığı, şehrin yüzyıllar boyunca taşıdığı hikayelerle dans ediyor. Uzun pozlama tekniği kullanılarak çekilen bu eser, zamanın akışını ve şehrin sonsuz enerjisini aynı karede donduruyor.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
    year: 2024,
    medium: 'Dijital Fotoğraf',
    dimensions: '6000 x 4000 piksel',
    artistId: '4',
    categoryId: '4',
    galleryId: '1',
    featured: true,
  },
  {
    id: '8',
    title: 'Algoritmanın Ruhu',
    description: 'Yapay zeka ve yaratıcı kod kullanılarak üretilen generative sanat eseri. Bu eser, her render edilişinde farklı bir görünüm alıyor ancak sanatçının belirlediği estetik parametreler içinde kalıyor. Matematiğin soğukluğu ile sanatın sıcaklığını birleştiren bu çalışma, makinelerin de estetik değer üretebileceğini kanıtlıyor. Processing ve P5.js kullanılarak kodlanan algoritma, organik formların matematiksel yapısını keşfediyor.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800',
    year: 2024,
    medium: 'Generative Sanat',
    dimensions: '4000 x 4000 piksel',
    artistId: '5',
    categoryId: '5',
    featured: true,
  },
  {
    id: '9',
    title: 'Kentsel Doku',
    description: 'Beton, cam ve ışığın dans ettiği mimari fotoğraf. Modernist yapıların geometrik sadeliği, günün farklı saatlerinde değişen ışıkla hayat buluyor. Bu kare, mimarinin sadece işlevsel değil aynı zamanda duygusal bir deneyim olduğunu hatırlatıyor. Minimalist kompozisyon ve mükemmel simetri, izleyiciye meditasyonel bir görsel deneyim sunuyor.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
    year: 2023,
    medium: 'Dijital Fotoğraf',
    dimensions: '5000 x 3333 piksel',
    artistId: '4',
    categoryId: '4',
    featured: false,
  },
  {
    id: '10',
    title: 'Renk Senfonisi',
    description: 'Ekspresif fırça vuruşları ve canlı renk paletleriyle oluşturulan duygusal soyut eser. Bu çalışma, Kandinsky\'nin renklerin müzikal değerler taşıdığı teorisinden ilham alıyor. Her renk katmanı, bir enstrümanın sesini temsil ediyor ve birlikte görsel bir senfoni yaratıyor. Dijital araçlarla yaratılmış olsa da, geleneksel yağlı boya resmin tüm duygusallığını taşıyor.',
    image: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800',
    year: 2024,
    medium: 'Dijital Resim',
    dimensions: '3600 x 4800 piksel',
    artistId: '6',
    categoryId: '2',
    galleryId: '1',
    featured: false,
  },
  {
    id: '11',
    title: 'Zamanın Katmanları',
    description: 'Farklı malzemelerin kolaj tekniğiyle bir araya getirildiği karışık medya eseri. Eski fotoğraflar, dijital manipülasyonlar, elle çizilmiş unsurlar ve dijital dokular bu eserde buluşuyor. Her katman, belleğin farklı bir zamanını temsil ediyor ve birlikte kişisel tarihimizin karmaşık yapısını yansıtıyor. Geçmiş ile gelecek, analog ile dijital bu eserde çarpışıyor ve yeni bir anlatı yaratıyor.',
    image: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800',
    year: 2023,
    medium: 'Karışık Medya',
    dimensions: '100 x 150 cm',
    artistId: '3',
    categoryId: '6',
    galleryId: '2',
    featured: false,
  },
  {
    id: '12',
    title: 'Dijital Meditasyon',
    description: 'Sadelik ve derin konsantrasyon gerektiren minimalist dijital resim. Geleneksel Türk ebru sanatının dijital yorumu olan bu eser, suyun akışkanlığını ve renklerin dansını piksel ortamına taşıyor. Sanatçı, elle çizilen her çizgiyi dijital ortamda yeniden yorumlayarak, geleneksel sanat formlarının çağdaş versiyonlarını yaratmayı amaçlıyor. Eserin sakin enerjisi, izleyiciyi derin bir meditasyon haline davet ediyor.',
    image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800',
    year: 2024,
    medium: 'Dijital Resim',
    dimensions: '4000 x 3000 piksel',
    artistId: '2',
    categoryId: '2',
    featured: false,
  },
  {
    id: '13',
    title: 'Kaos ve Düzen',
    description: 'Fraktal geometri ve kaos teorisinden ilham alan generative sanat eseri. Bu çalışma, doğadaki karmaşık sistemlerin matematiksel güzelliğini keşfediyor. Her iterasyon, kendini tekrar eden ancak hiçbir zaman aynı olmayan desenleri ortaya çıkarıyor. Mandelbrot setlerinden ilham alan algoritma, sonsuzun içindeki düzeni görselleştiriyor ve izleyiciyi mikro ve makro kozmos arasında bir yolculuğa çıkarıyor.',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800',
    year: 2024,
    medium: 'Generative Sanat',
    dimensions: '5000 x 5000 piksel',
    artistId: '5',
    categoryId: '5',
    galleryId: '1',
    featured: true,
  },
  {
    id: '14',
    title: 'Işık ve Gölge Diyaloğu',
    description: 'Kontrastların gücünü keşfeden siyah-beyaz fotoğraf. Minimalist bir sokak sahnesinde, güneş ışığı ve gölgeler dramatik bir kompozisyon yaratıyor. Bu kare, gündelik hayatın sıradan anlarında saklı olan olağanüstü güzelliği ortaya çıkarıyor. Yüksek kontrastlı tonlama, eserin timeless kalitesini artırıyor ve izleyiciyi derinlemesine düşünmeye davet ediyor.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800',
    year: 2023,
    medium: 'Dijital Fotoğraf',
    dimensions: '4500 x 3000 piksel',
    artistId: '4',
    categoryId: '4',
    featured: false,
  },
  {
    id: '15',
    title: 'Enerji Alanları',
    description: 'Parlak neon renkler ve dinamik formlarla oluşturulan soyut dijital kompozisyon. Bu eser, görünmez enerji alanlarını ve elektromanyetik dalgaları görselleştiriyor. Bilimsel görselleştirmelerden ilham alan çalışma, görünmeyen güçlerin dünyamızı nasıl şekillendirdiğini sanatsal bir dille anlatıyor. Canlı renkler ve akışkan formlar, evrenin dinamik ve sürekli değişen doğasını yansıtıyor.',
    image: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800',
    year: 2024,
    medium: 'Dijital Sanat',
    dimensions: '4000 x 6000 piksel',
    artistId: '6',
    categoryId: '1',
    galleryId: '1',
    featured: true,
  },
];

export const galleries: Gallery[] = [
  {
    id: '1',
    name: 'Eliyte™ Ana Koleksiyon',
    description: 'Türkiye\'nin ilk kapsamlı dijital sanat koleksiyonu. Yeni yetişen ve köklü sanatçıların tüm sanat türlerinden eserlerini sergiliyor. 2020 yılından bu yana, çağdaş sanatın en yenilikçi örneklerini bir araya getirerek sanat dünyasına yeni bir bakış açısı sunuyoruz.',
    location: 'İstanbul, Türkiye',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800',
    featuredArtworks: ['1', '2', '6', '7', '13', '15'],
  },
  {
    id: '2',
    name: 'Eliyte™ Heykel Koleksiyonu',
    description: 'Geleneksel ve çağdaş heykellere adanmış özel koleksiyon. Fiziksel ve dijital formların buluşma noktası. Bu koleksiyon, heykel sanatının geleneksel sınırlarını zorlayan ve yeni teknolojilerle buluşturan eserlere ev sahipliği yapıyor.',
    location: 'İstanbul, Türkiye',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    featuredArtworks: ['4', '11'],
  },
  {
    id: '3',
    name: 'Eliyte™ Fotoğraf Koleksiyonu',
    description: 'Çağdaş fotoğraf sanatının en etkileyici örneklerini barındıran özel koleksiyon. Kentsel peyzajlardan portre çalışmalarına, belgesel fotoğrafçılıktan sanat fotoğrafçılığına uzanan geniş bir yelpaze.',
    location: 'İstanbul, Türkiye',
    image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800',
    featuredArtworks: ['7', '9', '14'],
  },
];

// Helper functions to get related data
export const getArtistById = (id: string): Artist | undefined => {
  return artists.find((artist) => artist.id === id);
};

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};

export const getGalleryById = (id: string): Gallery | undefined => {
  return galleries.find((gallery) => gallery.id === id);
};

export const getArtworksByArtist = (artistId: string): Artwork[] => {
  return artworks.filter((artwork) => artwork.artistId === artistId);
};

export const getArtworksByCategory = (categoryId: string): Artwork[] => {
  return artworks.filter((artwork) => artwork.categoryId === categoryId);
};

export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter((artwork) => artwork.featured);
};

export const getRelatedArtworks = (artworkId: string, limit: number = 3): Artwork[] => {
  const artwork = getArtworkById(artworkId);
  if (!artwork) return [];

  // Get artworks from same category or by same artist, excluding current artwork
  return artworks
    .filter((a) => a.id !== artworkId && (a.categoryId === artwork.categoryId || a.artistId === artwork.artistId))
    .slice(0, limit);
};

// Testimonials data
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Elif Yıldız',
    role: 'Sanat Koleksiyoncusu',
    content: 'Eliyte™ ile tanıştığımdan beri koleksiyonuma muhteşem eserler ekledim. Platformun profesyonelliği ve sanatçıların kalitesi gerçekten etkileyici. Her eserin arkasındaki hikaye ve sanatçıyla doğrudan iletişim kurabilmek paha biçilemez.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ahmet Kara',
    role: 'Dijital Sanatçı',
    content: 'Sanatçı olarak Eliyte\'nin bana sağladığı görünürlük inanılmaz. Eserlerimi uluslararası bir kitleye sunabilmek ve gerçek değerini bilen koleksiyoncularla buluşmak kariyer dönüm noktam oldu. Müşteri hizmetleri de her zaman yardımcı ve profesyonel.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
  },
  {
    id: '3',
    name: 'Selin Aydın',
    role: 'İç Mimar',
    content: 'Müşterilerim için özel sanat eserleri ararken Eliyte\'yi keşfettim. Geniş koleksiyon ve çeşitlilik sayesinde her projede mükemmel eserleri bulabiliyorum. Ayrıca platformun kullanımı çok kolay ve sezgisel.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
  },
  {
    id: '4',
    name: 'Burak Özkan',
    role: 'Galeri Sahibi',
    content: 'Eliyte™, dijital sanat dünyasında gerçek bir oyun değiştirici. Platformdaki kürasyon kalitesi ve sanatçı çeşitliliği, geleneksel galerilere rakip olabilecek seviyede. Özellikle genç yetenekleri keşfetmek için harika bir kaynak.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    rating: 5,
  },
];

// Statistics data
export interface Statistic {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export const statistics: Statistic[] = [
  {
    id: '1',
    label: 'Toplam Eser',
    value: '500+',
    icon: '🎨',
  },
  {
    id: '2',
    label: 'Kayıtlı Sanatçı',
    value: '150+',
    icon: '👨‍🎨',
  },
  {
    id: '3',
    label: 'Mutlu Koleksiyoncu',
    value: '1,200+',
    icon: '😊',
  },
  {
    id: '4',
    label: 'Ülke',
    value: '45+',
    icon: '🌍',
  },
];
