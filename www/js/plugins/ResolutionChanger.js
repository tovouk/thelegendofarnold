//=============================================================================
// ResolutionChanger.js
//=============================================================================

/*:
 * @plugindesc Changing game resolution easily.
 * @author superrogin
 *
 * @param Width
 * @desc Width of the game screen.
 * @default 816
 *
 * @param Height
 * @desc Height of the game screen.
 * @default 624
 *
 * @help Ask superrogin@gmail.com
 */

/*:ko
 * @plugindesc 게임 해상도를 쉽게 바꿀 수 있습니다.
 * @author superrogin
 *
 * @param Width
 * @desc 게임 가로 해상도
 * @default 816
 *
 * @param Height
 * @desc 게임 세로 해상도
 * @default 624
 *
 * @help 질문 : superrogin@gmail.com
 */



(function() {

    var parameters = PluginManager.parameters('ResolutionChanger');	
	var wdth = Number(parameters['Width'] || 816);
    var hght = Number(parameters['Height'] || 624);
	var _Scene_Base_create = Scene_Base.prototype.create;

	Scene_Base.prototype.create = function() {
		_Scene_Base_create.call(this);
		Graphics.width = wdth;
		Graphics.height = hght;	
	};

})();
