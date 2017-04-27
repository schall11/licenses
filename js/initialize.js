 require([
        "dijit/Dialog",
        "dojo/domReady!"
    ], function(
        Dialog
    ) {
    dojo.require("dojox.storage");
    var storageProvider=null;
    dojo.addOnLoad(function(){
        dojox.storage.manager.initialize();
        storageProvider=dojox.storage.manager.getProvider();
        storageProvider.initialize();
        var myObject = storageProvider.get("visitedBool2345");
        console.log(myObject);
        if (myObject === null){
            myDialog.show();
        }
    });
   storeClose = function(){
    dojox.storage.manager.initialize();
    storageProvider=dojox.storage.manager.getProvider();
    storageProvider.initialize();
    var myObject={key1:true};
    storageProvider.put("visitedBool2345", myObject, function(status, keyName){
    });
    console.log(myObject);
    myDialog.hide();
    };
        myDialog = new Dialog({
        title: "",
        content: '<p>Click anywhere on the map or enter your address to see the nearest agents.</p><p>Use the slider on the right to change your search radius.</p><div class="dijitDialogPaneActionBar"><button data-dojo-type="dijit/form/Button" type="button" data-dojo-props="onClick:storeClose" id="cancel">OK</button> </div>',
        style: "width: 450px"
    });

    });