
// "use strict";
// const jwt = require("jsonwebtoken");
// module.exports = (config, { strapi }) => {
//   return async (ctx, next) => {
//     if (ctx.request.url.startsWith("/api/auth")) {
//       return next();
//     } else if (
//       ctx.request.url.startsWith("/api") &&
//       ctx.request.header.authorization
//     ) {
//       const token = ctx.request.header.authorization.split(" ")[1];
//       const apiTokenService = strapi.services["admin::api-token"];
//       const accessKey = await apiTokenService.hash(token);
//       const storedToken = await apiTokenService.getBy({ accessKey: accessKey });
//       if (!storedToken) {
//         try {
//           const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//           let user = await strapi.db
//             .query("plugin::users-permissions.user")
//             .findOne({
//               where: { id: decodedToken?.id },
//               populate: ["organisation", "createdBy", "role"],
//             });
//           const role = await strapi.db
//             .query("plugin::users-permissions.role")
//             .findOne({
//               where: { name: `${user.role.name}` },
//             });
//           if (ctx.request.url.startsWith("/api/users-permissions")) {
//             ctx.request.url = ctx.request.url + `/${role.id}`;
//           }
//           if (ctx.request.method === "GET") {
//             let par = ctx.request.url.includes("?");
//             ctx.request.url =
//               ctx.request.url +
//               (par ? "&" : "?") +
//               `filters[organisation][id]][$eq]=${user.organisation.id}`;
//           } else if (ctx.request.method === "POST") {
//             const { data } = ctx.request.body;
//             ctx.request.body = {
//               data: {
//                 ...data,
//                 organisation: user.organisation.id,
//                 users_id: user.id,
//               },
//             };
//           }
//           return next();
//         } catch (error) {
//           ctx.throw(400, "Bad Request");
//         }
//       }
//       else {
//         if (ctx.request.method === "GET") {
//           let par = ctx.request.url.includes("?");
//           ctx.request.url =
//             ctx.request.url +
//             (par ? "&" : "?") +
//             `filters[organisation][organisation_name]][$eq]=${storedToken.name}`;
//         }
    
//         return next();
//       }
//     }
//     console.log('first')
//     return next();
    
//   };
// };