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
 * Analyze various features of text content at scale. Provide text, raw HTML, or a public URL, and IBM Watson Natural Language Understanding will give you results for the features you request. The service cleans HTML content before analysis by default, so the results can ignore most advertisements and other unwanted content.  You can create <a target=\"_blank\" href=\"https://www.ibm.com/watson/developercloud/doc/natural-language-understanding/customizing.html\">custom models</a> with Watson Knowledge Studio that can be used to detect custom entities and relations in Natural Language Understanding.
 */
var NaturalLanguageUnderstandingV1 = /** @class */ (function (_super) {
    __extends(NaturalLanguageUnderstandingV1, _super);
    /**
     * Construct a NaturalLanguageUnderstandingV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/natural-language-understanding/api'). The base url may differ between Bluemix regions.
     * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {NaturalLanguageUnderstandingV1}
     * @throws {Error}
     */
    function NaturalLanguageUnderstandingV1(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version' was provided
        if (typeof _this._options.version === 'undefined') {
            throw new Error('Argument error: version was not specified');
        }
        _this._options.qs.version = options.version;
        return _this;
    }
    /*************************
     * analyze
     ************************/
    /**
     * Analyze text, HTML, or a public webpage.
     *
     * Analyzes text, HTML, or a public webpage with one or more text analysis features.  ### Concepts Identify general concepts that are referenced or alluded to in your content. Concepts that are detected typically have an associated link to a DBpedia resource.  ### Emotion Detect anger, disgust, fear, joy, or sadness that is conveyed by your content. Emotion information can be returned for detected entities, keywords, or user-specified target phrases found in the text.  ### Entities Detect important people, places, geopolitical entities and other types of entities in your content. Entity detection recognizes consecutive coreferences of each entity. For example, analysis of the following text would count \"Barack Obama\" and \"He\" as the same entity:  \"Barack Obama was the 44th President of the United States. He took office in January 2009.\"  ### Keywords Determine the most important keywords in your content. Keyword phrases are organized by relevance in the results.  ### Metadata Get author information, publication date, and the title of your text/HTML content.  ### Relations Recognize when two entities are related, and identify the type of relation.  For example, you can identify an \"awardedTo\" relation between an award and its recipient.  ### Semantic Roles Parse sentences into subject-action-object form, and identify entities and keywords that are subjects or objects of an action.  ### Sentiment Determine whether your content conveys postive or negative sentiment. Sentiment information can be returned for detected entities, keywords, or user-specified target phrases found in the text.   ### Categories Categorize your content into a hierarchical 5-level taxonomy. For example, \"Leonardo DiCaprio won an Oscar\" returns \"/art and entertainment/movies and tv/movies\" as the most confident classification.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {Features} params.features - Specific features to analyze the document for.
     * @param {string} [params.text] - The plain text to analyze.
     * @param {string} [params.html] - The HTML file to analyze.
     * @param {string} [params.url] - The web page to analyze.
     * @param {boolean} [params.clean] - Remove website elements, such as links, ads, etc.
     * @param {string} [params.xpath] - XPath query for targeting nodes in HTML.
     * @param {boolean} [params.fallback_to_raw] - Whether to use raw HTML content if text cleaning fails.
     * @param {boolean} [params.return_analyzed_text] - Whether or not to return the analyzed text.
     * @param {string} [params.language] - ISO 639-1 code indicating the language to use in the analysis.
     * @param {number} [params.limit_text_characters] - Sets the maximum number of characters that are processed by the service.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageUnderstandingV1.prototype.analyze = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['features'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'features': _params.features,
            'text': _params.text,
            'html': _params.html,
            'url': _params.url,
            'clean': _params.clean,
            'xpath': _params.xpath,
            'fallback_to_raw': _params.fallback_to_raw,
            'return_analyzed_text': _params.return_analyzed_text,
            'language': _params.language,
            'limit_text_characters': _params.limit_text_characters
        };
        var parameters = {
            options: {
                url: '/v1/analyze',
                method: 'POST',
                json: true,
                body: body,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * manageModels
     ************************/
    /**
     * Delete model.
     *
     * Deletes a custom model.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.model_id - model_id of the model to delete.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageUnderstandingV1.prototype.deleteModel = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['model_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'model_id': _params.model_id
        };
        var parameters = {
            options: {
                url: '/v1/models/{model_id}',
                method: 'DELETE',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List models.
     *
     * Lists available models for Relations and Entities features, including Watson Knowledge Studio custom models that you have created and linked to your Natural Language Understanding service.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    NaturalLanguageUnderstandingV1.prototype.listModels = function (params, callback) {
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : (callback) ? callback : function () { };
        var parameters = {
            options: {
                url: '/v1/models',
                method: 'GET',
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    NaturalLanguageUnderstandingV1.URL = 'https://gateway.watsonplatform.net/natural-language-understanding/api';
    return NaturalLanguageUnderstandingV1;
}(base_service_1.BaseService));
NaturalLanguageUnderstandingV1.prototype.name = 'natural-language-understanding';
NaturalLanguageUnderstandingV1.prototype.serviceVersion = 'v1';
module.exports = NaturalLanguageUnderstandingV1;
//# sourceMappingURL=v1-generated.js.map