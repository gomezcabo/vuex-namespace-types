# vuex-namespace-types

This helper function automate the creation of namespaced names for getters, mutations and actions using the `module:type/name` format and return a structure ready to be used across the whole application.


## Usage

First, install the package using npm:

```
npm install vuex-namespace-types --save
```

Then, require the package and use it like so:

```javascript
var vuexNamespaceTypes = require('vuex-namespace-types');

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
```

Defining getters, mutations and actions (ES6 syntax)

```
import { moduleA } from './types'

export default {
  [moduleA.actions.OTHER_NAME]: ({ commit }, payload) => {
    commit(moduleA.mutations.OTHER_NAME, payload)
  }
}
```

```
import { moduleB } from './types'

export default {
  [moduleB.getters.GETTER_NAME_1]: state => {
      return state.name1
  }
}
```

It can be used in a Vue instance like this:

```javascript
import { moduleA, moduleB } from './types';

Vue.new({
  computed: {
    ...mapGetters({
      'getterName1': types.moduleB.getters.GETTER_NAME_1
    });
  }
  methods: {
    ...mapActions({
      'otherName': types.moduleA.actions.OTHER_NAME
    })
  }
}
```
