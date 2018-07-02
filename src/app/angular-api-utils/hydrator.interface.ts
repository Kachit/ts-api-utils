export interface HydratorInterface {
    /**
     * @param {HttpResponse} response
     * @returns {object[]}
     */
    hydrateCollectionFromResponse(response);

    /**
     * @param {HttpResponse} response
     * @returns {Object}
     */
    hydrateEntityFromResponse(response);

    /**
     * @param {Object} data
     * @returns {object[]}
     */
    hydrateCollection(data: object);

    /**
     * @param {Object} data
     * @returns {Object}
     */
    hydrateEntity(data: object);
}
