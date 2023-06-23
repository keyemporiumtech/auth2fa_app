# Changelog


## 7.0.0 - XX/06/2023

> Versione che

### lib
- kit@2.6.0
- kit-ionic@1.1.0
- rest@3.5.0
- ngx-charts@1.1.1

### modules
- 

### changes

- `[feature]` **script**: Pulizia di script non usati
- `[feature]` **shared**: Adeguamento dei componenti `input-radio` e `input-checkbox` per la rimozioni di ion-label come da warning a runtime
- `[feature]` **assets**: Sostituito il css globale `float-elements` con un aggiornamento che rimuove le pseudo-classi
- `[feature]` **lib**: Aggiornamento libreria `kit-ionic@1.1.0` con rimozione di native file e silenziamento del modulo KiFileManager
- `[feature]` **lib**: Adeguamento componenti per la libreria `kit@2.6.0`
  - Adeguemento `progress-bar.component`
  - Aggiunta `progress-circle.component`
  - Adeguamento wiki
- `[update]` **config**: Risoluzione dipendenze a vulnerabilità
  - Aggiornamento della libreria `@ionic/angular@7`
  - Aggiornamento della libreria `rxjs@7`
  - Aggiornamento della libreria `@capacitor/app@5.0.3`
  - Aggiunta delle librerie 
    - `@capacitor/camera@^5.0.4` 
    - `@capacitor/core@5.0.5` 
    - `@capacitor/filesystem@^5.0.4` 
    - `@capacitor/haptics@5.0.4` 
    - `@capacitor/keyboard@5.0.4` 
    - `@capacitor/preferences@^5.0.4` 
    - `@capacitor/status-bar@5.0.4`
  - Rimozione delle librerie 
    - `@ionic-native/core` 
    - `@ionic-native/file` 
    - `@ionic-native/native-audio`
- `[update]` **config**: Aggiornamento dei moduli e librerie da `modulare_web@11.0.0`
  - Aggiornamento librerie
    - `kit@2.6.0`    
    - `rest@3.5.0`
    - `ngx-charts@1.1.1`

## 6.0.0 - 27/04/2023

> Aggiornamento alla versione 15 di Angular e integrazione prettier ed eslint

### lib

- kit@2.1.0
- rest@3.1.0

### modules

- api@2.1.0
- authentication@3.1.1
- calendar@1.1.0
- communication@2.1.0
- localesystem@2.1.0
- util-currency@1.1.0
- shop-warehouse@2.0.0
- shop-payment@2.0.0
- resources@2.1.0

### changes

- `[fix]` **modules** Aggiornata la libreria `authentication@3.1.1` con fix di alcune chiamate rest errate
- `[feature]` **modules** Aggiornata la libreria `resources@2.1.0` con modifica di `attachment.utility`
- `[feature]` **modules** Aggiornata la libreria `localesystem@2.1.0` con miglioramento del componente `app-languages`
- `[feature]` **shared** Modifica al componente `input-select` con aggiunta del metodo `setOnlySelectedOption`
- `[fix]` **shared** Fix controllo dell'esistenza banner in `cookie-choice`
- `[feature]` **environment** Aggiunti le valorizzazioni dei contatti di riferimento per la ricezione di email dal modulo communication
- `[feature]` **modules** Aggiornata la libreria `communication@2.1.0` con l'aggiunta del servizio di invio mail
- `[fix]` **script** Modificati gli script di create per la gestione dei moduli aggiuntivi
- `[feature]` **assets** Aggiunte label comuni in i18n/application
- `[feature]` **lib** Aggiornata la libreria `kit@2.1.0` per fix su `FileService` e aggiunta della pipe `showcurrency`
- `[feature]` **lib** Aggiornata la libreria `rest@3.1.0` per Aggiunte le funzioni `getQueryParametersByArray` e `getQueryParametersByMap` in `RequestUtility`
- `[feature]` **module** Aggiornato il modulo `api@2.1.0` per l'integrazione dei campi `grouprelation_cod` e `grouprelation_codgroup`
- `[fix]` **module** Aggiornato il modulo `calendar@1.1.0` per fix su chiamata a service e aggiunta dei campi DateModel mancanti
- `[feature]` **module** Aggiornato il modulo `util-currency@1.1.0` per integrazione del setup currency nel modulo
- `[update]` **module** Aggiornato il modulo `shop-warehouse@2.0.0` per modifica di `flgInnerToken` a false e aggiunta di price in input a `PocketService`
- `[feature]` **module** Aggiornato il modulo `shop-payment@2.0.0` per modifica di `flgInnerToken` a false e aggiornamento api e modelli
- `[fix]` **shared** Aggiunta la possibilità in `tableList` di leggere i campi di oggetti figli di un modello (_esempio price.total_)

> Versione
## 5.0.0 - 14/03/2022

> Versione che aggiunge il componente `ddc-init-chart` per la visualizzazione di grafici.
> Inoltre vengono introdotti i moduli `calendar`, `util-currency`, `shop-warehouse` e `shop-payment`.

### lib

- kit@2.0.0

### modules

- authentication@3.1.0
- calendar@1.0.0
- util-currency@1.0.0
- shop-warehouse@1.0.0
- shop-payment@1.0.0


### changes

- `[update]` **lib** Aggiornata la libreria `kit@2.0.0` con l'aggiunta del modulo `charts`
- `[update]` **package** Aggiunta della libreria `@swimlane/ngx-charts@12.1.0` nelle dependencies e nelle peer
- `[update]` **package** Aggiunta della libreria `@angular/cdk@7.3.7` nelle dev dependencies
- `[update]` **app** Aggiunta l'import di `NgxChartsModule` in `app.module`
- `[feature]` **module** Aggiornato il modulo `authentication@3.1.0` con l'aggiunta dell'enumaration `EnumCatType`
- `[feature]` **module** Aggiunto il modulo `calendar@1.0.0` per la gestione di eventi
- `[feature]` **module** Aggiunto il modulo `util-currency@1.0.0` per la gestione di valute
- `[feature]` **module** Aggiunto il modulo `shop-warehouse@1.0.0` per la gestione di magazzino prodotti e prenotazioni
- `[feature]` **module** Aggiunto il modulo `shop-payment@1.0.0` per la gestione di bilanci e pagamenti

## 4.0.0 - 20/01/2022

> Versione che integra gli aggiornamenti del servizio `rest@3.0.0` con l'aggiunta dell'api di cambio profilo.
> Inoltre è stata gestita la memorizzazione della foto profilo dell'utente loggato
> Inoltre è stata aggiunta la gestione di entity legate a gruppi.

### lib

- rest@3.0.0
### modules

- api@2.0.0
- app-keyemporium@1.0.0
- authentication@3.0.0
- communication@2.0.0
- localesystemn@2.0.0
- resources@2.0.0
- validator-iban@1.2.0
- validator-creditcard@1.2.0
- validator-password@1.1.0
- work-company@2.0.0 
- work-cv@2.0.0 
- work-profile@2.0.0

### changes

- `[update]` **packages** downgrade della versione `barrelsby` dalla 2.2.0 alla 1.0.2
- `[BREAKING CHANGE]` Adeguamento di tutti i services per il passaggio dei parametri per il salvataggio e la selezione di entity in `group`
  - api
  - app-keyemporium
  - authentication
  - communication
  - localesystem
  - resources
  - work-company
  - work-cv
  - work-profile
- `[BREAKING CHANGE]` Spostamento dell'entity `group` dal modulo `authentication` in `api`
- `[update]` **modules** Aggiornamento del modulo `api@2.0.0` per la gestione dei parametri da passare per la selezione e il salvataggio di una entity in `group`
- `[update]` **modules** Aggiornamento del modulo `authentication@3.0.0` per la gestione della foto profilo e dal cambio profilo
- `[update]` **lib** Aggiornamento della libreria `rest@3.0.0` per l'aggiunta della gestione del cambio profilo utente loggato e fix del modulo `SocialModule`
- `[feature]` **modules** Aggiornato il modulo `validator-creditcard` con l'aggiunta e la gestione del parametro di input `extControl` per il passaggio del form control dall'esterno
- `[feature]` **modules** Aggiornato il modulo `validator-iban` con l'aggiunta e la gestione del parametro di input `extControl` per il passaggio del form control dall'esterno
- `[feature]` **modules** Aggiornato il modulo `validator-password` con l'aggiunta e la gestione del parametro di input `extControl` per il passaggio del form control dall'esterno
- `[feature]` **i18n** Aggiunta la label `APP.BUTTON.LOGIN` nei translator di application


## 3.1.0 - 15/11/2021
> Versione che aggiunge il validatore di password interfacciandosi con il modulo rest `validator_password`.
> Aggiorna l'uso dei componenti `input-creditcard` e `input-iban` per renderli compliant con l'uso dei form.
> Inoltre è stato introdotto il concetto di debounce usato per validatori asincroni, observable e componenti di autocomplete.
> Adesso è possibile abilitare la visualizzazione del banner dei cookie dall'environment

### lib

- kit@1.2.0
- rest@2.1.0

### modules

- validator-iban@1.1.0
- validator-creditcard@1.1.0
- validator-password@1.0.0

### changes

- `[feature]` **shared** Aggiornato il componente `address-search` con l'uso del debounce
- `[feature]` **shared** Aggiornato il componente `input-autocomplete` con l'uso del debounce
- `[feature]` **lib** Aggiornato la libreria `rest@2.1.0` con l'aggiunta delle utility per la trasformazione di validatori asincroni e oblservable in debounce basati su input
- `[feature]` **modules** Aggiornato il modulo `validator-creditcard` con l'adeguamento dell'uso del componente `input-creditcard` nei form
- `[feature]` **modules** Aggiornato il modulo `validator-iban` con l'adeguamento dell'uso del componente `input-iban` nei form
- `[feature]` **modules** Aggiunta del nuovo modulo `validator-password` per la validazione asincrona di password
- `[feature]` **wiki** Aggiunta del nuovo modulo `validator-password` nella wiki
- `[script]` Aggiunto script `wiki.sh` per l'aggiornamento della wiki
- `[feature]` Aggiunta in `app.component` la gestione dell'abilitazione dei banner cookie
- `[feature]` **environment** Aggiunta la proprietà `enable.cookie` per l'abilitazione dei cookie
- `[feature]` **wiki** Aggiunto esempio per `DdcCssVarDirective`
- `[feature]` **lib** Aggiornato la libreria `kit@1.2.0` con l'aggiunta dell'api per lo status dei cookie

## 3.0.0 - 28/10/2021
> Versione che aggiorna il template boostrap sostituendo i colori fissi con quelli dinamici.
> Inoltre introduce una gestione avanzata dei cookie mostrando una pagina all'utente per la scelta dei cookie da accettare.

### lib

- kit@1.1.0

### modules

- api@1.1.0
### changes

- `[feature]` **modules** Aggiornata la libreria `api@1.1.0` con l'integrazione del servizio cookiemanager
- `[feature]` **template** Modifica di `application.scss` con l'aggiunta delle classi css `card-link` per i vari tipi di color
- `[feature]` **tutorial** aggiunto il tutorial `menu.md` per documentare l'uso dei menù
- `[fix]` **environments** modificato il path relativo dei file di policy per Privacy, Condition e Cookie
- `[feature]` **scripts** aggiunto lo script `assets.sh`
- `[feature]` `application.scss` aggiunto il cursor point ai tag html a
- `[BREAKING CHANGE]` Gestione avanzata dei cookie
  - creazione del componente di scelta cookie `cookie-choice.component` in shared
  - creazione della pagine `cookies.page` in shared  
  - aggiunta in i18n delle label per la pagina di gestione dei cookie
  - `commons-pages-routing` aggiunto il route alla pagina Gestione dei cookie  
  - `footer-public.component` aggiunto il link a Gestione dei cookie  
  - `banner-cookie.component` aggiunta la gestione dei pulsanti "Personalizza", "Accetta selezionati", "Accetta tutti" e "Rifiuta". Aggiunta del componente di scelta cookie con apertura automatica in modale
  - aggiunta a `template/components.ts` delle classi di default per i pulsanti di edit e refuse
  - aggiunta in shared delle classi 
    - `EnumCookieNavigation`
    - `EnumCookieOperation`
    - `EnumCookieType`
    - `CookieChoiceInterface`
    - `CookieUtils`
  - aggiunta in `src/config/cookie` delle costanti editabili e personalizzabili dall'applicazione nei file
    - `Cookies`
    - `CookieInfo`
- `[feature]` **lib** Aggiornata la libreria `kit@1.1.0`
- `[feature]` **wiki** Aggiunta del layout per il componente `ion-toggle`
- `[feature]` **projects** Aggiunta delle configurazioni per il progetto `keyemporium`
- `[fix]` **scripts** Fix dello script `new-version-project.sh`
- `[feature]` **template** Modifica di `variable.scss` con l'aggiunta delle variabili
  - text2
  - mark
  - shadow
  - shadow-info
  - shadow-success
  - shadow-danger
  - background2
  - background3
  - border2
## 2.2.0 - 01/10/2021

> Versione che aggiunge il progetto `keyemporium` e corregge gli script di creazione e copia dei files per un nuovo progetto.

### changes

- `[feature]` **projects** Aggiunta del progetto `keyemporium`
- `[fix]` **scripts** Corretta la dicitura di alcune domande nello script `set-properties.sh`
- `[fix]` **scripts** Fix dei parametri usati per gli environment negli script `deploy-server.sh`, `git-ftp-start.sh` e `git-ftp-push.sh`
- `[feature]` **scripts** Aggiunta la lettura dei path di production e test in  `set-props-config.sh`
- `[fix]` **scripts** Anticipata la creazione delle properties prima del git init in `_smart/create.sh`
- `[fix]` **modules** Fix degli script `copy.sh` in  `authentication` e `validator-iban`
- `[feature]` **configs** Aggiunto lo _BIN di deploy da modulare_web in `_BIN/deploy`
## 2.1.0 - 30/09/2021

> Versione che aggiunge la versione del template usato da un progetto nel footer dell'home page locale.
> Inoltre corregge gli script di versions per il settaggio della versione corretta nel file `versioning.json` delle applicazioni modulare e di progetto

### changes

- `[fix]` **scripts**: Fix degli script di `versions` per il corretto settaggio delle versioni
- `[feature]` **scripts**: Aggiunta della proprietà `template` al file `versioning.json` e adeguamento degli script di versions
- `[feature]` **environment**: Aggiunta della proprietà `template` letta dal file `versioning.json` negli environments
- `[feature]` **environment**: Aggiunta della proprietà `template` e `version` al componente `footer-public.component`
- `[feature]` **component**: Aggiunta della proprietà `template` e `version` al componente `footer-public.component`
- `[feature]` **component**: Cambio title in `index.html`
## 2.0.0 - 29/09/2021

> Versione che introduce la gestione dell'oauth login con google e facebook rimuovendo la libreria `angularx-social-login` e con l'introduzione della libreria `@ddc/oauth-social`

Rimozione della libreria `angularx-social-login`
```
npm uninstall angularx-social-login

```

### lib

- oauth-social@1.0.0 (*nuovo*)
- rest@2.0.0

### modules

- authentication@2.0.0

### changes

- `[feature]` **lib**: Aggiunta del modulo `oauth-social` e della libreria `@ddc/oauth-social`
- `[BREAKING CHANGE]` **rest**: Adeguamento alla libreria `rest@2.0.0`
- `[BREAKING CHANGE]` **package**: Rimozione della libreria `angularx-social-login`
- `[fix]` **script**: Fix dello script smart `4-update-versioning.sh` per la rimozione della ridondanza degli script di libreria 
- `[feature]` **script**: Aggiunta dello script di libreria `oauth-social.sh`
- `[BREAKING CHANGE]` **module**: Aggiornamento del modulo `authentication@2.0.0`
- `[BREAKING CHANGE]` Corretti gli import relativi alle librerie kit e rest
- `[BREAKING CHANGE]` Adeguamento dello script di configurazione `_BIN/config_environment.php` alla lettura dei dati di autenticazione google e facebook

## 1.1.0 - 21/09/2021

> Versione che introduce la gestione dell'oauth login con google e facebook sfruttando la libreria `angularx-social-login`
### Package
Installare le libreria `angularx-social-login`
```
npm i angularx-social-login@2.2.1 --save

```

- `[fix]` **script**: Fix proxy config per protocollo https
- `[feature]` **package**: Aggiunta della libreria `angularx-social-login@2.2.1`
- `[feature]` **package**: Aggiunta degli script di proxying su protocollo https
- `[feature]` **rest**: Aggiornata la libreria `rest@1.1.0`
- `[feature]` **angular**: Cambiato il `buildOptimizer` a false per evitare problemi di compilazione con pdfjs
- `[feature]` **script**: Aggiunto lo script `release.sh` nella root di progetto


## X.y.z - DD/MM/YYYY

- `[fix]` patch z
- `[feature]` minor y
- `[update]` or `[BREAKING CHANGE]` major X
