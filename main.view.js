sap.ui.jsview("ztopla.main", { 

    /** Specifies the Controller belonging to this View.  
    * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
    * @memberOf ztopla.main 
    */  
    getControllerName : function() { 
        return "ztopla.main"; 
    }, 

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf ztopla.main 
    */  
    createContent : function(oController) { 
         
         
        var oInput1 = new sap.m.Input("Input1", { 
             
            placeholder : "İlk Sayı", 
            type : sap.m.InputType.Number 
             
        }); 
         
       var oInput2 = new sap.m.Input("Input2", { 
             
            placeholder : "İkinci Sayı", 
            type : sap.m.InputType.Number 
             
        }); 
        
       var oInput3 = new sap.m.Input("Input3", { 
             
            placeholder : "Sonuç", 
            type : sap.m.InputType.Number 
             
        }); 
         
        var oButton = new sap.m.Button("oButton",{ 
             
            text : "HESAPLA" , 
           press : [oController,oController.topla] 
             
        }); 
         
         return new sap.m.Page({
            title: "SAP mobile Project", 
            content: [oInput1, 
                      oInput2, 
                      oButton, 
                      oInput3 
             
            ] 
        }); 
    } 

});