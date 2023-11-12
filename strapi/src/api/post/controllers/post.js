'use strict';

/**
 * post controller
 */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post',  ({ strapi }) =>  ({
  async findOne(ctx) {

    await this.validateQuery(ctx);
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    console.log(sanitizedQueryParams)

    const {id} = ctx.params
    // sanitizeQuery to remove any query params that are invalid or the user does not have access to
    // It is strongly recommended to use sanitizeQuery even if validateQuery is used
    const entity = await strapi.service('api::post.post').find({
      where: { slug: id },
      populate: sanitizedQueryParams.populate
    });

    const sanitizedResults = await this.sanitizeOutput(entity, ctx);


    return this.transformResponse(sanitizedResults);
  }
}));
