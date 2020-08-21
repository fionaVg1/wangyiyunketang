NodePath {
  parent: Node {
    type: 'ReturnStatement',
    start: 25,
    end: 41,
    loc: SourceLocation { start: [Position], end: [Position] },
    argument: Node {
      type: 'OptionalMemberExpression',
      start: 32,
      end: 40,
      loc: [SourceLocation],
      object: [Node],
      property: [Node],
      computed: false,
      optional: true,
      leadingComments: undefined,
      innerComments: undefined,
      trailingComments: undefined
    },
    leadingComments: undefined,
    innerComments: undefined,
    trailingComments: undefined
  },
  hub: {
    file: File {
      _map: Map {},
      declarations: {},
      path: [NodePath],
      ast: [Node],
      metadata: {},
      code: 'function demo(foo) {\
    return foo?.bar;\
}',
      inputMap: null,
      hub: [Circular],
      opts: [Object],
      scope: [Scope]
    },
    getCode: [Function: getCode],
    getScope: [Function: getScope],
    addHelper: [Function: bound addHelper],
    buildError: [Function: bound buildCodeFrameError]
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: null,
  _traverseFlags: 0,
  state: undefined,
  opts: {
    OptionalMemberExpression: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    TSModuleBlock: { exit: [Array] }
  },
  skipKeys: null,
  parentPath: NodePath {
    parent: Node {
      type: 'BlockStatement',
      start: 19,
      end: 43,
      loc: [SourceLocation],
      body: [Array],
      directives: [],
      leadingComments: undefined,
      innerComments: undefined,
      trailingComments: undefined
    },
    hub: {
      file: [File],
      getCode: [Function: getCode],
      getScope: [Function: getScope],
      addHelper: [Function: bound addHelper],
      buildError: [Function: bound buildCodeFrameError]
    },
    contexts: [ [TraversalContext] ],
    data: null,
    _traverseFlags: 0,
    state: undefined,
    opts: {
      OptionalMemberExpression: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      TSModuleBlock: [Object]
    },
    skipKeys: null,
    parentPath: NodePath {
      parent: [Node],
      hub: [Object],
      contexts: [Array],
      data: null,
      _traverseFlags: 0,
      state: undefined,
      opts: [Object],
      skipKeys: null,
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      key: 'body',
      node: [Node],
      scope: [Scope],
      type: 'BlockStatement'
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node] ],
    listKey: 'body',
    key: 0,
    node: Node {
      type: 'ReturnStatement',
      start: 25,
      end: 41,
      loc: [SourceLocation],
      argument: [Node],
      leadingComments: undefined,
      innerComments: undefined,
      trailingComments: undefined
    },
    scope: Scope {
      uid: 1,
      block: [Node],
      path: [NodePath],
      labels: Map {},
      inited: true,
      references: [Object: null prototype] {},
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {}
    },
    type: 'ReturnStatement'
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Object],
      contexts: [Array],
      data: null,
      _traverseFlags: 0,
      state: undefined,
      opts: [Object],
      skipKeys: null,
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ReturnStatement'
    },
    scope: Scope {
      uid: 1,
      block: [Node],
      path: [NodePath],
      labels: Map {},
      inited: true,
      references: [Object: null prototype] {},
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {}
    },
    state: undefined,
    opts: {
      OptionalMemberExpression: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      TSModuleBlock: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ReturnStatement',
    start: 25,
    end: 41,
    loc: SourceLocation { start: [Position], end: [Position] },
    argument: Node {
      type: 'OptionalMemberExpression',
      start: 32,
      end: 40,
      loc: [SourceLocation],
      object: [Node],
      property: [Node],
      computed: false,
      optional: true,
      leadingComments: undefined,
      innerComments: undefined,
      trailingComments: undefined
    },
    leadingComments: undefined,
    innerComments: undefined,
    trailingComments: undefined
  },
  listKey: undefined,
  key: 'argument',
  node: Node {
    type: 'OptionalMemberExpression',
    start: 32,
    end: 40,
    loc: SourceLocation { start: [Position], end: [Position] },
    object: Node {
      type: 'Identifier',
      start: 32,
      end: 35,
      loc: [SourceLocation],
      name: 'foo',
      leadingComments: undefined,
      innerComments: undefined,
      trailingComments: undefined
    },
    property: Node {
      type: 'Identifier',
      start: 37,
      end: 40,
      loc: [SourceLocation],
      name: 'bar',
      leadingComments: undefined,
      innerComments: undefined,
      trailingComments: undefined
    },
    computed: false,
    optional: true,
    leadingComments: undefined,
    innerComments: undefined,
    trailingComments: undefined
  },
  scope: Scope {
    uid: 1,
    block: Node {
      type: 'FunctionDeclaration',
      start: 0,
      end: 43,
      loc: [SourceLocation],
      id: [Node],
      generator: false,
      async: false,
      params: [Array],
      body: [Node],
      leadingComments: undefined,
      innerComments: undefined,
      trailingComments: undefined
    },
    path: NodePath {
      parent: [Node],
      hub: [Object],
      contexts: [Array],
      data: null,
      _traverseFlags: 0,
      state: undefined,
      opts: [Object],
      skipKeys: null,
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      key: 0,
      node: [Node],
      scope: [Circular],
      type: 'FunctionDeclaration'
    },
    labels: Map {},
    inited: true,
    references: [Object: null prototype] {},
    bindings: [Object: null prototype] { foo: [Binding] },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {}
  },
  type: 'OptionalMemberExpression'
}
