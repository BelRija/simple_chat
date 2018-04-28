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
 * The IBM Watson Personality Insights service enables applications to derive insights from social media, enterprise data, or other digital communications. The service uses linguistic analytics to infer individuals' intrinsic personality characteristics, including Big Five, Needs, and Values, from digital communications such as email, text messages, tweets, and forum posts.  The service can automatically infer, from potentially noisy social media, portraits of individuals that reflect their personality characteristics. The service can infer consumption preferences based on the results of its analysis and, for JSON content that is timestamped, can report temporal behavior.  For information about the meaning of the models that the service uses to describe personality characteristics, see [Personality models](https://console.bluemix.net/docs/services/personality-insights/models.html). For information about the meaning of the consumption preferences, see [Consumption preferences](https://console.bluemix.net/docs/services/personality-insights/preferences.html).
 */
var PersonalityInsightsV3 = /** @class */ (function (_super) {
    __extends(PersonalityInsightsV3, _super);
    /**
     * Construct a PersonalityInsightsV3 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/personality-insights/api'). The base url may differ between Bluemix regions.
     * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {PersonalityInsightsV3}
     * @throws {Error}
     */
    function PersonalityInsightsV3(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version' was provided
        if (typeof _this._options.version === 'undefined') {
            throw new Error('Argument error: version was not specified');
        }
        _this._options.qs.version = options.version;
        return _this;
    }
    /*************************
     * methods
     ************************/
    /**
     * Get profile.
     *
     * Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input content, but it requires much less text to produce an accurate profile; for more information, see [Providing sufficient input](https://console.bluemix.net/docs/services/personality-insights/input.html#sufficient). The service analyzes text in Arabic, English, Japanese, Korean, or Spanish and returns its results in a variety of languages. You can provide plain text, HTML, or JSON input. The service returns output in JSON format by default, but you can request the output in CSV format.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {Content|string} params.content - A maximum of 20 MB of content to analyze, though the service requires much less text; for more information, see [Providing sufficient input](https://console.bluemix.net/docs/services/personality-insights/input.html#sufficient). A JSON request must conform to the **Content** model.
     * @param {string} params.content_type - The type of the input: application/json, text/html, or text/plain. A character encoding can be specified by including a `charset` parameter. For example, 'text/html;charset=utf-8'.
     * @param {string} [params.content_language] - The language of the input text for the request: Arabic, English, Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`.   The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type** is `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type** is `application/json`, **Content-Language** overrides a language specified with the **language** parameter of a **ContentItem** object, and content items that specify a different language are ignored; omit this parameter to base the language on the specification of the content items. You can specify any combination of languages for **Content-Language** and **Accept-Language**.
     * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can specify any combination of languages for the input and response content.
     * @param {boolean} [params.raw_scores] - Whether a raw score in addition to a normalized percentile is returned for each characteristic; raw scores are not compared with a sample population.
     * @param {boolean} [params.csv_headers] - Whether column labels are returned with a CSV response. Applies only when the **Accept** parameter is set to `text/csv`.
     * @param {boolean} [params.consumption_preferences] - Whether consumption preferences are returned with the results.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    PersonalityInsightsV3.prototype.profile = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['content', 'content_type'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = _params.content;
        var query = {
            'raw_scores': _params.raw_scores,
            'csv_headers': _params.csv_headers,
            'consumption_preferences': _params.consumption_preferences
        };
        var parameters = {
            options: {
                url: '/v3/profile',
                method: 'POST',
                json: (_params.content_type === 'application/json'),
                body: body,
                qs: query,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                    'Content-Type': _params.content_type,
                    'Content-Language': _params.content_language,
                    'Accept-Language': _params.accept_language
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Get profile. as csv
     *
     * Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input content, but it requires much less text to produce an accurate profile; for more information, see [Providing sufficient input](https://console.bluemix.net/docs/services/personality-insights/input.html#sufficient). The service analyzes text in Arabic, English, Japanese, Korean, or Spanish and returns its results in a variety of languages. You can provide plain text, HTML, or JSON input. The service returns output in JSON format by default, but you can request the output in CSV format.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {Content|string} params.content - A maximum of 20 MB of content to analyze, though the service requires much less text; for more information, see [Providing sufficient input](https://console.bluemix.net/docs/services/personality-insights/input.html#sufficient). A JSON request must conform to the **Content** model.
     * @param {string} params.content_type - The type of the input: application/json, text/html, or text/plain. A character encoding can be specified by including a `charset` parameter. For example, 'text/html;charset=utf-8'.
     * @param {string} [params.content_language] - The language of the input text for the request: Arabic, English, Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`.   The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type** is `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type** is `application/json`, **Content-Language** overrides a language specified with the **language** parameter of a **ContentItem** object, and content items that specify a different language are ignored; omit this parameter to base the language on the specification of the content items. You can specify any combination of languages for **Content-Language** and **Accept-Language**.
     * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can specify any combination of languages for the input and response content.
     * @param {boolean} [params.raw_scores] - Whether a raw score in addition to a normalized percentile is returned for each characteristic; raw scores are not compared with a sample population.
     * @param {boolean} [params.csv_headers] - Whether column labels are returned with a CSV response. Applies only when the **Accept** parameter is set to `text/csv`.
     * @param {boolean} [params.consumption_preferences] - Whether consumption preferences are returned with the results.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    PersonalityInsightsV3.prototype.profileAsCsv = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['content', 'content_type'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = _params.content;
        var query = {
            'raw_scores': _params.raw_scores,
            'csv_headers': _params.csv_headers,
            'consumption_preferences': _params.consumption_preferences
        };
        var parameters = {
            options: {
                url: '/v3/profile',
                method: 'POST',
                json: (_params.content_type === 'application/json'),
                body: body,
                qs: query,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'text/csv',
                    'Content-Type': _params.content_type,
                    'Content-Language': _params.content_language,
                    'Accept-Language': _params.accept_language
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    PersonalityInsightsV3.URL = 'https://gateway.watsonplatform.net/personality-insights/api';
    return PersonalityInsightsV3;
}(base_service_1.BaseService));
PersonalityInsightsV3.prototype.name = 'personality_insights';
PersonalityInsightsV3.prototype.serviceVersion = 'v3';
/*************************
 * interfaces
 ************************/
(function (PersonalityInsightsV3) {
    /** Constants for the `profile` operation. */
    var ProfileConstants;
    (function (ProfileConstants) {
        /** The type of the input: application/json, text/html, or text/plain. A character encoding can be specified by including a `charset` parameter. For example, 'text/html;charset=utf-8'. */
        var ContentType;
        (function (ContentType) {
            ContentType["APPLICATION_JSON"] = "application/json";
            ContentType["TEXT_HTML"] = "text/html";
            ContentType["TEXT_PLAIN"] = "text/plain";
        })(ContentType = ProfileConstants.ContentType || (ProfileConstants.ContentType = {}));
        /** The language of the input text for the request: Arabic, English, Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`.   The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type** is `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type** is `application/json`, **Content-Language** overrides a language specified with the **language** parameter of a **ContentItem** object, and content items that specify a different language are ignored; omit this parameter to base the language on the specification of the content items. You can specify any combination of languages for **Content-Language** and **Accept-Language**. */
        var ContentLanguage;
        (function (ContentLanguage) {
            ContentLanguage["AR"] = "ar";
            ContentLanguage["EN"] = "en";
            ContentLanguage["ES"] = "es";
            ContentLanguage["JA"] = "ja";
            ContentLanguage["KO"] = "ko";
        })(ContentLanguage = ProfileConstants.ContentLanguage || (ProfileConstants.ContentLanguage = {}));
        /** The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can specify any combination of languages for the input and response content. */
        var AcceptLanguage;
        (function (AcceptLanguage) {
            AcceptLanguage["AR"] = "ar";
            AcceptLanguage["DE"] = "de";
            AcceptLanguage["EN"] = "en";
            AcceptLanguage["ES"] = "es";
            AcceptLanguage["FR"] = "fr";
            AcceptLanguage["IT"] = "it";
            AcceptLanguage["JA"] = "ja";
            AcceptLanguage["KO"] = "ko";
            AcceptLanguage["PT_BR"] = "pt-br";
            AcceptLanguage["ZH_CN"] = "zh-cn";
            AcceptLanguage["ZH_TW"] = "zh-tw";
        })(AcceptLanguage = ProfileConstants.AcceptLanguage || (ProfileConstants.AcceptLanguage = {}));
    })(ProfileConstants = PersonalityInsightsV3.ProfileConstants || (PersonalityInsightsV3.ProfileConstants = {}));
    /** Constants for the `profileAsCsv` operation. */
    var ProfileAsCsvConstants;
    (function (ProfileAsCsvConstants) {
        /** The type of the input: application/json, text/html, or text/plain. A character encoding can be specified by including a `charset` parameter. For example, 'text/html;charset=utf-8'. */
        var ContentType;
        (function (ContentType) {
            ContentType["APPLICATION_JSON"] = "application/json";
            ContentType["TEXT_HTML"] = "text/html";
            ContentType["TEXT_PLAIN"] = "text/plain";
        })(ContentType = ProfileAsCsvConstants.ContentType || (ProfileAsCsvConstants.ContentType = {}));
        /** The language of the input text for the request: Arabic, English, Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`.   The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type** is `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type** is `application/json`, **Content-Language** overrides a language specified with the **language** parameter of a **ContentItem** object, and content items that specify a different language are ignored; omit this parameter to base the language on the specification of the content items. You can specify any combination of languages for **Content-Language** and **Accept-Language**. */
        var ContentLanguage;
        (function (ContentLanguage) {
            ContentLanguage["AR"] = "ar";
            ContentLanguage["EN"] = "en";
            ContentLanguage["ES"] = "es";
            ContentLanguage["JA"] = "ja";
            ContentLanguage["KO"] = "ko";
        })(ContentLanguage = ProfileAsCsvConstants.ContentLanguage || (ProfileAsCsvConstants.ContentLanguage = {}));
        /** The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can specify any combination of languages for the input and response content. */
        var AcceptLanguage;
        (function (AcceptLanguage) {
            AcceptLanguage["AR"] = "ar";
            AcceptLanguage["DE"] = "de";
            AcceptLanguage["EN"] = "en";
            AcceptLanguage["ES"] = "es";
            AcceptLanguage["FR"] = "fr";
            AcceptLanguage["IT"] = "it";
            AcceptLanguage["JA"] = "ja";
            AcceptLanguage["KO"] = "ko";
            AcceptLanguage["PT_BR"] = "pt-br";
            AcceptLanguage["ZH_CN"] = "zh-cn";
            AcceptLanguage["ZH_TW"] = "zh-tw";
        })(AcceptLanguage = ProfileAsCsvConstants.AcceptLanguage || (ProfileAsCsvConstants.AcceptLanguage = {}));
    })(ProfileAsCsvConstants = PersonalityInsightsV3.ProfileAsCsvConstants || (PersonalityInsightsV3.ProfileAsCsvConstants = {}));
})(PersonalityInsightsV3 || (PersonalityInsightsV3 = {}));
module.exports = PersonalityInsightsV3;
//# sourceMappingURL=v3-generated.js.map