/**
 * Map object with function passing key and value
 *
 * @param {Object} object Object to be iterated
 * @param {Function} fn Function to be called over object keys and values
 * @returns {Object} Object with key values as original object and values returned
 *                   by the function provided called with (value, key) as parameters
 */
function mapValues (object, fn) {
    var res = {};
    for (var key of Object.keys(object)) {
      res[key] = fn(object[key], key);
    }
    return res;
  }

  /**
   * Generate a namespace structure to be used with Vuex to name all
   * getters, mutations and actions with this format:
   *
   *  {
   *    getters: {
   *      first_getter: 'module/getters:getter_name_1',
   *      second_getter: 'module/getters:getter_name_1',
   *      ...
   *    },
   *    mutations: {
   *      custom_mutation_name: 'module/mutations:custom_mutation_name',
   *      ...
   *    },
   *    actions: {
   *       example_action: 'module/actions:example_action',
   *       ...
   *    }
   *  }
   *
   * @param {string} module Name of the module
   * @param {Object} types Object containing three keys (mutations, actions and getters) which
   *                       values are the names of the mutations, actions and getters of the module
   */
  function vuexNamespaceTypes(module, types) {
    var newObj = {};
    mapValues(types, function (names, type) {
      newObj[type] = {};
      for (var name of types[type]) {
        newObj[type][name] = module + '/' + type + ':' + name;
      }
    })
    return newObj;
  }

  module.exports = vuexNamespaceTypes;
