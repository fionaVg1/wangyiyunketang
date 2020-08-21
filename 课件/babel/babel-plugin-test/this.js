PluginPass {
  _map: Map {},
  key: 'optional-chaining-plugin',
  file: File {
    _map: Map {},
    declarations: {},
    path: NodePath {
      parent: [Node],
      hub: [Object],
      contexts: [Array],
      data: null,
      _traverseFlags: 0,
      state: undefined,
      opts: [Object],
      skipKeys: null,
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      key: 'program',
      node: [Node],
      scope: [Scope],
      type: 'Program'
    },
    ast: Node {
      type: 'File',
      start: 0,
      end: 43,
      loc: [SourceLocation],
      errors: [],
      program: [Node],
      comments: [],
      leadingComments: undefined,
      innerComments: undefined,
      trailingComments: undefined
    },
    metadata: {},
    code: 'function demo(foo) {\
    return foo?.bar;\
}',
    inputMap: null,
    hub: {
      file: [Circular],
      getCode: [Function: getCode],
      getScope: [Function: getScope],
      addHelper: [Function: bound addHelper],
      buildError: [Function: bound buildCodeFrameError]
    },
    opts: {
      sourceFileName: '../src/index.js',
      caller: [Object],
      filename: '/Volumes/Backup/Instant/babel-plugin-test/src/index.js',
      babelrc: false,
      configFile: false,
      passPerPreset: false,
      envName: 'development',
      cwd: '/Volumes/Backup/Instant/babel-plugin-test',
      root: '/Volumes/Backup/Instant/babel-plugin-test',
      plugins: [Array],
      presets: [],
      parserOpts: [Object],
      generatorOpts: [Object]
    },
    scope: Scope {
      uid: 0,
      block: [Node],
      path: [NodePath],
      labels: Map {},
      inited: true,
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    }
  },
  opts: {},
  cwd: '/Volumes/Backup/Instant/babel-plugin-test',
  filename: '/Volumes/Backup/Instant/babel-plugin-test/src/index.js'
}
