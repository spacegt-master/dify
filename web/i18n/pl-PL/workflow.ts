const translation = {
  common: {
    undo: 'Cofnij',
    redo: 'Ponów',
    editing: 'Edytowanie',
    autoSaved: 'Automatycznie zapisane',
    unpublished: 'Nieopublikowane',
    published: 'Opublikowane',
    publish: 'Opublikuj',
    update: 'Aktualizuj',
    run: 'Uruchom',
    running: 'Uruchamianie',
    inRunMode: 'W trybie uruchamiania',
    inPreview: 'W podglądzie',
    inPreviewMode: 'W trybie podglądu',
    preview: 'Podgląd',
    viewRunHistory: 'Zobacz historię uruchomień',
    runHistory: 'Historia uruchomień',
    goBackToEdit: 'Wróć do edytora',
    conversationLog: 'Dziennik rozmów',
    features: 'Funkcje',
    debugAndPreview: 'Podgląd',
    restart: 'Uruchom ponownie',
    currentDraft: 'Bieżący szkic',
    currentDraftUnpublished: 'Bieżący szkic nieopublikowany',
    latestPublished: 'Najnowsze opublikowane',
    publishedAt: 'Opublikowane',
    restore: 'Przywróć',
    runApp: 'Uruchom aplikację',
    batchRunApp: 'Uruchom aplikację wsadowo',
    accessAPIReference: 'Uzyskaj dostęp do dokumentacji API',
    embedIntoSite: 'Osadź na stronie',
    addTitle: 'Dodaj tytuł...',
    addDescription: 'Dodaj opis...',
    noVar: 'Brak zmiennej',
    searchVar: 'Szukaj zmiennej',
    variableNamePlaceholder: 'Nazwa zmiennej',
    setVarValuePlaceholder: 'Ustaw zmienną',
    needConnectTip: 'Ten krok nie jest połączony z niczym',
    maxTreeDepth: 'Maksymalny limit {{depth}} węzłów na gałąź',
    needEndNode: 'Należy dodać blok końcowy',
    needAnswerNode: 'Należy dodać blok odpowiedzi',
    workflowProcess: 'Proces przepływu pracy',
    notRunning: 'Jeszcze nie uruchomiono',
    previewPlaceholder: 'Wprowadź treść w poniższym polu, aby rozpocząć debugowanie Chatbota',
    effectVarConfirm: {
      title: 'Usuń zmienną',
      content: 'Zmienna jest używana w innych węzłach. Czy na pewno chcesz ją usunąć?',
    },
    insertVarTip: 'Naciśnij klawisz \'/\', aby szybko wstawić',
    processData: 'Przetwórz dane',
    input: 'Wejście',
    output: 'Wyjście',
    jinjaEditorPlaceholder: 'Naciśnij \'/\' lub \'{\', aby wstawić zmienną',
    viewOnly: 'Tylko do podglądu',
    showRunHistory: 'Pokaż historię uruchomień',
    enableJinja: 'Włącz obsługę szablonów Jinja',
    learnMore: 'Dowiedz się więcej',
    copy: 'Kopiuj',
    duplicate: 'Duplikuj',
    addBlock: 'Dodaj blok',
    pasteHere: 'Wklej tutaj',
    pointerMode: 'Tryb wskaźnika',
    handMode: 'Tryb ręczny',
    model: 'Model',
    workflowAsTool: 'Przepływ pracy jako narzędzie',
    configureRequired: 'Wymagana konfiguracja',
    configure: 'Skonfiguruj',
    manageInTools: 'Zarządzaj w narzędziach',
    workflowAsToolTip: 'Wymagana rekonfiguracja narzędzia po aktualizacji przepływu pracy.',
    viewDetailInTracingPanel: 'Zobacz szczegóły',
    importDSLTip: 'Bieżąca wersja robocza zostanie nadpisana. Eksportuj przepływ pracy jako kopię zapasową przed zaimportowaniem.',
    syncingData: 'Synchronizacja danych w zaledwie kilka sekund.',
    importSuccess: 'Import powodzenie',
    importDSL: 'Importowanie DSL',
    overwriteAndImport: 'Nadpisywanie i importowanie',
    chooseDSL: 'Wybierz plik DSL(yml)',
    backupCurrentDraft: 'Utwórz kopię zapasową bieżącej wersji roboczej',
    importFailure: 'Niepowodzenie importu',
    parallelTip: {
      click: {
        title: 'Klikać',
        desc: ', aby dodać',
      },
      drag: {
        title: 'Przeciągnąć',
        desc: 'aby się połączyć',
      },
      limit: 'Równoległość jest ograniczona do gałęzi {{num}}.',
      depthLimit: 'Limit warstw zagnieżdżania równoległego dla warstw {{num}}',
    },
    parallelRun: 'Bieg równoległy',
    jumpToNode: 'Przejdź do tego węzła',
    disconnect: 'Odłączyć',
    addParallelNode: 'Dodaj węzeł równoległy',
    parallel: 'RÓWNOLEGŁY',
    branch: 'GAŁĄŹ',
    ImageUploadLegacyTip: 'Teraz można tworzyć zmienne typu pliku w formularzu startowym. W przyszłości nie będziemy już obsługiwać funkcji przesyłania obrazów.',
    fileUploadTip: 'Funkcje przesyłania obrazów zostały zaktualizowane do przesyłania plików.',
    featuresDescription: 'Ulepszanie środowiska użytkownika aplikacji internetowej',
    featuresDocLink: 'Dowiedz się więcej',
    importWarning: 'Ostrożność',
    importWarningDetails: 'Różnica w wersji DSL może mieć wpływ na niektóre funkcje',
    openInExplore: 'Otwieranie w obszarze Eksploruj',
    onFailure: 'W przypadku niepowodzenia',
    addFailureBranch: 'Dodawanie gałęzi niepowodzenia',
    loadMore: 'Załaduj więcej przepływów pracy',
    noHistory: 'Brak historii',
  },
  env: {
    envPanelTitle: 'Zmienne Środowiskowe',
    envDescription: 'Zmienne środowiskowe mogą być używane do przechowywania prywatnych informacji i poświadczeń. Są one tylko do odczytu i mogą być oddzielone od pliku DSL podczas eksportu.',
    envPanelButton: 'Dodaj Zmienną',
    modal: {
      title: 'Dodaj Zmienną Środowiskową',
      editTitle: 'Edytuj Zmienną Środowiskową',
      type: 'Typ',
      name: 'Nazwa',
      namePlaceholder: 'nazwa środowiska',
      value: 'Wartość',
      valuePlaceholder: 'wartość środowiska',
      secretTip: 'Używane do definiowania wrażliwych informacji lub danych, z ustawieniami DSL skonfigurowanymi do zapobiegania wyciekom.',
    },
    export: {
      title: 'Eksportować tajne zmienne środowiskowe?',
      checkbox: 'Eksportuj tajne wartości',
      ignore: 'Eksportuj DSL',
      export: 'Eksportuj DSL z tajnymi wartościami',
    },
  },
  chatVariable: {
    panelTitle: 'Zmienne Konwersacji',
    panelDescription: 'Zmienne Konwersacji służą do przechowywania interaktywnych informacji, które LLM musi pamiętać, w tym historii konwersacji, przesłanych plików, preferencji użytkownika. Są one do odczytu i zapisu.',
    docLink: 'Odwiedź naszą dokumentację, aby dowiedzieć się więcej.',
    button: 'Dodaj Zmienną',
    modal: {
      title: 'Dodaj Zmienną Konwersacji',
      editTitle: 'Edytuj Zmienną Konwersacji',
      name: 'Nazwa',
      namePlaceholder: 'Nazwa zmiennej',
      type: 'Typ',
      value: 'Wartość Domyślna',
      valuePlaceholder: 'Wartość domyślna, pozostaw puste aby nie ustawiać',
      description: 'Opis',
      descriptionPlaceholder: 'Opisz zmienną',
      editInJSON: 'Edytuj w JSON',
      oneByOne: 'Dodawaj po kolei',
      editInForm: 'Edytuj w Formularzu',
      arrayValue: 'Wartość',
      addArrayValue: 'Dodaj Wartość',
      objectKey: 'Klucz',
      objectType: 'Typ',
      objectValue: 'Wartość Domyślna',
    },
    storedContent: 'Przechowywana zawartość',
    updatedAt: 'Zaktualizowano ',
  },
  changeHistory: {
    title: 'Historia Zmian',
    placeholder: 'Nie dokonano jeszcze żadnych zmian',
    clearHistory: 'Wyczyść Historię',
    hint: 'Wskazówka',
    hintText: 'Działania edycji są śledzone w historii zmian, która jest przechowywana na urządzeniu przez czas trwania tej sesji. Ta historia zostanie usunięta po opuszczeniu edytora.',
    stepBackward_one: '{{count}} krok do tyłu',
    stepBackward_other: '{{count}} kroki do tyłu',
    stepForward_one: '{{count}} krok do przodu',
    stepForward_other: '{{count}} kroki do przodu',
    sessionStart: 'Początek sesji',
    currentState: 'Aktualny stan',
    nodeTitleChange: 'Tytuł bloku zmieniony',
    nodeDescriptionChange: 'Opis bloku zmieniony',
    nodeDragStop: 'Blok przeniesiony',
    nodeChange: 'Blok zmieniony',
    nodeConnect: 'Blok połączony',
    nodePaste: 'Blok wklejony',
    nodeDelete: 'Blok usunięty',
    nodeAdd: 'Blok dodany',
    nodeResize: 'Notatka zmieniona',
    noteAdd: 'Notatka dodana',
    noteChange: 'Notatka zmieniona',
    noteDelete: 'Notatka usunięta',
    edgeDelete: 'Blok rozłączony',
  },
  errorMsg: {
    fieldRequired: '{{field}} jest wymagane',
    authRequired: 'Wymagana autoryzacja',
    invalidJson: '{{field}} jest nieprawidłowym JSON-em',
    fields: {
      variable: 'Nazwa zmiennej',
      variableValue: 'Wartość zmiennej',
      code: 'Kod',
      model: 'Model',
      rerankModel: 'Model rerank',
      visionVariable: 'Zmienna wizji',
    },
    invalidVariable: 'Nieprawidłowa zmienna',
    rerankModelRequired: 'Przed włączeniem Rerank Model upewnij się, że model został pomyślnie skonfigurowany w ustawieniach.',
    noValidTool: '{{field}} nie wybrano prawidłowego narzędzia',
    toolParameterRequired: '{{field}}: parametr [{{param}}] jest wymagany',
  },
  singleRun: {
    testRun: 'Testowe uruchomienie ',
    startRun: 'Rozpocznij uruchomienie',
    running: 'Uruchamianie',
    testRunIteration: 'Iteracja testowego uruchomienia',
    back: 'Wstecz',
    iteration: 'Iteracja',
  },
  tabs: {
    'searchBlock': 'Szukaj bloku',
    'blocks': 'Bloki',
    'tools': 'Narzędzia',
    'allTool': 'Wszystkie',
    'builtInTool': 'Wbudowane',
    'customTool': 'Niestandardowe',
    'workflowTool': 'Przepływ pracy',
    'question-understand': 'Zrozumienie pytania',
    'logic': 'Logika',
    'transform': 'Transformacja',
    'utilities': 'Narzędzia pomocnicze',
    'noResult': 'Nie znaleziono dopasowań',
    'searchTool': 'Wyszukiwarka',
    'agent': 'Strategia agenta',
    'plugin': 'Wtyczka',
  },
  blocks: {
    'start': 'Start',
    'end': 'Koniec',
    'answer': 'Odpowiedź',
    'llm': 'LLM',
    'knowledge-retrieval': 'Wyszukiwanie wiedzy',
    'question-classifier': 'Klasyfikator pytań',
    'if-else': 'JEŚLI/W PRZECIWNYM WYPADKU',
    'code': 'Kod',
    'template-transform': 'Szablon',
    'http-request': 'Żądanie HTTP',
    'variable-assigner': 'Agregator zmiennych',
    'variable-aggregator': 'Agregator zmiennych',
    'assigner': 'Przypisywacz Zmiennych',
    'iteration-start': 'Początek iteracji',
    'iteration': 'Iteracja',
    'parameter-extractor': 'Ekstraktor parametrów',
    'document-extractor': 'Ekstraktor dokumentów',
    'list-operator': 'Operator listy',
    'agent': 'Agent',
  },
  blocksAbout: {
    'start': 'Zdefiniuj początkowe parametry uruchamiania przepływu pracy',
    'end': 'Zdefiniuj zakończenie i typ wyniku przepływu pracy',
    'answer': 'Zdefiniuj treść odpowiedzi w rozmowie',
    'llm': 'Wywołaj duże modele językowe do odpowiadania na pytania lub przetwarzania języka naturalnego',
    'knowledge-retrieval': 'Pozwala na wyszukiwanie treści tekstowych związanych z pytaniami użytkowników z bazy wiedzy',
    'question-classifier': 'Zdefiniuj warunki klasyfikacji pytań użytkowników, LLM może definiować, jak rozmowa postępuje na podstawie opisu klasyfikacji',
    'if-else': 'Pozwala na podział przepływu pracy na dwie gałęzie na podstawie warunków if/else',
    'code': 'Wykonaj fragment kodu Python lub NodeJS, aby wdrożyć niestandardową logikę',
    'template-transform': 'Konwertuj dane na ciąg znaków przy użyciu składni szablonu Jinja',
    'http-request': 'Pozwala na wysyłanie żądań serwera za pomocą protokołu HTTP',
    'variable-assigner': 'Zbierz zmienne z wielu gałęzi do jednej zmiennej dla jednolitej konfiguracji węzłów końcowych.',
    'assigner': 'Węzeł przypisania zmiennych służy do przypisywania wartości do zmiennych zapisywalnych (takich jak zmienne konwersacji).',
    'variable-aggregator': 'Zbierz zmienne z wielu gałęzi do jednej zmiennej dla jednolitej konfiguracji węzłów końcowych.',
    'iteration': 'Wykonuj wielokrotne kroki na liście obiektów, aż wszystkie wyniki zostaną wypisane.',
    'parameter-extractor': 'Użyj LLM do wyodrębnienia strukturalnych parametrów z języka naturalnego do wywołań narzędzi lub żądań HTTP.',
    'document-extractor': 'Służy do analizowania przesłanych dokumentów w treści tekstowej, która jest łatwo zrozumiała dla LLM.',
    'list-operator': 'Służy do filtrowania lub sortowania zawartości tablicy.',
    'agent': 'Wywoływanie dużych modeli językowych w celu odpowiadania na pytania lub przetwarzania języka naturalnego',
  },
  operator: {
    zoomIn: 'Powiększ',
    zoomOut: 'Pomniejsz',
    zoomTo50: 'Powiększ do 50%',
    zoomTo100: 'Powiększ do 100%',
    zoomToFit: 'Dopasuj do ekranu',
  },
  panel: {
    userInputField: 'Pole wprowadzania użytkownika',
    changeBlock: 'Zmień blok',
    helpLink: 'Link do pomocy',
    about: 'O',
    createdBy: 'Stworzone przez ',
    nextStep: 'Następny krok',
    addNextStep: 'Dodaj następny blok w tym przepływie pracy',
    selectNextStep: 'Wybierz następny blok',
    runThisStep: 'Uruchom ten krok',
    checklist: 'Lista kontrolna',
    checklistTip: 'Upewnij się, że wszystkie problemy zostały rozwiązane przed opublikowaniem',
    checklistResolved: 'Wszystkie problemy zostały rozwiązane',
    organizeBlocks: 'Organizuj bloki',
    change: 'Zmień',
    optional: '(opcjonalne)',
  },
  nodes: {
    common: {
      outputVars: 'Zmienne wyjściowe',
      insertVarTip: 'Wstaw zmienną',
      memory: {
        memory: 'Pamięć',
        memoryTip: 'Ustawienia pamięci rozmowy',
        windowSize: 'Rozmiar okna',
        conversationRoleName: 'Nazwa roli w rozmowie',
        user: 'Prefiks użytkownika',
        assistant: 'Prefiks asystenta',
      },
      memories: {
        title: 'Pamięci',
        tip: 'Pamięć rozmowy',
        builtIn: 'Wbudowane',
      },
      errorHandle: {
        none: {
          desc: 'Węzeł przestanie działać, jeśli wystąpi wyjątek i nie zostanie obsłużony',
          title: 'Żaden',
        },
        defaultValue: {
          title: 'Wartość domyślna',
          desc: 'Gdy wystąpi błąd, określ statyczną zawartość wyjściową.',
          tip: 'W przypadku błędu, zwróci wartość poniżej.',
          inLog: 'Wyjątek węzła, wyprowadzanie zgodnie z wartościami domyślnymi.',
          output: 'Wyjściowa wartość domyślna',
        },
        failBranch: {
          title: 'Gałąź Fail (Gałąź Niepowodzenia',
          customize: 'Przejdź do kanwy, aby dostosować logikę gałęzi niepowodzenia.',
          customizeTip: 'Gdy gałąź fail jest aktywowana, wyjątki zgłaszane przez węzły nie zakończą procesu. Zamiast tego automatycznie wykona predefiniowaną gałąź niepowodzenia, co pozwoli Ci elastycznie dostarczać komunikaty o błędach, raporty, poprawki lub pomijać akcje.',
          inLog: 'Wyjątek węzła, automatycznie wykona gałąź niepowodzenia. Dane wyjściowe węzła zwrócą typ błędu i komunikat o błędzie, a następnie przekażą je do podrzędnego.',
          desc: 'Gdy wystąpi błąd, wykona gałąź wyjątku',
        },
        partialSucceeded: {
          tip: 'W procesie {{num}} węzły działają nieprawidłowo, przejdź do śledzenia, aby sprawdzić dzienniki.',
        },
        tip: 'Strategia obsługi wyjątków, wyzwalana, gdy węzeł napotka wyjątek.',
        title: 'Obsługa błędów',
      },
      retry: {
        retry: 'Ponów próbę',
        maxRetries: 'Maksymalna liczba ponownych prób',
        retryInterval: 'Interwał ponawiania prób',
        retryTimes: 'Ponów próbę {{times}} razy w przypadku niepowodzenia',
        retrying: 'Ponawianie...',
        retrySuccessful: 'Ponawianie próby powiodło się',
        retryFailed: 'Ponawianie próby nie powiodło się',
        times: 'razy',
        retries: '{{liczba}} Ponownych prób',
        retryOnFailure: 'Ponawianie próby w przypadku niepowodzenia',
        retryFailedTimes: '{{times}} ponawianie prób nie powiodło się',
        ms: 'Ms',
      },
    },
    start: {
      required: 'wymagane',
      inputField: 'Pole wejściowe',
      builtInVar: 'Wbudowane zmienne',
      outputVars: {
        query: 'Wprowadzenie użytkownika',
        memories: {
          des: 'Historia rozmowy',
          type: 'typ wiadomości',
          content: 'treść wiadomości',
        },
        files: 'Lista plików',
      },
      noVarTip: 'Ustaw wejścia, które mogą być używane w przepływie pracy',
    },
    end: {
      outputs: 'Wyniki',
      output: {
        type: 'typ wyniku',
        variable: 'zmienna wyjściowa',
      },
      type: {
        'none': 'Brak',
        'plain-text': 'Zwykły tekst',
        'structured': 'Strukturalny',
      },
    },
    answer: {
      answer: 'Odpowiedź',
      outputVars: 'Zmienne wyjściowe',
    },
    llm: {
      model: 'model',
      variables: 'zmienne',
      context: 'kontekst',
      contextTooltip: 'Możesz zaimportować wiedzę jako kontekst',
      notSetContextInPromptTip: 'Aby włączyć funkcję kontekstu, wypełnij zmienną kontekstu w PROMPT.',
      prompt: 'prompt',
      roleDescription: {
        system: 'Podaj wysokopoziomowe instrukcje dla rozmowy',
        user: 'Podaj instrukcje, zapytania lub dowolne tekstowe wejście dla modelu',
        assistant: 'Odpowiedzi modelu oparte na wiadomościach użytkownika',
      },
      addMessage: 'Dodaj wiadomość',
      vision: 'wizja',
      files: 'Pliki',
      resolution: {
        name: 'Rozdzielczość',
        high: 'Wysoka',
        low: 'Niska',
      },
      outputVars: {
        output: 'Generowana treść',
        usage: 'Informacje o użyciu modelu',
      },
      singleRun: {
        variable: 'Zmienna',
      },
      sysQueryInUser: 'sys.query w wiadomości użytkownika jest wymagane',
    },
    knowledgeRetrieval: {
      queryVariable: 'Zmienna zapytania',
      knowledge: 'Wiedza',
      outputVars: {
        output: 'Odzyskane dane segmentowane',
        content: 'Treść segmentowana',
        title: 'Tytuł segmentowany',
        icon: 'Ikona segmentowana',
        url: 'URL segmentowany',
        metadata: 'Inne metadane',
      },
    },
    http: {
      inputVars: 'Zmienne wejściowe',
      api: 'API',
      apiPlaceholder: 'Wpisz URL, wpisz ‘/’, aby wstawić zmienną',
      notStartWithHttp: 'API powinno zaczynać się od http:// lub https://',
      key: 'Klucz',
      value: 'Wartość',
      bulkEdit: 'Edycja zbiorcza',
      keyValueEdit: 'Edycja klucz-wartość',
      headers: 'Nagłówki',
      params: 'Parametry',
      body: 'Treść',
      outputVars: {
        body: 'Treść odpowiedzi',
        statusCode: 'Kod statusu odpowiedzi',
        headers: 'Lista nagłówków odpowiedzi w formacie JSON',
        files: 'Lista plików',
      },
      authorization: {
        'authorization': 'Autoryzacja',
        'authorizationType': 'Typ autoryzacji',
        'no-auth': 'Brak',
        'api-key': 'Klucz API',
        'auth-type': 'Typ autoryzacji',
        'basic': 'Podstawowa',
        'bearer': 'Bearer',
        'custom': 'Niestandardowa',
        'api-key-title': 'Klucz API',
        'header': 'Nagłówek',
      },
      insertVarPlaceholder: 'wpisz \'/\', aby wstawić zmienną',
      timeout: {
        title: 'Limit czasu',
        connectLabel: 'Limit czasu połączenia',
        connectPlaceholder: 'Wpisz limit czasu połączenia w sekundach',
        readLabel: 'Limit czasu odczytu',
        readPlaceholder: 'Wpisz limit czasu odczytu w sekundach',
        writeLabel: 'Limit czasu zapisu',
        writePlaceholder: 'Wpisz limit czasu zapisu w sekundach',
      },
      type: 'Typ',
      binaryFileVariable: 'Binarna zmienna pliku',
      extractListPlaceholder: 'Wprowadź indeks elementu listy, wpisz "/" wstaw zmienną',
      curl: {
        placeholder: 'Wklej tutaj ciąg cURL',
        title: 'Importowanie z cURL',
      },
    },
    code: {
      inputVars: 'Zmienne wejściowe',
      outputVars: 'Zmienne wyjściowe',
      advancedDependencies: 'Zaawansowane zależności',
      advancedDependenciesTip: 'Dodaj niektóre preładowane zależności, które zajmują więcej czasu lub nie są domyślnie wbudowane',
      searchDependencies: 'Wyszukaj zależności',
    },
    templateTransform: {
      inputVars: 'Zmienne wejściowe',
      code: 'Kod',
      codeSupportTip: 'Obsługuje tylko Jinja2',
      outputVars: {
        output: 'Przekształcona treść',
      },
    },
    ifElse: {
      if: 'Jeśli',
      else: 'W przeciwnym razie',
      elseDescription: 'Używane do określenia logiki, która powinna być wykonana, gdy warunek if nie jest spełniony.',
      and: 'i',
      or: 'lub',
      operator: 'Operator',
      notSetVariable: 'Najpierw ustaw zmienną',
      comparisonOperator: {
        'contains': 'zawiera',
        'not contains': 'nie zawiera',
        'start with': 'zaczyna się od',
        'end with': 'kończy się na',
        'is': 'jest',
        'is not': 'nie jest',
        'empty': 'jest pusty',
        'not empty': 'nie jest pusty',
        'null': 'jest null',
        'not null': 'nie jest null',
        'regex match': 'Dopasowanie wyrażenia regularnego',
        'in': 'w',
        'not exists': 'nie istnieje',
        'exists': 'Istnieje',
        'all of': 'wszystkie z nich',
        'not in': 'nie w',
      },
      enterValue: 'Wpisz wartość',
      addCondition: 'Dodaj warunek',
      conditionNotSetup: 'Warunek NIE został ustawiony',
      selectVariable: 'Wybierz zmienną...',
      optionName: {
        video: 'Wideo',
        image: 'Obraz',
        url: 'Adres URL',
        localUpload: 'Przesyłanie lokalne',
        doc: 'Doc',
        audio: 'Dźwięk',
      },
      addSubVariable: 'Zmienna podrzędna',
      select: 'Wybrać',
    },
    variableAssigner: {
      title: 'Przypisz zmienne',
      outputType: 'Typ wyjścia',
      varNotSet: 'Zmienna nie została ustawiona',
      noVarTip: 'Dodaj zmienne do przypisania',
      type: {
        string: 'Ciąg znaków',
        number: 'Liczba',
        object: 'Obiekt',
        array: 'Tablica',
      },
      aggregationGroup: 'Grupa agregacji',
      aggregationGroupTip: 'Włączenie tej funkcji pozwala na agregowanie wielu zestawów zmiennych przez agregator zmiennych.',
      addGroup: 'Dodaj grupę',
      outputVars: {
        varDescribe: 'Wyjście {{groupName}}',
      },
      setAssignVariable: 'Ustaw przypisanie zmiennej',
    },
    assigner: {
      'assignedVariable': 'Przypisana Zmienna',
      'writeMode': 'Tryb Zapisu',
      'writeModeTip': 'Gdy PRZYPISANA ZMIENNA jest tablicą, tryb dopisywania dodaje na końcu.',
      'over-write': 'Nadpisz',
      'append': 'Dopisz',
      'plus': 'Plus',
      'clear': 'Wyczyść',
      'setVariable': 'Ustaw Zmienną',
      'variable': 'Zmienna',
      'operations': {
        'over-write': 'Zastąpić',
        'set': 'Zbiór',
        'title': 'Operacja',
        'overwrite': 'Zastąpić',
        '*=': '*=',
        '/=': '/=',
        '-=': '-=',
        'extend': 'Rozszerzyć',
        '+=': '+=',
        'clear': 'Jasny',
        'append': 'Dołączyć',
      },
      'variables': 'Zmiennych',
      'selectAssignedVariable': 'Wybierz przypisaną zmienną...',
      'varNotSet': 'Zmienna NIE jest ustawiona',
      'noAssignedVars': 'Brak dostępnych przypisanych zmiennych',
      'assignedVarsDescription': 'Przypisane zmienne muszą być zmiennymi zapisywalnymi, takimi jak zmienne konwersacji.',
      'setParameter': 'Ustaw parametr...',
      'noVarTip': 'Kliknij przycisk "+", aby dodać zmienne',
    },
    tool: {
      toAuthorize: 'Do autoryzacji',
      inputVars: 'Zmienne wejściowe',
      outputVars: {
        text: 'treść generowana przez narzędzie',
        files: {
          title: 'pliki generowane przez narzędzie',
          type: 'Typ wsparcia. Obecnie tylko obsługuje obraz',
          transfer_method: 'Metoda transferu. Wartość to remote_url lub local_file',
          url: 'URL obrazu',
          upload_file_id: 'ID przesłanego pliku',
        },
        json: 'JSON wygenerowany przez narzędzien',
      },
    },
    questionClassifiers: {
      model: 'model',
      inputVars: 'Zmienne wejściowe',
      outputVars: {
        className: 'Nazwa klasy',
      },
      class: 'Klasa',
      classNamePlaceholder: 'Napisz nazwę swojej klasy',
      advancedSetting: 'Zaawansowane ustawienia',
      topicName: 'Nazwa tematu',
      topicPlaceholder: 'Napisz nazwę swojego tematu',
      addClass: 'Dodaj klasę',
      instruction: 'Instrukcja',
      instructionTip: 'Wprowadź dodatkowe instrukcje, aby pomóc klasyfikatorowi pytań lepiej zrozumieć, jak kategoryzować pytania.',
      instructionPlaceholder: 'Napisz swoją instrukcję',
    },
    parameterExtractor: {
      inputVar: 'Zmienna wejściowa',
      extractParameters: 'Wyodrębnij parametry',
      importFromTool: 'Importuj z narzędzi',
      addExtractParameter: 'Dodaj parametr wyodrębniania',
      addExtractParameterContent: {
        name: 'Nazwa',
        namePlaceholder: 'Nazwa parametru wyodrębniania',
        type: 'Typ',
        typePlaceholder: 'Typ parametru wyodrębniania',
        description: 'Opis',
        descriptionPlaceholder: 'Opis parametru wyodrębniania',
        required: 'Wymagane',
        requiredContent: 'Wymagane jest tylko jako odniesienie do wnioskowania modelu, a nie do obowiązkowej walidacji wyjścia parametru.',
      },
      extractParametersNotSet: 'Parametry wyodrębniania nie zostały ustawione',
      instruction: 'Instrukcja',
      instructionTip: 'Wprowadź dodatkowe instrukcje, aby pomóc ekstraktorowi parametrów zrozumieć, jak wyodrębniać parametry.',
      advancedSetting: 'Zaawansowane ustawienia',
      reasoningMode: 'Tryb wnioskowania',
      reasoningModeTip: 'Możesz wybrać odpowiedni tryb wnioskowania w zależności od zdolności modelu do reagowania na instrukcje dotyczące wywoływania funkcji lub zapytań.',
      isSuccess: 'Czy się udało. W przypadku sukcesu wartość wynosi 1, w przypadku niepowodzenia wartość wynosi 0.',
      errorReason: 'Powód błędu',
    },
    iteration: {
      deleteTitle: 'Usunąć węzeł iteracji?',
      deleteDesc: 'Usunięcie węzła iteracji usunie wszystkie węzły potomne',
      input: 'Wejście',
      output: 'Zmienne wyjściowe',
      iteration_one: '{{count}} Iteracja',
      iteration_other: '{{count}} Iteracje',
      currentIteration: 'Bieżąca iteracja',
      ErrorMethod: {
        continueOnError: 'kontynuacja w przypadku błędu',
        operationTerminated: 'Zakończone',
        removeAbnormalOutput: 'usuń-nieprawidłowe-wyjście',
      },
      comma: ',',
      parallelModeUpper: 'TRYB RÓWNOLEGŁY',
      parallelModeEnableTitle: 'Włączony tryb równoległy',
      MaxParallelismTitle: 'Maksymalna równoległość',
      error_one: '{{liczba}} Błąd',
      error_other: '{{liczba}} Błędy',
      parallelPanelDesc: 'W trybie równoległym zadania w iteracji obsługują wykonywanie równoległe.',
      parallelMode: 'Tryb równoległy',
      MaxParallelismDesc: 'Maksymalna równoległość służy do kontrolowania liczby zadań wykonywanych jednocześnie w jednej iteracji.',
      parallelModeEnableDesc: 'W trybie równoległym zadania w iteracjach obsługują wykonywanie równoległe. Możesz to skonfigurować w panelu właściwości po prawej stronie.',
      answerNodeWarningDesc: 'Ostrzeżenie w trybie równoległym: węzły odpowiedzi, przypisania zmiennych konwersacji i trwałe operacje odczytu/zapisu w iteracjach mogą powodować wyjątki.',
      errorResponseMethod: 'Metoda odpowiedzi na błąd',
    },
    note: {
      editor: {
        link: 'Łącze',
        medium: 'Średni',
        small: 'Mały',
        italic: 'Kursywa',
        enterUrl: 'Wpisz adres URL...',
        showAuthor: 'Pokaż autora',
        bold: 'Śmiały',
        unlink: 'Odłączyć',
        bulletList: 'Lista punktowana',
        large: 'Duży',
        openLink: 'Otwierać',
        strikethrough: 'Przekreślenie',
        invalidUrl: 'Nieprawidłowy adres URL',
        placeholder: 'Napisz swoją notatkę...',
      },
      addNote: 'Dodaj notatkę',
    },
    docExtractor: {
      outputVars: {
        text: 'Wyodrębniony tekst',
      },
      learnMore: 'Dowiedz się więcej',
      inputVar: 'Zmienna wejściowa',
      supportFileTypes: 'Obsługiwane typy plików: {{types}}.',
    },
    listFilter: {
      outputVars: {
        result: 'Wynik filtrowania',
        last_record: 'Ostatni rekord',
        first_record: 'Pierwszy rekord',
      },
      desc: 'DESC',
      asc: 'ASC',
      inputVar: 'Zmienna wejściowa',
      limit: 'Pierwsze N',
      orderBy: 'Sortuj według',
      filterConditionComparisonOperator: 'Operator porównania warunków filtru',
      filterConditionKey: 'Klucz warunku filtra',
      filterCondition: 'Stan filtra',
      filterConditionComparisonValue: 'Wartość warunku filtru',
      selectVariableKeyPlaceholder: 'Wybierz klucz zmiennej podrzędnej',
      extractsCondition: 'Wyodrębnij element N',
    },
    agent: {
      strategy: {
        configureTip: 'Skonfiguruj strategię agentyczną.',
        selectTip: 'Wybierz strategię agentyczną',
        searchPlaceholder: 'Strategia agentyczna wyszukiwania',
        configureTipDesc: 'Po skonfigurowaniu strategii agentycznej ten węzeł automatycznie załaduje pozostałe konfiguracje. Strategia będzie miała wpływ na mechanizm wieloetapowego rozumowania narzędziowego.',
        shortLabel: 'Strategia',
        label: 'Strategia agentyczna',
        tooltip: 'Różne strategie agentowe określają, w jaki sposób system planuje i wykonuje wieloetapowe wywołania narzędzi',
      },
      pluginInstaller: {
        installing: 'Instalowanie',
        install: 'Instalować',
      },
      modelNotInMarketplace: {
        desc: 'Ten model jest instalowany z repozytorium lokalnego lub GitHub. Proszę użyć po instalacji.',
        manageInPlugins: 'Zarządzanie we wtyczkach',
        title: 'Model nie jest zainstalowany',
      },
      modelNotSupport: {
        desc: 'Zainstalowana wersja wtyczki nie zapewnia tego modelu.',
        descForVersionSwitch: 'Zainstalowana wersja wtyczki nie zapewnia tego modelu. Kliknij, aby zmienić wersję.',
        title: 'Nieobsługiwany model',
      },
      modelSelectorTooltips: {
        deprecated: 'Ten model jest przestarzały',
      },
      outputVars: {
        files: {
          title: 'Pliki generowane przez agenta',
          type: 'Rodzaj wsparcia. Teraz obsługuje tylko obraz',
          transfer_method: 'Metoda transferu. Wartość to remote_url lub local_file',
          upload_file_id: 'Identyfikator przesyłanego pliku',
          url: 'Adres URL obrazu',
        },
        json: 'Kod JSON wygenerowany przez agenta',
        text: 'Treści generowane przez agentów',
      },
      checkList: {
        strategyNotSelected: 'Nie wybrano strategii',
      },
      installPlugin: {
        install: 'Instalować',
        changelog: 'Dziennik zmian',
        desc: 'Informacje o instalacji następującej wtyczki',
        cancel: 'Anuluj',
        title: 'Zainstaluj wtyczkę',
      },
      notAuthorized: 'Nieautoryzowany',
      pluginNotInstalledDesc: 'Ta wtyczka jest instalowana z GitHub. Przejdź do Wtyczki, aby ponownie zainstalować',
      toolNotAuthorizedTooltip: '{{narzędzie}} Nieautoryzowany',
      linkToPlugin: 'Link do wtyczek',
      maxIterations: 'Maksymalna liczba iteracji',
      strategyNotFoundDesc: 'Zainstalowana wersja wtyczki nie zapewnia tej strategii.',
      strategyNotInstallTooltip: '{{strategy}} nie jest zainstalowany',
      modelNotSelected: 'Nie wybrano modelu',
      pluginNotFoundDesc: 'Ta wtyczka jest instalowana z GitHub. Przejdź do Wtyczki, aby ponownie zainstalować',
      tools: 'Narzędzia',
      unsupportedStrategy: 'Nieobsługiwana strategia',
      configureModel: 'Konfiguruj model',
      toolbox: 'skrzynka z narzędziami',
      modelNotInstallTooltip: 'Ten model nie jest zainstalowany',
      strategyNotFoundDescAndSwitchVersion: 'Zainstalowana wersja wtyczki nie zapewnia tej strategii. Kliknij, aby zmienić wersję.',
      toolNotInstallTooltip: '{{tool}} nie jest zainstalowany',
      pluginNotInstalled: 'Ta wtyczka nie jest zainstalowana',
      learnMore: 'Dowiedz się więcej',
      strategyNotSet: 'Nie ustawiono strategii agentalnej',
      model: 'model',
    },
  },
  tracing: {
    stopBy: 'Zatrzymane przez {{user}}',
  },
  variableReference: {
    conversationVars: 'Zmienne konwersacji',
    assignedVarsDescription: 'Przypisane zmienne muszą być zmiennymi zapisywalnymi, takimi jak',
    noVarsForOperation: 'Nie ma dostępnych zmiennych do przypisania do wybranej operacji.',
    noAssignedVars: 'Brak dostępnych przypisanych zmiennych',
    noAvailableVars: 'Brak dostępnych zmiennych',
  },
}

export default translation
