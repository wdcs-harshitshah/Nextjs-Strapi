'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  
  register({ strapi }) {
    // console.log(strapi.api.faq.routes)
    // for(const [_,api] of Object.entries(strapi.api)){
    //   for(const [_,route] of Object.entries(api.routes)){
    //     console.log(route.routes)
    //     if(typeof route.routes.config !== undefined ){
    //       if(typeof route.routes.config.middlewares !== undefined){
    //         route.routes.config.middlewares.push("global::owner")
    //       }
    //       else {
    //         route.routes.config.middlewares = {"global::owner"}
    //       }
    //     }
    //   }
    //   // console.log(api)
    // }

  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
