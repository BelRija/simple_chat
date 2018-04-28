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
 * ### Service Overview The IBM Watson Text to Speech service provides an API that uses IBM's speec[params.headers] -synthesis capabilities to synthesize text into natural-sounding speech in a variety of languages, dialects, and voices. The service supports at least one male or female voice, sometimes both, for each language. The audio is streamed back to the client with minimal delay. ### API Overview The Text to Speech service consists of the following related endpoints: * **Voices** provides information about the voices available for synthesized speech. * **Synthesis** synthesizes written text to audio speech. * **Pronunciation** returns the pronunciation for a specified word. The **Get pronunciation** method is currently beta. * **Custom models** and let users create custom voice models, which are dictionaries of words and their translations for use in speech synthesis. All custom model methods are currently beta features. * **Custom words** let users manage the words in a custom voice model. All custom word methods are currently beta features.    **Note about the Try It Out feature:** The `Try it out!` button lets you experiment with the methods of the API by making actual cURL calls to the service. The feature is **not** supported for use with the `POST /v1/synthesize` method. For examples of calls to this method, see the [Text to Speech API reference](http://www.ibm.com/watson/developercloud/text-to-speech/api/v1/). ### API Usage The following information provides details about using the service to synthesize audio: * **Audio formats:** The service supports a number of audio formats (MIME types). For more information about audio formats and sampling rates, including links to a number of Internet sites that provide technical and usage details about the different formats, see [Specifying an audio format](https://console.bluemix.net/docs/services/text-to-speech/http.html#format). * **SSML:** Many methods refer to the Speech Synthesis Markup Language (SSML), an XML-based markup language that provides annotations of text for speec[params.headers] -synthesis applications; for example, many methods accept or produce translations that use an SSML-based phoneme format. See [Using SSML](https://console.bluemix.net/docs/services/text-to-speech/SSML.html) and [Using IBM SPR](https://console.bluemix.net/docs/services/text-to-speech/SPRs.html). * **Word translations:** Many customization methods accept or return sound[params.headers] -like or phonetic translations for words. A phonetic translation is based on the SSML format for representing the phonetic string of a word. Phonetic translations can use standard International Phonetic Alphabet (IPA) representation:   &lt;phoneme alphabet=\"ipa\" ph=\"t&#601;m&#712;&#593;to\"&gt;&lt;/phoneme&gt;   or the proprietary IBM Symbolic Phonetic Representation (SPR):   &lt;phoneme alphabet=\"ibm\" ph=\"1gAstroEntxrYFXs\"&gt;&lt;/phoneme&gt;   For more information about customization and about sound[params.headers] -like and phonetic translations, see [Understanding customization](https://console.bluemix.net/docs/services/text-to-speech/custo[params.headers] -intro.html). * **GUIDs:** The pronunciation and customization methods accept or return a Globally Unique Identifier (GUID). For example, customization IDs (specified with the `customization_id` parameter) and service credentials are GUIDs. GUIDs are hexadecimal strings that have the format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. * **WebSocket interface:** The service also offers a WebSocket interface as an alternative to its HTTP REST interface for speech synthesis. The WebSocket interface supports both plain text and SSML input, including the SSML &lt;mark&gt; element and word timings. See [The WebSocket interface](https://console.bluemix.net/docs/services/text-to-speech/websockets.html). * **Custom voice model ownership:** In all cases, you must use service credentials created for the instance of the service that owns a custom voice model to use the methods described in this documentation with that model. For more information, see [Ownership of custom voice models](https://console.bluemix.net/docs/services/text-to-speech/custo[params.headers] -models.html#customOwner).
 */
var TextToSpeechV1 = /** @class */ (function (_super) {
    __extends(TextToSpeechV1, _super);
    /**
     * Construct a TextToSpeechV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/text-to-speech/api'). The base url may differ between Bluemix regions.
     * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {TextToSpeechV1}
     */
    function TextToSpeechV1(options) {
        return _super.call(this, options) || this;
    }
    /*************************
     * voices
     ************************/
    /**
     * Get a voice.
     *
     * Lists information about the specified voice. The information includes the name, language, gender, and other details about the voice. Specify a customization ID to obtain information for that custom voice model of the specified voice.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.voice - The voice for which information is to be returned.
     * @param {string} [params.customization_id] - The GUID of a custom voice model for which information is to be returned. You must make the request with service credentials created for the instance of the service that owns the custom model. Omit the parameter to see information about the specified voice with no customization.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.getVoice = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['voice'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'customization_id': _params.customization_id
        };
        var path = {
            'voice': _params.voice
        };
        var parameters = {
            options: {
                url: '/v1/voices/{voice}',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Get voices.
     *
     * Retrieves a list of all voices available for use with the service. The information includes the name, language, gender, and other details about the voice.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.listVoices = function (params, callback) {
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : (callback) ? callback : function () { };
        var parameters = {
            options: {
                url: '/v1/voices',
                method: 'GET',
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * synthesize
     ************************/
    /**
     * Synthesize audio.
     *
     * Synthesizes text to spoken audio, returning the synthesized audio stream as an array of bytes. Text size is limited to 5 KB. (For the `audio/l16` format, you can optionally specify `endianness=big-endian` or `endianness=littl[params.headers] -endian`; the default is little endian.)   If a request includes invalid query parameters, the service returns a `Warnings` response header that provides messages about the invalid parameters. The warning includes a descriptive message and a list of invalid argument strings. For example, a message such as `\"Unknown arguments:\"` or `\"Unknown url query arguments:\"` followed by a list of the form `\"invalid_arg_1, invalid_arg_2.\"` The request succeeds despite the warnings.  **Note about the Try It Out feature:** The `Try it out!` button is **not** supported for use with the the `POST /v1/synthesize` method. For examples of calls to the method, see the [Text to Speech API reference](http://www.ibm.com/watson/developercloud/text-to-speech/api/v1/).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.text - The text to synthesize.
     * @param {string} [params.accept] - The type of the response: audio/basic, audio/flac, audio/l16;rate=nnnn, audio/ogg, audio/ogg;codecs=opus, audio/ogg;codecs=vorbis, audio/mp3, audio/mpeg, audio/mulaw;rate=nnnn, audio/wav, audio/webm, audio/webm;codecs=opus, or audio/webm;codecs=vorbis.
     * @param {string} [params.voice] - The voice to use for synthesis.
     * @param {string} [params.customization_id] - The GUID of a custom voice model to use for the synthesis. If a custom voice model is specified, it is guaranteed to work only if it matches the language of the indicated voice. You must make the request with service credentials created for the instance of the service that owns the custom model. Omit the parameter to use the specified voice with no customization.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.synthesize = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['text'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'text': _params.text
        };
        var query = {
            'voice': _params.voice,
            'customization_id': _params.customization_id
        };
        var parameters = {
            options: {
                url: '/v1/synthesize',
                method: 'POST',
                json: true,
                body: body,
                qs: query,
                encoding: null,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Content-Type': 'application/json',
                    'Accept': _params.accept
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * pronunciation
     ************************/
    /**
     * Get pronunciation.
     *
     * Returns the phonetic pronunciation for the specified word. You can request the pronunciation for a specific format. You can also request the pronunciation for a specific voice to see the default translation for the language of that voice or for a specific custom voice model to see the translation for that voice model.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.text - The word for which the pronunciation is requested.
     * @param {string} [params.voice] - A voice that specifies the language in which the pronunciation is to be returned. All voices for the same language (for example, `en-US`) return the same translation.
     * @param {string} [params.format] - The phoneme format in which to return the pronunciation. Omit the parameter to obtain the pronunciation in the default format.
     * @param {string} [params.customization_id] - The GUID of a custom voice model for which the pronunciation is to be returned. The language of a specified custom model must match the language of the specified voice. If the word is not defined in the specified custom model, the service returns the default translation for the custom model's language. You must make the request with service credentials created for the instance of the service that owns the custom model. Omit the parameter to see the translation for the specified voice with no customization.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.getPronunciation = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['text'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'text': _params.text,
            'voice': _params.voice,
            'format': _params.format,
            'customization_id': _params.customization_id
        };
        var parameters = {
            options: {
                url: '/v1/pronunciation',
                method: 'GET',
                qs: query,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * customModels
     ************************/
    /**
     * Create a custom model.
     *
     * Creates a new empty custom voice model. You must specify a name for the new custom model; you can optionally specify the language and a description of the new model. The model is owned by the instance of the service whose credentials are used to create it.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - The name of the new custom voice model.
     * @param {string} [params.language] - The language of the new custom voice model. Omit the parameter to use the the default language, `en-US`.
     * @param {string} [params.description] - A description of the new custom voice model. Specifying a description is recommended.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.createVoiceModel = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['name'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name,
            'language': _params.language,
            'description': _params.description
        };
        var parameters = {
            options: {
                url: '/v1/customizations',
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
    /**
     * Delete a custom model.
     *
     * Deletes the specified custom voice model. You must use credentials for the instance of the service that owns a model to delete it.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The GUID of the custom voice model.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.deleteVoiceModel = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['customization_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id
        };
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}',
                method: 'DELETE',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List a custom model.
     *
     * Lists all information about a specified custom voice model. In addition to metadata such as the name and description of the voice model, the output includes the words and their translations as defined in the model. To see just the metadata for a voice model, use the **List custom models** method.   **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The GUID of the custom voice model.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.getVoiceModel = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['customization_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id
        };
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}',
                method: 'GET',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List custom models.
     *
     * Lists metadata such as the name and description for all custom voice models that are owned by an instance of the service. Specify a language to list the voice models for that language only. To see the words in addition to the metadata for a specific voice model, use the **List a custom model** method. You must use credentials for the instance of the service that owns a model to list information about it.  **Note:** This method is currently a beta release.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.language] - The language for which custom voice models that are owned by the requesting service credentials are to be returned. Omit the parameter to see all custom voice models that are owned by the requester.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.listVoiceModels = function (params, callback) {
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : (callback) ? callback : function () { };
        var query = {
            'language': _params.language
        };
        var parameters = {
            options: {
                url: '/v1/customizations',
                method: 'GET',
                qs: query,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Update a custom model.
     *
     * Updates information for the specified custom voice model. You can update metadata such as the name and description of the voice model. You can also update the words in the model and their translations. Adding a new translation for a word that already exists in a custom model overwrites the word's existing translation. A custom model can contain no more than 20,000 entries. You must use credentials for the instance of the service that owns a model to update it.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The GUID of the custom voice model.
     * @param {string} [params.name] - A new name for the custom voice model.
     * @param {string} [params.description] - A new description for the custom voice model.
     * @param {Word[]} [params.words] - An array of `Word` objects that provides the words and their translations that are to be added or updated for the custom voice model. Pass an empty array to make no additions or updates.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.updateVoiceModel = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['customization_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'words': _params.words
        };
        var path = {
            'customization_id': _params.customization_id
        };
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}',
                method: 'POST',
                json: true,
                body: body,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * customWords
     ************************/
    /**
     * Add a custom word.
     *
     * Adds a single word and its translation to the specified custom voice model. Adding a new translation for a word that already exists in a custom model overwrites the word's existing translation. A custom model can contain no more than 20,000 entries.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The GUID of the custom voice model.
     * @param {string} params.word - The word that is to be added or updated for the custom voice model.
     * @param {string} params.translation - The phonetic or sound[params.headers] -like translation for the word. A phonetic translation is based on the SSML format for representing the phonetic string of a word either as an IPA translation or as an IBM SPR translation. A sound[params.headers] -like is one or more words that, when combined, sound like the word.
     * @param {string} [params.part_of_speech] - **Japanese only.** The part of speech for the word. The service uses the value to produce the correct intonation for the word. You can create only a single entry, with or without a single part of speech, for any word; you cannot create multiple entries with different parts of speech for the same word. For more information, see [Working with Japanese entries](https://console.bluemix.net/docs/services/text-to-speech/custo[params.headers] -rules.html#jaNotes).
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.addWord = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['customization_id', 'word', 'translation'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'translation': _params.translation,
            'part_of_speech': _params.part_of_speech
        };
        var path = {
            'customization_id': _params.customization_id,
            'word': _params.word
        };
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words/{word}',
                method: 'PUT',
                json: true,
                body: body,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Add custom words.
     *
     * Adds one or more words and their translations to the specified custom voice model. Adding a new translation for a word that already exists in a custom model overwrites the word's existing translation. A custom model can contain no more than 20,000 entries.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The GUID of the custom voice model.
     * @param {Word[]} params.words - **When adding words to a custom voice model,** an array of `Word` objects that provides one or more words that are to be added or updated for the custom voice model and the translation for each specified word. **When listing words from a custom voice model,** an array of `Word` objects that lists the words and their translations from the custom voice model. The words are listed in alphabetical order, with uppercase letters listed before lowercase letters. The array is empty if the custom model contains no words.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.addWords = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['customization_id', 'words'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'words': _params.words
        };
        var path = {
            'customization_id': _params.customization_id
        };
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words',
                method: 'POST',
                json: true,
                body: body,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Delete a custom word.
     *
     * Deletes a single word from the specified custom voice model.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The GUID of the custom voice model.
     * @param {string} params.word - The word that is to be deleted from the custom voice model.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.deleteWord = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['customization_id', 'word'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id,
            'word': _params.word
        };
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words/{word}',
                method: 'DELETE',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List a custom word.
     *
     * Returns the translation for a single word from the specified custom model. The output shows the translation as it is defined in the model.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The GUID of the custom voice model.
     * @param {string} params.word - The word that is to be queried from the custom voice model.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.getWord = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['customization_id', 'word'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id,
            'word': _params.word
        };
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words/{word}',
                method: 'GET',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List custom words.
     *
     * Lists all of the words and their translations for the specified custom voice model. The output shows the translations as they are defined in the model.  **Note:** This method is currently a beta release.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The GUID of the custom voice model.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    TextToSpeechV1.prototype.listWords = function (params, callback) {
        var _params = extend({}, params);
        var _callback = (callback) ? callback : function () { };
        var requiredParams = ['customization_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id
        };
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words',
                method: 'GET',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    TextToSpeechV1.URL = 'https://stream.watsonplatform.net/text-to-speech/api';
    return TextToSpeechV1;
}(base_service_1.BaseService));
TextToSpeechV1.prototype.name = 'text_to_speech';
TextToSpeechV1.prototype.serviceVersion = 'v1';
/*************************
 * interfaces
 ************************/
(function (TextToSpeechV1) {
    /** Constants for the `getVoice` operation. */
    var GetVoiceConstants;
    (function (GetVoiceConstants) {
        /** The voice for which information is to be returned. */
        var Voice;
        (function (Voice) {
            Voice["EN_US_ALLISONVOICE"] = "en-US_AllisonVoice";
            Voice["EN_US_LISAVOICE"] = "en-US_LisaVoice";
            Voice["EN_US_MICHAELVOICE"] = "en-US_MichaelVoice";
            Voice["EN_GB_KATEVOICE"] = "en-GB_KateVoice";
            Voice["ES_ES_ENRIQUEVOICE"] = "e[params.headers] -ES_EnriqueVoice";
            Voice["ES_ES_LAURAVOICE"] = "e[params.headers] -ES_LauraVoice";
            Voice["ES_LA_SOFIAVOICE"] = "e[params.headers] -LA_SofiaVoice";
            Voice["ES_US_SOFIAVOICE"] = "e[params.headers] -US_SofiaVoice";
            Voice["DE_DE_DIETERVOICE"] = "d[params.headers] -DE_DieterVoice";
            Voice["DE_DE_BIRGITVOICE"] = "d[params.headers] -DE_BirgitVoice";
            Voice["FR_FR_RENEEVOICE"] = "f[params.headers] -FR_ReneeVoice";
            Voice["IT_IT_FRANCESCAVOICE"] = "it-IT_FrancescaVoice";
            Voice["JA_JP_EMIVOICE"] = "j[params.headers] -JP_EmiVoice";
            Voice["PT_BR_ISABELAVOICE"] = "pt-BR_IsabelaVoice";
        })(Voice = GetVoiceConstants.Voice || (GetVoiceConstants.Voice = {}));
    })(GetVoiceConstants = TextToSpeechV1.GetVoiceConstants || (TextToSpeechV1.GetVoiceConstants = {}));
    /** Constants for the `synthesize` operation. */
    var SynthesizeConstants;
    (function (SynthesizeConstants) {
        /** The type of the response: audio/basic, audio/flac, audio/l16;rate=nnnn, audio/ogg, audio/ogg;codecs=opus, audio/ogg;codecs=vorbis, audio/mp3, audio/mpeg, audio/mulaw;rate=nnnn, audio/wav, audio/webm, audio/webm;codecs=opus, or audio/webm;codecs=vorbis. */
        var Accept;
        (function (Accept) {
            Accept["BASIC"] = "audio/basic";
            Accept["FLAC"] = "audio/flac";
            Accept["L16_RATE_NNNN"] = "audio/l16;rate=nnnn";
            Accept["OGG"] = "audio/ogg";
            Accept["OGG_CODECS_OPUS"] = "audio/ogg;codecs=opus";
            Accept["OGG_CODECS_VORBIS"] = "audio/ogg;codecs=vorbis";
            Accept["MP3"] = "audio/mp3";
            Accept["MPEG"] = "audio/mpeg";
            Accept["MULAW_RATE_NNNN"] = "audio/mulaw;rate=nnnn";
            Accept["WAV"] = "audio/wav";
            Accept["WEBM"] = "audio/webm";
            Accept["WEBM_CODECS_OPUS"] = "audio/webm;codecs=opus";
            Accept["WEBM_CODECS_VORBIS"] = "audio/webm;codecs=vorbis";
        })(Accept = SynthesizeConstants.Accept || (SynthesizeConstants.Accept = {}));
        /** The voice to use for synthesis. */
        var Voice;
        (function (Voice) {
            Voice["EN_US_ALLISONVOICE"] = "en-US_AllisonVoice";
            Voice["EN_US_LISAVOICE"] = "en-US_LisaVoice";
            Voice["EN_US_MICHAELVOICE"] = "en-US_MichaelVoice";
            Voice["EN_GB_KATEVOICE"] = "en-GB_KateVoice";
            Voice["ES_ES_ENRIQUEVOICE"] = "e[params.headers] -ES_EnriqueVoice";
            Voice["ES_ES_LAURAVOICE"] = "e[params.headers] -ES_LauraVoice";
            Voice["ES_LA_SOFIAVOICE"] = "e[params.headers] -LA_SofiaVoice";
            Voice["ES_US_SOFIAVOICE"] = "e[params.headers] -US_SofiaVoice";
            Voice["DE_DE_DIETERVOICE"] = "d[params.headers] -DE_DieterVoice";
            Voice["DE_DE_BIRGITVOICE"] = "d[params.headers] -DE_BirgitVoice";
            Voice["FR_FR_RENEEVOICE"] = "f[params.headers] -FR_ReneeVoice";
            Voice["IT_IT_FRANCESCAVOICE"] = "it-IT_FrancescaVoice";
            Voice["JA_JP_EMIVOICE"] = "j[params.headers] -JP_EmiVoice";
            Voice["PT_BR_ISABELAVOICE"] = "pt-BR_IsabelaVoice";
        })(Voice = SynthesizeConstants.Voice || (SynthesizeConstants.Voice = {}));
    })(SynthesizeConstants = TextToSpeechV1.SynthesizeConstants || (TextToSpeechV1.SynthesizeConstants = {}));
    /** Constants for the `getPronunciation` operation. */
    var GetPronunciationConstants;
    (function (GetPronunciationConstants) {
        /** A voice that specifies the language in which the pronunciation is to be returned. All voices for the same language (for example, `en-US`) return the same translation. */
        var Voice;
        (function (Voice) {
            Voice["EN_US_ALLISONVOICE"] = "en-US_AllisonVoice";
            Voice["EN_US_LISAVOICE"] = "en-US_LisaVoice";
            Voice["EN_US_MICHAELVOICE"] = "en-US_MichaelVoice";
            Voice["EN_GB_KATEVOICE"] = "en-GB_KateVoice";
            Voice["ES_ES_ENRIQUEVOICE"] = "e[params.headers] -ES_EnriqueVoice";
            Voice["ES_ES_LAURAVOICE"] = "e[params.headers] -ES_LauraVoice";
            Voice["ES_LA_SOFIAVOICE"] = "e[params.headers] -LA_SofiaVoice";
            Voice["ES_US_SOFIAVOICE"] = "e[params.headers] -US_SofiaVoice";
            Voice["DE_DE_DIETERVOICE"] = "d[params.headers] -DE_DieterVoice";
            Voice["DE_DE_BIRGITVOICE"] = "d[params.headers] -DE_BirgitVoice";
            Voice["FR_FR_RENEEVOICE"] = "f[params.headers] -FR_ReneeVoice";
            Voice["IT_IT_FRANCESCAVOICE"] = "it-IT_FrancescaVoice";
            Voice["JA_JP_EMIVOICE"] = "j[params.headers] -JP_EmiVoice";
            Voice["PT_BR_ISABELAVOICE"] = "pt-BR_IsabelaVoice";
        })(Voice = GetPronunciationConstants.Voice || (GetPronunciationConstants.Voice = {}));
        /** The phoneme format in which to return the pronunciation. Omit the parameter to obtain the pronunciation in the default format. */
        var Format;
        (function (Format) {
            Format["IPA"] = "ipa";
            Format["IBM"] = "ibm";
        })(Format = GetPronunciationConstants.Format || (GetPronunciationConstants.Format = {}));
    })(GetPronunciationConstants = TextToSpeechV1.GetPronunciationConstants || (TextToSpeechV1.GetPronunciationConstants = {}));
    /** Constants for the `createVoiceModel` operation. */
    var CreateVoiceModelConstants;
    (function (CreateVoiceModelConstants) {
        /** The language of the new custom voice model. Omit the parameter to use the the default language, `en-US`. */
        var Language;
        (function (Language) {
            Language["DE_DE"] = "d[params.headers] -DE";
            Language["EN_US"] = "en-US";
            Language["EN_GB"] = "en-GB";
            Language["ES_ES"] = "e[params.headers] -ES";
            Language["ES_LA"] = "e[params.headers] -LA";
            Language["ES_US"] = "e[params.headers] -US";
            Language["FR_FR"] = "f[params.headers] -FR";
            Language["IT_IT"] = "it-IT";
            Language["JA_JP"] = "j[params.headers] -JP";
            Language["PT_BR"] = "pt-BR";
        })(Language = CreateVoiceModelConstants.Language || (CreateVoiceModelConstants.Language = {}));
    })(CreateVoiceModelConstants = TextToSpeechV1.CreateVoiceModelConstants || (TextToSpeechV1.CreateVoiceModelConstants = {}));
    /** Constants for the `listVoiceModels` operation. */
    var ListVoiceModelsConstants;
    (function (ListVoiceModelsConstants) {
        /** The language for which custom voice models that are owned by the requesting service credentials are to be returned. Omit the parameter to see all custom voice models that are owned by the requester. */
        var Language;
        (function (Language) {
            Language["DE_DE"] = "d[params.headers] -DE";
            Language["EN_US"] = "en-US";
            Language["EN_GB"] = "en-GB";
            Language["ES_ES"] = "e[params.headers] -ES";
            Language["ES_LA"] = "e[params.headers] -LA";
            Language["ES_US"] = "e[params.headers] -US";
            Language["FR_FR"] = "f[params.headers] -FR";
            Language["IT_IT"] = "it-IT";
            Language["JA_JP"] = "j[params.headers] -JP";
            Language["PT_BR"] = "pt-BR";
        })(Language = ListVoiceModelsConstants.Language || (ListVoiceModelsConstants.Language = {}));
    })(ListVoiceModelsConstants = TextToSpeechV1.ListVoiceModelsConstants || (TextToSpeechV1.ListVoiceModelsConstants = {}));
    /** Constants for the `addWord` operation. */
    var AddWordConstants;
    (function (AddWordConstants) {
        /** **Japanese only.** The part of speech for the word. The service uses the value to produce the correct intonation for the word. You can create only a single entry, with or without a single part of speech, for any word; you cannot create multiple entries with different parts of speech for the same word. For more information, see [Working with Japanese entries](https://console.bluemix.net/docs/services/text-to-speech/custo[params.headers] -rules.html#jaNotes). */
        var PartOfSpeech;
        (function (PartOfSpeech) {
            PartOfSpeech["JOSI"] = "Josi";
            PartOfSpeech["MESI"] = "Mesi";
            PartOfSpeech["KIGO"] = "Kigo";
            PartOfSpeech["GOBI"] = "Gobi";
            PartOfSpeech["DOSI"] = "Dosi";
            PartOfSpeech["JODO"] = "Jodo";
            PartOfSpeech["KOYU"] = "Koyu";
            PartOfSpeech["STBI"] = "Stbi";
            PartOfSpeech["SUJI"] = "Suji";
            PartOfSpeech["KEDO"] = "Kedo";
            PartOfSpeech["FUKU"] = "Fuku";
            PartOfSpeech["KEYO"] = "Keyo";
            PartOfSpeech["STTO"] = "Stto";
            PartOfSpeech["RETA"] = "Reta";
            PartOfSpeech["STZO"] = "Stzo";
            PartOfSpeech["KATO"] = "Kato";
            PartOfSpeech["HOKA"] = "Hoka";
        })(PartOfSpeech = AddWordConstants.PartOfSpeech || (AddWordConstants.PartOfSpeech = {}));
    })(AddWordConstants = TextToSpeechV1.AddWordConstants || (TextToSpeechV1.AddWordConstants = {}));
})(TextToSpeechV1 || (TextToSpeechV1 = {}));
module.exports = TextToSpeechV1;
//# sourceMappingURL=v1-generated.js.map