webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/album/album.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid\n  [data]=\"view\"\n  [selectable]=\"true\"\n  [sortable]=\"true\"\n  [sort]=\"sort\"\n  (sortChange)=\"sortChange($event)\"\n  [pageSize]=\"pageSize\"\n  [skip]=\"skip\"\n  [pageable]=\"true\"\n  (pageChange)=\"pageChange($event)\"\n  (detailCollapse)=\"pauseTrack()\"\n>\n  <kendo-grid-column field=\"artworkUrl60\" title=\" \" width=\"95\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      <img src=\"{{ dataItem.artworkUrl60 }}\">\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-column field=\"collectionName\" title=\"Album Title\"></kendo-grid-column>\n  <kendo-grid-column field=\"releaseDate\" title=\"Release Date\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      <p>{{ dataItem.releaseDate | date :'dd-MM-yyyy' }}</p>\n    </ng-template>\n  </kendo-grid-column>\n  <div *kendoGridDetailTemplate=\"let dataItem\">\n    <app-track [collectionId]=\"dataItem.collectionId\" (onPlayTrack)=\"playTrack($event)\"></app-track>\n  </div>\n</kendo-grid>\n"

/***/ }),

/***/ "../../../../../src/app/album/album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__ = __webpack_require__("../../../../../src/app/shared/itunes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_player_service__ = __webpack_require__("../../../../../src/app/shared/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumComponent = (function () {
    function AlbumComponent(itunesService, playerService) {
        this.itunesService = itunesService;
        this.playerService = playerService;
        this._artistId = 0;
        // controls the current grid sort state
        this.sort = [];
        // controls grid paging settings
        this.pageSize = 5;
        this.skip = 0;
    }
    Object.defineProperty(AlbumComponent.prototype, "artistId", {
        get: function () { return this._artistId; },
        set: function (artistId) {
            this._artistId = artistId;
            // get the albums for this artist
            this.getAlbums();
        },
        enumerable: true,
        configurable: true
    });
    AlbumComponent.prototype.getAlbums = function () {
        var _this = this;
        this.itunesService.getAlbums(this.artistId).then(function (results) {
            _this.view = {
                data: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["d" /* orderBy */])(results, _this.sort).slice(_this.skip, _this.skip + _this.pageSize),
                total: results.length
            };
        });
    };
    // fires when the sort is changed on the grid
    AlbumComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.getAlbums();
    };
    // fires when the user changes pages in the grid
    AlbumComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.getAlbums();
    };
    // pauses the currently playing track when the row is collapsed
    AlbumComponent.prototype.pauseTrack = function () {
        this.playerService.pauseTrack();
    };
    return AlbumComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], AlbumComponent.prototype, "artistId", null);
AlbumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-album',
        template: __webpack_require__("../../../../../src/app/album/album.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_player_service__["a" /* PlayerService */]) === "function" && _b || Object])
], AlbumComponent);

var _a, _b;
//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"vertical-align: middle; padding-bottom: 10px\">\n    <img src=\"assets/img/headphones.png\" style=\"max-width: 45px; margin: 5px; float: left\">\n    <h1 style=\"padding-top: 8px\">MultiCast Music</h1>\n  </div>\n  <!-- Artist Component -->\n  <app-artist></app-artist>\n  <!-- Audio Player Component -->\n  <app-player></app-player>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_player_service__ = __webpack_require__("../../../../../src/app/shared/player.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_player_service__["a" /* PlayerService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artist_artist_component__ = __webpack_require__("../../../../../src/app/artist/artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__album_album_component__ = __webpack_require__("../../../../../src/app/album/album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__track_track_component__ = __webpack_require__("../../../../../src/app/track/track.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__player_player_component__ = __webpack_require__("../../../../../src/app/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__track_track_control_track_control_component__ = __webpack_require__("../../../../../src/app/track/track-control/track-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__track_track_visualization_track_visualization_component__ = __webpack_require__("../../../../../src/app/track/track-visualization/track-visualization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_charts__ = __webpack_require__("../../../../@progress/kendo-angular-charts/dist/es/main.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__artist_artist_component__["a" /* ArtistComponent */],
            __WEBPACK_IMPORTED_MODULE_5__album_album_component__["a" /* AlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_8__track_track_component__["a" /* TrackComponent */],
            __WEBPACK_IMPORTED_MODULE_9__player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_10__track_track_control_track_control_component__["a" /* TrackControlComponent */],
            __WEBPACK_IMPORTED_MODULE_11__track_track_visualization_track_visualization_component__["a" /* TrackVisualizationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            // include the JSONP module so it can be used in the application
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__["a" /* GridModule */],
            __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_charts__["a" /* SparklineModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/artist/artist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <input type=\"search\" #searchBox (keyup)=\"search(searchBox.value)\" class=\"form-control input-lg well\"\n           placeholder=\"Busque pelo seu artista favorito...\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-4\" *ngIf=\"searchResults.length > 0\">\n    <h3>Search Results</h3>\n    <p *ngFor=\"let artist of searchResults\">\n      <a id=\"{{ artist.artistId }}\" href=\"#\" (click)=\"getAlbums(artist.artistId, artist.artistName)\">{{ artist.artistName }}</a>\n    </p>\n  </div>\n  <div class=\"col-xs-12\" [ngClass]=\"{'col-sm-8': searchResults.length > 0 }\">\n    <h3>{{ selectedArtist }}</h3>\n    <!-- App Album Component Goes Here -->\n    <app-album [artistId]=\"artistId\" *ngIf=\"artistId > 0\"></app-album>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artist/artist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist/artist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__ = __webpack_require__("../../../../../src/app/shared/itunes.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistComponent = (function () {
    function ArtistComponent(itunesService) {
        this.itunesService = itunesService;
        this.searchResults = [];
        this.artistId = 0;
    }
    ArtistComponent.prototype.ngOnInit = function () { };
    ArtistComponent.prototype.search = function (searchTerm) {
        var _this = this;
        this.itunesService.search(searchTerm).then(function (results) {
            _this.searchResults = results;
        });
    };
    ArtistComponent.prototype.getAlbums = function (artistId, artistName) {
        this.artistId = artistId;
        this.selectedArtist = artistName;
    };
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-artist',
        template: __webpack_require__("../../../../../src/app/artist/artist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artist/artist.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */]) === "function" && _a || Object])
], ArtistComponent);

var _a;
//# sourceMappingURL=artist.component.js.map

/***/ }),

/***/ "../../../../../src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<audio #player=\"\" style=\"display: none\" (ended)=\"playerEnded()\">\n"

/***/ }),

/***/ "../../../../../src/app/player/player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_player_service__ = __webpack_require__("../../../../../src/app/shared/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = (function () {
    function PlayerComponent(playerService) {
        var _this = this;
        this.playerService = playerService;
        playerService.playTrack$.subscribe(function (previewUrl) {
            _this.playTrack(previewUrl);
        });
        playerService.pauseTrack$.subscribe(function () {
            _this.pauseTrack();
        });
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.player = this.playerRef.nativeElement;
    };
    PlayerComponent.prototype.playTrack = function (previewUrl) {
        this.player.src = previewUrl;
        this.player.play();
    };
    PlayerComponent.prototype.pauseTrack = function () {
        this.player.pause();
    };
    PlayerComponent.prototype.playerEnded = function () {
        this.playerService.trackEnded();
    };
    return PlayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ViewChild */])('player'),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "playerRef", void 0);
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__("../../../../../src/app/player/player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player/player.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], PlayerComponent);

var _a;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/itunes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItunesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API = {
    SEARCH: 'https://itunes.apple.com/search?',
    LOOKUP: 'https://itunes.apple.com/lookup?'
};
var ItunesService = (function () {
    function ItunesService(jsonp) {
        this.jsonp = jsonp;
        this.searchTerm = "";
        this._albums = [];
        this._artistId = 0;
    }
    ItunesService.prototype.search = function (searchTerm) {
        return this.jsonp.get(API.SEARCH + "callback=JSONP_CALLBACK&media=music&country=US&entity=musicArtist&term=" + searchTerm)
            .toPromise()
            .then(function (data) { return data.json().results; })
            .catch(this.handleError);
    };
    ItunesService.prototype.getAlbums = function (artistId) {
        var _this = this;
        if (artistId == this._artistId)
            return new Promise(function (resolve) { return resolve(_this._albums); });
        this._artistId = artistId;
        return this.jsonp.get(API.LOOKUP + "callback=JSONP_CALLBACK&entity=album&id=" + artistId)
            .toPromise()
            .then(function (data) {
            _this._albums = data.json().results.filter(function (results) {
                return results.wrapperType == 'collection';
            });
            return _this._albums;
        })
            .catch(this.handleError);
    };
    ItunesService.prototype.getTracks = function (albumId) {
        return this.jsonp.get(API.LOOKUP + "callback=JSONP_CALLBACK&entity=song&id=" + albumId)
            .toPromise()
            .then(function (data) {
            return data.json().results.filter(function (result) {
                return result.wrapperType == 'track';
            });
        })
            .catch(this.handleError);
    };
    ItunesService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.message || error);
    };
    return ItunesService;
}());
ItunesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]) === "function" && _a || Object])
], ItunesService);

var _a;
//# sourceMappingURL=itunes.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/track.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Track; });
var Track = (function () {
    function Track(trackId, trackCensoredName, previewUrl) {
        this.trackId = trackId;
        this.trackCensoredName = trackCensoredName;
        this.previewUrl = previewUrl;
    }
    return Track;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ "../../../../../src/app/shared/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlayerService = (function () {
    function PlayerService() {
        this.playTrackSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.pauseTrackSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.trackEndedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.frequencyDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.playTrack$ = this.playTrackSource.asObservable();
        this.pauseTrack$ = this.pauseTrackSource.asObservable();
        this.trackEnded$ = this.trackEndedSource.asObservable();
        this.frequencyData$ = this.frequencyDataSource.asObservable();
    }
    PlayerService.prototype.playTrack = function (track) {
        this.playTrackSource.next(track);
    };
    PlayerService.prototype.pauseTrack = function () {
        this.pauseTrackSource.next();
    };
    PlayerService.prototype.trackEnded = function () {
        this.trackEndedSource.next();
    };
    PlayerService.prototype.frequencyData = function (data) {
        this.frequencyDataSource.next(Array.apply([], data));
    };
    return PlayerService;
}());
PlayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])()
], PlayerService);

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "../../../../../src/app/track/track-control/track-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"!isPlaying\" class=\"glyphicon glyphicon-play\" aria-hidden=\"true\" (click)=\"playTrack()\"></div>\n  <span *ngIf=\"isPlaying\" class=\"glyphicon glyphicon-pause\" aria-hidden=\"true\" (click)=\"pauseTrack()\"></span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/track/track-control/track-control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/track/track-control/track-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_player_service__ = __webpack_require__("../../../../../src/app/shared/player.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackControlComponent = (function () {
    function TrackControlComponent(playerService) {
        var _this = this;
        this.playerService = playerService;
        this.isPlaying = false;
        this.playSub = playerService.playTrack$.subscribe(function (track) {
            _this.isPlaying = false;
        });
        this.endedSub = playerService.trackEnded$.subscribe(function () {
            _this.isPlaying = false;
        });
    }
    TrackControlComponent.prototype.ngOnInit = function () {
    };
    TrackControlComponent.prototype.ngOnDestroy = function () {
        // clean up any subscriptions we aren't using anymore
        this.playSub.unsubscribe();
        this.endedSub.unsubscribe();
    };
    TrackControlComponent.prototype.playTrack = function () {
        this.playerService.playTrack(this.track.previewUrl);
        this.isPlaying = true;
    };
    TrackControlComponent.prototype.pauseTrack = function () {
        this.playerService.pauseTrack();
        this.isPlaying = false;
    };
    return TrackControlComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], TrackControlComponent.prototype, "track", void 0);
TrackControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-track-control',
        template: __webpack_require__("../../../../../src/app/track/track-control/track-control.component.html"),
        styles: [__webpack_require__("../../../../../src/app/track/track-control/track-control.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], TrackControlComponent);

var _a;
//# sourceMappingURL=track-control.component.js.map

/***/ }),

/***/ "../../../../../src/app/track/track-visualization/track-visualization.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-sparkline\n  [data]=\"frequencyData\"\n  type=\"area\"\n  renderAs=\"canvas\"\n  [chartArea]=\"{ background: 'transparent' }\"\n  [valueAxis]=\"{ max: '250' }\"\n  [transitions]=\"false\">\n</kendo-sparkline>\n\n<!--<kendo-chart class=\"visualizer\" renderAs=\"canvas\" #visualiser [transitions]=\"false\">-->\n    <!--<kendo-chart-category-axis>-->\n        <!--<kendo-chart-category-axis-item [majorGridLines]=\"{ visible: false }\"></kendo-chart-category-axis-item>-->\n    <!--</kendo-chart-category-axis>-->\n    <!--<kendo-chart-value-axis>-->\n        <!--<kendo-chart-value-axis-item [majorGridLines]=\"{ visible: false }\" [max]=\"250\" [visible]=\"false\"></kendo-chart-value-axis-item>>-->\n    <!--</kendo-chart-value-axis>>-->\n    <!--<kendo-chart-legend visible=\"false\"></kendo-chart-legend>-->\n    <!--<kendo-chart-series-defaults [border]=\"{ width: 0 }\"-->\n                                 <!--[labels]=\"{ visible: false }\"-->\n                                 <!--[overlay]=\"{ gradient: null }\">-->\n    <!--</kendo-chart-series-defaults>-->\n    <!--<kendo-chart-series>-->\n        <!--<kendo-chart-series-item type=\"area\" [data]=\"frequencyData\">-->\n        <!--</kendo-chart-series-item>-->\n    <!--</kendo-chart-series>-->\n<!--</kendo-chart>-->\n"

/***/ }),

/***/ "../../../../../src/app/track/track-visualization/track-visualization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/track/track-visualization/track-visualization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_player_service__ = __webpack_require__("../../../../../src/app/shared/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_track__ = __webpack_require__("../../../../../src/app/shared/model/track.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackVisualizationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackVisualizationComponent = (function () {
    function TrackVisualizationComponent(playerService) {
        var _this = this;
        this.playerService = playerService;
        this.playSub = this.playerService.playTrack$.subscribe(function (track) {
            if (_this.track.trackId == track.trackId) {
                _this.frequencySub = _this.playerService.frequencyData$.subscribe(function (frequencyData) {
                    _this.frequencyData = frequencyData;
                });
            }
            else {
                if (_this.frequencySub) {
                    _this.unsubscribe();
                }
            }
        });
        this.pauseSub = this.playerService.pauseTrack$.subscribe(function () {
            if (_this.frequencySub) {
                _this.unsubscribe();
            }
        });
        this.endedSub = this.playerService.trackEnded$.subscribe(function () {
            if (_this.frequencySub) {
                _this.unsubscribe();
            }
        });
    }
    TrackVisualizationComponent.prototype.unsubscribe = function () {
        this.frequencySub.unsubscribe();
        this.frequencyData = [];
    };
    TrackVisualizationComponent.prototype.ngOnDestroy = function () {
        this.playSub.unsubscribe();
        this.endedSub.unsubscribe();
        this.pauseSub.unsubscribe();
    };
    return TrackVisualizationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_model_track__["a" /* Track */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_model_track__["a" /* Track */]) === "function" && _a || Object)
], TrackVisualizationComponent.prototype, "track", void 0);
TrackVisualizationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-track-visualization',
        template: __webpack_require__("../../../../../src/app/track/track-visualization/track-visualization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/track/track-visualization/track-visualization.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_player_service__["a" /* PlayerService */]) === "function" && _b || Object])
], TrackVisualizationComponent);

var _a, _b;
//# sourceMappingURL=track-visualization.component.js.map

/***/ }),

/***/ "../../../../../src/app/track/track.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid\n  [data]=\"view\"\n  [scrollable]=\"'none'\">\n  <kendo-grid-column width=\"50\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      <app-track-control\n        [track]=\"dataItem\">\n      </app-track-control>\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-column title=\"Track Name\" class=\"track\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      <div class=\"track-container\">\n        <app-track-visualization\n          [track]=\"dataItem\">\n        </app-track-visualization>\n        <span class=\"title\">{{ dataItem.trackCensoredName }}</span>\n      </div>\n    </ng-template>\n  </kendo-grid-column>\n</kendo-grid>\n"

/***/ }),

/***/ "../../../../../src/app/track/track.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/track/track.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__ = __webpack_require__("../../../../../src/app/shared/itunes.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackComponent = (function () {
    function TrackComponent(itunesService) {
        this.itunesService = itunesService;
    }
    Object.defineProperty(TrackComponent.prototype, "collectionId", {
        set: function (collectionId) {
            this.getTracks(collectionId);
        },
        enumerable: true,
        configurable: true
    });
    TrackComponent.prototype.ngOnInit = function () {
    };
    TrackComponent.prototype.getTracks = function (collectionId) {
        var _this = this;
        this.itunesService.getTracks(collectionId).then(function (result) {
            _this.view = result;
        });
    };
    return TrackComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TrackComponent.prototype, "collectionId", null);
TrackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-track',
        template: __webpack_require__("../../../../../src/app/track/track.component.html"),
        styles: [__webpack_require__("../../../../../src/app/track/track.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_itunes_service__["a" /* ItunesService */]) === "function" && _a || Object])
], TrackComponent);

var _a;
//# sourceMappingURL=track.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map