/// <reference types="node" />
/// <reference types="request" />
import { RequestResponse } from 'request';
import { BaseService } from '../lib/base_service';
/**
 * The IBM Watson Conversation service combines machine learning, natural language understanding, and integrated dialog tools to create conversation flows between your apps and your users.
 */
declare class ConversationV1 extends BaseService {
    static URL: string;
    name: string;
    serviceVersion: string;
    /**
     * Construct a ConversationV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/conversation/api'). The base url may differ between Bluemix regions.
     * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {ConversationV1}
     * @throws {Error}
     */
    constructor(options: ConversationV1.Options);
    /*************************
     * message
     ************************/
    /**
     * Get response to user input.
     *
     * Get a response to a user's input.    There is no rate limit for this operation.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {InputData} [params.input] - An input object that includes the input text.
     * @param {boolean} [params.alternate_intents] - Whether to return more than one intent. Set to `true` to return all matching intents.
     * @param {Context} [params.context] - State information for the conversation. Continue a conversation by including the context object from the previous response.
     * @param {RuntimeEntity[]} [params.entities] - Entities to use when evaluating the message. Include entities from the previous response to continue using those entities rather than detecting entities in the new input.
     * @param {RuntimeIntent[]} [params.intents] - Intents to use when evaluating the user input. Include intents from the previous response to continue using those intents rather than trying to recognize intents in the new input.
     * @param {OutputData} [params.output] - System output. Include the output from the previous response to maintain intermediate information over multiple requests.
     * @param {boolean} [params.nodes_visited_details] - Whether to include additional diagnostic information about the dialog nodes that were visited during processing of the message.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    message(params: ConversationV1.MessageParams, callback?: ConversationV1.Callback<ConversationV1.MessageResponse>): NodeJS.ReadableStream | void;
    /*************************
     * workspaces
     ************************/
    /**
     * Create workspace.
     *
     * Create a workspace based on component objects. You must provide workspace components defining the content of the new workspace.    This operation is limited to 30 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.name] - The name of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 64 characters.
     * @param {string} [params.description] - The description of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
     * @param {string} [params.language] - The language of the workspace.
     * @param {CreateIntent[]} [params.intents] - An array of objects defining the intents for the workspace.
     * @param {CreateEntity[]} [params.entities] - An array of objects defining the entities for the workspace.
     * @param {CreateDialogNode[]} [params.dialog_nodes] - An array of objects defining the nodes in the workspace dialog.
     * @param {CreateCounterexample[]} [params.counterexamples] - An array of objects defining input examples that have been marked as irrelevant input.
     * @param {Object} [params.metadata] - Any metadata related to the workspace.
     * @param {boolean} [params.learning_opt_out] - Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createWorkspace(params?: ConversationV1.CreateWorkspaceParams, callback?: ConversationV1.Callback<ConversationV1.Workspace>): NodeJS.ReadableStream | void;
    /**
     * Delete workspace.
     *
     * Delete a workspace from the service instance.    This operation is limited to 30 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteWorkspace(params: ConversationV1.DeleteWorkspaceParams, callback?: ConversationV1.Callback<ConversationV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get information about a workspace.
     *
     * Get information about a workspace, optionally including all workspace content.    With **export**=`false`, this operation is limited to 6000 requests per 5 minutes. With **export**=`true`, the limit is 20 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getWorkspace(params: ConversationV1.GetWorkspaceParams, callback?: ConversationV1.Callback<ConversationV1.WorkspaceExport>): NodeJS.ReadableStream | void;
    /**
     * List workspaces.
     *
     * List the workspaces associated with a Conversation service instance.    This operation is limited to 500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listWorkspaces(params?: ConversationV1.ListWorkspacesParams, callback?: ConversationV1.Callback<ConversationV1.WorkspaceCollection>): NodeJS.ReadableStream | void;
    /**
     * Update workspace.
     *
     * Update an existing workspace with new or modified data. You must provide component objects defining the content of the updated workspace.    This operation is limited to 30 request per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} [params.name] - The name of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 64 characters.
     * @param {string} [params.description] - The description of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
     * @param {string} [params.language] - The language of the workspace.
     * @param {CreateIntent[]} [params.intents] - An array of objects defining the intents for the workspace.
     * @param {CreateEntity[]} [params.entities] - An array of objects defining the entities for the workspace.
     * @param {CreateDialogNode[]} [params.dialog_nodes] - An array of objects defining the nodes in the workspace dialog.
     * @param {CreateCounterexample[]} [params.counterexamples] - An array of objects defining input examples that have been marked as irrelevant input.
     * @param {Object} [params.metadata] - Any metadata related to the workspace.
     * @param {boolean} [params.learning_opt_out] - Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used.
     * @param {boolean} [params.append] - Whether the new data is to be appended to the existing data in the workspace. If **append**=`false`, elements included in the new data completely replace the corresponding existing elements, including all subelements. For example, if the new data includes **entities** and **append**=`false`, all existing entities in the workspace are discarded and replaced with the new entities.    If **append**=`true`, existing elements are preserved, and the new elements are added. If any elements in the new data collide with existing elements, the update request fails.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateWorkspace(params: ConversationV1.UpdateWorkspaceParams, callback?: ConversationV1.Callback<ConversationV1.Workspace>): NodeJS.ReadableStream | void;
    /*************************
     * intents
     ************************/
    /**
     * Create intent.
     *
     * Create a new intent.    This operation is limited to 2000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The name of the intent. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, hyphen, and dot characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 128 characters.
     * @param {string} [params.description] - The description of the intent. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
     * @param {CreateExample[]} [params.examples] - An array of user input examples for the intent.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createIntent(params: ConversationV1.CreateIntentParams, callback?: ConversationV1.Callback<ConversationV1.Intent>): NodeJS.ReadableStream | void;
    /**
     * Delete intent.
     *
     * Delete an intent from a workspace.    This operation is limited to 2000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The intent name.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteIntent(params: ConversationV1.DeleteIntentParams, callback?: ConversationV1.Callback<ConversationV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get intent.
     *
     * Get information about an intent, optionally including all intent content.    With **export**=`false`, this operation is limited to 6000 requests per 5 minutes. With **export**=`true`, the limit is 400 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The intent name.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getIntent(params: ConversationV1.GetIntentParams, callback?: ConversationV1.Callback<ConversationV1.IntentExport>): NodeJS.ReadableStream | void;
    /**
     * List intents.
     *
     * List the intents for a workspace.    With **export**=`false`, this operation is limited to 2000 requests per 30 minutes. With **export**=`true`, the limit is 400 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listIntents(params: ConversationV1.ListIntentsParams, callback?: ConversationV1.Callback<ConversationV1.IntentCollection>): NodeJS.ReadableStream | void;
    /**
     * Update intent.
     *
     * Update an existing intent with new or modified data. You must provide component objects defining the content of the updated intent.    This operation is limited to 2000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The intent name.
     * @param {string} [params.new_intent] - The name of the intent. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, hyphen, and dot characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 128 characters.
     * @param {string} [params.new_description] - The description of the intent.
     * @param {CreateExample[]} [params.new_examples] - An array of user input examples for the intent.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateIntent(params: ConversationV1.UpdateIntentParams, callback?: ConversationV1.Callback<ConversationV1.Intent>): NodeJS.ReadableStream | void;
    /*************************
     * examples
     ************************/
    /**
     * Create user input example.
     *
     * Add a new user input example to an intent.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The intent name.
     * @param {string} params.text - The text of a user input example. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 1024 characters.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createExample(params: ConversationV1.CreateExampleParams, callback?: ConversationV1.Callback<ConversationV1.Example>): NodeJS.ReadableStream | void;
    /**
     * Delete user input example.
     *
     * Delete a user input example from an intent.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The intent name.
     * @param {string} params.text - The text of the user input example.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteExample(params: ConversationV1.DeleteExampleParams, callback?: ConversationV1.Callback<ConversationV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get user input example.
     *
     * Get information about a user input example.    This operation is limited to 6000 requests per 5 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The intent name.
     * @param {string} params.text - The text of the user input example.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getExample(params: ConversationV1.GetExampleParams, callback?: ConversationV1.Callback<ConversationV1.Example>): NodeJS.ReadableStream | void;
    /**
     * List user input examples.
     *
     * List the user input examples for an intent.    This operation is limited to 2500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The intent name.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listExamples(params: ConversationV1.ListExamplesParams, callback?: ConversationV1.Callback<ConversationV1.ExampleCollection>): NodeJS.ReadableStream | void;
    /**
     * Update user input example.
     *
     * Update the text of a user input example.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.intent - The intent name.
     * @param {string} params.text - The text of the user input example.
     * @param {string} [params.new_text] - The text of the user input example. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 1024 characters.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateExample(params: ConversationV1.UpdateExampleParams, callback?: ConversationV1.Callback<ConversationV1.Example>): NodeJS.ReadableStream | void;
    /*************************
     * counterexamples
     ************************/
    /**
     * Create counterexample.
     *
     * Add a new counterexample to a workspace. Counterexamples are examples that have been marked as irrelevant input.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.text - The text of a user input marked as irrelevant input. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters  - It cannot consist of only whitespace characters  - It must be no longer than 1024 characters.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createCounterexample(params: ConversationV1.CreateCounterexampleParams, callback?: ConversationV1.Callback<ConversationV1.Counterexample>): NodeJS.ReadableStream | void;
    /**
     * Delete counterexample.
     *
     * Delete a counterexample from a workspace. Counterexamples are examples that have been marked as irrelevant input.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.text - The text of a user input counterexample (for example, `What are you wearing?`).
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteCounterexample(params: ConversationV1.DeleteCounterexampleParams, callback?: ConversationV1.Callback<ConversationV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get counterexample.
     *
     * Get information about a counterexample. Counterexamples are examples that have been marked as irrelevant input.    This operation is limited to 6000 requests per 5 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.text - The text of a user input counterexample (for example, `What are you wearing?`).
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getCounterexample(params: ConversationV1.GetCounterexampleParams, callback?: ConversationV1.Callback<ConversationV1.Counterexample>): NodeJS.ReadableStream | void;
    /**
     * List counterexamples.
     *
     * List the counterexamples for a workspace. Counterexamples are examples that have been marked as irrelevant input.    This operation is limited to 2500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listCounterexamples(params: ConversationV1.ListCounterexamplesParams, callback?: ConversationV1.Callback<ConversationV1.CounterexampleCollection>): NodeJS.ReadableStream | void;
    /**
     * Update counterexample.
     *
     * Update the text of a counterexample. Counterexamples are examples that have been marked as irrelevant input.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.text - The text of a user input counterexample (for example, `What are you wearing?`).
     * @param {string} [params.new_text] - The text of a user input counterexample.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateCounterexample(params: ConversationV1.UpdateCounterexampleParams, callback?: ConversationV1.Callback<ConversationV1.Counterexample>): NodeJS.ReadableStream | void;
    /*************************
     * entities
     ************************/
    /**
     * Create entity.
     *
     * Create a new entity.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, and hyphen characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 64 characters.
     * @param {string} [params.description] - The description of the entity. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
     * @param {Object} [params.metadata] - Any metadata related to the value.
     * @param {CreateValue[]} [params.values] - An array of objects describing the entity values.
     * @param {boolean} [params.fuzzy_match] - Whether to use fuzzy matching for the entity.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createEntity(params: ConversationV1.CreateEntityParams, callback?: ConversationV1.Callback<ConversationV1.Entity>): NodeJS.ReadableStream | void;
    /**
     * Delete entity.
     *
     * Delete an entity from a workspace.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteEntity(params: ConversationV1.DeleteEntityParams, callback?: ConversationV1.Callback<ConversationV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get entity.
     *
     * Get information about an entity, optionally including all entity content.    With **export**=`false`, this operation is limited to 6000 requests per 5 minutes. With **export**=`true`, the limit is 200 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getEntity(params: ConversationV1.GetEntityParams, callback?: ConversationV1.Callback<ConversationV1.EntityExport>): NodeJS.ReadableStream | void;
    /**
     * List entities.
     *
     * List the entities for a workspace.    With **export**=`false`, this operation is limited to 1000 requests per 30 minutes. With **export**=`true`, the limit is 200 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listEntities(params: ConversationV1.ListEntitiesParams, callback?: ConversationV1.Callback<ConversationV1.EntityCollection>): NodeJS.ReadableStream | void;
    /**
     * Update entity.
     *
     * Update an existing entity with new or modified data. You must provide component objects defining the content of the updated entity.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} [params.new_entity] - The name of the entity. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, and hyphen characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 64 characters.
     * @param {string} [params.new_description] - The description of the entity. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
     * @param {Object} [params.new_metadata] - Any metadata related to the entity.
     * @param {boolean} [params.new_fuzzy_match] - Whether to use fuzzy matching for the entity.
     * @param {CreateValue[]} [params.new_values] - An array of entity values.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateEntity(params: ConversationV1.UpdateEntityParams, callback?: ConversationV1.Callback<ConversationV1.Entity>): NodeJS.ReadableStream | void;
    /*************************
     * values
     ************************/
    /**
     * Add entity value.
     *
     * Create a new value for an entity.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
     * @param {Object} [params.metadata] - Any metadata related to the entity value.
     * @param {string[]} [params.synonyms] - An array containing any synonyms for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A synonym must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
     * @param {string[]} [params.patterns] - An array of patterns for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A pattern is a regular expression no longer than 128 characters. For more information about how to specify a pattern, see the [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#creating-entities).
     * @param {string} [params.value_type] - Specifies the type of value.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createValue(params: ConversationV1.CreateValueParams, callback?: ConversationV1.Callback<ConversationV1.Value>): NodeJS.ReadableStream | void;
    /**
     * Delete entity value.
     *
     * Delete a value from an entity.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteValue(params: ConversationV1.DeleteValueParams, callback?: ConversationV1.Callback<ConversationV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get entity value.
     *
     * Get information about an entity value.    This operation is limited to 6000 requests per 5 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getValue(params: ConversationV1.GetValueParams, callback?: ConversationV1.Callback<ConversationV1.ValueExport>): NodeJS.ReadableStream | void;
    /**
     * List entity values.
     *
     * List the values for an entity.    This operation is limited to 2500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listValues(params: ConversationV1.ListValuesParams, callback?: ConversationV1.Callback<ConversationV1.ValueCollection>): NodeJS.ReadableStream | void;
    /**
     * Update entity value.
     *
     * Update an existing entity value with new or modified data. You must provide component objects defining the content of the updated entity value.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} [params.new_value] - The text of the entity value. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
     * @param {Object} [params.new_metadata] - Any metadata related to the entity value.
     * @param {string} [params.new_type] - Specifies the type of value.
     * @param {string[]} [params.new_synonyms] - An array of synonyms for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A synonym must conform to the following resrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
     * @param {string[]} [params.new_patterns] - An array of patterns for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A pattern is a regular expression no longer than 128 characters. For more information about how to specify a pattern, see the [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#creating-entities).
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateValue(params: ConversationV1.UpdateValueParams, callback?: ConversationV1.Callback<ConversationV1.Value>): NodeJS.ReadableStream | void;
    /*************************
     * synonyms
     ************************/
    /**
     * Add entity value synonym.
     *
     * Add a new synonym to an entity value.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} params.synonym - The text of the synonym. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createSynonym(params: ConversationV1.CreateSynonymParams, callback?: ConversationV1.Callback<ConversationV1.Synonym>): NodeJS.ReadableStream | void;
    /**
     * Delete entity value synonym.
     *
     * Delete a synonym from an entity value.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} params.synonym - The text of the synonym.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteSynonym(params: ConversationV1.DeleteSynonymParams, callback?: ConversationV1.Callback<ConversationV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get entity value synonym.
     *
     * Get information about a synonym of an entity value.    This operation is limited to 6000 requests per 5 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} params.synonym - The text of the synonym.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getSynonym(params: ConversationV1.GetSynonymParams, callback?: ConversationV1.Callback<ConversationV1.Synonym>): NodeJS.ReadableStream | void;
    /**
     * List entity value synonyms.
     *
     * List the synonyms for an entity value.    This operation is limited to 2500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listSynonyms(params: ConversationV1.ListSynonymsParams, callback?: ConversationV1.Callback<ConversationV1.SynonymCollection>): NodeJS.ReadableStream | void;
    /**
     * Update entity value synonym.
     *
     * Update an existing entity value synonym with new text.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} params.synonym - The text of the synonym.
     * @param {string} [params.new_synonym] - The text of the synonym. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateSynonym(params: ConversationV1.UpdateSynonymParams, callback?: ConversationV1.Callback<ConversationV1.Synonym>): NodeJS.ReadableStream | void;
    /*************************
     * dialogNodes
     ************************/
    /**
     * Create dialog node.
     *
     * Create a new dialog node.    This operation is limited to 500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.dialog_node - The dialog node ID. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 1024 characters.
     * @param {string} [params.description] - The description of the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
     * @param {string} [params.conditions] - The condition that will trigger the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters.
     * @param {string} [params.parent] - The ID of the parent dialog node.
     * @param {string} [params.previous_sibling] - The ID of the previous dialog node.
     * @param {Object} [params.output] - The output of the dialog node. For more information about how to specify dialog node output, see the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex).
     * @param {Object} [params.context] - The context for the dialog node.
     * @param {Object} [params.metadata] - The metadata for the dialog node.
     * @param {DialogNodeNextStep} [params.next_step] - The next step to be executed in dialog processing.
     * @param {DialogNodeAction[]} [params.actions] - An array of objects describing any actions to be invoked by the dialog node.
     * @param {string} [params.title] - The alias used to identify the dialog node. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 64 characters.
     * @param {string} [params.node_type] - How the dialog node is processed.
     * @param {string} [params.event_name] - How an `event_handler` node is processed.
     * @param {string} [params.variable] - The location in the dialog context where output is stored.
     * @param {string} [params.digress_in] - Whether this top-level dialog node can be digressed into.
     * @param {string} [params.digress_out] - Whether this dialog node can be returned to after a digression.
     * @param {string} [params.digress_out_slots] - Whether the user can digress to top-level nodes while filling out slots.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createDialogNode(params: ConversationV1.CreateDialogNodeParams, callback?: ConversationV1.Callback<ConversationV1.DialogNode>): NodeJS.ReadableStream | void;
    /**
     * Delete dialog node.
     *
     * Delete a dialog node from a workspace.    This operation is limited to 500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.dialog_node - The dialog node ID (for example, `get_order`).
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteDialogNode(params: ConversationV1.DeleteDialogNodeParams, callback?: ConversationV1.Callback<ConversationV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get dialog node.
     *
     * Get information about a dialog node.    This operation is limited to 6000 requests per 5 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.dialog_node - The dialog node ID (for example, `get_order`).
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getDialogNode(params: ConversationV1.GetDialogNodeParams, callback?: ConversationV1.Callback<ConversationV1.DialogNode>): NodeJS.ReadableStream | void;
    /**
     * List dialog nodes.
     *
     * List the dialog nodes for a workspace.    This operation is limited to 2500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listDialogNodes(params: ConversationV1.ListDialogNodesParams, callback?: ConversationV1.Callback<ConversationV1.DialogNodeCollection>): NodeJS.ReadableStream | void;
    /**
     * Update dialog node.
     *
     * Update an existing dialog node with new or modified data.    This operation is limited to 500 requests per 30 minutes. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} params.dialog_node - The dialog node ID (for example, `get_order`).
     * @param {string} [params.new_dialog_node] - The dialog node ID. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 1024 characters.
     * @param {string} [params.new_description] - The description of the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
     * @param {string} [params.new_conditions] - The condition that will trigger the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters.
     * @param {string} [params.new_parent] - The ID of the parent dialog node.
     * @param {string} [params.new_previous_sibling] - The ID of the previous sibling dialog node.
     * @param {Object} [params.new_output] - The output of the dialog node. For more information about how to specify dialog node output, see the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex).
     * @param {Object} [params.new_context] - The context for the dialog node.
     * @param {Object} [params.new_metadata] - The metadata for the dialog node.
     * @param {DialogNodeNextStep} [params.new_next_step] - The next step to be executed in dialog processing.
     * @param {string} [params.new_title] - The alias used to identify the dialog node. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 64 characters.
     * @param {string} [params.new_type] - How the dialog node is processed.
     * @param {string} [params.new_event_name] - How an `event_handler` node is processed.
     * @param {string} [params.new_variable] - The location in the dialog context where output is stored.
     * @param {DialogNodeAction[]} [params.new_actions] - An array of objects describing any actions to be invoked by the dialog node.
     * @param {string} [params.new_digress_in] - Whether this top-level dialog node can be digressed into.
     * @param {string} [params.new_digress_out] - Whether this dialog node can be returned to after a digression.
     * @param {string} [params.new_digress_out_slots] - Whether the user can digress to top-level nodes while filling out slots.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateDialogNode(params: ConversationV1.UpdateDialogNodeParams, callback?: ConversationV1.Callback<ConversationV1.DialogNode>): NodeJS.ReadableStream | void;
    /*************************
     * logs
     ************************/
    /**
     * List log events in all workspaces.
     *
     * List the events from the logs of all workspaces in the service instance.    If **cursor** is not specified, this operation is limited to 40 requests per 30 minutes. If **cursor** is specified, the limit is 120 requests per minute. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.filter - A cacheable parameter that limits the results to those matching the specified filter. You must specify a filter query that includes a value for `language`, as well as a value for `workspace_id` or `request.context.metadata.deployment`. For more information, see the [documentation](https://console.bluemix.net/docs/services/conversation/filter-reference.html#filter-query-syntax).
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listAllLogs(params: ConversationV1.ListAllLogsParams, callback?: ConversationV1.Callback<ConversationV1.LogCollection>): NodeJS.ReadableStream | void;
    /**
     * List log events in a workspace.
     *
     * List the events from the log of a specific workspace.    If **cursor** is not specified, this operation is limited to 40 requests per 30 minutes. If **cursor** is specified, the limit is 120 requests per minute. For more information, see **Rate limiting**.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
     * @param {string} [params.filter] - A cacheable parameter that limits the results to those matching the specified filter. For more information, see the [documentation](https://console.bluemix.net/docs/services/conversation/filter-reference.html#filter-query-syntax).
     * @param {number} [params.page_limit] - The number of records to return in each page of results.
     * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listLogs(params: ConversationV1.ListLogsParams, callback?: ConversationV1.Callback<ConversationV1.LogCollection>): NodeJS.ReadableStream | void;
}
/*************************
 * interfaces
 ************************/
declare namespace ConversationV1 {
    /** Options for the `ConversationV1` constructor. */
    type Options = {
        version: string;
        url?: string;
        username?: string;
        password?: string;
        use_unauthenticated?: boolean;
        headers?: object;
    };
    /** The callback for a service request. */
    type Callback<T> = (error: any, body?: T, response?: RequestResponse) => void;
    /** The body of a service request that returns no response data. */
    interface Empty {
    }
    /*************************
     * request interfaces
     ************************/
    /** Parameters for the `message` operation. */
    interface MessageParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** An input object that includes the input text. */
        input?: InputData;
        /** Whether to return more than one intent. Set to `true` to return all matching intents. */
        alternate_intents?: boolean;
        /** State information for the conversation. Continue a conversation by including the context object from the previous response. */
        context?: Context;
        /** Entities to use when evaluating the message. Include entities from the previous response to continue using those entities rather than detecting entities in the new input. */
        entities?: RuntimeEntity[];
        /** Intents to use when evaluating the user input. Include intents from the previous response to continue using those intents rather than trying to recognize intents in the new input. */
        intents?: RuntimeIntent[];
        /** System output. Include the output from the previous response to maintain intermediate information over multiple requests. */
        output?: OutputData;
        /** Whether to include additional diagnostic information about the dialog nodes that were visited during processing of the message. */
        nodes_visited_details?: boolean;
        headers?: Object;
    }
    /** Parameters for the `createWorkspace` operation. */
    interface CreateWorkspaceParams {
        /** The name of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 64 characters. */
        name?: string;
        /** The description of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        description?: string;
        /** The language of the workspace. */
        language?: string;
        /** An array of objects defining the intents for the workspace. */
        intents?: CreateIntent[];
        /** An array of objects defining the entities for the workspace. */
        entities?: CreateEntity[];
        /** An array of objects defining the nodes in the workspace dialog. */
        dialog_nodes?: CreateDialogNode[];
        /** An array of objects defining input examples that have been marked as irrelevant input. */
        counterexamples?: CreateCounterexample[];
        /** Any metadata related to the workspace. */
        metadata?: Object;
        /** Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used. */
        learning_opt_out?: boolean;
        headers?: Object;
    }
    /** Parameters for the `deleteWorkspace` operation. */
    interface DeleteWorkspaceParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        headers?: Object;
    }
    /** Parameters for the `getWorkspace` operation. */
    interface GetWorkspaceParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included. */
        export?: boolean;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `listWorkspaces` operation. */
    interface ListWorkspacesParams {
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** Whether to include information about the number of records returned. */
        include_count?: boolean;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateWorkspace` operation. */
    interface UpdateWorkspaceParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 64 characters. */
        name?: string;
        /** The description of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        description?: string;
        /** The language of the workspace. */
        language?: string;
        /** An array of objects defining the intents for the workspace. */
        intents?: CreateIntent[];
        /** An array of objects defining the entities for the workspace. */
        entities?: CreateEntity[];
        /** An array of objects defining the nodes in the workspace dialog. */
        dialog_nodes?: CreateDialogNode[];
        /** An array of objects defining input examples that have been marked as irrelevant input. */
        counterexamples?: CreateCounterexample[];
        /** Any metadata related to the workspace. */
        metadata?: Object;
        /** Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used. */
        learning_opt_out?: boolean;
        /** Whether the new data is to be appended to the existing data in the workspace. If **append**=`false`, elements included in the new data completely replace the corresponding existing elements, including all subelements. For example, if the new data includes **entities** and **append**=`false`, all existing entities in the workspace are discarded and replaced with the new entities.    If **append**=`true`, existing elements are preserved, and the new elements are added. If any elements in the new data collide with existing elements, the update request fails. */
        append?: boolean;
        headers?: Object;
    }
    /** Parameters for the `createIntent` operation. */
    interface CreateIntentParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the intent. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, hyphen, and dot characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 128 characters. */
        intent: string;
        /** The description of the intent. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        description?: string;
        /** An array of user input examples for the intent. */
        examples?: CreateExample[];
        headers?: Object;
    }
    /** Parameters for the `deleteIntent` operation. */
    interface DeleteIntentParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The intent name. */
        intent: string;
        headers?: Object;
    }
    /** Parameters for the `getIntent` operation. */
    interface GetIntentParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The intent name. */
        intent: string;
        /** Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included. */
        export?: boolean;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `listIntents` operation. */
    interface ListIntentsParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included. */
        export?: boolean;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** Whether to include information about the number of records returned. */
        include_count?: boolean;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateIntent` operation. */
    interface UpdateIntentParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The intent name. */
        intent: string;
        /** The name of the intent. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, hyphen, and dot characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 128 characters. */
        new_intent?: string;
        /** The description of the intent. */
        new_description?: string;
        /** An array of user input examples for the intent. */
        new_examples?: CreateExample[];
        headers?: Object;
    }
    /** Parameters for the `createExample` operation. */
    interface CreateExampleParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The intent name. */
        intent: string;
        /** The text of a user input example. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 1024 characters. */
        text: string;
        headers?: Object;
    }
    /** Parameters for the `deleteExample` operation. */
    interface DeleteExampleParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The intent name. */
        intent: string;
        /** The text of the user input example. */
        text: string;
        headers?: Object;
    }
    /** Parameters for the `getExample` operation. */
    interface GetExampleParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The intent name. */
        intent: string;
        /** The text of the user input example. */
        text: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `listExamples` operation. */
    interface ListExamplesParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The intent name. */
        intent: string;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** Whether to include information about the number of records returned. */
        include_count?: boolean;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateExample` operation. */
    interface UpdateExampleParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The intent name. */
        intent: string;
        /** The text of the user input example. */
        text: string;
        /** The text of the user input example. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 1024 characters. */
        new_text?: string;
        headers?: Object;
    }
    /** Parameters for the `createCounterexample` operation. */
    interface CreateCounterexampleParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The text of a user input marked as irrelevant input. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters  - It cannot consist of only whitespace characters  - It must be no longer than 1024 characters. */
        text: string;
        headers?: Object;
    }
    /** Parameters for the `deleteCounterexample` operation. */
    interface DeleteCounterexampleParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The text of a user input counterexample (for example, `What are you wearing?`). */
        text: string;
        headers?: Object;
    }
    /** Parameters for the `getCounterexample` operation. */
    interface GetCounterexampleParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The text of a user input counterexample (for example, `What are you wearing?`). */
        text: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `listCounterexamples` operation. */
    interface ListCounterexamplesParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** Whether to include information about the number of records returned. */
        include_count?: boolean;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateCounterexample` operation. */
    interface UpdateCounterexampleParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The text of a user input counterexample (for example, `What are you wearing?`). */
        text: string;
        /** The text of a user input counterexample. */
        new_text?: string;
        headers?: Object;
    }
    /** Parameters for the `createEntity` operation. */
    interface CreateEntityParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, and hyphen characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 64 characters. */
        entity: string;
        /** The description of the entity. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        description?: string;
        /** Any metadata related to the value. */
        metadata?: Object;
        /** An array of objects describing the entity values. */
        values?: CreateValue[];
        /** Whether to use fuzzy matching for the entity. */
        fuzzy_match?: boolean;
        headers?: Object;
    }
    /** Parameters for the `deleteEntity` operation. */
    interface DeleteEntityParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        headers?: Object;
    }
    /** Parameters for the `getEntity` operation. */
    interface GetEntityParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included. */
        export?: boolean;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `listEntities` operation. */
    interface ListEntitiesParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included. */
        export?: boolean;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** Whether to include information about the number of records returned. */
        include_count?: boolean;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateEntity` operation. */
    interface UpdateEntityParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The name of the entity. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, and hyphen characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 64 characters. */
        new_entity?: string;
        /** The description of the entity. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        new_description?: string;
        /** Any metadata related to the entity. */
        new_metadata?: Object;
        /** Whether to use fuzzy matching for the entity. */
        new_fuzzy_match?: boolean;
        /** An array of entity values. */
        new_values?: CreateValue[];
        headers?: Object;
    }
    /** Parameters for the `createValue` operation. */
    interface CreateValueParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters. */
        value: string;
        /** Any metadata related to the entity value. */
        metadata?: Object;
        /** An array containing any synonyms for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A synonym must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters. */
        synonyms?: string[];
        /** An array of patterns for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A pattern is a regular expression no longer than 128 characters. For more information about how to specify a pattern, see the [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#creating-entities). */
        patterns?: string[];
        /** Specifies the type of value. */
        value_type?: CreateValueConstants.ValueType | string;
        headers?: Object;
    }
    /** Constants for the `createValue` operation. */
    namespace CreateValueConstants {
        /** Specifies the type of value. */
        enum ValueType {
            SYNONYMS = "synonyms",
            PATTERNS = "patterns",
        }
    }
    /** Parameters for the `deleteValue` operation. */
    interface DeleteValueParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. */
        value: string;
        headers?: Object;
    }
    /** Parameters for the `getValue` operation. */
    interface GetValueParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. */
        value: string;
        /** Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included. */
        export?: boolean;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `listValues` operation. */
    interface ListValuesParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included. */
        export?: boolean;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** Whether to include information about the number of records returned. */
        include_count?: boolean;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateValue` operation. */
    interface UpdateValueParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. */
        value: string;
        /** The text of the entity value. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters. */
        new_value?: string;
        /** Any metadata related to the entity value. */
        new_metadata?: Object;
        /** Specifies the type of value. */
        new_type?: UpdateValueConstants.ValueType | string;
        /** An array of synonyms for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A synonym must conform to the following resrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters. */
        new_synonyms?: string[];
        /** An array of patterns for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A pattern is a regular expression no longer than 128 characters. For more information about how to specify a pattern, see the [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#creating-entities). */
        new_patterns?: string[];
        headers?: Object;
    }
    /** Constants for the `updateValue` operation. */
    namespace UpdateValueConstants {
        /** Specifies the type of value. */
        enum ValueType {
            SYNONYMS = "synonyms",
            PATTERNS = "patterns",
        }
    }
    /** Parameters for the `createSynonym` operation. */
    interface CreateSynonymParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. */
        value: string;
        /** The text of the synonym. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters. */
        synonym: string;
        headers?: Object;
    }
    /** Parameters for the `deleteSynonym` operation. */
    interface DeleteSynonymParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. */
        value: string;
        /** The text of the synonym. */
        synonym: string;
        headers?: Object;
    }
    /** Parameters for the `getSynonym` operation. */
    interface GetSynonymParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. */
        value: string;
        /** The text of the synonym. */
        synonym: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `listSynonyms` operation. */
    interface ListSynonymsParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. */
        value: string;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** Whether to include information about the number of records returned. */
        include_count?: boolean;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateSynonym` operation. */
    interface UpdateSynonymParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The name of the entity. */
        entity: string;
        /** The text of the entity value. */
        value: string;
        /** The text of the synonym. */
        synonym: string;
        /** The text of the synonym. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters. */
        new_synonym?: string;
        headers?: Object;
    }
    /** Parameters for the `createDialogNode` operation. */
    interface CreateDialogNodeParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The dialog node ID. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 1024 characters. */
        dialog_node: string;
        /** The description of the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        description?: string;
        /** The condition that will trigger the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters. */
        conditions?: string;
        /** The ID of the parent dialog node. */
        parent?: string;
        /** The ID of the previous dialog node. */
        previous_sibling?: string;
        /** The output of the dialog node. For more information about how to specify dialog node output, see the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex). */
        output?: Object;
        /** The context for the dialog node. */
        context?: Object;
        /** The metadata for the dialog node. */
        metadata?: Object;
        /** The next step to be executed in dialog processing. */
        next_step?: DialogNodeNextStep;
        /** An array of objects describing any actions to be invoked by the dialog node. */
        actions?: DialogNodeAction[];
        /** The alias used to identify the dialog node. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 64 characters. */
        title?: string;
        /** How the dialog node is processed. */
        node_type?: CreateDialogNodeConstants.NodeType | string;
        /** How an `event_handler` node is processed. */
        event_name?: CreateDialogNodeConstants.EventName | string;
        /** The location in the dialog context where output is stored. */
        variable?: string;
        /** Whether this top-level dialog node can be digressed into. */
        digress_in?: CreateDialogNodeConstants.DigressIn | string;
        /** Whether this dialog node can be returned to after a digression. */
        digress_out?: CreateDialogNodeConstants.DigressOut | string;
        /** Whether the user can digress to top-level nodes while filling out slots. */
        digress_out_slots?: CreateDialogNodeConstants.DigressOutSlots | string;
        headers?: Object;
    }
    /** Constants for the `createDialogNode` operation. */
    namespace CreateDialogNodeConstants {
        /** How the dialog node is processed. */
        enum NodeType {
            STANDARD = "standard",
            EVENT_HANDLER = "event_handler",
            FRAME = "frame",
            SLOT = "slot",
            RESPONSE_CONDITION = "response_condition",
            FOLDER = "folder",
        }
        /** How an `event_handler` node is processed. */
        enum EventName {
            FOCUS = "focus",
            INPUT = "input",
            FILLED = "filled",
            VALIDATE = "validate",
            FILLED_MULTIPLE = "filled_multiple",
            GENERIC = "generic",
            NOMATCH = "nomatch",
            NOMATCH_RESPONSES_DEPLETED = "nomatch_responses_depleted",
        }
        /** Whether this top-level dialog node can be digressed into. */
        enum DigressIn {
            NOT_AVAILABLE = "not_available",
            RETURNS = "returns",
            DOES_NOT_RETURN = "does_not_return",
        }
        /** Whether this dialog node can be returned to after a digression. */
        enum DigressOut {
            RETURNING = "allow_returning",
            ALL = "allow_all",
            ALL_NEVER_RETURN = "allow_all_never_return",
        }
        /** Whether the user can digress to top-level nodes while filling out slots. */
        enum DigressOutSlots {
            NOT_ALLOWED = "not_allowed",
            ALLOW_RETURNING = "allow_returning",
            ALLOW_ALL = "allow_all",
        }
    }
    /** Parameters for the `deleteDialogNode` operation. */
    interface DeleteDialogNodeParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The dialog node ID (for example, `get_order`). */
        dialog_node: string;
        headers?: Object;
    }
    /** Parameters for the `getDialogNode` operation. */
    interface GetDialogNodeParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The dialog node ID (for example, `get_order`). */
        dialog_node: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `listDialogNodes` operation. */
    interface ListDialogNodesParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** Whether to include information about the number of records returned. */
        include_count?: boolean;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
        include_audit?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateDialogNode` operation. */
    interface UpdateDialogNodeParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The dialog node ID (for example, `get_order`). */
        dialog_node: string;
        /** The dialog node ID. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 1024 characters. */
        new_dialog_node?: string;
        /** The description of the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        new_description?: string;
        /** The condition that will trigger the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters. */
        new_conditions?: string;
        /** The ID of the parent dialog node. */
        new_parent?: string;
        /** The ID of the previous sibling dialog node. */
        new_previous_sibling?: string;
        /** The output of the dialog node. For more information about how to specify dialog node output, see the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex). */
        new_output?: Object;
        /** The context for the dialog node. */
        new_context?: Object;
        /** The metadata for the dialog node. */
        new_metadata?: Object;
        /** The next step to be executed in dialog processing. */
        new_next_step?: DialogNodeNextStep;
        /** The alias used to identify the dialog node. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 64 characters. */
        new_title?: string;
        /** How the dialog node is processed. */
        new_type?: UpdateDialogNodeConstants.NodeType | string;
        /** How an `event_handler` node is processed. */
        new_event_name?: UpdateDialogNodeConstants.EventName | string;
        /** The location in the dialog context where output is stored. */
        new_variable?: string;
        /** An array of objects describing any actions to be invoked by the dialog node. */
        new_actions?: DialogNodeAction[];
        /** Whether this top-level dialog node can be digressed into. */
        new_digress_in?: UpdateDialogNodeConstants.DigressIn | string;
        /** Whether this dialog node can be returned to after a digression. */
        new_digress_out?: UpdateDialogNodeConstants.DigressOut | string;
        /** Whether the user can digress to top-level nodes while filling out slots. */
        new_digress_out_slots?: UpdateDialogNodeConstants.DigressOutSlots | string;
        headers?: Object;
    }
    /** Constants for the `updateDialogNode` operation. */
    namespace UpdateDialogNodeConstants {
        /** How the dialog node is processed. */
        enum NodeType {
            STANDARD = "standard",
            EVENT_HANDLER = "event_handler",
            FRAME = "frame",
            SLOT = "slot",
            RESPONSE_CONDITION = "response_condition",
            FOLDER = "folder",
        }
        /** How an `event_handler` node is processed. */
        enum EventName {
            FOCUS = "focus",
            INPUT = "input",
            FILLED = "filled",
            VALIDATE = "validate",
            FILLED_MULTIPLE = "filled_multiple",
            GENERIC = "generic",
            NOMATCH = "nomatch",
            NOMATCH_RESPONSES_DEPLETED = "nomatch_responses_depleted",
        }
        /** Whether this top-level dialog node can be digressed into. */
        enum DigressIn {
            NOT_AVAILABLE = "not_available",
            RETURNS = "returns",
            DOES_NOT_RETURN = "does_not_return",
        }
        /** Whether this dialog node can be returned to after a digression. */
        enum DigressOut {
            RETURNING = "allow_returning",
            ALL = "allow_all",
            ALL_NEVER_RETURN = "allow_all_never_return",
        }
        /** Whether the user can digress to top-level nodes while filling out slots. */
        enum DigressOutSlots {
            NOT_ALLOWED = "not_allowed",
            ALLOW_RETURNING = "allow_returning",
            ALLOW_ALL = "allow_all",
        }
    }
    /** Parameters for the `listAllLogs` operation. */
    interface ListAllLogsParams {
        /** A cacheable parameter that limits the results to those matching the specified filter. You must specify a filter query that includes a value for `language`, as well as a value for `workspace_id` or `request.context.metadata.deployment`. For more information, see the [documentation](https://console.bluemix.net/docs/services/conversation/filter-reference.html#filter-query-syntax). */
        filter: string;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        headers?: Object;
    }
    /** Parameters for the `listLogs` operation. */
    interface ListLogsParams {
        /** Unique identifier of the workspace. */
        workspace_id: string;
        /** The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`. */
        sort?: string;
        /** A cacheable parameter that limits the results to those matching the specified filter. For more information, see the [documentation](https://console.bluemix.net/docs/services/conversation/filter-reference.html#filter-query-syntax). */
        filter?: string;
        /** The number of records to return in each page of results. */
        page_limit?: number;
        /** A token identifying the page of results to retrieve. */
        cursor?: string;
        headers?: Object;
    }
    /*************************
     * model interfaces
     ************************/
    /** CaptureGroup. */
    interface CaptureGroup {
        /** A recognized capture group for the entity. */
        group: string;
        /** Zero-based character offsets that indicate where the entity value begins and ends in the input text. */
        location?: number[];
    }
    /** State information for the conversation. To maintain state, include the context from the previous response. */
    interface Context {
        /** The unique identifier of the conversation. */
        conversation_id?: string;
        /** For internal use only. */
        system?: SystemResponse;
    }
    /** Counterexample. */
    interface Counterexample {
        /** The text of the counterexample. */
        text: string;
        /** The timestamp for creation of the counterexample. */
        created?: string;
        /** The timestamp for the last update to the counterexample. */
        updated?: string;
    }
    /** CounterexampleCollection. */
    interface CounterexampleCollection {
        /** An array of objects describing the examples marked as irrelevant input. */
        counterexamples: Counterexample[];
        /** The pagination data for the returned objects. */
        pagination: Pagination;
    }
    /** CreateCounterexample. */
    interface CreateCounterexample {
        /** The text of a user input marked as irrelevant input. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters  - It cannot consist of only whitespace characters  - It must be no longer than 1024 characters. */
        text: string;
    }
    /** CreateDialogNode. */
    interface CreateDialogNode {
        /** The dialog node ID. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 1024 characters. */
        dialog_node: string;
        /** The description of the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        description?: string;
        /** The condition that will trigger the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters. */
        conditions?: string;
        /** The ID of the parent dialog node. */
        parent?: string;
        /** The ID of the previous dialog node. */
        previous_sibling?: string;
        /** The output of the dialog node. For more information about how to specify dialog node output, see the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex). */
        output?: Object;
        /** The context for the dialog node. */
        context?: Object;
        /** The metadata for the dialog node. */
        metadata?: Object;
        /** The next step to be executed in dialog processing. */
        next_step?: DialogNodeNextStep;
        /** An array of objects describing any actions to be invoked by the dialog node. */
        actions?: DialogNodeAction[];
        /** The alias used to identify the dialog node. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 64 characters. */
        title?: string;
        /** How the dialog node is processed. */
        node_type?: string;
        /** How an `event_handler` node is processed. */
        event_name?: string;
        /** The location in the dialog context where output is stored. */
        variable?: string;
        /** Whether this top-level dialog node can be digressed into. */
        digress_in?: string;
        /** Whether this dialog node can be returned to after a digression. */
        digress_out?: string;
        /** Whether the user can digress to top-level nodes while filling out slots. */
        digress_out_slots?: string;
    }
    /** CreateEntity. */
    interface CreateEntity {
        /** The name of the entity. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, and hyphen characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 64 characters. */
        entity: string;
        /** The description of the entity. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        description?: string;
        /** Any metadata related to the value. */
        metadata?: Object;
        /** An array of objects describing the entity values. */
        values?: CreateValue[];
        /** Whether to use fuzzy matching for the entity. */
        fuzzy_match?: boolean;
    }
    /** CreateExample. */
    interface CreateExample {
        /** The text of a user input example. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 1024 characters. */
        text: string;
    }
    /** CreateIntent. */
    interface CreateIntent {
        /** The name of the intent. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, hyphen, and dot characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 128 characters. */
        intent: string;
        /** The description of the intent. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters. */
        description?: string;
        /** An array of user input examples for the intent. */
        examples?: CreateExample[];
    }
    /** CreateValue. */
    interface CreateValue {
        /** The text of the entity value. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters. */
        value: string;
        /** Any metadata related to the entity value. */
        metadata?: Object;
        /** An array containing any synonyms for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A synonym must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters. */
        synonyms?: string[];
        /** An array of patterns for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A pattern is a regular expression no longer than 128 characters. For more information about how to specify a pattern, see the [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#creating-entities). */
        patterns?: string[];
        /** Specifies the type of value. */
        value_type?: string;
    }
    /** DialogNode. */
    interface DialogNode {
        /** The dialog node ID. */
        dialog_node_id: string;
        /** The description of the dialog node. */
        description?: string;
        /** The condition that triggers the dialog node. */
        conditions?: string;
        /** The ID of the parent dialog node. This property is not returned if the dialog node has no parent. */
        parent?: string;
        /** The ID of the previous sibling dialog node. This property is not returned if the dialog node has no previous sibling. */
        previous_sibling?: string;
        /** The output of the dialog node. */
        output?: Object;
        /** The context (if defined) for the dialog node. */
        context?: Object;
        /** Any metadata for the dialog node. */
        metadata?: Object;
        /** The next step to execute following this dialog node. */
        next_step?: DialogNodeNextStep;
        /** The timestamp for creation of the dialog node. */
        created?: string;
        /** The timestamp for the most recent update to the dialog node. */
        updated?: string;
        /** The actions for the dialog node. */
        actions?: DialogNodeAction[];
        /** The alias used to identify the dialog node. */
        title?: string;
        /** How the dialog node is processed. */
        node_type?: string;
        /** How an `event_handler` node is processed. */
        event_name?: string;
        /** The location in the dialog context where output is stored. */
        variable?: string;
        /** Whether this top-level dialog node can be digressed into. */
        digress_in?: string;
        /** Whether this dialog node can be returned to after a digression. */
        digress_out?: string;
        /** Whether the user can digress to top-level nodes while filling out slots. */
        digress_out_slots?: string;
    }
    /** DialogNodeAction. */
    interface DialogNodeAction {
        /** The name of the action. */
        name: string;
        /** The type of action to invoke. */
        action_type?: string;
        /** A map of key/value pairs to be provided to the action. */
        parameters?: Object;
        /** The location in the dialog context where the result of the action is stored. */
        result_variable: string;
        /** The name of the context variable that the client application will use to pass in credentials for the action. */
        credentials?: string;
    }
    /** An array of dialog nodes. */
    interface DialogNodeCollection {
        /** An array of objects describing the dialog nodes defined for the workspace. */
        dialog_nodes: DialogNode[];
        /** The pagination data for the returned objects. */
        pagination: Pagination;
    }
    /** The next step to execute following this dialog node. */
    interface DialogNodeNextStep {
        /** What happens after the dialog node completes. The valid values depend on the node type:  - The following values are valid for any node:    - `get_user_input`    - `skip_user_input`    - `jump_to`  - If the node is of type `event_handler` and its parent node is of type `slot` or `frame`, additional values are also valid:    - if **event_name**=`filled` and the type of the parent node is `slot`:      - `reprompt`      - `skip_all_slots`  - if **event_name**=`nomatch` and the type of the parent node is `slot`:      - `reprompt`      - `skip_slot`      - `skip_all_slots`  - if **event_name**=`generic` and the type of the parent node is `frame`:      - `reprompt`      - `skip_slot`      - `skip_all_slots`        If you specify `jump_to`, then you must also specify a value for the `dialog_node` property. */
        behavior: string;
        /** The ID of the dialog node to process next. This parameter is required if **behavior**=`jump_to`. */
        dialog_node?: string;
        /** Which part of the dialog node to process next. */
        selector?: string;
    }
    /** DialogNodeVisitedDetails. */
    interface DialogNodeVisitedDetails {
        /** A dialog node that was triggered during processing of the input message. */
        dialog_node?: string;
        /** The title of the dialog node. */
        title?: string;
        /** The conditions that trigger the dialog node. */
        conditions?: string;
    }
    /** Entity. */
    interface Entity {
        /** The name of the entity. */
        entity_name: string;
        /** The timestamp for creation of the entity. */
        created?: string;
        /** The timestamp for the last update to the entity. */
        updated?: string;
        /** The description of the entity. */
        description?: string;
        /** Any metadata related to the entity. */
        metadata?: Object;
        /** Whether fuzzy matching is used for the entity. */
        fuzzy_match?: boolean;
    }
    /** An array of entities. */
    interface EntityCollection {
        /** An array of objects describing the entities defined for the workspace. */
        entities: EntityExport[];
        /** The pagination data for the returned objects. */
        pagination: Pagination;
    }
    /** EntityExport. */
    interface EntityExport {
        /** The name of the entity. */
        entity_name: string;
        /** The timestamp for creation of the entity. */
        created?: string;
        /** The timestamp for the last update to the entity. */
        updated?: string;
        /** The description of the entity. */
        description?: string;
        /** Any metadata related to the entity. */
        metadata?: Object;
        /** Whether fuzzy matching is used for the entity. */
        fuzzy_match?: boolean;
        /** An array objects describing the entity values. */
        values?: ValueExport[];
    }
    /** Example. */
    interface Example {
        /** The text of the user input example. */
        example_text: string;
        /** The timestamp for creation of the example. */
        created?: string;
        /** The timestamp for the last update to the example. */
        updated?: string;
    }
    /** ExampleCollection. */
    interface ExampleCollection {
        /** An array of objects describing the examples defined for the intent. */
        examples: Example[];
        /** The pagination data for the returned objects. */
        pagination: Pagination;
    }
    /** The user input. */
    interface InputData {
        /** The text of the user input. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters. */
        text: string;
    }
    /** Intent. */
    interface Intent {
        /** The name of the intent. */
        intent_name: string;
        /** The timestamp for creation of the intent. */
        created?: string;
        /** The timestamp for the last update to the intent. */
        updated?: string;
        /** The description of the intent. */
        description?: string;
    }
    /** IntentCollection. */
    interface IntentCollection {
        /** An array of objects describing the intents defined for the workspace. */
        intents: IntentExport[];
        /** The pagination data for the returned objects. */
        pagination: Pagination;
    }
    /** IntentExport. */
    interface IntentExport {
        /** The name of the intent. */
        intent_name: string;
        /** The timestamp for creation of the intent. */
        created?: string;
        /** The timestamp for the last update to the intent. */
        updated?: string;
        /** The description of the intent. */
        description?: string;
        /** An array of objects describing the user input examples for the intent. */
        examples?: Example[];
    }
    /** LogCollection. */
    interface LogCollection {
        /** An array of objects describing log events. */
        logs: LogExport[];
        /** The pagination data for the returned objects. */
        pagination: LogPagination;
    }
    /** LogExport. */
    interface LogExport {
        /** A request received by the workspace, including the user input and context. */
        request: MessageRequest;
        /** The response sent by the workspace, including the output text, detected intents and entities, and context. */
        response: MessageResponse;
        /** A unique identifier for the logged event. */
        log_id: string;
        /** The timestamp for receipt of the message. */
        request_timestamp: string;
        /** The timestamp for the system response to the message. */
        response_timestamp: string;
        /** The unique identifier of the workspace where the request was made. */
        workspace_id: string;
        /** The language of the workspace where the message request was made. */
        language: string;
    }
    /** Log message details. */
    interface LogMessage {
        /** The severity of the log message. */
        level: string;
        /** The text of the log message. */
        msg: string;
    }
    /** The pagination data for the returned objects. */
    interface LogPagination {
        /** The URL that will return the next page of results, if any. */
        next_url?: string;
        /** Reserved for future use. */
        matched?: number;
        /** A token identifying the next page of results. */
        next_cursor?: string;
    }
    /** The text of the user input. */
    interface MessageInput {
        /** The user's input. */
        text?: string;
    }
    /** A request formatted for the Conversation service. */
    interface MessageRequest {
        /** An input object that includes the input text. */
        input?: InputData;
        /** Whether to return more than one intent. Set to `true` to return all matching intents. */
        alternate_intents?: boolean;
        /** State information for the conversation. Continue a conversation by including the context object from the previous response. */
        context?: Context;
        /** Entities to use when evaluating the message. Include entities from the previous response to continue using those entities rather than detecting entities in the new input. */
        entities?: RuntimeEntity[];
        /** Intents to use when evaluating the user input. Include intents from the previous response to continue using those intents rather than trying to recognize intents in the new input. */
        intents?: RuntimeIntent[];
        /** System output. Include the output from the previous response to maintain intermediate information over multiple requests. */
        output?: OutputData;
    }
    /** A response from the Conversation service. */
    interface MessageResponse {
        /** The user input from the request. */
        input?: MessageInput;
        /** An array of intents recognized in the user input, sorted in descending order of confidence. */
        intents: RuntimeIntent[];
        /** An array of entities identified in the user input. */
        entities: RuntimeEntity[];
        /** Whether to return more than one intent. A value of `true` indicates that all matching intents are returned. */
        alternate_intents?: boolean;
        /** State information for the conversation. */
        context: Context;
        /** Output from the dialog, including the response to the user, the nodes that were triggered, and log messages. */
        output: OutputData;
    }
    /** An output object that includes the response to the user, the nodes that were hit, and messages from the log. */
    interface OutputData {
        /** An array of up to 50 messages logged with the request. */
        log_messages: LogMessage[];
        /** An array of responses to the user. */
        text: string[];
        /** An array of the nodes that were triggered to create the response, in the order in which they were visited. This information is useful for debugging and for tracing the path taken through the node tree. */
        nodes_visited?: string[];
        /** An array of objects containing detailed diagnostic information about the nodes that were triggered during processing of the input message. Included only if **nodes_visited_details** is set to `true` in the message request. */
        nodes_visited_details?: DialogNodeVisitedDetails[];
    }
    /** The pagination data for the returned objects. */
    interface Pagination {
        /** The URL that will return the same page of results. */
        refresh_url: string;
        /** The URL that will return the next page of results. */
        next_url?: string;
        /** Reserved for future use. */
        total?: number;
        /** Reserved for future use. */
        matched?: number;
        /** A token identifying the current page of results. */
        refresh_cursor?: string;
        /** A token identifying the next page of results. */
        next_cursor?: string;
    }
    /** A term from the request that was identified as an entity. */
    interface RuntimeEntity {
        /** An entity detected in the input. */
        entity: string;
        /** An array of zero-based character offsets that indicate where the detected entity values begin and end in the input text. */
        location: number[];
        /** The term in the input text that was recognized as an entity value. */
        value: string;
        /** A decimal percentage that represents Watson's confidence in the entity. */
        confidence?: number;
        /** Any metadata for the entity. */
        metadata?: Object;
        /** The recognized capture groups for the entity, as defined by the entity pattern. */
        groups?: CaptureGroup[];
    }
    /** An intent identified in the user input. */
    interface RuntimeIntent {
        /** The name of the recognized intent. */
        intent: string;
        /** A decimal percentage that represents Watson's confidence in the intent. */
        confidence: number;
    }
    /** Synonym. */
    interface Synonym {
        /** The text of the synonym. */
        synonym_text: string;
        /** The timestamp for creation of the synonym. */
        created?: string;
        /** The timestamp for the most recent update to the synonym. */
        updated?: string;
    }
    /** SynonymCollection. */
    interface SynonymCollection {
        /** An array of synonyms. */
        synonyms: Synonym[];
        /** The pagination data for the returned objects. */
        pagination: Pagination;
    }
    /** For internal use only. */
    interface SystemResponse {
    }
    /** Value. */
    interface Value {
        /** The text of the entity value. */
        value_text: string;
        /** Any metadata related to the entity value. */
        metadata?: Object;
        /** The timestamp for creation of the entity value. */
        created?: string;
        /** The timestamp for the last update to the entity value. */
        updated?: string;
        /** An array containing any synonyms for the entity value. */
        synonyms?: string[];
        /** An array containing any patterns for the entity value. */
        patterns?: string[];
        /** Specifies the type of value. */
        value_type: string;
    }
    /** ValueCollection. */
    interface ValueCollection {
        /** An array of entity values. */
        values: ValueExport[];
        /** An object defining the pagination data for the returned objects. */
        pagination: Pagination;
    }
    /** ValueExport. */
    interface ValueExport {
        /** The text of the entity value. */
        value_text: string;
        /** Any metadata related to the entity value. */
        metadata?: Object;
        /** The timestamp for creation of the entity value. */
        created?: string;
        /** The timestamp for the last update to the entity value. */
        updated?: string;
        /** An array containing any synonyms for the entity value. */
        synonyms?: string[];
        /** An array containing any patterns for the entity value. */
        patterns?: string[];
        /** Specifies the type of value. */
        value_type: string;
    }
    /** Workspace. */
    interface Workspace {
        /** The name of the workspace. */
        name: string;
        /** The language of the workspace. */
        language: string;
        /** The timestamp for creation of the workspace. */
        created?: string;
        /** The timestamp for the last update to the workspace. */
        updated?: string;
        /** The workspace ID. */
        workspace_id: string;
        /** The description of the workspace. */
        description?: string;
        /** Any metadata related to the workspace. */
        metadata?: Object;
        /** Whether training data from the workspace (including artifacts such as intents and entities) can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used. */
        learning_opt_out?: boolean;
    }
    /** WorkspaceCollection. */
    interface WorkspaceCollection {
        /** An array of objects describing the workspaces associated with the service instance. */
        workspaces: Workspace[];
        /** An object defining the pagination data for the returned objects. */
        pagination: Pagination;
    }
    /** WorkspaceExport. */
    interface WorkspaceExport {
        /** The name of the workspace. */
        name: string;
        /** The description of the workspace. */
        description: string;
        /** The language of the workspace. */
        language: string;
        /** Any metadata that is required by the workspace. */
        metadata: Object;
        /** The timestamp for creation of the workspace. */
        created?: string;
        /** The timestamp for the last update to the workspace. */
        updated?: string;
        /** The workspace ID. */
        workspace_id: string;
        /** The current status of the workspace. */
        status: string;
        /** Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used. */
        learning_opt_out: boolean;
        /** An array of intents. */
        intents?: IntentExport[];
        /** An array of entities. */
        entities?: EntityExport[];
        /** An array of counterexamples. */
        counterexamples?: Counterexample[];
        /** An array of objects describing the dialog nodes in the workspace. */
        dialog_nodes?: DialogNode[];
    }
}
export = ConversationV1;