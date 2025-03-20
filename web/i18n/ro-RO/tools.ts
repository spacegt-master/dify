const translation = {
  title: 'Instrumente',
  createCustomTool: 'Creează Instrument Personalizat',
  type: {
    all: 'Toate',
    builtIn: 'Incorporat',
    custom: 'Personalizat',
    workflow: 'Flux de lucru',
  },
  contribute: {
    line1: 'Sunt interesat să ',
    line2: 'contribui la Dify cu instrumente.',
    viewGuide: 'Vezi ghidul',
  },
  author: 'De',
  auth: {
    unauthorized: 'Pentru a Autoriza',
    authorized: 'Autorizat',
    setup: 'Configurează autorizarea pentru a utiliza',
    setupModalTitle: 'Configurează Autorizarea',
    setupModalTitleDescription: 'După configurarea credențialelor, toți membrii din spațiul de lucru pot utiliza acest instrument la orchestrarea aplicațiilor.',
  },
  includeToolNum: '{{num}} instrumente incluse',
  addTool: 'Adaugă Instrument',
  createTool: {
    title: 'Creează Instrument Personalizat',
    editAction: 'Configurează',
    editTitle: 'Editează Instrument Personalizat',
    name: 'Nume',
    toolNamePlaceHolder: 'Introduceți numele instrumentului',
    schema: 'Schema',
    schemaPlaceHolder: 'Introduceți aici schema OpenAPI',
    viewSchemaSpec: 'Vezi specificația OpenAPI-Swagger',
    importFromUrl: 'Importă de la URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Vă rugăm să introduceți un URL valid',
    examples: 'Exemple',
    exampleOptions: {
      json: 'Vreme(JSON)',
      yaml: 'Pet Store(YAML)',
      blankTemplate: 'Șablon Gol',
    },
    availableTools: {
      title: 'Instrumente Disponibile',
      name: 'Nume',
      description: 'Descriere',
      method: 'Metodă',
      path: 'Cale',
      action: 'Acțiuni',
      test: 'Testează',
    },
    authMethod: {
      title: 'Metoda de Autorizare',
      type: 'Tipul de Autorizare',
      keyTooltip: 'Cheie antet HTTP, puteți lăsa "Autorizare" dacă nu știți ce este sau setați-o la o valoare personalizată',
      types: {
        none: 'Niciuna',
        api_key: 'Cheie API',
        apiKeyPlaceholder: 'Nume antet HTTP pentru cheia API',
        apiValuePlaceholder: 'Introduceți cheia API',
      },
      key: 'Cheie',
      value: 'Valoare',
    },
    authHeaderPrefix: {
      title: 'Tipul de Autentificare',
      types: {
        basic: 'Basic',
        bearer: 'Bearer',
        custom: 'Personalizat',
      },
    },
    privacyPolicy: 'Politica de Confidențialitate',
    privacyPolicyPlaceholder: 'Vă rugăm să introduceți politica de confidențialitate',
    deleteToolConfirmTitle: 'Ștergeți această unealtă?',
    deleteToolConfirmContent: ' Ștergerea uneltă este irreversibilă. Utilizatorii nu vor mai putea accesa uneltă dvs.',
    toolInput: {
      methodParameter: 'Parametru',
      description: 'Descriere',
      methodSetting: 'Setare',
      methodSettingTip: 'Utilizatorul completează configurația instrumentului',
      methodParameterTip: 'Completări LLM în timpul inferenței',
      name: 'Nume',
      descriptionPlaceholder: 'Descrierea semnificației parametrului',
      label: 'Tags',
      required: 'Necesar',
      method: 'Metodă',
      title: 'Intrare instrument',
      labelPlaceholder: 'Alegeți etichetele (opțional)',
    },
    descriptionPlaceholder: 'Scurtă descriere a scopului instrumentului, de exemplu, obțineți temperatura pentru o anumită locație.',
    nameForToolCall: 'Numele apelului instrumentului',
    description: 'Descriere',
    confirmTip: 'Aplicațiile care folosesc acest instrument vor fi afectate',
    nameForToolCallPlaceHolder: 'Utilizat pentru recunoașterea mașinii, cum ar fi getCurrentWeather, list_pets',
    customDisclaimer: 'Declinarea responsabilității personalizate',
    confirmTitle: 'Confirmați pentru a salva?',
    customDisclaimerPlaceholder: 'Vă rugăm să introduceți declinarea responsabilității personalizate',
    nameForToolCallTip: 'Acceptă doar numere, litere și caractere de subliniere.',
  },
  test: {
    title: 'Testează',
    parametersValue: 'Parametri & Valoare',
    parameters: 'Parametri',
    value: 'Valoare',
    testResult: 'Rezultate Test',
    testResultPlaceholder: 'Rezultatul testului va fi afișat aici',
  },
  thought: {
    using: 'Utilizând',
    used: 'Utilizat',
    requestTitle: 'Cerere către',
    responseTitle: 'Răspuns de la',
  },
  setBuiltInTools: {
    info: 'Informații',
    setting: 'Setări',
    toolDescription: 'Descriere instrument',
    parameters: 'parametri',
    string: 'șir',
    number: 'număr',
    required: 'Obligatoriu',
    infoAndSetting: 'Informații și Setări',
    file: 'fișier',
  },
  noCustomTool: {
    title: 'Niciun instrument personalizat!',
    content: 'Adăugați și gestionați aici instrumentele personalizate pentru construirea aplicațiilor AI.',
    createTool: 'Creează Instrument',
  },
  noSearchRes: {
    title: 'Ne pare rău, nu s-au găsit rezultate!',
    content: 'Nu am putut găsi niciun instrument care să se potrivească căutării dvs.',
    reset: 'Resetează Căutarea',
  },
  builtInPromptTitle: 'Prompt',
  toolRemoved: 'Instrument eliminat',
  notAuthorized: 'Instrument neautorizat',
  howToGet: 'Cum să obții',
  addToolModal: {
    added: 'adăugat',
    category: 'categorie',
    manageInTools: 'Gestionați în Instrumente',
    add: 'adăuga',
    type: 'tip',
    emptyTitle: 'Nu este disponibil niciun instrument de flux de lucru',
    emptyTip: 'Accesați "Flux de lucru -> Publicați ca instrument"',
    emptyTitleCustom: 'Nu este disponibil niciun instrument personalizat',
    emptyTipCustom: 'Crearea unui instrument personalizat',
  },
  openInStudio: 'Deschide în Studio',
  customToolTip: 'Aflați mai multe despre instrumentele personalizate Dify',
  toolNameUsageTip: 'Numele de apel al instrumentului pentru raționamentul și solicitarea agentului',
  copyToolName: 'Copiază numele',
  noTools: 'Nu s-au găsit unelte',
}

export default translation
