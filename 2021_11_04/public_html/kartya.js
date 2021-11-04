class   Kartya {

    constructor(elem, adat,index) {

        //szüloelem es a sablonelem meghatarozasa
        //sablonelem klonozasa es a szüloelemhez csatolasa
        //peldanyositas
        this.elem = elem;
        this.cim = this.elem.children("h3");
        this.kep = this.elem.children("img");
        this.leiras = this.elem.children("p");
        this.adat = adat;
        
        this.adat.index=index;
        
        this.setAdatok(this.adat);
        this.elem.on("click", () => {
            
//            szamol++;
//            if (szamol === 3) {
//                szamol = 0;
//            }
//            console.log(szamol);
            this.kattint();

            //console.log(this);
        });
//       

    }
    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kep.attr("src", ertekek.eleresiUt);
        this.leiras.html(ertekek.kepleiras);
    }
    kattint() {
        console.log("halika");
        let esemeny = new CustomEvent("kepValasztas", {detail: this.adat});
        window.dispatchEvent(esemeny);
    }
}