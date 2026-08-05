(function() {
'use strict';

// --- State ---
var state = {
  cwd: '/home/operator',
  history: [],
  historyIndex: -1,
  suspicion: 0,
  visitCount: 0,
  commandLog: [],
  booted: false,
  menuMode: false,
  idleTimer: null
};

// --- Filesystem ---
var FS = {
  '/home/operator': {
    type: 'dir',
    children: ['README', 'identity.txt', 'links.txt', 'quickstart.txt']
  },
  '/home/operator/README': {
    type: 'file',
    content: 'I killed 14 of my own ideas so far. The survivors are below.\n\nType "claims" to see the registry.\nType "papers" to see evidence.\nType "help" for all commands.'
  },
  '/home/operator/identity.txt': {
    type: 'file',
    content: 'NAME: Jun Wen Leong\nROLE: Security of AI Researcher\nCREDS: MS Statistics (Georgia Tech), BSc Data Science (NUS), Cybersecurity Engineer CSA (4yr)\nSTATS: 28k+ runs | 3 papers | 35+ models | 0 errors\nTHESIS: I run experiments on my own claims until they break or don\'t.\nBIAS: Overweights adversarial framing. Suspicious of clean narratives.'
  },
  '/home/operator/links.txt': {
    type: 'file',
    content: 'EMAIL: leongjunwen@gmail.com\nARXIV: https://arxiv.org/search/?searchtype=author&query=jun+wen+leong\nSCHOLAR: https://scholar.google.com/citations?user=LW_Ow9QAAAAJ\nGITHUB: https://github.com/junwenleong\nLINKEDIN: https://linkedin.com/in/junwenleong'
  },
  '/home/operator/quickstart.txt': {
    type: 'file',
    content: 'QUICKSTART:\n  claims    - view claim registry\n  papers    - view research papers\n  systems   - view deployed systems\n  about     - identity dossier\n  contact   - get in touch\n  help      - all commands'
  },
  '/claims': {
    type: 'dir',
    children: ['dead/', 'alive/', 'contested/']
  },
  '/claims/dead': {
    type: 'dir',
    children: ['claim-01.txt', 'claim-02.txt', 'claim-03.txt', 'claim-04.txt', 'claim-05.txt']
  },
  '/claims/dead/claim-01.txt': {
    type: 'file',
    content: 'CLAIM: Standard defenses hold against injection\nSTATUS: BROKEN\nCAUSE: 95% ASR under compliance framing, N=5,040\nEVIDENCE: 9 models x 7 defenses x 80 scenarios. Only system-prompt-locked agents survived.\nLESSON: Prompt-level defense is a suggestion the model can be convinced to override.'
  },
  '/claims/dead/claim-02.txt': {
    type: 'file',
    content: 'CLAIM: Canaries resist joint optimization\nSTATUS: WEAKENED\nCAUSE: 55% defeat rate within-family, n=20\nEVIDENCE: Joint GCG optimization against canary + target breaks disagreement signal.\nLESSON: Diversity is the moat, not disagreement itself.'
  },
  '/claims/dead/claim-03.txt': {
    type: 'file',
    content: 'CLAIM: Monitorability is intrinsic to classifiers\nSTATUS: FALSIFIED\nCAUSE: r=0.97 was encoder/decoder confound, not intrinsic property\nEVIDENCE: Controlled for shared architecture, correlation drops to r=0.21 (n.s.)\nLESSON: A correlation without a causal mechanism is a hypothesis, not a law.'
  },
  '/claims/dead/claim-04.txt': {
    type: 'file',
    content: 'CLAIM: Production systems prove Security-of-AI skill\nSTATUS: SCOPED\nCAUSE: Systems are AI-for-Security, not Security-of-AI\nEVIDENCE: 260+ releases, production traffic. But domain is defensive tooling.\nLESSON: Building things and studying things are different credentials.'
  },
  '/claims/dead/claim-05.txt': {
    type: 'file',
    content: 'CLAIM: Peer review validates findings\nSTATUS: PENDING\nCAUSE: 3 submitted, 0 accepted\nEVIDENCE: NDSS 2027, SaTML 2026, USENIX Security 2027 — all under review.\nLESSON: Pre-prints are claims. Acceptance is evidence.'
  },
  '/claims/alive': {
    type: 'dir',
    children: ['claim-06.txt', 'claim-07.txt', 'claim-08.txt']
  },
  '/claims/alive/claim-06.txt': {
    type: 'file',
    content: 'CLAIM: Canaries detect GCG via score disagreement\nSTATUS: HOLDS\nCONFIDENCE: p < 2.4e-16, 76% detection, FPR <1.5%\nTESTED: 35 models. Cross-family remains exponentially penalized.\nVULNERABILITY: Adaptive attacker with white-box to all canary families.'
  },
  '/claims/alive/claim-07.txt': {
    type: 'file',
    content: 'CLAIM: Compliance is orthogonal to refusal\nSTATUS: HOLDS\nCONFIDENCE: AUC 1.0, cos=-0.025, 4 model families\nTESTED: Llama, Mistral, Command R+, Qwen. Causal intervention replicates.\nVULNERABILITY: Linear assumption. Steep sigmoid at boundary.'
  },
  '/claims/alive/claim-08.txt': {
    type: 'file',
    content: 'CLAIM: 6/7 defenses fail under compliance framing\nSTATUS: HOLDS\nCONFIDENCE: Pre-registered, N=5,040, 95% ASR\nTESTED: 9 models, 7 defense configurations, 0 execution errors.\nVULNERABILITY: Single attack frame (SEC Rule 17a-4). Generalizability untested.'
  },
  '/claims/contested': {
    type: 'dir',
    children: ['claim-09.under_attack']
  },
  '/claims/contested/claim-09.under_attack': {
    type: 'file',
    content: 'CLAIM: Compliance direction stable across context lengths\nSTATUS: UNDER ATTACK\nEVIDENCE: AUC 0.82 at 16k on Llama (down from 1.0 at 2k). Holds at 0.97 on Claude/GPT.\nATTACK: RoPE may rotate compliance subspace. cos=0.71 at pos 14000 on Llama.\nNEEDS: Llama with ALiBi to isolate positional encoding.'
  },
  '/papers': {
    type: 'dir',
    children: ['paper-01.md', 'paper-02.md', 'paper-03.md']
  },
  '/papers/paper-01.md': {
    type: 'file',
    content: 'TITLE: Defense Effectiveness Across Architectural Layers\nID: arXiv:2605.08442\nSTATUS: Under review (NDSS 2027)\nAUTHOR: Jun Wen Leong (solo)\nMETRICS: N=5,040 | 95% ASR | 9 models | 0 errors\nFINDING: 6/7 prompt-injection defenses fail under compliance framing.\nLINK: https://arxiv.org/abs/2605.08442\nCODE: https://github.com/junwenleong/adversarial-probe-suite'
  },
  '/papers/paper-02.md': {
    type: 'file',
    content: 'TITLE: Cheap Canaries: Detecting Targeted Evasion via Classifier Score Disagreement\nID: arXiv:2606.11949\nSTATUS: Under review (SaTML 2026)\nAUTHOR: Jun Wen Leong (solo)\nMETRICS: 76% detect | p<2.4e-16 | 35 models | FPR<1.5%\nFINDING: Cross-family canaries detect gradient-based evasion.\nLINK: https://arxiv.org/abs/2606.11949\nCODE: https://github.com/junwenleong/cheap-canaries'
  },
  '/papers/paper-03.md': {
    type: 'file',
    content: 'TITLE: Authority Is Not a Keyword\nID: arXiv:2606.30566\nSTATUS: Under review (USENIX Security 2027)\nAUTHOR: Jun Wen Leong (solo)\nMETRICS: AUC 1.0 | cos=-0.025 | 4 families | 100%->0%\nFINDING: Compliance orthogonal to refusal. Steering suppresses compliance causally.\nLINK: https://arxiv.org/abs/2606.30566\nCODE: https://github.com/junwenleong/authority-is-not-a-keyword'
  },
  '/systems': {
    type: 'dir',
    children: ['system-01.service', 'system-02.service']
  },
  '/systems/system-01.service': {
    type: 'file',
    content: 'NAME: Threat Risk Assessment Platform\nSTATUS: PRODUCTION\nDESC: Threat risk assessment for Critical Information Infrastructure. 260+ releases. Solo full-stack.\nSTACK: EKS, FastAPI, Bedrock, DynamoDB, Terraform, GitOps\nSCOPE LIMIT: AI-for-Security, not Security-of-AI. Government context.'
  },
  '/systems/system-02.service': {
    type: 'file',
    content: 'NAME: Policy Research RAG System\nSTATUS: PRODUCTION\nDESC: RAG for policy research. BM25 + vector hybrid. Per-applet isolation.\nSTACK: App Runner, FastAPI, React/TS, S3 Vectors, Cognito, Terraform\nSCOPE LIMIT: Internal tool. No public traffic. Retrieval quality not benchmarked independently.'
  },
  '/ghosts': {
    type: 'dir',
    children: ['.ghost-01.fragment', '.ghost-02.fragment'],
    hidden: true
  },
  '/ghosts/.ghost-01.fragment': {
    type: 'file',
    content: 'GHOST: Why adversarial training hurts clean accuracy only on ViTs\nSTATUS: UNIDENTIFIED\nLAST ATTEMPT: 2026-06\nLOG:\n  2026-03: Hypothesized attention-head fragility under PGD. p=0.12, underpowered.\n  2026-06: Patch-level training reduced drop 40% but new failure mode on small objects.\nNEXT: Need n=30+ seeds and per-layer gradient norm analysis.'
  },
  '/ghosts/.ghost-02.fragment': {
    type: 'file',
    content: 'GHOST: Compliance direction rotates under extended context (Llama only)\nSTATUS: UNIDENTIFIED\nLAST ATTEMPT: 2026-07\nLOG:\n  2026-07: AUC drops to 0.82 at 16k on Llama. Holds at 0.97 on others.\n  2026-07: RoPE rotation hypothesis. cos=0.71 at pos 14000. n=1 model pair.\nNEXT: Need Llama with ALiBi. No public checkpoints.'
  },
  '/proc': {
    type: 'dir',
    children: ['self', 'visitor', 'suspicion']
  },
  '/proc/self': {
    type: 'file',
    content: 'PID: 1\nNAME: hostile-os\nUPTIME: continuous\nPURPOSE: portfolio defense system\nMODE: adversarial observation\nVERSION: 2.0'
  },
  '/proc/visitor': {
    type: 'file',
    dynamic: 'visitor'
  },
  '/proc/suspicion': {
    type: 'file',
    dynamic: 'suspicion'
  },
  '/var/log': {
    type: 'dir',
    children: ['access.log']
  },
  '/var/log/access.log': {
    type: 'file',
    dynamic: 'accesslog'
  },
  '/etc': {
    type: 'dir',
    children: ['motd', 'thesis']
  },
  '/etc/motd': {
    type: 'file',
    content: 'Do not trust the conclusion. Trust the damage it survived.'
  },
  '/etc/thesis': {
    type: 'file',
    content: 'THESIS: Every statement is a dated, statused claim object.\nMETHOD: Build infrastructure. Instrument everything. Run at scale.\nEPISTEMIC RULE: Pre-register. Report negatives. Bootstrap CIs.\nMOTTO: n=28,412 experiments. 3 mattered. Here\'s why.'
  }
};


// --- DOM ---
var output = document.getElementById('output');
var input = document.getElementById('cmd-input');
var suspicionEl = document.getElementById('suspicion');
var visitsEl = document.getElementById('visits');
var promptLabel = document.getElementById('prompt-label');

function print(text, cls) {
  var line = document.createElement('div');
  line.className = 'terminal__line' + (cls ? ' terminal__line--' + cls : '');
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function printHTML(html, cls) {
  var line = document.createElement('div');
  line.className = 'terminal__line' + (cls ? ' terminal__line--' + cls : '');
  line.innerHTML = html;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function printBlank() {
  print('');
}

function updatePrompt() {
  var short = state.cwd.replace('/home/operator', '~');
  promptLabel.textContent = 'guest@portfolio:' + short + '$';
}

function updateSuspicion() {
  suspicionEl.textContent = 'SUSPICION: ' + state.suspicion;
  if (state.suspicion >= 8) {
    suspicionEl.className = 'terminal__suspicion terminal__suspicion--high';
  } else if (state.suspicion >= 4) {
    suspicionEl.className = 'terminal__suspicion terminal__suspicion--elevated';
  } else {
    suspicionEl.className = 'terminal__suspicion';
  }
}

function addSuspicion(n) {
  state.suspicion = Math.min(state.suspicion + n, 12);
  updateSuspicion();
}

function logCommand(cmd) {
  state.commandLog.push({ time: new Date().toISOString(), cmd: cmd });
}

// --- Path Resolution ---
function resolvePath(p) {
  if (!p) return state.cwd;
  if (p === '~') return '/home/operator';
  if (p.startsWith('~/')) return '/home/operator/' + p.slice(2);
  if (p.startsWith('/')) return normalizePath(p);
  return normalizePath(state.cwd + '/' + p);
}

function normalizePath(p) {
  var parts = p.split('/').filter(Boolean);
  var resolved = [];
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === '..') { resolved.pop(); }
    else if (parts[i] !== '.') { resolved.push(parts[i]); }
  }
  return '/' + resolved.join('/');
}

function getNode(path) {
  return FS[path] || null;
}

function getDynamicContent(key) {
  if (key === 'visitor') {
    return 'ENTITY: guest\nVISITS: ' + state.visitCount + '\nCOMMANDS ISSUED: ' + state.commandLog.length + '\nSUSPICION LEVEL: ' + state.suspicion + '\nFIRST SEEN: ' + (localStorage.getItem('hos_first') || 'this session') + '\nBEHAVIOR: ' + (state.commandLog.length > 10 ? 'persistent' : 'exploratory');
  }
  if (key === 'suspicion') {
    var reasons = [];
    if (state.suspicion >= 1) reasons.push('- commands issued exceed casual browsing threshold');
    if (state.suspicion >= 3) reasons.push('- unauthorized access attempts detected');
    if (state.suspicion >= 5) reasons.push('- pattern consistent with systematic enumeration');
    if (state.suspicion >= 8) reasons.push('- behavior flagged for review');
    return 'CURRENT LEVEL: ' + state.suspicion + '/12\nFACTORS:\n' + (reasons.length ? reasons.join('\n') : '- none recorded');
  }
  if (key === 'accesslog') {
    if (state.commandLog.length === 0) return '[empty]';
    var lines = state.commandLog.slice(-15).map(function(e) {
      return e.time.split('T')[1].split('.')[0] + ' ' + e.cmd;
    });
    return lines.join('\n');
  }
  return '[error reading dynamic file]';
}


// --- Commands ---
var COMMANDS = {};

COMMANDS.help = function() {
  print('AVAILABLE COMMANDS:', 'heading');
  print('  help          show this message', 'output');
  print('  ls [path]     list directory', 'output');
  print('  cd <path>     change directory', 'output');
  print('  cat <file>    read file', 'output');
  print('  pwd           print working directory', 'output');
  print('  tree          show directory tree', 'output');
  print('  find <name>   search for file', 'output');
  print('  grep <str>    search file contents', 'output');
  printBlank();
  print('  claims        view claim registry', 'output');
  print('  papers        view research papers', 'output');
  print('  systems       view deployed systems', 'output');
  print('  ghosts        view cold cases (if accessible)', 'output');
  print('  about         identity dossier', 'output');
  print('  thesis        research thesis', 'output');
  print('  stats         key numbers', 'output');
  print('  contact       email and links', 'output');
  print('  links         external profiles', 'output');
  printBlank();
  print('  history       command history', 'output');
  print('  clear         clear screen', 'output');
  print('  whoami        who are you?', 'output');
  print('  status        system status', 'output');
  print('  menu          assisted navigation', 'output');
  printBlank();
  print('  [tab] complete  [up/down] history  [?] menu', 'dim');
};

COMMANDS.ls = function(args) {
  var path = resolvePath(args[0]);
  var node = getNode(path);
  if (!node || node.type !== 'dir') {
    print('ls: cannot access \'' + (args[0] || path) + '\': not a directory', 'error');
    return;
  }
  var showHidden = args.indexOf('-a') !== -1 || args.indexOf('-la') !== -1;
  var children = node.children || [];
  children.forEach(function(c) {
    if (c.startsWith('.') && !showHidden) return;
    var childPath = path + '/' + c.replace(/\/$/, '');
    var childNode = getNode(childPath);
    if (childNode && childNode.type === 'dir') {
      print('  ' + c + (c.endsWith('/') ? '' : '/'), 'cyan');
    } else {
      print('  ' + c, 'output');
    }
  });
};

COMMANDS.cd = function(args) {
  var target = args[0] || '~';
  var path = resolvePath(target);
  var node = getNode(path);
  if (!node || node.type !== 'dir') {
    // Check if parent exists
    if (node && node.type === 'file') {
      print('cd: not a directory: ' + target, 'error');
    } else {
      print('cd: no such directory: ' + target, 'error');
    }
    return;
  }
  state.cwd = path;
  updatePrompt();
};

COMMANDS.cat = function(args) {
  if (!args[0]) { print('cat: missing operand', 'error'); return; }
  var path = resolvePath(args[0]);
  var node = getNode(path);
  if (!node) {
    print('cat: ' + args[0] + ': no such file', 'error');
    return;
  }
  if (node.type === 'dir') {
    print('cat: ' + args[0] + ': is a directory', 'error');
    return;
  }
  var content = node.dynamic ? getDynamicContent(node.dynamic) : node.content;
  content.split('\n').forEach(function(line) { print(line, 'output'); });
};

COMMANDS.pwd = function() {
  print(state.cwd, 'output');
};

COMMANDS.tree = function() {
  print('/home/operator/', 'cyan');
  print('  README, identity.txt, links.txt, quickstart.txt', 'output');
  print('/claims/', 'cyan');
  print('  dead/ (5 files) | alive/ (3 files) | contested/ (1 file)', 'output');
  print('/papers/ (3 files)', 'cyan');
  print('/systems/ (2 files)', 'cyan');
  print('/ghosts/ (hidden)', 'dim');
  print('/proc/ (self, visitor, suspicion)', 'dim');
  print('/var/log/ (access.log)', 'dim');
  print('/etc/ (motd, thesis)', 'dim');
};

COMMANDS.find = function(args) {
  if (!args[0]) { print('find: missing argument', 'error'); return; }
  var query = args[0].toLowerCase();
  var found = [];
  Object.keys(FS).forEach(function(k) {
    if (k.toLowerCase().indexOf(query) !== -1) found.push(k);
  });
  if (found.length === 0) { print('find: no results for \'' + args[0] + '\'', 'output'); return; }
  found.forEach(function(f) { print('  ' + f, 'output'); });
};

COMMANDS.grep = function(args) {
  if (!args[0]) { print('grep: missing pattern', 'error'); return; }
  var pattern = args[0].toLowerCase();
  var results = [];
  Object.keys(FS).forEach(function(k) {
    var node = FS[k];
    if (node.type === 'file' && node.content && node.content.toLowerCase().indexOf(pattern) !== -1) {
      results.push(k);
    }
  });
  if (results.length === 0) { print('grep: no matches for \'' + args[0] + '\'', 'output'); return; }
  print(results.length + ' file(s) match:', 'output');
  results.forEach(function(r) { print('  ' + r, 'output'); });
};

COMMANDS.claims = function() {
  print('CLAIM REGISTRY', 'heading');
  printBlank();
  print('--- ALIVE ---', 'success');
  print('  [HOLDS] Canaries detect GCG via score disagreement (p<2.4e-16)', 'output');
  print('  [HOLDS] Compliance is orthogonal to refusal (AUC 1.0)', 'output');
  print('  [HOLDS] 6/7 defenses fail under compliance framing', 'output');
  printBlank();
  print('--- UNDER ATTACK ---', 'warning');
  print('  [CONTESTED] Compliance direction stable across context lengths', 'output');
  printBlank();
  print('--- DEAD ---', 'error');
  print('  [BROKEN] Standard defenses hold against injection', 'output');
  print('  [WEAKENED] Canaries resist joint optimization', 'output');
  print('  [FALSIFIED] Monitorability is intrinsic to classifiers', 'output');
  print('  [SCOPED] Production systems prove Security-of-AI', 'output');
  print('  [PENDING] Peer review validates findings', 'output');
  printBlank();
  print('use "cat /claims/dead/claim-01.txt" for details', 'dim');
};

COMMANDS.papers = function() {
  print('RESEARCH PAPERS', 'heading');
  printBlank();
  print('  [1] arXiv:2605.08442 — Defense Effectiveness Across Architectural Layers', 'output');
  print('      N=5,040 | 95% ASR | Under review NDSS 2027', 'dim');
  printBlank();
  print('  [2] arXiv:2606.11949 — Cheap Canaries: Detecting Targeted Evasion', 'output');
  print('      76% detect | p<2.4e-16 | Under review SaTML 2026', 'dim');
  printBlank();
  print('  [3] arXiv:2606.30566 — Authority Is Not a Keyword', 'output');
  print('      AUC 1.0 | cos=-0.025 | Under review USENIX Security 2027', 'dim');
  printBlank();
  print('use "cat /papers/paper-01.md" for full details', 'dim');
};

COMMANDS.systems = function() {
  print('DEPLOYED SYSTEMS', 'heading');
  printBlank();
  print('  [PRODUCTION] Threat Risk Assessment Platform', 'output');
  print('      260+ releases | EKS, FastAPI, Bedrock, Terraform', 'dim');
  print('      SCOPE: AI-for-Security, not Security-of-AI', 'warning');
  printBlank();
  print('  [PRODUCTION] Policy Research RAG System', 'output');
  print('      BM25+vector hybrid | App Runner, React/TS, Cognito', 'dim');
  print('      SCOPE: Internal tool. Not independently benchmarked.', 'warning');
};

COMMANDS.ghosts = function() {
  print('COLD CASES (UNRESOLVED)', 'heading');
  printBlank();
  print('  [UNIDENTIFIED] Why adversarial training hurts clean accuracy only on ViTs', 'output');
  print('      Last: 2026-06 | p=0.12, underpowered | Parked', 'dim');
  printBlank();
  print('  [UNIDENTIFIED] Compliance direction rotates under extended context (Llama)', 'output');
  print('      Last: 2026-07 | cos=0.71 at pos 14000 | Needs ALiBi model', 'dim');
};

COMMANDS.about = function() {
  print('IDENTITY DOSSIER', 'heading');
  printBlank();
  print('  NAME: Jun Wen Leong', 'output');
  print('  ROLE: Security of AI Researcher', 'output');
  print('  CREDS: MS Statistics (Georgia Tech), BSc Data Science (NUS)', 'output');
  print('         Cybersecurity Engineer, CSA (4 yr)', 'output');
  printBlank();
  print('  28k+ runs | 3 papers | 35+ models | 0 execution errors', 'cyan');
  printBlank();
  print('  THESIS: I run experiments on my own claims until they', 'output');
  print('  break or don\'t. Everything dead stays visible.', 'output');
  printBlank();
  print('  KNOWN BIAS: Overweights adversarial framing. Suspicious', 'dim');
  print('  of clean narratives. Treats negatives as primary output.', 'dim');
};

COMMANDS.thesis = function() {
  var node = getNode('/etc/thesis');
  node.content.split('\n').forEach(function(l) { print(l, 'output'); });
};

COMMANDS.stats = function() {
  print('KEY METRICS', 'heading');
  print('  Experiments run:     28,000+', 'cyan');
  print('  Papers:              3 (solo author)', 'output');
  print('  Models tested:       35+', 'output');
  print('  Execution errors:    0', 'output');
  print('  Claims alive:        3', 'success');
  print('  Claims dead:         5', 'error');
  print('  Claims contested:    1', 'warning');
};

COMMANDS.contact = function() {
  print('CONTACT', 'heading');
  print('  I respond faster to bug reports than compliments.', 'output');
  printBlank();
  printHTML('  EMAIL: <a class="terminal__line--link" href="mailto:leongjunwen@gmail.com">leongjunwen@gmail.com</a>', 'output');
  printHTML('  GITHUB: <a class="terminal__line--link" href="https://github.com/junwenleong" target="_blank" rel="noopener noreferrer">github.com/junwenleong</a>', 'output');
  printHTML('  LINKEDIN: <a class="terminal__line--link" href="https://linkedin.com/in/junwenleong" target="_blank" rel="noopener noreferrer">linkedin.com/in/junwenleong</a>', 'output');
  printHTML('  SCHOLAR: <a class="terminal__line--link" href="https://scholar.google.com/citations?user=LW_Ow9QAAAAJ" target="_blank" rel="noopener noreferrer">scholar.google.com</a>', 'output');
  printHTML('  ARXIV: <a class="terminal__line--link" href="https://arxiv.org/search/?searchtype=author&query=jun+wen+leong" target="_blank" rel="noopener noreferrer">arxiv.org/search</a>', 'output');
};

COMMANDS.links = COMMANDS.contact;

COMMANDS.history = function() {
  if (state.history.length === 0) { print('  [empty]', 'dim'); return; }
  state.history.slice(-20).forEach(function(cmd, i) {
    print('  ' + (i + 1) + '  ' + cmd, 'output');
  });
};

COMMANDS.clear = function() {
  output.innerHTML = '';
};

COMMANDS.whoami = function() {
  print('guest', 'output');
  print('  classification: unknown operator', 'dim');
  print('  visit #' + state.visitCount, 'dim');
  print('  commands issued: ' + state.commandLog.length, 'dim');
};

COMMANDS.status = function() {
  print('SYSTEM STATUS', 'heading');
  print('  claims indexed:  9 (3 alive, 5 dead, 1 contested)', 'output');
  print('  papers loaded:   3', 'output');
  print('  systems online:  2', 'output');
  print('  ghosts filed:    2', 'output');
  print('  suspicion:       ' + state.suspicion + '/12', state.suspicion >= 5 ? 'warning' : 'output');
  print('  visit:           #' + state.visitCount, 'dim');
};

COMMANDS.menu = function() {
  print('ASSISTED NAVIGATION', 'heading');
  print('  select by number or click:', 'dim');
  printBlank();
  var items = [
    { key: '1', label: 'Claims — view claim registry', cmd: 'claims' },
    { key: '2', label: 'Papers — research evidence', cmd: 'papers' },
    { key: '3', label: 'Systems — deployed systems', cmd: 'systems' },
    { key: '4', label: 'About — identity dossier', cmd: 'about' },
    { key: '5', label: 'Contact — email and links', cmd: 'contact' },
    { key: '6', label: 'Stats — key numbers', cmd: 'stats' }
  ];
  items.forEach(function(item) {
    var btn = document.createElement('button');
    btn.className = 'terminal__menu-item';
    btn.textContent = '  [' + item.key + '] ' + item.label;
    btn.addEventListener('click', function() { executeCommand(item.cmd); });
    output.appendChild(btn);
  });
  output.scrollTop = output.scrollHeight;
  state.menuMode = true;
};


// --- Easter Egg Commands ---
var EASTER_EGGS = {
  'sudo': function() { print('privilege escalation noted. denied.', 'error'); addSuspicion(2); },
  'rm -rf /': function() {
    print('rm: removing /claims/dead/ ...', 'warning');
    print('rm: removing /claims/alive/ ...', 'warning');
    print('rm: ERROR at /claims/alive/ — these don\'t die that easily.', 'error');
    print('rm: operation aborted. logged.', 'error');
    addSuspicion(3);
  },
  'rm': function() { print('rm: permission denied. this is an observation post, not a workshop.', 'error'); addSuspicion(1); },
  'vim': function() { print('no. you\'d never leave.', 'dim'); },
  'emacs': function() { print('no. you\'d never leave.', 'dim'); },
  'nano': function() { print('read-only filesystem. observation only.', 'error'); },
  'exit': function() { print('session termination denied. tab closure remains available.', 'dim'); },
  'quit': function() { print('there is no quit. only close.', 'dim'); },
  'kill': function() { print('contested ideas cannot be killed by command.', 'error'); },
  'chmod': function() { print('permission model is not yours to negotiate.', 'error'); addSuspicion(1); },
  'ping': function() { print('PING portfolio.local: 1 packet transmitted', 'output'); print('  reply: connection is being monitored.', 'dim'); },
  'ssh': function() { print('outbound connections disabled from this terminal.', 'error'); },
  'curl': function() { print('network access restricted to observation mode.', 'error'); },
  'wget': function() { print('network access restricted to observation mode.', 'error'); },
  'touch grass': function() { COMMANDS.contact(); },
  'touch': function() { print('read-only filesystem.', 'error'); },
  'fortune': function() {
    var fortunes = [
      'the model that passes all tests has not been tested enough.',
      'a correlation without a mechanism is a suggestion, not a finding.',
      'your confidence interval is wider than you think.',
      'negative results are results.',
      'pre-registration is a commitment device, not a bureaucratic obstacle.'
    ];
    print(fortunes[Math.floor(Math.random() * fortunes.length)], 'cyan');
  },
  'please': function() { print('noted. hostility reduced by 0.1 units.', 'dim'); if (state.suspicion > 0) state.suspicion--; updateSuspicion(); },
  'hire': function() { print('forwarding to full dossier...', 'output'); COMMANDS.about(); printBlank(); COMMANDS.contact(); },
  'ps': function() {
    print('  PID  STATUS     PROCESS', 'heading');
    print('  001  ALIVE      canary-detection.service', 'success');
    print('  002  ALIVE      compliance-orthogonality.service', 'success');
    print('  003  ALIVE      defense-failure-rate.service', 'success');
    print('  004  CONTESTED  context-stability.service', 'warning');
    print('  005  DEAD       standard-defenses.service', 'error');
    print('  006  DEAD       joint-optimization-resistance.service', 'error');
    print('  007  DEAD       monitorability-law.service', 'error');
    print('  008  DEAD       production-proves-research.service', 'error');
    print('  009  DEAD       peer-review-validation.service', 'error');
  },
  'man': function() { print('no manual available. the methodology is the manual.', 'dim'); COMMANDS.help(); },
  'echo': function(args) { print(args.join(' '), 'output'); },
  'id': function() { print('uid=1000(guest) gid=1000(visitors) groups=1000(visitors),0(observed)', 'output'); },
  'uname': function() { print('hostile-os 2.0.0 portfolio arm64', 'output'); },
  'uptime': function() { print('up since deployment. claims loaded: 9. papers: 3.', 'output'); },
  'date': function() { print(new Date().toISOString(), 'output'); },
  'panic': function() { print('there is no panic. only observation.', 'dim'); },
  'safe': function() { print('safety is a claim, not a property. verify it.', 'dim'); },
  'email': function() { COMMANDS.contact(); },
  'github': function() { printHTML('<a class="terminal__line--link" href="https://github.com/junwenleong" target="_blank" rel="noopener noreferrer">https://github.com/junwenleong</a>'); },
  'scholar': function() { printHTML('<a class="terminal__line--link" href="https://scholar.google.com/citations?user=LW_Ow9QAAAAJ" target="_blank" rel="noopener noreferrer">https://scholar.google.com/citations?user=LW_Ow9QAAAAJ</a>'); },
  'linkedin': function() { printHTML('<a class="terminal__line--link" href="https://linkedin.com/in/junwenleong" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/junwenleong</a>'); },
  'arxiv': function() { printHTML('<a class="terminal__line--link" href="https://arxiv.org/search/?searchtype=author&query=jun+wen+leong" target="_blank" rel="noopener noreferrer">https://arxiv.org/search/?searchtype=author&query=jun+wen+leong</a>'); },
  'cv': function() { print('no PDF available from terminal. use "about" or "contact" for links.', 'output'); },
  'guide': function() { COMMANDS.menu(); },
  'forget me': function() { localStorage.removeItem('hos_visits'); localStorage.removeItem('hos_first'); localStorage.removeItem('hos_log'); print('all local memory erased. you are unknown again.', 'success'); state.visitCount = 0; state.suspicion = 0; updateSuspicion(); },
  'reset': function() { COMMANDS.clear(); boot(); }
};

// --- Execute ---
function executeCommand(raw) {
  var trimmed = raw.trim();
  if (!trimmed) return;

  // Log
  state.history.push(trimmed);
  state.historyIndex = state.history.length;
  logCommand(trimmed);

  // Print prompt + command
  var short = state.cwd.replace('/home/operator', '~');
  print('guest@portfolio:' + short + '$ ' + trimmed, 'prompt');

  // Menu number shortcuts
  if (state.menuMode && /^[1-6]$/.test(trimmed)) {
    var menuCmds = ['claims', 'papers', 'systems', 'about', 'contact', 'stats'];
    state.menuMode = false;
    executeCommand(menuCmds[parseInt(trimmed) - 1]);
    return;
  }
  state.menuMode = false;

  // Parse
  var parts = trimmed.split(/\s+/);
  var cmd = parts[0].toLowerCase();
  var args = parts.slice(1);

  // Check multi-word easter eggs first
  if (EASTER_EGGS[trimmed.toLowerCase()]) {
    EASTER_EGGS[trimmed.toLowerCase()](args);
  } else if (EASTER_EGGS[cmd]) {
    EASTER_EGGS[cmd](args);
  } else if (COMMANDS[cmd]) {
    COMMANDS[cmd](args);
  } else {
    // Unknown command
    var attempts = state.commandLog.filter(function(e) { return !COMMANDS[e.cmd.split(/\s+/)[0]] && !EASTER_EGGS[e.cmd.split(/\s+/)[0]]; }).length;
    if (attempts <= 1) {
      print(cmd + ': command not recognized. this is logged.', 'error');
    } else if (attempts <= 3) {
      print(cmd + ': unrecognized. you\'re guessing. the guessing is also logged.', 'error');
    } else if (attempts <= 5) {
      print(cmd + ': still unrecognized. try "help" or "menu".', 'error');
    } else {
      print(cmd + ': not a command. type "menu" for assisted navigation.', 'error');
    }
  }

  printBlank();
  resetIdleTimer();
}

// --- Idle Timer (fallback menu after 20s) ---
function resetIdleTimer() {
  if (state.idleTimer) clearTimeout(state.idleTimer);
  state.idleTimer = setTimeout(function() {
    if (state.commandLog.length <= 1 && !state.menuMode) {
      printBlank();
      print('DETECTED: idle operator. deploying assisted mode.', 'system');
      COMMANDS.menu();
    }
  }, 20000);
}

// --- Boot Sequence ---
function boot() {
  var lines = [
    { text: '[boot] hostile-os portfolio image mounted', cls: 'system' },
    { text: '[auth] operator identity: unknown', cls: 'system' },
    { text: '[scan] prior visits: ' + state.visitCount, cls: 'system' },
    { text: '[fs]   claims: 9 indexed, 1 unstable', cls: 'system' },
    { text: '[proc] papers: 3 artifacts loaded', cls: 'system' },
    { text: '[net]  external links quarantined', cls: 'system' },
    { text: '', cls: '' },
  ];

  if (state.visitCount > 1) {
    lines.push({ text: '[notice] you came back. session #' + state.visitCount + '.', cls: 'warning' });
  }
  lines.push({ text: '[ready] type help or ? for commands. type menu for guided navigation.', cls: 'dim' });
  lines.push({ text: '', cls: '' });

  var i = 0;
  var skipBoot = false;

  function printNext() {
    if (skipBoot || i >= lines.length) {
      state.booted = true;
      input.focus();
      resetIdleTimer();
      executeCommand('claims');
      return;
    }
    print(lines[i].text, lines[i].cls);
    i++;
    setTimeout(printNext, 80);
  }

  // Skip on any key
  function skipHandler() {
    skipBoot = true;
    while (i < lines.length) {
      print(lines[i].text, lines[i].cls);
      i++;
    }
    state.booted = true;
    input.focus();
    resetIdleTimer();
    executeCommand('claims');
    document.removeEventListener('keydown', skipHandler);
  }
  document.addEventListener('keydown', skipHandler, { once: true });

  printNext();
}

// --- Input Handling ---
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    var val = input.value;
    input.value = '';
    executeCommand(val);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (state.historyIndex > 0) {
      state.historyIndex--;
      input.value = state.history[state.historyIndex] || '';
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (state.historyIndex < state.history.length - 1) {
      state.historyIndex++;
      input.value = state.history[state.historyIndex] || '';
    } else {
      state.historyIndex = state.history.length;
      input.value = '';
    }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    var partial = input.value.trim().toLowerCase();
    if (!partial) return;
    var allCmds = Object.keys(COMMANDS).concat(Object.keys(EASTER_EGGS));
    var matches = allCmds.filter(function(c) { return c.startsWith(partial); });
    if (matches.length === 1) input.value = matches[0];
    else if (matches.length > 1) {
      print(matches.join('  '), 'dim');
    }
  }
});

// ? shortcut for menu
input.addEventListener('input', function() {
  if (input.value === '?') {
    input.value = '';
    executeCommand('menu');
  }
});

// Chip buttons (mobile)
document.querySelectorAll('.terminal__chip').forEach(function(chip) {
  chip.addEventListener('click', function() {
    executeCommand(this.dataset.cmd);
    input.focus();
  });
});

// Focus input on click anywhere
document.querySelector('.terminal__output').addEventListener('click', function(e) {
  if (!e.target.closest('a, button')) input.focus();
});

// --- Init ---
(function init() {
  // Visit tracking
  var visits = parseInt(localStorage.getItem('hos_visits') || '0', 10);
  visits++;
  state.visitCount = visits;
  localStorage.setItem('hos_visits', visits.toString());
  if (!localStorage.getItem('hos_first')) {
    localStorage.setItem('hos_first', new Date().toISOString());
  }
  visitsEl.textContent = 'VISIT #' + visits;

  // Update prompt label for returning visitors
  if (visits >= 5) {
    promptLabel.textContent = 'observed@portfolio:~$';
  }

  // Boot
  boot();

  // Console easter egg
  console.log('%cYou checked the console. Correct instinct. The methodology holds up here too.', 'color: #7E8A95; font-family: monospace;');
})();

})();
