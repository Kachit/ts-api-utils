export interface HydratorInterface {

    hydrateCollectionFromResponse(response);

    hydrateEntityFromResponse(response);

    hydrateCollection(data: object);

    hydrateEntity(data: object);
}
