let Calcolatrice = {
    display: "",
  stato:0,
    visualizza: function(output) {
        document.getElementById("visore").innerHTML = output;
    },
    accensione: function() {
        this.visualizza("0");
    },
  tasto:function(simbolo){
    if(this.display=="0"){
      this.display="";
    }
    if(this.stato==2){ //se sta un errore allora toglie il display
      this.display="";
      this.stato=0;
    }
    this.display+=simbolo
    this.visualizza(this.display)
  },
  calcola: function(){
    try{ //prova questo
      this.display = eval(this.display);
      this.stato=1;
      this.visualizza(this.display);
    }
    catch(err){//se trova errore fa questo
      this.display="Errore";
      this.stato=2;
      this.visualizza(this.display)
    }
  },
    cancella: function() {
        this.display = "";
        this.visualizza("0");
    },
    indietro: function() {
      this.display=this.display.toString()
        if (this.display.length <= 1) {
            this.display = "";
            this.visualizza("0");
        } else {
            this.display = this.display.slice(0, -1); // toglie l'ultimo carattere di una stringa
            this.visualizza(this.display);
        }
    },
  pom: function(){
    this.display*=-1;
    this.visualizza(this.display);
  },
  radice: function(){
    this.display=Math.sqrt(this.display)
    this.visualizza(this.display)
  }
};

Calcolatrice.accensione();
