/// <reference types="node" />
/// <reference types="request" />
import { RequestResponse } from 'request';
import { BaseService } from '../lib/base_service';
import { FileObject } from '../lib/helper';
/**
 * The IBM Watson Visual Recognition service uses deep learning algorithms to identify scenes, objects, and faces  in images you upload to the service. You can create and train a custom classifier to identify subjects that suit your needs.
 */
declare class VisualRecognitionV3 extends BaseService {
    static URL: string;
    name: string;
    serviceVersion: string;
    /**
     * Construct a VisualRecognitionV3 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/visual-recognition/api'). The base url may differ between Bluemix regions.
     * @param {string} [options.api_key] - The API key used to authenticate with the service. The API key credential is only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {VisualRecognitionV3}
     * @throws {Error}
     */
    constructor(options: VisualRecognitionV3.Options);
    /*************************
     * general
     ************************/
    /**
     * Classify images.
     *
     * Classify images with built-in or custom classifiers.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.images_file] - An image file (.jpg, .png) or .zip file with images. Maximum image size is 10 MB. Include no more than 20 images and limit the .zip file to 100 MB. Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8 encoding if it encounters non-ASCII characters.  You can also include an image with the **url** parameter.
     * @param {string} [params.accept_language] - The language of the output class names. The full set of languages is supported only for the built-in `default` classifier ID. The class names of custom classifiers are not translated.  The response might not be in the specified language when the requested language is not supported or when there is no translation for the class name.
     * @param {string} [params.url] - The URL of an image to analyze. Must be in .jpg, or .png format. The minimum recommended pixel density is 32X32 pixels per inch, and the maximum image size is 10 MB.  You can also include images with the **images_file** parameter.
     * @param {number} [params.threshold] - The minimum score a class must have to be displayed in the response. Set the threshold to `0.0` to ignore the classification score and return all values.
     * @param {string[]} [params.owners] - The categories of classifiers to apply. Use `IBM` to classify against the `default` general classifier, and use `me` to classify against your custom classifiers. To analyze the image against both classifier categories, set the value to both `IBM` and `me`.   The built-in `default` classifier is used if both **classifier_ids** and **owners** parameters are empty.  The **classifier_ids** parameter overrides **owners**, so make sure that **classifier_ids** is empty.
     * @param {string[]} [params.classifier_ids] - Which classifiers to apply. Overrides the **owners** parameter. You can specify both custom and built-in classifier IDs. The built-in `default` classifier is used if both **classifier_ids** and **owners** parameters are empty.  The following built-in classifier IDs require no training: - `default`: Returns classes from thousands of general tags. - `food`: (Beta) Enhances specificity and accuracy for images of food items. - `explicit`: (Beta) Evaluates whether the image might be pornographic.
     * @param {string} [params.images_file_content_type] - The content type of images_file.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    classify(params?: VisualRecognitionV3.ClassifyParams, callback?: VisualRecognitionV3.Callback<VisualRecognitionV3.ClassifiedImages>): NodeJS.ReadableStream | void;
    /*************************
     * face
     ************************/
    /**
     * Detect faces in images.
     *
     * **Important:** On April 2, 2018, the identity information in the response to calls to the Face model was removed. The identity information refers to the `name` of the person, `score`, and `type_hierarchy` knowledge graph. For details about the enhanced Face model, see the [Release notes](https://console.bluemix.net/docs/services/visual-recognition/release-notes.html#2april2018).  Analyze and get data about faces in images. Responses can include estimated age and gender. This feature uses a built-in model, so no training is necessary. The Detect faces method does not support general biometric facial recognition.  Supported image formats include .gif, .jpg, .png, and .tif. The maximum image size is 10 MB. The minimum recommended pixel density is 32X32 pixels per inch.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.images_file] - An image file (gif, .jpg, .png, .tif.) or .zip file with images. Limit the .zip file to 100 MB. You can include a maximum of 15 images in a request.  Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8 encoding if it encounters non-ASCII characters.  You can also include an image with the **url** parameter.
     * @param {string} [params.url] - The URL of an image to analyze. Must be in .gif, .jpg, .png, or .tif format. The minimum recommended pixel density is 32X32 pixels per inch, and the maximum image size is 10 MB. Redirects are followed, so you can use a shortened URL.  You can also include images with the **images_file** parameter.
     * @param {string} [params.images_file_content_type] - The content type of images_file.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    detectFaces(params?: VisualRecognitionV3.DetectFacesParams, callback?: VisualRecognitionV3.Callback<VisualRecognitionV3.DetectedFaces>): NodeJS.ReadableStream | void;
    /*************************
     * custom
     ************************/
    /**
     * Create a classifier.
     *
     * Train a new multi-faceted classifier on the uploaded image data. Create your custom classifier with positive or negative examples. Include at least two sets of examples, either two positive example files or one positive and one negative file. You can upload a maximum of 256 MB per call.  Encode all names in UTF-8 if they contain non-ASCII characters (.zip and image file names, and classifier and class names). The service assumes UTF-8 encoding if it encounters non-ASCII characters.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - The name of the new classifier. Encode special characters in UTF-8.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.classname_positive_examples - A .zip file of images that depict the visual subject of a class in the new classifier. You can include more than one positive example file in a call.  Specify the parameter name by appending `_positive_examples` to the class name. For example, `goldenretriever_positive_examples` creates the class **goldenretriever**.  Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The maximum number of images is 10,000 images or 100 MB per .zip file.  Encode special characters in the file name in UTF-8.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.negative_examples] - A .zip file of images that do not depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.  Encode special characters in the file name in UTF-8.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createClassifier(params: VisualRecognitionV3.CreateClassifierParams, callback?: VisualRecognitionV3.Callback<VisualRecognitionV3.Classifier>): NodeJS.ReadableStream | void;
    /**
     * Delete a classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteClassifier(params: VisualRecognitionV3.DeleteClassifierParams, callback?: VisualRecognitionV3.Callback<VisualRecognitionV3.Empty>): NodeJS.ReadableStream | void;
    /**
     * Retrieve classifier details.
     *
     * Retrieve information about a custom classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getClassifier(params: VisualRecognitionV3.GetClassifierParams, callback?: VisualRecognitionV3.Callback<VisualRecognitionV3.Classifier>): NodeJS.ReadableStream | void;
    /**
     * Retrieve a list of classifiers.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {boolean} [params.verbose] - Specify `true` to return details about the classifiers. Omit this parameter to return a brief list of classifiers.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listClassifiers(params?: VisualRecognitionV3.ListClassifiersParams, callback?: VisualRecognitionV3.Callback<VisualRecognitionV3.Classifiers>): NodeJS.ReadableStream | void;
    /**
     * Update a classifier.
     *
     * Update a custom classifier by adding new positive or negative classes (examples) or by adding new images to existing classes. You must supply at least one set of positive or negative examples. For details, see [Updating custom classifiers](https://console.bluemix.net/docs/services/visual-recognition/customizing.html#updating-custom-classifiers).  Encode all names in UTF-8 if they contain non-ASCII characters (.zip and image file names, and classifier and class names). The service assumes UTF-8 encoding if it encounters non-ASCII characters.  **Tip:** Don't make retraining calls on a classifier until the status is ready. When you submit retraining requests in parallel, the last request overwrites the previous requests. The retrained property shows the last time the classifier retraining finished.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.classname_positive_examples] - A .zip file of images that depict the visual subject of a class in the classifier. The positive examples create or update classes in the classifier. You can include more than one positive example file in a call.  Specify the parameter name by appending `_positive_examples` to the class name. For example, `goldenretriever_positive_examples` creates the class `goldenretriever`.  Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The maximum number of images is 10,000 images or 100 MB per .zip file.  Encode special characters in the file name in UTF-8.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.negative_examples] - A .zip file of images that do not depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.  Encode special characters in the file name in UTF-8.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateClassifier(params: VisualRecognitionV3.UpdateClassifierParams, callback?: VisualRecognitionV3.Callback<VisualRecognitionV3.Classifier>): NodeJS.ReadableStream | void;
    /*************************
     * coreML
     ************************/
    /**
     * Retrieve a Core ML model of a classifier.
     *
     * Download a Core ML model file (.mlmodel) of a custom classifier that returns <tt>\"core_ml_enabled\": true</tt> in the classifier details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getCoreMlModel(params: VisualRecognitionV3.GetCoreMlModelParams, callback?: VisualRecognitionV3.Callback<NodeJS.ReadableStream | FileObject | Buffer>): NodeJS.ReadableStream | void;
}
/*************************
 * interfaces
 ************************/
declare namespace VisualRecognitionV3 {
    /** Options for the `VisualRecognitionV3` constructor. */
    type Options = {
        version: string;
        url?: string;
        api_key?: string;
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
    /** Parameters for the `classify` operation. */
    interface ClassifyParams {
        /** An image file (.jpg, .png) or .zip file with images. Maximum image size is 10 MB. Include no more than 20 images and limit the .zip file to 100 MB. Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8 encoding if it encounters non-ASCII characters.  You can also include an image with the **url** parameter. */
        images_file?: NodeJS.ReadableStream | FileObject | Buffer;
        /** The language of the output class names. The full set of languages is supported only for the built-in `default` classifier ID. The class names of custom classifiers are not translated.  The response might not be in the specified language when the requested language is not supported or when there is no translation for the class name. */
        accept_language?: ClassifyConstants.AcceptLanguage | string;
        /** The URL of an image to analyze. Must be in .jpg, or .png format. The minimum recommended pixel density is 32X32 pixels per inch, and the maximum image size is 10 MB.  You can also include images with the **images_file** parameter. */
        url?: string;
        /** The minimum score a class must have to be displayed in the response. Set the threshold to `0.0` to ignore the classification score and return all values. */
        threshold?: number;
        /** The categories of classifiers to apply. Use `IBM` to classify against the `default` general classifier, and use `me` to classify against your custom classifiers. To analyze the image against both classifier categories, set the value to both `IBM` and `me`.   The built-in `default` classifier is used if both **classifier_ids** and **owners** parameters are empty.  The **classifier_ids** parameter overrides **owners**, so make sure that **classifier_ids** is empty. */
        owners?: string[];
        /** Which classifiers to apply. Overrides the **owners** parameter. You can specify both custom and built-in classifier IDs. The built-in `default` classifier is used if both **classifier_ids** and **owners** parameters are empty.  The following built-in classifier IDs require no training: - `default`: Returns classes from thousands of general tags. - `food`: (Beta) Enhances specificity and accuracy for images of food items. - `explicit`: (Beta) Evaluates whether the image might be pornographic. */
        classifier_ids?: string[];
        /** The content type of images_file. */
        images_file_content_type?: string;
        headers?: Object;
    }
    /** Constants for the `classify` operation. */
    namespace ClassifyConstants {
        /** The language of the output class names. The full set of languages is supported only for the built-in `default` classifier ID. The class names of custom classifiers are not translated.  The response might not be in the specified language when the requested language is not supported or when there is no translation for the class name. */
        enum AcceptLanguage {
            EN = "en",
            AR = "ar",
            DE = "de",
            ES = "es",
            FR = "fr",
            IT = "it",
            JA = "ja",
            KO = "ko",
        }
    }
    /** Parameters for the `detectFaces` operation. */
    interface DetectFacesParams {
        /** An image file (gif, .jpg, .png, .tif.) or .zip file with images. Limit the .zip file to 100 MB. You can include a maximum of 15 images in a request.  Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8 encoding if it encounters non-ASCII characters.  You can also include an image with the **url** parameter. */
        images_file?: NodeJS.ReadableStream | FileObject | Buffer;
        /** The URL of an image to analyze. Must be in .gif, .jpg, .png, or .tif format. The minimum recommended pixel density is 32X32 pixels per inch, and the maximum image size is 10 MB. Redirects are followed, so you can use a shortened URL.  You can also include images with the **images_file** parameter. */
        url?: string;
        /** The content type of images_file. */
        images_file_content_type?: string;
        headers?: Object;
    }
    /** Parameters for the `createClassifier` operation. */
    interface CreateClassifierParams {
        /** The name of the new classifier. Encode special characters in UTF-8. */
        name: string;
        /** A .zip file of images that depict the visual subject of a class in the new classifier. You can include more than one positive example file in a call.  Specify the parameter name by appending `_positive_examples` to the class name. For example, `goldenretriever_positive_examples` creates the class **goldenretriever**.  Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The maximum number of images is 10,000 images or 100 MB per .zip file.  Encode special characters in the file name in UTF-8. */
        classname_positive_examples: NodeJS.ReadableStream | FileObject | Buffer;
        /** A .zip file of images that do not depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.  Encode special characters in the file name in UTF-8. */
        negative_examples?: NodeJS.ReadableStream | FileObject | Buffer;
        headers?: Object;
    }
    /** Parameters for the `deleteClassifier` operation. */
    interface DeleteClassifierParams {
        /** The ID of the classifier. */
        classifier_id: string;
        headers?: Object;
    }
    /** Parameters for the `getClassifier` operation. */
    interface GetClassifierParams {
        /** The ID of the classifier. */
        classifier_id: string;
        headers?: Object;
    }
    /** Parameters for the `listClassifiers` operation. */
    interface ListClassifiersParams {
        /** Specify `true` to return details about the classifiers. Omit this parameter to return a brief list of classifiers. */
        verbose?: boolean;
        headers?: Object;
    }
    /** Parameters for the `updateClassifier` operation. */
    interface UpdateClassifierParams {
        /** The ID of the classifier. */
        classifier_id: string;
        /** A .zip file of images that depict the visual subject of a class in the classifier. The positive examples create or update classes in the classifier. You can include more than one positive example file in a call.  Specify the parameter name by appending `_positive_examples` to the class name. For example, `goldenretriever_positive_examples` creates the class `goldenretriever`.  Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The maximum number of images is 10,000 images or 100 MB per .zip file.  Encode special characters in the file name in UTF-8. */
        classname_positive_examples?: NodeJS.ReadableStream | FileObject | Buffer;
        /** A .zip file of images that do not depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.  Encode special characters in the file name in UTF-8. */
        negative_examples?: NodeJS.ReadableStream | FileObject | Buffer;
        headers?: Object;
    }
    /** Parameters for the `getCoreMlModel` operation. */
    interface GetCoreMlModelParams {
        /** The ID of the classifier. */
        classifier_id: string;
        headers?: Object;
    }
    /*************************
     * model interfaces
     ************************/
    /** A category within a classifier. */
    interface Class {
        /** The name of the class. */
        class_name: string;
    }
    /** Result of a class within a classifier. */
    interface ClassResult {
        /** The name of the class. */
        class_name: string;
        /** Confidence score for the property in the range of 0 to 1. A higher score indicates greater likelihood that the class is depicted in the image. The default threshold for returning scores from a classifier is 0.5. */
        score?: number;
        /** Knowledge graph of the property. For example, `/fruit/pome/apple/eating apple/Granny Smith`. Included only if identified. */
        type_hierarchy?: string;
    }
    /** Classifier results for one image. */
    interface ClassifiedImage {
        /** Source of the image before any redirects. Not returned when the image is uploaded. */
        source_url?: string;
        /** Fully resolved URL of the image after redirects are followed. Not returned when the image is uploaded. */
        resolved_url?: string;
        /** Relative path of the image file if uploaded directly. Not returned when the image is passed by URL. */
        image?: string;
        error?: ErrorInfo;
        classifiers: ClassifierResult[];
    }
    /** Classify results for multiple images. */
    interface ClassifiedImages {
        /** The number of custom classes identified in the images. */
        custom_classes?: number;
        /** Number of images processed for the API call. */
        images_processed?: number;
        /** The array of classified images. */
        images: ClassifiedImage[];
        /** Information about what might cause less than optimal output. For example, a request sent with a corrupt .zip file and a list of image URLs will still complete, but does not return the expected output. Not returned when there is no warning. */
        warnings?: WarningInfo[];
    }
    /** Information about a classifier. */
    interface Classifier {
        /** ID of a classifier identified in the image. */
        classifier_id: string;
        /** Name of the classifier. */
        name: string;
        /** Unique ID of the account who owns the classifier. Returned when verbose=`true`. Might not be returned by some requests. */
        owner?: string;
        /** The training status of classifier. */
        status?: string;
        /** Whether the classifier can be downloaded as a Core ML model after the training status is `ready`. */
        core_ml_enabled: boolean;
        /** If classifier training has failed, this field may explain why. */
        explanation?: string;
        /** Date and time in Coordinated Universal Time (UTC) that the classifier was created. */
        created?: string;
        /** Array of classes that define a classifier. */
        classes?: Class[];
        /** Date and time in Coordinated Universal Time (UTC) that the classifier was updated. Returned when verbose=`true`. Might not be returned by some requests. Identical to `updated` and retained for backward compatibility. */
        retrained?: string;
        /** Date and time in Coordinated Universal Time (UTC) that the classifier was most recently updated. The field matches either `retrained` or `created`.  Returned when verbose=`true`. Might not be returned by some requests. */
        updated?: string;
    }
    /** Classifier and score combination. */
    interface ClassifierResult {
        /** Name of the classifier. */
        name: string;
        /** The ID of a classifier identified in the image. */
        classifier_id: string;
        /** An array of classes within the classifier. */
        classes: ClassResult[];
    }
    /** List of classifiers. */
    interface Classifiers {
        classifiers: Classifier[];
    }
    /** DetectedFaces. */
    interface DetectedFaces {
        /** Number of images processed for the API call. */
        images_processed?: number;
        /** The array of images. */
        images: ImageWithFaces[];
        /** Information about what might cause less than optimal output. For example, a request sent with a corrupt .zip file and a list of image URLs will still complete, but does not return the expected output. Not returned when there is no warning. */
        warnings?: WarningInfo[];
    }
    /** Information about what might have caused a failure, such as an image that is too large. Not returned when there is no error. */
    interface ErrorInfo {
        /** HTTP status code. */
        code: number;
        /** Human-readable error description. For example, `File size limit exceeded`. */
        description: string;
        /** Codified error string. For example, `limit_exceeded`. */
        error_id: string;
    }
    /** Provides information about the face. */
    interface Face {
        age?: FaceAge;
        gender?: FaceGender;
        face_location?: FaceLocation;
    }
    /** Provides age information about a face. */
    interface FaceAge {
        /** Estimated minimum age. */
        min?: number;
        /** Estimated maximum age. */
        max?: number;
        /** Confidence score in the range of 0 to 1. A higher score indicates greater confidence in the estimated value for the property. */
        score?: number;
    }
    /** Provides information about the gender of the face. */
    interface FaceGender {
        /** Gender identified by the face. For example, `MALE` or `FEMALE`. */
        gender: string;
        /** Confidence score in the range of 0 to 1. A higher score indicates greater confidence in the estimated value for the property. */
        score?: number;
    }
    /** Defines the location of the bounding box around the face. */
    interface FaceLocation {
        /** Width in pixels of face region. */
        width: number;
        /** Height in pixels of face region. */
        height: number;
        /** X-position of top-left pixel of face region. */
        left: number;
        /** Y-position of top-left pixel of face region. */
        top: number;
    }
    /** ImageWithFaces. */
    interface ImageWithFaces {
        /** An array of the faces detected in the images. */
        faces: Face[];
        /** Relative path of the image file if uploaded directly. Not returned when the image is passed by URL. */
        image?: string;
        /** Source of the image before any redirects. Not returned when the image is uploaded. */
        source_url?: string;
        /** Fully resolved URL of the image after redirects are followed. Not returned when the image is uploaded. */
        resolved_url?: string;
        error?: ErrorInfo;
    }
    /** Information about something that went wrong. */
    interface WarningInfo {
        /** Codified warning string, such as `limit_reached`. */
        warning_id: string;
        /** Information about the error. */
        description: string;
    }
}
export = VisualRecognitionV3;