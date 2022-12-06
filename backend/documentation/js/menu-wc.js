'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crud-livros-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-ce31c2d42f96505ef694a54ef75d06725e2b3dcc5e12edd639bd296201143cf42375659260b53f7fca819a2cddb1490d573a41552b78094fb8d3983605211ee4"' : 'data-target="#xs-controllers-links-module-AppModule-ce31c2d42f96505ef694a54ef75d06725e2b3dcc5e12edd639bd296201143cf42375659260b53f7fca819a2cddb1490d573a41552b78094fb8d3983605211ee4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ce31c2d42f96505ef694a54ef75d06725e2b3dcc5e12edd639bd296201143cf42375659260b53f7fca819a2cddb1490d573a41552b78094fb8d3983605211ee4"' :
                                            'id="xs-controllers-links-module-AppModule-ce31c2d42f96505ef694a54ef75d06725e2b3dcc5e12edd639bd296201143cf42375659260b53f7fca819a2cddb1490d573a41552b78094fb8d3983605211ee4"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ce31c2d42f96505ef694a54ef75d06725e2b3dcc5e12edd639bd296201143cf42375659260b53f7fca819a2cddb1490d573a41552b78094fb8d3983605211ee4"' : 'data-target="#xs-injectables-links-module-AppModule-ce31c2d42f96505ef694a54ef75d06725e2b3dcc5e12edd639bd296201143cf42375659260b53f7fca819a2cddb1490d573a41552b78094fb8d3983605211ee4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ce31c2d42f96505ef694a54ef75d06725e2b3dcc5e12edd639bd296201143cf42375659260b53f7fca819a2cddb1490d573a41552b78094fb8d3983605211ee4"' :
                                        'id="xs-injectables-links-module-AppModule-ce31c2d42f96505ef694a54ef75d06725e2b3dcc5e12edd639bd296201143cf42375659260b53f7fca819a2cddb1490d573a41552b78094fb8d3983605211ee4"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LivrosModule.html" data-type="entity-link" >LivrosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LivrosModule-3f652241f5197039a946b10d333f6e63be226f87fce9db2c9982c15f966e158c88cc9088620d010aa6923893307d401ff7c8882907bfb2991b14cfff7f9ffe81"' : 'data-target="#xs-controllers-links-module-LivrosModule-3f652241f5197039a946b10d333f6e63be226f87fce9db2c9982c15f966e158c88cc9088620d010aa6923893307d401ff7c8882907bfb2991b14cfff7f9ffe81"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LivrosModule-3f652241f5197039a946b10d333f6e63be226f87fce9db2c9982c15f966e158c88cc9088620d010aa6923893307d401ff7c8882907bfb2991b14cfff7f9ffe81"' :
                                            'id="xs-controllers-links-module-LivrosModule-3f652241f5197039a946b10d333f6e63be226f87fce9db2c9982c15f966e158c88cc9088620d010aa6923893307d401ff7c8882907bfb2991b14cfff7f9ffe81"' }>
                                            <li class="link">
                                                <a href="controllers/LivrosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivrosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LivrosModule-3f652241f5197039a946b10d333f6e63be226f87fce9db2c9982c15f966e158c88cc9088620d010aa6923893307d401ff7c8882907bfb2991b14cfff7f9ffe81"' : 'data-target="#xs-injectables-links-module-LivrosModule-3f652241f5197039a946b10d333f6e63be226f87fce9db2c9982c15f966e158c88cc9088620d010aa6923893307d401ff7c8882907bfb2991b14cfff7f9ffe81"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LivrosModule-3f652241f5197039a946b10d333f6e63be226f87fce9db2c9982c15f966e158c88cc9088620d010aa6923893307d401ff7c8882907bfb2991b14cfff7f9ffe81"' :
                                        'id="xs-injectables-links-module-LivrosModule-3f652241f5197039a946b10d333f6e63be226f87fce9db2c9982c15f966e158c88cc9088620d010aa6923893307d401ff7c8882907bfb2991b14cfff7f9ffe81"' }>
                                        <li class="link">
                                            <a href="injectables/LivrosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivrosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LivrosController.html" data-type="entity-link" >LivrosController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Livro.html" data-type="entity-link" >Livro</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateLivroDto.html" data-type="entity-link" >CreateLivroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLivroDto.html" data-type="entity-link" >UpdateLivroDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LivrosService.html" data-type="entity-link" >LivrosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});