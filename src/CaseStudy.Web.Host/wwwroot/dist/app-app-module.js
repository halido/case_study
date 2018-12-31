(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-app-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.1.3
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.1.3');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\" [@routerTransition]>\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n            <div class=\"header\">\n                <h2>\n                    About This Template\n                </h2>\n            </div>\n            <div class=\"body\">\n                <p>\n                    This is a simple startup template based on ASP.NET Boilerplate framework and Module Zero.\n                    If you need an enterprise startup project, check <a href=\"http://aspnetzero.com?ref=abptmpl\" target=\"_blank\">ASP.NET ZERO</a>.\n                </p>\n\n                <h3>What is ASP.NET Boilerplate?</h3>\n\n                <p>\n                    ASP.NET Boilerplate is an application framework built on latest <strong>ASP.NET Core</strong> framework.\n                    It makes easy to use authorization, dependency injection, validation, exception handling, localization, logging, caching, background jobs and so on.\n                    It's built on already familiar tools like Entity Framework, AutoMapper, Castle Windsor...\n                </p>\n\n                <p>\n                    ASP.NET Boilerplate implements <strong>NLayer architecture</strong> (Domain, Application, Infrastructure and Presentation Layers)\n                    and <strong>Domain Driven Design</strong> (Entities, Repositories, Domain/Application Services, DTO's...).\n                    Also implements and provides a good infrastructure to implement common software development <strong>best practices</strong>.\n                </p>\n\n                <h3>What is Module Zero?</h3>\n\n                <p>\n                    ASP.NET Boilerplate framework is designed to be independent of any database\n                    schema and to be as generic as possible. Therefore, It leaves some concepts\n                    <strong>abstract</strong> and <strong>optional</strong> (like audit logging, permission and setting stores)\n                    which requires some <strong>data store</strong>.\n                </p>\n                <p>\n                    <strong>Module Zero </strong>implements all fundamental concepts of ASP.NET\n                    Boilerplate framework such as <a href=\"http://www.aspnetboilerplate.com/Pages/Documents/Zero/Tenant-Management\">tenant management</a> (<strong>multi-tenancy</strong>),\n                    <a href=\"http://www.aspnetboilerplate.com/Pages/Documents/Zero/Role-Management\">\n                        role management\n                    </a>, <a href=\"http://www.aspnetboilerplate.com/Pages/Documents/Zero/User-Management\">user management</a>,\n                    <a href=\"http://www.aspnetboilerplate.com/Pages/Documents/Authorization\">authorization</a> (<a href=\"http://www.aspnetboilerplate.com/Pages/Documents/Zero/Permission-Management\">\n                        permission management\n                    </a>),\n                    <a href=\"http://www.aspnetboilerplate.com/Pages/Documents/Setting-Management\">setting management</a>, <a href=\"http://www.aspnetboilerplate.com/Pages/Documents/Zero/Language-Management\">\n                        language management\n                    </a>, <a href=\"http://www.aspnetboilerplate.com/Pages/Documents/Audit-Logging\">audit logging</a>\n                    and so on.\n                </p>\n                <p>\n                    Module-Zero defines entities and implements <strong>domain logic</strong>\n                    (domain layer) and leaves application and presentation layers to you.\n                </p>\n\n                <h4>Based on Microsoft ASP.NET Core Identity</h4>\n\n                <p>\n                    Module Zero is based on Microsoft's\n                    <a href=\"https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity\" target=\"_blank\">ASP.NET Core Identity</a> library.\n                    It extends user and role managers and implements user and role stores using generic repositories.\n                </p>\n\n                <h3>Documentation</h3>\n\n                <ul>\n                    <li>\n                        <a href=\"https://www.aspnetboilerplate.com/Pages/Documents/Zero/Startup-Template-Angular\">Documentation for this template</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.aspnetboilerplate.com/Pages/Documents\">ASP.NET Boilerplate documentation</a>\n                    </li>\n                </ul>\n\n                <h3>Source code</h3>\n\n                <p>\n                    This template is developed open source on Github. You can contribute to the template.\n                    <a href=\"https://github.com/aspnetboilerplate/module-zero-core-template\" target=\"_blank\">https://github.com/aspnetboilerplate/module-zero-core-template</a>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent(injector) {
        return _super.call(this, injector) || this;
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AboutComponent);
    return AboutComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                        children: [
                            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] }
                        ]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n\n<top-bar></top-bar>\n\n<section (window:resize)=\"onResize($event)\">\n    <aside id=\"leftsidebar\" class=\"sidebar\">\n        <sidebar-user-area></sidebar-user-area>\n        <sidebar-nav></sidebar-nav>\n        <sidebar-footer></sidebar-footer>\n    </aside>\n\n    <right-sidebar></right-sidebar>\n</section>\n\n<section class=\"content\">\n    <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_helpers_SignalRAspNetCoreHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/helpers/SignalRAspNetCoreHelper */ "./src/shared/helpers/SignalRAspNetCoreHelper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(injector) {
        return _super.call(this, injector) || this;
    }
    AppComponent.prototype.ngOnInit = function () {
        _shared_helpers_SignalRAspNetCoreHelper__WEBPACK_IMPORTED_MODULE_2__["SignalRAspNetCoreHelper"].initSignalR();
        abp.event.on('abp.notifications.received', function (userNotification) {
            abp.notifications.showUiNotifyForUserNotification(userNotification);
            //Desktop notification
            Push.create("AbpZeroTemplate", {
                body: userNotification.notification.data.message,
                icon: abp.appPath + 'assets/app-logo-small.png',
                timeout: 6000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        $.AdminBSB.activateAll();
        $.AdminBSB.activateDemo();
    };
    AppComponent.prototype.onResize = function (event) {
        // exported from $.AdminBSB.activateAll
        $.AdminBSB.leftSideBar.setMenuHeight();
        $.AdminBSB.leftSideBar.checkStatuForResize(false);
        // exported from $.AdminBSB.activateDemo
        $.AdminBSB.demo.setSkinListHeightAndScroll();
        $.AdminBSB.demo.setSettingListHeightAndScroll();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AppComponent);
    return AppComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _abp_abp_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @abp/abp.module */ "./node_modules/abp-ng2-module/dist/src/abp.module.js");
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ "./src/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_layout_topbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/layout/topbar.component */ "./src/app/layout/topbar.component.ts");
/* harmony import */ var _app_layout_sidebar_user_area_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/layout/sidebar-user-area.component */ "./src/app/layout/sidebar-user-area.component.ts");
/* harmony import */ var _app_layout_sidebar_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/layout/sidebar-nav.component */ "./src/app/layout/sidebar-nav.component.ts");
/* harmony import */ var _app_layout_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/layout/sidebar-footer.component */ "./src/app/layout/sidebar-footer.component.ts");
/* harmony import */ var _app_layout_right_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/layout/right-sidebar.component */ "./src/app/layout/right-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _app_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _app_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _app_layout_topbar_component__WEBPACK_IMPORTED_MODULE_14__["TopBarComponent"],
                _app_layout_sidebar_user_area_component__WEBPACK_IMPORTED_MODULE_15__["SideBarUserAreaComponent"],
                _app_layout_sidebar_nav_component__WEBPACK_IMPORTED_MODULE_16__["SideBarNavComponent"],
                _app_layout_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_17__["SideBarFooterComponent"],
                _app_layout_right_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["RightSideBarComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _abp_abp_module__WEBPACK_IMPORTED_MODULE_9__["AbpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__["ServiceProxyModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\n    <div class=\"block-header\">\n        <h2>SAMPLE DASHBOARD</h2>\n    </div>\n\n    <!-- Widgets -->\n    <div class=\"row clearfix\">\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box bg-pink hover-expand-effect\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">playlist_add_check</i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"text\">NEW TASKS</div>\n                    <div class=\"number count-to\" data-from=\"0\" data-to=\"125\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box bg-cyan hover-expand-effect\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">help</i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"text\">NEW TICKETS</div>\n                    <div class=\"number count-to\" data-from=\"0\" data-to=\"257\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box bg-light-green hover-expand-effect\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">forum</i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"text\">NEW COMMENTS</div>\n                    <div class=\"number count-to\" data-from=\"0\" data-to=\"243\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box bg-orange hover-expand-effect\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">person_add</i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"text\">NEW VISITORS</div>\n                    <div class=\"number count-to\" data-from=\"0\" data-to=\"1225\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- #END# Widgets -->\n    <!-- CPU Usage -->\n    <div class=\"row clearfix\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <div class=\"row clearfix\">\n                        <div class=\"col-xs-12 col-sm-6\">\n                            <h2>CPU USAGE (%)</h2>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 align-right\">\n                            <div class=\"switch panel-switch-btn\">\n                                <span class=\"m-r-10 font-12\">REAL TIME</span>\n                                <label>OFF<input type=\"checkbox\" id=\"realtime\" checked><span class=\"lever switch-col-cyan\"></span>ON</label>\n                            </div>\n                        </div>\n                    </div>\n                    <ul class=\"header-dropdown m-r--5\">\n                        <li class=\"dropdown\">\n                            <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"material-icons\">more_vert</i>\n                            </a>\n                            <ul class=\"dropdown-menu pull-right\">\n                                <li><a href=\"javascript:void(0);\">Action</a></li>\n                                <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"body\">\n                    <div id=\"real_time_chart\" class=\"dashboard-flot-chart\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- #END# CPU Usage -->\n    <div class=\"row clearfix\">\n        <!-- Visitors -->\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"body bg-pink\">\n                    <div class=\"sparkline\" data-type=\"line\" data-spot-Radius=\"4\" data-highlight-Spot-Color=\"rgb(233, 30, 99)\" data-highlight-Line-Color=\"#fff\"\n                         data-min-Spot-Color=\"rgb(255,255,255)\" data-max-Spot-Color=\"rgb(255,255,255)\" data-spot-Color=\"rgb(255,255,255)\"\n                         data-offset=\"90\" data-width=\"100%\" data-height=\"92px\" data-line-Width=\"2\" data-line-Color=\"rgba(255,255,255,0.7)\"\n                         data-fill-Color=\"rgba(0, 188, 212, 0)\">\n                        12,10,9,6,5,6,10,5,7,5,12,13,7,12,11\n                    </div>\n                    <ul class=\"dashboard-stat-list\">\n                        <li>\n                            TODAY\n                            <span class=\"pull-right\"><b>1 200</b> <small>USERS</small></span>\n                        </li>\n                        <li>\n                            YESTERDAY\n                            <span class=\"pull-right\"><b>3 872</b> <small>USERS</small></span>\n                        </li>\n                        <li>\n                            LAST WEEK\n                            <span class=\"pull-right\"><b>26 582</b> <small>USERS</small></span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Visitors -->\n        <!-- Latest Social Trends -->\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"body bg-cyan\">\n                    <div class=\"m-b--35 font-bold\">LATEST SOCIAL TRENDS</div>\n                    <ul class=\"dashboard-stat-list\">\n                        <li>\n                            #socialtrends\n                            <span class=\"pull-right\">\n                                <i class=\"material-icons\">trending_up</i>\n                            </span>\n                        </li>\n                        <li>\n                            #materialdesign\n                            <span class=\"pull-right\">\n                                <i class=\"material-icons\">trending_up</i>\n                            </span>\n                        </li>\n                        <li>#adminbsb</li>\n                        <li>#freeadmintemplate</li>\n                        <li>#bootstraptemplate</li>\n                        <li>\n                            #freehtmltemplate\n                            <span class=\"pull-right\">\n                                <i class=\"material-icons\">trending_up</i>\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Latest Social Trends -->\n        <!-- Answered Tickets -->\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"body bg-teal\">\n                    <div class=\"font-bold m-b--35\">ANSWERED TICKETS</div>\n                    <ul class=\"dashboard-stat-list\">\n                        <li>\n                            TODAY\n                            <span class=\"pull-right\"><b>12</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            YESTERDAY\n                            <span class=\"pull-right\"><b>15</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST WEEK\n                            <span class=\"pull-right\"><b>90</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST MONTH\n                            <span class=\"pull-right\"><b>342</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST YEAR\n                            <span class=\"pull-right\"><b>4 225</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            ALL\n                            <span class=\"pull-right\"><b>8 752</b> <small>TICKETS</small></span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Answered Tickets -->\n    </div>\n    <div class=\"row clearfix\">\n        <!-- Task Info -->\n        <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h2>TASK INFOS</h2>\n                    <ul class=\"header-dropdown m-r--5\">\n                        <li class=\"dropdown\">\n                            <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"material-icons\">more_vert</i>\n                            </a>\n                            <ul class=\"dropdown-menu pull-right\">\n                                <li><a href=\"javascript:void(0);\">Action</a></li>\n                                <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-hover dashboard-task-infos\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Task</th>\n                                    <th>Status</th>\n                                    <th>Manager</th>\n                                    <th>Progress</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Task A</td>\n                                    <td><span class=\"label bg-green\">Doing</span></td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"62\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 62%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>Task B</td>\n                                    <td><span class=\"label bg-blue\">To Do</span></td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-blue\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>Task C</td>\n                                    <td><span class=\"label bg-light-blue\">On Hold</span></td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-light-blue\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>Task D</td>\n                                    <td><span class=\"label bg-orange\">Wait Approvel</span></td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-orange\" role=\"progressbar\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 95%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>5</td>\n                                    <td>Task E</td>\n                                    <td>\n                                        <span class=\"label bg-red\">Suspended</span>\n                                    </td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-red\" role=\"progressbar\" aria-valuenow=\"87\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 87%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Task Info -->\n        <!-- Browser Usage -->\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h2>BROWSER USAGE</h2>\n                    <ul class=\"header-dropdown m-r--5\">\n                        <li class=\"dropdown\">\n                            <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"material-icons\">more_vert</i>\n                            </a>\n                            <ul class=\"dropdown-menu pull-right\">\n                                <li><a href=\"javascript:void(0);\">Action</a></li>\n                                <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"body\">\n                    <div id=\"donut_chart\" class=\"dashboard-donut-chart\"></div>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Browser Usage -->\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(injector) {
        return _super.call(this, injector) || this;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            //Widgets count
            $('.count-to').countTo();
            //Sales count to
            $('.sales-count-to').countTo({
                formatter: function (value, options) {
                    return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ' ').replace('.', ',');
                }
            });
            initRealTimeChart();
            initDonutChart();
            initSparkline();
        });
        var realtime = 'on';
        function initRealTimeChart() {
            //Real time ==========================================================================================
            var plot = $.plot('#real_time_chart', [getRandomData()], {
                series: {
                    shadowSize: 0,
                    color: 'rgb(0, 188, 212)'
                },
                grid: {
                    borderColor: '#f3f3f3',
                    borderWidth: 1,
                    tickColor: '#f3f3f3'
                },
                lines: {
                    fill: true
                },
                yaxis: {
                    min: 0,
                    max: 100
                },
                xaxis: {
                    min: 0,
                    max: 100
                }
            });
            function updateRealTime() {
                plot.setData([getRandomData()]);
                plot.draw();
                var timeout;
                if (realtime === 'on') {
                    timeout = setTimeout(updateRealTime, 320);
                }
                else {
                    clearTimeout(timeout);
                }
            }
            updateRealTime();
            $('#realtime').on('change', function () {
                realtime = this.checked ? 'on' : 'off';
                updateRealTime();
            });
            //====================================================================================================
        }
        function initSparkline() {
            $(".sparkline").each(function () {
                var $this = $(this);
                $this.sparkline('html', $this.data());
            });
        }
        function initDonutChart() {
            (window.Morris).Donut({
                element: 'donut_chart',
                data: [{
                        label: 'Chrome',
                        value: 37
                    }, {
                        label: 'Firefox',
                        value: 30
                    }, {
                        label: 'Safari',
                        value: 18
                    }, {
                        label: 'Opera',
                        value: 12
                    },
                    {
                        label: 'Other',
                        value: 3
                    }],
                colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)', 'rgb(96, 125, 139)'],
                formatter: function (y) {
                    return y + '%';
                }
            });
        }
        var data = [], totalPoints = 110;
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                }
                else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]]);
            }
            return res;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], HomeComponent);
    return HomeComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/layout/right-sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/right-sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"rightsidebar\" class=\"right-sidebar\">\n    <ul class=\"nav nav-tabs tab-nav-right\" role=\"tablist\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#skins\" data-toggle=\"tab\">SKINS</a></li>\n        <li role=\"presentation\"><a href=\"#settings\" data-toggle=\"tab\">SETTINGS</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane fade in active in active\" id=\"skins\">\n            <ul class=\"demo-choose-skin\">\n                <li *ngFor=\"let theme of themes\" [ngClass]=\"{'active': selectedThemeCssClass == theme.cssClass}\" (click)=\"setTheme(theme)\">\n                    <div class=\"{{theme.cssClass}}\"></div>\n                    <span>{{theme.name}}</span>\n                </li>\n            </ul>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"settings\">\n            <div class=\"demo-settings\">\n                <p>GENERAL SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li>\n                        <span>Report Panel Usage</span>\n                        <div class=\"switch\">\n                            <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                    <li>\n                        <span>Email Redirect</span>\n                        <div class=\"switch\">\n                            <label><input type=\"checkbox\"><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                </ul>\n                <p>SYSTEM SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li>\n                        <span>Notifications</span>\n                        <div class=\"switch\">\n                            <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                    <li>\n                        <span>Auto Updates</span>\n                        <div class=\"switch\">\n                            <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                </ul>\n                <p>ACCOUNT SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li>\n                        <span>Offline</span>\n                        <div class=\"switch\">\n                            <label><input type=\"checkbox\"><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                    <li>\n                        <span>Location Permission</span>\n                        <div class=\"switch\">\n                            <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</aside>"

/***/ }),

/***/ "./src/app/layout/right-sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/right-sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: RightSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSideBarComponent", function() { return RightSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RightSideBarComponent = /** @class */ (function (_super) {
    __extends(RightSideBarComponent, _super);
    function RightSideBarComponent(injector, _configurationService) {
        var _this = _super.call(this, injector) || this;
        _this._configurationService = _configurationService;
        _this.themes = [
            new UiThemeInfo("Red", "red"),
            new UiThemeInfo("Pink", "pink"),
            new UiThemeInfo("Purple", "purple"),
            new UiThemeInfo("Deep Purple", "deep-purple"),
            new UiThemeInfo("Indigo", "indigo"),
            new UiThemeInfo("Blue", "blue"),
            new UiThemeInfo("Light Blue", "light-blue"),
            new UiThemeInfo("Cyan", "cyan"),
            new UiThemeInfo("Teal", "teal"),
            new UiThemeInfo("Green", "green"),
            new UiThemeInfo("Light Green", "light-green"),
            new UiThemeInfo("Lime", "lime"),
            new UiThemeInfo("Yellow", "yellow"),
            new UiThemeInfo("Amber", "amber"),
            new UiThemeInfo("Orange", "orange"),
            new UiThemeInfo("Deep Orange", "deep-orange"),
            new UiThemeInfo("Brown", "brown"),
            new UiThemeInfo("Grey", "grey"),
            new UiThemeInfo("Blue Grey", "blue-grey"),
            new UiThemeInfo("Black", "black")
        ];
        _this.selectedThemeCssClass = "red";
        return _this;
    }
    RightSideBarComponent.prototype.ngOnInit = function () {
        this.selectedThemeCssClass = this.setting.get('App.UiTheme');
        $('body').addClass('theme-' + this.selectedThemeCssClass);
    };
    RightSideBarComponent.prototype.setTheme = function (theme) {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["ChangeUiThemeInput"]();
        input.theme = theme.cssClass;
        this._configurationService.changeUiTheme(input).subscribe(function () {
            var $body = $('body');
            $('.right-sidebar .demo-choose-skin li').removeClass('active');
            $body.removeClass('theme-' + _this.selectedThemeCssClass);
            $('.right-sidebar .demo-choose-skin li div.' + theme.cssClass).closest('li').addClass('active');
            $body.addClass('theme-' + theme.cssClass);
            _this.selectedThemeCssClass = theme.cssClass;
        });
    };
    RightSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./right-sidebar.component.html */ "./src/app/layout/right-sidebar.component.html"),
            selector: 'right-sidebar',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["ConfigurationServiceProxy"]])
    ], RightSideBarComponent);
    return RightSideBarComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));

var UiThemeInfo = /** @class */ (function () {
    function UiThemeInfo(name, cssClass) {
        this.name = name;
        this.cssClass = cssClass;
    }
    return UiThemeInfo;
}());


/***/ }),

/***/ "./src/app/layout/sidebar-footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/layout/sidebar-footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"legal\">\n    <div class=\"copyright\">\n        &copy; {{currentYear}} <a href=\"javascript:void(0);\">CaseStudy</a>.\n    </div>\n    <div class=\"version\">\n        <b>Version </b> {{versionText}}\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/sidebar-footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/sidebar-footer.component.ts ***!
  \****************************************************/
/*! exports provided: SideBarFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarFooterComponent", function() { return SideBarFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarFooterComponent = /** @class */ (function (_super) {
    __extends(SideBarFooterComponent, _super);
    function SideBarFooterComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.currentYear = new Date().getFullYear();
        _this.versionText = '1.0.0.0';
        return _this;
    }
    SideBarFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./sidebar-footer.component.html */ "./src/app/layout/sidebar-footer.component.html"),
            selector: 'sidebar-footer',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], SideBarFooterComponent);
    return SideBarFooterComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/layout/sidebar-nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/sidebar-nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n    <ul class=\"list\">\n        <ng-template ngFor let-menuItem [ngForOf]=\"menuItems\" let-mainMenuItemIndex=\"index\">\n            <li *ngIf=\"showMenuItem(menuItem)\" routerLinkActive=\"active\">\n                <!-- route name -->\n                <a [routerLink]=\"[menuItem.route]\" *ngIf=\"!menuItem.items.length && menuItem.route.indexOf('http') != 0\">\n                    <i *ngIf=\"menuItem.icon\" class=\"material-icons\">{{menuItem.icon}}</i>\n                    <span>{{menuItem.name}}</span>\n                </a>\n                <!-- Static link (starts with 'http') -->\n                <a href=\"{{menuItem.route}}\" target=\"_blank\" *ngIf=\"!menuItem.items.length && menuItem.route.indexOf('http') == 0\">\n                    <i *ngIf=\"menuItem.icon\" class=\"material-icons\">{{menuItem.icon}}</i>\n                    <span>{{menuItem.name}}</span>\n                </a>\n                <!-- Has child menu items (so, this is a parent menu) -->\n                <a href=\"javascript:void(0);\" [ngClass]=\"{'menu-toggle': menuItem.items.length}\" *ngIf=\"menuItem.items.length\">\n                    <i *ngIf=\"menuItem.icon\" class=\"material-icons\">{{menuItem.icon}}</i>\n                    <span>{{menuItem.name}}</span>\n                </a>\n                <ul class=\"ml-menu\" *ngIf=\"menuItem.items.length\">\n                    <ng-template ngFor let-subMenuItem [ngForOf]=\"menuItem.items\" let-mainMenuItemIndex=\"index\">\n                        <li *ngIf=\"showMenuItem(subMenuItem)\" routerLinkActive=\"active\">\n                            <!-- route name -->\n                            <a [routerLink]=\"[subMenuItem.route]\" class=\"toggled\" *ngIf=\"!subMenuItem.items.length && subMenuItem.route.indexOf('http') != 0\">\n                                <i *ngIf=\"subMenuItem.icon\" class=\"material-icons\">{{subMenuItem.icon}}</i>\n                                <span>{{subMenuItem.name}}</span>\n                            </a>\n                            <!-- Static link (starts with 'http') -->\n                            <a href=\"{{subMenuItem.route}}\" class=\"toggled\" target=\"_blank\" *ngIf=\"!subMenuItem.items.length && subMenuItem.route.indexOf('http') == 0\">\n                                <i *ngIf=\"subMenuItem.icon\" class=\"material-icons\">{{subMenuItem.icon}}</i>\n                                <span>{{subMenuItem.name}}</span>\n                            </a>\n                            <!-- Has child menu items (so, this is a parent menu) -->\n                            <a href=\"javascript:void(0);\" [ngClass]=\"{'menu-toggle': subMenuItem.items.length}\" *ngIf=\"subMenuItem.items.length\">\n                                <i *ngIf=\"subMenuItem.icon\" class=\"material-icons\">{{subMenuItem.icon}}</i>\n                                <span>{{subMenuItem.name}}</span>\n                            </a>\n                            <ul class=\"ml-menu\" *ngIf=\"subMenuItem.items.length\">\n                                <ng-template ngFor let-subSubMenuItem [ngForOf]=\"subMenuItem.items\" let-mainMenuItemIndex=\"index\">\n                                    <li *ngIf=\"showMenuItem(subSubMenuItem)\" routerLinkActive=\"active\">\n                                        <!-- route name -->\n                                        <a [routerLink]=\"[subSubMenuItem.route]\" *ngIf=\"subSubMenuItem.route.indexOf('http') != 0\">\n                                            <i *ngIf=\"subSubMenuItem.icon\" class=\"material-icons\">{{subSubMenuItem.icon}}</i>\n                                            <span>{{subSubMenuItem.name}}</span>\n                                        </a>\n                                        <!-- Static link (starts with 'http') -->\n                                        <a href=\"{{subSubMenuItem.route}}\" target=\"_blank\" *ngIf=\"subSubMenuItem.route.indexOf('http') == 0\">\n                                            <i *ngIf=\"subSubMenuItem.icon\" class=\"material-icons\">{{subSubMenuItem.icon}}</i>\n                                            <span>{{subSubMenuItem.name}}</span>\n                                        </a>\n                                    </li>\n                                </ng-template>\n                            </ul>\n                        </li>\n                    </ng-template>\n                </ul>\n            </li>\n        </ng-template>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/sidebar-nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar-nav.component.ts ***!
  \*************************************************/
/*! exports provided: SideBarNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarNavComponent", function() { return SideBarNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/layout/menu-item */ "./src/shared/layout/menu-item.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarNavComponent = /** @class */ (function (_super) {
    __extends(SideBarNavComponent, _super);
    function SideBarNavComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.menuItems = [
            new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_this.l("HomePage"), "", "home", "/app/home"),
            new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_this.l("Tenants"), "Pages.Tenants", "business", "/app/tenants"),
            new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_this.l("Users"), "Pages.Users", "people", "/app/users"),
            new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_this.l("Roles"), "Pages.Roles", "local_offer", "/app/roles"),
            new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_this.l("About"), "", "info", "/app/about"),
            new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_this.l("MultiLevelMenu"), "", "menu", "", [
                new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("ASP.NET Boilerplate", "", "", "", [
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Home", "", "", "https://aspnetboilerplate.com/?ref=abptmpl"),
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Templates", "", "", "https://aspnetboilerplate.com/Templates?ref=abptmpl"),
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Samples", "", "", "https://aspnetboilerplate.com/Samples?ref=abptmpl"),
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Documents", "", "", "https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl")
                ]),
                new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("ASP.NET Zero", "", "", "", [
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Home", "", "", "https://aspnetzero.com?ref=abptmpl"),
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Description", "", "", "https://aspnetzero.com/?ref=abptmpl#description"),
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Features", "", "", "https://aspnetzero.com/?ref=abptmpl#features"),
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Pricing", "", "", "https://aspnetzero.com/?ref=abptmpl#pricing"),
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Faq", "", "", "https://aspnetzero.com/Faq?ref=abptmpl"),
                    new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Documents", "", "", "https://aspnetzero.com/Documents?ref=abptmpl")
                ])
            ])
        ];
        return _this;
    }
    SideBarNavComponent.prototype.showMenuItem = function (menuItem) {
        if (menuItem.permissionName) {
            return this.permission.isGranted(menuItem.permissionName);
        }
        return true;
    };
    SideBarNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./sidebar-nav.component.html */ "./src/app/layout/sidebar-nav.component.html"),
            selector: 'sidebar-nav',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], SideBarNavComponent);
    return SideBarNavComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/layout/sidebar-user-area.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/sidebar-user-area.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"user-info\">\n    <div class=\"image\">\n        <img src=\"assets/images/user.png\" width=\"48\" height=\"48\" alt=\"User\" />\n    </div>\n    <div class=\"info-container\">\n        <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{shownLoginName}}</div>\n        <div class=\"email\">{{appSession.user.emailAddress}}</div>\n        <div class=\"btn-group user-helper-dropdown\">\n            <i class=\"material-icons\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">keyboard_arrow_down</i>\n            <ul class=\"dropdown-menu pull-right\">\n                <li><a (click)=\"logout()\"><i class=\"material-icons\">input</i>{{ 'Logout' | localize }}</a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/sidebar-user-area.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar-user-area.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarUserAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarUserAreaComponent", function() { return SideBarUserAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/auth/app-auth.service */ "./src/shared/auth/app-auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarUserAreaComponent = /** @class */ (function (_super) {
    __extends(SideBarUserAreaComponent, _super);
    function SideBarUserAreaComponent(injector, _authService) {
        var _this = _super.call(this, injector) || this;
        _this._authService = _authService;
        _this.shownLoginName = "";
        return _this;
    }
    SideBarUserAreaComponent.prototype.ngOnInit = function () {
        this.shownLoginName = "Halit Muslu";
    };
    SideBarUserAreaComponent.prototype.logout = function () {
        this._authService.logout();
    };
    SideBarUserAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./sidebar-user-area.component.html */ "./src/app/layout/sidebar-user-area.component.html"),
            selector: 'sidebar-user-area',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AppAuthService"]])
    ], SideBarUserAreaComponent);
    return SideBarUserAreaComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/layout/topbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/topbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Search Bar -->\n<div class=\"search-bar\">\n    <div class=\"search-icon\">\n        <i class=\"material-icons\">search</i>\n    </div>\n    <input materialInput type=\"text\" placeholder=\"START TYPING...\">\n    <div class=\"close-search\">\n        <i class=\"material-icons\">close</i>\n    </div>\n</div> <!-- #END# Search Bar -->\n\n<nav class=\"navbar\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a href=\"javascript:void(0);\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\"></a>\n            <a href=\"javascript:void(0);\" class=\"bars\"></a>\n            <a routerLink=\"/app/home\" class=\"navbar-brand\"><i class=\"fa fa-cubes\"></i> CaseStudy</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\"><i class=\"material-icons\">search</i></a></li>\n                <topbar-languageswitch></topbar-languageswitch>\n                <li class=\"pull-right\"><a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\"><i class=\"material-icons\">more_vert</i></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopBarComponent = /** @class */ (function (_super) {
    __extends(TopBarComponent, _super);
    function TopBarComponent(injector) {
        return _super.call(this, injector) || this;
    }
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/layout/topbar.component.html"),
            selector: 'top-bar',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TopBarComponent);
    return TopBarComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/shared/animations/routerTransition.ts":
/*!***************************************************!*\
  !*** ./src/shared/animations/routerTransition.ts ***!
  \***************************************************/
/*! exports provided: appModuleAnimation, accountModuleAnimation, slideFromBottom, slideFromUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appModuleAnimation", function() { return appModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountModuleAnimation", function() { return accountModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromBottom", function() { return slideFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromUp", function() { return slideFromUp; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function appModuleAnimation() {
    return slideFromBottom();
}
function accountModuleAnimation() {
    return slideFromUp();
}
function slideFromBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'padding-top': '20px', opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'padding-top': '0px', opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.33s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', 'padding-top': '0px' }))
        ])
    ]);
}
function slideFromUp() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'margin-top': '10px', opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'margin-top': '0px', opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', 'margin-top': '0px' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/shared/helpers/SignalRAspNetCoreHelper.ts":
/*!*******************************************************!*\
  !*** ./src/shared/helpers/SignalRAspNetCoreHelper.ts ***!
  \*******************************************************/
/*! exports provided: SignalRAspNetCoreHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRAspNetCoreHelper", function() { return SignalRAspNetCoreHelper; });
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _abp_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/utils/utils.service */ "./node_modules/abp-ng2-module/dist/src/utils/utils.service.js");


var SignalRAspNetCoreHelper = /** @class */ (function () {
    function SignalRAspNetCoreHelper() {
    }
    SignalRAspNetCoreHelper.initSignalR = function () {
        var encryptedAuthToken = new _abp_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]().getCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].authorization.encrptedAuthTokenName);
        abp.signalr = {
            autoConnect: true,
            connect: undefined,
            hubs: undefined,
            qs: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].authorization.encrptedAuthTokenName + "=" + encodeURIComponent(encryptedAuthToken),
            remoteServiceBaseUrl: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].remoteServiceBaseUrl,
            startConnection: undefined,
            url: '/signalr'
        };
        jQuery.getScript(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].appBaseUrl + '/assets/abp/abp.signalr-client.js');
    };
    return SignalRAspNetCoreHelper;
}());



/***/ }),

/***/ "./src/shared/layout/menu-item.ts":
/*!****************************************!*\
  !*** ./src/shared/layout/menu-item.ts ***!
  \****************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
var MenuItem = /** @class */ (function () {
    function MenuItem(name, permissionName, icon, route, childItems) {
        if (childItems === void 0) { childItems = null; }
        this.name = '';
        this.permissionName = '';
        this.icon = '';
        this.route = '';
        this.name = name;
        this.permissionName = permissionName;
        this.icon = icon;
        this.route = route;
        if (childItems) {
            this.items = childItems;
        }
        else {
            this.items = [];
        }
    }
    return MenuItem;
}());



/***/ })

}]);
//# sourceMappingURL=app-app-module.js.map