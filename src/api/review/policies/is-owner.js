'use strict';

/**
 * `is-owner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  try {
    const { reqUserId } = policyContext.request.params // NaN!
    const tokenUser = policyContext.state.user?.id
console.log(reqUserId , tokenUser)
    if (reqUserId == tokenUser) {
      return true
    }


    return false;

  } catch {
    return false
  }
};
