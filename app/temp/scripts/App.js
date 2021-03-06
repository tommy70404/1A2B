/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _RandomNum = __webpack_require__(/*! ./modules/RandomNum */ \"./app/assets/scripts/modules/RandomNum.js\");\n\nvar _RandomNum2 = _interopRequireDefault(_RandomNum);\n\nvar _GetInput = __webpack_require__(/*! ./modules/GetInput */ \"./app/assets/scripts/modules/GetInput.js\");\n\nvar _GetInput2 = _interopRequireDefault(_GetInput);\n\nvar _Compare = __webpack_require__(/*! ./modules/Compare */ \"./app/assets/scripts/modules/Compare.js\");\n\nvar _Compare2 = _interopRequireDefault(_Compare);\n\nvar _Modal = __webpack_require__(/*! ./modules/Modal */ \"./app/assets/scripts/modules/Modal.js\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nvar _Views = __webpack_require__(/*! ./modules/Views */ \"./app/assets/scripts/modules/Views.js\");\n\nvar Views = _interopRequireWildcard(_Views);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GameController = function () {\n    var clickTimes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n    var rounds = 0;\n\n    var answer = new _RandomNum2.default();\n    answer.getRandom();\n    //建構Modal實例\n    var modal = new _Modal2.default();\n\n    //focus在第一個輸入區\n    document.querySelector(\".input--active\").focus();\n\n    return {\n        getRandom: function getRandom() {\n            return answer.randomNum;\n        },\n\n        getClickTimes: function getClickTimes() {\n            return clickTimes;\n        },\n\n        getRounds: function getRounds() {\n            return rounds;\n        },\n\n        changeRounds: function changeRounds(number) {\n            rounds += number;\n        },\n        getModel: function getModel() {\n            return modal;\n        }\n        //挑選隨機數字\n\n    };\n}(); // import {elements} from './modules/base';\n\nvar AnswerController = function () {\n\n    return {\n        answer: function answer() {\n            //取得inputArea數字\n            var input = new _GetInput2.default();\n            var InputNum = input.getInputNum();\n            if (!Array.isArray(InputNum)) {\n                document.querySelector(\".input--active\").focus();\n                return Views.report(InputNum);\n            }\n\n            //比對答案並得出提示\n            var compareAnswer = new _Compare2.default();\n            compareAnswer.compareAnswer(InputNum, GameController.getRandom());\n\n            //顯示提示\n            console.log(compareAnswer.hint);\n            Views.showHint(compareAnswer.hint);\n\n            //新增inputArea 並移除input--active class\n            Views.delActive();\n            GameController.changeRounds(1);\n            if (compareAnswer.hint[0] == 4) {\n                Views.report('correct', GameController.getRounds());\n            } else {\n                Views.createInputArea();\n                Views.report(Math.floor(Math.random() * 4), GameController.getRounds());\n                document.querySelector(\".input--active\").focus();\n            }\n        }\n    };\n}();\n\n//提交按鈕事件\nwindow.addEventListener('keypress', function (e) {\n    if (e.keyCode == 13) {\n        AnswerController.answer();\n    }\n});\n\ndocument.querySelector('.icon--btn-1950').addEventListener('click', function (e) {\n    AnswerController.answer();\n});\n\n//數字列協助事件，玩家點選數字列可出現 X 或 O\ndocument.querySelector('.numbers > ul').addEventListener('click', function (e) {\n\n    Views.yesOrNo(e, GameController.getClickTimes());\n});\n\ndocument.querySelector('.answerArea > span').addEventListener('mouseenter', function (e) {\n    Views.btnMethod(e.target, 'add');\n});\ndocument.querySelector('.answerArea > span').addEventListener('mouseleave', function (e) {\n    Views.btnMethod(e.target, 'remove');\n});\n\n//Modal控制視窗按鈕，next, previous, skip\ndocument.querySelector('.modal__btn__next').addEventListener('click', function (e) {\n    var modal = GameController.getModel();\n    modal.nextPage();\n    Views.modalBtnMethod(modal.page);\n});\ndocument.querySelector('.modal__btn__previous').addEventListener('click', function (e) {\n    var modal = GameController.getModel();\n    modal.previousPage();\n    Views.modalBtnMethod(modal.page);\n});\ndocument.querySelector('.modal__btn__skip').addEventListener('click', function (e) {\n    var modal = GameController.getModel();\n    Views.modalBtnMethod(4);\n});\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Compare.js":
/*!***********************************************!*\
  !*** ./app/assets/scripts/modules/Compare.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Compare = function () {\n    function Compare() {\n        _classCallCheck(this, Compare);\n\n        this.hint = [0, 0];\n    }\n\n    _createClass(Compare, [{\n        key: 'compareAnswer',\n        value: function compareAnswer(inputArray, answerArray) {\n            var _this = this;\n\n            //[A, B] A表示位置數字皆正確；B表示數字正確，位置擺錯\n            console.log('inputs: ' + inputArray + ',and answer: ' + answerArray);\n            inputArray.forEach(function (element, index) {\n                //如果輸入內含有答案的情況，則比對陣列的每一項元素\n                var indexOfEleInAnsArray = answerArray.indexOf(element);\n                if (!(indexOfEleInAnsArray < 0)) {\n                    _this.hint[1]++;\n                    if (indexOfEleInAnsArray == index) {\n                        _this.hint[1]--;\n                        _this.hint[0]++;\n                    }\n                }\n            });\n\n            return this.hint;\n        }\n    }]);\n\n    return Compare;\n}();\n\nexports.default = Compare;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Compare.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/GetInput.js":
/*!************************************************!*\
  !*** ./app/assets/scripts/modules/GetInput.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// import {elements} from './base.js';\n\n\nvar GetInput = function () {\n    function GetInput() {\n        _classCallCheck(this, GetInput);\n\n        this.InputArea = document.querySelector('.input--active');\n        this.InputNum;\n    }\n    //取得每輪的input值，並執行檢查是否符合輸入條件，並回傳不同的ERROR代稱。包含：不足數字、非數字字元和數字重複\n\n\n    _createClass(GetInput, [{\n        key: 'getInputNum',\n        value: function getInputNum() {\n            var numArray = this.InputArea.value.split(\"\").map(function (numString) {\n                if (isNaN(numString)) {\n                    return 'NaN';\n                }\n                return parseInt(numString);\n            });\n\n            if (numArray.length != 4) {\n                return 'need4Num';\n            } else if (numArray.includes('NaN')) {\n                return 'NaN';\n            }\n            var repeatTimes = [];\n            numArray.forEach(function (element) {\n                repeatTimes.push(numArray.filter(function (item) {\n                    return item == element;\n                }).length >= 2 ? true : false);\n            });\n            if (repeatTimes.includes(true)) {\n                return 'repeated';\n            } else {\n                return this.InputNum = numArray;\n            }\n        }\n    }]);\n\n    return GetInput;\n}();\n\nexports.default = GetInput;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/GetInput.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Modal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Modals = function () {\n    function Modals() {\n        _classCallCheck(this, Modals);\n\n        this.page = 0;\n    }\n    //控制開頭介紹頁面\n\n\n    _createClass(Modals, [{\n        key: \"nextPage\",\n        value: function nextPage() {\n            this.page = (this.page + 1) % 5;\n            console.log(this);\n        }\n    }, {\n        key: \"previousPage\",\n        value: function previousPage() {\n            if (this.page == 0) {\n                return;\n            }\n            this.page = (this.page - 1) % 5;\n            console.log(this);\n        }\n    }]);\n\n    return Modals;\n}();\n\nexports.default = Modals;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Modal.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/RandomNum.js":
/*!*************************************************!*\
  !*** ./app/assets/scripts/modules/RandomNum.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RandomNum = function () {\n    function RandomNum() {\n        _classCallCheck(this, RandomNum);\n\n        this.randomNum = [];\n    }\n\n    _createClass(RandomNum, [{\n        key: 'getRandom',\n        value: function getRandom() {\n            for (var i = 0; i < 4; i++) {\n                var num = Math.floor(Math.random() * 10);\n                while (this.randomNum.includes(num)) {\n                    num = Math.floor(Math.random() * 10);\n                }\n                this.randomNum.push(num);\n            }\n            console.log('answer is:' + this.randomNum.toString());\n        }\n    }]);\n\n    return RandomNum;\n}();\n\nexports.default = RandomNum;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/RandomNum.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Views.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Views.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n// import {elements} from './base.js';\n\n//顯示接續回合的input區域\nvar createInputArea = exports.createInputArea = function createInputArea() {\n    var markup = '\\n    <li>\\n        <span class=\"icon icon--inputArea-1950\"></span>\\n        <input class=\"input input--active\" type=\"text\" maxlength=\"4\" value=\"\">\\n        <div class=\"inputHint inputHint--active\"></div>\\n    </li>\\n    ';\n    document.querySelector('.inputArea > ul').insertAdjacentHTML('beforeend', markup);\n};\n\n// 顯示當回合的提示\nvar showHint = exports.showHint = function showHint(hint) {\n    document.querySelector('.inputHint--active').innerHTML = '<p class=\"inputHint--animateIt\">' + hint[0] + 'A' + hint[1] + 'B</p>';\n};\n\n// 交接active tag至接續回合的input區域\nvar delActive = exports.delActive = function delActive() {\n\n    document.querySelector('.input--active').setAttribute(\"disabled\", \"\");\n    document.querySelector('.input--active').classList.remove('input--active');\n    document.querySelector('.inputHint--active').classList.remove('inputHint--active');\n};\n\n// 處理最終答案顯示區域顯示之內容\nvar report = exports.report = function report(event) {\n    var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n\n    if (event == 'NaN') {\n        document.querySelector('.answerAreaHint').innerHTML = '<p class=\"hints-red\"\\n        >Only numbers allow!</div>';\n    } else if (event == 'need4Num') {\n        document.querySelector('.answerAreaHint').innerHTML = '<p class=\"hints-red\">Only accept 4 numbers!</p>';\n    } else if (event == 'repeated') {\n        document.querySelector('.answerAreaHint').innerHTML = '<p class=\"hints-red\">your numbers are repeated</p>';\n    } else if (event == 'correct') {\n        document.querySelector('.inputArea li:last-child input').classList.add('inputHint--correct');\n        document.querySelector('.answerAreaHint').innerHTML = '<p class=\"hints-goldAnimated\">you found the secret treasure in ' + elements + ' rounds</p> ';\n        console.log(document.querySelector(\".icon--btn-1950\").remove());\n    } else if (event == 1) {\n        document.querySelector('.answerAreaHint').innerHTML = '<p class=\"hints-black\">Try harder</p>';\n    } else if (event == 2) {\n        document.querySelector('.answerAreaHint').innerHTML = '<p class=\"hints-black\">click the number above may help you</p>';\n    } else if (event == 3) {\n        document.querySelector('.answerAreaHint').innerHTML = '<p class=\"hints-black\">you have tried <span style=\"color: #751B1B;\">' + elements + '</span> rounds </p>';\n    } else if (event == 0) {\n        document.querySelector('.answerAreaHint').innerHTML = '<p class=\"hints-black\">well, well, well <br> it\\'s a good guess</p>';\n    }\n};\n\n// 控制輔助數字為 O or X \nvar yesOrNo = exports.yesOrNo = function yesOrNo(e, clickTimes) {\n    if (e.target.localName == \"ul\") {} else {\n        while (e.target.parentNode.classList.length > 0) {\n            e.target.parentNode.classList.remove(e.target.parentNode.classList[0]);\n        }\n        var number = parseInt(e.target.classList[1].split('-')[3]);\n        clickTimes[number] = (clickTimes[number] + 1) % 3;\n        if (clickTimes[number] == 1) {\n            e.target.parentNode.classList.add('icon', 'icon--X');\n        } else if (clickTimes[number] == 2) {\n            e.target.parentNode.classList.add('icon', 'icon--O');\n        }\n    }\n};\n\n// 控制提交按鈕切換是否顯示指紋\nvar btnMethod = exports.btnMethod = function btnMethod(e, method) {\n    if (method == 'add') {\n        e.innerHTML = '<span class=\"icon icon--fingerprint\"></span>';\n    } else if (method == 'remove') {\n        e.removeChild(e.childNodes[0]);\n    }\n};\n\n// 控制開頭介紹頁面切換\nvar modalBtnMethod = exports.modalBtnMethod = function modalBtnMethod(page) {\n    var allPages = Array.from(document.querySelectorAll('.modal__container > *')).splice(0, 4);\n    console.log(allPages);\n    allPages.forEach(function (element) {\n        return element.classList.add('modal--invisible');\n    });\n    switch (page) {\n        case 0:\n            allPages[0].classList.remove('modal--invisible').add('modal--visible');\n            document.querySelector('.modal__btn__previous').classList.add('modal--invisible');\n            break;\n        case 1:\n            allPages[1].classList.remove('modal--invisible');\n            document.querySelector('.modal__btn__previous').classList.remove('modal--invisible');\n            break;\n        case 2:\n            allPages[2].classList.remove('modal--invisible');\n            break;\n        case 3:\n            allPages[3].classList.remove('modal--invisible');\n            break;\n        case 4:\n            document.querySelector('.modal').classList.add('modal--invisible');\n            break;\n\n    }\n};\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Views.js?");

/***/ })

/******/ });