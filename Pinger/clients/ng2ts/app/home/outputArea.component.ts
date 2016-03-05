﻿// ReSharper disable InconsistentNaming

import {Component} from "angular2/core";

@Component({
    selector: "output-area",
    template: `
        <div class="row">
            <pre class="col-md-7 col-md-offset-2 scrollableMessageArea">
                <div *ngFor="#message of _messages">{{ message }}</div>
            </pre>
            <div class="col-md-1">
                <button type="button" id="btnClear" class=" btn btn-sm btn-danger" (click)="onClear()">
                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                </button>
            </div>
        </div>`
})
export class OutputAreaComponent {
    private _messages: string[] = [];
    addMessage(message: string) {
        this._messages.push(message);
    }
    onClear() {
        this._messages = [];
    }
}
