(function webpack_inject(){
	
	window.obfuscate = {
	    "mainModule": "_t",
	    "init": "t",
	    "free": "a",
	    "update": "n",
	    "render": "dt",
	    "sendMessage": "bt",
	    "processGameUpdate": "yt",
	    "EmoteManager": "Je",
	    "camera": "j",
	    "targetZoom": "u",
	    "activePlayer": "nt",
	    "input": "pe",
	    "keyPressed": "te",
	    "mousePressed": "Y",
	    "mouseDown": "$",
	    "smokeBarn": "Re",
	    "smokePool": "e",
	    "map": "ke",
	    "obstaclePool": "K",
	    "buildingPool": "tt",
	    "pool": "ce",
	    "playerBarn": "Me",
	    "playerPool": "$e",
	    "playerInfo": "kt",
	    "activeId": "le",
	    "objectCreator": "rt",
	    "netData": "N",
	    "pieTimer": "Ve",
	    "lootBarn": "qe",
	    "closestLoot": "vt",
	    "lootPool": "et",
	    "localData": "q"
	};

	// window.freestar.newAdSlots = function(slots) {
	// 	return slots;
	// }

	// window.freestar.deleteAdSlots = function(slots) {
	// 	return slots;
	// }
	
	
	window.webpackJsonp([0], {
        "webpack_inject": function (wrapper, exports, getModule) {

            var mainModule = getModule("9b5f96fd")[obfuscate.mainModule];
            // console.log(mainModule);
						
			// init
			var gameInitBase = mainModule.prototype[obfuscate.init];
			mainModule.prototype[obfuscate.init] = function(){
				gameInitBase.apply(this, arguments);
				window.gameFunctions.gameInit.call(this);
			};
			
			// free
			var gameFreeBase = mainModule.prototype[obfuscate.free];
			mainModule.prototype[obfuscate.free] = function(){
				gameFreeBase.apply(this, arguments);
				window.gameFunctions.gameFree.call(this);
			};
			
			// update and override
			var gameUpdateBase = mainModule.prototype[obfuscate.update];
			mainModule.prototype[obfuscate.update] = function(){
				if(!this.override)
					window.gameFunctions.gameOverride.call(this);
				gameUpdateBase.apply(this, arguments);
				window.gameFunctions.gameUpdate.call(this);
			};
			
			// render
			var gameRenderBase = mainModule.prototype[obfuscate.render];
			mainModule.prototype[obfuscate.render] = function(){
				gameRenderBase.apply(this, arguments);
				window.gameFunctions.gameRender.call(this);
			};
			
			// sendMessage
			var gameSendMessageBase = mainModule.prototype[obfuscate.sendMessage];
			mainModule.prototype[obfuscate.sendMessage] = function(){
				gameSendMessageBase.apply(this, arguments);
				window.gameFunctions.gameSendMessage.apply(this, arguments);
			};
			
			// processGameUpdate
			var gameSrocessGameUpdateBase = mainModule.prototype[obfuscate.processGameUpdate];
			mainModule.prototype[obfuscate.processGameUpdate] = function(){
				gameSrocessGameUpdateBase.apply(this, arguments);
				window.gameFunctions.gameSrocessGameUpdate.apply(this, arguments);
			};
			
			// PING
			var emoteModule = getModule("e5d16b4d");

			// var someModule = getModule("3160ea28");
			// console.log(someModule);
			
			// override
			var emoteManagerUpdateBase = emoteModule[obfuscate.EmoteManager].prototype[obfuscate.update]; //emoteModule.EmoteManager.prototype.update
			// console.log(emoteManagerUpdateBase);
			emoteModule[obfuscate.EmoteManager].prototype[obfuscate.update] = function(){ 
				if(!this.override)
					window.gameFunctions.pingOverride.call(this);
				
				emoteManagerUpdateBase.apply(this, arguments);
			};
			
			// DATA
			window.gameVars.Game.GameData = getModule("989ad62a");
        }
    }, ["webpack_inject"]);

})();
