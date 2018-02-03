"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My first Doc",
                description: "Sample Data",
                file_url: "http://google.com",
                updated_at: "2/1/2018",
                image_url: "https://media.licdn.com/mpr/mpr/AAIA_wDGAAAAAQAAAAAAAAmaAAAAJDZkMDI3MzNjLWEwY2UtNDBkZC1iMjFkLWI1MzFjNWQ1Zjk2YQ.jpg"
            },
            {
                title: "My second Doc",
                description: "Sample Data",
                file_url: "http://google.com",
                updated_at: "2/1/2018",
                image_url: "https://media.licdn.com/mpr/mpr/AAIA_wDGAAAAAQAAAAAAAAmaAAAAJDZkMDI3MzNjLWEwY2UtNDBkZC1iMjFkLWI1MzFjNWQ1Zjk2YQ.jpg"
            },
            {
                title: "My last Doc",
                description: "Sample Data",
                file_url: "http://google.com",
                updated_at: "2/1/2018",
                image_url: "https://media.licdn.com/mpr/mpr/AAIA_wDGAAAAAQAAAAAAAAmaAAAAJDZkMDI3MzNjLWEwY2UtNDBkZC1iMjFkLWI1MzFjNWQ1Zjk2YQ.jpg"
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.css']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map