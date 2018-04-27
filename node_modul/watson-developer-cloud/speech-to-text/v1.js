"use strict";
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
var async = require("async");
var extend = require("extend");
var isStream = require("isstream");
var pick = require("object.pick");
var url_1 = require("url");
var helper_1 = require("../lib/helper");
var RecognizeStream = require("../lib/recognize-stream");
var GeneratedSpeechToTextV1 = require("./v1-generated");
// tslint:disable-next-line:no-var-requires
var pkg = require('../package.json');
var protocols = {
    https: require('https'),
    http: require('http')
};
var PARAMS_ALLOWED = [
    'continuous',
    'max_alternatives',
    'timestamps',
    'word_confidence',
    'inactivity_timeout',
    'model',
    'content-type',
    'interim_results',
    'keywords',
    'keywords_threshold',
    'word_alternatives_threshold',
    'profanity_filter',
    'smart_formatting',
    'customization_id',
    'speaker_labels',
    'customization_weight',
    'acoustic_customization_id'
];
/**
 * Check if there is a corpus that is still being processed
 * @private
 * @param corporaList
 * @return {boolean}
 */
function isProcessing(corporaList) {
    return corporaList.corpora.some(function (record) { return record['status'] === 'being_processed'; });
}
/**
 * Check if corpora has been analyzed
 * @private
 * @param corporaList
 * @return {boolean}
 */
function isAnalyzed(corporaList) {
    return corporaList.corpora.some(function (record) { return record['status'] === 'analyzed'; });
}
/**
 * @private
 * @param chunk
 * @return {any}
 */
function formatChunk(chunk) {
    // Convert the string into an array
    var result = chunk;
    // Check if in the stream doesn't have
    // two results together and parse them
    if (!result || result.indexOf('}{') === -1) {
        return JSON.parse(result);
    }
    // Check if we can parse the response
    try {
        result = '[' + result.replace(/}{/g, '},{') + ']';
        result = JSON.parse(result);
        return result[result.length - 1];
    }
    catch (e) {
        // if it fails, then this isn't valid json (or a concatenated list of valid json) - just return the original string
    }
    return result;
}
var SpeechToTextV1 = /** @class */ (function (_super) {
    __extends(SpeechToTextV1, _super);
    function SpeechToTextV1(options) {
        return _super.call(this, options) || this;
    }
    SpeechToTextV1.prototype.getModels = function (params, callback) {
        console.warn("WARNING: getModels() was renamed to listModels(). Support for getModels() will be removed in the next major release");
        return _super.prototype.listModels.call(this, params, callback);
    };
    SpeechToTextV1.prototype.getCustomization = function (params, callback) {
        console.warn("WARNING: getCustomization() was renamed to getLanguageModel(). Support for getCustomization() will be removed in the next major release");
        return _super.prototype.getLanguageModel.call(this, params, callback);
    };
    SpeechToTextV1.prototype.getRecognitionJob = function (params, callback) {
        console.warn("WARNING: getRecognitionJob() was renamed to checkJob(). Support for getRecognitionJob() will be removed in the next major release");
        return _super.prototype.checkJob.call(this, params, callback);
    };
    SpeechToTextV1.prototype.createCustomization = function (params, callback) {
        console.warn("WARNING: createCustomization() was renamed to createLanguageModel(). Support for createCustomization() will be removed in the next major release");
        if (params && !params.content_type) {
            params.content_type = 'application/json';
        }
        return _super.prototype.createLanguageModel.call(this, params, callback);
    };
    SpeechToTextV1.prototype.getRecognitionJobs = function (params, callback) {
        console.warn("WARNING: getRecognitionJobs() was renamed to checkJobs(). Support for getRecognitionJobs() will be removed in the next major release");
        return _super.prototype.checkJobs.call(this, params, callback);
    };
    SpeechToTextV1.prototype.deleteRecognitionJob = function (params, callback) {
        console.warn("WARNING: deleteRecognitionJob() was renamed to deleteJob(). Support for deleteRecognitionJob() will be removed in the next major release");
        return _super.prototype.deleteJob.call(this, params, callback);
    };
    SpeechToTextV1.prototype.getCustomizations = function (params, callback) {
        console.warn("WARNING: getCustomizations() was renamed to listLanguageModels(). Support for getCustomizations() will be removed in the next major release");
        return _super.prototype.listLanguageModels.call(this, params, callback);
    };
    SpeechToTextV1.prototype.createRecognitionJob = function (params, callback) {
        console.warn("WARNING: createRecognitionJob() was renamed to createJob(). Support for createRecognitionJob() will be removed in the next major release");
        if (params && Array.isArray(params.events)) {
            params.events = params.events.join(',');
        }
        return _super.prototype.createJob.call(this, params, callback);
    };
    SpeechToTextV1.prototype.addCorpus = function (params, callback) {
        if (params && params.name) {
            params.corpus_name = params.name;
        }
        if (params && params.corpus) {
            params.corpus_file = params.corpus;
        }
        return _super.prototype.addCorpus.call(this, params, callback);
    };
    SpeechToTextV1.prototype.getCorpus = function (params, callback) {
        if (params && params.name) {
            params.corpus_name = params.name;
        }
        return _super.prototype.getCorpus.call(this, params, callback);
    };
    SpeechToTextV1.prototype.deleteCorpus = function (params, callback) {
        if (params && params.name) {
            params.corpus_name = params.name;
        }
        return _super.prototype.deleteCorpus.call(this, params, callback);
    };
    SpeechToTextV1.prototype.getCorpora = function (params, callback) {
        console.warn("WARNING: getCorpora() was renamed to listCorpora(). Support for getCorpora() will be removed in the next major release");
        return _super.prototype.listCorpora.call(this, params, callback);
    };
    SpeechToTextV1.prototype.addWords = function (params, callback) {
        if (params && !params.content_type) {
            params.content_type = 'application/json';
        }
        return _super.prototype.addWords.call(this, params, callback);
    };
    SpeechToTextV1.prototype.addWord = function (params, callback) {
        if (params && params.word) {
            params.word_name = params.word;
        }
        if (params && !params.content_type) {
            params.content_type = 'application/json';
        }
        return _super.prototype.addWord.call(this, params, callback);
    };
    SpeechToTextV1.prototype.getWords = function (params, callback) {
        console.warn("WARNING: getWords() was renamed to listWords(). Support for getWords() will be removed in the next major release");
        return _super.prototype.listWords.call(this, params, callback);
    };
    SpeechToTextV1.prototype.getWord = function (params, callback) {
        if (params && params.word) {
            params.word_name = params.word;
        }
        return _super.prototype.getWord.call(this, params, callback);
    };
    SpeechToTextV1.prototype.deleteWord = function (params, callback) {
        if (params && params.word) {
            params.word_name = params.word;
        }
        return _super.prototype.deleteWord.call(this, params, callback);
    };
    SpeechToTextV1.prototype.trainCustomization = function (params, callback) {
        console.warn("WARNING: trainCustomization() was renamed to trainLanguageModel(). Support for trainCustomization() will be removed in the next major release");
        return _super.prototype.trainLanguageModel.call(this, params, callback);
    };
    SpeechToTextV1.prototype.resetCustomization = function (params, callback) {
        console.warn("WARNING: resetCustomization() was renamed to resetLanguageModel(). Support for resetCustomization() will be removed in the next major release");
        return _super.prototype.resetLanguageModel.call(this, params, callback);
    };
    /**
     * Waits while corpora analysis status is 'being_processes', fires callback once the status is 'analyzed'
     *
     * Note: the code will throw an error in case there in no corpus in the customization
     *
     *
     * @param {Object} params The parameters
     * @param {String} params.customization_id - The GUID of the custom language model
     * @param {Number} [params.interval=5000] - (milliseconds) - how long to wait between status checks
     * @param {Number} [params.times=30] - maximum number of attempts
     * @param {Function} callback
     */
    SpeechToTextV1.prototype.whenCorporaAnalyzed = function (params, callback) {
        var self = this;
        async.parallel([
            // validate that it has at least one corpus
            function (next) {
                self.getCorpora(params, function (err, res) {
                    if (err) {
                        return next(err);
                    }
                    if (!res.corpora.length) {
                        err = new Error('Customization has no corpa and therefore corpus cannot be analyzed');
                        err.code = SpeechToTextV1.ERR_NO_CORPORA;
                        return next(err);
                    }
                    next();
                });
            },
            // check the customization status repeatedly until it's available
            function (next) {
                var options = extend({
                    interval: 5000,
                    times: 30
                }, params);
                options.errorFilter = function (err) {
                    // if it's a timeout error, then getCorpora is called again after params.interval
                    // otherwise the error is passed back to the user
                    // if the params.times limit is reached, the error will be passed to the user regardless
                    return err.code === SpeechToTextV1.ERR_TIMEOUT;
                };
                async.retry(options, function (done) {
                    self.getCorpora(params, function (err, corpora) {
                        if (err) {
                            done(err);
                        }
                        else if (isProcessing(corpora)) {
                            // if the loop times out, async returns the last error, which will be this one.
                            err = new Error('Corpora is still being processed, try increasing interval or times params');
                            err.code = SpeechToTextV1.ERR_TIMEOUT;
                            done(err);
                        }
                        else if (isAnalyzed(corpora)) {
                            done(null, corpora);
                        }
                        else {
                            done(new Error('Unexpected corpus analysis status'));
                        }
                    });
                }, next);
            }
        ], function (err, res) {
            if (err) {
                return callback(err);
            }
            callback(null, res[1]); // callback with the final customization object
        });
    };
    /**
     * Creates a HTTP/HTTPS request to /recognize and keep the connection open.
     * Sets 'Transfer-Encoding': 'chunked' and prepare the connection to send
     * chunk data.
     *
     * @deprecated use createRecognizeStream instead
     *
     * @param {Object} params The parameters
     * @param {String} [params.content_type] - The Content-type e.g. audio/l16; rate=48000
     * @param {String} [params.session_id] - The session id
     * @param {function} callback
     */
    SpeechToTextV1.prototype.recognizeLive = function (params, callback) {
        var missingParams = helper_1.getMissingParams(params, [
            'session_id',
            'content_type',
            'cookie_session'
        ]);
        if (missingParams) {
            callback(missingParams);
            return;
        }
        var serviceUrl = [
            this._options.url,
            '/v1/sessions/',
            params.session_id,
            '/recognize'
        ].join('');
        var parts = url_1.parse(serviceUrl);
        var options = {
            agent: false,
            host: parts.hostname,
            port: parts.port,
            path: parts.pathname + (params.continuous ? '?continuous=true' : ''),
            method: 'POST',
            headers: extend({
                'Transfer-Encoding': 'chunked',
                cookie: 'SESSIONID=' + params.cookie_session,
                'Content-type': params.content_type
            }, this._options.headers)
        };
        var protocol = protocols[parts.protocol.match(/https?/)[0]];
        var recognizeReq = protocol.request(options, function (result) {
            result.setEncoding('utf-8');
            var transcript = '';
            result.on('data', function (chunk) {
                transcript += chunk;
            });
            result.on('end', function () {
                try {
                    transcript = formatChunk(transcript);
                }
                catch (e) {
                    callback(transcript);
                    return;
                }
                callback(null, transcript);
            });
        });
        recognizeReq.on('error', function (error) {
            callback(error);
        });
        return recognizeReq;
    };
    /**
     * Result observer for upcoming or ongoing recognition task in the session.
     * This request has to be started before POST on recognize finishes,
     * otherwise it waits for the next recognition.
     *
     * @deprecated use createRecognizeStream instead
     *
     * @param {Object} params The parameters
     * @param {String} [params.session_id] - Session used in the recognition
     * @param {boolean} [params.interim_results] - If true, interim results will be returned. Default: false
     * @param {Function} callback
     */
    SpeechToTextV1.prototype.observeResult = function (params, callback) {
        var missingParams = helper_1.getMissingParams(params, [
            'session_id',
            'cookie_session'
        ]);
        if (missingParams) {
            callback(missingParams);
            return;
        }
        var serviceUrl = [
            this._options.url,
            '/v1/sessions/',
            params.session_id,
            '/observe_result'
        ].join('');
        var parts = url_1.parse(serviceUrl);
        var options = {
            agent: false,
            host: parts.hostname,
            port: parts.port,
            path: parts.pathname +
                (params.interim_results ? '?interim_results=true' : ''),
            method: 'GET',
            headers: extend({
                cookie: 'SESSIONID=' + params.cookie_session,
                Accept: 'application/json'
            }, this._options.headers)
        };
        var protocol = protocols[parts.protocol.match(/https?/)[0]];
        var req = protocol.request(options, function (result) {
            result.setEncoding('utf-8');
            result.on('data', function (chunk) {
                try {
                    chunk = formatChunk(chunk);
                }
                catch (e) {
                    callback(chunk);
                    return;
                }
                callback(null, chunk);
            });
        });
        req.on('error', function (error) {
            callback(error);
        });
        req.end();
        return req;
    };
    /**
     * Replaces recognizeLive & friends with a single 2-way stream over websockets
     *
     * @param {Object} params The parameters
     * @return {RecognizeStream}
     */
    SpeechToTextV1.prototype.createRecognizeStream = function (params) {
        params = params || {};
        params.url = this._options.url;
        params.headers = extend({
            'user-agent': pkg.name + '-nodejs-' + pkg.version,
            authorization: this._options.headers.Authorization
        }, params.headers);
        return new RecognizeStream(params);
    };
    /**
     * Speech recognition for given audio using default model.
     *
     * @param {Object} params The parameters
     * @param {Stream} params.audio - Audio to be recognized
     * @param {String} params.content_type - Content-type
     * @param {Boolean} [params.continuous]
     * @param {Number} [params.max_alternatives]
     * @param {Boolean} [params.timestamps]
     * @param {Boolean} [params.word_confidence]
     * @param {Number} [params.inactivity_timeout]
     * @param {String} [params.model]
     * @param {Boolean} [params.interim_results]
     * @param {Boolean} [params.keywords]
     * @param {Number} [params.keywords_threshold]
     * @param {Number} [params.word_alternatives_threshold]
     * @param {Boolean} [params.profanity_filter]
     * @param {Boolean} [params.smart_formatting]
     * @param {String} [params.customization_id]
     * @param {Boolean} [params.speaker_labels]
     * @param {function} callback
     */
    SpeechToTextV1.prototype.recognize = function (params, callback) {
        var missingParams = helper_1.getMissingParams(params, ['audio', 'content_type']);
        if (missingParams) {
            callback(missingParams);
            return;
        }
        if (!isStream(params.audio)) {
            callback(new Error('audio is not a standard Node.js Stream'));
            return;
        }
        var queryParams = pick(params, PARAMS_ALLOWED);
        if (Array.isArray(queryParams.keywords)) {
            queryParams.keywords = queryParams.keywords.join(',');
        }
        var _url = '/v1';
        _url += params.session_id ? '/sessions/' + params.session_id : '';
        _url += '/recognize';
        var parameters = {
            options: {
                method: 'POST',
                url: _url,
                headers: {
                    'Content-Type': params.content_type
                },
                json: true,
                qs: queryParams
            },
            defaultOptions: this._options
        };
        return params.audio
            .on('response', function (response) {
            // Replace content-type
            response.headers['content-type'] = params.content_type;
        })
            .pipe(this.createRequest(parameters, callback));
    };
    SpeechToTextV1.prototype.deleteCustomization = function (params, callback) {
        console.warn("WARNING: deleteCustomization() was renamed to deleteLanguageModel(). Support for deleteCustomization() will be removed in the next major release");
        return _super.prototype.deleteLanguageModel.call(this, params, callback);
    };
    /**
     * Waits while a customization status is 'pending' or 'training', fires callback once the status is 'ready' or 'available'.
     *
     * Note: the customization will remain in 'pending' status until at least one word corpus is added.
     *
     * See http://www.ibm.com/watson/developercloud/speech-to-text/api/v1/#list_models for status details.
     *
     * @param {Object} params The parameters
     * @param {String} params.customization_id - The GUID of the custom language model
     * @param {Number} [params.interval=5000] - (milliseconds) - how log to wait between status checks
     * @param {Number} [params.times=30] - maximum number of attempts
     * @param {Function} callback
     */
    SpeechToTextV1.prototype.whenCustomizationReady = function (params, callback) {
        var self = this;
        // check the customization status repeatedly until it's ready or available
        var options = extend({
            interval: 5000,
            times: 30
        }, params);
        options.errorFilter = function (err) {
            // if it's a timeout error, then getCustomization is called again after params.interval
            // otherwise the error is passed back to the user
            // if the params.times limit is reached, the error will be passed to the user regardless
            return err.code === SpeechToTextV1.ERR_TIMEOUT;
        };
        async.retry(options, function (next) {
            self.getCustomization(params, function (err, customization) {
                if (err) {
                    next(err);
                }
                else if (customization.status === 'pending' ||
                    customization.status === 'training') {
                    // if the loop times out, async returns the last error, which will be this one.
                    err = new Error('Customization is still pending, try increasing interval or times params');
                    err.code = SpeechToTextV1.ERR_TIMEOUT;
                    next(err);
                }
                else if (customization.status === 'ready' ||
                    customization.status === 'available') {
                    next(null, customization);
                }
                else if (customization.status === 'failed') {
                    next(new Error('Customization training failed'));
                }
                else {
                    next(new Error('Unexpected customization status: ' + customization.status));
                }
            });
        }, callback);
    };
    SpeechToTextV1.ERR_NO_CORPORA = 'ERR_NO_CORPORA';
    SpeechToTextV1.ERR_TIMEOUT = 'ERR_TIMEOUT';
    return SpeechToTextV1;
}(GeneratedSpeechToTextV1));
module.exports = SpeechToTextV1;
//# sourceMappingURL=v1.js.map