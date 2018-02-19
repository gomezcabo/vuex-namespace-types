var vuexNamespaceTypes = require('./index');

var types = {
  moduleA: vuexNamespaceTypes('moduleA', {
    getters: [
      'GETTER_NAME_1',
      'GETTER_NAME_2'
    ],
    mutations: [
      'MUTATION_NAME_1',
      'MUTATION_NAME_2',
      'OTHER_NAME'
    ],
    actions: [
      'ACTION_NAME_1',
      'ACTION_NAME_2',
      'OTHER_NAME', // These names can be overlaped
    ]
  }),

  moduleB: vuexNamespaceTypes('moduleB', {
    getters: [
      'GETTER_NAME_1',
    ],
    mutations: [
      'MUTATION_NAME_1',
    ],
    actions: [
      'ACTION_NAME_1',
      'OTHER_NAME', // These names can be overlaped
    ]
  })
};


console.log("Types object with multiple modules:\n", types);
console.log("Type name for action \"OTHER_NAME\" in moduleA\n", types.moduleA.actions.OTHER_NAME);
console.log("Type name for getter \"GETTER_NAME_1\" in moduleB\n", types.moduleB.getters.GETTER_NAME_1);

// It can be used in a Vue instance like this:

// import { moduleA, moduleB } from './types';
//
// Vue.new({
//   ...
///
//   computed: {
//     ...mapGetters({
//       'getterName1': types.moduleB.getters.GETTER_NAME_1
//     });
//   }
//
//   methods: {
//     ...mapActions({
//       'otherName': types.moduleA.actions.OTHER_NAME
//     })
//   }
// }