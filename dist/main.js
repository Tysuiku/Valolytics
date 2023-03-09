/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_display_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/display_agent */ \"./src/scripts/display_agent.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  document.querySelector(\"#search\").addEventListener(\"click\", _scripts_display_agent__WEBPACK_IMPORTED_MODULE_0__.getAgent);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUQ7QUFFbkRDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsREQsUUFBUSxDQUFDRSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRUYsNERBQVEsQ0FBQztBQUN2RSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxvbHl0aWNzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWdlbnQgfSBmcm9tIFwiLi9zY3JpcHRzL2Rpc3BsYXlfYWdlbnRcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0QWdlbnQpO1xufSk7XG4iXSwibmFtZXMiOlsiZ2V0QWdlbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/display_agent.js":
/*!**************************************!*\
  !*** ./src/scripts/display_agent.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAgent\": function() { return /* binding */ getAgent; }\n/* harmony export */ });\nconst agentUuid = {\n  gekko: \"e370fa57-4757-3604-3648-499e1f642d3f\",\n  fade: \"dade69b4-4f5a-8528-247b-219e5a1facd6\",\n  breach: \"5f8d3a7f-467b-97f3-062c-13acf203c006\",\n  raze: \"f94c3b30-42be-e959-889c-5aa313dba261\",\n  chamber: \"22697a3d-45bf-8dd7-4fec-84a9e28c69d7\",\n  kayo: \"601dbbe7-43ce-be57-2a40-4abd24953621\",\n  skye: \"6f2a04ca-43e0-be17-7f36-b3908627744d\",\n  cypher: \"117ed9e3-49f3-6512-3ccf-0cada7e3823b\",\n  sova: \"ded3520f-4264-bfed-162d-b080e2abccf9\",\n  killjoy: \"1e58de9c-4950-5125-93e9-a0aee9f98746\",\n  harbor: \"95b78ed7-4637-86d9-7e41-71ba8c293152\",\n  viper: \"707eab51-4836-f488-046a-cda6bf494859\",\n  phoenix: \"eb93336a-449b-9c1b-0a54-a891f7921d69\",\n  astra: \"41fb69c1-4189-7b37-f117-bcaf1e96f1bf\",\n  brimstone: \"9f0d8ba9-4140-b941-57d3-a7ad57c6b417\",\n  neon: \"bb2a4828-46eb-8cd1-e765-15848195d751\",\n  yoru: \"7f94d92c-4234-0a36-9646-3a87eb8b5c89\",\n  sage: \"569fdd95-4d10-43ab-ca70-79becc718b46\",\n  reyna: \"a3bfb853-43b2-7238-a4f1-ad90e9e46bcc\",\n  omen: \"8e253930-4c05-31dd-1b6c-968525494517\",\n  jett: \"add6443a-41bd-e414-f6ad-e58d267f4e95\"\n};\nfunction lowerCaseName(string) {\n  return string.toLowerCase();\n}\nfunction getAgent(e) {\n  const name = document.querySelector(\"#agentName\").value;\n  const agentName = lowerCaseName(name);\n  fetch(`https://valorant-api.com/v1/agents/${agentUuid[agentName]}`).then(response => response.json()).then(data => {\n    document.querySelector(\".agentBox\").innerHTML = `\n      <div>\n      <img id=\"valo-fullPortrait\" src=\"${data.data.fullPortrait}\" alt=\"${data.data.displayName}\">\n  </div>\n  <div class=\"agentInfo\">\n      <h1>${data.data.displayName}</h1>\n      <p>Description: ${data.data.description}</p>\n  </div>\n      `;\n  }).catch(error => {\n    console.log(\"Agent not found\", error);\n  });\n  e.preventDefault();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kaXNwbGF5X2FnZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7RUFDaEJDLEtBQUssRUFBRSxzQ0FBc0M7RUFDN0NDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUNDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLE9BQU8sRUFBRSxzQ0FBc0M7RUFDL0NDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUNDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLE9BQU8sRUFBRSxzQ0FBc0M7RUFDL0NDLE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUNDLEtBQUssRUFBRSxzQ0FBc0M7RUFDN0NDLE9BQU8sRUFBRSxzQ0FBc0M7RUFDL0NDLEtBQUssRUFBRSxzQ0FBc0M7RUFDN0NDLFNBQVMsRUFBRSxzQ0FBc0M7RUFDakRDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLEtBQUssRUFBRSxzQ0FBc0M7RUFDN0NDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUNDLElBQUksRUFBRTtBQUNSLENBQUM7QUFFRCxTQUFTQyxhQUFhQSxDQUFDQyxNQUFNLEVBQUU7RUFDN0IsT0FBT0EsTUFBTSxDQUFDQyxXQUFXLEVBQUU7QUFDN0I7QUFFTyxTQUFTQyxRQUFRQSxDQUFDQyxDQUFDLEVBQUU7RUFDMUIsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsS0FBSztFQUN2RCxNQUFNQyxTQUFTLEdBQUdULGFBQWEsQ0FBQ0ssSUFBSSxDQUFDO0VBRXJDSyxLQUFLLENBQUUsc0NBQXFDaEMsU0FBUyxDQUFDK0IsU0FBUyxDQUFFLEVBQUMsQ0FBQyxDQUNoRUUsSUFBSSxDQUFFQyxRQUFRLElBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDbkNGLElBQUksQ0FBRUcsSUFBSSxJQUFLO0lBQ2RSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDUSxTQUFTLEdBQUk7QUFDdkQ7QUFDQSx5Q0FBeUNELElBQUksQ0FBQ0EsSUFBSSxDQUFDRSxZQUFhLFVBQVNGLElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxXQUFZO0FBQy9GO0FBQ0E7QUFDQSxZQUFZSCxJQUFJLENBQUNBLElBQUksQ0FBQ0csV0FBWTtBQUNsQyx3QkFBd0JILElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxXQUFZO0FBQzlDO0FBQ0EsT0FBTztFQUNILENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUVDLEtBQUssSUFBSztJQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVGLEtBQUssQ0FBQztFQUN2QyxDQUFDLENBQUM7RUFFSmhCLENBQUMsQ0FBQ21CLGNBQWMsRUFBRTtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbG9seXRpY3MvLi9zcmMvc2NyaXB0cy9kaXNwbGF5X2FnZW50LmpzP2VmZmYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWdlbnRVdWlkID0ge1xuICBnZWtrbzogXCJlMzcwZmE1Ny00NzU3LTM2MDQtMzY0OC00OTllMWY2NDJkM2ZcIixcbiAgZmFkZTogXCJkYWRlNjliNC00ZjVhLTg1MjgtMjQ3Yi0yMTllNWExZmFjZDZcIixcbiAgYnJlYWNoOiBcIjVmOGQzYTdmLTQ2N2ItOTdmMy0wNjJjLTEzYWNmMjAzYzAwNlwiLFxuICByYXplOiBcImY5NGMzYjMwLTQyYmUtZTk1OS04ODljLTVhYTMxM2RiYTI2MVwiLFxuICBjaGFtYmVyOiBcIjIyNjk3YTNkLTQ1YmYtOGRkNy00ZmVjLTg0YTllMjhjNjlkN1wiLFxuICBrYXlvOiBcIjYwMWRiYmU3LTQzY2UtYmU1Ny0yYTQwLTRhYmQyNDk1MzYyMVwiLFxuICBza3llOiBcIjZmMmEwNGNhLTQzZTAtYmUxNy03ZjM2LWIzOTA4NjI3NzQ0ZFwiLFxuICBjeXBoZXI6IFwiMTE3ZWQ5ZTMtNDlmMy02NTEyLTNjY2YtMGNhZGE3ZTM4MjNiXCIsXG4gIHNvdmE6IFwiZGVkMzUyMGYtNDI2NC1iZmVkLTE2MmQtYjA4MGUyYWJjY2Y5XCIsXG4gIGtpbGxqb3k6IFwiMWU1OGRlOWMtNDk1MC01MTI1LTkzZTktYTBhZWU5Zjk4NzQ2XCIsXG4gIGhhcmJvcjogXCI5NWI3OGVkNy00NjM3LTg2ZDktN2U0MS03MWJhOGMyOTMxNTJcIixcbiAgdmlwZXI6IFwiNzA3ZWFiNTEtNDgzNi1mNDg4LTA0NmEtY2RhNmJmNDk0ODU5XCIsXG4gIHBob2VuaXg6IFwiZWI5MzMzNmEtNDQ5Yi05YzFiLTBhNTQtYTg5MWY3OTIxZDY5XCIsXG4gIGFzdHJhOiBcIjQxZmI2OWMxLTQxODktN2IzNy1mMTE3LWJjYWYxZTk2ZjFiZlwiLFxuICBicmltc3RvbmU6IFwiOWYwZDhiYTktNDE0MC1iOTQxLTU3ZDMtYTdhZDU3YzZiNDE3XCIsXG4gIG5lb246IFwiYmIyYTQ4MjgtNDZlYi04Y2QxLWU3NjUtMTU4NDgxOTVkNzUxXCIsXG4gIHlvcnU6IFwiN2Y5NGQ5MmMtNDIzNC0wYTM2LTk2NDYtM2E4N2ViOGI1Yzg5XCIsXG4gIHNhZ2U6IFwiNTY5ZmRkOTUtNGQxMC00M2FiLWNhNzAtNzliZWNjNzE4YjQ2XCIsXG4gIHJleW5hOiBcImEzYmZiODUzLTQzYjItNzIzOC1hNGYxLWFkOTBlOWU0NmJjY1wiLFxuICBvbWVuOiBcIjhlMjUzOTMwLTRjMDUtMzFkZC0xYjZjLTk2ODUyNTQ5NDUxN1wiLFxuICBqZXR0OiBcImFkZDY0NDNhLTQxYmQtZTQxNC1mNmFkLWU1OGQyNjdmNGU5NVwiLFxufTtcblxuZnVuY3Rpb24gbG93ZXJDYXNlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlbnQoZSkge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZ2VudE5hbWVcIikudmFsdWU7XG4gIGNvbnN0IGFnZW50TmFtZSA9IGxvd2VyQ2FzZU5hbWUobmFtZSk7XG5cbiAgZmV0Y2goYGh0dHBzOi8vdmFsb3JhbnQtYXBpLmNvbS92MS9hZ2VudHMvJHthZ2VudFV1aWRbYWdlbnROYW1lXX1gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFnZW50Qm94XCIpLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXY+XG4gICAgICA8aW1nIGlkPVwidmFsby1mdWxsUG9ydHJhaXRcIiBzcmM9XCIke2RhdGEuZGF0YS5mdWxsUG9ydHJhaXR9XCIgYWx0PVwiJHtkYXRhLmRhdGEuZGlzcGxheU5hbWV9XCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWdlbnRJbmZvXCI+XG4gICAgICA8aDE+JHtkYXRhLmRhdGEuZGlzcGxheU5hbWV9PC9oMT5cbiAgICAgIDxwPkRlc2NyaXB0aW9uOiAke2RhdGEuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gIDwvZGl2PlxuICAgICAgYDtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWdlbnQgbm90IGZvdW5kXCIsIGVycm9yKTtcbiAgICB9KTtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG4iXSwibmFtZXMiOlsiYWdlbnRVdWlkIiwiZ2Vra28iLCJmYWRlIiwiYnJlYWNoIiwicmF6ZSIsImNoYW1iZXIiLCJrYXlvIiwic2t5ZSIsImN5cGhlciIsInNvdmEiLCJraWxsam95IiwiaGFyYm9yIiwidmlwZXIiLCJwaG9lbml4IiwiYXN0cmEiLCJicmltc3RvbmUiLCJuZW9uIiwieW9ydSIsInNhZ2UiLCJyZXluYSIsIm9tZW4iLCJqZXR0IiwibG93ZXJDYXNlTmFtZSIsInN0cmluZyIsInRvTG93ZXJDYXNlIiwiZ2V0QWdlbnQiLCJlIiwibmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiYWdlbnROYW1lIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImlubmVySFRNTCIsImZ1bGxQb3J0cmFpdCIsImRpc3BsYXlOYW1lIiwiZGVzY3JpcHRpb24iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/display_agent.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxvbHl0aWNzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;