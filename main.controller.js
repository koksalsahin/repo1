sap.ui.controller("ztopla.main", { 

topla:function(){ 
     
    var oInput1 = sap.ui.getCore().byId("Input1"); 
    var oInput2 = sap.ui.getCore().byId("Input2"); 
    var oInput3 = sap.ui.getCore().byId("Input3"); 
     
    var sayi1 = parseInt(oInput1.getValue()); 
    var sayi2 = parseInt(oInput2.getValue()); 
    var sonuc = sayi1 + sayi2 ; 
     
    oInput3.setValue(sonuc); 
     
} 

});