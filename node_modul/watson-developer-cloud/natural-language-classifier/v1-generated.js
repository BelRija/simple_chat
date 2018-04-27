"use strict";
/**
 * Copyright 2018 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var extend = require("extend");
var base_service_1 = require("../lib/base_service");
var helper_1 = require("../lib/helper");
/**
 * IBM Watson Natural Language Classifier uses machine learning algorithms to return the top matching predefined classes for short text input. You create and train a classifier to connect predefined classes to example texts so that the service can apply those classes to new inputs.
 */
var NaturalLanguageClassifierV1 = /** @class */ (function (_super) {
    __extends(NaturalLanguageClassifierV1, _super);
    /**
     * Construct a NaturalLanguageClassifierV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/natural-language-classifier/api'). The base url may differ between Bluemix regions.
     * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {NaturalLanguageClassifierV1}
     */
    function NaturalLanguageClassifierV1(options) {
        return _super.call(this, options) || this;
    }
    /*************************
     * classifyText
     ************************/
    /**
     * Classify a phrase.
     *
     * Returns label information for the input. The status must be `Available` before you can use the classifier to classify text.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - Classifier ID to use.
     * @param {string} params.text - The submitted phrase.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageClassifierV1.prototype.classify = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['classifier_id', 'text'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'text': _params.text
        };
        var path = {
            'classifier_id': _params.classifier_id
        };
        var parameters = {
            options: {
                url: '/v1/classifiers/{classifier_id}/classify',
                method: 'POST',
                json: true,
                body: body,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Classify multiple phrases.
     *
     * Returns label information for multiple phrases. The status must be `Available` before you can use the classifier to classify text.  Note that classifying Japanese texts is a beta feature.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - Classifier ID to use.
     * @param {ClassifyInput[]} params.collection - The submitted phrases.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageClassifierV1.prototype.classifyCollection = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['classifier_id', 'collection'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'collection': _params.collection
        };
        var path = {
            'classifier_id': _params.classifier_id
        };
        var parameters = {
            options: {
                url: '/v1/classifiers/{classifier_id}/classify_collection',
                method: 'POST',
                json: true,
                body: body,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * manageClassifiers
     ************************/
    /**
     * Create classifier.
     *
     * Sends data to create and train a classifier and returns information about the new classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.metadata - Metadata in JSON format. The metadata identifies the language of the data, and an optional name to identify the classifier. Specify the language with the 2-letter primary language code as assigned in ISO standard 639.  Supported languages are English (`en`), Arabic (`ar`), French (`fr`), German, (`de`), Italian (`it`), Japanese (`ja`), Korean (`ko`), Brazilian Portuguese (`pt`), and Spanish (`es`).
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.training_data - Training data in CSV format. Each text value must have at least one class. The data can include up to 20,000 records. For details, see [Data preparation](https://console.bluemix.net/docs/services/natural-language-classifier/using-your-data.html).
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageClassifierV1.prototype.createClassifier = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['metadata', 'training_data'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'training_metadata': {
                data: _params.metadata,
                contentType: 'application/json'
            },
            'training_data': {
                data: _params.training_data,
                contentType: 'text/csv'
            }
        };
        var parameters = {
            options: {
                url: '/v1/classifiers',
                method: 'POST',
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }
            })
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Delete classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - Classifier ID to delete.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageClassifierV1.prototype.deleteClassifier = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['classifier_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'classifier_id': _params.classifier_id
        };
        var parameters = {
            options: {
                url: '/v1/classifiers/{classifier_id}',
                method: 'DELETE',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Get information about a classifier.
     *
     * Returns status and other information about a classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - Classifier ID to query.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageClassifierV1.prototype.getClassifier = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['classifier_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'classifier_id': _params.classifier_id
        };
        var parameters = {
            options: {
                url: '/v1/classifiers/{classifier_id}',
                method: 'GET',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List classifiers.
     *
     * Returns an empty array if no classifiers are available.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageClassifierV1.prototype.listClassifiers = function (params, callback) {
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : (callback) ? callback : function () { };
        var parameters = {
            options: {
                url: '/v1/classifiers',
                method: 'GET',
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    NaturalLanguageClassifierV1.URL = 'https://gateway.watsonplatform.net/natural-language-classifier/api';
    return NaturalLanguageClassifierV1;
}(base_service_1.BaseService));
NaturalLanguageClassifierV1.prototype.name = 'natural_language_classifier';
NaturalLanguageClassifierV1.prototype.serviceVersion = 'v1';
module.exports = NaturalLanguageClassifierV1;
//# sourceMappingURL=v1-generated.js.map