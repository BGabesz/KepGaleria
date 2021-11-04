$(function(){
    let aktIndex=0;
    //beletesszuk az adatokatn a tombbe
    const KepAdatok=[
        {
            cim:"Kép Címe1",
            eleresiUt:"Kepek/kep1.jpg",
            kepleiras:"Kep reszletes leírása"
        },
        {
            cim:"Kép Címe2",
            eleresiUt:"Kepek/kep2.jpg",
            kepleiras:"Kep reszletes leírása"
        },
        {
            cim:"Kép Címe3",
            eleresiUt:"Kepek/kep3.jpg",
            kepleiras:"Kep reszletes leírása"
        }
    ];
    //van egy sablon elemunk,
    //A sablonelemet klónozzuk
    //hozzácsatoljuk a szülőelemhez
    
    //végigmegyünk a tömbön
    const szuloElem1=$("#galeria");
    const sablon1=$(".kartya");
    const sablon2=$(".Fokartya");
    const szuloElem2 =$("#FoGaleria");
        
//        lampaTomb.push(kartya);
    
    
    for (let i = 0; i < KepAdatok.length; i++) {
        let ujElem=sablon1.clone().appendTo(szuloElem1);
        const kartya= new Kartya(ujElem,KepAdatok[i],i);
    }
    
    let ujElem2=sablon1.clone().appendTo(szuloElem2);
    const Nagykartya= new Kartya(ujElem2,KepAdatok[0],0);
    sablon1.remove();
    $(window).on("kepValasztas",(event)=>{
        console.log(event.detail);
//        $("#Fokartya img").attr("src",event.detail.eleresiUt);
//        $("#Fokartya h3").html(event.detail.cim);
//        $("#Fokartya p").html(event.detail.kepleiras);
        Nagykartya.setAdatok(event.detail);
        aktIndex=event.detail.index;
        console.log(aktIndex);
    });
    $("#balGomb").on("click",function () {
        aktIndex--;
        if(aktIndex<0){
            aktIndex=KepAdatok.length-1;
        }
        Nagykartya.setAdatok(KepAdatok[aktIndex]);
        
    });
    $("#JobbGomb").on("click",function () {
        aktIndex++;
        if(aktIndex>KepAdatok.length-1){
            aktIndex=0;
        }
        Nagykartya.setAdatok(KepAdatok[aktIndex]);
        
    });
});