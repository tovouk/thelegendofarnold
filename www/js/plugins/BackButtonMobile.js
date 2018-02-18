// Back Button for Options Menu
// by orlando (rpgmakerweb.com forums)
// Date: 11/22/2015 
//=============================================================================
/*: 
* @plugindesc Adds a back button to the options menu. This makes it more obvious how to leave it, and more usable on mobile.
* @author orlando (rpgmakerweb.com forums)
*/

(function() {
// Add back button to the button list:
if (typeof(Window_Options.prototype._backbuttonreplace_old_makeCommandList) == "undefined") {
Window_Options.prototype._backbuttonreplace_old_makeCommandList = 
Window_Options.prototype.makeCommandList;
}
Window_Options.prototype.makeCommandList = function() {
this._backbuttonreplace_old_makeCommandList();
this.addCommand("Back", 'back');
};
// Make sure no option value is drawn for the "Back" button:
if (typeof(Window_Options.prototype._backbuttonreplace_old_statusText) == "undefined") {
Window_Options.prototype._backbuttonreplace_old_statusText =
Window_Options.prototype.statusText;
}
Window_Options.prototype.statusText = function(index) {
if (this.commandName(index) != "Back") {
return this._backbuttonreplace_old_statusText(index);
}
return "";
};
// Make "Back" button trigger the escape:
if (typeof(Window_Options.prototype._backbuttonreplace_old_changeValue) == "undefined") {
Window_Options.prototype._backbuttonreplace_old_changeValue =
Window_Options.prototype.changeValue;
}
Window_Options.prototype.changeValue = function(symbol, value) {
if (symbol != "back") {
return this._backbuttonreplace_old_changeValue(symbol, value);
}
this.playBuzzerSound();
this.callCancelHandler();
};
})();
