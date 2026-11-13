export type TripCategory='Voyages'|'Omra'|'Hajj'|'Circuits';
export type Trip={id:number;title:string;destination:string;country:string;category:TripCategory;days:number;price:number;date:string;image:string;highlights:string[];description:string;transport:string;origin:string};
const im=(x:string)=>`https://images.unsplash.com/${x}?auto=format&fit=crop&w=1100&q=80`;
const seeds:[string,string,string,TripCategory,number,number,string,string,string[]][]=[
 ['Bali, l’île des rêves','Bali','Indonésie','Voyages',9,15900,'2027-03-15','photo-1537996194471-e657df975ab4',['Ubud et ses rizières','Temples traditionnels','Plages tropicales']],
 ['Istanbul, entre deux continents','Istanbul','Turquie','Voyages',6,6900,'2027-02-20','photo-1541432901042-2d8bd64b4a9b',['Bosphore','Grand Bazar','Monuments historiques']],
 ['Escapade romantique à Paris','Paris','France','Voyages',5,8900,'2027-04-10','photo-1502602898657-3e91760cbb34',['Tour Eiffel','Montmartre','Louvre']],
 ['Dubaï, élégance et démesure','Dubaï','Émirats arabes unis','Voyages',7,12900,'2027-05-05','photo-1512453979798-5ea266f8880c',['Burj Khalifa','Désert','Marina']],
 ['Omra Confort — Makkah & Madinah','Makkah & Madinah','Arabie saoudite','Omra',14,19900,'2027-01-12','photo-1564769625905-50e93615e769',['Makkah','Madinah','Programme accompagné']],
 ['Omra Premium — Sérénité','Makkah & Madinah','Arabie saoudite','Omra',12,24900,'2027-02-03','photo-1564769625905-50e93615e769',['Visites guidées','Hébergement','Transferts']],
 ['Hajj — Programme découverte','Makkah','Arabie saoudite','Hajj',21,79500,'2027-05-15','photo-1564769625905-50e93615e769',['Informations pratiques','Préparation','Programme indicatif']],
 ['Désert & Kasbahs du Maroc','Merzouga','Maroc','Circuits',6,4900,'2027-03-10','photo-1509316785289-025f5b846b35',['Nuit désert','Kasbahs','Vallée du Dadès']],
 ['Villes impériales du Maroc','Fès & Marrakech','Maroc','Circuits',8,6400,'2027-04-16','photo-1597212618440-806262de4f6b',['Fès','Marrakech','Meknès']],
 ['Cap sur Chefchaouen','Chefchaouen','Maroc','Circuits',4,2900,'2027-03-22','photo-1539020140153-e479b8c22e70',['Ruelles bleues','Montagnes du Rif','Artisanat']],
 ['La magie de la Cappadoce','Cappadoce','Turquie','Voyages',7,10400,'2027-04-05','photo-1570939274717-7eda259b50ed',['Paysages uniques','Villages','Excursions']],
 ['Évasion sur les côtes','Agadir','Maroc','Circuits',5,3900,'2027-05-08','photo-1500375592092-40eb2168fd21',['Plages','Excursions','Détente']],
 ['Rome & la dolce vita','Rome','Italie','Voyages',5,7900,'2027-06-12','photo-1552832230-c0197dd311b5',['Colisée','Vatican','Fontaine de Trevi']],
 ['Londres, city break','Londres','Royaume-Uni','Voyages',5,8900,'2027-07-03','photo-1513635269975-59663e0ac1ad',['Big Ben','Tower Bridge','Hyde Park']],
 ['Séjour à Barcelone','Barcelone','Espagne','Voyages',5,5900,'2027-06-20','photo-1539037116277-4db20889f2d4',['Sagrada Família','Parc Güell','Plages']],
 ['Lisbonne, ville de lumière','Lisbonne','Portugal','Voyages',5,6200,'2027-08-04','photo-1555881400-74d7acaacd8b',['Alfama','Belém','Tramways historiques']]
];
export const trips:Trip[]=seeds.map((s,i)=>({id:i+1,title:s[0],destination:s[1],country:s[2],category:s[3],days:s[4],price:s[5],date:s[6],image:im(s[7]),highlights:s[8],description:`Découvrez ${s[1]} à travers un programme inspirant de ${s[4]} jours. Les étapes et les services sont présentés à titre indicatif pour cette démonstration.`,transport:['Royal Air Maroc','Air Arabia','Ryanair','Emirates','Saudia','Saudia','Saudia','Autocar touristique','Autocar touristique','Autocar touristique','Turkish Airlines','Autocar touristique','Ryanair','Royal Air Maroc','Air Arabia','Ryanair'][i],origin:'Départ du Maroc'}));
export const money=(x:number)=>new Intl.NumberFormat('fr-MA').format(x)+' DH';
export const dateFr=(s:string)=>new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(s+'T00:00:00Z'));
