const poster = (id,w=500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;
const movies = [
 {id:1,title:"Yulduzlar Ortidagi Sir",year:2025,rating:9.1,genre:"Fantastika",type:"Film",duration:"2 soat 08 daqiqa",desc:"Insoniyat taqdiri noma’lum yulduzlar sari yo‘l olgan bir guruh jasur sayohatchilar qo‘lida. Ular koinot qa’rida kutilmagan sirni kashf etadi.",image:poster("photo-1446776811953-b23d57bd21aa"),featured:true,cast:"Aziz Karimov, Malika Yusufova"},
 {id:2,title:"So‘nggi Qahramon",year:2024,rating:8.7,genre:"Jangari",type:"Film",duration:"1 soat 56 daqiqa",desc:"O‘tmishdagi xatolarini tuzatmoqchi bo‘lgan sobiq qutqaruvchi katta sinovga duch keladi.",image:poster("photo-1519608487953-e999c86e7455")},
 {id:3,title:"Moviy Sayyora",year:2023,rating:8.9,genre:"Hujjatli",type:"Film",duration:"1 soat 42 daqiqa",desc:"Yer yuzidagi eng go‘zal va sirli tabiiy manzaralar bo‘ylab ajoyib sayohat.",image:poster("photo-1464822759023-fed622ff2c3b")},
 {id:4,title:"Kulgi Bekati",year:2025,rating:7.9,genre:"Komediya",type:"Film",duration:"1 soat 38 daqiqa",desc:"Kichik shaharchadagi noodatiy bekat va uning quvnoq yo‘lovchilari haqida iliq hikoya.",image:poster("photo-1519608487953-e999c86e7455")},
 {id:5,title:"Qorli Vodiy",year:2022,rating:8.4,genre:"Drama",type:"Film",duration:"2 soat 01 daqiqa",desc:"Uzoq yillardan so‘ng ona yurtiga qaytgan inson oilaviy xotiralar bilan yuzlashadi.",image:poster("photo-1511497584788-876760111969")},
 {id:6,title:"Sehrli O‘rmon",year:2024,rating:8.6,genre:"Oilaviy",type:"Multfilm",duration:"1 soat 29 daqiqa",desc:"Ikki do‘st sehrli o‘rmonda yo‘qolgan yulduzni topish uchun safarga chiqadi.",image:poster("photo-1448375240586-882707db888b")},
 {id:7,title:"Qora Qal’a",year:2021,rating:8.1,genre:"Qo‘rqinchli",type:"Film",duration:"1 soat 47 daqiqa",desc:"Tog‘ tepasidagi tashlandiq qal’ada g‘alati hodisalar ro‘y bera boshlaydi.",image:poster("photo-1518709268805-4e9042af9f23")},
 {id:8,title:"Yangi Hayot",year:2025,rating:8.8,genre:"Drama",type:"Serial",duration:"2 fasl",desc:"Bir mahalladagi turli taqdirlar, do‘stlik va yangi imkoniyatlar haqida serial.",image:poster("photo-1519608487953-e999c86e7455")},
 {id:9,title:"Tezlik Chegarasi",year:2024,rating:8.2,genre:"Jangari",type:"Film",duration:"1 soat 51 daqiqa",desc:"Professional poygachi kutilmagan topshiriq sabab yana rulga qaytadi.",image:poster("photo-1503376780353-7e6692767b70")},
 {id:10,title:"Oyga Sayohat",year:2023,rating:8.5,genre:"Fantastika",type:"Multfilm",duration:"1 soat 34 daqiqa",desc:"Kichkina ixtirochi va uning roboti Oyga unutilmas sayohat qiladi.",image:poster("photo-1446776811953-b23d57bd21aa")},
 {id:11,title:"Yashirin Kod",year:2022,rating:8.3,genre:"Jangari",type:"Serial",duration:"1 fasl",desc:"Yosh dasturchi tasodifan katta sirga olib boruvchi kodni topib oladi.",image:poster("photo-1519608487953-e999c86e7455")},
 {id:12,title:"Okean Sadosi",year:2021,rating:8.7,genre:"Sarguzasht",type:"Film",duration:"1 soat 59 daqiqa",desc:"Dengiz tadqiqotchilari noma’lum orol tomon yo‘l oladi.",image:poster("photo-1518837695005-2083093ee35b")},
 {id:13,title:"Kichik Professor",year:2025,rating:8.0,genre:"Komediya",type:"Serial",duration:"1 fasl",desc:"Har narsaga qiziquvchan bola oilasi va do‘stlarini kulgili vaziyatlarga soladi.",image:poster("photo-1503454537195-1dc 丨?")},
 {id:14,title:"Qahramonlar Jamoasi",year:2024,rating:8.6,genre:"Sarguzasht",type:"Multfilm",duration:"1 soat 41 daqiqa",desc:"Turli qobiliyatga ega do‘stlar shaharni qutqarish uchun birlashadi.",image:poster("photo-1535223289827-42f1e9919769")},
 {id:15,title:"Tun Sirlari",year:2023,rating:7.8,genre:"Qo‘rqinchli",type:"Film",duration:"1 soat 44 daqiqa",desc:"Kichik shahardagi sirli chiroqlar ortidan jurnalist izlanishga tushadi.",image:poster("photo-1519608487953-e999c86e7455")},
 {id:16,title:"Yurak Ovozi",year:2022,rating:8.9,genre:"Drama",type:"Film",duration:"2 soat 03 daqiqa",desc:"Musiqa orqali bir-birini topgan ikki insonning ta’sirli hikoyasi.",image:poster("photo-1516280440614-37939bbacd81")},
 {id:17,title:"Galaktika Posbonlari",year:2025,rating:8.8,genre:"Fantastika",type:"Serial",duration:"1 fasl",desc:"Koinot tinchligini saqlashga bel bog‘lagan yosh jamoa sarguzashtlari.",image:poster("photo-1451187580459-43490279c0fa")},
 {id:18,title:"Sarguzashtchilar",year:2020,rating:8.1,genre:"Sarguzasht",type:"Film",duration:"1 soat 52 daqiqa",desc:"Qadimiy xarita uch do‘stni sirli manzilga boshlab boradi.",image:poster("photo-1470770841072-f978cf4d019e")},
 {id:19,title:"Robotcha Robo",year:2024,rating:8.4,genre:"Oilaviy",type:"Multfilm",duration:"1 soat 27 daqiqa",desc:"Mehribon robotcha inson bo‘lish nimani anglatishini o‘rganadi.",image:poster("photo-1485827404703-89b55fcc595e")},
 {id:20,title:"Shahar Ritmi",year:2023,rating:7.9,genre:"Drama",type:"Serial",duration:"2 fasl",desc:"Katta shaharda orzulari sari intilayotgan yoshlar hayoti.",image:poster("photo-1519608487953-e999c86e7455")},
 {id:21,title:"Qasos Yo‘li",year:2021,rating:8.0,genre:"Jangari",type:"Film",duration:"1 soat 49 daqiqa",desc:"Adolat izlagan sobiq tergovchi murakkab jumboqni yechishga kirishadi.",image:poster("photo-1519608487953-e999c86e7455")},
 {id:22,title:"Yulduzli Orzular",year:2022,rating:8.5,genre:"Oilaviy",type:"Multfilm",duration:"1 soat 31 daqiqa",desc:"Kichik qizaloq yulduzlar bilan suhbatlashish orzusiga erishadi.",image:poster("photo-1470252649378-9c29740c9fa8")},
 {id:23,title:"Muzlikdagi Izlar",year:2024,rating:8.2,genre:"Sarguzasht",type:"Film",duration:"1 soat 57 daqiqa",desc:"Tadqiqotchilar muzliklar ostida qadimiy izlarni topishadi.",image:poster("photo-1517299321609-52687d1bc55a")},
 {id:24,title:"Kulgu Laboratoriyasi",year:2025,rating:7.7,genre:"Komediya",type:"Serial",duration:"1 fasl",desc:"Ixtirochilar laboratoriyasidagi har bir tajriba kutilmagan kulgiga sabab bo‘ladi.",image:poster("photo-1532094349884-543bc11b234d")},
 {id:25,title:"So‘nggi Signal",year:2023,rating:8.6,genre:"Fantastika",type:"Film",duration:"1 soat 54 daqiqa",desc:"Yerga kelgan noma’lum signal olimlarni katta savollar qarshisida qoldiradi.",image:poster("photo-1451187580459-43490279c0fa")},
 {id:26,title:"Do‘stlar Mahallasi",year:2021,rating:8.3,genre:"Komediya",type:"Serial",duration:"3 fasl",desc:"Bir ko‘chada yashaydigan qo‘shnilarning quvnoq kundalik hayoti.",image:poster("photo-1529156069898-49953e39b3ac")},
 {id:27,title:"Yovvoyi Tabiat",year:2020,rating:9.0,genre:"Hujjatli",type:"Film",duration:"1 soat 36 daqiqa",desc:"Sayyoramizdagi noyob hayvonlar va ularning yashash muhiti.",image:poster("photo-1472396961693-142e6e269027")},
 {id:28,title:"Sehrgar Shogirdi",year:2024,rating:8.7,genre:"Fantastika",type:"Multfilm",duration:"1 soat 39 daqiqa",desc:"Sehr olamida ilk qadamlarini qo‘yayotgan shogirdning sarguzashtlari.",image:poster("photo-1518709268805-4e9042af9f23")},
 {id:29,title:"Chegara Bilmaslar",year:2022,rating:8.1,genre:"Jangari",type:"Film",duration:"1 soat 48 daqiqa",desc:"Qutqaruv guruhi uzoq hududda murakkab vazifani bajaradi.",image:poster("photo-1500530855697-b586d89ba3ee")},
 {id:30,title:"Bahor Nafasi",year:2025,rating:8.4,genre:"Drama",type:"Film",duration:"1 soat 45 daqiqa",desc:"Yangi sahifa ochishga qaror qilgan insonning umid va ishonchga to‘la hikoyasi.",image:poster("photo-1490750967868-88aa4486c946")}
];
// Fix deliberately varied image IDs for the two fallback entries.
movies[12].image = poster("photo-1492684223066-81342ee5ff30");
movies[29].image = poster("photo-1490750967868-88aa4486c946");

const sections = [
 {title:"Trendda",sub:"Hozir eng ko‘p tomosha qilinmoqda",ids:[1,2,9,17,3,12,25]},
 {title:"Filmlar",sub:"Katta ekran uchun tanlanganlar",filter:m=>m.type==="Film"},
 {title:"Seriallar",sub:"Keyingi qismni kutib turolmaysiz",filter:m=>m.type==="Serial"},
 {title:"Multfilmlar va animatsiya",sub:"Butun oila uchun ajoyib hikoyalar",filter:m=>m.type==="Multfilm"},
 {title:"Qo‘rqinchli",sub:"Sirli voqealar va hayajonli lahzalar",filter:m=>m.genre==="Qo‘rqinchli"},
 {title:"Drama",sub:"Yurakka yaqin hikoyalar",filter:m=>m.genre==="Drama"},
 {title:"Komediya",sub:"Kayfiyatni ko‘taradigan filmlar",filter:m=>m.genre==="Komediya"},
 {title:"Fantastika / Sci-Fi",sub:"Tasavvur chegarasidan tashqarida",filter:m=>m.genre==="Fantastika"},
 {title:"Jangari / Action",sub:"Sur’at va sarguzasht",filter:m=>m.genre==="Jangari"},
 {title:"Yangi qo‘shilganlar",sub:"Platformadagi so‘nggi yangiliklar",ids:[1,4,8,13,17,24,30]},
 {title:"Top reytingdagi",sub:"Tomoshabinlar yuqori baholagan",sort:true}
];
const $ = s => document.querySelector(s);
const saved = new Set(JSON.parse(localStorage.getItem("uzstream_saved")||"[]"));
let activeGenre = "Barchasi";
const detailsModal = new bootstrap.Modal($("#detailsModal"));
const trailerModal = new bootstrap.Modal($("#trailerModal"));
const loginModal = new bootstrap.Modal($("#loginModal"));

function cardTemplate(m){
 return `<article class="movie-card" data-id="${m.id}" tabindex="0" aria-label="${m.title}">
  <div class="poster-wrap"><img loading="lazy" src="${m.image}" alt="${m.title} poster" onerror="this.src='https://placehold.co/500x700/171923/ffffff?text=UZSTREAM'">
   <span class="card-rating"><i class="bi bi-star-fill"></i> ${m.rating.toFixed(1)}</span><span class="card-type">${m.type.toUpperCase()}</span>
   <div class="poster-overlay"><div class="overlay-desc">${m.desc}</div><button class="overlay-play" data-watch="${m.id}"><i class="bi bi-play-fill"></i> TOMOSHA QILISH</button></div>
  </div><div class="movie-title">${m.title}</div><div class="movie-sub"><span>${m.year}</span><span>${m.genre}</span></div></article>`;
}
function renderSections(){
 const host=$("#dynamicSections");
 host.innerHTML=sections.map((s,i)=>{
  let items=s.ids?s.ids.map(id=>movies.find(m=>m.id===id)):movies.filter(s.filter);
  if(s.sort)items=[...movies].sort((a,b)=>b.rating-a.rating).slice(0,9);
  if(activeGenre!=="Barchasi")items=items.filter(m=>m.genre===activeGenre);
  if(!items.length)return "";
  return `<section class="content-section" id="${i===1?"films":i===2?"series":i===3?"animation":""}"><div class="section-row"><div><div class="section-kicker">${s.sub}</div><h2>${s.title} <span>•</span></h2></div><div class="row-controls"><button class="scroll-btn" data-scroll="-1" aria-label="Chapga"><i class="bi bi-chevron-left"></i></button><button class="scroll-btn" data-scroll="1" aria-label="O‘ngga"><i class="bi bi-chevron-right"></i></button></div></div><div class="movie-track">${items.map(cardTemplate).join("")}</div></section>`;
 }).join("");
}
function saveMovie(id){
 const m=movies.find(x=>x.id===Number(id)); if(!m)return;
 if(saved.has(m.id))saved.delete(m.id);else saved.add(m.id);
 localStorage.setItem("uzstream_saved",JSON.stringify([...saved]));renderSaved();
 const heroAdd=$("#heroAdd");if(m.id===1)heroAdd.innerHTML=saved.has(1)?'<i class="bi bi-check2"></i> Ro‘yxatda':'<i class="bi bi-plus-lg"></i> Ro‘yxatga qo‘shish';
}
function renderSaved(){
 const list=movies.filter(m=>saved.has(m.id));$("#savedCount").textContent=`${list.length} ta film`;
 $("#savedGrid").innerHTML=list.length?list.map(cardTemplate).join(""):`<div class="empty-state"><i class="bi bi-bookmark-heart"></i><h3>Ro‘yxatingiz hozircha bo‘sh</h3><p>Yoqtirgan filmlaringizni saqlang — ular shu yerda ko‘rinadi.</p></div>`;
}
function openDetails(id){
 const m=movies.find(x=>x.id===Number(id));if(!m)return;
 $("#detailContent").innerHTML=`<div class="detail-hero" style="background-image:url('${m.image}')"><div class="detail-hero-content"><span class="tag tag-red">${m.type.toUpperCase()}</span><h2>${m.title}</h2><div class="hero-meta"><span class="rating"><i class="bi bi-star-fill"></i> ${m.rating}</span><span>${m.year}</span><span>${m.duration}</span><span class="quality">HD</span></div><div class="d-flex gap-2 flex-wrap"><button class="btn btn-watch" data-watch="${m.id}"><i class="bi bi-play-fill"></i> Tomosha qilish</button><button class="btn btn-glass" data-trailer><i class="bi bi-film"></i> Trailer</button><button class="btn btn-glass" data-save="${m.id}"><i class="bi bi-bookmark${saved.has(m.id)?"-check":""}"></i> ${saved.has(m.id)?"Ro‘yxatda":"Ro‘yxatga qo‘shish"}</button></div></div></div><div class="detail-body"><div class="row g-4"><div class="col-md-8"><span class="detail-label">Film haqida</span><p class="mt-2">${m.desc}</p></div><div class="col-md-4"><div class="mb-3"><span class="detail-label">Janr</span><div class="detail-value mt-1">${m.genre}</div></div><div class="mb-3"><span class="detail-label">Davomiyligi</span><div class="detail-value mt-1">${m.duration}</div></div><div><span class="detail-label">Aktyorlar</span><div class="detail-value mt-1">${m.cast||"Ijodiy jamoa"}</div></div></div></div></div>`;
 detailsModal.show();
}
function showTrailer(){trailerModal.show();}
function runSearch(value){
 const q=value.trim().toLocaleLowerCase("uz");const box=$("#searchResults");
 if(!q){box.classList.add("d-none");return}
 const result=movies.filter(m=>m.title.toLocaleLowerCase("uz").includes(q));
 $("#searchHeading").textContent=`“${value}” bo‘yicha ${result.length} ta natija`;
 $("#searchGrid").innerHTML=result.length?result.map(cardTemplate).join(""):`<div class="empty-state"><i class="bi bi-search"></i><h3>Hech narsa topilmadi</h3><p>Boshqa nom bilan qidirib ko‘ring.</p></div>`;
 box.classList.remove("d-none");box.scrollIntoView({behavior:"smooth",block:"start"});
}
function initHero(){
 const m=movies[0];$("#heroBackdrop").style.backgroundImage=`url('${m.image}')`;
 $("#heroWatch").dataset.watch=m.id;$("#heroInfo").dataset.details=m.id;
 $("#heroAdd").innerHTML=saved.has(1)?'<i class="bi bi-check2"></i> Ro‘yxatda':'<i class="bi bi-plus-lg"></i> Ro‘yxatga qo‘shish';
 $("#heroAdd").dataset.save=m.id;
}
document.addEventListener("click",e=>{
 const watch=e.target.closest("[data-watch]");if(watch){e.preventDefault();showTrailer();return}
 const save=e.target.closest("[data-save]");if(save){e.stopPropagation();saveMovie(save.dataset.save);if($("#detailContent").contains(save))openDetails(save.dataset.save);return}
 const details=e.target.closest("[data-details]");if(details){openDetails(details.dataset.details);return}
 const card=e.target.closest(".movie-card");if(card){openDetails(card.dataset.id);return}
 const scroll=e.target.closest("[data-scroll]");if(scroll){const track=scroll.closest(".content-section").querySelector(".movie-track");track.scrollBy({left:Number(scroll.dataset.scroll)*500,behavior:"smooth"});return}
 if(e.target.closest("[data-trailer]"))showTrailer();
});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.classList.contains("movie-card"))openDetails(e.target.dataset.id);if(e.key==="/"&&document.activeElement.tagName!=="INPUT"){e.preventDefault();$("#searchInput").focus()}});
$("#heroAdd").addEventListener("click",()=>saveMovie(1));
$("#heroWatch").addEventListener("click",showTrailer);
$("#heroInfo").addEventListener("click",()=>openDetails(1));
$("#searchInput").addEventListener("input",e=>runSearch(e.target.value));
$("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";$("#searchResults").classList.add("d-none");});
$("#genrePills").addEventListener("click",e=>{const b=e.target.closest("[data-genre]");if(!b)return;activeGenre=b.dataset.genre;document.querySelectorAll(".genre-pill").forEach(x=>x.classList.toggle("active",x===b));renderSections();});
$("#loginBtn").addEventListener("click",()=>loginModal.show());
initHero();renderSections();renderSaved();
