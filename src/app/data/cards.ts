export interface DetailSlot {
  title?: string;
  text?: string;
  img?: string;
}

export interface CardData {
  id: number;
  slug: string;
  col: string;
  bg: string;
  border: string;
  logo?: boolean;
  noClick?: boolean;
  title?: string;
  text?: string;
  img?: string;
  accent: string;
  dark: string;
  mid: string;
  // Content for each slot in the detail page grid (slots 0–9, slot 3 is "Home")
  detail: DetailSlot[];
}

export const CARDS: CardData[] = [
  {
    id: 1,
    slug: "samella",
    col: "col-span-2 row-span-2",
    bg: "bg-[#1a0a2e]",
    border: "border-[#6b21a8]/40",
    accent: "#a78bfa",
    dark: "#1a0a2e",
    mid: "#2d1b4e",
    logo: true,
    noClick: true,
    detail: [
      // slot 0 — hero
      {
        title: "SammellA Creatives",
        text: "Estudio creativo dedicado al diseño visual, la identidad de marca y experiencias digitales únicas.",
        img: "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?w=800&h=600&fit=crop&auto=format",
      },
      // slot 1
      {
        title: "Nuestra misión",
        text: "Transformar ideas en experiencias visuales memorables que conecten marcas con su audiencia.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
      },
      // slot 2
      {
        title: "Diseño & Marca",
        text: "Identidad visual, logotipos, sistemas de diseño y guías de estilo para marcas que quieren destacar.",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop&auto=format",
      },
      // slot 3 → Home (se omite, es el botón de volver)
      {},
      // slot 4
      {
        title: "Proyectos recientes",
        text: "Más de 40 proyectos entregados en 2024, desde startups hasta marcas consolidadas.",
        img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=300&fit=crop&auto=format",
      },
      // slot 5
      {
        title: "Equipo creativo",
        text: "Somos 6 diseñadores apasionados por el detalle y la innovación visual.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format",
      },
      // slot 6
      {
        title: "Motion & Video",
        text: "Animaciones, motion graphics y piezas audiovisuales para redes y campañas digitales.",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop&auto=format",
      },
      // slot 7
      {
        title: "Contáctanos",
        text: "hola@samella.studio · Madrid, España · Disponibles para proyectos globales.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop&auto=format",
      },
      // slot 8
      {
        title: "UX / UI",
        text: "Interfaces digitales centradas en el usuario, con foco en usabilidad y estética.",
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&auto=format",
      },
      // slot 9
      {
        title: "Awards 2024",
        text: "Reconocidos por Awwwards, Behance y Communication Arts este año.",
        img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 2,
    slug: "estetica-oscura",
    col: "col-span-1 row-span-1",
    bg: "bg-[#2d1b4e]",
    border: "border-[#a78bfa]/30",
    title: "2 Books",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://res.cloudinary.com/dtebuat4w/image/upload/q_auto/f_auto/v1782019059/9780857632890_1_wqutg5.jpg",
    accent: "#a78bfa",
    dark: "#2d1b4e",
    mid: "#3b1f6e",
    detail: [
      {
        title: "Books",
        text: "Una exploración profunda de la belleza que se esconde en las sombras y los tonos profundos.",
        img: "https://res.cloudinary.com/dtebuat4w/image/upload/q_auto/f_auto/v1782019223/libros_uxgrtp.jpg",
      },
      {
        title: "El Principito",
        text: "El contraste entre lo oscuro y lo luminoso crea composiciones de alto impacto visual.",
        img: "https://res.cloudinary.com/dtebuat4w/image/upload/q_auto/f_auto/v1782019431/PKUYI8yaD_1256x620__1_ndqdnb.jpg",
      },
      {
        title: "My HeadTeacher is a Vampire Rat!",
        text: "Púrpuras profundos, negros absolutos y destellos de luz añil que definen el estilo.",
        img: "https://res.cloudinary.com/dtebuat4w/image/upload/q_auto/f_auto/v1782019314/download_zr375z.webp",
      },
      {},
      {
        title: "The very hungry Caterpillar",
        text: "Capas superpuestas de textura crean la sensación de profundidad característica.",
        img: "https://res.cloudinary.com/dtebuat4w/image/upload/q_auto/f_auto/v1782020053/1_VF--Dsj1fuIqix9WAszcnQ_m18v4c.jpg",
      },
      {
        title: "vgvguvjhjhvjhvjvg",
        text: "Menos es más cuando cada elemento tiene peso visual propio.",
        img: "",
      },
      {
        title: "Gruffalo",
        text: "Estructuras urbanas bañadas en penumbra, redefiniendo la belleza de lo cotidiano.",
        img: "https://res.cloudinary.com/dtebuat4w/image/upload/q_auto/f_auto/v1782019563/81gehaUeZ5L._AC_UL600_SR600_600__diqvi8.jpg",
      },
      {
        title: "Spot, dónde estás ?",
        text: "La tendencia estética que fusiona lo académico con la oscuridad romántica y el misterio.",
        img: "https://res.cloudinary.com/dtebuat4w/image/upload/q_auto/f_auto/v1782105305/images-2_lqae90.webp",
      },
      {
        title: "jvbkbkj hjnlnlklñmñlnkln",
        text: "La cámara revela lo que el ojo no puede ver: mundos ocultos en la oscuridad.",
        img: "",
      },
      {
        title: "jhkjkjbkjbkjbkjbk",
        text: "Siluetas recortadas contra fondos luminosos, el drama visual en su máxima expresión.",
        img: "",
      },
      {
        title: "ñkñjkfghvnm njlbkhkbl",
        text: "Siluetas recortadas contra fondos luminosos, el drama visual en su máxima expresión.",
        img: "",
      },
    ],
  },
  {
    id: 3,
    slug: "noche-neon",
    col: "col-span-1 row-span-2",
    bg: "bg-[#6b21a8]",
    border: "border-[#c4b5fd]/30",
    title: "3 Music",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600&h=400&fit=crop&auto=format",
    accent: "#c4b5fd",
    dark: "#3b0764",
    mid: "#6b21a8",
    detail: [
      {
        title: "Music",
        text: "Las ciudades despiertan de noche con una paleta de neón rosa que todo lo transforma.",
        img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Cyberpunk city",
        text: "Calles mojadas que reflejan luces de neón en un espectáculo visual perpetuo.",
        img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Letreros luminosos",
        text: "Los letreros de neón llevan décadas dibujando la noche urbana con su luz cálida y vibrante.",
        img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "Reflejo en el asfalto",
        text: "La lluvia convierte las calles en espejos de color donde la realidad se duplica.",
        img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Vida nocturna",
        text: "La ciudad nunca duerme; solo cambia de cara cuando el sol se esconde.",
        img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Neon portraits",
        text: "Retratos bañados en luz artificial de colores, donde cada tono revela una emoción.",
        img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Tokyo after dark",
        text: "La capital japonesa, epicentro mundial del neón y la cultura nocturna urbana.",
        img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Vaporwave",
        text: "La estética retrofuturista que captura la nostalgia del mañana que nunca llegó.",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Pink hour",
        text: "Ese instante mágico al anochecer donde el cielo se tiñe de todos los rosas posibles.",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Pink hour",
        text: "Ese instante mágico al anochecer donde el cielo se tiñe de todos los rosas posibles.",
        img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=300&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 4,
    slug: "kawaii-pastel",
    col: "col-span-1 row-span-1",
    bg: "bg-[#ec4899]",
    border: "border-[#f9a8d4]/40",
    title: "4 Crafting",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    img: "https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?w=600&h=400&fit=crop&auto=format",
    accent: "#f9a8d4",
    dark: "#9d174d",
    mid: "#ec4899",
    detail: [
      {
        title: "Crafting",
        text: "El universo adorable de los pasteles suaves y la cultura pop japonesa en su máxima expresión.",
        img: "https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Dulce paleta",
        text: "Rosas, lavandas y menta se combinan en composiciones que evoca dulzura y ternura.",
        img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Sanrio universe",
        text: "Hello Kitty, Kuromi, Cinnamoroll: iconos que definen generaciones de cultura kawaii.",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=300&fit=crop&auto=format",
      },
      {},
      {
        title: "Harajuku style",
        text: "El barrio de Tokio que se convirtió en la capital mundial de la moda más extravagante y colorida.",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Pastel fashion",
        text: "Colores que no gritan sino que susurran, creando looks etéreos e inesperadamente poderosos.",
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Cotton candy world",
        text: "Un mundo donde todo parece comestible: algodón de azúcar, merengues y nubes de colores.",
        img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Ilustración kawaii",
        text: "Personajes de ojos grandes y formas redondeadas que conquistan corazones sin esfuerzo.",
        img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Aesthetic room",
        text: "Habitaciones decoradas con luz rosada, plushies y pósters que son pura magia visual.",
        img: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Dreamy baking",
        text: "Pasteles de varios pisos, macarons y galletas que son arte comestible de alta estética.",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Dreamy baking",
        text: "Pasteles de varios pisos, macarons y galletas que son arte comestible de alta estética.",
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 5,
    slug: "flores-oscuras",
    col: "col-span-2 row-span-1",
    bg: "bg-[#2d1b4e]",
    border: "border-[#a78bfa]/30",
    title: "5 Tales",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    img: "https://res.cloudinary.com/dtebuat4w/image/upload/q_auto/f_auto/v1782107132/copy_of_images_r2u0pc.jpg",
    accent: "#a78bfa",
    dark: "#2d1b4e",
    mid: "#3b1f6e",
    detail: [
      {
        title: "Tales",
        text: "Botanica noir: la belleza misteriosa de las flores cuando pierden su luz y ganan sombra.",
        img: "https://images.unsplash.com/photo-1530916123588-1e1f619bb71e?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Sant Gordi",
        text: "Símbolo de elegancia extrema, las rosas oscuras comunican lo que las palabras no pueden.",
        img: "https://images.unsplash.com/photo-1530916123588-1e1f619bb71e?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Botanica morada",
        text: "Lavandas, iris y violetas: la familia púrpura del jardín que inspira misterio y calma.",
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=300&fit=crop&auto=format",
      },
      {},
      {
        title: "Dried flowers",
        text: "Las flores secas conservan su alma aunque pierdan el color: la belleza en la decadencia.",
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Macro botánica",
        text: "De cerca, cada pétalo revela un universo de texturas y patrones imposibles de ignorar.",
        img: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Floral noir",
        text: "Bodegones florales con atmósfera tenebrosa que evocan pinturas flamencas del siglo XVII.",
        img: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Jardín secreto",
        text: "Rincones ocultos donde la naturaleza salvaje crece sin que nadie la peine ni la dome.",
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Peonías de noche",
        text: "Las peonías al caer la noche adquieren una presencia dramática e inconfundible.",
        img: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Pressed petals",
        text: "El arte de prensar flores: convertir lo efímero en permanente con papel y tiempo.",
        img: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Pressed petals",
        text: "El arte de prensar flores: convertir lo efímero en permanente con papel y tiempo.",
        img: "https://images.unsplash.com/photo-1530916123588-1e1f619bb71e?w=800&h=600&fit=crop&auto=format",

      },
    ],
  },
  {
    id: 6,
    slug: "galaxia",
    col: "col-span-1 row-span-1",
    bg: "bg-[#1a0a2e]",
    border: "border-[#6b21a8]/40",
    title: "6 Bugs",
    text: "Nam libero tempore cum soluta nobis est eligendi optio.",
    img: "https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?w=600&h=400&fit=crop&auto=format",
    accent: "#818cf8",
    dark: "#0f0520",
    mid: "#1a0a2e",
    detail: [
      {
        title: "Bugs",
        text: "El universo pintado en violeta: nebulosas, cúmulos estelares y el vacío que todo lo conecta.",
        img: "https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Nebulosas",
        text: "Nubes de gas y polvo interestelar donde nacen las estrellas, pintadas en violeta y azul.",
        img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Vía Láctea",
        text: "Nuestra galaxia espiral, un río de 200 mil millones de soles que atraviesa el cielo nocturno.",
        img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "Astrofotografía",
        text: "Largas exposiciones que capturan lo que el ojo no puede: la danza lenta de las estrellas.",
        img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Cosmos infinito",
        text: "Cada punto de luz es un sol con sus propios mundos: la inmensidad que nos da perspectiva.",
        img: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Auroras boreales",
        text: "El espectáculo de luz más grandioso de la Tierra, donde el cosmos toca la atmósfera.",
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Planetas lejanos",
        text: "Exoplanetas de colores imposibles, mundos que desafían nuestra imaginación más salvaje.",
        img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Luna llena",
        text: "El satélite que ha guiado a la humanidad desde el principio de los tiempos, siempre presente.",
        img: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Polvo de estrellas",
        text: "Somos literalmente polvo de estrellas: átomos forjados en el corazón de soles extintos.",
        img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Polvo de estrellas",
        text: "Somos literalmente polvo de estrellas: átomos forjados en el corazón de soles extintos.",
        img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 7,
    slug: "rosa-oscura",
    col: "col-span-1 row-span-2",
    bg: "bg-[#f43f5e]",
    border: "border-[#fda4af]/30",
    title: "7 Mini Chef",
    text: "Temporibus autem quibusdam et aut officiis debitis rerum.",
    img: "https://res.cloudinary.com/dtebuat4w/image/upload/v1782018442/1781913360551_vohkl9.jpg",
    accent: "#fda4af",
    dark: "#881337",
    mid: "#f43f5e",
    detail: [
      {
        title: "Mini Chef",
        text: "El rosa cuando abandona su inocencia y abraza la profundidad: intenso, dramático y seductor.",
        img: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Rosas carmesí",
        text: "El rojo que se inclina hacia el rosa: pasión y ternura fundidas en un solo color.",
        img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Terciopelo oscuro",
        text: "La textura del terciopelo en tonos burdeos y granate: táctil, opulenta e irresistible.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "Dark romance",
        text: "Una estética que mezcla el romance gótico con el lujo decadente y lo hace irresistible.",
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Moda oscura",
        text: "Vestidos estructurados en rojo oscuro, negro y vino: el poder de vestir con intensidad.",
        img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Fotografía íntima",
        text: "Retratos con luz cálida y fondo oscuro que capturan la vulnerabilidad más poderosa.",
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Bodegón oscuro",
        text: "Frutas, telas y objetos dispuestos como en una pintura flamenca: drama sobre la mesa.",
        img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Luz de vela",
        text: "La llama que todo lo suaviza y dramatiza a la vez: intimidad y misterio en cada destello.",
        img: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Pétalos caídos",
        text: "La caída de un pétalo rojo: el instante fugaz que contiene toda la belleza del mundo.",
        img: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Pétalos caídos",
        text: "La caída de un pétalo rojo: el instante fugaz que contiene toda la belleza del mundo.",
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&auto=format",
       },
    ],
  },
  {
    id: 8,
    slug: "neon-lights",
    col: "col-span-2 row-span-1",
    bg: "bg-[#3b0764]",
    border: "border-[#c4b5fd]/30",
    title: "8 Experiments",
    text: "Itaque earum rerum hic tenetur a sapiente delectus ut aut.",
    img: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=600&h=400&fit=crop&auto=format",
    accent: "#c4b5fd",
    dark: "#1e0038",
    mid: "#3b0764",
    detail: [
      {
        title: "Experiments",
        text: "Tubos de gas que dibujan palabras y formas en la oscuridad: arte que también ilumina.",
        img: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Signs & letters",
        text: "El alfabeto de neón: cada letra es una escultura luminosa con carácter propio.",
        img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Instalaciones de luz",
        text: "Artistas contemporáneos que usan el neón como pincel para escribir sobre el espacio.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "Retrato neón",
        text: "Rostros bañados en luz de colores artificiales: identidad reescrita en espectro de frecuencia.",
        img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Bar nocturno",
        text: "Ese rincón perfecto donde el neón de la barra crea un ambiente de película noir.",
        img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Callejones brillantes",
        text: "Los callejones más fotogénicos del mundo están pintados de neón y lluvia nocturna.",
        img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Neón en estudio",
        text: "El neón como prop fotográfico: versatilidad creativa para retratos y still life.",
        img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Open 24h",
        text: "El cartel de neón más universal: promesa de que siempre habrá algo encendido esperándote.",
        img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Física del neón",
        text: "Electrones excitados que liberan fotones: la poesía cuántica que ilumina nuestras noches.",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Física del neón",
        text: "Electrones excitados que liberan fotones: la poesía cuántica que ilumina nuestras noches.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 9,
    slug: "aesthetic",
    col: "col-span-1 row-span-1",
    bg: "bg-[#a78bfa]",
    border: "border-[#ede9fe]/40",
    title: "9",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
    img: "https://images.unsplash.com/photo-1552858725-a19e7fcd3ac4?w=600&h=400&fit=crop&auto=format",
    accent: "#ede9fe",
    dark: "#4c1d95",
    mid: "#a78bfa",
    detail: [
      {
        title: "9",
        text: "La cultura visual que convirtió cada rincón de la vida cotidiana en una oportunidad de belleza.",
        img: "https://images.unsplash.com/photo-1552858725-a19e7fcd3ac4?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Lo-fi vibes",
        text: "Música suave, lluvia en la ventana y una taza de té: el aesthetic de la productividad relajada.",
        img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Dreamy rooms",
        text: "Habitaciones curadas con luces de hada, plantas y colores suaves que invitan al descanso.",
        img: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "Flat lay art",
        text: "El arte de disponer objetos sobre superficies lisas creando composiciones visualmente perfectas.",
        img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Cottagecore",
        text: "Campos floridos, cestas de mimbre y tardes leyendo bajo un árbol: vuelta a la naturaleza.",
        img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Vintage analog",
        text: "Cámaras de película, cassettes y pósters de los 90: la nostalgia como lenguaje visual.",
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Still life",
        text: "La quietud como sujeto: objetos simples fotografiados con intención crean mundos completos.",
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Morning ritual",
        text: "La primera hora del día convertida en ceremonial: café, luz suave y silencio dorado.",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Color palettes",
        text: "Explorar combinaciones de color como si fueran idiomas: cada paleta cuenta una historia.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Color palettes",
        text: "Explorar combinaciones de color como si fueran idiomas: cada paleta cuenta una historia.",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 10,
    slug: "sakura",
    col: "col-span-1 row-span-1",
    bg: "bg-[#2d1b4e]",
    border: "border-[#a78bfa]/30",
    title: "10 Painting",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem.",
    img: "https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?w=600&h=400&fit=crop&auto=format",
    accent: "#f9a8d4",
    dark: "#2d1b4e",
    mid: "#4a2070",
    detail: [
      {
        title: "Painting",
        text: "Los cerezos japoneses en flor bajo la luna: un espectáculo efímero de belleza sin igual.",
        img: "https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Hanami",
        text: "La tradición japonesa de contemplar los cerezos en flor: fiesta, comunidad y belleza efímera.",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Pétalos en el viento",
        text: "Cada pétalo que cae es un recordatorio de que la belleza más intensa es también la más breve.",
        img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop&auto=format",
      },
      {},
      {
        title: "Kimono & sakura",
        text: "La vestimenta tradicional japonesa y los cerezos: una combinación que define una cultura.",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Templos japoneses",
        text: "Arquitectura milenaria enmarcada por nubes rosas de sakura: el pasado y la naturaleza.",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Jardines zen",
        text: "Arenas rastrilladas, piedras y cerezos: la serenidad como arte en su forma más pura.",
        img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Macro sakura",
        text: "De cerca, cada flor de cerezo es un universo de pétalos perfectamente dispuestos.",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Avenidas floridas",
        text: "Túneles naturales de cerezos en flor que convierten un paseo en una experiencia mágica.",
        img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Mono no aware",
        text: "El concepto japonés de la belleza en la impermanencia: todo es más bello porque acaba.",
        img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Mono no aware",
        text: "El concepto japonés de la belleza en la impermanencia: todo es más bello porque acaba.",
        img: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&h=300&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 11,
    slug: "cristal",
    col: "col-span-2 row-span-2",
    bg: "bg-[#ec4899]",
    border: "border-[#f9a8d4]/40",
    title: "11 Crystals",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    img: "https://images.unsplash.com/photo-1677249490921-3246e81f19e3?w=600&h=400&fit=crop&auto=format",
    accent: "#f9a8d4",
    dark: "#9d174d",
    mid: "#ec4899",
    detail: [
      {
        title: "Crystals",
        text: "Gemas y minerales en sus colores más profundos: la joyería de la tierra en estado bruto.",
        img: "https://images.unsplash.com/photo-1677249490921-3246e81f19e3?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Amatista",
        text: "El cuarzo morado que ha fascinado a civilizaciones enteras con su brillo interior único.",
        img: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Cristal de roca",
        text: "Puro como el agua, duro como el tiempo: el cristal de roca es naturaleza en su forma perfecta.",
        img: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "Turmalina negra",
        text: "Protectora por naturaleza, la turmalina negra absorbe la energía negativa con elegancia.",
        img: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Labradorita",
        text: "La piedra que guarda un universo de colores iridiscentes dentro de su aparente oscuridad.",
        img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Geoda interior",
        text: "Por fuera, una roca ordinaria; por dentro, una catedral de cristales centelleantes.",
        img: "https://images.unsplash.com/photo-1493244040629-496f6d136cc4?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Cuarzo rosa",
        text: "La piedra del amor y la ternura: su tonalidad suave esconde una energía transformadora.",
        img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Obsidiana",
        text: "Vidrio volcánico negro que los pueblos antiguos usaban como espejo para ver el alma.",
        img: "https://images.unsplash.com/photo-1518818608552-195ed130cdf4?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Mineral collection",
        text: "Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina.",
        img: "https://images.unsplash.com/photo-1493244040629-496f6d136cc4?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "prueba",
        text: "Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. Coleccionar minerales es mapear la historia geológica del planeta en una sola vitrina. ",
        img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 12,
    slug: "gotico-pastel",
    col: "col-span-1 row-span-1",
    bg: "bg-[#6b21a8]",
    border: "border-[#c4b5fd]/30",
    title: "12 Dancing",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    img: "https://images.unsplash.com/photo-1509815206612-1b56d36ebecb?w=600&h=400&fit=crop&auto=format",
    accent: "#c4b5fd",
    dark: "#3b0764",
    mid: "#6b21a8",
    detail: [
      {
        title: "Dancing",
        text: "Cuando la oscuridad gótica descubre los pasteles: una fusión inesperada que conquista todo.",
        img: "https://images.unsplash.com/photo-1509815206612-1b56d36ebecb?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Pastel goth fashion",
        text: "Tutús de tul lila, medias de calaveras y tacones de plataforma: la contradicción hecha moda.",
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Cementerios floridos",
        text: "Camposantos victorianos cubiertos de flores silvestres: la muerte nunca fue tan hermosa.",
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "Brujas modernas",
        text: "La nueva brujería estética: cristales, velas, flores secas y mucho, mucho lavanda.",
        img: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Arquitectura gótica",
        text: "Catedrales con vitrales de colores pasteles: cuando la piedra medieval sueña en color.",
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Spooky cute",
        text: "Esqueletos con lazos rosas, fantasmas de purpurina: el terror se vuelve adorable.",
        img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Dark fairy tale",
        text: "Los cuentos de hadas en su versión oscura: bosques de niebla, torres y vestidos de ensueño.",
        img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Lunar aesthetic",
        text: "La luna como eje de una espiritualidad visual que combina misticismo y color pastel.",
        img: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Victorian pastel",
        text: "La era victoriana reimaginada en tonos suaves: encajes, corsés y flores en lavanda.",
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Victorian pastel",
        text: "La era victoriana reimaginada en tonos suaves: encajes, corsés y flores en lavanda.",
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 13,
    slug: "samella-creatives",
    col: "col-span-1 row-span-1",
    bg: "bg-[#1a0a2e]",
    border: "border-[#a78bfa]/50",
    title: "13 Golf",
    text: "Estudio creativo de diseño, identidad y experiencias digitales.",
    img: "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?w=600&h=400&fit=crop&auto=format",
    accent: "#a78bfa",
    dark: "#1a0a2e",
    mid: "#2d1b4e",
    detail: [
      {
        title: "Golf",
        text: "Estudio creativo dedicado al diseño visual, identidad de marca y experiencias digitales únicas.",
        img: "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "Identidad de marca",
        text: "Logotipos, sistemas de color y tipografía que comunican la esencia de cada cliente.",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Diseño editorial",
        text: "Revistas, libros y publicaciones que convierten el contenido en una experiencia visual.",
        img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "UX / UI Design",
        text: "Interfaces digitales centradas en el usuario: usables, accesibles y estéticamente impecables.",
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Motion & Video",
        text: "Animaciones y motion graphics que dan vida a las marcas en pantalla y en redes.",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Fotografía creativa",
        text: "Dirección de arte y fotografía de producto, editorial y lifestyle para marcas con personalidad.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Nuestro proceso",
        text: "Descubrimiento → Concepto → Diseño → Refinamiento → Entrega. Siempre contigo en cada paso.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Awards & Reconocimientos",
        text: "Reconocidos por Awwwards, Behance y Communication Arts. Más de 40 proyectos en 2024.",
        img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Contáctanos",
        text: "hola@samella.studio · Madrid, España · Disponibles para proyectos en todo el mundo.",
        img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Contáctanos",
        text: "hola@samella.studio · Madrid, España · Disponibles para proyectos en todo el mundo.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&auto=format",
      },
    ],
  },
  {
    id: 14,
    slug: "xx universo-kuromi",
    col: "col-span-1 row-span-1",
    bg: "bg-[#3b0764]",
    border: "border-[#c4b5fd]/30",
    title: "14",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    img: "https://images.unsplash.com/photo-1613327986042-63d4425a1a5d?w=600&h=400&fit=crop&auto=format",
    accent: "#c4b5fd",
    dark: "#1e0038",
    mid: "#3b0764",
    detail: [
      {
        title: "14",
        text: "El mundo completo de Kuromi: oscuro, juguetón, rebelde y absolutamente adorable a la vez.",
        img: "https://images.unsplash.com/photo-1613327986042-63d4425a1a5d?w=800&h=600&fit=crop&auto=format",
      },
      {
        title: "My Melody vs Kuromi",
        text: "La rivalidad más icónica de Sanrio: la dulzura rosa versus la actitud oscura y punk.",
        img: "https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Kuromi aesthetic",
        text: "Cráneos con lazos, notas musicales y corazones negros: el aesthetic de la villana favorita.",
        img: "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?w=400&h=600&fit=crop&auto=format",
      },
      {},
      {
        title: "Merch & colección",
        text: "Mochilas, plushies, cuadernos y tazas: el universo de Kuromi que invade cada espacio vital.",
        img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Fan art",
        text: "La comunidad global de fans que reinterpreta a Kuromi en millones de estilos distintos.",
        img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Kuromi room",
        text: "Habitaciones decoradas en negro, morado y rosa: el santuario perfecto para fans de Kuromi.",
        img: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "Sanrio history",
        text: "Desde 1962, Sanrio lleva creando personajes que conectan con lo más tierno de cada persona.",
        img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=300&fit=crop&auto=format",
      },
      {
        title: "Punk kawaii",
        text: "La fusión que nadie esperaba y todos necesitaban: actitud punk con estética adorablemente suave.",
        img: "https://images.unsplash.com/photo-1509815206612-1b56d36ebecb?w=400&h=300&fit=crop&auto=format",
      },
      {
        title: "Dark & cute",
        text: "Kuromi demuestra que puedes ser oscura y adorable al mismo tiempo, sin contradicción.",
        img: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=400&h=600&fit=crop&auto=format",
      },
      {
        title: "10 xxxxxxxx",
        text: "Kuromi demuestra que puedes ser oscura y adorable al mismo tiempo, sin contradicción.",
        img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&auto=format",
      },
    ],
  },
];
