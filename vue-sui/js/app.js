/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vue_sui_SignInWithSui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-sui/SignInWithSui.vue */ \"./src/vue-sui/SignInWithSui.vue\");\n/* harmony import */ var _vue_sui_SignInWithSuiButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-sui/SignInWithSuiButton.vue */ \"./src/vue-sui/SignInWithSuiButton.vue\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    SignInWithSui: _vue_sui_SignInWithSui_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    SignInWithSuiButton: _vue_sui_SignInWithSuiButton_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      connectedAddress: null,\n      connectedChain: null,\n      defaultChain: 'sui:mainnet',\n      extra: [],\n      tryingTo: null,\n      events: [],\n      adapter: null,\n      suiMaster: null\n    };\n  },\n  methods: {\n    onWrongChain(tryingTo) {\n      this.events.push({\n        name: 'wrongchain',\n        args: arguments\n      });\n      this.connectedAddress = null;\n      this.connectedChain = null;\n      this.tryingTo = tryingTo;\n    },\n    onSuiMaster(suiMaster) {\n      this.events.push({\n        name: 'suiMaster',\n        args: [suiMaster ? 'instance_of_SuiMaster' : null]\n      });\n      this.connectedAddress = suiMaster.address;\n      this.connectedChain = suiMaster.connectedChain;\n      this.suiMaster = suiMaster;\n      this.tryingTo = null;\n    },\n    onConnected() {\n      this.events.push({\n        name: 'connected',\n        args: arguments\n      });\n    },\n    onProvider(provider) {\n      this.events.push({\n        name: 'provider',\n        args: [provider ? 'instance_of_SuiClient' : null]\n      });\n    },\n    onClient(client) {\n      this.events.push({\n        name: 'client',\n        args: [client ? 'instance_of_SuiClient' : null]\n      });\n    },\n    onAdapter(adapter) {\n      console.error(adapter);\n      this.events.push({\n        name: 'adapter',\n        args: [adapter ? 'instance_of_SuiInBrowserAdapter' : null]\n      });\n      this.adapter = adapter;\n    },\n    onDisconnected() {\n      this.events.push({\n        name: 'disconnected',\n        args: arguments\n      });\n      this.connectedAddress = null;\n\n      // this.connectedChain = null; // provider is still available, read-only mode\n      this.tryingTo = null;\n    },\n    clickDisconnect() {\n      this.adapter.disconnect();\n    },\n    async onTx() {\n      const suiCoin = this.suiMaster.suiCoins.get('sui');\n      const tx = new this.suiMaster.Transaction();\n      const coinInput = await suiCoin.coinOfAmountToTxCoin(tx, this.suiMaster.address, '0.01'); // pick 0.01 SUI\n\n      tx.transferObjects([coinInput], tx.pure(this.suiMaster.address)); // send it to yourself\n\n      const result = await this.suiMaster.signAndExecuteTransaction({\n        transaction: tx,\n        requestType: 'WaitForLocalExecution',\n        options: {}\n      });\n      if (result && result.digest) {\n        alert('tx sent, digest: ' + result.digest);\n        // this.events.push({name: 'tx sent', args: [result.digest]});\n      } else {\n        // this.events.push({name: 'tx not sent', args: []});\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://vue-sui/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSui.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSui.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SuidoubleSync_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuidoubleSync.vue */ \"./src/vue-sui/SuidoubleSync.vue\");\n/* harmony import */ var _SignInWithSuiDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInWithSuiDialog.vue */ \"./src/vue-sui/SignInWithSuiDialog.vue\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'SignInWithSui',\n  emits: ['suiMaster', 'provider', 'client', 'adapter', 'disconnected', 'connected', 'wrongchain'],\n  props: {\n    defaultChain: {\n      default: 'sui:devnet',\n      type: String\n    },\n    auto: {\n      default: false,\n      type: Boolean\n    },\n    visible: {\n      default: true,\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      isLoading: false,\n      libsRequested: true,\n      adapters: [],\n      connectedAddress: null,\n      connectedChain: null,\n      forceChainCalculated: null,\n      suiMaster: null,\n      showingDialog: false\n    };\n  },\n  watch: {\n    defaultChain: async function () {\n      // reinit child component\n      this.connectedAddress = null;\n      this.connectedChain = null;\n      this.suiMaster = null;\n      console.error('switched');\n      this.libsRequested = false;\n      await new Promise(res => setTimeout(res, 50));\n      this.libsRequested = true;\n    }\n  },\n  computed: {\n    displayAddress() {\n      return ('' + this.connectedAddress).substr(0, 6) + '...' + ('' + this.connectedAddress).substr(-4);\n    }\n  },\n  components: {\n    SuidoubleSync: _SuidoubleSync_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    SignInWithSuiDialog: _SignInWithSuiDialog_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  methods: {\n    /**\n     * SuiMaster instance updated\n     * @param {SuiMaster} suiMaster \n     */\n    onSuiMaster(suiMaster) {\n      this.suiMaster = suiMaster;\n      if (!this.defaultChain || this.defaultChain == this.suiMaster.connectedChain) {\n        this.$emit('suiMaster', suiMaster);\n        suiMaster.getClient().then(client => {\n          this.$emit('client', client);\n          this.$emit('provider', client); // compatibility with 0.x versions\n\n          if (suiMaster.signer && suiMaster.signer.activeAdapter) {\n            this.$emit('adapter', suiMaster.signer.activeAdapter);\n          }\n        });\n      }\n      if (this.__suiMasterPromise) {\n        if (this.suiMaster) {\n          this.__suiMasterPromiseResolver();\n          this.__suiMasterPromise = null;\n        }\n      }\n      if (this.__connectedSuiMasterPromise) {\n        if (this.isSuiMasterConnected()) {\n          this.__connectedSuiMasterPromiseResolver();\n          this.__connectedSuiMasterPromise = null;\n        }\n      }\n    },\n    onSuiAdapters(adapters) {\n      this.adapters = adapters;\n    },\n    isSuiMasterConnected(requireChainName = null) {\n      if (this.suiMaster && this.suiMaster.address) {\n        if (requireChainName && this.suiMaster.connectedChain != requireChainName) {\n          return false;\n        }\n        return true;\n      } else if (this.suiMaster && this.suiMaster.signer && this.suiMaster.signer.connectedAddress) {\n        // backward compatible\n        if (requireChainName && this.suiMaster.signer.connectedChain != requireChainName) {\n          return false;\n        }\n        return true;\n      }\n      return false;\n    },\n    async onAdapterClick(adapter) {\n      this.showingDialog = false;\n      if (adapter.isDefault && !adapter.isInstalled) {\n        window.open(adapter.getDownloadURL(), '_blank');\n        return false;\n      }\n      this.isLoading = true;\n      await this.$refs.sui.suiInBrowser.connect(adapter);\n      this.isLoading = false;\n    },\n    async requestSuiMaster() {\n      if (this.suiMaster) {\n        return this.suiMaster;\n      }\n      await this.requestLibs();\n      await new Promise(res => {\n        setTimeout(res, 200);\n      }); // let providers check if we are already connected\n\n      if (this.suiMaster) {\n        return this.suiMaster;\n      }\n      if (this.__suiMasterPromise) {\n        await this.__suiMasterPromise;\n        if (this.suiMaster) {\n          return this.suiMaster;\n        } else {\n          throw new Error('can not get suiMaster');\n        }\n      }\n      this.__suiMasterPromiseResolver = null;\n      this.__suiMasterPromise = new Promise(res => {\n        this.__suiMasterPromiseResolver = res;\n      });\n      await this.__suiMasterPromise;\n      if (this.suiMaster) {\n        return this.suiMaster;\n      } else {\n        throw new Error('can not get suiMaster');\n      }\n    },\n    async requestConnectedSuiMaster(requireChainName = null) {\n      if (this.isSuiMasterConnected(requireChainName)) {\n        return this.suiMaster;\n      }\n      await this.requestLibs();\n      await new Promise(res => {\n        setTimeout(res, 200);\n      }); // let providers check if we are already connected\n\n      if (this.isSuiMasterConnected(requireChainName)) {\n        return this.suiMaster;\n      }\n      this.isLoading = true;\n      if (this.__connectedSuiMasterPromise) {\n        await this.__connectedSuiMasterPromise;\n        this.isLoading = false;\n        if (this.isSuiMasterConnected(requireChainName)) {\n          return this.suiMaster;\n        } else {\n          throw new Error('can not get connection');\n        }\n      }\n      this.__connectedSuiMasterPromiseResolver = null;\n      this.__connectedSuiMasterPromise = new Promise(res => {\n        this.__connectedSuiMasterPromiseResolver = res;\n      });\n      this.showingDialog = true;\n      await this.__connectedSuiMasterPromise;\n      this.isLoading = false;\n      if (this.isSuiMasterConnected(requireChainName)) {\n        return this.suiMaster;\n      } else {\n        throw new Error('can not get connection');\n      }\n    },\n    async onClick() {\n      this.isLoading = true;\n      await this.requestLibs();\n      await new Promise(res => {\n        setTimeout(res, 200);\n      }); // let providers check if we are already connected\n\n      if (!this.connectedAddress) {\n        this.showingDialog = true;\n      }\n      this.isLoading = false;\n    },\n    async initialize() {\n      if (this.auto) {\n        this.isLoading = true;\n        await this.requestLibs();\n        this.isLoading = false;\n      }\n    },\n    async requestLibs() {\n      this.libsRequested = true;\n      await this.__libsRequestedPromise;\n    },\n    onLibsLoaded() {\n      this.__libsRequestedPromiseResolver();\n    },\n    onConnected() {\n      this.showingDialog = false;\n      const connectedChain = this.$refs.sui.suiInBrowser.connectedChain;\n      if (!this.defaultChain || this.defaultChain == connectedChain) {\n        this.connectedAddress = this.$refs.sui.suiInBrowser.connectedAddress;\n        this.connectedChain = this.$refs.sui.suiInBrowser.connectedChain;\n        this.$emit('connected', this.connectedAddress);\n      } else {\n        this.connectedAddress = null;\n        this.$emit('wrongchain', connectedChain);\n      }\n    },\n    onDisconnected() {\n      this.connectedAddress = null;\n      this.$emit('disconnected');\n    }\n  },\n  beforeMount: function () {\n    this.__libsRequestedPromiseResolver = null;\n    this.__libsRequestedPromise = new Promise(res => {\n      this.__libsRequestedPromiseResolver = res;\n    });\n  },\n  mounted: async function () {\n    this.initialize();\n  }\n});\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSui.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiButton.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiButton.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SignInWithSui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignInWithSui.vue */ \"./src/vue-sui/SignInWithSui.vue\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'SignInWithSuiButton',\n  emits: ['suiMaster', 'provider', 'client', 'adapter', 'disconnected', 'connected', 'wrongchain'],\n  props: {\n    defaultChain: {\n      default: 'sui:devnet',\n      type: String\n    }\n  },\n  components: {\n    SignInWithSui: _SignInWithSui_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      connectedAddress: null,\n      connectedChain: null\n    };\n  },\n  methods: {\n    onConnected(connectedAddress) {\n      this.connectedAddress = connectedAddress;\n      this.$emit('connected', connectedAddress);\n    },\n    onWrongChain(tryingTo) {\n      this.$emit('wrongchain', tryingTo);\n    },\n    onSuiMaster(suiMaster) {\n      this.$emit('suiMaster', suiMaster);\n    },\n    onProvider(provider) {\n      this.$emit('client', provider);\n      this.$emit('provider', provider); // compatible with 0.x versions\n    },\n    onAdapter(adapter) {\n      this.$emit('adapter', adapter);\n    }\n  }\n});\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiButton.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiDialog.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiDialog.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'SignInWithSuiDialog',\n  emits: ['click', 'hidden'],\n  props: {\n    adapters: {\n      type: Array,\n      default() {\n        return [];\n      }\n    },\n    showing: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data() {\n    return {\n      isActive: false,\n      isVisible: false\n    };\n  },\n  watch: {\n    showing: function () {\n      if (this.showing) {\n        this.show();\n      } else {\n        this.hide();\n      }\n    }\n  },\n  computed: {},\n  components: {},\n  methods: {\n    onAdapterClick(adapter) {\n      this.$emit('click', adapter);\n    },\n    show() {\n      this.isActive = true;\n      setTimeout(() => {\n        this.isVisible = true;\n      }, 10);\n    },\n    hide() {\n      this.isVisible = false;\n      setTimeout(() => {\n        this.isActive = false;\n        this.$emit('hidden');\n      }, 300);\n    },\n    onBackdrop() {\n      this.hide();\n    }\n  },\n  beforeMount: function () {},\n  mounted: async function () {}\n});\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiDialog.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SuidoubleSync.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SuidoubleSync.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst {\n  SuiInBrowser\n} = __webpack_require__(/*! suidouble */ \"./node_modules/suidouble/index.js\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'SuiSync',\n  props: {\n    defaultChain: {\n      default: 'sui:devnet',\n      type: String\n    }\n  },\n  data() {\n    return {\n      connectedAddress: null,\n      connectedChain: null,\n      adapters: [],\n      suiInBrowser: null,\n      suiMaster: null,\n      lastSuiMasterInstanceN: null\n    };\n  },\n  emits: ['connect', 'connected', 'loaded', 'disconnected', 'error', 'suiMaster', 'adapters'],\n  components: {},\n  watch: {},\n  methods: {\n    async reinitSueMaster() {\n      this.suiMaster = await this.suiInBrowser.getSuiMaster();\n      if (!this.lastSuiMasterInstanceN || this.lastSuiMasterInstanceN != this.suiMaster.instanceN) {\n        this.$emit('suiMaster', this.suiMaster);\n      }\n    }\n  },\n  mounted: function () {\n    this.suiInBrowser = SuiInBrowser.getSingleton({\n      debug: true,\n      defaultChain: this.defaultChain\n    });\n    console.log('mounted', this.suiInBrowser._defaultChain);\n    this.adapters = Object.values(this.suiInBrowser.adapters);\n    this.suiInBrowser.addEventListener('adapter', e => {\n      this.adapters.push(e.detail);\n      console.log(e.detail);\n      this.$emit('adapters', this.adapters);\n    });\n    this.suiInBrowser.addEventListener('connected', () => {\n      this.connectedAddress = this.suiInBrowser.connectedAddress;\n      this.connectedChain = this.suiInBrowser.connectedChain;\n      this.reinitSueMaster();\n      this.$emit('connected', this.suiInBrowser);\n    });\n    this.suiInBrowser.addEventListener('disconnected', () => {\n      this.connectedAddress = null;\n      this.connectedChain = null;\n      this.$emit('disconnected');\n    });\n    this.$nextTick(() => {\n      this.$emit('loaded', this.suiInBrowser);\n      this.$emit('adapters', this.adapters);\n    });\n    if (this.suiInBrowser.isConnected) {\n      this.connectedAddress = this.suiInBrowser.connectedAddress;\n      this.connectedChain = this.suiInBrowser.connectedChain;\n      this.reinitSueMaster();\n      this.$emit('connected', this.suiInBrowser);\n    }\n    this.reinitSueMaster();\n  },\n  computed: {}\n});\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SuidoubleSync.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  style: {\n    \"float\": \"left\",\n    \"width\": \"50%\",\n    \"overflow\": \"hidden\"\n  }\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"vue-sui\", -1 /* HOISTED */);\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Demo of the \"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"https://github.com/suidouble/vue-sui\"\n}, \"vue-sui\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" component. Vue component to connect your dapp to Sui blockchain.\")])], -1 /* HOISTED */);\nconst _hoisted_4 = {\n  key: 0\n};\nconst _hoisted_5 = {\n  key: 1\n};\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_8 = {\n  key: 2\n};\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"With your own button. Note visible=false, you control button title yourself\", -1 /* HOISTED */);\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" \", -1 /* HOISTED */);\nconst _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Pre-defined styling:\", -1 /* HOISTED */);\nconst _hoisted_12 = {\n  key: 0\n};\nconst _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Also try to disconnect or switch chain directly from browser extension\", -1 /* HOISTED */);\nconst _hoisted_14 = {\n  style: {\n    \"float\": \"right\",\n    \"width\": \"50%\",\n    \"overflow\": \"hidden\"\n  }\n};\nconst _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Events:\", -1 /* HOISTED */);\nconst _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"List of events attached to the very first component (non-styled one)\", -1 /* HOISTED */);\nconst _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"name:\", -1 /* HOISTED */);\nconst _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"details:\", -1 /* HOISTED */);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_SignInWithSui = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"SignInWithSui\");\n  const _component_SignInWithSuiButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"SignInWithSuiButton\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Connected as: \"), !$data.connectedAddress && $data.connectedChain ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", _hoisted_4, \"read-only\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), $data.connectedAddress && $data.connectedChain ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.connectedAddress), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Connected to: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.connectedChain), 1 /* TEXT */), _hoisted_7, $data.tryingTo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", _hoisted_8, \"Was trying to connect to \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.tryingTo) + \", but expected to \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.defaultChain) + \" (ask user to switch chain in wallet extension settings or reinitialize/redirect to different chain dapp/sub-dapp)\", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[0] || (_cache[0] = $event => {\n      this.$refs.sui.onClick();\n    })\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Connect \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SignInWithSui, {\n    ref: \"sui\",\n    defaultChain: $data.defaultChain,\n    onConnected: $options.onConnected,\n    onClient: $options.onClient,\n    onSuiMaster: $options.onSuiMaster,\n    onProvider: $options.onProvider,\n    onAdapter: $options.onAdapter,\n    onDisconnected: $options.onDisconnected,\n    visible: false\n  }, null, 8 /* PROPS */, [\"defaultChain\", \"onConnected\", \"onClient\", \"onSuiMaster\", \"onProvider\", \"onAdapter\", \"onDisconnected\"])]), _hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SignInWithSuiButton, {\n    defaultChain: $data.defaultChain,\n    onWrongchain: $options.onWrongChain\n  }, null, 8 /* PROPS */, [\"defaultChain\", \"onWrongchain\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"switch `defaultChain` component prop to: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \"#\",\n    onClick: _cache[1] || (_cache[1] = $event => {\n      $data.defaultChain = 'sui:mainnet';\n    })\n  }, \"sui:mainnet\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \"#\",\n    onClick: _cache[2] || (_cache[2] = $event => {\n      $data.defaultChain = 'sui:devnet';\n    })\n  }, \"sui:devnet\")]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.extra, item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: item\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SignInWithSuiButton, {\n      defaultChain: $data.defaultChain\n    }, null, 8 /* PROPS */, [\"defaultChain\"])]);\n  }), 128 /* KEYED_FRAGMENT */)), $data.adapter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \"#\",\n    onClick: _cache[3] || (_cache[3] = (...args) => $options.clickDisconnect && $options.clickDisconnect(...args))\n  }, \"disconnect\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" (may not be available in some wallets)\")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \"#\",\n    onClick: _cache[4] || (_cache[4] = $event => {\n      $data.extra.push(Math.random());\n    })\n  }, \"add extra button\")]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Execute some tx: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[5] || (_cache[5] = (...args) => $options.onTx && $options.onTx(...args))\n  }, \"Do TX\")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [_hoisted_15, _hoisted_16, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.events, (event, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: index\n    }, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(event.name) + \" \", 1 /* TEXT */), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(JSON.stringify(event.args)), 1 /* TEXT */)]);\n  }), 128 /* KEYED_FRAGMENT */))])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://vue-sui/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSui.vue?vue&type=template&id=74805907":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSui.vue?vue&type=template&id=74805907 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  key: 0\n};\nconst _hoisted_2 = {\n  key: 1\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_SignInWithSuiDialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"SignInWithSuiDialog\");\n  const _component_SuidoubleSync = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"SuidoubleSync\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [$props.visible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    key: 0,\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))\n  }, [!$data.connectedAddress ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", _hoisted_1, \"Connect with Sui\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), $data.connectedAddress ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", _hoisted_2, \"Connected as \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.displayAddress) + \" (\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.connectedChain) + \")\", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SignInWithSuiDialog, {\n    showing: $data.showingDialog,\n    onHidden: _cache[1] || (_cache[1] = $event => {\n      this.showingDialog = false;\n    }),\n    adapters: $data.adapters,\n    onClick: $options.onAdapterClick\n  }, null, 8 /* PROPS */, [\"showing\", \"adapters\", \"onClick\"]), $data.libsRequested ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SuidoubleSync, {\n    key: 1,\n    ref: \"sui\",\n    defaultChain: $props.defaultChain,\n    onAdapters: $options.onSuiAdapters,\n    onSuiMaster: $options.onSuiMaster,\n    onLoaded: $options.onLibsLoaded,\n    onConnected: $options.onConnected,\n    onDisconnected: $options.onDisconnected\n  }, null, 8 /* PROPS */, [\"defaultChain\", \"onAdapters\", \"onSuiMaster\", \"onLoaded\", \"onConnected\", \"onDisconnected\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSui.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiButton.vue?vue&type=template&id=efeeb7ce&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiButton.vue?vue&type=template&id=efeeb7ce&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_SignInWithSui = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"SignInWithSui\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: \"signinwithsui_button\",\n    onClick: _cache[1] || (_cache[1] = $event => {\n      this.$refs.signin.onClick();\n    })\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SignInWithSui, {\n    defaultChain: $props.defaultChain,\n    ref: \"signin\",\n    onProvider: $options.onProvider,\n    onOnAdapter: $options.onAdapter,\n    onWrongchain: $options.onWrongChain,\n    onConnected: $options.onConnected,\n    onDisconnected: _cache[0] || (_cache[0] = $event => this.$emit('disconnected')),\n    onSuiMaster: $options.onSuiMaster\n  }, null, 8 /* PROPS */, [\"defaultChain\", \"onProvider\", \"onOnAdapter\", \"onWrongchain\", \"onConnected\", \"onSuiMaster\"])]);\n}\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiButton.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiDialog.vue?vue&type=template&id=201b7f2f&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiDialog.vue?vue&type=template&id=201b7f2f&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-201b7f2f\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  key: 0,\n  class: \"signinwithsui_dialog\"\n};\nconst _hoisted_2 = {\n  class: \"signinwithsui_dialog_inner_card\"\n};\nconst _hoisted_3 = {\n  class: \"signinwithsui_dialog_list\"\n};\nconst _hoisted_4 = [\"onClick\"];\nconst _hoisted_5 = {\n  class: \"signinwithsui_dialog_item_column signinwithsui_dialog_item_icon\"\n};\nconst _hoisted_6 = [\"src\"];\nconst _hoisted_7 = {\n  class: \"signinwithsui_dialog_item_column signinwithsui_dialog_item_name\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return $data.isActive ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"signinwithsui_dialog_backdrop\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.onBackdrop && $options.onBackdrop(...args))\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"signinwithsui_dialog_inner\", {\n      signinwithsui_dialog_inner_active: $data.isVisible\n    }])\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.adapters, (adapter, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      key: index\n    }, [adapter.isDefault || adapter.okForSui ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: 0,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"signinwithsui_dialog_item\", {\n        signinwithsui_dialog_item_disabled: adapter.isDefault\n      }]),\n      onClick: $event => $options.onAdapterClick(adapter)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <img loading=\\\"lazy\\\" fetchpriority=\\\"auto\\\" aria-hidden=\\\"true\\\" draggable=\\\"false\\\" src=\\\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiByeD0iMTYiIGZpbGw9IiM2RkJDRjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC40MjEzIDUyLjc4MzhDMjMuNjQ5NiA1OC4zNzYgMjkuNDMyMSA2MS43MTQyIDM1Ljg4ODggNjEuNzE0MkM0Mi4zNDU1IDYxLjcxNDIgNDguMTI3IDU4LjM3NiA1MS4zNTY0IDUyLjc4MzhDNTQuNTg0OCA0Ny4xOTI2IDU0LjU4NDggNDAuNTE2MyA1MS4zNTY0IDM0LjkyNEwzNy43NTI0IDExLjM2MTVDMzYuOTI0MSA5LjkyNzAxIDM0Ljg1MzUgOS45MjcwMSAzNC4wMjUzIDExLjM2MTVMMjAuNDIxMyAzNC45MjRDMTcuMTkyOSA0MC41MTUyIDE3LjE5MjkgNDcuMTkxNSAyMC40MjEzIDUyLjc4MzhaTTMyLjA1NjYgMjIuNTcxM0wzNC45NTcxIDE3LjU0NzRDMzUuMzcxMiAxNi44MzAxIDM2LjQwNjUgMTYuODMwMSAzNi44MjA2IDE3LjU0NzRMNDcuOTc5MSAzNi44NzQ4QzUwLjAyOTEgNDAuNDI1NCA1MC40MTM5IDQ0LjUzNSA0OS4xMzM1IDQ4LjI5NTRDNDkuMDAwMiA0Ny42ODE5IDQ4LjgxMzggNDcuMDU0MiA0OC41NjI2IDQ2LjQyMDFDNDcuMDIxMyA0Mi41MzA0IDQzLjUzNjMgMzkuNTI4OSAzOC4yMDIzIDM3LjQ5ODJDMzQuNTM1MSAzNi4xMDcxIDMyLjE5NDMgMzQuMDYxMyAzMS4yNDMxIDMxLjQxNzFDMzAuMDE4IDI4LjAwODkgMzEuMjk3NiAyNC4yOTI0IDMyLjA1NjYgMjIuNTcxM1pNMjcuMTEwNyAzMS4xMzc5TDIzLjc5ODYgMzYuODc0OEMyMS4yNzQ4IDQxLjI0NTkgMjEuMjc0OCA0Ni40NjQxIDIzLjc5ODYgNTAuODM1M0MyNi4zMjIzIDU1LjIwNjQgMzAuODQxMyA1Ny44MTUgMzUuODg4OCA1Ny44MTVDMzkuMjQxMyA1Ny44MTUgNDIuMzYxNSA1Ni42NjMzIDQ0LjgxODQgNTQuNjA4OEM0NS4xMzg4IDUzLjgwMjEgNDYuMTMxIDUwLjg0OTIgNDQuOTA1MiA0Ny44MDU4QzQzLjc3MyA0NC45OTU0IDQxLjA0ODIgNDIuNzUxOSAzNi44MDYxIDQxLjEzNkMzMi4wMTEgMzkuMzE3MSAyOC44OTU4IDM2LjQ3NzQgMjcuNTQ4NiAzMi42OTg0QzI3LjM2MzEgMzIuMTc4MSAyNy4yMTg5IDMxLjY1NjggMjcuMTEwNyAzMS4xMzc5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+\\\"> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n      loading: \"lazy\",\n      fetchpriority: \"auto\",\n      \"aria-hidden\": \"true\",\n      draggable: \"false\",\n      src: adapter.icon\n    }, null, 8 /* PROPS */, _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(adapter.name), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)], 64 /* STABLE_FRAGMENT */);\n  }), 128 /* KEYED_FRAGMENT */))])])], 2 /* CLASS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true);\n}\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiDialog.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SuidoubleSync.vue?vue&type=template&id=60cd551b":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SuidoubleSync.vue?vue&type=template&id=60cd551b ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\");\n}\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SuidoubleSync.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack://vue-sui/./src/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n#app {\n\t\tfont-family: Avenir, Helvetica, Arial, sans-serif;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\tcolor: #2c3e50;\n\t\tmargin-top: 60px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-sui/./src/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.signinwithsui_button[data-v-201b7f2f] {\n\t/* box-shadow:inset 0px -3px 7px 0px #29bbff; */\n\tbackground:linear-gradient(to bottom, #3898ec 5%, #4ca3ff 100%);\n\tborder-radius:3px;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tpadding:9px 23px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #263666;\n    transition: background 1s ease-out;  \n    -webkit-user-select: none;  \n       -moz-user-select: none;  \n            user-select: none;\n    margin: 0;\n}\n.signinwithsui_button[data-v-201b7f2f]:hover {\n\tbackground:linear-gradient(to bottom, #4ca3ff 5%, #3898ec 100%);\n}\n.signinwithsui_dialog[data-v-201b7f2f] {\n\tcolor:#fff;\n    text-shadow: none;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 60000;\n\tborder-radius: 0!important;\n\tmax-width: 100vw;\n\tmax-height: 100vh;\n\tposition: fixed;\n\tpointer-events: none!important;\n\tdisplay: block;\n}\n.signinwithsui_dialog_backdrop[data-v-201b7f2f] {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    pointer-events: all;\n    outline: 0;\n    background: rgba(0,0,0,0.2);\n    position: fixed;\n}\n.signinwithsui_dialog_inner[data-v-201b7f2f] {\n    top: 0;\n    right: 0;\n    left: 0;\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 0!important;\n    padding-bottom: 0!important;\n    padding: 24px;\n    outline: 0;\n    transform: translateY(-100%);\n    transition: transform 0.3s ease-in-out;\n}\n.signinwithsui_dialog_inner.signinwithsui_dialog_inner_active[data-v-201b7f2f] {\n    transform: translateY(0%);\n}\n.signinwithsui_dialog_inner_card[data-v-201b7f2f] {\n    background-color: rgba(56, 152, 236, 0.6);\n    -webkit-backdrop-filter: blur(7px);\n    backdrop-filter: blur(7px);\n    -webkit-tap-highlight-color: transparent;  \n    position: relative;\n    vertical-align: top;\n    border-color: hsla(0,0%,100%,.28);\n    box-shadow: 0 1px 5px hsla(0,0%,100%,.2), 0 2px 2px hsla(0,0%,100%,.14), 0 3px 1px -2px hsla(0,0%,100%,.12);\n    pointer-events: all;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    will-change: scroll-position;\n    border-radius: 4px;\n    width: 50%;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n    max-width: 560px;\n    max-height: calc(100vh - 48px);\n}\n.signinwithsui_dialog_item[data-v-201b7f2f] {\n    cursor: pointer;\n    outline: 0;\n    text-decoration: none;\n    flex-wrap: nowrap;\n    position: relative;\n    display: flex;    \n    color: #fff;\n    border-color: hsla(0,0%,100%,.28);\n    min-height: 48px;\n    padding: 8px 16px;\n    color: inherit;\n    transition: color .3s,background-color .3s;\n    pointer-events: all;\n    background-color: transparent;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n.signinwithsui_dialog_item_disabled[data-v-201b7f2f] {\n    opacity: 0.4;\n}\n.signinwithsui_dialog_item[data-v-201b7f2f]:hover {\n    background-color: rgba(0,0,0,0.3);\n}\n.signinwithsui_dialog_item_column[data-v-201b7f2f] {\n    align-items: flex-start;\n    padding-right: 16px;\n    width: auto;\n    min-width: 0;\n    max-width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    flex-direction: column;\n    color: inherit;\n}\n.signinwithsui_dialog_item_icon[data-v-201b7f2f] {\n    width: 42px;\n    height: 42px;\n    overflow: hidden;\n}\n.signinwithsui_dialog_item_name[data-v-201b7f2f] {\n    height: 42px;\n    font-size: 16px;\n    padding-left: 16px;\n}\n.signinwithsui_dialog_item_icon img[data-v-201b7f2f] {\n    width: 42px;\n    height: 42px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/style.css?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.signinwithsui_button[data-v-efeeb7ce] {\n\t/* box-shadow:inset 0px -3px 7px 0px #29bbff; */\n\tbackground:linear-gradient(to bottom, #3898ec 5%, #4ca3ff 100%);\n\tborder-radius:3px;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tpadding:9px 23px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #263666;\n    transition: background 1s ease-out;  \n    -webkit-user-select: none;  \n       -moz-user-select: none;  \n            user-select: none;\n    margin: 0;\n}\n.signinwithsui_button[data-v-efeeb7ce]:hover {\n\tbackground:linear-gradient(to bottom, #4ca3ff 5%, #3898ec 100%);\n}\n.signinwithsui_dialog[data-v-efeeb7ce] {\n\tcolor:#fff;\n    text-shadow: none;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 60000;\n\tborder-radius: 0!important;\n\tmax-width: 100vw;\n\tmax-height: 100vh;\n\tposition: fixed;\n\tpointer-events: none!important;\n\tdisplay: block;\n}\n.signinwithsui_dialog_backdrop[data-v-efeeb7ce] {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    pointer-events: all;\n    outline: 0;\n    background: rgba(0,0,0,0.2);\n    position: fixed;\n}\n.signinwithsui_dialog_inner[data-v-efeeb7ce] {\n    top: 0;\n    right: 0;\n    left: 0;\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 0!important;\n    padding-bottom: 0!important;\n    padding: 24px;\n    outline: 0;\n    transform: translateY(-100%);\n    transition: transform 0.3s ease-in-out;\n}\n.signinwithsui_dialog_inner.signinwithsui_dialog_inner_active[data-v-efeeb7ce] {\n    transform: translateY(0%);\n}\n.signinwithsui_dialog_inner_card[data-v-efeeb7ce] {\n    background-color: rgba(56, 152, 236, 0.6);\n    -webkit-backdrop-filter: blur(7px);\n    backdrop-filter: blur(7px);\n    -webkit-tap-highlight-color: transparent;  \n    position: relative;\n    vertical-align: top;\n    border-color: hsla(0,0%,100%,.28);\n    box-shadow: 0 1px 5px hsla(0,0%,100%,.2), 0 2px 2px hsla(0,0%,100%,.14), 0 3px 1px -2px hsla(0,0%,100%,.12);\n    pointer-events: all;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    will-change: scroll-position;\n    border-radius: 4px;\n    width: 50%;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n    max-width: 560px;\n    max-height: calc(100vh - 48px);\n}\n.signinwithsui_dialog_item[data-v-efeeb7ce] {\n    cursor: pointer;\n    outline: 0;\n    text-decoration: none;\n    flex-wrap: nowrap;\n    position: relative;\n    display: flex;    \n    color: #fff;\n    border-color: hsla(0,0%,100%,.28);\n    min-height: 48px;\n    padding: 8px 16px;\n    color: inherit;\n    transition: color .3s,background-color .3s;\n    pointer-events: all;\n    background-color: transparent;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n.signinwithsui_dialog_item_disabled[data-v-efeeb7ce] {\n    opacity: 0.4;\n}\n.signinwithsui_dialog_item[data-v-efeeb7ce]:hover {\n    background-color: rgba(0,0,0,0.3);\n}\n.signinwithsui_dialog_item_column[data-v-efeeb7ce] {\n    align-items: flex-start;\n    padding-right: 16px;\n    width: auto;\n    min-width: 0;\n    max-width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    flex-direction: column;\n    color: inherit;\n}\n.signinwithsui_dialog_item_icon[data-v-efeeb7ce] {\n    width: 42px;\n    height: 42px;\n    overflow: hidden;\n}\n.signinwithsui_dialog_item_name[data-v-efeeb7ce] {\n    height: 42px;\n    font-size: 16px;\n    padding-left: 16px;\n}\n.signinwithsui_dialog_item_icon img[data-v-efeeb7ce] {\n    width: 42px;\n    height: 42px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/style.css?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-sui/./src/App.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSui.vue":
/*!***************************************!*\
  !*** ./src/vue-sui/SignInWithSui.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SignInWithSui_vue_vue_type_template_id_74805907__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignInWithSui.vue?vue&type=template&id=74805907 */ \"./src/vue-sui/SignInWithSui.vue?vue&type=template&id=74805907\");\n/* harmony import */ var _SignInWithSui_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInWithSui.vue?vue&type=script&lang=js */ \"./src/vue-sui/SignInWithSui.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_SignInWithSui_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_SignInWithSui_vue_vue_type_template_id_74805907__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/vue-sui/SignInWithSui.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSui.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSuiButton.vue":
/*!*********************************************!*\
  !*** ./src/vue-sui/SignInWithSuiButton.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SignInWithSuiButton_vue_vue_type_template_id_efeeb7ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignInWithSuiButton.vue?vue&type=template&id=efeeb7ce&scoped=true */ \"./src/vue-sui/SignInWithSuiButton.vue?vue&type=template&id=efeeb7ce&scoped=true\");\n/* harmony import */ var _SignInWithSuiButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInWithSuiButton.vue?vue&type=script&lang=js */ \"./src/vue-sui/SignInWithSuiButton.vue?vue&type=script&lang=js\");\n/* harmony import */ var _style_css_vue_type_style_index_0_id_efeeb7ce_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external */ \"./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_SignInWithSuiButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_SignInWithSuiButton_vue_vue_type_template_id_efeeb7ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-efeeb7ce\"],['__file',\"src/vue-sui/SignInWithSuiButton.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiButton.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSuiDialog.vue":
/*!*********************************************!*\
  !*** ./src/vue-sui/SignInWithSuiDialog.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SignInWithSuiDialog_vue_vue_type_template_id_201b7f2f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignInWithSuiDialog.vue?vue&type=template&id=201b7f2f&scoped=true */ \"./src/vue-sui/SignInWithSuiDialog.vue?vue&type=template&id=201b7f2f&scoped=true\");\n/* harmony import */ var _SignInWithSuiDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInWithSuiDialog.vue?vue&type=script&lang=js */ \"./src/vue-sui/SignInWithSuiDialog.vue?vue&type=script&lang=js\");\n/* harmony import */ var _style_css_vue_type_style_index_0_id_201b7f2f_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external */ \"./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_SignInWithSuiDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_SignInWithSuiDialog_vue_vue_type_template_id_201b7f2f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-201b7f2f\"],['__file',\"src/vue-sui/SignInWithSuiDialog.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiDialog.vue?");

/***/ }),

/***/ "./src/vue-sui/SuidoubleSync.vue":
/*!***************************************!*\
  !*** ./src/vue-sui/SuidoubleSync.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SuidoubleSync_vue_vue_type_template_id_60cd551b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuidoubleSync.vue?vue&type=template&id=60cd551b */ \"./src/vue-sui/SuidoubleSync.vue?vue&type=template&id=60cd551b\");\n/* harmony import */ var _SuidoubleSync_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuidoubleSync.vue?vue&type=script&lang=js */ \"./src/vue-sui/SuidoubleSync.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_SuidoubleSync_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_SuidoubleSync_vue_vue_type_template_id_60cd551b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/vue-sui/SuidoubleSync.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SuidoubleSync.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-sui/./src/App.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSui.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/vue-sui/SignInWithSui.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSui_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSui_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInWithSui.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSui.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSui.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSuiButton.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/vue-sui/SignInWithSuiButton.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSuiButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSuiButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInWithSuiButton.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiButton.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiButton.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSuiDialog.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/vue-sui/SignInWithSuiDialog.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSuiDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSuiDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInWithSuiDialog.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiDialog.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiDialog.vue?");

/***/ }),

/***/ "./src/vue-sui/SuidoubleSync.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/vue-sui/SuidoubleSync.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SuidoubleSync_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SuidoubleSync_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SuidoubleSync.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SuidoubleSync.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SuidoubleSync.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack://vue-sui/./src/App.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSui.vue?vue&type=template&id=74805907":
/*!*********************************************************************!*\
  !*** ./src/vue-sui/SignInWithSui.vue?vue&type=template&id=74805907 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSui_vue_vue_type_template_id_74805907__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSui_vue_vue_type_template_id_74805907__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInWithSui.vue?vue&type=template&id=74805907 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSui.vue?vue&type=template&id=74805907\");\n\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSui.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSuiButton.vue?vue&type=template&id=efeeb7ce&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/vue-sui/SignInWithSuiButton.vue?vue&type=template&id=efeeb7ce&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSuiButton_vue_vue_type_template_id_efeeb7ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSuiButton_vue_vue_type_template_id_efeeb7ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInWithSuiButton.vue?vue&type=template&id=efeeb7ce&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiButton.vue?vue&type=template&id=efeeb7ce&scoped=true\");\n\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiButton.vue?");

/***/ }),

/***/ "./src/vue-sui/SignInWithSuiDialog.vue?vue&type=template&id=201b7f2f&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/vue-sui/SignInWithSuiDialog.vue?vue&type=template&id=201b7f2f&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSuiDialog_vue_vue_type_template_id_201b7f2f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInWithSuiDialog_vue_vue_type_template_id_201b7f2f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInWithSuiDialog.vue?vue&type=template&id=201b7f2f&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SignInWithSuiDialog.vue?vue&type=template&id=201b7f2f&scoped=true\");\n\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SignInWithSuiDialog.vue?");

/***/ }),

/***/ "./src/vue-sui/SuidoubleSync.vue?vue&type=template&id=60cd551b":
/*!*********************************************************************!*\
  !*** ./src/vue-sui/SuidoubleSync.vue?vue&type=template&id=60cd551b ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SuidoubleSync_vue_vue_type_template_id_60cd551b__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SuidoubleSync_vue_vue_type_template_id_60cd551b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SuidoubleSync.vue?vue&type=template&id=60cd551b */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-sui/SuidoubleSync.vue?vue&type=template&id=60cd551b\");\n\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/SuidoubleSync.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-sui/./src/App.vue?");

/***/ }),

/***/ "./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external":
/*!************************************************************************************************!*\
  !*** ./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_201b7f2f_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_201b7f2f_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_201b7f2f_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_201b7f2f_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_201b7f2f_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/style.css?");

/***/ }),

/***/ "./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external":
/*!************************************************************************************************!*\
  !*** ./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_efeeb7ce_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_efeeb7ce_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_efeeb7ce_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_efeeb7ce_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_style_css_vue_type_style_index_0_id_efeeb7ce_scoped_true_lang_css_external__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/style.css?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"7634ea42\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-sui/./src/App.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=201b7f2f&scoped=true&lang=css&external\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"edcb74fa\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/style.css?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./src/vue-sui/style.css?vue&type=style&index=0&id=efeeb7ce&scoped=true&lang=css&external\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"5e417269\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-sui/./src/vue-sui/style.css?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D");

/***/ }),

/***/ "?3aeb":
/*!*******************************!*\
  !*** child_process (ignored) ***!
  \*******************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://vue-sui/child_process_(ignored)?");

/***/ }),

/***/ "?93c3":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://vue-sui/fs_(ignored)?");

/***/ }),

/***/ "?58b8":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://vue-sui/path_(ignored)?");

/***/ }),

/***/ "?5ddf":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://vue-sui/crypto_(ignored)?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue_sui"] = self["webpackChunkvue_sui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], () => (__webpack_require__("./src/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;