"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const transaction_service_1 = require('./transaction.service');
let DashboardComponent = class DashboardComponent {
    constructor(router, transactionService) {
        this.router = router;
        this.transactionService = transactionService;
        this.transactions = [];
    }
    ngOnInit() {
        this.transactionService.getTransactions().then(transactions => this.transactions = transactions.slice(0, 1));
    }
    goToDetail(transaction) {
        let link = ['/detail', transaction.id];
        this.router.navigate(link);
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: 'includes/dashboard.component.html'
    }), 
    __metadata('design:paramtypes', [router_1.Router, transaction_service_1.TransactionService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map