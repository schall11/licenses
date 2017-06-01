 require([
        'dojo/dom',
        "dijit/Dialog",
        "dojo/domReady!"
    ], function(
        dom,
        Dialog
    ) {
   //  dojo.require("dojox.storage");
   //  var storageProvider=null;
   //  dojo.addOnLoad(function(){
   //      dojox.storage.manager.initialize();
   //      storageProvider=dojox.storage.manager.getProvider();
   //      storageProvider.initialize();
   //      var myObject = storageProvider.get("visitedBool2345");
   //      // console.log(myObject);
   //      if (myObject === null){
   //          myDialog.show();
   //      }
   //  });
   // storeClose = function(){
   //  dojox.storage.manager.initialize();
   //  storageProvider=dojox.storage.manager.getProvider();
   //  storageProvider.initialize();
   //  var myObject={key1:true};
   //  storageProvider.put("visitedBool2345", myObject, function(status, keyName){
   //  });
   //  // console.log(myObject);
   // // var locateBtn = dom.byId("btnLocate");
   // // console.log("clicked");
   // // locateBtn.click();
   // // console.log(this.geoLocate);
   // // this.geoLocate.locate()
   // //  myDialog.hide();
   //  };
        myDialog = new Dialog({
            id: "introDialog",
        title: "",
        content: '<p>Click anywhere on the map or enter your address to see the nearest license agents.</p><p>Use the slider on the results menu to change your search radius.</p><div class="dijitDialogPaneActionBar"><button data-dojo-type="dijit/form/Button" type="button"  id="cancel">OK</button> </div>',
        style: "width: 450px"
    });
        myDialog.show();
    dojo.query('#btnHelp').onclick( function() {
        myDialog.show();
    });

   //  var okBtn = dom.byId("callMe");
   //
   // callMe_link.click();

    });